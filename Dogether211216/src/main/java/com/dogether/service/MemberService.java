package com.dogether.service;

import java.util.List;

import com.dogether.domain.MemberVO;

public interface MemberService {
	List<MemberVO> getMemberList(MemberVO vo);
}
