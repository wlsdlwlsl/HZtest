package com.dogether.dao;

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

}
