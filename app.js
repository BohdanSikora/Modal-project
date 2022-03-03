const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal')
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal)

const openModal = function(){ 
    // console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

}
const closeModal = function(){ 
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
};
for (let i = 0; i < btnOpenModal.length; i++)
btnOpenModal[i].addEventListener('click', openModal);
    // console.log('Button clicked');
    // modal.classList.remove('hidden');
    // overlay.classList.remove('hidden');

    // modal.style.display = 'block';


// btnCloseModal.addEventListener('click', closeModal) 
//     // modal.classList.add('hidden')
//     overlay.classList.add('hidden')


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function(e) {
    // console.log(e.key)

    if(e.key === 'Escape') {
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    }

})