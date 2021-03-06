package com.dogether.dao;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dogether.domain.OrderVO;

@Repository("orderDAO")
public class OrderDAOImpl implements OrderDAO{

	@Autowired
	private SqlSessionTemplate mybatis;

	@Override
	public List<HashMap<String, Object>> getOrderList(OrderVO sortTypeOrder) {
		System.out.println("sortTypeOrder"+ sortTypeOrder);
		return mybatis.selectList("OrderDAO.getOrderList", sortTypeOrder);
	}

}
