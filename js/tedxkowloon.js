/**
 * TEDxKowloon Annual Conference 2013
 * 
 * @version: 1.0
 * @author: Zeng Xi http://www.lovelucy.info/
 * @date: 2013-11-21
 * @copyright: Copyright (c) 2013. All rights reserved.
 * @license: Licensed under Apache License v2.0. See http://www.apache.org/licenses/LICENSE-2.0
 * @website: http://www.tedxkowloon.com/
 */

var TEDxKowloon = {
	speakers: {
		GuyHenry: {
			name: 'Guy Ho & Henry Lam',
			bio: '「原色人」創辦人，銳意透過影像製作、分享及教育，推廣社會大眾對性別及性傾向的多元認知與平權。首部作品《異路同途》紀錄其同志婚姻與家人關係，並訪問社會各界人士 。',
			photo: 'GuyHenry_intro.png'
		},
		SherabLama: {
			name: 'Lama Sherab 雪樂喇嘛',
			bio: '身兼亞洲德噶基金會執行長、德噶香港禪修中心監院及Joy of Living 禪修指導員，著作包括：「世界上最快樂的人 The Joy of Living: Unlocking the Secret and Science of Happiness」。',
			photo: 'SherabLama_intro.png'
		},
		RenWan: {
			name: 'Ren Wan',
			bio: '網上換物平台及香港最大規模換物會舉辦單位「執野JupYeah」創辦人之一 。透過 JUPYEAH.COM 及每年不定期舉辦的換物會將舊愛與人分享，將他人的舊愛納為新歡。',
			photo: 'RenWan_intro.png'
		},
		HeXiulan: {
			name: '何秀蘭',
			bio: '同性戀平權組織「大愛同盟 (Big Love Alliance)」創始成員之一，其他創始成員包括名人黃耀明、何韻詩、趙式芝及立法會議員陳志全等人，致力爭取同志平權，保護社會各階層同志的基本權益。同時身兼現任香港立法會議員之一及工黨創黨副主席。',
			photo: 'HeXiulan_intro.png'
		},
		LvBingquan: {
			name: '呂秉權',
			bio: '前任香港無綫電視和有線電視中國組助理採訪主任、首席記者。曾採訪各大中國事件，為首批到達地震災區採訪的香港記者。其後於《信報》發表文章寫出感受，並接受《四川地震 香港記者反思錄》一書的訪問。現為香港浸會大學講師。',
			photo: 'LvBingquan_intro.png'
		},
		ZhouJunhui: {
			name: '周俊輝',
			bio: '香港視覺藝術家，並兼任「伙炭」藝術村董事會主席。近期展覽包括利物浦雙年展 (Liverpool Biennial)、薩奇畫廊 (Saatchi Gallery)等。曾獲獎項包括「香港藝術中心三十年大獎」、「Sovereign 亞洲藝術獎」等。',
			photo: 'ZhouJunhui_intro.png'
		},
		KuSike: {
			name: '庫斯克 (Kursk)',
			bio: '中學通識科教師及著名博客。自 2006 年起，庫斯克與另外兩位通識科老師周子恩、 陳樹鳴，創辦網上通識頻道「三師會」，討論時事，教學生通識。 現為《經濟日報》通識版、《e-zone》及香港電台通識網定期供稿， 著有《通識我主場》一書。',
			photo: 'KuSike_intro.png'
		},
		ZhangTiezhi: {
			name: '張鐵志',
			bio: '現任香港《號外》雜誌主編、《彭博商業週刊/中文版》主筆，台灣知名音樂、文化與政治評論人。著有《聲音與憤怒：搖滾樂可以改變世界嗎》、《時代的噪音：從狄倫到U2的抗議之聲》等。',
			photo: 'ZhangTiezhi_intro.png'
		},
		BensonTsang: {
			name: '曾志浩 Benson Tsang',
			bio: '正職室內設計師，「平等分享行動」發起人，面對社會的不公義，選擇將憤怒轉化為愛與關懷的力量，發起「平等分享行動」，於網絡尋找互不相識但志同道合的有心人，走進弱勢社群，散播愛與關懷的種子。',
			photo: 'BensonTsang_intro.png'
		},
		ZhuFuqiang: {
			name: '朱福強',
			bio: '前香港特區政府檔案局局長及前歷史檔案館館長；自離開政府後，一直致力於推動就公共檔案管理立法。他亦是聯合國教科文造織世界記憶工程亞太區議會特別顧問，國際檔案理事會東亞分會秘書長，香港檔案學會會長及中國檔案文獻遺產工程國家咨詢委員會委員。',
			photo: 'ZhuFuqiang_intro.png'
		},
		BellaIp: {
			name: '葉子僑 Bella Ip',
			bio: '本地創意社企品牌「區區肥皂」創辦人。她致力為消費者帶來「道德、良心、綠色、質量」四方面兼備，不含化學成分的天然肥皂。區區肥皂旨在透過人手製作的有機肥皂，為社區較低學歷的婦女創造就業機會，建立社區教育平台，為社會帶來正能量。',
			photo: 'BellaIp_intro.png'
		},
		BiMing: {
			name: '畢明',
			bio: '畢明從事廣告創作多年，製作過多個精彩廣告系列，她創造出來的廣告人物百佳「黃老太」經典。2007 年她由廣告界轉投傳媒界，任職壹傳媒集團創作總監，跨界繼續創作。近年著作不斷，出版了多本作品，有《廣告死未》、《醉生玩死》和《致創作、生活、香港》等等。',
			photo: 'BiMing_intro.png'
		},
		RudiLeung: {
			name: '梁志成 Rudi Leung',
			bio: 'Rudi 從事廣告創作 14 年，先後任職於各大國際 4A 。2005年開始，他由傳統廣告轉戰網絡媒體。現為 Social@Ogilvy 區域總監，曾獲香港4As金帆廣告的最高榮譽大獎以及多個國際及地區廣告獎項。Rudi 亦是香港活躍博客，定期各大報章雜誌發表文章；熱衷於教學，於 HKU SPACE 擔任兼職講師，致力推廣網絡營銷。',
			photo: 'RudiLeung_intro.png'
		},
		ShaoJiazhen: {
			name: '邵家臻',
			bio: '香港浸會大學社會工作系講師及青年研究實踐中心副主任；從外展社工到大學講師，從社福界委員、傳媒人到「佔領中環十死士」，邵家臻寫學術論文研究社區青年問題，著書上節目談各類社會現象。他搞社工復興運動，相信「以邊緣揣擾中心，以文化揣擾政治」，爭取一個容得下弱勢社群生活的社會。',
			photo: 'ShaoJiazhen_intro.png'
		},
		HuangXiuping: {
			name: '黃修平',
			bio: '2013年完成跳舞電影《狂舞派》，影片榮獲金馬創投The Post Bangkok Award,  及獲邀香港國際電影節首映，及到世界各地多個電影節參展，並於日本福岡國際電影節獲「觀眾大獎」以及提名金馬獎最佳女主角及最佳動作設計。《狂舞派》於2013年8月在香港正式上畫，影期最終達十二個星期，創出超過一千三百萬票房佳績。',
			photo: 'HuangXiuping_intro.png'
		},
		HuangYueyong: {
			name: '黃岳永',
			bio: '現任香港社會服務聯會（社聯）全資附屬社會企業「網際網路學習資源中心」「有機上網」行政總裁及謝瑞麟執行董事及副主席。同時兼任教育局資訊科技教育策略發展督導委員會非官方成員及香港資訊科技商會電子學習聯盟（e-Learning Consortium）召集人。',
			photo: 'HuangYueyong_intro.png'
		},
	},

	getSpeaker: function(speakerId) {
		return this.speakers[speakerId];
	}
};


