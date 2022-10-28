window.onload = () => {
    const tab_swithers = document.querySelectorAll('[data-switcher]')

    for (let i = 0; i < tab_swithers.length; i++){
        const tab_swither = tab_swithers[i];
        const pade_id = tab_swither.dataset.tab;

        tab_swither.addEventListener('click', () => {
            document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
            tab_swither.parentNode.classList.add('is-active');

            SwitchPage(pade_id);
        })
    }

    
}

function SwitchPage(page_id){
       const current_page = document.querySelector('.pages .page.is-active');
       current_page.classList.remove('is-active');

       const next_page = document.querySelector(`.pages .page[data-tab="${page_id}"]`);
       next_page.classList.add('is-active');

}


