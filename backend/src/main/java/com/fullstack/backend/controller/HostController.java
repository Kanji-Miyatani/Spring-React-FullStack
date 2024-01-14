package com.fullstack.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;

public class HostController {
     @GetMapping("/**/{path:[^.]*}")
    public String any() {
        return "forward:/index.html";
    }
}
