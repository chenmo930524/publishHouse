$(function () {
	//top-mobile
	var sta = 0;
	var sta1 = 0;
	var sta2 = 0;
	var sta3 = 0;
	var mobile = /^1[34578]\d{9}$/;
	var nums = /^[0-9]*$/;
	var moneys = /^\+?[1-9][0-9]*.*$/;
	var chinese = /^[\u4E00-\u9FA5]+$/;
	var pub1=0;
	var pub2=0;
	var pub3=0;
	var pub4=0;
	var pub5=0;
	var pub6=0;
	var pub7=0;
	var pub8=0;
	

	function china(text) {
		if (text == " ") {
			$(".dec1").html("&#xe606;");
			pub1 = 0;
		} else if (!chinese.test(text)) {
			$(".dec1").html("&#xe606;");
			pub1 = 0;
		} else {
			$(".dec1").html("&#xe65c;");
			pub1 = 1;
		}
	}

	function money(text) {
		if (text == " ") {
			$(".dec5").html("&#xe606;");
			pub5 = 0;
		} else if (!moneys.test(text)) {
			$(".dec5").html("&#xe606;");
			pub5 = 0;
		} else {
			$(".dec5").html("&#xe65c;");
			pub5 = 1;
		}
	}

	function money1(text) {
		if (text == "") {
			$(".dec6").html("&#xe606;");
			pub6 = 0;
		} else if (!moneys.test(text)) {
			$(".dec6").html("&#xe606;");
			pub6 = 0;
		} else {
			$(".dec6").html("&#xe65c;");
			pub6 = 1;
		}
	}

	function isContains(str, substr) {
		return new RegExp(substr).test(str);
	}

	$(".sky").on("click", function () {
		if (sta == 0) {
			$(".code").show();
			sta = 1;
		} else {
			$(".code").hide();
			sta = 0;
		}
	})
	//menu
	$(".tit-1").on("click", function () {
		if (sta1 == 0) {
			$(".sub1").slideUp();
			sta1 = 1;
		} else {
			$(".sub1").slideDown();
			sta1 = 0;
		}
	})
	$(".tit-2").on("click", function () {
		if (sta2 == 0) {
			$(".sub2").slideUp();
			sta2 = 1;
		} else {
			$(".sub2").slideDown();
			sta2 = 0;
		}
	})
	$(".tit-3").on("click", function () {
		if (sta3 == 0) {
			$(".sub3").slideUp();
			sta3 = 1;
		} else {
			$(".sub3").slideDown();
			sta3 = 0;
		}
	})
	//付款方式
	$(".group2").on("click", function () {
		$(".group1").removeAttr("checked");
	})
	$(".group1").on("click", function () {
		$(".group2").removeAttr("checked");
	})
	//地图找房
	$(".find").click(function () {
		if ($(this).text() == '地图找房') {
			$(this).text("收起地图找房");
			$(".map").css({
				"height": 300
			}).slideDown(1000);
			setTimeout(function () {
				var map = new BMap.Map("allmap");
				var point = new BMap.Point(118.786511, 32.029147);
				map.centerAndZoom(point, 15);
				var marker = new BMap.Marker(point); // 创建标注
				map.addOverlay(marker); // 将标注添加到地图中
				marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画	
			}, 1000)
		} else {
			$(this).text("地图找房");
			$(".map").slideUp(1000);
		}
	})
	//正则判断
	//户型判定
	function num(s) {
		var zz = /^(0|[1-9][0-9]*)$/;
		return (zz.test(s) && (s != ""))
	}

	$(".house input").on('input change', function () {
		if (num($(".inp2").val()) && num($(".inp3").val()) && num($(".inp4").val()) && num($(".inp5").val())) {
			if ($(".inp2").val() + $(".inp3").val() + $(".inp4").val() + $(".inp5").val() !== '0000') {
				$(".dec3").html("&#xe65c;")
				pub3 = 1;
				val2 = $(".inp2").val() + " " + " 室" + " " + $(".inp3").val() + " 厅" + " " + $(".inp4").val() + " 卫" + " " + $(".inp5").val() + " 阳台";
			} else {
				$(".dec3").html("&#xe606;");
				pub3 = 0;
			}
		} else {
			$(".dec3").html("&#xe606;");
			pub3 = 0;
		}
	})
	//区域判定
	var Sel1;
	var Sel2;
	var Sel3;
	var Sel4;
	$(".sel1").change(function () {
		Sel1 = $(".sel1").find('option:selected').text();
	})
	$(".sel2").change(function () {
		Sel2 = $(".sel2").find("option:selected").text();
		if (Sel2 == null || Sel2 == " " || Sel2 == "板块" || Sel1 == null || Sel1 == " " || Sel1 == "区属") {
			$(".dec2").html("&#xe606;")
			pub2 = 0;
		} else {
			$(".dec2").html("&#xe65c;")
			pub2 = 1;
			vals1 = Sel1 + " " + Sel2;
		}
	})
	//面积、租金判定
	$(".inp6").on("input change", function () {
		money($(".inp6").val());
		val3 = $(".inp6").val() + " " + "平方米";
	})
	$(".inp7").on("input change", function () {
		money1($(".inp7").val());
		val4 = $(".inp7").val() + " " + "元/月";
	})
	//手机号判定
	$(".inp8").on("input change", function () {
		text = $(this).val();
		if (text == "") {
			$(".dec8").html("&#xe606;");
			pub8 = 0;
		} else if (!mobile.test(text)) {
			$(".dec8").html("&#xe606;");
			pub8 = 0;
		} else {
			$(".dec8").html("&#xe65c;");
			pub8 = 1;
		}
	})
	//模糊搜索/小区判断
	var array = ['弓箭坊', '弓箭坊小区', '弓箭坊小学', '弓箭坊医院', '弓手坊', '弓手坊小区', '弓手坊小学', '弓手坊医院'];
	var city;
	$(".inp1").on("input change", function () {
		china($(".inp1").val());
		$(".Search").html("");
		if ($(".inp1").val() !== city && $(".inp1").val() !== "") {
			for (var i = 0; i < array.length; i++) {
				if (isContains(array[i], $(".inp1").val())) {
					$(".Search").append('<div class="searchs">' + array[i] + '</div>');
				}
			}
		}
		$(".searchs").on('click', function () {
			$(".inp1").val($(this).text());
			city = $(this).text();
			$(".Search").html(" ");
		})
	})

	$(".inp1").on("focusout", function () {
		$(".Search").html("");
	})
	//上传照片
	$(".pic").on("click", function () {
		$(".Img").removeClass("h")
	})
	$(".close").on("click", function () {
		$(".Img").addClass("h");
	})
	//出租形式
	$(".test4 input").on("input change", function () {
		val5 = $("input:radio:checked").val() + " ";
	})

	$(".sel3").on("change", function () {
		Sel3 = $(".sel3").find("option:selected").text();
	})
	$(".sel4").on("change", function () {
		Sel4 = $(".sel4").find("option:selected").text();
		if (Sel3 == null || Sel3 == " " || Sel3 == "选择卧室内容" || Sel4 == null || Sel4 == " " || Sel4 == "选择限制条件") {
			$(".dec4").html("&#xe606;")
			pub4 = 0;
		} else {
			$(".dec4").html("&#xe65c;")
			pub4 = 1;
			vals2 = Sel3 + " " + Sel4;
		}
	})
	//付款方式
	$(".test6 input").on('input change', function () {
		if ($(".fun1").attr("checked") || $(".fun2").attr("checked") || $(".fun3").attr("checked") || $(".fun4").attr("checked") || $(".fun5").attr("checked")) {
			$(".dec7").html("&#xe65c;")
			pub7 = 1;
		} else {
			$(".dec7").html("&#xe606;")
			pub7 = 0;
		}

		val6 = " ";
		if ($(".fun1").attr('checked')) {
			val6 += $(".fun1").val() + " ";
		}
		if ($(".fun2").attr('checked')) {
			val6 += $(".fun2").val() + " ";
		}
		if ($(".fun3").attr('checked')) {
			val6 += $(".fun3").val() + " ";
		}
		if ($(".fun4").attr('checked')) {
			val6 += $(".fun4").val() + " ";
		}
		if ($(".fun5").attr('checked')) {
			val6 = $(".fun1").val() + " " + $(".fun2").val() + " " + $(".fun3").val() + " " + $(".fun4").val() + " ";
		}
	})
	//实时更新房屋信息
	var val1 = " ";
	var val2 = " ";
	var val3 = " ";
	var val4 = " ";
	var val5 = " ";
	var val6 = " ";
	var vals1 = " ";
	var vals2 = " ";
	$(window).on("input change", function () {
		val1 = $(".inp1").val();
		var update = val1 + " " + vals1 + " " + val2 + " " + val5 + " " + vals2 + " " + val3 + " " + val4 + " " + val6;
		$("textarea").text(update);
	})

	$(".sub").on("click",function(){
		var pub = pub1+pub2+pub3+pub4+pub5+pub6+pub7+pub8;
		if(pub==8){
			alert("提交成功")
		}else{
			alert("提交失败")
		}
	})
})
