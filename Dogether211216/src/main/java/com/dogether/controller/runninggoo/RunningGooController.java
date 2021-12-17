package com.dogether.controller.runninggoo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dogether.domain.RunningGooVO;
import com.dogether.service.RunningGooService;

@Controller
public class RunningGooController {
	@Autowired
	RunningGooService runningGooService;
	
	// 런닝구 방 생성 및 정보 입력하기
	@RequestMapping("createRngRoom.do")
	public String CreateRngRoom() {
		
		return "createRngRoom";
	}
	
	// 런닝구 방 리스트 얻어오기
	@RequestMapping("runninggoo.do")
	public String runningGooList(RunningGooVO vo, Model m) {
		List<RunningGooVO> result = runningGooService.getRNRoomList(vo);
		int listCount = runningGooService.getRNRoomCount(vo);
		System.out.println(listCount);
		m.addAttribute("RunningGooList", result);
		m.addAttribute("rnRoomCNT", listCount);
		System.out.println("Model 객체를 통해 전달완료!");
		return "runningGooList";
	}
	
}
