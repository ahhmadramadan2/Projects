

function changepic(number){

    const img =document.getElementById("webing");

    if(number == 0)
    img.src = "html.jpeg"

else if (number == 1)
img.src= "css.jpeg"

else if (number == 2)
img.src= "js.png"
}

function mouseover(status){
    const img =document.getElementById("webing");
    if( status == 'on')
    img.src = "web.jpeg"
else{
img.src="html.jpeg"
const check =document.getElementById("htnl");
check.checked="true;"
}
}