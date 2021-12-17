package com.dogether.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dogether.dao.TestDAOImpl;
import com.dogether.domain.BoardVO;

@Service("testService")
public class TestServiceImpl implements TestService{
	
	@Autowired
	private TestDAOImpl testDAO;
	
	public BoardVO test() {
		return testDAO.getBoardList();
	}
}
