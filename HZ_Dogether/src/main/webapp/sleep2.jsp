<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">

<!-- 필요 없는 거 주석부터 달기!! -->
<head>
	
	<meta charset="utf-8">
	<title>Best Sleep Time in Dogether!</title>
	<script src="https://code.jquery.com/jquery-3.6.0.js"	type="text/javascript"></script>
	<script src="/resources/js/sleep.js"></script>
	<script>
		$(document).ready(function() {
			$('.back').click(function() {
				window.location = "sleep.jsp"; 
			});

			/* ############ 일어날 시간을 입력했을 때  ############*/
			$('#calculate').click(function() {
				if($('#hour').val() != '(hour)' && $('#minute').val() != '(minute)') {
					$('#start').hide();
					var setTime = new Date();

					if($('#hour').val() == 12) {
						$('#hour').val(0);
					}

					if($('#ampm').val() == "AM") {
						setTime.setHours($('#hour').val());
					}
					
					else if($('#ampm').val() == "PM") {
						setTime.setHours(+$('#hour').val() + 12);
					}

					setTime.setMinutes($('#minute').val());

					var res1 = new Date(setTime.getTime() - 270*60000);
					var res2 = new Date(res1.getTime() - 90*60000);
					var res3 = new Date(res2.getTime() - 90*60000);
					var res4 = new Date(res3.getTime() - 90*60000);
					var res5 = new Date(res4.getTime() - 90*60000);
					var res6 = new Date(res5.getTime() - 90*60000);

					function retDate(dateObj) {
						var formatted = '';
						var pm = false;
						if(dateObj.getHours() > 12) {
							formatted = dateObj.getHours() - 12;
							pm = true;
						} else if(dateObj.getHours() < 12 && dateObj.getHours() != 0) {
							formatted = dateObj.getHours();
						} else if(dateObj.getHours() == 0){
							formatted = "12";
						} else if(dateObj.getHours() == 12){
							formatted = "12";
							pm = true;
						}
						if(dateObj.getMinutes() < 10) {
							formatted = formatted + ":0" + dateObj.getMinutes();
						} else {
							formatted = formatted + ":" + dateObj.getMinutes();
						}
						if(pm == true) {
							formatted = formatted + " PM";
						} else {
							formatted = formatted + " AM";
						}
						return formatted;
					}
					
					$('#result6').html(String(retDate(res1)));
					$('#result5').html(String(retDate(res2))); 
 					$('#result4').html(String(retDate(res3)));
					$('#result3').html(String(retDate(res4)));
					$('#result2').html(String(retDate(res5)));
					$('#result1').html(String(retDate(res6)));
			
					$('#results').fadeIn();
					$('#feedback').fadeIn();
					$('#ad').fadeIn();
				} // end hour/minute check if
				else {
					alert("일어날 시간을 선택해주세요!");
				} // end not-filled check
			}); // end calculate

			/* ########## 자러갈 시간을 입력했을 때 ########## */
			$('#calc').click(function() {
				if($('#hour2').val() != '(hour)' && $('#minute2').val() != '(minute)') {
					$('#start').hide();
					var setTime = new Date();

					if($('#hour2').val() == 12) {
						$('#hour2').val(0);
					}

					if($('#ampm2').val() == "AM") {
						setTime.setHours($('#hour2').val());
					}
					else if($('#ampm2').val() == "PM") {
						setTime.setHours(+$('#hour2').val() + 12);
					}

					setTime.setMinutes($('#minute2').val());

					var res1 = new Date(setTime.getTime() + 90*60000);
					var res2 = new Date(res1.getTime() + 90*60000);
					var res3 = new Date(res2.getTime() + 90*60000);
					var res4 = new Date(res3.getTime() + 90*60000);
 					var res5 = new Date(res4.getTime() + 90*60000);
					var res6 = new Date(res5.getTime() + 90*60000); 

					function retDate(dateObj) {
						var formatted = '';
						var pm = false;
						if(dateObj.getHours() > 12) {
							formatted = dateObj.getHours() - 12;
							pm = true;
						} else if(dateObj.getHours() < 12 && dateObj.getHours() != 0) {
							formatted = dateObj.getHours();
						} else if(dateObj.getHours() == 0){
							formatted = "12";
						} else if(dateObj.getHours() == 12){
							formatted = "12";
							pm = true;
						}
						if(dateObj.getMinutes() < 10) {
							formatted = formatted + ":0" + dateObj.getMinutes();
						} else {
							formatted = formatted + ":" + dateObj.getMinutes();
						}
						if(pm == true) {
							formatted = formatted + " PM";
						} else {
							formatted = formatted + " AM";
						}
						return formatted;
					}

					
 					$('#result6').html(String(retDate(res6)));
					$('#result5').html(String(retDate(res5))); 
 					$('#result4').html(String(retDate(res4)));
					$('#result3').html(String(retDate(res3)));
					$('#result2').html(String(retDate(res2)));
					$('#result1').html(String(retDate(res1)));
			
					$('#results').show();
				} // end hour/minute check if
				else {
					alert("자러갈 시간을 선택해주세요!");
				} // end not-filled check
			}); // end calc
			
			/* ########### 지금 잘까! ########### */
			$('#zzz').click(function() {
				$('#start').hide();
				var zDate = new Date();

				var res1 = new Date(zDate.getTime() + 104*60000);
				var res2 = new Date(res1.getTime() + 90*60000);
				var res3 = new Date(res2.getTime() + 90*60000);
				var res4 = new Date(res3.getTime() + 90*60000);
				var res5 = new Date(res4.getTime() + 90*60000);
				var res6 = new Date(res5.getTime() + 90*60000);

				function retDate(dateObj) {
					var formatted = '';
					var pm = false;
					if(dateObj.getHours() > 12) {
						formatted = dateObj.getHours() - 12;
						pm = true;
					} else if(dateObj.getHours() < 12 && dateObj.getHours() != 0) {
						formatted = dateObj.getHours();
					} else if(dateObj.getHours() == 0) {
						formatted = "12";
					} else if(dateObj.getHours() == 12) {
						formatted = "12";
						pm = true;
					}
					if(dateObj.getMinutes() < 10) {
						formatted = formatted + ":0" + dateObj.getMinutes();
					} else {
						formatted = formatted + ":" + dateObj.getMinutes();
					}
					if(pm == true) {
						formatted = formatted + " PM";
					} else {
						formatted = formatted + " AM";
					}
					return formatted;
				}

				$('#resultNow1').html(String(retDate(res1)));
				$('#resultNow2').html(String(retDate(res2)));
				$('#resultNow3').html(String(retDate(res3)));
				$('#resultNow4').html(String(retDate(res4)));
				$('#resultNow5').html(String(retDate(res5)));
				$('#resultNow6').html(String(retDate(res6)));
			
				$('#resultsNow').fadeIn();
			});
		});
	</script>
