let blogs = [
  { title: "Blog A", urltitle: "blog-a", customtitle: "CustomBlogA" },
  { title: "Blog B", urltitle: "blog-b", customtitle: "CustomBlogB" },
  { title: "Blog C", urltitle: "blog-c", customtitle: "CustomBlogC" },
  { title: "Blog D", urltitle: "blog-d", customtitle: "CustomBlogD" },
  { title: "Blog E", urltitle: "blog-e", customtitle: "CustomBlogE" }
];

var arrHead = new Array();
        arrHead = ['Blog Title', 'Blog URL', 'Custom Blog Title'];


function searchblog() {
	var title = document.getElementById("blogTitle").value;
	title = isNullOrEmpty(title);
	var index = searchblogEntry(title);
	createResultTable(index);
}


function createResultTable(index){
	var resulttable=document.getElementById("resultsettable");
	var tr = resulttable.insertRow(-1);
	   for (var h = 0; h < arrHead.length; h++) {
            var th = document.createElement('th');              // TABLE HEADER.
            th.innerHTML = arrHead[h];
            tr.appendChild(th);
        }
           
        tr = resulttable.insertRow(-1); 
        var td = document.createElement('td'); 
        td = tr.insertCell(-1);             // TABLE HEADER.
        td.innerHTML = blogs[index]["title"];
        tr.appendChild(th);
        console.log(document.getElementById("resultsettable").className);
}


function searchblogEntry(title){
	for(i =0;i<blogs.length;i++){
		var blog = blogs[i];
		if((blog["title"]) == title){
			return i;
		}
	}
	return null;
}

function isNullOrEmpty(value) {
    if(value == null || value === ""){
    	return ""
    }else{
    	return value;
    }
}