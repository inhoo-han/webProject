window.onload = function() {
    var heading = document.querySelector("#head"); // <- 아직 #head가 생성되지 않았음!!
    var c = ["red", "orange", "yellow", "green", "lightblue", "navy", "purple"];
    var cnt = 0;
    if(c.lenght-1 != cnt){
    heading.onclick = function () {
        heading.style.color = c[cnt];
        heading.style.border = "5px solid salmon"
        heading.style.background = "ivory"
        cnt++;
        if(c.length == cnt){
            cnt = 0;
        }
    }
    } 
}