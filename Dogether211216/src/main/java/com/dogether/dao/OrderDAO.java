package com.dogether.dao;

import java.util.List;
import com.dogether.domain.OrderVO;

public interface OrderDAO {
	public List<OrderVO> getOrderList();
}
