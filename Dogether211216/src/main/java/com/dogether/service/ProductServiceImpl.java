package com.dogether.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dogether.dao.ProductDAO;
import com.dogether.domain.ProductsVO;

@Service("productService")
public class ProductServiceImpl implements ProductService{

	@Autowired
	ProductDAO productsDAO;
	
	@Override
	public int productsInsert(ProductsVO vo) {
		return productsDAO.productsInsert(vo);
	}

	@Override
	public List<ProductsVO> getProductsList() {
		System.out.println("Service에서 상품리스트 호출함");
		return productsDAO.getProductsList();
	}
	
	@Override
	public void productsDelete(ProductsVO vo) {
		System.out.println("Service에서 상품 삭제 호출함");
		productsDAO.productsDelete(vo);
	} 

	@Override
	public void productsUpdate(ProductsVO vo) {
		System.out.println("Service에서 상품 수정 호출함");
		productsDAO.productsUpdate(vo);
	}

}
