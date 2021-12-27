package com.dogether.service;

import java.util.List;

import com.dogether.domain.ProductsVO;

public interface ProductService {
	//모든 상품목록 가져오기
	List<ProductsVO> getProductsList();
	//상품 추가하기
	public int productsInsert(ProductsVO vo);
	//상품 삭제하기
	public void productsDelete(ProductsVO vo); 
	//상품 수정하기
	public void productsUpdate(ProductsVO vo);
}
