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
					+ "<th width='200'>프로필사진</th>"
					+ "<th width='100'>호스트명</th>"
					+ "<th width='400'>방설명</th>"
					+ "<th width='150'>미팅날짜</th>"
					+ "<th width='100'>삭제</th>"
					+"</tr>");
				for(row of resultRNG){									// 향상된 for문 (list row : resultRNG) ==> 변수명은 상관없음
					// console.log(row);								// 데이터가 잘 넘어왔는지 확인
					var tr = $("<tr/>");								// <tr/> 객체 생성
					// ######### 프로필사진 출력 (디비 완성 전까지는 방번호 출력하기)
					var roomNumber = $("<td id='roomNumber' width='200' />").html(row.roomNumber);		// td객체를 생성 ==> roomNumber를 td에 담는다
					tr.append(roomNumber); 																// tr에 roomNumber를 담은 td를 추가
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
					+ "<th width='200'>프로필사진</th>"
					+ "<th width='100'>작성자</th>"
					+ "<th width='400'>글내용</th>"
					+ "<th width='150'>좋아요수</th>"
					+ "<th width='100'>삭제</th>"
					+"</tr>");
				for(row of resultBST){									// 향상된 for문 (list row : resultBST) ==> 변수명은 상관없음
					console.log(row);									// 데이터가 잘 넘어왔는지 확인
					var tr = $("<tr/>");								// <tr/> 객체 생성
					// ######### 프로필사진 출력 (디비 완성 전까지는 방번호 출력하기)
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
					+ "<th width='400'>EMAIL</th>"
					+ "<th width='100'>닉네임</th>"
					+ "<th width='100'>회원명</th>"
					+ "<th width='200'>이동전화번호</th>"
					+ "<th width='100'>생일</th>"
					+ "<th width='100'>성별</th>"
					+ "<th width='400'>주소</th>"
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
					var email = $("<td width='400' />").text(row.email);	
					tr.append(email);
					var nickName = $("<td width='100' />").html(row.nickName);
					tr.append(nickName);
					var userName = $("<td width='100' />").html(row.userName);
					tr.append(userName);
					var phoneNumber = $("<td width='200' />").html(row.phoneNumber);			
					tr.append(phoneNumber); 													
					var birthday = $("<td width='100' />").text(row.birthday);	
					tr.append(birthday);
					var gender = $("<td width='100' />").html(row.gender);
					tr.append(gender);
					var fullAddress = $("<td width='100' />").html(row.zipCode + "&nbsp;" + row.basicAddress + "&nbsp;" + row.restAddress);
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
					+ "<th width='400'>주문번호</th>"
					+ "<th width='200'>주문자</th>"
					+ "<th width='400'>상품번호</th>"
					+ "<th width='100'>구매확정여부</th>"
					+ "<th width='100'>반품여부</th>"
					+ "<th width='100'>반품상태</th>"
					+"</tr>");
				for(row of resultOrder){											// 향상된 for문 (list row : resultMember) ==> 변수명은 상관없음
					console.log(row);												// 데이터가 잘 넘어왔는지 확인
					var tr = $("<tr/>");											// <tr/> 객체 생성
					var orderDate = $("<td width='200' />").html(row.orderDate);	// td객체를 생성 ==> orderDate를 td에 담는다
					tr.append(orderDate); 											// tr에 orderDate를 담은 td를 추가
					var orderID = $("<td width='400' />").text(row.orderID);	
					tr.append(orderID);
					var memberID = $("<td width='200' />").html(row.memberID);
					tr.append(memberID);
					var productID = $("<td width='400' />").html(row.productID);
					tr.append(productID);
					var buyingConfirmYN = $("<td width='100' />").html(row.buyingConfirmYN);			
					tr.append(buyingConfirmYN); 													
					var returnYN = $("<td width='100' />").text(row.returnYN);	
					tr.append(returnYN);
					var returnStatus = $("<td width='100' />").html(row.returnStatus);
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
		 $("h1").hide();					// 페이지명 안보이게 변경
		 $("#h1Order").show();				// 페이지명 보이게 변경
		 
		 $("table").hide();					// 모든 테이블 숨기기
		 $("#adminOrderList").show();		// 쇼핑몰 주문 리스트 테이블만 보이게 변경
		 
		 $(".divHide").hide();				// 모든 정렬 안보이게 변경
		 $(".sortOrder").show();			// 쇼핑몰 주문 정렬만 보이게 변경
		 adminOrderList();					// 리스트 출력 함수 호출
	 }); //end click 
 
	// ################################################
	// 정렬하기 
/*	function rngSortRoom(){
		$.ajax({
			type : 'get',
			url : 'adminRNG.do',
		    dataType : 'json',											// db(서버)에서 받을 때 데이터 타입
			success : function(sortRNG){
				
			},	// end success
			error : function(err){
				alert('전송실패');
				console.log(err);
			} //end error		
		}) // end ajax
	} // end function rngSortRoom()
	
	function rngSortMeeting(){
		$.ajax({
			type : 'get',
			url : 'adminRNG.do',
		    dataType : 'json',											// db(서버)에서 받을 때 데이터 타입
			success : function(sortRNG){
				
			},	// end success
			error : function(err){
				alert('전송실패');
				console.log(err);
			} //end error		
		}) // end ajax
	} // end function rngSortRoom()
*/
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
	 
	 
});	// end ready