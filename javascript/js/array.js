window.onload = function() {
    let itemList = [];
    let addButton = document.querySelector("#add");   //#add인 버튼의 정보를 addButton에 넣었다.
    let input = document.querySelector("#item");
    input.addEventListener("keydown"/*엔터 눌러서 전송할 수 있게*/ , function(event){
        if(event.keyCode == 13/*엔터키*/) {
            addList();
        }
        console.log("입력 중 . . .")
    });
    
    /* '추가'버튼을 "click"하면 리스트에 추가(addList)하겠다. */
    addButton.addEventListener("click", addList);
    /* 리스트에 추가하는 함수 */
    function addList() {
        let item = input.value/* input태그에 있는 글자 가져오는 기능 */;
        if(item !== ""){
            itemList.push(item);
            input.value = "";
            input.focus();  //다시 input에 커서 가게
            showList();
        } else{
            alert("준비물을 입력한 후 추가를 눌러주세요.");
        }
    }
    /* 목록을 보여주는 함수 */
    //ul과 li가 html에는 없으므로 여기서 만들어 줘야 한다. 
    function showList() {
        let list = "<ul>";
        for(let i = 0; i < itemList.length; i++){
            list += "<li>" + itemList[i] + "<span class='close' id = " + i + ">X</span></li>";
        }
        list += "</ul>";
        document.querySelector("#itemList").innerHTML = list;
        let remove = document.querySelectorAll/*클래스선택자*/('.close');
        for(let i = 0; i < remove.length; i++){
            remove[i].addEventListener("click", removeList);
        }
    }
    /* 선택한 항목을 목록에서 삭제하는 함수 */
    function removeList() {
        let id = this.getAttribute("id");   //선택당한 객체의 인덱스 번호를 가져옴
        itemList.splice(id,1);              //해당 인덱스를 삭제
        console.log(itemList);
        showList();                         //삭제한 객체 빠지게 목록 새로고침
    }
}