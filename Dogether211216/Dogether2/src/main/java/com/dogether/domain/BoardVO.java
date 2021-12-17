package com.dogether.domain;

public class BoardVO {
	private int boardID;
	private String memberID;
	private String boardTitle;
	private String boardContent;
	private String board_fname;
	private String board_realfname;
	private int board_fsize;
	private int board_like_count;
	
	public int getBoardID() {
		return boardID;
	}
	public void setBoardID(int boardID) {
		this.boardID = boardID;
	}
	public String getMemberID() {
		return memberID;
	}
	public void setMemberID(String memberID) {
		this.memberID = memberID;
	}
	public String getBoardTitle() {
		return boardTitle;
	}
	public void setBoardTitle(String boardTitle) {
		this.boardTitle = boardTitle;
	}
	public String getBoardContent() {
		return boardContent;
	}
	public void setBoardContent(String boardContent) {
		this.boardContent = boardContent;
	}
	public String getBoard_fname() {
		return board_fname;
	}
	public void setBoard_fname(String board_fname) {
		this.board_fname = board_fname;
	}
	public String getBoard_realfname() {
		return board_realfname;
	}
	public void setBoard_realfname(String board_realfname) {
		this.board_realfname = board_realfname;
	}
	public int getBoard_fsize() {
		return board_fsize;
	}
	public void setBoard_fsize(int board_fsize) {
		this.board_fsize = board_fsize;
	}
	public int getBoard_like_count() {
		return board_like_count;
	}
	public void setBoard_like_count(int board_like_count) {
		this.board_like_count = board_like_count;
	}
	

	
}
