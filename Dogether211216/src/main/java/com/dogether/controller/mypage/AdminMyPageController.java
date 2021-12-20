package com.dogether.controller.mypage;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dogether.domain.RunningGooVO;
import com.dogether.service.RunningGooService;

@Controller
public class AdminMyPageController {
	
	@Autowired
	RunningGooService runningGooService;

	// 1번 페이지로 이동
	@RequestMapping("adminpage.do")
	public void admin() {
		System.out.println("관리자 페이지로 이동!!");
	}
	
	// 2번 런닝구 목록 보기
//	@RequestMapping("adminrunninggoo.do")
//	public void adminRNG(RunningGooVO vo, Model m) {		
//		List<RunningGooVO> voList = runningGooService.getRNRoomList(vo);
//		m.addAttribute("runningGooList", voList);
//		System.out.println("런닝구 리스트 전달완료!!");
//	}
	
	@RequestMapping("adminRNG.do")
	@ResponseBody
	public List<RunningGooVO> adminRNG(RunningGooVO vo) {		
		System.out.println("2런닝구 관리 페이지로 이동!!");
		List<RunningGooVO> voList = runningGooService.getRNRoomList(vo);
		System.out.println("런닝구 리스트 전달완료!!");
		return voList;
	}
	
}
