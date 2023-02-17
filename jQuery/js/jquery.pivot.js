$.fn.pivot = function(options) {
    /* 변수 선언 */
    let $target = $(this);
    let $items = $target.children();        //선택자의 자식요소를 움직여보이게 할거야.
    let $container = $target.wrap('<div></div>').parents();     //bxslider에서 ani-canvas역할을 해 주는 부모div
    let option = {
        width: 500,
        height: 450
    }                                       //pivot의 크기
    /* 옵션 처리 */
    $.extend(option, options);              //바깥에서 받아온 width, height로 변경해 주겠다! 하... 너무재밌어ㅠ 

    /* 스타일을 지정 */
    $target/*선택자 자신*/.css({
        width: $items.length * option.width,
        height: option.height,
        position: 'absolute'
    });
    $items.css({
        width: option.width,
        height: option.height,
        float: 'left'
    });
    $container.css({
        width: option.width,
        height: option.height,
        position: 'relative',
        overflow: 'hidden'
    });
    /* 이벤트를 연결(플러그인 동작) */
    let originLeft = 0;
    let oldLeft = 0;
    let nowPosition = 0;        //현재 보고있는 이미지의 인덱스느낌. 위치값.
    let isDown = false;         //mouseDown하면 true, up이면 false
    $target.on({
        mousedown: function(event) {
            isDown = true;
            oldLeft = originLeft = event.clientX;   //눌렀을 때의 좌표값을 originLeft, oldLeft에 다 집어넣는다.
            event.preventDefault();         //기본이벤트 제거(이미지딸려나오는것)
        },
        mousemove: function(event) {
            if(isDown){
                let distance = oldLeft-event.clientX; //사용자가 어느정도 드래그 했는지 알려줌
                oldLeft = event.clientX;
                $target.animate({
                    left: '-=' + distance
                }, 0);                      //나는 움직였는데 얘는 애니메이트 속도있어서 지연되면 이상하니까 0줌
                $target.stop(true);         //큐에 보관되어 있는 것 비움
            }
            event.preventDefault();         //기본이벤트 제거
        },
        mouseup: function(event) {
            isDown = false;
            //mouseUp의 내부함수
            function movePosition(direction) {
                //위치 지정
                let changePosition = nowPosition + direction;
                if(changePosition >= 0 && changePosition < $items.length) {
                    nowPosition = changePosition;
                }
            };
            //요소의 1/3이상 드래그 했을 경우에만 피벗이 이루어짐
            if((originLeft - event.clientX) > option.width/3){ //요소의 1/3보다 많이 드래그 했을 때
                movePosition(+1);
            } else if((originLeft - event.clientX) < -option.width/3){
                movePosition(-1);
            } 
            $target.animate({
                left: -nowPosition * option.width
            }, 500);
            event.preventDefault();         //기본이벤트 제거
        }
    });
};
