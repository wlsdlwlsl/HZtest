<%@page contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="resources/css/runninggooMain.css">
<link rel="stylesheet" href="resources/css/NAVandFOOTER.css">
<!-- 	<link rel="stylesheet" href="resources/css/templatemo-style.css">
 -->
<script src="https://code.jquery.com/jquery-3.6.0.js"
	type="text/javascript"></script>
<script src="resources/js/plugins.js"></script>
<script src="resources/js/main.js"></script>
<script type="text/javascript" src="resources/js/bootstrap.js"></script>
<script src="resources/js/RunningGoo.js"></script>
<title>런닝구</title>
</head>
<body>
	<!-- header -->
	<nav>
		<div class="logo">
			<a href="index.jsp">DO<em>GETHER</em></a>
		</div>
		<div class="menu-icon">
			<span></span>
		</div>
	</nav>

	<!-- DB에서 forEach 돌며 값 불러오기 -->
	<div class="col-12 rn_room_list_wrap">
		<c:forEach items="${RunningGooList }" var="runninggoo">
			<div class="col-12 runninggoo_card_wrap">
				<div class="col-12 runninggoo_card_inner mb30">
					<div class="col-12 rn_card_user_profile">
						<div class="col-0 rn_profile_picture">
							<img src="resources/img/runninggooimage/default_profile.png" alt="(DB에서)">
						</div>
						<div class="col-0 rn_profile_nickname">${runninggoo.memberID }</div>
						<div class="col-0 rn_profile_eval">별점</div>
					</div>
					<div class="col-12 kakao_map">
					</div>
					<div class="col-12 rn_card_check_box">
						<div class="col-4 rn_card_sports_event_choice">
							<p class="rn_room_hashtag">#스포츠 종목</p>
							<input type="checkbox" checked> 런닝
						</div>
						<div class="col-4 rn_card_sports_location_choice">
							<p class="rn_room_hashtag">#장소</p>
							<input type="checkbox" checked> 안양천
						</div>
						<div class="col-4 rn_card_sports_age_choice">
							<p class="rn_room_hashtag">#연령대</p>
							<input type="checkbox" checked> 30대<br /> 
							<input type="checkbox" checked> 40대
						</div>
					</div>
					<div class="col-12 rn_card_host_comment_box">
						<div class="balloon">
							<p class="rn_room_hashtag">#호스트 코멘트</p>
							<div class="col-12 rn_card_host_comment">${runninggoo.hostComment }</div>
						</div>
					</div>
					<div class="col-12 doJoinBtn">
					<input type="button" value="DoJoin">
				</div>
				</div>
				<div class="wido" style="display: none">${runninggoo.locationLat}</div>
				<div class="gyeongdo" style="display: none">${runninggoo.locationLong}</div>
			</div>
		</c:forEach>
		<div class="col-12 rn_plus_btn">
			<a href="createRngRoom.do" class="rn_plus_btn_link"> <img
				src="resources/img/runninggooimage/rng_plus_btn.png">
			</a>
		</div>

		<div class="col-12 rn_top_btn">
			<a href="#">▲ 맨 위로</a>
		</div>
	</div>

	<!-- <!-- footer
	<footer id="footer">
		<div class="container-fluid">
			<div class="col-md-12">
				<p id="ff">Copyright &copy; 2018 Company Name | Designed by
					TemplateMo</p>
			</div>
		</div>
	</footer> -->
	
	<div class="rngForEachLength">${rnRoomCNT }</div>
	

	<script type="text/javascript"src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b002992ff5db3facd06fff2ffcf08711"></script>
	<script type="text/javascript" src="resources/js/kakaoMap.js"></script>
	
</body>
</html>