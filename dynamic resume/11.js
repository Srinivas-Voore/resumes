// AJAX


function loadJsonFile(file,callback){
    var fileRequest = new XMLHttpRequest();
    fileRequest.overrideMimeType("application/json");
    fileRequest.open("GET",file,true);
    fileRequest.onreadystatechange=function(){
        if(fileRequest.readyState === 4 && fileRequest.status=="200"){
            callback(fileRequest.responseText);
            console.log(fileRequest.response);
        }
    };
    fileRequest.send();
}

loadJsonFile("11.json",function(text){
    var data=JSON.parse(text);
    // details(data.details);
    // persondata(data.details)
    console.log(data);
    details(data.personaldata);
    details1(data.mydata);
    
});


var body=document.getElementById('root');

var d=document.createElement('div');
d.classList.add("main");
body.appendChild(d);


var left=document.createElement('div');
left.classList.add("left");
d.appendChild(left);

var right=document.createElement('div');
right.classList.add("right");
d.appendChild(right);

function details(dx){
    var name=document.createElement("h2");
    name.setAttribute("id","name");
    name.textContent=dx.name;
    left.appendChild(name);

    var name1=document.createElement("h2");
    name1.setAttribute("id","mobile");
    name1.textContent=dx.mobile;
    left.appendChild(name1);

    var email=document.createElement("h2");
    email.setAttribute("id","email");
    email.textContent=dx.email;
    left.appendChild(email);
}



var d1=document.createElement("div");
d1.classList.add("edu");
right.appendChild(d1);
var h1=document.createElement("h1");
h1.textContent="Educational Details:";
d1.appendChild(h1);
d1.appendChild(document.createElement("hr"));


function details1(arrx){
    for (i in arrx){
        var ul=document.createElement("ul");
        ul.classList.add("myprofile");
        var li=document.createElement("li");
        li.textContent=arrx[i].name;
        ul.appendChild(li);
        right.appendChild(ul);
        li=document.createElement("li");
        li.textContent=arrx[i].percentage;
        ul.appendChild(li);
        right.appendChild(ul);
        li=document.createElement("li");
        li.textContent=arrx[i].yop;
        ul.appendChild(li);
        right.appendChild(ul);
    }
}



// 0:client wants some data from the server
// 1:ready to rise the request
// 2:sends the request from client to server
// 3:server ready to send the data
// 4:server sends the data to the client


// 202:success
// 404:client side error
// 505:server side error
