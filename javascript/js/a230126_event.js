window.onload = function() {
    let coverImage = document.querySelector("#cover");
    coverImage.onclick = function() {
        alert("이미지를 눌렀습니다.");
    }
    coverImage.onmouseover = function() {
        coverImage.style.border = "5px solid black";
    }
    coverImage.onmouseout = function() {
        coverImage.style.border = "";
    }
}

function showDetail(){
    document.querySelector("#desc").style.display="block";
    document.querySelector("#open").style.display="none";
}

function hideDetail(){
    document.querySelector("#desc").style.display="none";
    document.querySelector("#open").style.display="block";    
}