package com.dogether.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dogether.dao.RunningGooDAO;
import com.dogether.domain.RunningGooVO;

@Service
public class RunningGooServiceImpl implements RunningGooService {
	
	@Autowired
	RunningGooDAO runningGooDAO;

	@Override
	public void insertRNRoomInfo() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<HashMap<String,Object>> getRNGListWithProfile(RunningGooVO sortTypeRNG) {
		return runningGooDAO.getRNGListWithProfile(sortTypeRNG);
	}

	@Override
	public int getRNRoomCount(RunningGooVO vo) {
		// 런닝구 방 갯수 얻어오기
		return runningGooDAO.getRunningGooRoomCount(vo);
	}

	@Override
	public List<RunningGooVO> getRNRoomList(RunningGooVO vo) {
		return runningGooDAO.getRNRoomList(vo);
	}

	// 런닝구 삭제
	@Override
	public void deleteRNG(RunningGooVO vo) {
		System.out.println("Service에서 런닝구방 삭제 호출함");
		runningGooDAO.deleteRNG(vo);		
	}
	
	

}
