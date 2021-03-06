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
	public List<BoardVO> getBoardList(BoardVO vo) {
		return boardDAO.getBoardList(vo);
	}

	@Override
	public List<Board_ReplyVO> getReplyList(Board_ReplyVO vo){
		return boardDAO.getReplyList(vo);
	}

	@Override
	public void deleteBST(BoardVO vo) {
		System.out.println("Service에서 자랑하기 삭제 호출함");
		boardDAO.deleteBST(vo);		
	}
	
	// 자랑하기 삭제
	
}
