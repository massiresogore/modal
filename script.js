'use strict';

 const modal = document.querySelector('.modal');
 const overlay = document.querySelector('.overlay');
 const closeModal = document.querySelector('.close-modal');
 const btnShowModal = document.querySelectorAll('.show-modal');

 const closeModeFunction = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const openModelFunction = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for(let i = 0; i < btnShowModal.length; i++){
    btnShowModal[i].addEventListener('click',openModelFunction);

    closeModal.addEventListener('click', closeModeFunction);
}

document.addEventListener('keydown', (e)=>{
    let key = e.key ;
    
    if(key  == 'Escape' && !modal.classList.contains('hidden')){
        closeModeFunction();
    }
    
})

overlay.addEventListener('click', closeModeFunction);

