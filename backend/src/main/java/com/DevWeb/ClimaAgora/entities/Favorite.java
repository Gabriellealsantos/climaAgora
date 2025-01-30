package com.DevWeb.ClimaAgora.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_favorite")
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String city;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Favorite() {
    }

    public Favorite(Integer id, String city, User user) {
        this.id = id;
        this.city = city;
        this.user = user;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}


