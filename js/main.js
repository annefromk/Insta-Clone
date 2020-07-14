

//클릭 이벤트 (anonymous)

const heart = document.querySelector('.heart_btn');
const header = document.querySelector('#header');
const sidebox = document.querySelector('.side_box');

heart.addEventListener('click', function(){

    console.log('hit');
    heart.classList.toggle('on');
});


function resizeFunc(){
    if(pageYOffset >= 10){

        let calcWidth = (window.innerWidth *0.5) + 167;
        console.log(window.innerWidth *0.5);

        sidebox.style.left = calcWidth + 'px';
    }
}


//스크롤 이벤트 (조건걸기)

function scrollFunc(){

    console.log(pageYOffset);

    if(pageYOffset >= 10){
        header.classList.add('on');
        sidebox.classList.add('on');

        resizeFunc();
        
    }else{
        header.classList.remove('on');
        sidebox.classList.remove('on');
        sidebox.removeAttribute('style');
    }
}

window.addEventListener('scroll', scrollFunc);