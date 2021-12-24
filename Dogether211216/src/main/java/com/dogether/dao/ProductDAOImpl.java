package com.dogether.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.dogether.domain.ProductsVO;

@Repository("productDAO")
public class ProductDAOImpl implements ProductDAO{

	@Autowired
	private SqlSessionTemplate mybatis;

	@Override
	public int productsInsert(ProductsVO vo) {
		System.out.println("mybatis 함수 호출!!");
		return mybatis.insert("ProductsDAO.productsInsert", vo);
	}

	@Override
	public List<ProductsVO> getProductsList() {
		System.out.println("mybatis 상품리스트 호출함");
		return mybatis.selectList("ProductsDAO.getProductsList");
	}

	@Override
	public void productsUpdate(ProductsVO vo) {
		System.out.println("mybatis 상품리스트 호출함");
		mybatis.update("ProductsDAO.productsUpdate");
	}
	
}
