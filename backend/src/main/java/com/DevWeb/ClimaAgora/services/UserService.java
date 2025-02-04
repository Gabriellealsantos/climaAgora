package com.DevWeb.ClimaAgora.services;

import com.DevWeb.ClimaAgora.dto.RoleDTO;
import com.DevWeb.ClimaAgora.dto.UserDTO;
import com.DevWeb.ClimaAgora.dto.UserInsertDTO;
import com.DevWeb.ClimaAgora.dto.UserUpdateDTO;
import com.DevWeb.ClimaAgora.entities.Favorite;
import com.DevWeb.ClimaAgora.entities.Role;
import com.DevWeb.ClimaAgora.entities.User;
import com.DevWeb.ClimaAgora.projections.UserDetailsProjection;
import com.DevWeb.ClimaAgora.repositories.FavoriteRepository;
import com.DevWeb.ClimaAgora.repositories.RoleRepository;
import com.DevWeb.ClimaAgora.repositories.UserRepository;
import com.DevWeb.ClimaAgora.services.exceptions.DatabaseException;
import com.DevWeb.ClimaAgora.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Service
public class UserService implements UserDetailsService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository repository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private AuthService authService;

    @Autowired
    private FavoriteRepository favoriteRepository;

    @Transactional(readOnly = true)
    public Page<UserDTO> findAllPaged(Pageable pageable) {
        Page<User> list = repository.findAll(pageable);
        return list.map(x -> new UserDTO(x));
    }

    @Transactional(readOnly = true)
    public UserDTO findMe() {
        User entity = authService.authenticated();
        return new UserDTO(entity);
    }

    @Transactional(readOnly = true)
    public UserDTO findById(Long id) {
        Optional<User> obj = repository.findById(id);
        User entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
        return new UserDTO(entity);
    }

    @Transactional
    public UserDTO insert(UserInsertDTO dto) {
        User entity = new User();

        copyDtoToEntity(dto, entity);

        entity.setPassword(passwordEncoder.encode(dto.getPassword()));

        entity.getRoles().clear();
        Role role = roleRepository.findByAuthority("ROLE_OPERATOR");
        entity.getRoles().add(role);

        entity = repository.save(entity);
        return new UserDTO(entity);
    }

    @Transactional
    public UserDTO update(Long id, UserUpdateDTO dto) {
        try {
            User entity = repository.getReferenceById(id);
            copyDtoToEntity(dto, entity);
            entity = repository.save(entity);
            return new UserDTO(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Id not found " + id);
        }
    }

    @Transactional(propagation = Propagation.SUPPORTS)
    public void delete(Long id) {
        if (!repository.existsById(id)) {
            throw new ResourceNotFoundException("Recurso não encontrado");
        }
        try {
            repository.deleteById(id);
        } catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Falha de integridade referencial");
        }
    }

    private void copyDtoToEntity(UserDTO dto, User entity) {

        entity.setFirstName(dto.getFirstName());
        entity.setLastName(dto.getLastName());
        entity.setEmail(dto.getEmail());

        entity.getRoles().clear();
        for (RoleDTO roleDto : dto.getRoles()) {
            Role role = roleRepository.getReferenceById(roleDto.getId());
            entity.getRoles().add(role);
        }
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        List<UserDetailsProjection> result = repository.searchUserAndRolesByEmail(username);
        if (result.size() == 0) {
            throw new UsernameNotFoundException("Email not found");
        }

        User user = new User();
        user.setEmail(result.get(0).getUsername());
        user.setPassword(result.get(0).getPassword());
        for (UserDetailsProjection projection : result) {
            user.addRole(new Role(projection.getRoleId(), projection.getAuthority()));
        }

        return user;
    }

    @Transactional
    public void addFavoriteCity(String city) {
        User user = authService.authenticated();

        Favorite favorite = new Favorite();
        favorite.setUser(user);
        favorite.setCity(city);

        favoriteRepository.save(favorite);
    }
}