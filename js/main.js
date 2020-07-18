

//클릭 이벤트 (anonymous)

const heart = document.querySelector('.heart_btn');
const header = document.querySelector('#header');
const sidebox = document.querySelector('.side_box');
const variableWidth = document.querySelectorAll('.contents_box .contents');
const delegation = document.querySelectorAll('.contents_box');

// heart.addEventListener('click', function(){

//     console.log('hit');
//     heart.classList.toggle('on');
// });


// 이벤트 위임
function delegationFunc(e){

    let elem = e.taget;

    if(elem.matches('[data-name="haertbeat"]')){

        console.log('하트!')
    }else if(elem.matches(['data-name="bookmark"]'])){

        console.log('북마크!')
    }else if(elem.matches(['data-name="share"]'])){

        console.log('공유!')
    }else if(elem.matches(['data-name="more"]'])){

        console.log('더보기!')
    }

    elem.classList.toggle('on');

}



// 리사이즈 이벤트
function resizeFunc(){

    // console.log('resize');
    if(pageYOffset >= 10){

        let calcWidth = (window.innerWidth *0.5) + 167;
        console.log(window.innerWidth *0.5);

        sidebox.style.left = calcWidth + 'px';
    }

    if(matchMedia('screen and (max-width : 800px)').matches){

        variableWidth.style.width = window.innerWidth -20 + 'px';

        for(let i=0; i < variableWidth.length; i ++){
            variableWidth[i].style.width = window.innerWidth -20 + 'px';
        }

    }else{

        for(let i=0; i < variableWidth.length; i ++){

            variableWidth[i].removeAttribute('style');
          
        }
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


window.addEventListener('click', delegationFunc);
window.addEventListener('resize', resizeFunc);
window.addEventListener('scroll', scrollFunc);