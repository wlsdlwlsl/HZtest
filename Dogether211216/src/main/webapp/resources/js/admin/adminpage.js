$(document).ready(function() {
    // ################################################ 
	//런닝구 방리스트를 동적 테이블로 만들기 + ajax로 화면 이동 없이 출력하기
	function adminRNGList(){
		$.ajax({
			type : 'get',
			url : 'adminRNG.do',
		    dataType : 'json',											// 받을 때 데이터 타입
			success : function(resultRNG){
				
				// ##### 동적으로 런닝구방 리스트 만들기 #####
				var adminRNGList = $("#adminRNGList");					// admin.jsp에 table id를 변수에 저장
				adminRNGList.empty();									// 비워놓고 시작 ==> 기존 리스트가 있을 수 있으니까
				adminRNGList.append("<tr>"
					+ "<th width='200'>프로필사진</th>"
					+ "<th width='100'>호스트명</th>"
					+ "<th width='400'>방설명</th>"
					+ "<th width='150'>미팅날짜</th>"
					+ "<th width='100'>삭제</th>"
				+"</tr>");
					
				for(row of resultRNG){									// 향상된 for문 (list row : resultRNG) ==> 변수명은 상관없음
					// console.log(row);									// 데이터가 잘 넘어왔는지 확인
					var tr = $("<tr/>");								// <tr/> 객체 생성
					// ######### 프로필사진 출력 (디비 완성 전까지는 방번호 출력하기)
					var roomNumber = $("<td id='roomNumber' width='200' />").html(row.roomNumber);		// td객체를 생성 ==> roomNumber를 td에 담는다
					tr.append(roomNumber); 													// tr에 roomNumber를 담은 td를 추가
					
					// ##### 호스트명, 방설명(호스트한마디), 미팅날짜, 삭제 출력 #####
					var memberID = $("<td width='100' />").text(row.memberID);	
					tr.append(memberID);
					var hostComment = $("<td width='400' />").html(row.hostComment);
					tr.append(hostComment);
					var meetingTime = $("<td width='150' />").html(row.meetingTime);
					tr.append(meetingTime);
					var deleteAdminRNG = $("<td width='100' />").html("<button id='deleteAdminRNG'>삭제</button>");
					tr.append(deleteAdminRNG);
					
					adminRNGList.append(tr);
				} // end for문
			},
			error : function(err){
				alert('전송실패');
				console.log(err);
			} //end error		
		}) // end ajax
	} // end function adminRNGList()

	 // ############ 런닝구 관리 메뉴를 클릭했을 때  ############
	 $('#adminRNG').click(function(evt){
		 evt.preventDefault();				//a태그 기능 무력화
		 evt.stopPropagation();				//a태그 기능 무력화
		 alert("런닝구 관리 클릭");
		 $("h1").hide();					// 페이지명 안보이게 변경
		 $("#h1RNG").show();				// 페이지명 보이게 변경
		 $("table").hide();						// 모든 리스트 테이블을 삭제
		 $("#adminRNGList").show();				// 런닝구 리스트를 안보임에서 보임으로 변경
		 $(".sortBST").css("display","none");	// 왼쪽 상단에 sort 콤보박스 안보이게 css 변경
		 $(".sortRNG").css("display","block");	// 왼쪽 상단에 sort 콤보박스 보이게 css 변경
		adminRNGList();							// 리스트 출력 함수 호출
	 }); //end click 
	 
	// ################################################
	// 자랑하기 리스트를 동적 테이블로 만들기 + ajax로 화면 이동 없이 출력하기
	function adminBSTList(){
		$.ajax({
			type : 'get',
			url : 'adminBST.do',
		    dataType : 'json',											// 받을 때 데이터 타입
			success : function(resultBST){
				
				// ##### 동적으로 런닝구방 리스트 만들기 #####
				var adminBSTList = $("#adminBSTList");					// admin.jsp에 table id를 변수에 저장
				adminBSTList.empty();									// 비워놓고 시작 ==> 기존 리스트가 있을 수 있으니까
				adminBSTList.append("<tr>"
						+ "<th width='200'>프로필사진</th>"
						+ "<th width='100'>작성자</th>"
						+ "<th width='400'>글내용</th>"
						+ "<th width='150'>좋아요수</th>"
						+ "<th width='100'>삭제</th>"
					+"</tr>");
				
				for(row of resultBST){									// 향상된 for문 (list row : resultRNG) ==> 변수명은 상관없음
					console.log(row);									// 데이터가 잘 넘어왔는지 확인
					var tr = $("<tr/>");								// <tr/> 객체 생성
					// ######### 프로필사진 출력 (디비 완성 전까지는 방번호 출력하기)
					var boardID = $("<td id='boardID' width='200' />").html(row.boardID);		// td객체를 생성 ==> roomNumber를 td에 담는다
					tr.append(boardID); 													// tr에 roomNumber를 담은 td를 추가
					
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
					
					adminBSTList.append(tr);
				} // end for문
			},
			error : function(err){
				alert('전송실패');
				console.log(err);
			} //end error		
		})	// end ajax
	}	// end function adminRNGList()

	 // ############ 자랑하기 관리 메뉴를 클릭했을 때  ############
	 $('#adminBST').click(function(evt){
		 evt.preventDefault();				//a태그 기능 무력화
		 evt.stopPropagation();				//a태그 기능 무력화
		 alert("자랑하기 관리 클릭");
		 $("h1").hide();					// 페이지명 보이게 변경
		 $("#h1BST").show();					// 페이지명 보이게 변경
		 
		 $("table").hide();
//		 $(".runninggooManageList").hide();
		 $("#adminBSTList").show();		// 런닝구 리스트를 안보임에서 보임으로 변경
		 $(".sortRNG").css("display","none");	// 왼쪽 상단에 sort 콤보박스 안보이게 css 변경
		 $(".sortBST").css("display","block");	// 왼쪽 상단에 sort 콤보박스 보이게 css 변경
		adminBSTList();							// 리스트 출력 함수 호출
	 }); //end click 
 
	// ################################################
	// 회원관리 리스트를 동적 테이블로 만들기 + ajax로 화면 이동 없이 출력하기
//	function adminBSTList(){
//		$.ajax({
//			type : 'get',
//			url : 'adminBST.do',
//		    dataType : 'json',											// 받을 때 데이터 타입
//			success : function(resultBST){
//				
//				// ##### 동적으로 런닝구방 리스트 만들기 #####
//				var adminBSTList = $("#adminBSTList");					// admin.jsp에 table id를 변수에 저장
//				adminBSTList.empty();									// 비워놓고 시작 ==> 기존 리스트가 있을 수 있으니까
//				adminBSTList.append("<tr>"
//						+ "<th width='200'>프로필사진</th>"
//						+ "<th width='100'>작성자</th>"
//						+ "<th width='400'>글내용</th>"
//						+ "<th width='150'>좋아요수</th>"
//						+ "<th width='100'>삭제</th>"
//					+"</tr>");
//				
//				for(row of resultBST){									// 향상된 for문 (list row : resultRNG) ==> 변수명은 상관없음
//					console.log(row);									// 데이터가 잘 넘어왔는지 확인
//					var tr = $("<tr/>");								// <tr/> 객체 생성
//					// ######### 프로필사진 출력 (디비 완성 전까지는 방번호 출력하기)
//					var boardID = $("<td id='boardID' width='200' />").html(row.boardID);		// td객체를 생성 ==> roomNumber를 td에 담는다
//					tr.append(boardID); 													// tr에 roomNumber를 담은 td를 추가
//					
//					// ##### 작성자, 글내용, 좋아요수, 삭제 출력 #####
//					var memberID = $("<td width='100' />").text(row.memberID);	
//					tr.append(memberID);
//					var boardContent = $("<td width='400' />").html(row.boardContent);
//					tr.append(boardContent);
//					var board_like_count = $("<td width='150' />").html(row.board_like_count);
//					tr.append(board_like_count);
//					// ########## 삭제 버튼 추가  ##########
//					var deleteAdminBST = $("<td width='100' />").html("<button id='deleteAdminBST'>삭제</button>");
//					tr.append(deleteAdminBST);
//					
//					adminBSTList.append(tr);
//				} // end for문
//			},
//			error : function(err){
//				alert('전송실패');
//				console.log(err);
//			} //end error		
//		})	// end ajax
//	}	// end function adminRNGList()
//
//	 // ############ 자랑하기 관리 메뉴를 클릭했을 때  ############
//	 $('#adminBST').click(function(evt){
//		 evt.preventDefault();				//a태그 기능 무력화
//		 evt.stopPropagation();				//a태그 기능 무력화
//		 alert("자랑하기 관리 클릭");
//		 $(".boastManageList").show();		// 런닝구 리스트를 안보임에서 보임으로 변경
//		 $(".runninggooManageList").hide();
//		 $(".sortRNG").css("display","none");	// 왼쪽 상단에 sort 콤보박스 안보이게 css 변경
//		 $(".sortBST").css("display","block");	// 왼쪽 상단에 sort 콤보박스 보이게 css 변경
//		adminBSTList();							// 리스트 출력 함수 호출
//	 }); //end click 
	 
});	// end ready