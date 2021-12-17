package com.dogether.service;

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
	public List<RunningGooVO> getRNRoomList(RunningGooVO vo) {
		// TODO Auto-generated method stub
		return runningGooDAO.getRNRoomList(vo);
	}

	@Override
	public int getRNRoomCount(RunningGooVO vo) {
		// 런닝구 방 갯수 얻어오기
		return runningGooDAO.getRunningGooRoomCount(vo);
	}

}
