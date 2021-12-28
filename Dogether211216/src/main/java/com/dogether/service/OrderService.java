package com.dogether.service;

import java.util.HashMap;
import java.util.List;

import com.dogether.domain.OrderVO;

public interface OrderService {
	List<HashMap<String,Object>> getOrderList(OrderVO sortTypeOrder);
}
