/*! px_loading v 1.0.0 | (c) 2017,2017 hubei...版权信息*/
$.px_loading=function(opts){
		//创建插件模板
		var loading = $("<div id='px-loading'>"+
		      "<img class='t-img' src='img/2.jpg' alt='正在加载预览图' width='16' height='16' /> "+opts.content+"......"+
		      "</div>");
		//追加模板
		$("body").append(loading);
		
		//设置居中定位
		px_center(loading);
		//浏览器窗口改变的时候居中定位
		    initEvent(loading);
		}
//设置动态居中算法
function px_center(loading){
			//计算loading的宽度
		var width=loading.width();
		//高度
		var height=loading.height();
		//浏览器的可见宽度
		var ww=$(window).width();
		//浏览器的可见高度
		var hh=$(window).height();
		
		var left=(ww-width)/2;
		var top=(hh-height)/2;
		//css居中定位
		    loading.css({top:top,left:left});
		}
//浏览器窗口改变的时候居中定位
function initEvent(loading){
			$(window).resize(function(){
				px_center(loading);
			});
		}