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
	public List<BoardVO> getBoardList() {
		return mybatis.selectList("BoardDAO.getBoardList");
	}

	@Override
	public List<Board_ReplyVO> getReplyList(Board_ReplyVO vo) {
		return mybatis.selectList("BoardDAO.getReplyList");
	}

}
