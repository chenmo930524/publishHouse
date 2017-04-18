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


	function china(text) {
		if (text == " ") {
			$(".dec1").html("&#xe606;");
		} else if (!chinese.test(text)) {
			$(".dec1").html("&#xe606;");
		} else {
			$(".dec1").html("&#xe65c;");
		}
	}


	function num(text) {
		if (text == " ") {
			$(".dec3").html("&#xe606;");
		} else if (!nums.test(text)) {
			$(".dec3").html("&#xe606;");
		} else {
			$(".dec3").html("&#xe65c;");
		}
		if (($(".inp2").val() == "0") && ($(".inp3").val() == "0") && ($(".inp4").val() == "0") && ($(".inp5").val() == "0")) {
			$(".dec3").html("&#xe606;");
		}
	}

	function money(text) {
		if (text == " ") {
			$(".dec5").html("&#xe606;");
		} else if (!moneys.test(text)) {
			$(".dec5").html("&#xe606;");
		} else {
			$(".dec5").html("&#xe65c;");
		}
	}

	function money1(text) {
		if (text == "") {
			$(".dec6").html("&#xe606;");
		} else if (!moneys.test(text)) {
			$(".dec6").html("&#xe606;");
		} else {
			$(".dec6").html("&#xe65c;");
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
		} else {
			$(this).text("地图找房");
			$(".map").slideUp(1000);
		}
	})

	//正则判断
	//户型判定
	$(".inp2").on("input change", function () {
		num($(".inp2").val());
	})
	$(".inp3").on("input change", function () {
		num($(".inp3").val());
	})
	$(".inp4").on("input change", function () {
		num($(".inp4").val());
	})
	$(".inp5").on("input change", function () {
		num($(".inp5").val());
	})


	//区域判定
/*	var Sel1;
	var Sel2;
	 $(".sel1").change(function(){
		  Sel1 = $(".sel1").find('option:selected').text();
	 })
	$(".sel2").change(function(){
		Sel2 = $(".sel2").find("option:selected").text();
	})
	if( Sel1 == '区属' && Sel2 == '板块' || Sel1 == "" || Sel2 == ""){
		$(".dec2").html("&#xe606;")
	}else{
		$(".dec2").html("&#xe65c;")
	}*/
	
	
	
	//面积、租金判定
	$(".inp6").on("input change", function () {
		money($(".inp6").val());
	})
	$(".inp7").on("input change", function () {
		money1($(".inp7").val());
	})



	//手机号判定
	$(".inp8").on("input change", function () {
		text = $(this).val();
		if (text == "") {
			$(".dec8").html("&#xe606;");
		} else if (!mobile.test(text)) {
			$(".dec8").html("&#xe606;");
		} else {
			$(".dec8").html("&#xe65c;");
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
			$(".Search").html("");
		})
	})

	$(".inp1").on("focusout", function () {
		$(".Search").html("");
	})


	//上传照片
	$(".pic").on("mouseover", function () {
		var file = $(".pic input").val();

		$(".fileall img").attr("src", file);
	})
	//实时更新房屋信息
	/*var val1;
	var val2;
	var val3;
	var val4;
	var val5;
	var val6;
	var val7;
	var val8;
	var vals1;
	var vals2;
	var vals3;
	var vals4;

	$(".inp1").on("change", function () {
		val1 = $(".inp1").val();
		$("textarea").text(val1);
	})
	$(".sel1").change(function () {
		vals1 = $(".sel1").find('option:selected').text()
		$("textarea").text(val1 + " " + vals1);
	})
	$(".sel2").change(function () {
		vals2 = $(".sel2").find('option:selected').text()
		$("textarea").text(val1 + " " + vals1 + " " + vals2);
	})
	$(".inp2").on("input change", function () {
		val2 = $(".inp2").val();
		$("textarea").text(val1 + " " + vals1 + " " + vals2 + " " + val2 + " 室" + " ");
	})
	$(".inp3").on("input change", function () {
		val3 = $(".inp3").val();
		$("textarea").text(val1 + " " + vals1 + " " + vals2 + " " + val2 + " 室" + " " + val3 + " 厅");
	})
	$(".inp4").on("input change", function () {
		val4 = $(".inp4").val();
		$("textarea").text(val1 + " " + vals1 + " " + vals21 + " " + val2 + " 室" + " " + val3 + " 厅" + " " + val4 + " 卫");
	})
	$(".inp5").on("input change", function () {
		val5 = $(".inp5").val();
		$("textarea").text(val1 + " " + vals1 + " " + vals2 + " " + val2 + " 室" + " " + val3 + " 厅" + " " + val4 + " 卫" + " " + val5 + " 阳台");
	})
	$(".inp6").on("input change", function () {
		val6 = $(".inp6").val();
		$("textarea").text(val1 + " " + val2 + " 室" + " " + val3 + " 厅" + " " + val4 + " 卫" + " " + val5 + " 阳台" + " " + val6 + " 平方米");
	})
	$(".inp7").on("input change", function () {
		val7 = $(".inp7").val();
		$("textarea").text(val1 + " " + val2 + " 室" + " " + val3 + " 厅" + " " + val4 + " 卫" + " " + val5 + " 阳台" + " " + val6 + " 平方米" + " " + val7 + "元/月");
	})*/
})