$.extend($.easing, {
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	}
});

$(document).ready(function() {

	/* Update Section on Top-Bar */
	$(window).on('scroll', function(){
		var scrollTop = $(window).scrollTop();
		$('section').each(function(){
			if (scrollTop > $(this).offset().top-60){
				var section = $(this).attr('id');
				$("#top-navigation ul li").each(function(){
					if(section == $(this).find('a').attr('href').replace("#","") && $(this).not('.active')){
						$("#top-navigation ul li").removeClass('active');
						$(this).addClass('active');
					}
				});
			}
		});
	});
	

	/*-----------------------------------------------------------------------------------*/
	/*	Smooth Scroll - Navigation + .scroll items
	/*-----------------------------------------------------------------------------------*/
	
	$('#top-navigation li').on('click',function(event){
		var anchor = $(this).find('a');
		
		$('#top-navigation li').removeClass('active');
		$(this).addClass('active');
	
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top-50
		}, 1500,'easeInOutExpo');
		
		/* If Mobile hide menu on select */
		if($(window).width()<=767){	
			$('#top-navigation').removeClass('in').addClass('collapse');
		}
		
		event.preventDefault();
	});
	
	$('.scroll').on('click',function(event){
		var anchor = $(this);
	
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top-50
		}, 1500,'easeInOutExpo');
		
		/* If Mobile hide menu on select */
		if($(window).width()<=767){	
			$('#top-navigation').removeClass('in').addClass('collapse');
		}
		
		event.preventDefault();
	});

	/*-----------------------------------------------------------------------------------*/
	/*	Show speaker's bio 
	/*-----------------------------------------------------------------------------------*/

	$('#speaker').on('click', '.speaker-photo', function(){
		var speakerId = $(this).attr('id').replace(/speaker-/, '');
		var position = $(this).parent().index();
		var photoWidth = $(this).find('img').width();
		var photoHeight = $(this).find('img').height();
		var maskLeft = 0;
		var speaker = TEDxKowloon.getSpeaker(speakerId);

		$('#speaker-bio').slideUp('fast', function(){
			$('#speaker-bio .speaker-bio-name').html(speaker.name);
			$('#speaker-bio .speaker-bio').html(speaker.bio);
			$('#speaker-bio .speaker-bio-photo').attr('src', 'img/speaker/'+(speaker.photo==''?'speaker_bio_default.png':speaker.photo));
			if($(window).width()<=767){	
				$('#speaker-bio')
					.outerWidth($('#speaker').width())
					.outerHeight($('#speaker').height())
			} else {
				switch(position){
					case 0:
					case 1:
					case 8:
					case 9:
						maskLeft = 0;
						break;
					case 2:
					case 3:
					case 10:
					case 11:
						maskLeft = photoWidth*2;
						break;
					case 4:
					case 5:
					case 12:
					case 13:
						maskLeft = photoWidth*4;
						break;
					case 6:
					case 7:
					case 14:
					case 15:
						maskLeft = photoWidth*6;
						break;
					default:
						maskLeft = 0;
						break;
				}
				$('#speaker-bio')
					.outerWidth(photoWidth*2)
					.outerHeight(photoHeight*2)
					.css('left', maskLeft+'px');
			}
			$('#speaker-bio').slideDown();
		});
	});

	$('#speaker-bio').on('click', '.close', function(){
		$('#speaker-bio').slideUp();
	});

	try{
		if(window.console && window.console.info) {
			console.info('\n            __     __       \n           /  \\~~~/  \\    \n     ,----(     ..    ) \n    /      \\__     __/   \n   /|         (\\  |(\n  ^ \\   /___\\  /\\ |   http://www.lovelucy.info\n     |__|   |__|-"    \n\n');
		}
	} catch(e) {}
});