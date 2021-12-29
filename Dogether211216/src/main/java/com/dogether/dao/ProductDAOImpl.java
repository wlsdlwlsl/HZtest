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
	public List<ProductsVO> getProductsList() {
		System.out.println("mybatis 상품리스트 호출함");
		return mybatis.selectList("ProductsDAO.getProductsList");
	}
	
	@Override
	public int productsInsert(ProductsVO vo) {
		System.out.println("mybatis 상품 추가 호출!!");
		return mybatis.insert("ProductsDAO.productsInsert", vo);
	}

	@Override
	public void productsUpdate(ProductsVO vo) {
		System.out.println("mybatis 상품 수정 호출함");
		mybatis.update("ProductsDAO.productsUpdate", vo);
	}

	@Override
	public void productsDelete(ProductsVO vo) {
		System.out.println("mybatis 상품 삭제 호출함");
		System.out.println(vo.getProductID()+"삭삭1");
		mybatis.delete("ProductsDAO.productsDelete", vo);
	}

	@Override
	public String getRealfname(String productID) {
		System.out.println(productID+"상품명1");
		return mybatis.selectOne("ProductsDAO.getRealfname", productID);		
	}
}
