package com.example.demo.service;
import com.example.demo.model.Administrator;
import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.repository.AdministratorRepository;
import com.example.demo.repository.BoatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AdministratorServiceImpl implements AdministratorService{

    @Autowired
    private RoleService roleService;

    @Autowired
    private AdministratorRepository administratorRepository;

    @Override
    public User save(User u) {
        Administrator administrator = new Administrator(u);
        List<Role> roles = roleService.findByName("ROLE_ADMIN");
        administrator.setRoles(roles);

        return this.administratorRepository.save(administrator);
    }
}
