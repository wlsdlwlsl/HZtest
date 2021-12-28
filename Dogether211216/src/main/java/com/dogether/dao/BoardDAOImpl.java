package com.dogether.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dogether.domain.BoardVO;
import com.dogether.domain.Board_ReplyVO;

@Repository("boardDAO")
public class BoardDAOImpl implements BoardDAO{

	@Autowired
	private SqlSessionTemplate mybatis;
	
	@Override
	public List<BoardVO> getBoardList(BoardVO vo) {
		return mybatis.selectList("BoardDAO.getBoardList", vo);
	}

	@Override
	public List<Board_ReplyVO> getReplyList(Board_ReplyVO vo) {
		return mybatis.selectList("BoardDAO.getReplyList");
	}

	// 자랑하기 삭제
	@Override
	public void deleteBST(BoardVO vo) {
		System.out.println("mybatis 상품 삭제 호출함");
		System.out.println(vo.getBoardID()+"자랑하기 삭제");
		mybatis.delete("BoardDAO.deleteBST", vo);
	}
	
}
