//function CheckUpdateProduct(){
////	var productID = document.getElementById("productID");
//	var ProductName = document.getElementById("productName");
//	var productPrice = document.getElementById("productPrice");
//	var productContent = document.getElementById("productContent");
//	
////	//상품 아이디체크
////	if(!check(/^P[0-9]{4,11}$/, productId,
////	 "[상품 코드]\nP와 숫자를 조합하여 5~12까지 입력하세요/n 첫 글자는 반드시 P로 시작하세요")){
////	 	return false;
////	 }
//	 
//	//상품명 체크
//	if(ProductName.value.length == 0){
//		alert("상품명은 필수 입력 사항입니다.");
//		ProductName.select();
//		ProductName.focus();
//		return false;
//	}
//	
//	//상품 가격 체크
//	if(productPrice.value.length==0 || isNaN(unitPrice.value)){
//		alert("상품 가격은 필수 입력 사항입니다. \n 숫자만 입력해주세요.");
//		productPrice.select();
//		productPrice.focus();
//		return false;
//	}
//	
//	//상품 상세 정보 체크
//	if(productContent.value.length == 0){
//		alert("상품 상세 정보 필수 입력 사항입니다.");
//		productContent.select();
//		productContent.focus();
//		return false;
//	}
//
////	else if(!check(/^\d+(?:[.]?[\d]?[\d])?$/, unitPrice,
////	"[가격]\n소수점 둘째 자리까지만 입력하세요")){
////		return false;
////	}
//	
////	//재고 수 체크
////	if(isNaN(unitsInStock.value)){
////		alert("[재고 수]\n숫자만 입력하세요");
////		unitsInStock.select();
////		unitsInStock.focus();
////		
////		return false;
////	}
////	
////	funtion check(regExp, e, msg){
////		if(regExp.test(e.value)){
////			return true;
////		}
////		
////		alert(msg);
////		e.select();
////		e.focus();
////		
////		return false;
////	}
//	
////	document.newProduct.submit()
//	
//}