let frame = document.querySelector(".frame");
let articles = frame.querySelectorAll("article");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let opens = frame.querySelectorAll(".open");
let closes = frame.querySelectorAll(".close");

//원시형 자료 : 있는 그대로의 자료
//참조형 자료 : 주소값 (지도) const로 지정 가능

next.addEventListener("click", () => {
    frame.append(frame.firstElementChild)
})
prev.addEventListener("click", () => {
    frame.prepend(frame.lastElementChild);
})

opens.forEach((el, index) => {

    el.addEventListener("click", (e) => {
        e.target.closest("article").classList.add("on")
        //hide를 붙이는 코드
        //on이 붙어있지 않는 아티클을 어떻게 선택할 것인가?
        //on이 붙어있지 않다면 hide 클래스를 붙여달라

        //활성화 되지 않은 article은 모두 hide를 붙여서 보이지 않게 해야하므로
        //반복문을 사용해야 합니다

        for (let el of articles) !el.classList.contains("on") && el.classList.add("hide");

        //반복문 안에서 on이 없는 대상을 모두 hide해야 합니다
        //보통 3항연산자를 이용한 조건문이나 (앞의 조건)&&(앞의조건이 참이면 판단해서 참이면 실행) 
        //따라서 조건문 처럼 사용할 수 있습니다
    })


})

// target , currenttarget 차이
// curentTarget은 모든 대상
// target은 이벤트 하나의 대상

closes.forEach((el, index) => {

    el.addEventListener("click", (e) => {
        e.target.closest("article").classList.remove("on")

        for (let el of articles) !el.classList.contains("on") && el.classList.remove("hide");
    })


})