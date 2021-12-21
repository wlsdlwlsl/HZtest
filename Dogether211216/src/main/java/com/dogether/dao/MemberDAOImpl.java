package com.dogether.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dogether.domain.MemberVO;

@Repository("memberDAO")
public class MemberDAOImpl implements MemberDAO{

	@Autowired
	private SqlSessionTemplate mybatis;
	
	@Override
	public List<MemberVO> getMemberList(MemberVO vo) {
		return mybatis.selectList("testDAO.getMemberList", vo);		//두게더에서는 testDAO.getMemberList 로 해야함
	}	

}
