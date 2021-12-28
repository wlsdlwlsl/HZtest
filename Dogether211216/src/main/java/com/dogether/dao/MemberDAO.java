package com.dogether.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.dogether.domain.MemberVO;

public interface MemberDAO {
	public List<MemberVO> getMemberList(MemberVO vo);
	// 회원 삭제(탈퇴)하기
	public void deleteMember(MemberVO vo);

}
