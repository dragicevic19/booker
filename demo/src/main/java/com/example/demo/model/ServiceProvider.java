package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public abstract class ServiceProvider extends User {

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "loyalty_id", referencedColumnName = "id")
    protected LoyaltyProgram loyaltyProgram;

}
