package com.DevWeb.ClimaAgora.resources;

import com.DevWeb.ClimaAgora.dto.UserDTO;
import com.DevWeb.ClimaAgora.dto.UserInsertDTO;
import com.DevWeb.ClimaAgora.dto.UserUpdateDTO;
import com.DevWeb.ClimaAgora.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/users")
public class UserResource {

    @Autowired
    private UserService service;


    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    @GetMapping
    public ResponseEntity<Page<UserDTO>> findAll(Pageable pageable) {
        Page<UserDTO> list = service.findAllPaged(pageable);
        return ResponseEntity.ok().body(list);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    @GetMapping(value = "/{id}")
    public ResponseEntity<UserDTO> findById(@PathVariable Long id) {
        UserDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @PreAuthorize("hasAnyRole('ROLE_OPERATOR', 'ROLE_ADMIN')")
    @GetMapping(value = "/me")
    public ResponseEntity<UserDTO> findMe() {
        UserDTO dto = service.findMe();
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping
    public ResponseEntity<UserDTO> insert(@RequestBody @Valid UserInsertDTO dto) {
        UserDTO newDto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(newDto.getId()).toUri();
        return ResponseEntity.created(uri).body(newDto);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @PutMapping(value = "/{id}")
    public ResponseEntity<UserDTO> update(@PathVariable Long id, @RequestBody @Valid UserUpdateDTO dto) {
        UserDTO newDto = service.update(id, dto);
        return ResponseEntity.ok().body(newDto);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @GetMapping("/favorites")
    public ResponseEntity<List<String>> getFavorites() {
        List<String> favorites = service.getFavoriteCities();
        return ResponseEntity.ok(favorites);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @PostMapping("/favorites/{city}")
    public ResponseEntity<Void> addFavoriteCity(@PathVariable String city) {
        service.addFavoriteCity(city);
        return ResponseEntity.ok().build();
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @DeleteMapping("/favorites/{city}")
    public ResponseEntity<Void> removeFavorite(@PathVariable String city) {
        service.removeFavoriteCity(city);
        return ResponseEntity.ok().build();
    }

} 
