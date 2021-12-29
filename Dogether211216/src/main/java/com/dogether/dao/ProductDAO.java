package com.dogether.dao;

import java.util.List;

import com.dogether.domain.ProductsVO;

public interface ProductDAO {
	//상품 리스트 출력
	public List<ProductsVO> getProductsList();
	//상품 추가하기
	public int productsInsert(ProductsVO vo);
	//상품 삭제하기
	public void productsDelete(ProductsVO vo);
	//상품 수정하기
	public void productsUpdate(ProductsVO vo);
	
	//real 
	public String getRealfname(String productID);
}
