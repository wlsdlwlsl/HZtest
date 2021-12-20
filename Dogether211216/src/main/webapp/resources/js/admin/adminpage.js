$(document).ready(function() {
	
	// adminRNGList();				// 시작하자마자 함수 호출 ==> 리스트 바로 띄우기
   
		function adminRNGList(){
			$.ajax({
				type : 'get',
				url : 'adminRNG.do',
			   dataType : 'json',						// 받을 때 데이터 타입
				success : function(resultRNG){
					 //alert(type(resultRNG));				// list로 받아온 댓글들(db에 저장된 값)
					//alert("2"+resultRNG);

					
					// ##### 동적으로 목록 만들기 #####
					var adminRNGList = $("#adminRNGList");			// admin.jsp에 table id를 변수에 저장
					adminRNGList.empty();	// 비워놓고 시작 ==> 기존 목록이 있을 수 있으니까
					
//					$.each(resultRNG, function(index,item){ 
//						alert(item);
//					})
					
				for(row of resultRNG){							// 향상된 for문 (list row : result) ==> 변수명은 상관없음
						console.log(row);
						// <tr><td>${replyVO.rno}</td>
						var tr = $("<tr/>");								// tr(row) 객체 생성
						//######### 프로필사진 출력 (디비 완성 전까지는 방번호 출력하기)
						var roomNumber = $("<td id='roomNumber'/>").html(row['roomNumber']);		// td객체를 생성 ==> rno를 td에 담는다
						console.log(row.roomNumber);
						tr.append(row.roomNumber); 									// tr에 rno를 담은 td를 추가
						
						// ##### 호스트명, 방설명(호스트한마디), 미팅날짜, 삭제 출력 #####
						// <td>${replyVO.replyer}</td>
						// <td>${replyVO.reply}</td>
						var memberID = $("<td/>").text(row['memberID']);	
						tr.append(row.memberID);
						var hostComment = $("<td/>").html(row['hostComment']);
						tr.append(row.hostComment);
						var meetingTime = $("<td/>").text(row['meetingTime']) + "<fmt:formatDate value='${runningGoo.meetingTime }' pattern='yyyy-MM-dd'/>";
						tr.append(row.meetingTime);
//						var deleteAdminRNG = $("<td/>").html(row['deleteAdminRNG']);
						
						// ########## 삭제 버튼 추가  ##########
						tr.append('<td><button class="delete">삭제</button></td>');
						
						adminRNGList.append(tr);
						//adminRNGList.append("sss");
				}
				},
				error : function(err){
					alert('전송실패');
					console.log(err);
				}		
			})	// end of ajax
		}	// end function adminRNGList

		/* ############ 런닝구관리 메뉴를 클릭했을 때  ############*/
	//$(document).on("click","#adminRNG",function(){
alert('1s')
 $('#adminRNG').click(function(){
	 alert("런닝구 관리 페이지로 이동 클릭");
		adminRNGList();
 });
			
//	}) // end on click 						// 페이지 로딩이 모두 끝나고 맨 마지막에 실행 ==> document 셀렉트 찾아보기
});	// end ready