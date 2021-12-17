package com.dogether.dao;

import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dogether.domain.BoardVO;

@Repository("testDAO")
public class TestDAOImpl implements TestDAO{
	
	@Autowired
	private SqlSessionTemplate mybatis;

	public BoardVO getBoardList() {
		return mybatis.selectOne("BoardDAO.getBoardList");
	}

}
