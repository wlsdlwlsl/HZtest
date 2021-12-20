$(document).ready(function() {
   // 런닝구 방리스트를 동적 테이블로 만들기 + ajax로 화면 이동 없이 출력하기
	function adminRNGList(){
		$.ajax({
			type : 'get',
			url : 'adminRNG.do',
		   dataType : 'json',											// 받을 때 데이터 타입
			success : function(resultRNG){
				
				// ##### 동적으로 런닝구방 리스트 만들기 #####
				var adminRNGList = $("#adminRNGList");					// admin.jsp에 table id를 변수에 저장
				//adminRNGList.empty();									// 비워놓고 시작 ==> 기존 리스트가 있을 수 있으니까
				
				for(row of resultRNG){									// 향상된 for문 (list row : resultRNG) ==> 변수명은 상관없음
					// console.log(row);									// 데이터가 잘 넘어왔는지 확인
					var tr = $("<tr/>");								// <tr/> 객체 생성
					// ######### 프로필사진 출력 (디비 완성 전까지는 방번호 출력하기)
					var roomNumber = $("<td id='roomNumber'/>").html(row.roomNumber);		// td객체를 생성 ==> roomNumber를 td에 담는다
					tr.append(roomNumber); 													// tr에 roomNumber를 담은 td를 추가
					
					// ##### 호스트명, 방설명(호스트한마디), 미팅날짜, 삭제 출력 #####
					var memberID = $("<td/>").text(row.memberID);	
					tr.append(memberID);
					var hostComment = $("<td/>").html(row.hostComment);
					tr.append(hostComment);
					var meetingTime = $("<td/>").html(row.meetingTime);
					tr.append(meetingTime);
					// ########## 삭제 버튼 추가  ##########
					var deleteAdminRNG = $("<td/>").html("<button id='deleteAdminRNG'>삭제</button>");
					tr.append(deleteAdminRNG);
					
					adminRNGList.append(tr);
				} // end for문
			},
			error : function(err){
				alert('전송실패');
				console.log(err);
			} //end error		
		})	// end ajax
	}	// end function adminRNGList()

	 // ############ 런닝구관리 메뉴를 클릭했을 때  ############
	 $('#adminRNG').click(function(evt){
		 evt.preventDefault();				//a태그 기능 무력화
		 evt.stopPropagation();				//a태그 기능 무력화
		 //alert("런닝구 관리 페이지로 이동 클릭");
			adminRNGList();
	 });
	 
	// 자랑하기 리스트를 동적 테이블로 만들기 + ajax로 화면 이동 없이 출력하기
		function adminBoast(){
			$.ajax({
				type : 'get',
				url : 'adminRNG.do',
			   dataType : 'json',											// 받을 때 데이터 타입
				success : function(resultRNG){
					
					// ##### 동적으로 런닝구방 리스트 만들기 #####
					var adminRNGList = $("#adminRNGList");					// admin.jsp에 table id를 변수에 저장
					adminRNGList.empty();									// 비워놓고 시작 ==> 기존 리스트가 있을 수 있으니까
					
					for(row of resultRNG){									// 향상된 for문 (list row : resultRNG) ==> 변수명은 상관없음
						// console.log(row);									// 데이터가 잘 넘어왔는지 확인
						var tr = $("<tr/>");								// <tr/> 객체 생성
						// ######### 프로필사진 출력 (디비 완성 전까지는 방번호 출력하기)
						var roomNumber = $("<td id='roomNumber'/>").html(row.roomNumber);		// td객체를 생성 ==> roomNumber를 td에 담는다
						tr.append(roomNumber); 													// tr에 roomNumber를 담은 td를 추가
						
						// ##### 호스트명, 방설명(호스트한마디), 미팅날짜, 삭제 출력 #####
						var memberID = $("<td/>").text(row.memberID);	
						tr.append(memberID);
						var hostComment = $("<td/>").html(row.hostComment);
						tr.append(hostComment);
						var meetingTime = $("<td/>").html(row.meetingTime);
						tr.append(meetingTime);
						// ########## 삭제 버튼 추가  ##########
						var deleteAdminRNG = $("<td/>").html("<button id='deleteAdminRNG'>삭제</button>");
						tr.append(deleteAdminRNG);
						
						adminRNGList.append(tr);
					} // end for문
				},
				error : function(err){
					alert('전송실패');
					console.log(err);
				} //end error		
			})	// end ajax
		}	// end function adminRNGList()

		 // ############ 런닝구관리 메뉴를 클릭했을 때  ############
		 $('#adminRNG').click(function(evt){
			 evt.preventDefault();				//a태그 기능 무력화
			 evt.stopPropagation();				//a태그 기능 무력화
			 //alert("런닝구 관리 페이지로 이동 클릭");
				adminRNGList();
		 });
 
});	// end ready