function createFrame(top_value, left_value){
   createFrameWithUrl(top_value, left_value, "about:home");
   //createFrameWithUrl(top_value, left_value, "");
   //console.log("frame_id ["+frame_id+"]");
   //$("#dragger"+(frame_id-1)).css('display', 'none');
   //$("#input-"+(frame_id-1)).focus();
}

function createFrameWithUrl(top_value, left_value, url){
   /*default_url =  url;
   makeFrame(frame_id, default_url, 0, 25, 450, 400, top_value, left_value, 1366);
   saveFrame(frame_id, default_url, 0, 25, 450, 400, top_value, left_value, 1366);
   makeFrameSet(frame_id);
   $( "#dragger"+frame_id).draggable();
   $( "#resizer"+frame_id).draggable();
   frame_id++;*/
   createFrameWithUrlAndSize(top_value, left_value, url, 450, 400, 1366);
}

function createFrameWithUrlAndSize(top_value, left_value, url, cnv_width, cnv_height, inner_width){
   default_url =  url;
   makeFrame(frame_id, default_url, 0, 25, cnv_width, cnv_height, top_value, left_value, inner_width);
   saveFrame(frame_id, default_url, 0, 25, cnv_width, cnv_height, top_value, left_value, inner_width);
   makeFrameSet(frame_id);
   $( "#dragger"+frame_id).draggable();
   $( "#resizer"+frame_id).draggable();
   if(typeof createFrameWithUrlAndSizeExtension == 'function') { 
	 createFrameWithUrlAndSizeExtension(top_value, left_value, url, cnv_width, cnv_height, inner_width); 
   }
   frame_id++;
}

function setUrl(id, url){
    $( "#input-"+id).val(url);
    $("#inneriframe"+id).attr("src", url);
}

