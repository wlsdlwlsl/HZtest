package com.dogether.dao;

import java.util.List;

import com.dogether.domain.ProductsVO;

public interface ProductDAO {
	public int productsInsert(ProductsVO vo);
	public List<ProductsVO> getProductsList();

}
