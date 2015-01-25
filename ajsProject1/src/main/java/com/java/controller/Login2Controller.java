package com.java.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/login2")
public class Login2Controller {
	
	@RequestMapping("/layout")
	public String getShianLayoutPage() {
		return "login2/layout";
	}
}
