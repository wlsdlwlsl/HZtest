package com.dogether.service;

import java.util.List;

import com.dogether.domain.MemberVO;
import com.dogether.domain.RunningGooVO;

public interface MemberService {
	List<MemberVO> getMemberList(MemberVO vo);
	// 회원 삭제(탈퇴)하기
	public void deleteMember(MemberVO vo);

}
