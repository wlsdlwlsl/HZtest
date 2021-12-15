package com.dogether.controller.healthandSleep;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SleepController {
	
	@RequestMapping("/{step}.do")
	public String viewPage(@PathVariable String step) {
		System.out.println("잘받음!!");
		return step;
	}
	
	//디른 시간 추천받기를 눌렀을 때 sleep.jsp로 이동
	@RequestMapping("back.do")
	public String back() {
		return "sleep";
	}
	
}