</head>
<body>

	<div class="row">
		<div align="center" class="twelve columns">
			<h2 style="text-align: center; font-size:150%;">Dogether에서<br>최적의 수면시간을<br>추천해드릴게요! </h2>
		<div id="start">
			<p><span style="font-size: 150%;">일어나야 할 시간을 알려주세요!</span><br/></p>
			<div style="text-align: center; margin-top: -20px;">
			<select id="hour" style="background-color: #001f3f;">
				<option>(hour)</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
				<option>5</option>
				<option>6</option>
				<option>7</option>
				<option>8</option>
				<option>9</option>
				<option>10</option>
				<option>11</option>
				<option>12</option>
			</select>
			<select id="minute" style="background-color: #001f3f;">
				<option>(minute)</option>
				<option>00</option>
				<option>05</option>
				<option>10</option>
				<option>15</option>
				<option>20</option>
				<option>25</option>
				<option>30</option>
				<option>35</option>
				<option>40</option>
				<option>45</option>
				<option>50</option>
				<option>55</option>
			</select>
			<select id="ampm" style="background-color: #001f3f;">
				<option>AM</option>
				<option>PM</option>
			</select>
			<br/>
				<button id="calculate"style="margin-top:20px;">잠자리에 들 시간 추천받기</button>
			<br/>
		</div> <!-- 일어날 시간 추천받기 end -->
		
		<p><span style="font-size: 150%;">자러갈 시간을 알려주세요!</span></p>
		<div style="text-align: center; margin-top: -20px;">
			<select id="hour2" style="background-color: #001f3f;">
				<option>(hour)</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
				<option>5</option>
				<option>6</option>
				<option>7</option>
				<option>8</option>
				<option>9</option>
				<option>10</option>
				<option>11</option>
				<option>12</option>
			</select>
			<select id="minute2" style="background-color: #001f3f;">
				<option>(minute)</option>
				<option>00</option>
				<option>05</option>
				<option>10</option>
				<option>15</option>
				<option>20</option>
				<option>25</option>
				<option>30</option>
				<option>35</option>
				<option>40</option>
				<option>45</option>
				<option>50</option>
				<option>55</option>
			</select>
			<select id="ampm2" style="background-color: #001f3f;">
				<option>AM</option>
				<option>PM</option>
			</select>
			<br/>
				<button id="calc" style="margin-top:20px;">일어날 시간 추천받기</button>
			<br/>
		</div>

 
		<p><span style="font-size: 150%;padding: 0px 10px;">지금 잘까!</span></p>
			<button id="zzz" style="margin-top:0px;">ZZZ</button>
	
	</div>
		</div> <!-- end #start -->
		
		<!-- 일어나야 할 시간 입력할 때 -->	
		<div id="results" style="display:none;">
			<span id="result1" style="font-size: 300%; color: rgb(168, 39, 254);" title="One Cycle: One and a half Hours of Sleep"></span> <i style="font-size: 150%;">&nbsp;or </i>
			<span id="result2" style="font-size: 300%; color: rgb(154, 3, 254);" title="Two Cycles: Three Hours of Sleep"></span> <i style="font-size: 150%;">&nbsp;or </i>
			<span id="result3" style="font-size: 300%; color: rgb(150, 105, 254);" title="Three Cycles: Four and a half Hours of Sleep"></span> <i style="font-size: 150%;">&nbsp;or </i>
			<span id="result4" style="font-size: 300%; color: rgb(140, 140, 255);" title="Four Cycles: Six Hours of Sleep"></span> <i style="font-size: 150%;">&nbsp;or </i>
			<span id="result5" style="font-size: 300%; color: rgb(187, 187, 255);" title="Five Cycles: Seven and a half Hours of Sleep"></span> <i style="font-size: 150%;">&nbsp;or </i>
			<span id="result6" style="font-size: 300%; color: rgb(123, 30, 150);" title="Six Cycles: Nine Hours of Sleep"></span>
			<br>
			<p style="font-size: 140%; color: rgb(0, 128, 255);">많은 사람들이 잠드는 데 평균적으로<b> 15분</b> 정도 소요된다고 해요!</p>
			<p style="font-size: 130%; color: rgb(153, 102, 204);">연구에 따르면 <b>수면 사이클</b> 중간에 잠에서 깨게 되면, 평소보다 <i> 피로감</i>을 느낄 수 있다고 해요.</br> Dogether에서 추천해드리는 시간으로 최적의 컨디션으로 깨어나세요!</p>
			
			<a class="back" href="#" style="font-size: 200%;color: #cdbc67;">다른 시간 추천받기</a><br/>
			
			<br><br>
		</div><!-- end results -->
		
		<!-- 지금 잘까! -->
			<div id="resultsNow" style="display:none;">
				<p style="font-size: 140%">지금 잠자리에 들었을 때, 최적의 기상시간을 Dogether에서 알려드릴게요!</p>
				<span id="resultNow1" style="font-size: 300%; color: rgb(168, 39, 254);" title="One Cycle: One and a half Hours of Sleep"></span> <i style="font-size: 150%;">&nbsp;or </i>
				<span id="resultNow2" style="font-size: 300%; color: rgb(154, 3, 254);" title="Two Cycles: Three Hours of Sleep"></span> <i style="font-size: 150%;">&nbsp;or </i>
				<span id="resultNow3" style="font-size: 300%; color: rgb(150, 105, 254);" title="Three Cycles: Four and a half Hours of Sleep"></span> <i style="font-size: 150%;">&nbsp;or </i>
				<span id="resultNow4" style="font-size: 300%; color: rgb(140, 140, 255);" title="Four Cycles: Six Hours of Sleep"></span> <i style="font-size: 150%;">&nbsp;or </i>
				<span id="resultNow5" style="font-size: 300%; color: rgb(187, 187, 255);" title="Five Cycles: Seven and a half Hours of Sleep"></span> <i style="font-size: 150%;">&nbsp;or </i>
				<span id="resultNow6" style="font-size: 300%; color: rgb(123, 30, 150);" title="Six Cycles: Nine Hours of Sleep"></span>
				<p style="font-size: 140%; color: rgb(0, 128, 255);">많은 사람들이 잠드는 데 평균적으로<b> 15분</b> 정도 소요된다고 해요!</p>
				<p style="font-size: 130%; color: rgb(153, 102, 204);">연구에 따르면 <b>수면 사이클</b> 중간에 잠에서 깨게 되면, 평소보다 <i> 피로감</i>을 느낄 수 있다고 해요. </br> Dogether에서 추천해드리는 시간으로 최적의 컨디션으로 깨어나세요!</p>
				<a class="back" href="#" style="font-size: 200%; color:#CDBC67;">다른 시간 추천받기</a><br/>
				
			</div> <!-- end resultsNow -->
		</div> 
	</div> <!-- end row -->


</body>

