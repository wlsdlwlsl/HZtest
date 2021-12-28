package com.dogether.dao;

import java.util.HashMap;
import java.util.List;

import com.dogether.domain.OrderVO;

public interface OrderDAO {
	public List<HashMap<String,Object>> getOrderList(OrderVO sortTypeOrder);
}
