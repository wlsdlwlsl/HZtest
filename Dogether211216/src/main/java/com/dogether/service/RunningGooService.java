package com.dogether.service;

import java.util.HashMap;
import java.util.List;

import com.dogether.domain.RunningGooVO;

public interface RunningGooService {
	
	// 런닝구 방정보 저장
	void insertRNRoomInfo();
	
	// 런닝구 리스트 가져오기
	List<RunningGooVO> getRNRoomList(RunningGooVO vo);
	
	// 런닝구 리스트 가져오기
	List<HashMap<String,Object>> getRNGListWithProfile(RunningGooVO sortTypeRNG);
	
	// 런닝구 방 갯수 얻어오기
	int getRNRoomCount(RunningGooVO vo);
	
	// 런닝구 방 삭제
	public void deleteRNG(RunningGooVO vo);

}
