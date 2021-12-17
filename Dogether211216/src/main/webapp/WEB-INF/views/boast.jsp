<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="http://code.jquery.com/jquery-latest.js"></script>
<link rel="stylesheet" href="./resources/css/templatemo-style.css">
<link rel="stylesheet" href="./resources/css/boast.css">
<link rel="stylesheet" href="./resources/css/boast2.css">

<script src="./resources/js/plugins.js"></script>
<script src="./resources/js/boast.js"></script>
<script src="./resources/js/main.js"></script>
<title>자랑하기</title>
</head>
<body>
	<nav>
		<div class="logo">
			<a href="index.jsp">DO<em>GETHER</em></a>
		</div>
		<div class="menu-icon">
			<span></span>
		</div>
	</nav>

	<section class="overlay-menu">
		<div class="container">
			<div class="row">
				<div class="main-menu">
					<ul>
						<li><a href="#">런닝구</a></li>
						<li><a href="#">Gym 예약할까</a></li>
						<li><a href="#">온라인 PT</a></li>
						<li><a href="#">자랑하기</a></li>
						<li><a href="#">BMI 측정가능 보건소</a></li>
						<li><a href="#">쇼핑몰</a></li>
						<li><a href="Mypage">마이페이지</a></li>

					</ul>
				</div>
			</div>
		</div>
	</section>

	<div id="ontheside">
		<div class="mainContainer">
			<div class="plusdiv">
				<img src="resources/img/imgforboard/plus_icon.png" alt="plus.png"
					class="plusButton" style="cursor: pointer;">
				<div class="postdiv">
					<div>
						<button>인기순</button>
					</div>
					<div>
						<button>최신순</button>
					</div>
				</div>
			</div>
			<c:set var="count" value="0" />
			<c:forEach var="item" items="${list}">
				<c:set var="count" value="${count + 1}" />
				<input type="hidden" value="${item.boardID }">
				<div class="card">
					<div id="userdiv">
						<img src="resources/img/imgforboard/default_person.png"
							id="userpic"> ${item.memberID}
					</div>
					<div id="content">
						<div id="pic"
							style='background-image: url(./resources/img/imgforboard/img.png)'></div>
					</div>

					<div id="cardContent">
						<button class="likeButton">좋아요♡</button>
						<p id="usernameforcontent">${item.memberID }</p>
						<p id="boardContent">${item.boardContent }</p>
						<div id="likeCount">좋아요 ${item.board_like_count }개</div>
						
						<!-- 댓글 부분 -->
						
					
						<div id="commentside">
							<div id="writernameforcomment">USERNAME</div>
							<input type="text" class="comment">
							<button id="commentbutton">댓글달기</button>
						</div>
					</div>
				</div>
			</c:forEach>

			<!-- 
			<div class="card">
				<div id="userdiv">
					<img src="resources/img/imgforboard/default_person.png"
						id="userpic"> USERNAME
				</div>
				<div id="content">
					<div id="pic"
						style='background-image: url(./resources/img/imgforboard/img.png)'></div>
				</div>
				<div id="cardContent">
					<button class="likeButton">좋아요♡</button>
					<p id="usernameforcontent">USERNAME</p>
					<p id="boardContent">내가 우리학교 짱 내가 우리학교 짱 내가 우리학교 짱 내가 우리학교 짱 내가
						우리학교 짱</p>
					<div id="likeCount">좋아요 0개</div>
					<div class="comments">
						<ul id="forid">
							<li id="commentwriter" class="reply">홍길동</li>
							<li class="reply">ㅄㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</li>
						</ul>
						<ul id="forid">
							<li id="commentwriter" class="reply">김길동</li>
							<li class="reply">ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</li>
						</ul>
					</div>
					<div id="commentside">
						<div id="writernameforcomment">Writer</div>
						<input type="text" class="comment">
						<button id="commentbutton">댓글달기</button>
					</div>
				</div>
			</div>
 -->
 
 
		</div>
	</div>
	<footer id="footer">
		<div class="container-fluid">
			<div class="col-md-12">
				<p id="ff">Copyright &copy; 2018 Company Name | Designed by
					TemplateMo</p>
			</div>
		</div>
	</footer>


</body>
</html>