function makeFrame(id, url, left_value, top_value, width_value, height_value, left_cnv_value, top_cnv_value, inner_width_value) {
   host = url.replace("http://", "");
   host = host.replace("https://", "");
   host = url.split("//")[0]+"//"+host.split("/")[0];

   mydiv = document.createElement("special");
   mydiv.setAttribute("id", "special"+id);
   mydiv.style.width = (width_value+3)+"px";
   
   //console.log("host ["+host.replace("labs", "")+"]");  
   if(/^http:\/\/dailyglancer.com/i.test(host.replace("labs.", ""))){
   	mydiv.style.display = "none";
   	mydiv.setAttribute("dg:plugin", "true");
   	//console.log("host is from dailyglancer");
    //mydiv.style.height = 0+"px";
    //mydiv.setAttribute("old-height", height_value+"px");	
   }
   mydiv.style.height = (height_value+3)+"px";	
  
   mydiv.setAttribute("class", "layer");  
  
   
   mydiv.style.top = top_cnv_value+"px";
   mydiv.style.left = left_cnv_value+"px";
   mydiv.style.zoom = 1;
   mydiv.style.zIndex = (2*id);
   mydiv.setAttribute("onmouseover", "$('#title"+id+"').css('visibility', 'visible');$('#reload-"+id+"').css('visibility', 'visible');$('#close-"+id+"').css('visibility', 'visible');$('#goto-"+id+"').css('visibility', 'visible');$('#input-"+id+"').css('visibility', 'visible');$('#favicon"+id+"').css('visibility', 'visible');");
   //mydiv.setAttribute("onmouseout", "$('#title"+id+"').css('visibility', 'hidden');$('#reload-"+id+"').css('visibility', 'hidden');$('#close-"+id+"').css('visibility', 'hidden');$('#goto-"+id+"').css('visibility', 'hidden');$('#input-"+id+"').css('visibility', 'hidden');$('#favicon"+id+"').css('visibility', 'hidden');");

  
   document.body.appendChild(mydiv);
   
   document.body.appendChild(mydiv);
   	
	   mydragger = document.createElement("dragger");
	   mydragger.setAttribute("id", "dragger"+id);
	   mydragger.setAttribute("ondrag","doDrag(this, "+id+");");
	   mydragger.setAttribute("onmouseup","doEndJob("+id+");");
	   mydragger.setAttribute("ondblclick","doubleClickOnNavigator("+id+");");
	   mydragger.style.top = top_cnv_value+"px";
	   mydragger.style.left = (left_cnv_value+20)+"px";
	   mydragger.style.cursor = "move";
	   mydragger.style.width = (width_value-80)+"px";
	   mydragger.style.height = "25px";
	   mydragger.style.zIndex = (2*id+2);
	   mydragger.style.zoom = 1;
	   //mydragger.style.backgroundColor = "red";
	   document.body.appendChild(mydragger);
	
	   myresizer = document.createElement("resizer");
	   myresizer.setAttribute("id", "resizer"+id);
	   myresizer.setAttribute("top", top_cnv_value+height_value);
	   myresizer.setAttribute("left", left_cnv_value+width_value+2);
	   myresizer.setAttribute("ondrag","doResize(this, "+id+");");
	   myresizer.setAttribute("onmouseup","doEndJob("+id+");");
	   myresizer.style.top = (top_cnv_value+height_value)+"px";
	   myresizer.style.left = (left_cnv_value+width_value+2)+"px";
	   myresizer.style.cursor = "nw-resize";
	   myresizer.style.width = "10px";
	   myresizer.style.height = "10px";
	   myresizer.style.zIndex = (2*id+1);
	   myresizer.style.zoom = 1;
	   //myresizer.style.backgroundColor = "red";
	   document.body.appendChild(myresizer);
	
   divTitle = document.createElement("title-place");
   divTitle.setAttribute("id", "title"+id);
   divTitle.style.top = (top_cnv_value)+"px";
   divTitle.style.left = (left_cnv_value)+"px";
   //divTitle.style.cursor = "nw-resize";
   divTitle.style.width = width_value+"px";
   divTitle.style.height = "25px";
   divTitle.style.zIndex = (2*id+1);
   divTitle.style.zoom = 1;
   divTitle.style.overflow = "hidden";
   //divTitle.style.visibility = "hidden";
   divTitle.setAttribute("onmouseover", "$('#reload-"+id+"').css('visibility', 'visible');$('#close-"+id+"').css('visibility', 'visible');$('#goto-"+id+"').css('visibility', 'visible');$('#input-"+id+"').css('visibility', 'visible');$('#favicon"+id+"').css('visibility', 'visible');");
   //divTitle.setAttribute("onmouseout", "$('#reload-"+id+"').css('visibility', 'hidden');$('#close-"+id+"').css('visibility', 'hidden');$('#goto-"+id+"').css('visibility', 'hidden');$('#input-"+id+"').css('visibility', 'hidden');$('#favicon"+id+"').css('visibility', 'hidden');");
   divTitle.setAttribute("onmouseout", "$('#dragger"+id+"').css('display', 'block');");
   document.body.appendChild(divTitle);

   imgIco = document.createElement("IMG");
   imgIco.setAttribute("src", host+"/favicon.ico");
   imgIco.setAttribute("id", "favicon"+id);
   imgIco.setAttribute("border", "0");
   imgIco.style.width = 16+"px";
   imgIco.style.height = 16+"px";
   imgIco.setAttribute("class", "img");
   imgIco.style.visibility = "hidden";
   imgIco.setAttribute("onclick", "showHideLayer($('#special"+id+"'));");
   document.getElementById("title"+id).appendChild(imgIco);
  
   inputUrl = document.createElement("INPUT");
   inputUrl.setAttribute("id", "input-"+id);
   inputUrl.setAttribute("type", "text");
   inputUrl.setAttribute("value", url);
   inputUrl.style.width = 82+"%";
   inputUrl.style.border = "none";
   inputUrl.style.visibility = "hidden";
   inputUrl.setAttribute("onkeypress", "keyPressed(event,'"+id+"', $('#input-"+id+"').val());");
   document.getElementById("title"+id).appendChild(inputUrl);
   

   
   spanClose = document.createElement("SPAN");
   spanClose.setAttribute("id", "close-"+id);
   spanClose.setAttribute("class", "icon icon_small_delete");
   spanClose.setAttribute("onmouseover", "$(this).attr('class', 'icon_colored icon_small_delete');");
   spanClose.setAttribute("onmouseout", "$(this).attr('class', 'icon icon_small_delete');");
   spanClose.setAttribute("title", "Remove");
   spanClose.setAttribute("onclick", "closeFrame("+id+");");
   spanClose.style.visibility = "hidden";
   document.getElementById("title"+id).appendChild(spanClose);
 
   spanReload = document.createElement("SPAN");
   spanReload.setAttribute("id", "reload-"+id);
   spanReload.setAttribute("class", "icon icon_reload");
   spanReload.setAttribute("onmouseover", "$(this).attr('class', 'icon_colored icon_reload');");
   spanReload.setAttribute("onmouseout", "$(this).attr('class', 'icon icon_reload');");
   spanReload.setAttribute("title", "Reload");
   spanReload.setAttribute("onclick", "$('#special"+id+"').css('height', $('#special"+id+"').attr('old-height'));reload('"+id+"');");
   spanReload.style.visibility = "hidden";
   document.getElementById("title"+id).appendChild(spanReload);

   myagoto = document.createElement("a");
   myagoto.setAttribute("id","agoto-"+id);
   myagoto.setAttribute("href", url);
   myagoto.setAttribute("target", "_blank");
   document.getElementById("title"+id).appendChild(myagoto);


   spanGoToPage = document.createElement("SPAN");
   spanGoToPage.setAttribute("id", "goto-"+id);
   spanGoToPage.setAttribute("class", "icon icon_open_page");
   spanGoToPage.setAttribute("onmouseover", "$(this).attr('class', 'icon_colored icon_open_page');");
   spanGoToPage.setAttribute("onmouseout", "$(this).attr('class', 'icon icon_open_page');");
   spanGoToPage.setAttribute("title", "Open web page");
   spanGoToPage.style.visibility = "hidden";
   document.getElementById("agoto-"+id).appendChild(spanGoToPage);
   
   ifrm = document.createElement("IFRAME");
   if(url.trim() != 'about:home'){
      if(!(/^http/i.test(url))){
          url = "http://"+url;
      }
   	ifrm.setAttribute("src", url);
   }
   ifrm.setAttribute("frameborder", "0");
   ifrm.style.top = top_value+"px";
   ifrm.style.left = left_value+"px";
   ifrm.id = "inneriframe"+id;

   mydiv = document.createElement("outerdiv");
   mydiv.setAttribute("id", "outerdiv"+id);
   mydiv.style.top = top_cnv_value+"px";
   mydiv.style.left = left_cnv_value+"px";
   //mydiv.style.cursor = "move";
   mydiv.style.width = width_value+"px";
   mydiv.style.height = height_value+"px";
   mydiv.style.zIndex = (2*id-1);
   mydiv.style.backgroundColor = "#ffffff";
   document.body.appendChild(mydiv);
  
   document.getElementById("outerdiv"+id).appendChild(ifrm);
   $("#inneriframe"+id).attr("style",  "overflow:hidden;");
   if(/^www.youtube.com/i.test(url.replace("http://", "")) || /^img.youtube.com/i.test(url.replace("http://", ""))){
      
      $("#inneriframe"+id).css("width", 420+"px");
      $("#inneriframe"+id).css("height", 315+"px");
      $("#inneriframe"+id).css("top", 25+"px");
     
      $("#inneriframe"+id).css("left", 0+"px");
   }else{	
	  //console.log("inner_width"+inner_width_value);
      $("#inneriframe"+id).css("width", parseInt((inner_width_value === undefined)?1024:inner_width_value)+"px");
      $("#inneriframe"+id).css("height", 20000+"px");

      $("#inneriframe"+id).css("left", left_value+"px");
     
      $("#inneriframe"+id).css("top", top_value+"px");
     
   }
  
}

