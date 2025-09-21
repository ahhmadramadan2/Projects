counter = 1;

function addDiv(){
    let div = document.createElement("div");
 let inputDiv = document.querySelector("#content");
 div.innerHTML = "this is my new division" + counter;
    div.innerHTML =inputDiv.value;// "this is my new division" + counter;

 div.classList.add("divStyle");
    document.body.append(div);

    counter++;

}