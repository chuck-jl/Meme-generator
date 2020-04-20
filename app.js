const form = document.querySelector("form");
const submit = document.querySelector(".contact100-form-btn");
const img = document.querySelector("#url");
const uppertext = document.querySelector("#uppertext");
const lowertext = document.querySelector("#lowertext");
const memegallery = document.querySelector(".contact100-more");

function createcontainer(){
    let tmp = document.createElement("div");
    tmp.className= "memecontainer";
    let tmpbutton = document.createElement("button");
    tmpbutton.className = "meme-btn"
    tmpbutton.innerText = "Remove";
    let tmpbuttoncontainer = document.createElement("div");
    tmpbuttoncontainer.className = "container-mem-btn";
    tmpbuttoncontainer.appendChild(tmpbutton);
    tmp.appendChild(tmpbuttoncontainer);
    return tmp;
}
form.addEventListener("submit",function(e){
    e.preventDefault();
    let tmp = document.createElement("div");
    tmp.className="meme";
    tmp.style.backgroundImage=`url('${img.value}')`;
    let tmpupper = document.createElement("div");
    tmpupper.className = "toptext";
    tmpupper.innerText = uppertext.value;
    let tmplower = document.createElement("div");
    tmplower.className = "bottomtext";
    tmplower.innerText = lowertext.value;
    console.log(tmplower.innerText);
    tmp.appendChild(tmpupper);
    tmp.appendChild(tmplower);
    let newdiv = createcontainer();
    newdiv.prepend(tmp);
    memegallery.appendChild(newdiv);
    img.value = "";
    uppertext.value = "";
    lowertext.value = "";

})

memegallery.addEventListener("click",function(e){
    let target = e.target;
    if(target.tagName ==="BUTTON"){
        target.parentElement.parentElement.remove();
    }
})