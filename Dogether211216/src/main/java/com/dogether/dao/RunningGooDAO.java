package com.dogether.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.dogether.domain.RunningGooVO;

@Repository
public interface RunningGooDAO {
	
	// 런닝구 방 정보 입력
	
	
	// 런닝구 방 리스트 불러오기
	public List<RunningGooVO> getRNRoomList(RunningGooVO vo);
	
	// 런닝구 방 갯수 얻어오기
	int getRunningGooRoomCount(RunningGooVO vo);
}