function makeFrameSet(id){
    $("#special"+id).mousedown(function(e){
      if(!mousepressed){
         topValue = $("#inneriframe"+id).css('top').replace("px","");
         leftValue = $("#inneriframe"+id).css('left').replace("px","");
      }

      pageX = e.pageX;
      pageY = e.pageY;
      deltaX = e.pageX;
      deltaY = e.pageY;
      mousepressed = true;
      $("#special"+id).css("cursor", "move");
   });
   
   $("#special"+id).mouseup(function(e){
      if(mousepressed == true){
          doEndJob(id);
      }
      mousepressed = false;
      $("#special"+id).css("cursor", "auto");
   });

   $("#special"+id).mouseleave(function(e){
      if(mousepressed == true){
          doEndJob(id);
      }
      mousepressed = false;
      $("#special"+id).css("cursor", "auto");
   });

    $("#special"+id).mousemove(function(e){
      if(mousepressed){
        $("#special"+id).css("cursor", "move");
        if(deltaX != e.pageX){
            deltaX = e.pageX;
         	if(pageX > e.pageX){
               leftValue -= pageX - e.pageX;
            }else{
               leftValue -= 1;
               leftValue += (e.pageX - pageX);
               leftValue += 1;
            }
        }
        pageX = e.pageX;

        if(deltaY != e.pageY){
            deltaY = e.pageY;
         	if(pageY > e.pageY){
               topValue -= pageY - e.pageY;
            }else{
               topValue -= 1;
               topValue += (e.pageY - pageY);
               topValue += 1;
            }
         }
         pageY = e.pageY;
         $("#inneriframe"+id).css('top',topValue+'px');
         $("#inneriframe"+id).css('left',leftValue+'px');
      }

   });
}

