package com.dogether.dao;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dogether.domain.RunningGooVO;

@Repository
public class RunningGooDAOImpl implements RunningGooDAO {
	
	@Autowired
	private SqlSessionTemplate mybatis;
	
	@Override
	public List<RunningGooVO> getRNRoomList(RunningGooVO vo) {
		System.out.println("런닝구 방 리스트 불러오는 함수 호출");
		return mybatis.selectList("runningGooDAOMapper.getRunningGooList", vo);
	}
	
	@Override
	public List<HashMap<String,Object>> getRNGListWithProfile(RunningGooVO sortTypeRNG) {
		System.out.println("런닝구 방 리스트 불러오는 함수 호출");
		return mybatis.selectList("runningGooDAOMapper.getRNGListWithProfile", sortTypeRNG);
	}

	@Override
	public int getRunningGooRoomCount(RunningGooVO vo) {
		System.out.println("런닝구 방 갯수를 불러오는 함수 호출");
		return mybatis.selectOne("runningGooDAOMapper.getRunningGooRoomCount", vo);
	}

	@Override
	public void deleteRNG(RunningGooVO vo) {
		System.out.println("mybatis 런닝구방 삭제 호출함");
		System.out.println(vo.getRoomNumber()+"방삭제번호");
		mybatis.delete("runningGooDAOMapper.deleteRNG", vo);
	}
	
}
