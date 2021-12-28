package com.dogether.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dogether.dao.OrderDAOImpl;
import com.dogether.domain.OrderVO;

@Repository("orderService")
public class OrderServiceImpl implements OrderService{

	@Autowired
	private OrderDAOImpl orderDAO; 

	@Override
	public List<HashMap<String, Object>> getOrderList(OrderVO sortTypeOrder) {
		return orderDAO.getOrderList(sortTypeOrder);
	}

}
