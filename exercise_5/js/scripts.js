//change the font family of clock
function fontFunction(){
    var font = document.getElementById("myFonts").value;
    logo.style.fontFamily = font;
}
//bold
function boldFunction(){
    var checkBox = document.getElementById("boldCheck");
    console.log(checkBox.checked)
    if (checkBox.checked == true ){
        logo.style.fontWeight = "bold";
    }
    else{
        logo.style.fontWeight = 'inherit';
    }
}
    
function italicFunction(){
    var checkBox = document.getElementById("italicCheck");
    console.log(checkBox.checked)
    if (checkBox.checked == true ){
        logo.style.fontStyle = "italic";
    }
    else{
        logo.style.fontStyle = 'inherit';
    }
}

//size
function sizeFunction(){
    var checkSize = document.getElementById("size").value;
    console.log(checkSize)
    logo.style.fontSize = checkSize + "px";
}

function myFunction() {
  document.body.style.backgroundImage= "url(images/background3.png)";
}

function myFunction() {
  document.getElementById("logo").style.color = "orange";
}
