<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  		<title>DOGETHER</title>

        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="apple-touch-icon.jpg">

        <link rel="stylesheet" href="./resources/css/bootstrap.min.css">
        <link rel="stylesheet" href="./resources/css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="./resources/css/fontAwesome.css">
        <link rel="stylesheet" href="./resources/css/light-box.css">
        <link rel="stylesheet" href="./resources/css/templatemo-style.css">

        <link href="https://fonts.googleapis.com/css?family=Kanit:100,200,300,400,500,600,700,800,900" rel="stylesheet">

        <script src="./resources/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
    </head>

<body>

    <nav>
        <div class="logo">
            <a href="index.html">DO<em>GETHER</em></a>
        </div>
        <div class="menu-icon">
        <span></span>
      </div>
    </nav>

    <div id="video-container">
        <div class="video-overlay"></div>
        <div class="video-content">
            <div class="inner">
              <a href="index.jsp"><h1>Welcome to <em>DOGETHER</em></h1></a>
              <p>저희는 당신의 건강을 위한 서비스를 제공합니다</p>
              <p>We provide services for your health</p>
                <div class="scroll-icon">
                    <a class="scrollTo" data-scrollTo="portfolio" href="#"><img src="./resources/img/scroll-icon.png" alt=""></a>
                </div>    
            </div>
        </div>
        <video autoplay loop muted>
        	<source src="./resources/video/aaaaa.mp4" type="video/mp4" />
        </video>
    </div>


    <div class="full-screen-portfolio" id="portfolio">
        <div class="container-fluid">
            <div class="col-md-4 col-sm-6">
                <div class="portfolio-item">
                    <a href="./resources/img/running.png" data-lightbox="image-1"><div class="thumb">
                        <div class="hover-effect">
                            <div class="hover-content">
                                <h1>런닝구</h1>
                                <p>당신의 운동메이트를 매칭해드립니다.</p>
                            </div>
                        </div>
                        <div class="image">
                            <img src="./resources/img/running.png" width="466" height="360">
                        </div>
                    </div></a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="portfolio-item">
                    <a href="./resources/img/gym.png" data-lightbox="image-1"><div class="thumb">
                        <div class="hover-effect">
                            <div class="hover-content">
                                <h1>Gym 예약할까</h1>
                                <p>근처 Gym을 당일로 이용하세요.</p>
                            </div>
                        </div>
                        <div class="image">
                            <img src="./resources/img/gym.png" width="466" height="360">
                        </div>
                    </div></a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="portfolio-item">
                    <a href="./resources/img/jarang.png" data-lightbox="image-1"><div class="thumb">
                        <div class="hover-effect">
                            <div class="hover-content">
                                <h1>자랑하기</h1>
                                <p>당신의 자랑거리를 보여주세요.</p>
                            </div>
                        </div>
                        <div class="image">
                            <img src="./resources/img/jarang.png" width="466" height="360">
                        </div>
                    </div></a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="portfolio-item">
                    <a href="./resources/img/pt.png" data-lightbox="image-1"><div class="thumb">
                        <div class="hover-effect">
                            <div class="hover-content">
                                <h1>온라인 PT</h1>
                                <p>지금 당장 운동을 시작해 보세요.</p>
                            </div>
                        </div>
                        <div class="image">
                            <img src="./resources/img/pt.png" width="466" height="360">
                        </div>
                    </div></a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="portfolio-item">
                    <a href="./resources/img/bogun.png" data-lightbox="image-1"><div class="thumb">
                        <div class="hover-effect">
                            <div class="hover-content">
                                <h1>보건소 찾기</h1>
                                <p>BMI지수를 확인할수 있는 보건소를 찾아드립니다.</p>
                            </div>
                        </div>
                        <div class="image">
                            <img src="./resources/img/bogun.png" width="466" height="360">
                        </div>
                    </div></a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="portfolio-item">
                    <a href="./resources/img/store.png" data-lightbox="image-1"><div class="thumb">
                        <div class="hover-effect">
                            <div class="hover-content">
                                <h1>쇼핑몰</h1>
                                <p>다양한 건강 먹거리를 구매할 수 있습니다.</p>
                            </div>
                        </div>
                        <div class="image">
                            <img src="./resources/img/store.png" width="466" height="360">
                        </div>
                    </div></a>
                </div>
            </div>

        </div>
    </div>


    <footer>
        <div class="container-fluid">
            <div class="col-md-12">
                <p>Copyright &copy; 2018 Company Name 
    
    | Designed by TemplateMo</p>
            </div>
        </div>
    </footer>


      <!-- Modal button -->
    <div class="popup-icon">
      <button id="modBtn" class="modal-btn"><a href="mailto:zero-mook@naver.com"><img src="./resources/img/contact-icon.png" alt=""></a></button>
    </div>  



    

    <section class="overlay-menu">
      <div class="container">
        <div class="row">
          <div class="main-menu">
              <ul>
              
                  <li>
                      <a href="#">런닝구</a>
                  </li>
                  <li>
                      <a href="#">Gym 예약할까</a>
                  </li>
                  <li>
                      <a href="#">온라인 PT</a>
                  </li>
                  <li>
                      <a href="#">자랑하기</a>
                  </li>
                  <li>
                      <a href="#">BMI 측정가능 보건소</a>
                  </li>
                  <li>
                      <a href="#">쇼핑몰</a>
                  </li>
                  <li>
                      <a href="Mypage">마이페이지</a>
                  </li>
                  
              </ul>
          </div>
        </div>
      </div>
    </section>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="./resources/js/vendor/jquery-1.11.2.min.js"><\/script>')</script>

    <script src="./resources/js/vendor/bootstrap.min.js"></script>
    
    <script src="./resources/js/plugins.js"></script>
    <script src="./resources/js/main.js"></script>

    
</body>
</html>