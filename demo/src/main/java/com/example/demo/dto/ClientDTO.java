package com.example.demo.dto;

import com.example.demo.model.Client;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ClientDTO {

    private Integer id;
    private String firstName;
    private String lastName;
    private String email;

    public ClientDTO(Client client) {
        id = client.getId();
        firstName = client.getFirstName();
        lastName = client.getLastName();
        email = client.getEmail();
    }
    // slika?
}
