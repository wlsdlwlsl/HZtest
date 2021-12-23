package com.dogether.controller.mypage;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dogether.domain.BoardVO;
import com.dogether.domain.MemberVO;
import com.dogether.domain.OrderVO;
import com.dogether.domain.ProductsVO;
import com.dogether.domain.RunningGooVO;
import com.dogether.service.BoardService;
import com.dogether.service.MemberService;
import com.dogether.service.OrderService;
import com.dogether.service.ProductService;
import com.dogether.service.RunningGooService;

@Controller
public class AdminMyPageController {

	@Autowired
	RunningGooService runningGooService;
	@Autowired
	BoardService boardService;
	@Autowired
	MemberService memberService;
	@Autowired
	OrderService orderService;
	@Autowired
	ProductService productService;

	// 첫페이지로 이동
	@RequestMapping("adminpage.do")
	public void admin(Model model) {
		System.out.println("관리자 페이지로 이동!!");
		// 쇼핑몰 상품 리스트 출력
		List<ProductsVO> list = productService.getProductsList();
		model.addAttribute("productList",list);
	}

	// 런닝구 list 출력 + 정렬하기
	@RequestMapping("adminRNG.do")
	@ResponseBody
	public List<RunningGooVO> adminRNG(RunningGooVO vo) {
		System.out.println(vo.getSortTypeRNG());
		List<RunningGooVO> voList = runningGooService.getRNRoomList(vo);
		System.out.println("런닝구 리스트 전달완료!!");
		return voList;
	}

	// 자랑하기 list 출력
	@RequestMapping("adminBST.do")
	@ResponseBody
	public List<BoardVO> adminBST(BoardVO vo) {
		System.out.println(vo.getSortTypeBST());
		List<BoardVO> boList = boardService.getBoardList(vo);
		System.out.println("자랑하기 리스트 전달완료!!");
		return boList;
	}

	// 회원 list 출력
	@RequestMapping("adminMember.do")
	@ResponseBody
	public List<MemberVO> adminMember(MemberVO vo) {
		System.out.println(vo.getSortTypeMember());
		List<MemberVO> memList = memberService.getMemberList(vo);
		System.out.println("회원 리스트 전달완료!!");
		return memList;
	}

	// 쇼핑몰 주문 list 출력
	@RequestMapping("adminOrder.do")
	@ResponseBody
	public List<OrderVO> adminOrder() {
		List<OrderVO> odList = orderService.getOrderList();
		System.out.println("쇼핑몰 주문 리스트 전달완료!!");
		return odList;
	}
	
//	// 모든상품 
//	@RequestMapping("totalProduct.do")
//	public void totalProduct(ProductsVO vo, Model model) {
//		System.out.println("모든상품목록을 불러옵니다----------");
//		List<ProductsVO> list = productService.getProductsList();
//		model.addAttribute("productList",list);
//	}

	// 상품 추가하기
	@RequestMapping(value="productsInsert.do")
	public String productsInsert(ProductsVO vo) {
		System.out.println("쇼핑몰 상품 추가 요청을 받음!!");
		int result = productService.productsInsert(vo);
		System.out.println(result);
		return "redirect:adminpage.do";
	}

}
