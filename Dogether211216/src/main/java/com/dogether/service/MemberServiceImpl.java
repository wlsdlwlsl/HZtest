package com.dogether.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dogether.dao.MemberDAOImpl;
import com.dogether.domain.MemberVO;

@Service("memberService")
public class MemberServiceImpl implements MemberService{

	@Autowired
	private MemberDAOImpl memberDAO; 
	
	@Override
	public List<MemberVO> getMemberList(MemberVO vo) {
		return memberDAO.getMemberList(vo);
	}

	// 회원 삭제(탈퇴)하기
	@Override
	public void deleteMember(MemberVO vo) {
		System.out.println("Service에서 회원 삭제(탈퇴) 호출함");
		memberDAO.deleteMember(vo);		
	}
	
}
