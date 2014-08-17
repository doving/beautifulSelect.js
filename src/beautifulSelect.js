(function(){
	var beautifulSelect = function($){
		$.fn.beautifulSelect = function(options){
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

			opt = $.extend(true,{},opt,options);

			//列表框必有样样式
			var divStyle ={
					position   : "absolute",
					left       : 0,
					top        : 0,
					width      : "100%",
					margin     : 0,
					overflow   : "hidden",
					zindex     : 0
				}
			
			//小三角形必有的样式
			var triangleStyle = {
					position   : "absolute",
					top        : 0,
					right      : "5%"
				}

			this.each(function(){
				if(this.tagName.toLowerCase() !== "select") return;
				var $this = $(this);

				if(this.isBeutified){
					//如果已经调用接口美化过，则先还原select的margin属性
					$this.parent().replaceWith($this.css("margin",this.margin));
				}
				this.isBeutified = true;

				//列表项必有的样式
				var liStyle = {
      				display    : "block",
					height     : opt.options.style.height || $this.innerHeight() ,
					lineHeight : opt.options.style.height || $this.innerHeight() + "px"
      			}
				
				$this.isOpened = false;

				//列表外框样式渲染
				var $box = $("<div></div>").css({
								position : "relative",
								display  : "inline-block",
								padding  : 0,
								width    : opt.box.style.width || $this.innerWidth(),
								height   : opt.box.style.height || $this.innerHeight(),
								margin   : [$this.css("marginTop"),$this.css("marginRight"),$this.css("marginBottom"),$this.css("marginLeft")].join(" ")
							});
				
				//在select DOM对象上记住自身的margin属性
				$this.css("margin",0)[0].margin = $box.css("margin");

				var $div = $("<div></div>").css(opt.box.style).css(divStyle);

                var $headbox = $("<div style='position: relative;text-align:left'></div>");

                var $head = $("<span style='padding:0;margin:0 0 0 5%'></span>");
                var $selectedOption = $this.children().eq($this[0].selectedIndex);
                $head.html($selectedOption.html())[0].val = $selectedOption.val();

	            var $triangle = $("<span>▼</span>").css(opt.triangle.style).css(triangleStyle);

	            $div.append($headbox.append($head).append($triangle));

	      		var $ul = $("<ul></ul>").hide().css({padding:0,margin:0});

	      		$this.children().each(function(){
	                var $li = $("<li></li>").html($(this).html());
	                $li[0].val = $(this).val();
	                $ul.append($li);
	            });

	      		//列表项hover效果处理
	      		$ul.children().hover(
	      			function(){
	      				$ul.children().attr("style","").css(opt.options.style).css(liStyle);
	      				$(this).css(opt.options.hoverStyle);
	      			},
	      			function(){$(this).attr("style","").css(opt.options.style).css(liStyle);}
	      		);

	      		//列表框以及小三角形的hover效果处理
	      		(opt.box.hoverStyle||opt.triangle.hoverStyle) ? $div.hover(
	      			function(){
	      				$(this).attr("style","")
	      					.css(opt.box.style)
	      					.css(opt.box.hoverStyle)
	      					.css(divStyle);
	      				$triangle.attr("style","")
	      					.css(opt.triangle.style)
	      					.css(opt.triangle.hoverStyle)
	      					.css(triangleStyle);
	      			},
	      			function(){
	      				$(this).attr("style","")
	      					.css(opt.box.style)
	      					.css($this.isOpened?opt.box.focusStyle:opt.box.style)
	      					.css(divStyle);
	      				$triangle.attr("style","")
	      					.css(opt.triangle.style)
	      					.css($this.isOpened?opt.triangle.focusStyle:opt.triangle.style)
	      					.css(triangleStyle);
	      			}
	      		):"";

	      		//列表项样式渲染
	      		$ul.children().css(opt.options.style);

	      		//列表点击效果处理
	      		$div.append($ul).find("li,div")
	      			.css(liStyle)
	      			.on("click" ,function(){
	      				if($this.isOpened){
	      					if(this.val !== $head[0].val && this !== $headbox[0]){
		      					$head.html($(this).html())[0].val = this.val;
			      				$this.val(this.val).change();
			      			}
			      			$ul.slideUp(200,function(){
			      				$div.attr("style","").css(opt.box.style).css(divStyle);
			      				$triangle.html("▼").css(opt.triangle.style);
			      				$headbox.css("border-bottom","");
			      			});
	      				}else{
	      					$div.css(opt.box.focusStyle).css({"z-index":1});
	      					$headbox.css("border-bottom",opt.divider);
							$triangle.html("▲").css(opt.triangle.focusStyle);
		      				$ul.slideDown(200).children()
		      					.eq($this[0].selectedIndex)
		      					.css(opt.options.hoverStyle);
	      				}
	      				$this.isOpened = !$this.isOpened;
	      			});

	      		//鼠标移出列表框时收起
	      		$div.on("mouseleave",function(){
	      			$this.isOpened ? $(this).find("li").eq($this[0].selectedIndex).click() : "";
	      		});

	      		$this.wrap($box).css("visibility","hidden").after($div);

			});

			//返回jQuery对象本身
			return this;
		}
	}

	//cmd规范写法
	if(typeof define === "function" && typeof define.cmd === "object"){
		define(['jquery'],function(require, exports, module){
			beautifulSelect(require("jquery"));
		});
	//amd规范写法
	}else if(typeof define === "function" && typeof define.amd === "object"){
		define(['jquery'],beautifulSelect);
	//普通写法
	}else{
		if("undefined" === jQuery){
			throw new Error("beautifulSelect requires jQuery");
		}
		beautifulSelect(jQuery);
	}
})()