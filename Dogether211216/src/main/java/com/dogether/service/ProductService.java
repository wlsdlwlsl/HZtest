package com.dogether.service;

import java.util.List;

import com.dogether.domain.ProductsVO;

public interface ProductService {
	//상품 추가하기
	public int productsInsert(ProductsVO vo);
	//모든 상품목록 가져오기
	List<ProductsVO> getProductsList();
	public void productsUpdate(ProductsVO vo);
}
