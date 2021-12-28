package com.dogether.dao;

import java.util.List;

import com.dogether.domain.BoardVO;
import com.dogether.domain.Board_ReplyVO;
import com.dogether.domain.RunningGooVO;

public interface BoardDAO {
	public List<BoardVO> getBoardList(BoardVO vo);
	public List<Board_ReplyVO> getReplyList(Board_ReplyVO vo);
	// 자랑하기 삭제
	public void deleteBST(BoardVO vo);

}
