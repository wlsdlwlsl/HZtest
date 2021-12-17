package com.dogether.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dogether.domain.BoardVO;
import com.dogether.service.TestServiceImpl;

@Controller
public class testController {
	
	@Autowired
	public TestServiceImpl testService;
	
	@RequestMapping("test.do")
	public void test(Model m) {
		System.out.println("checkpoint1");
		BoardVO vo = testService.test();
		System.out.println(vo.getBoardID());
		System.out.println(vo.getBoardTitle());
		System.out.println(vo.getMemberID());
		m.addAttribute("serverTime",new Date());
	}
	
	@RequestMapping("{step}.do")
	public String userJoin(@PathVariable String step) {
		return step;
	}
}

