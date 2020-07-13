

//클릭 이벤트 (anonymous)

const heart = document.querySelector('.heart_btn');
const header = document.querySelector('#header');

heart.addEventListener('click', function(){

    console.log('hit');
    heart.classList.toggle('on');
});


//스크롤 이벤트 (조건걸기)

function scrollFunc(){

    console.log(pageYOffset);

    if(pageYOffset >= 10){
        header.classList.add('on');
    }else{
        header.classList.remove('on');
    }
}

window.addEventListener('scroll', scrollFunc);