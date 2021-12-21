package com.dogether.dao;

import java.util.List;

import com.dogether.domain.MemberVO;

public interface MemberDAO {
	public List<MemberVO> getMemberList(MemberVO vo);
}
