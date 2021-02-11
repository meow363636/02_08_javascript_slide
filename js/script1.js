// setInterval(nextSlideFn, 3000); 3초 후에 한번씩 자동으로 다음 슬라이드 호명
// setTimeout(nextSlideFn, 5000); 5초 후에 실행하고 끝 (타임아웃)

var cnt = 0;
var $slideWrap = document.querySelector('.slide-wrap');
var $page = document.querySelector ('.page');


function nextSlideFn(){
    cnt++;
    cnt > 3 ? cnt=3 : cnt; 
    $slideWrap.style = 'left:' + (-1200*cnt) + 'px';
}

function prevSlideFn(){
    cnt--;
    cnt < 0 ? cnt=0 : cnt;
    $slideWrap.style = 'left:' + (-1200*cnt) + 'px';
}

