package com.java.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/login1")
public class Login1Controller {
	
	@RequestMapping("/layout")
	public String getShianLayoutPage() {
		return "login1/layout";
	}
}
