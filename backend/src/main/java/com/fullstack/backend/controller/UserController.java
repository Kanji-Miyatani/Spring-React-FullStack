package com.fullstack.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.fullstack.backend.entity.Users;
import com.fullstack.backend.services.UsersService;

@Controller
public class UserController {
    @Autowired
    private UsersService usersService;
    
    @GetMapping("/users")
    public List<Users> getAllUsers(){
        return usersService.getAllUsers();
    }
}
