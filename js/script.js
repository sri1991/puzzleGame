window.addEventListener("load",imageLoading);
function imageLoading(){
		
		// document.getElementById('startbtn').onclick=function()
		// {
		// 	//alert('hii');
		// 	//document.getElementById('start').style.opacity=0;
		// 	document.getElementById('start').style.display="none";
		// }
		
		loading();
		
		document.getElementById('shufflebtn').addEventListener("click",loading);

		 //json handling
		var req=new XMLHttpRequest();
		req.open("GET","js/imgaefile.json",true);
		req.onreadystatechange=retreive;
		req.send();

		function retreive () 
		{
			 
			if(req.readyState==4 && req.status==200)
			{
				var doc=JSON.parse(req.responseText);
				myFun(doc);
			}
		}

		function myFun (a)
		{
			document.getElementById("imageChange").onchange=function(){

				loading();
				var selected_value=document.getElementById("imageChange").value;
				//alert(selected_value);
				if(selected_value!="null"){
					for(var i=0;i<a.length;i++)
					{
						var split_image=a[i].path.split('/');
						divs[i].style.background="url("+split_image[0]+"/"+selected_value+"/"+split_image[1]+")";
					}
				}
				else{
					//alert("select image");
					document.getElementById("imageSelection").style.display="block";
				}

			} 

			var divs=document.getElementsByClassName("common");
			for(var i=0;i<a.length;i++)
			{
			var split_image=a[i].path.split('/');
			divs[i].style.background="url("+split_image[0]+"/"+"one"+"/"+split_image[1]+")";
			}

		}
		//json retrival ends


		var child=document.getElementsByClassName("common");
		for (var i = 0; i < child.length; i++) 
		{
			child[i].addEventListener('dragstart',drag);
			child[i].addEventListener('dragover',allowdrop);
			child[i].addEventListener('drop',drop);
		};

			moves=0;
			document.getElementById('score').innerText=moves;
	}

		
		
		var moves=0;
		function drag (e) {
			// body...
			e.dataTransfer.setData("src", e.target.id);
			}
		function allowdrop (e) {
			// body...
			e.preventDefault();
		

			}
		function drop (e) {
			// body...
			 e.preventDefault();
    		var src = document.getElementById(e.dataTransfer.getData("src"));
			var dest=e.target.style.order;
	     	var temp=src.style.order;
	     	src.style.order=e.target.style.order;
	     	e.target.style.order=temp;
			if(temp!=dest){
	     	moves++;
			}
	     	document.getElementById('score').innerHTML=moves;

	     	if (document.getElementById("div1").style.order==1 &&
				document.getElementById("div2").style.order==2 &&
				document.getElementById("div3").style.order==3 &&
				document.getElementById("div4").style.order==4 &&
				document.getElementById("div5").style.order==5 &&
				document.getElementById("div6").style.order==6 &&
				document.getElementById("div7").style.order==7 &&
				document.getElementById("div8").style.order==8 &&
				document.getElementById("div9").style.order==9) {

	     		// var block = document.getElementsByClassName('common');
	     		// for (var i = block.length - 1; i >= 0; i--) {
	     		// 	block[i].style.border = 0 +'px';
	     		// };

	     		// document.getElementsByClassName('container')[0].style.height=600+"px";
	     		//show finishing popup here
				
				document.getElementById("result").style.display="block";
				document.getElementById("count").innerHTML=moves;
	     		};
	     	}

	     	function loading()
	     	{
	     			
				    var orders = [1,2,3,4,5,6,7,8,9];
					var index=Math.floor(Math.random() * orders.length);
					document.getElementById("div1").style.order=orders[index];
					orders.splice(index,1);
					index=Math.floor(Math.random() * orders.length);
					document.getElementById("div2").style.order=orders[index];
					orders.splice(index,1);
					index=Math.floor(Math.random() * orders.length);
					document.getElementById("div3").style.order=orders[index];
					orders.splice(index,1);
					index=Math.floor(Math.random() * orders.length);
					document.getElementById("div4").style.order=orders[index];
					orders.splice(index,1);
					index=Math.floor(Math.random() * orders.length);
					document.getElementById("div5").style.order=orders[index];
					orders.splice(index,1);
					index=Math.floor(Math.random() * orders.length);
					document.getElementById("div6").style.order=orders[index];
					orders.splice(index,1);
					index=Math.floor(Math.random() * orders.length);
					document.getElementById("div7").style.order=orders[index];
					orders.splice(index,1);
					index=Math.floor(Math.random() * orders.length);
					document.getElementById("div8").style.order=orders[index];
					orders.splice(index,1);
					index=Math.floor(Math.random() * orders.length);
					document.getElementById("div9").style.order=orders[index];
					orders.splice(index,1);
					moves=0;
					document.getElementById('score').innerHTML=moves;
	     	}

	   $(document).ready(function(){
  			$("#startbtn").click(function(){
    			$("#start").hide(1000);
  			});
			
			$("#imageSelection").hide();
			$("#result").hide();
			$(".play").click(function(){
				$("#imageSelection").hide(1000);
				$("#result").hide(1000);
				imageLoading();	
			});

			$(".playagain").click(function(){
				$("#imageSelection").hide(1000);
				$("#result").hide(1000);
				imageLoading();	
			});
			
			
		});