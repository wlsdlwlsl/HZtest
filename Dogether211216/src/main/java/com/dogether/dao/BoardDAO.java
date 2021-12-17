package com.dogether.dao;

import java.util.List;

import com.dogether.domain.BoardVO;
import com.dogether.domain.Board_ReplyVO;

public interface BoardDAO {
	public List<BoardVO> getBoardList();
	public List<Board_ReplyVO> getReplyList(Board_ReplyVO vo);
}
