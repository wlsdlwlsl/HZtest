<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Highway - Free CSS Template</title>
<!-- 

Highway Template https://templatemo.com/tm-520-highway

-->
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="apple-touch-icon" href="apple-touch-icon.jpg">

<link rel="stylesheet" href="./resources/css/bootstrap.min.css">
<link rel="stylesheet" href="./resources/css/bootstrap-theme.min.css">
<link rel="stylesheet" href="./resources/css/fontAwesome.css">
<link rel="stylesheet" href="./resources/css/light-box.css">
<link rel="stylesheet" href="./resources/css/templatemo-style.css">
<link rel="stylesheet" href="./resources/css/loginformstyle.css">

<link
	href="https://fonts.googleapis.com/css?family=Kanit:100,200,300,400,500,600,700,800,900"
	rel="stylesheet">


<script src="./resources/js/vendor/jquery-1.11.2.min.js"></script>
<script src="./resources/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="./resources/js/main.js"></script>
 
<style>
	.image>img {
		width: 100%;
		height: 400px;
	}
</style>


</head>

<body>
	<nav>
		<div class="logo">
			<a href="index.jsp">Do<em>gether</em></a>
		</div>
		<button id="login" class="btn btn mainlog" style="float: right;">Login</button>
	</nav>


	<div class="login">
		<h2>Log-in</h2>
		<div class="login_id">
			<h4>ID</h4>
			<input type="text" name="" id="" placeholder="id">
		</div>
		<div class="login_pw">
			<h4>Password</h4>
			<input type="password" name="" id="z" placeholder="Password">
		</div>
		<div class="submit">
			<input type="submit" value="로그인하기"><br>
			<br>
			
			<input type="button" id="joining" value="회원가입하러가기" >
			
		</div>
    </div>


	<div id="video-container">
		<div class="video-overlay"></div>
		<div class="video-content">
			<div class="inner">
				<h1>
					Welcome to <em>Dogether</em>
				</h1>
				<p>Let's work out Together</p>
				<p>Enjoy your life with the Dogether</p>
				<div class="scroll-icon">
					<a class="scrollTo" data-scrollTo="portfolio" href="#"><img
						src="./resources/img/imgformain/scroll-icon.png" alt=""></a>
				</div>
			</div>
		</div>
		<video autoplay loop muted>
			<source src="./resources/img/mp4/motion.mp4" type="video/mp4" />
		</video>
	</div>


	<div class="full-screen-portfolio" id="portfolio">
		<div class="container-fluid">
			<div class="col-md-4 col-sm-6">
				<div class="portfolio-item">
					<a href="runninggoo.do" data-lightbox="image-1"><div class="thumb">
							<div class="hover-effect">
								<div class="hover-content">
									<h1>
										런닝구 <em>runninggoo</em>
									</h1>
									<p>같이 뛰기</p>
								</div>
							</div>
							<div class="image">
								<img src="./resources/img/imgformain/runz.jpg">
							</div>
						</div></a>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="portfolio-item">
					<a href="gym.do" data-lightbox="image-1"><div class="thumb">
							<div class="hover-effect">
								<div class="hover-content">
									<h1>
										짐 <em>gym</em>
									</h1>
									<p>근거리 헬스장 일일권 예약하러 가기</p>
								</div>
							</div>
							<div class="image">
								<img src="./resources/img/imgformain/gym.jpg">
							</div>
						</div></a>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="portfolio-item">
					<a href="aihometraining.do" data-lightbox="image-1"><div class="thumb">
							<div class="hover-effect">
								<div class="hover-content">
									<h1>
										홈피티 <em>home pt</em>
									</h1>
									<p>집에서도 간편하게 운동하기</p>
								</div>
							</div>
							<div class="image">
								<img src="./resources/img/imgformain/homept.jpg">
							</div>
						</div></a>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="portfolio-item">
					<a href="boast.do" data-lightbox="image-1"><div class="thumb">
							<div class="hover-effect">
								<div class="hover-content">
									<h1>
										자랑하기 <em>boast</em>
									</h1>
									<p>나의 건강한 라이프 스타일 뽐내기</p>
								</div>
							</div>
							<div class="image">
								<img src="./resources/img/imgformain//horn.jpg">
							</div>
						</div></a>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="portfolio-item">
					<a href="shoppingmall.do" data-lightbox="image-1"><div class="thumb">
							<div class="hover-effect">
								<div class="hover-content">
									<h1>
										쇼핑몰 <em>shoppingmall</em>
									</h1>
									<p>쇼핑하러 가기</p>
								</div>
							</div>
							<div class="image">
								<img src="./resources/img/imgformain/shop.jpg">
							</div>
						</div></a>
				</div>
			</div>
			<div class="col-md-4 col-sm-6">
				<div class="portfolio-item">
					<a href="sleep.do" data-lightbox="image-1"><div class="thumb">
							<div class="hover-effect">
								<div class="hover-content">
									<h1>
										보건소 & 수면시간 <em>check</em>
									</h1>
									<p>전국 인바디 측정 센터 확인하기 | 수면시간 계산하기</p>
								</div>
							</div>
							<div class="image">
								<img src="./resources/img/imgformain//health check.png">
							</div>
						</div></a>
				</div>
			</div>
		</div>
	</div>

	<footer>
		<div class="container-fluid">
			<div class="col-md-12">
				<p>Copyright &copy; 2018 Company Name | Designed by TemplateMo</p>
			</div>
		</div>
	</footer>

	<!-- Modal button -->

	<div class="popup-icon">
		<!--<button id="modBtn" class="modal-btn"></button>-->
		<a href="mailto:mickuc0.gmail.com"><img
			src="./resources/img/imgformain/contact-icon.png" alt=""></a></a>
	</div>

	<!-- Modal -->
	<!--<div id="modal" class="modal">-->
	<!-- Modal Content -->
	<!--  <div class="modal-content">-->
	<!-- Modal Header -->
	<!--
        <div class="modal-header">
          <h3 class="header-title">1:1 <em>문의하기</em></h3>
          <div class="close-btn"><img src="img/close_contact.png" alt=""></div>    
        </div>

        -->
	<!-- Modal Body -->
	<!--<div class="modal-body">
          <div class="col-md-6 col-md-offset-3">
            <form id="contact" action="" method="post">
                <div class="row">
                    <div class="col-md-12">
                      <fieldset>
                        <input name="name" type="text" class="form-control" id="name" placeholder="이름" required>
                      </fieldset>
                    </div>
                    <div class="col-md-12">
                      <fieldset>
                        <input name="email" type="email" class="form-control" id="email" placeholder="이메일" required>
                      </fieldset>
                    </div>
                    <div class="col-md-12">
                      <fieldset>
                        <textarea name="message" rows="6" class="form-control" id="message" placeholder="궁금한 문의사항" required></textarea>
                      </fieldset>
                    </div>
                    <div class="col-md-12">
                      <fieldset>
                        <button type="submit" id="form-submit" class="btn">Send Message Now</button>
                      </fieldset>
                    </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
-->


	<section class="overlay-menu">
		<div class="container">
			<div class="row">
				<div class="main-menu">
					<ul>
						<li><a href="index.html">Home - Full-width</a></li>
						<li><a href="masonry.html">Home - Masonry</a></li>
						<li><a href="grid.html">Home - Small-width</a></li>
						<li><a href="about.html">About Us</a></li>
						<li><a href="blog.html">Blog Entries</a></li>
						<li><a href="single-post.html">Single Post</a></li>
						<li><a href="Mypage.do">마이페이지</a></li>
					</ul>
					<p>We create awesome templates for you.</p>
				</div>
			</div>
		</div>
	</section>




</body>
</html>