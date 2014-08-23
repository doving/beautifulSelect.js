beautifulSelect
===============

基于jquery的美化select表单元素的插件


===============
参数opt是一个对象：
//默认参数对象
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
