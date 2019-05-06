window.onload = function() {
		var floor1 = document.getElementById('floor1');
		var floor2 = document.getElementById('floor2');
		var outbox = document.getElementById('outbox')
		var sdfont = floor2.getElementsByTagName('h1')[0];
		//横条字体
		var changeft = document.getElementById('change-pgft1');
		var changeft2 = document.getElementById('change-pgft2');
		var changeft3 = document.getElementById('change-pgft3');
		var timer=null;
		clearInterval(timer);
		// 弹幕动画所用↓
		var danmutop=document.getElementById('danmutop');
		var getspan=danmutop.getElementsByTagName('span');
		function changecolor(number){
			switch(number){
				case 0:
				return("rgba(239, 54, 30, 0.6)");
				break;
				case 1:
				return("rgba(121, 85, 72, 0.6)");
				break;
				case 2:
				return("rgba(0, 188, 212, 0.6)");
				break;
				case 3:
				return("rgba(205, 220, 57, 0.6)");
				break;
				case 4:
				return("rgba(255, 152, 0, 0.6)");
				break;
				case 5:
				return("rgba(255, 235, 59, 0.6)");
				break;
				case 6:
				return("rgba(128, 224, 15, 0.6)");
				break;
				case 7:
				return("rgba(33, 150, 243, 0.6)");
				break;
				case 8:
				return("rgba(103, 58, 183, 0.6)");
				break;
				case 9:
				return("rgba(156, 39, 176, 0.6)");
				break;	
			}
		}
		//↑
		window.onscroll=function() {
			if( document.body.scrollTop > 0 && document.body.scrollTop <= 1000) {
				floor1.children[0].style.opacity = 1 - document.body.scrollTop / 400;
				floor2.children[0].style.opacity = 0 + document.body.scrollTop / 400;
				sdfont.style.fontSize = 0 + document.body.scrollTop / 6 + 'px';
				if(document.body.scrollTop > 0 && document.body.scrollTop <400){
					outbox.style.backgroundPositionY=document.body.scrollTop/4+'px';
				}
			} 
			if(document.body.scrollTop > 890 && document.body.scrollTop < 2010) {
				changeft.children[0].style.fontSize = 20 + document.body.scrollTop / 30 + 'px';
			}
			if(document.body.scrollTop > 1900 && document.body.scrollTop < 3000) {
				changeft2.children[0].style.fontSize = 20 + (document.body.scrollTop-1000) /30 + 'px';
			}
			if(document.body.scrollTop > 3800 && document.body.scrollTop < 4900) {
				changeft3.children[0].style.fontSize = 20 + (document.body.scrollTop-2900) /30 + 'px';
			}
			//
			//
			//
			//谷歌兼容的窗口高度
			if( document.documentElement.scrollTop > 0 && document.documentElement.scrollTop <= 1000) {
				//  文档流正常向上滚动并不需要控制
				floor1.children[0].style.opacity = 1 - document.documentElement.scrollTop / 400;
		    floor2.children[0].style.opacity = 0 + document.documentElement.scrollTop / 400;
				sdfont.style.fontSize = 0 + document.documentElement.scrollTop / 6 + 'px';
				if(document.documentElement.scrollTop > 0 && document.documentElement.scrollTop <400){
					outbox.style.backgroundPositionY=document.documentElement.scrollTop/4+'px';
				}
				
			} 
			//横条字体怕判断
			if(document.documentElement.scrollTop > 890 && document.documentElement.scrollTop < 2010) {
				changeft.children[0].style.fontSize = 20 + document.documentElement.scrollTop / 30 + 'px';
			}
			if(document.documentElement.scrollTop > 1900 && document.documentElement.scrollTop < 3000) {
				changeft2.children[0].style.fontSize = 20 + (document.documentElement.scrollTop-1000) /30 + 'px';
			}
			if(document.documentElement.scrollTop > 3800 && document.documentElement.scrollTop < 4900) {
				changeft3.children[0].style.fontSize = 20 + (document.documentElement.scrollTop-2900) /30 + 'px';
			}
			//弹幕动画js↓
			if(document.documentElement.scrollTop > 4800 || document.body.scrollTop > 4800){
				//上半部分
				if(timer==null){
				clearInterval(timer);
				timer=setInterval(function(){
					//开始
					for(var i=1;i<=getspan.length;i++){
					var alllong=1200-getspan[i-1].offsetWidth;
					if(getspan[i-1].offsetLeft<alllong){
						if(i%2!=0){
							getspan[i-1].style.left=getspan[i-1].offsetLeft+4+'px';
						}else{
							getspan[i-1].style.left=getspan[i-1].offsetLeft+2+'px';
						}
				}else{
					if(i%2!=0){
							getspan[i-1].style.left=Math.random()*300+'px';	
							getspan[i-1].style.color=changecolor(parseInt(Math.random()*10));
						}else{
							getspan[i-1].style.left=Math.random()*600+'px';	
							getspan[i-1].style.color=changecolor(parseInt(Math.random()*10));
						}
					
				}
				}
					//结束
				},30)
				}else{}
				
				
			}else{
				clearInterval(timer);
				timer=null;	
				
			}
		}
	//map内容...........................
	//map内容...........................
	//map内容...........................
		// 百度地图API功能
    var map = new BMap.Map('allmap');
    var poi = new BMap.Point(120.396068,31.52616);
    map.centerAndZoom(poi, 13);
    map.enableScrollWheelZoom();
//添加比例尺等控件
    var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
	var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
	var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
    map.addControl(top_left_control);
    map.addControl(top_left_navigation); 
    map.addControl(top_right_navigation);
//
//略缩图控件
	var mapType1 = new BMap.MapTypeControl(
		{
			mapTypes: [BMAP_NORMAL_MAP,BMAP_HYBRID_MAP],
			anchor: BMAP_ANCHOR_TOP_LEFT
		}
	);

	var overView = new BMap.OverviewMapControl();
	var overViewOpen = new BMap.OverviewMapControl({isOpen:true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT});
		map.addControl(overView);          //添加默认缩略地图控件
		map.addControl(overViewOpen);      //右下角，打开
//
    var adress = '<div style="margin:0;line-height:20px;padding:2px;">' +
                    '<img src="img/mao.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
                    '公司：无锡金易云信息技术有限公司<br/>电话：(010)59928888<br/>地址：无锡市滨湖区梁溪路万达广场A区写字楼1102。' +
                  '</div>';

    //创建检索信息窗口对象
    var searchInfoWindow = null;
	searchInfoWindow = new BMapLib.SearchInfoWindow(map, adress, {
			title  : "百度大厦",      //标题
			width  : 290,             //宽度
			height : 105,              //高度
			panel  : "panel",         //检索结果面板
			enableAutoPan : true,     //自动平移
			searchTypes   :[
				BMAPLIB_TAB_SEARCH,   //周边检索
				BMAPLIB_TAB_TO_HERE,  //到这里去
				BMAPLIB_TAB_FROM_HERE //从这里出发
			]
		});
    var marker = new BMap.Marker(poi); //创建marker对象
    marker.enableDragging(); //marker可拖拽
    marker.addEventListener("click", function(e){
	    searchInfoWindow.open(marker);
    })
    map.addOverlay(marker);//在地图中添加marker
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
	//样式1
	var searchInfoWindow1 = new BMapLib.SearchInfoWindow(map, "信息框1内容", {
		title: "信息框1", //标题
		panel : "panel", //检索结果面板
		enableAutoPan : true, //自动平移
		searchTypes :[
			BMAPLIB_TAB_FROM_HERE, //从这里出发
			BMAPLIB_TAB_SEARCH   //周边检索
		]
	});
	function openInfoWindow1() {
		searchInfoWindow1.open(new BMap.Point(120.270334,31.567704));
	}
	//样式2
	var searchInfoWindow2 = new BMapLib.SearchInfoWindow(map, "信息框2内容", {
		title: "信息框2", //标题
		panel : "panel", //检索结果面板
		enableAutoPan : true, //自动平移
		searchTypes :[
			BMAPLIB_TAB_SEARCH   //周边检索
		]
	});
	function openInfoWindow2() {
		searchInfoWindow2.open(new BMap.Point(116.324852,40.057031));
	}
	//样式3
	var searchInfoWindow3 = new BMapLib.SearchInfoWindow(map, "信息框3内容", {
		title: "信息框3", //标题
		width: 290, //宽度
		height: 40, //高度
		panel : "panel", //检索结果面板
		enableAutoPan : true, //自动平移
		searchTypes :[
		]
	});
	function openInfoWindow3() {
		searchInfoWindow3.open(new BMap.Point(116.328852,40.057031)); 
	}
		
}