function saveFrame(id, url, leftValue, topValue, widthValue, heightValue, leftCanvas, topCanvas, innerWidthValue){
    
    uid = $("#inneriframe"+id).attr("uid");
    if(url === undefined){
       url = "about:home";
    }
    if(url != 'about:home' && url != ''){
      url = encodeURIComponent(url);
	  console.log("width: "+$("#inneriframe"+id).css("width").replace('px', ''));
	  innerWidthValue = (innerWidthValue === undefined)? $("#inneriframe"+id).css("width").replace('px', '') : innerWidthValue;
      //save it to your database
      console.log("leftValue ["+leftValue+"]"+",topValue ["+topValue+"]"+",widthValue ["+widthValue+"],"+"heightValue ["+heightValue+"], leftCanvas ["+leftCanvas+"], topCanvas ["+topCanvas+"], innerWidthValue ["+innerWidthValue+"]");
    }
   
    return false;
}

function closeFrame(id){
   uid = $("#inneriframe"+id).attr("uid");
    $.ajax({
      type: "GET",
      url: "iframe/delete_iframe.php",
      data: "IfrToken="+uid,
      success: function(data) {
         $("#special"+id).remove();
         $("#title"+id).remove();
         $("#dragger"+id).remove();
         $("#resizer"+id).remove();
         $("#outerdiv"+id).remove();
      }
    });
    return false;
}



function reload(id) {
   var f = document.getElementById("inneriframe"+id);
   loadUrl(id, f.src);
}

function loadUrl(id, url){
   if(/^www.youtube.com/i.test(url.replace("http://", ""))){
      $("#inneriframe"+id).css("width", 420+"px");
      $("#inneriframe"+id).css("height", 315+"px");
      $("#inneriframe"+id).css("top", 25+"px");
   }
   /*else{
      $("#inneriframe"+id).css("width", 1024+"px");
      $("#inneriframe"+id).css("height", 20000+"px");
   }*/

   if(url.trim() != 'about:home'){
      if(!(/^http/i.test(url))){
          url = "http://"+url;
      }
   	$("#inneriframe"+id).attr("src", url);
   }
}

function doDrag(obj, id){
   $(".layer").each(function( index ) {
  		//$(this).css("background-color", "");
  		$(this).css("display", "block");
	});
	 
   newTop = parseInt($(obj).css('top').replace('px', ''));
   newLeft = parseInt($(obj).css('left').replace('px', ''));
   width = parseInt($('#special'+id).css('width').replace('px', ''));
   height = parseInt($('#special'+id).css('height').replace('px', ''));

   $('#special'+id).css('left', (newLeft-20)+'px');
   $('#special'+id).css('top', newTop+'px');
   $('#outerdiv'+id).css('left', (newLeft-20)+'px');
   $('#outerdiv'+id).css('top', (newTop)+'px');
   $('#title'+id).css('left', (newLeft-20)+'px');
   $('#title'+id).css('top', newTop+'px');

   $('#resizer'+id).css('left', newLeft-20+width);
   $('#resizer'+id).css('top', newTop+height);
   $('#resizer'+id).attr('left', newLeft-20+width);
   $('#resizer'+id).attr('top', newTop+height);

   if(typeof doDragExtension == 'function') { 
		doDragExtension(obj, id); 
	}
}

function doEndJob(id){
   //ajust resizer and dragger
   top_cnv_value = $("#outerdiv"+id).css("top").replace('px', '');
   left_cnv_value = $("#outerdiv"+id).css("left").replace('px', '');
   width_value = $("#outerdiv"+id).css("width").replace('px', '');
   height_value = $("#outerdiv"+id).css("height").replace('px', '');
   console.log("width: "+$("#inneriframe"+id).css("width").replace('px', ''));
   saveFrame(id, $("#inneriframe"+id).attr("src"), $("#inneriframe"+id).css("left").replace('px', ''), $("#inneriframe"+id).css("top").replace('px', ''), width_value, height_value, left_cnv_value, top_cnv_value, $("#inneriframe"+id).css("width").replace('px', ''));

	$(".layer").each(function( index ) {
		if($(this).attr("dg:plugin") == "true"){
			//$(this).css("background-color", "black");
  			$(this).css("display", "none");	
		}		
	});
	
	if(typeof doEndJobExtension == 'function') { 
		doEndJobExtension(id); 
	}
}

