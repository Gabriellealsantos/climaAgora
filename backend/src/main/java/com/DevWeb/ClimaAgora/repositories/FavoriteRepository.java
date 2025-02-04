package com.DevWeb.ClimaAgora.repositories;

import com.DevWeb.ClimaAgora.entities.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Long> {
    // Você pode adicionar métodos customizados se necessário
}
