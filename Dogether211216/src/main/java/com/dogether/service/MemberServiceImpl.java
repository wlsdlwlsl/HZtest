package com.dogether.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dogether.dao.MemberDAOImpl;
import com.dogether.domain.MemberVO;

@Repository("memberService")
public class MemberServiceImpl implements MemberService{

	@Autowired
	private MemberDAOImpl memberDAO; 
	
	@Override
	public List<MemberVO> getMemberList() {
		return memberDAO.getMemberList();
	}

}
