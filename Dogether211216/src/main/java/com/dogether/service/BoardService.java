package com.dogether.service;

import java.util.List;

import com.dogether.domain.BoardVO;
import com.dogether.domain.Board_ReplyVO;
import com.dogether.domain.RunningGooVO;

public interface BoardService {
	List<BoardVO> getBoardList(BoardVO vo);
	List<Board_ReplyVO> getReplyList(Board_ReplyVO vo);
	//자랑하기 삭제
	public void deleteBST(BoardVO vo);

}