function doResize(obj, id){
	$(".layer").each(function( index ) {
  		//$(this).css("background-color", "");
  		$(this).css("display", "block");
	});

   initialHeight = $('#special'+id).css('height').replace('px', '');
   initialWidth = $('#special'+id).css('width').replace('px', '');
   deltaHeight =  $(obj).css('top').replace('px', '') - $(obj).attr('top');
   deltaWidth = $(obj).css('left').replace('px', '') - $(obj).attr('left');

   newHeight = parseInt(initialHeight)+parseInt(deltaHeight);
   newWidth =  parseInt(initialWidth)+parseInt(deltaWidth);

   $('#special'+id).css('height', newHeight+'px');
   $('#special'+id).css('width', newWidth+'px');
   $('#outerdiv'+id).css('height', newHeight+'px');
   $('#outerdiv'+id).css('width', newWidth+'px');
   $('#title'+id).css('width', newWidth+'px');
   $('#dragger'+id).css('width', (newWidth-80)+'px');
   //$('#dragger'+id).css('left', $(obj).css('left'));
   
   $(obj).attr('left', $(obj).css('left').replace('px', ''));
   $(obj).attr('top', $(obj).css('top').replace('px', ''));

   $('#special'+id).attr('old-height', $('#special'+id).css('height'));

   if(typeof doResizeExtension == 'function') { 
		doResizeExtension(obj, id); 
	}
}

function keyPressed(event, id, url){
   if(event.keyCode=='13'){
      host = url.replace("http://", "");
      host = host.replace("https://", "");
      host = url.split("//")[0]+"//"+host.split("/")[0];
      $("#favicon"+id).attr("src", host+"/favicon.ico");
      loadUrl(id, url);
      $("#agoto-"+id).attr("href",url);
      doEndJob(id);
      if(typeof keyPressedExtension == 'function') { 
		keyPressedExtension(event, id, url); 
	  }
   }
}

function showHideLayer(obj){
	//console.log("in showHideLayer ["+parseInt($(obj).css('height').replace('px', ''))+"]");
	if($(obj).css('display') == 'block'){
		$(obj).slideUp();
	}
	if($(obj).css('display') == 'none'){
		$(obj).slideDown();
	}
	
}


function doubleClickOnNavigator(id){
	$('#dragger'+id).css('display', 'none');
	$('#input-'+id).focus();
	if(typeof doubleClickOnNavigatorExtension == 'function') { 
		doubleClickOnNavigatorExtension(id); 
	}
}


function getDocumentHeight(){
   winH = 460;
   if (parent.document.body && parent.document.body.offsetWidth) {
    winH = parent.document.body.offsetHeight;
   }
   if (parent.document.compatMode=='CSS1Compat' &&
       parent.document.documentElement &&
       parent.document.documentElement.offsetWidth ) {
    winH = parent.document.documentElement.offsetHeight;
   }
   if (parent.window.innerHeight) {
    winH = parent.window.innerHeight;
   }

   var D = parent.document;
   winH = Math.max(
      Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
      Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
      Math.max(D.body.clientHeight, D.documentElement.clientHeight)
   );
   return winH+20;
}

function getCurrDocumentHeight(){
   winH = 460;
   if (document.body && document.body.offsetWidth) {
    winH = document.body.offsetHeight;
   }
   if (document.compatMode=='CSS1Compat' &&
       document.documentElement &&
       document.documentElement.offsetWidth ) {
    winH = document.documentElement.offsetHeight;
   }
   if (window.innerHeight) {
    winH = window.innerHeight;
   }

   var D = document;
   winH = Math.max(
      Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
      Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
      Math.max(D.body.clientHeight, D.documentElement.clientHeight)
   );
   return winH;
}

function getDocumentWidth(){
   var winW = 630;
   if (document.body && document.body.offsetWidth) {
    winW = document.body.offsetWidth;
   }
   if (document.compatMode=='CSS1Compat' &&
       document.documentElement &&
       document.documentElement.offsetWidth ) {
    winW = document.documentElement.offsetWidth;
   }
   if (window.innerWidth) {
    winW = window.innerWidth;
   }
   return winW;
}
