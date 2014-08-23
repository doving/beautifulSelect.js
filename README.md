beautifulSelect.js
===============
	基于jquery的美化select表单元素的插件,为不同浏览器提供统一的select样式



使用方法
--------------------
####无参数使用：
	$("select").beautifulSelect();

####有参数使用：
	$("select").beautifulSelect({
					box:{
						style:{
							border:"solid red 2px"
						},
						focusStyle:{
							border:"solid red 2px",
							boxShadow:"0 0 5px red"
						}
					},
					triangle:{
						style:{
							color:"red"
						},
						focusStyle:{
							color:"red"
						}
					},
					options:{
						hoverStyle:{
							background:"#f33"
						}
					},
					divider:"solid #f33 1px"
				});
	


插件的参数opt
--------------
下面是beautifulSelect控件默认参数对象

	var opt = {
		//列表头与列表项分割线的样式
		divider : "solid #ccc 1px",
		//下拉列表框的样式
		box : {
			//常态时的样式
			style : {
				border          : "solid #999 1px",
				background      : "#fff",
				cursor          : "default",
				padding         : "0"
			},
			//hover时的样式
			hoverStyle : {
				
			},
			//点击开以后的样式
			focusStyle : {
				boxShadow       : "0 0 6px deepSkyBlue",
				border          : "solid deepSkyBlue 1px"
			}
		},
		//列表选项的样式
		options : {
			//常态时的样式
			style : {
				textAlign       : "center",
				padding         : "0 5%"
			},
			//hover时的样式
			hoverStyle:{
				color           : "#fff",
				backgroundColor : "deepSkyBlue"
			}
		},
		//小三角形的样式
		triangle : {
			//常态时的样式
			style : {
				fontSize        : "12px",
				color           : "#888",
				transform       : "scale(0.8)"
			},
			//hover时的样式
			hoverStyle : {
				
			},
			//点击开以后的样式
			focusStyle : {
				color           : "deepSkyBlue"
			}
		}
	}

从上面参数可以看出beautifulSelect共有四个部分可以设置：
####box：object，下拉列表的外框样式
	style：object，常态时的样式，可以是任何合法的css属性样式
	hoverStyle：object，hover时的样式，可以是任何合法的css属性样式
	focusStyle：object，列表展开时列表框的样式，可以是任何合法的css属性样式
####options：object，列表中的选项
	style：object，列表展开时，列表选项默认的常态样式，可以是任何合法的css属性样式
	hoverStyle：object，列表选项的hover样式，可以是任何合法的css属性样式
	*注意：options中并没有focusStyle属性
	       因为对于选项而言列表展开时的样式也就是常态样式，即上面的style属性
####triangle：object，下拉列表右边的小三角形
	style：object，小三角形默认的样式，可以是任何合法的css属性样式
	hoverStyle：object，列表hover时小三角形的样式，可以是任何合法的css属性样式
	focusStyle：object，列表展开后小三角形的样式，可以是任何合法的css属性样式
####divider：string，列表点击开后表头与列表选项之间的分割线
	此属性的值只能是字符串，并且只能是css中border的综合属性字符串，如"solid #f00 1px"
	
