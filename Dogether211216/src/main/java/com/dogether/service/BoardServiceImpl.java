package com.dogether.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dogether.dao.BoardDAOImpl;
import com.dogether.domain.BoardVO;
import com.dogether.domain.Board_ReplyVO;

@Repository("boardService")
public class BoardServiceImpl implements BoardService{

	@Autowired
	private BoardDAOImpl boardDAO; 
	
	@Override
	public List<BoardVO> getBoardList() {
		return boardDAO.getBoardList();
	}

	@Override
	public List<Board_ReplyVO> getReplyList(Board_ReplyVO vo){
		return boardDAO.getReplyList(vo);
	}
}
