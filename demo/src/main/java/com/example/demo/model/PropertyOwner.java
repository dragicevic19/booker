package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;

@Entity
@NoArgsConstructor
@Getter
@Setter
public abstract class PropertyOwner extends ServiceProvider {

    public PropertyOwner(User user) {
        super(user);
    }
}
