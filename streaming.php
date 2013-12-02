<!DOCTYPE html>
<html lang="zh">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
		<meta name="description" content="TEDxKowloon presents TEDxKowloon 年度大會 2013 【重組生活．重組城市】 -- Saturday, December 7, 2013 -- New Territories">
		<meta name="author" content="Zeng Xi">
		<meta property="fb:app_id" content="308868722547887">
		<meta property="og:title" content="TEDxKowloon 年度大會 2013 【重組生活．重組城市】">
		<meta property="og:type" content="website">
		<meta property="og:site_name" content="TEDxKowloon">
		<meta property="og:url" content="http://tedxkowloon.hknode.com/streaming.php">
		<meta property="og:description" content="TEDxKowloon 年度大會 2013 【重組生活．重組城市】 -- Saturday, December 7, 2013 -- New Territories">
		<meta property="og:image" content="http://tedxkowloon.hknode.com/img/ac_logo.jpg">

		<title>TEDxKowloon 年度大會 2013 【重組生活．重組城市】</title>
		<!-- Bootstrap core CSS -->
		<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css" rel="stylesheet">
		<!-- Custom styles for this template -->
		<link href="css/tedxkowloon.css" rel="stylesheet">
	</head>
	<body id="streaming">
		<div id="fb-root"></div>
		<script>(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=308868722547887";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));</script>

		<div class="container">
			<div class="header">
				<h1 class="text-muted pull-left">
					<a href="http://tedxkowloon.com" target="_blank"><img src="img/ac_logo.jpg" class="img-responsive" title="TEDxKowloon" alt="TEDxKowloon Logo"></a>
				</h1>
				<div class="fb-like" data-href="http://tedxkowloon.hknode.com/streaming.php" data-layout="standard" data-action="like" data-show-faces="true" data-share="true" style="margin: 30px;"></div>
			</div>
			<div class="row">
				<!-- <img src="http://placehold.it/800x450" title="player" alt="player"> -->
				<div id="Main" style="width: 780px; height: 435px;">
					<div id="Player" align="center" style="height: 435px;">
						<object width="100%" height="100%" id="Player_api" name="Player_api" data="http://streaming-poc.cloudhosting.com.hk/fp/flowplayer-3.2.15.swf" type="application/x-shockwave-flash">
							<param name="allowfullscreen" value="true">
							<param name="allowscriptaccess" value="always">
							<param name="quality" value="high">
							<param name="bgcolor" value="#000000">
							<param name="flashvars" value="config={&quot;clip&quot;:{&quot;url&quot;:&quot;live&quot;,&quot;scaling&quot;:&quot;fit&quot;,&quot;provider&quot;:&quot;hddn&quot;},&quot;plugins&quot;:{&quot;hddn&quot;:{&quot;url&quot;:&quot;flowplayer.rtmp-3.2.11.swf&quot;,&quot;netConnectionUrl&quot;:&quot;rtmp://103.15.194.22:1935/undefined&quot;}},&quot;canvas&quot;:{&quot;backgroundGradient&quot;:&quot;none&quot;},&quot;playerId&quot;:&quot;Player&quot;,&quot;playlist&quot;:[{&quot;url&quot;:&quot;live&quot;,&quot;scaling&quot;:&quot;fit&quot;,&quot;provider&quot;:&quot;hddn&quot;}]}">
						</object>
					</div>
				</div>
				<!-- <iframe src="http://streaming-poc.cloudhosting.com.hk/streaming.html?width=780&height=435&movie=live" frameborder="0" width="800" height="460"></iframe> -->
			</div>
			<div class="row">
				<div class="fb-comments" data-href="http://tedxkowloon.hknode.com/streaming.php" data-width="780" data-numposts="5" data-colorscheme="light"></div>
			</div>
		</div>

		<script type="text/javascript">
			window.fbAsyncInit = function() {
				FB.Canvas.setSize( {height: document.body.clientHeight} );
			}
			// Do things that will sometimes call sizeChangeCallback()
			function sizeChangeCallback() {
				FB.Canvas.setSize( {height: document.body.clientHeight} );
			}
			if(window.addEventListener){
				window.addEventListener('load',function(){setInterval(sizeChangeCallback,300);},false);
			} else {
				window.attachEvent('onload',function(){setInterval(sizeChangeCallback,300);});
			}
		</script>
	</body>
</html>