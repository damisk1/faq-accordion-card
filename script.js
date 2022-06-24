const accordionList = document.querySelectorAll('.faq__accordion-lista__item dt');
const ativo = 'ativo';

accordionList[0].classList.add(ativo);
accordionList[0].nextElementSibling.classList.add(ativo);

accordionList.forEach( item => {

    item.addEventListener('click', ()=> {
        accordionList.forEach( item => {
            item.classList.remove(ativo);
            item.nextElementSibling.classList.remove(ativo);
        })

        item.classList.add(ativo);
        item.nextElementSibling.classList.add(ativo);
    })
})
