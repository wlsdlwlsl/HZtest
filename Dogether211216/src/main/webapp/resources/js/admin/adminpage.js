$(document).ready(function() {
    // ################################################ 
	// 런닝구 방리스트를 동적 테이블로 만들기 + ajax로 화면 이동 없이 출력하기
	function adminRNGList(){
		$.ajax({
			type : 'get',
			url : 'adminRNG.do',
		    dataType : 'json',											// db(서버)에서 받을 때 데이터 타입
			data: { sortTypeRNG : $(".sortTypeRNG").val() },
		    success : function(resultRNG){
				// ##### 동적으로 런닝구방 리스트 만들기 #####
				var adminRNGList = $("#adminRNGList");					// adminpage.jsp에 table id를 변수에 저장
				adminRNGList.empty();									// 비워놓고 시작 ==> 다른 리스트가 있을 수 있으니까
				adminRNGList.append(									// list 테이블 헤더
					"<tr>"
//					+ "<th width='200'>프로필사진</th>"
					+ "<th width='100'>호스트명</th>"
					+ "<th width='400'>방설명</th>"
					+ "<th width='150'>미팅날짜</th>"
					+ "<th width='100'>삭제</th>"
					+"</tr>");
				for(row of resultRNG){									// 향상된 for문 (list row : resultRNG) ==> 변수명은 상관없음
					// console.log(row);								// 데이터가 잘 넘어왔는지 확인
					var tr = $("<tr/>");								// <tr/> 객체 생성
					// ######### 프로필사진 출력 (디비 완성 전까지는 방번호 출력하기)
//					var roomNumber = $("<td id='roomNumber' width='200' />").html(row.roomNumber);		// td객체를 생성 ==> roomNumber를 td에 담는다
//					tr.append(roomNumber); 																// tr에 roomNumber를 담은 td를 추가
					// ##### 호스트명, 방설명(호스트한마디), 미팅날짜, 삭제 출력 #####
					var memberID = $("<td width='100' />").text(row.memberID);	
					tr.append(memberID);
					var hostComment = $("<td width='400' />").html(row.hostComment);
					tr.append(hostComment);
					var meetingTime = $("<td width='150' />").html(row.meetingTime);
					tr.append(meetingTime);
					var deleteAdminRNG = $("<td width='100' />").html("<button id='deleteAdminRNG'>삭제</button>");
					tr.append(deleteAdminRNG);
					
					adminRNGList.append(tr);		// 모든 컬럼 정보를 append한 tr을 list에 append
				} // end for문
			},	// end success
			error : function(err){
				alert('전송실패');
				console.log(err);
			} //end error		
		}) // end ajax
	} // end function adminRNGList()

	 // ############ 런닝구 관리 메뉴를 클릭했을 때  ############
	 $('#adminRNG').click(function(evt){
		 evt.preventDefault();				// a태그 링크 기능 무력화
		 evt.stopPropagation();				// a태그 링크 기능 무력화
		 //alert("런닝구 관리 클릭");
		 $("h1").hide();					// 페이지명 안보이게 변경
		 $("#h1RNG").show();				// 페이지명 보이게 변경
		 
		 $("table").hide();					// 모든 리스트 테이블을 삭제
		 $("#adminRNGList").show();			// 런닝구 리스트 테이블만 보임으로 변경

		 $(".divHide").hide();				// 모든 정렬 안보이게 변경
		 $(".sortRNG").show();				// 런닝구 정렬만 보이게 변경
		 $(".float-right").hide();				// 상품 추가하기 보이게 변경
//		 $(".sortBST").css("display","none");	// 왼쪽 상단에 sort 콤보박스 안보이게 css 변경
//		 $(".sortRNG").css("display","block");	// 왼쪽 상단에 sort 콤보박스 보이게 css 변경
		adminRNGList();							// 리스트 출력 함수 호출
	 }); //end click 
	 
	// ################################################
	// 자랑하기 리스트를 동적 테이블로 만들기 + ajax로 화면 이동 없이 출력하기
	function adminBSTList(){
		$.ajax({
			type : 'get',
			url : 'adminBST.do',
		    dataType : 'json',											// db(서버)에서 받을 때 데이터 타입
			data: { sortTypeBST : $(".sortTypeBST").val() },
			success : function(resultBST){
				// ##### 동적으로 자랑하기 리스트 만들기 #####
				var adminBSTList = $("#adminBSTList");					// adminpage.jsp에 table id를 변수에 저장
				adminBSTList.empty();									// 비워놓고 시작 ==> 다른 리스트가 있을 수 있으니까
				adminBSTList.append(									// list 테이블 헤더
					"<tr>"
					+ "<th width='200'>게시글사진</th>"
					+ "<th width='100'>작성자</th>"
					+ "<th width='400'>글내용</th>"
					+ "<th width='150'>좋아요수</th>"
					+ "<th width='100'>삭제</th>"
					+"</tr>");
				for(row of resultBST){									// 향상된 for문 (list row : resultBST) ==> 변수명은 상관없음
					console.log(row);									// 데이터가 잘 넘어왔는지 확인
					var tr = $("<tr/>");								// <tr/> 객체 생성
					// ######### 게시글사진 출력 (디비 완성 전까지는 방번호 출력하기)
					var boardID = $("<td id='boardID' width='200' />").html(row.boardID);		// td객체를 생성 ==> boardID를 td에 담는다
					tr.append(boardID); 														// tr에 boardID를 담은 td를 추가
					// ##### 작성자, 글내용, 좋아요수, 삭제 출력 #####
					var memberID = $("<td width='100' />").text(row.memberID);	
					tr.append(memberID);
					var boardContent = $("<td width='400' />").html(row.boardContent);
					tr.append(boardContent);
					var board_like_count = $("<td width='150' />").html(row.board_like_count);
					tr.append(board_like_count);
					// ########## 삭제 버튼 추가  ##########
					var deleteAdminBST = $("<td width='100' />").html("<button id='deleteAdminBST'>삭제</button>");
					tr.append(deleteAdminBST);
					
					adminBSTList.append(tr);	// 모든 컬럼 정보를 append한 tr을 list에 append
				} // end for문
			}, // end success
			error : function(err){
				alert('전송실패');
				console.log(err);
			} //end error		
		})	// end ajax
	}	// end function adminBSTList()

	 // ############ 자랑하기 관리 메뉴를 클릭했을 때  ############
	 $('#adminBST').click(function(evt){
		 evt.preventDefault();				//a태그 기능 무력화
		 evt.stopPropagation();				//a태그 기능 무력화
		 //alert("자랑하기 관리 클릭");
		 $("h1").hide();					// 페이지명 안보이게 변경
		 $("#h1BST").show();				// 페이지명 보이게 변경
		 
		 $("table").hide();				// 모든 리스트 테이블 안보이게
		 $("#adminBSTList").show();		// 런닝구 리스트 테이블만 보이게 변경

		 $(".divHide").hide();			// 모든 정렬 안보이게 변경
		 $(".float-right").hide();				// 상품 추가하기 보이게 변경
		 $(".sortBST").show();			// 자랑하기 정렬만 보이게 변경
		 
		adminBSTList();					// 리스트 출력 함수 호출
	 }); //end click 
 
	// ################################################
	// 회원 관리 리스트를 동적 테이블로 만들기 + ajax로 화면 이동 없이 출력하기
	function adminMemberList(){
		$.ajax({
			type : 'get',
			url : 'adminMember.do',
		    dataType : 'json',											// db(서버)에서 받을 때 데이터 타입
			data: { sortTypeMember : $(".sortTypeMember").val() },
			success : function(resultMember){
				// ##### 동적으로 회원 리스트 만들기 #####
				var adminMemberList = $("#adminMemberList");			// adminpage.jsp에 table id를 변수에 저장
				adminMemberList.empty();								// 비워놓고 시작 ==> 다른 리스트가 있을 수 있으니까
				adminMemberList.append(									// list 테이블 헤더
					"<tr>"
					//+ "<th width='200'>프로필사진</th>"
					+ "<th width='100'>ID</th>"
					+ "<th width='300'>EMAIL</th>"
					+ "<th width='100'>닉네임</th>"
					+ "<th width='100'>회원명</th>"
					+ "<th width='200'>이동전화번호</th>"
					+ "<th width='150'>생일</th>"
					+ "<th width='100'>성별</th>"
					+ "<th width='450'>주소</th>"
					+ "<th width='150'>블랙리스트</th>"
					+ "<th width='100'>삭제</th>"
					+"</tr>");
				for(row of resultMember){								// 향상된 for문 (list row : resultOrder) ==> 변수명은 상관없음
					console.log(row);									// 데이터가 잘 넘어왔는지 확인
					var tr = $("<tr/>");								// <tr/> 객체 생성
					// ######### 프로필사진 출력 (디비 완성 전까지는 주석)
//							var member_realfname = $("<td id='member_realfname' width='200' />").html("<img src='resources/"+ row.member_realfname +">");
//							tr.append(member_realfname);
					var memberID = $("<td id='memberID' width='100' />").html(row.memberID);	// td객체를 생성 ==> memberID를 td에 담는다
					tr.append(memberID); 														// tr에 memberID를 담은 td를 추가
					var email = $("<td width='300' />").text(row.email);	
					tr.append(email);
					var nickName = $("<td width='100' />").html(row.nickName);
					tr.append(nickName);
					var userName = $("<td width='100' />").html(row.userName);
					tr.append(userName);
					var phoneNumber = $("<td width='200' />").html(row.phoneNumber);			
					tr.append(phoneNumber); 													
					var birthday = $("<td width='150' />").text(row.birthday);	
					tr.append(birthday);
					// 성별 int ==> String으로 변경
					if(row.gender==1) {
						row.gender = '남자';
						var gender = $("<td width='100' />").html(row.gender);
					} else {
						row.gender = '여자';
						var gender = $("<td width='100' />").html(row.gender);
					}
					tr.append(gender);
					
					var fullAddress = $("<td width='450' />").html(row.zipCode + "&nbsp;" + row.basicAddress + "&nbsp;" + row.restAddress);
					tr.append(fullAddress);
					var blackListYN = $("<td width='150' />").html(row.blackListYN);
					tr.append(blackListYN);
					// ########## 삭제 버튼 추가  ##########
					var deleteAdminMember = $("<td width='100' />").html("<button id='deleteAdminMember'>삭제</button>");
					tr.append(deleteAdminMember);
					
					adminMemberList.append(tr);			// 모든 컬럼 정보를 append한 tr을 list에 append
				} // end for문
			}, // end success
			error : function(err){
				alert('전송실패');
				console.log(err);
			} //end error		
		})	// end ajax
	}	// end function adminMemberList()

	 // ############ 회원 관리 메뉴를 클릭했을 때  ############
	 $('#adminMember').click(function(evt){
		 evt.preventDefault();				//a태그 기능 무력화
		 evt.stopPropagation();				//a태그 기능 무력화
		 //alert("회원 관리 클릭");
		 $("h1").hide();					// 페이지명 안보이게 변경
		 $("#h1Member").show();				// 페이지명 보이게 변경
		 
		 $("table").hide();					// 모든 테이블 숨기기
		 $("#adminMemberList").show();		// 회원 리스트 테이블만 보이게 변경
		 
		 $(".divHide").hide();				// 모든 정렬 안보이게 변경
		 $(".float-right").hide();				// 상품 추가하기 보이게 변경
		 $(".sortMember").show();			// 회원 정렬만 보이게 변경
		 adminMemberList();					// 리스트 출력 함수 호출
	 }); //end click 
	 
	// ################################################
	// 쇼핑몰 주문 리스트를 동적 테이블로 만들기 + ajax로 화면 이동 없이 출력하기
	function adminOrderList(){
		$.ajax({
			type : 'get',
			url : 'adminOrder.do',
		    dataType : 'json',										// db(서버)에서 받을 때 데이터 타입
			success : function(resultOrder){
				// ##### 동적으로 쇼핑몰 주문 리스트 만들기 #####
				var adminOrderList = $("#adminOrderList");			// adminpage.jsp에 table id를 변수에 저장
				adminOrderList.empty();								// 비워놓고 시작 ==> 다른 리스트가 있을 수 있으니까
				adminOrderList.append(								// list 테이블 헤더
					"<tr>"
					+ "<th width='200'>주문일자</th>"
					+ "<th width='300'>주문번호</th>"
					+ "<th width='200'>주문자</th>"
					+ "<th width='400'>상품번호</th>"
					+ "<th width='150'>구매확정여부</th>"
					+ "<th width='150'>반품여부</th>"
					+ "<th width='150'>반품상태</th>"
					+"</tr>");
				for(row of resultOrder){											// 향상된 for문 (list row : resultMember) ==> 변수명은 상관없음
					console.log(row);												// 데이터가 잘 넘어왔는지 확인
					var tr = $("<tr/>");											// <tr/> 객체 생성
					var orderDate = $("<td width='200' />").html(row.orderDate);	// td객체를 생성 ==> orderDate를 td에 담는다
					tr.append(orderDate); 											// tr에 orderDate를 담은 td를 추가
					var orderID = $("<td width='300' />").text(row.orderID);	
					tr.append(orderID);
					var memberID = $("<td width='200' />").html(row.memberID);
					tr.append(memberID);
					var productID = $("<td width='400' />").html(row.productID);
					tr.append(productID);
					var buyingConfirmYN = $("<td width='150' />").html(row.buyingConfirmYN);			
					tr.append(buyingConfirmYN); 													
					var returnYN = $("<td width='150' />").text(row.returnYN);	
					tr.append(returnYN);
					// 반품상태 int ==> String 변경
					if(row.returnStatus==0) {
						row.returnStatus = '주문완료';
						var returnStatus = $("<td width='150' />").html(row.returnStatus);
					} else if (row.returnStatus==1) {
						row.returnStatus = '반품신청';
						var returnStatus = $("<td width='150' />").html(row.returnStatus);
					} else if (row.returnStatus==2) {
						row.returnStatus = '반품진행중';
						var returnStatus = $("<td width='150' />").html(row.returnStatus);
					} else {
						row.returnStatus = '반품처리완료';
						var returnStatus = $("<td width='150' />").html(row.returnStatus);
					}
					tr.append(returnStatus);
					
					adminOrderList.append(tr);			// 모든 컬럼 정보를 append한 tr을 list에 append
				} // end for문
			}, // end success
			error : function(err){
				alert('전송실패');
				console.log(err);
			} //end error		
		})	// end ajax
	}	// end function adminOrderList()

	 // ############ 쇼핑몰 주문 관리 메뉴를 클릭했을 때  ############
	 $('#adminOrder').click(function(evt){
		 evt.preventDefault();				//a태그 기능 무력화
		 evt.stopPropagation();				//a태그 기능 무력화
		 //alert("쇼핑몰 주문 관리 클릭");
		 $("h1").hide();								// 페이지명 안보이게 변경
		 $("#h1Order").show();				// 페이지명 보이게 변경
		 
		 $("table").hide();								// 모든 테이블 숨기기
		 $("#adminOrderList").show();		// 쇼핑몰 주문 리스트 테이블만 보이게 변경
		 
		 $(".divHide").hide();				// 모든 정렬 안보이게 변경
		 $(".float-right").hide();				// 상품 추가하기 보이게 변경
		 $(".sortOrder").show();		// 쇼핑몰 주문 정렬만 보이게 변경
		 adminOrderList();					// 리스트 출력 함수 호출
	 }); //end click 
	 
	 function adminProductsList(){
			$.ajax({
				type : 'get',
				url : 'adminProducts.do',
			    dataType : 'json',																	// db(서버)에서 받을 때 데이터 타입
	//				data: { sortTypeRNG : $(".sortTypeRNG").val() },
			    success : function(resultProducts){
					// ##### 동적으로 상품 리스트 만들기 #####
					var adminProductsList = $("#adminProductsList");					// adminpage.jsp에 table id를 변수에 저장
					adminProductsList.empty();									// 비워놓고 시작 ==> 다른 리스트가 있을 수 있으니까
					adminProductsList.append(									// list 테이블 헤더
						"<tr>"
						+ "<th>상품이미지</th>"
						+ "<th>상품ID</th>"
						+ "<th>상품명</th>"
						+ "<th>상품상세설명</th>"
						+ "<th>상품가격</th>"
						+ "<th>상품수정</th>"
						+ "<th>상품삭제</th>"
						+"</tr>");
					for(row of resultProducts){									// 향상된 for문 (list row : resultProducts) ==> 변수명은 상관없음
						console.log(row);
						var tr = $("<tr/>");												// <tr/> 객체 생성
						var product_realfname = $("<td class='productInsertImage'/>").html('<img  src="./resources/img/shoppingmall/productimgs/' + row.product_realfname + '"/>');	
						tr.append(product_realfname);
						var productID = $("<td class='productID'/>").html(row.productID);
						tr.append(productID);
						var productName = $("<td class='productName'/>").html(row.productName);
						tr.append(productName);
						var productContent = $("<td class='productContent'/>").html(row.productContent);
						tr.append(productContent); 
						var productPrice = $("<td class='productPrice'/>").html(row.productPrice);
						tr.append(productPrice);
						var updateProduct = $("<td/>").html("<button id='updateProduct'>수정</button>");
						tr.append(updateProduct);
						var deleteProduct = $("<td/>").html("<button id='deleteProduct'>삭제</button>");
						tr.append(deleteProduct);
						
						adminProductsList.append(tr);		// 모든 컬럼 정보를 append한 tr을 list에 append
					} // end for문
				},	// end success
				error : function(err){
					alert('전송실패');
					console.log(err);
				} //end error		
			}) // end ajax
		} // end function adminProductsList()
	
	 // ############ 쇼핑물 상품 관리 메뉴를 클릭했을 때  ############
	 $('#adminProducts').click(function(evt){
		 evt.preventDefault();				// a태그 링크 기능 무력화
		 evt.stopPropagation();				// a태그 링크 기능 무력화
		 $("h1").hide();								// 페이지명 안보이게 변경
		 $("#h1Products").show();			// 페이지명 보이게 변경
		 $("table").hide();							// 모든 테이블 숨기기
		 $("#adminProductsList").show();	// 쇼핑몰 상품 리스트 테이블만 보임으로 변경
		 $(".divHide").hide();						// 모든 정렬 안보이게 변경
		 $(".float-right").show();				// 상품 추가하기 보이게 변경
		 adminProductsList();							// 리스트 출력 함수 호출
	 }); //end click 
	 
	 // ############ 상품 추가하기를 클릭했을 때  ############
//	 function adminProductInsert(){
	 $('.adminProductInsert').click(function(evt){
		 evt.preventDefault();				//a태그 기능 무력화
		 evt.stopPropagation();				//a태그 기능 무력화
		 $("h1").hide();							// 페이지명 안보이게 변경
		 $("#h1Products").show();		// 페이지명 보이게 변경
		 $("table").hide();						// 모든 테이블 숨기기
		 $(".table2").show();					// 상품 추가하기 테이블만 보임으로 변경
		 $(".divHide").hide();					// 모든 정렬 안보이게 변경
		 $(".float-right").hide();				// 상품 추가하기 안보이게 변경
	 }); //end click 
//	 }
	// ############ 상품 추가하기에서 등록/취소 버튼을 클릭했을 때  ############
	 $('.submitBtn').click(function(evt){
//		 evt.preventDefault();				// 
//		 evt.stopPropagation();				//
		 adminProductsList();
	 }); //end click 
	 
	 // ############ 상품 삭제 버튼을 클릭했을 때  ############
	 $(document).on("click","#deleteProduct",function(){
		 alert("버튼클릭");
//		 evt.preventDefault();				//a태그 기능 무력화
//		 evt.stopPropagation();				//a태그 기능 무력화
         var deleteProductID = $(this).parent().prev().prev().prev().prev().prev().text();
         console.log(deleteProductID);
		 $.ajax({
			 url : "productsDelete.do",
			 data : {productID : deleteProductID},
			 success : function(result){
				 alert("선택하신 상품을 삭제했습니다.");
				 adminProductsList();
			 },
			 error : function(err){
				 alert("상품 삭제 실패!");
			 }
		 })
	 }); //end click
	 
	// ############ 상품 수정 버튼을 클릭했을 때  ############
	 let isEditing = 0;
		   $(document).on("click","#updateProduct",function(){
		      //수정다하고나서
			   let thiss = $(this);
		      if(isEditing==1){
		         if($(this).text()==="완료"){
		            isEditing = 0;
		            var productPrice = $(this).parent().prev();
		            var productContent = $(this).parent().prev().prev();
		            var productName = $(this).parent().prev().prev().prev();
		            
		            var productIDtext = $(this).parent().prev().prev().prev().prev().text();
		            var productPriceVal = $('#productPrice').val();
		            var productContentVal = $('#productContent').val();
		            var productNameVal = $('#productName').val();
		            
		            $.ajax({
		                 type: 'get',
		                 url: 'updateProduct.do',
		                 data : { productID : productIDtext, productPrice : productPriceVal, 
		                	 		  productContent : productContentVal, productName : productNameVal },
		                 //한글처리
		                 contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
		                 
		                 success : function(result){
		                	 $(thiss).text("수정");
		                	 alert("상품 수정 완료!");
		                	 adminProductsList();
		                 },
		                 error : function(err){
		                    alert('상품 수정 실패!');
		                 } //end error
		              }); //end ajax
		           } //end inner if
		      } //end outer if
		      //수정하기전에..
		      else{
		         isEditing = 1;
		         let productPrice = $(this).parent().prev();
		         let productContect = $(this).parent().prev().prev();
		         let productName = $(this).parent().prev().prev().prev();
		         
		         let productPriceText = $(this).parent().prev().text();
		         let productContectText = $(this).parent().prev().prev().text();
		         let productNameText = $(this).parent().prev().prev().prev().text();
		         productPrice.val('');
		         productName.val('');
		         productContect.val('');
		         productPrice.html("<input type='text' name='productPrice' id='productPrice'>");
		         productName.html("<input type='text' name='productName' id='productName'>");
		         productContect.html("<input type='text' name='productContect' id='productContent'>");
		         $(this).text('완료')
		      } //end else
		      
		   }); //end click
	 
	// ################################################
	
	 // ############ 런닝구 정렬하기를 클릭했을 때  ############
	 $('#rngSort').click(function(evt){
		 evt.preventDefault();				// a태그 링크 기능 무력화
		 evt.stopPropagation();				// a태그 링크 기능 무력화
		 adminRNGList();
	 }); //end click 
	 
	 // ############ 자랑하기 정렬하기를 클릭했을 때  ############
	 $('#bstSort').click(function(evt){
		 evt.preventDefault();				// a태그 링크 기능 무력화
		 evt.stopPropagation();				// a태그 링크 기능 무력화
		 adminBSTList();
	 }); //end click 
	 
	// ############ 회원 정렬하기를 클릭했을 때  ############
	 $('#memberSort').click(function(evt){
		 evt.preventDefault();				// a태그 링크 기능 무력화
		 evt.stopPropagation();				// a태그 링크 기능 무력화
		 adminMemberList();
	 }); //end click 
	 
	// ################################################
	// 상품추가하기 전송 버튼을 눌렀을 때 값이 비어있으면---------------------
     $('#submitBtn').click(function(){
       if( $.trim($(".productID").val()) == '' ){
            alert("상품 아이디를 입력해주세요.");
//            $("#productID").focus();
            return window.location.href="productsInsert.do";
        }

       if($.trim($('#productName').val())==''){
          alert("상품명을 입력해주세요.");
//          $('#productName').focus());
          return location.href ="productsInsert.do";
       }

       if($.trim($('#productPrice').val())==''){
          alert("상품 가격을 입력해주세요.");
//          $('#productPrice').focus();
          return location.href ="productsInsert.do";
       }
       
       if($.trim($('#productContent').val())==''){
    	   alert("상품 상세 정보를 입력해주세요.");
//    	   $('#productContent').focus();
           return location.href ="productsInsert.do";
       }

       
        // 자료를 전송합니다.
        $('#productInput').submit();
   });
//-------------------------------------------------------

});	// end ready