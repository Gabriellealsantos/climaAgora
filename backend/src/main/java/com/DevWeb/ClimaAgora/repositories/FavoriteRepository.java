package com.DevWeb.ClimaAgora.repositories;

import com.DevWeb.ClimaAgora.entities.Favorite;
import com.DevWeb.ClimaAgora.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Long> {

    List<Favorite> findByUser(User user);

    Optional<Favorite> findByUserAndCity(User user, String city);

}
