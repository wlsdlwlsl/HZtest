package com.dogether.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dogether.dao.ProductDAO;
import com.dogether.domain.ProductsVO;

@Service("productService")
public class ProductServiceImpl implements ProductService{

	@Autowired
	ProductDAO productDAO;

	@Override
	public int productsInsert(ProductsVO vo) {
		return productDAO.productsInsert(vo);
	} 

}
