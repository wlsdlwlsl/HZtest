<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%-- <%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %> --%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>관리자 페이지입니다.</title>
    <!-- 공통 적용 -->
    <link rel="apple-touch-icon" href="apple-touch-icon.jpg">
    <link rel="stylesheet" href="./resources/css/templatemo-style.css">
    <script src="./resources/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
    <!-- 반응형 웹페이지  -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- admin 적용 -->
    <link href="./resources/css/admin/bootstrap.min.css" rel="stylesheet">
    <link href="./resources/css/admin/admin.css" rel="stylesheet">
    <link href="./resources/css/admin/style.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.js" type="text/javascript"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
	<script src="./resources/js/admin/common-scripts.js"></script>
	<script src="./resources/js/admin/adminpage.js"></script>
	
	<!--상품이미지 미리보기--------------------------------------------------------------------------------------------------------- -->
	<script> 
	   function setThumbnail(event) {
	      var reader = new FileReader(); reader.onload = function(event) {
	         $("#productImage_container").empty();//일단 비우자
	         var img = document.createElement("img");
	         img.setAttribute("src", event.target.result);
	         document.querySelector("div#productImage_container").appendChild(img);
	         }; 
	         reader.readAsDataURL(event.target.files[0]); 
	      } 
	</script>
	<!--상품이미지 미리보기--------------------------------------------------------------------------------------------------------- -->
</head>

<body class="boxed-page" >
    <!--sidebar start-->
    <aside>
        <div id="sidebar" tabindex="0" style="overflow: hidden; outline: none;">
            <!-- sidebar menu start-->
            <ul class="sidebar-menu" id="nav-accordion">
            	<ul class="sidebar-menu" style="padding:25px;">
                    <li><a href="adminpage.do">첫페이지</a></li>
                    <li><a href="#adminRNG" id="adminRNG">런닝구 관리</a></li>
                    <li><a href="#adminBST" id="adminBST">자랑하기 관리</a></li>
                    <li><a href="#adminMember" id="adminMember">회원 관리</a></li>
                    <li><a href="#adminOrder" id="adminOrder">쇼핑몰 주문 관리</a></li>
                    <li><a href="#totalproduct" id="totalproduct">쇼핑몰 상품 관리</a></li>
                    <li><a href="gymmanagermng.do">Gym매니저 관리</a></li>
                </ul>
           </ul> <!-- sidebar menu end --> 
        </div>
    </aside><!--sidebar end-->

    <!--main content start-->
    <section id="main-content" >
        <section class="wrapper">
            <!-- 여기부터 내용부 -->
            <div class="row">
                <div class="col-md-12" >
                    <!-- 상단 메뉴 --> 
                    <section class="card">
                        <div class="card-body" >
                            <h1 id="h1Admin">관리자 페이지</h1>           	
                            <h1 id="h1RNG" style="display:none;">런닝구 관리 페이지</h1>
                            <h1 id="h1BST" style="display:none;">자랑하기 관리 페이지</h1>
                            <h1 id="h1Member" style="display:none;">회원 관리 페이지</h1>
                            <h1 id="h1Order" style="display:none;">쇼핑몰 주문 관리 페이지</h1>
                            <h1 id="h1Product" style="display:none;">쇼핑몰 상품 추가 페이지</h1>
                            <h1 id="h1Gym" style="display:none;">Gym매니저 관리 페이지</h1>
                        </div>
                    </section> <!-- end 상단 메뉴 --> 

					<!-- 목록 start -->
                    <div class="row product-list">
                        <div class="col-md-12">
                            <section class="card">
                                <div class="card-body" style="margin:auto;">
                                <!-- 모든 상품 리스트 출력 -->
                                
							    <!-- 상품 추가 start -->
							    <form method="post" action="productsInsert.do" enctype="multipart/form-data" > 
							   	 <table class='table2' >
							        <tr>
							           <td class="normalbold tb_ttl">
							              <div align="center">상품이미지</div>
							           </td>
							           <td colspan="3" class="normal" id="profileTD">
							              <div id="productImage_container"></div>
							              <input type="file" onchange="setThumbnail(event);" name='file' maxlength="60" size="30" accept="image/jpeg,.jpg,.png" required>
							           </td>
							        </tr>
							        <tr> 
							           <td class="normalbold tb_ttl"> 
							              <div align="center">상품ID</div>
							           </td>
							           <td colspan="3" class="normal"> 
							              <input type="text" name="productID" id="productID" size="20"/> 
							           </td>
							       </tr>
							       <tr> 
							           <td class="normalbold tb_ttl"> 
							              <div align="center">상품명</div>
							           </td>
							           <td colspan="3" class="normal"> 
							              <input type="text" name="productName" id="productName" size="20"/> 
							           </td>
							       </tr>
							       <tr> 
							           <td class="normalbold tb_ttl">
							              <div align="center">상품가격</div>
							           </td>
							           <td width="154" class="normal"> 
							              <input type="text" name="productPrice" id="productPrice"/>
							           </td>
							       </tr>
							       <tr> 
							           <td class="normalbold tb_ttl"> 
							              <div align="center">상품 상세 정보</div>
							           </td>
							           <td colspan="3" height="23" class="normal"> 
							           <!-- rows="" cols="" -->
											<textarea name="productContent" id="productContent" ></textarea>
							           </td>
							       </tr>
							       <tr>
							           <td colspan="4" class="normal" width="70%" height="5%"> 
							              <div align="center"> 
							                <input type="submit" class="submitBtn" id="submitBtn" value="등   록"/>
							                <input type="reset" class="submitBtn" value="취   소"/>
							              </div>
							           </td>
							       </tr>
							     </table>
							     </form>
                                </div>
                            </section>
                        </div>  
                    </div>      
                </div>
            </div> <!-- end row -->
        </section> <!-- end wrapper-->
    </section> <!-- end main content -->
	
	<footer id="footer">
	    <div class="container-fluid">
	        <div class="col-md-12">
	        	<a href="#" class="go-top" style="margin-top:20px;"><span style="color:black;">top</span></a>
	            <p id="ff" style="margin-left:210px;">
	            Copyright &copy; 2018 Company Name | Designed by TemplateMo &
	            2018 &copy; FlatLab by VectorLab.
				</p>
	        </div>
	    </div>
	</footer>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>
    <script src="resources/js/vendor/bootstrap.min.js"></script>
    <script src="resources/js/plugins.js"></script>
    <script src="resources/js/main.js"></script>
	
</body>
</html>