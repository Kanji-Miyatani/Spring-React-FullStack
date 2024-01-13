package com.fullstack.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.backend.entity.Users;
import com.fullstack.backend.services.UsersService;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UsersService usersService;

    @GetMapping()
    public List<Users> getAllUsers(){
        return usersService.getAllUsers();
    }
    @PostMapping()
    public void addUser(@RequestBody Users user){
        usersService.getAllUsers();
    }
}
