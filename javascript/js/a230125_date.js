

//Date() : 내장객체
let now = new Date();                           //Date() : 오늘의 시간 날짜        
let firstDay = new Date("1970-01-01");          //Date("처음 만난 날")
let toNow = now.getTime();                      //getTime() : 오늘 날짜를 밀리초로 바꿔줌.
let toFirst = firstDay.getTime();
let firstYear = firstDay.getFullYear();
let firstMonth = firstDay.getMonth()+1;
let firstDate = firstDay.getDate();
let passedTime = toNow - toFirst;
let passedDay = Math.ceil/*올림함수*/(passedTime/(24*60*60*1000));


window.onload = function() {
    document.querySelector("#start").innerText = firstYear + "." + firstMonth + "." + firstDate + " 부터"
    document.querySelector("#accent").innerHTML = passedDay + "일 째"; 
    calcDate(100);
    calcDate(200);
    calcDate(365);
    calcDate(1000);

}

function calcDate(days){
    let future = toFirst + days*(24*60*60*1000);    //100일도 밀리초로 바꿔서 더해줌
    let someday = new Date(future);                 //밀리초를 넣어주고 
    let year = someday.getFullYear();
    let month = someday.getMonth()+1;
    let day = someday.getDate();
    document.querySelector("#date" + days/*days를 매개변수로도 쓰고, 아이디 호출할 때도 씀*/).innerText 
                        = year + "년 " + month + "월 " + day + "일";

    
}