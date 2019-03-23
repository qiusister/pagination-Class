
function pagination(pagecount,page,page_size,tid,allentries,parameter){
   var page = parInt(page);
   var sub_page = 5;//page numbers,Odd numbers greater than 1.
   if (sub_page%2 === 0) {
	   sub_page = sub_page + 1;
   }
   var b = "";
   var c = "";
   var d = "";
   var e = "";
   var a = "<ul>";
	if (page == 1){
		a = a + "<li class=\"first-page first-last-page\"></li>";
        a = a + "<li class=\"prev-page first-last-page\"></li>";
	}else{
	   a = a + "<li class=\"first-page\"  onclick=\"getProData (" + tid + ",'" + parameter + "'," + page_size + ",1)\"></li>";
	   a = a + "<li class=\"prev-page\"  onclick=\"getProData (" + tid + ",'" + parameter + "'," + page_size + "," + (page-1) + ")\"></li>";
			
	}
	//----------------------------------------------------
if (pagecount >= (sub_page * 2)){
	if (page == 1){
	      e = "<li  class=\"current-page\" onclick=\"getProData (" + tid + ",'" + parameter + "'," + page_size + ",1)\">1</li>";
		}else{
	      e = "<li onclick=\"getProData (" + tid + ",'" + parameter + "'," + page_size + ",1)\">1</li>";	
		}
	   var h = "<li class=\"none\"></li>";
	   var f = "<li onclick=\"getProData (" + tid + ",'" + parameter + "'," + page_size + "," + pagecount + ")\">" + pagecount + "</li>";
	
	
  if (page >= sub_page) {
	  
	 if ( page >= pagecount-(sub_page-2)){ 
	  for (i=pagecount-(sub_page-1);i<=pagecount;i++){
		  if ( i == page){
			d = "<li  class=\"current-page\">" + i + "</li>"; 
		  }else{
			d = "<li onclick=\"getProData (" + tid + ",'" + parameter + "',"  + page_size + "," + i + ")\">" + i + "</li>";  
		  }
		  b =b + d;
		  d = "";
	  }
		 b = e + h + b;
	 }else if (page < pagecount-(sub_page-2)) {
		  
	  for (i=page-((sub_page-1)/2);i<=page + sub_page-((sub_page+1)/2);i++){
		  if ( i == page){
			d = "<li  class=\"current-page\">" + i + "</li>"; 
		  }else{
			d = "<li onclick=\"getProData (" + tid + ",'" + parameter + "'," + page_size + "," + i + ")\">" + i + "</li>";  
		  }
		  b =b + d;
		  d = "";	
		}
		 b = e + h + b + h + f;
	}	 
		 
 }else{
		
	  for (i=2;i<=sub_page;i++){
		  if ( i == page){
			d = "<li  class=\"current-page\">" + i + "</li>"; 
		  }else{
			d = "<li onclick=\"getProData (" + tid + ",'" + parameter + "'," + page_size + "," + i + ")\">" + i + "</li>";  
		  }
		  b =b + d;
		  d = "";
	    } 
		 b = e + b + h + f ;
	 
	 }
	
}else{
	
	  for (i=1;i<=pagecount;i++){
		  if ( i == page){
			d = "<li  class=\"current-page\">" + i + "</li>"; 
		  }else{
			d = "<li onclick=\"getProData (" + tid + ",'" + parameter + "'," + page_size + "," + i + ")\">" + i + "</li>";  
		  }
		  b = b + d;
		  d = "";
	  }

}
		
	if (page == pagecount){
		c = "<li class=\"next-page first-last-page\"></li>";
        c = c + "<li class=\"last-page first-last-page\"></li>";
	}else{
		c = "<li class=\"next-page\"  onclick=\"getProData(" + tid + ",'" + parameter + "'," + page_size + "," + (page+1) + ")\"></li>";
       c = c + "<li class=\"last-page\"  onclick=\"getProData(" + tid + ",'" + parameter + "'," + page_size + "," + pagecount + ")\"></li>";
	}   
	   c = c + "</ul>";
	//----------------------------------------------------------
   
//$("#pagination-info").html("All <span>" + allentries + "</span> item records, Per page <span>" + page_size + "</span> items, Page <span>" + page + "/" + pagecount + "</span>");
$(".page-num-div").html(a+b+c);
}

