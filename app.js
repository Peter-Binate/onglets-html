const tabs = [...document.querySelectorAll('.tab')]
const tabContents = [...document.querySelectorAll('.tab-content')]
tabs.forEach( tab => tab.addEventListener('click', tabsAnimation))

function tabsAnimation(e){
    // L'index a enlevé
    const indexToRemove = tabs.findIndex(tab => tab.classList.contains("active-tab"))

    tabs[indexToRemove].setAttribute("aria-selected", "false");
    tabs[indexToRemove].setAttribute("tabIndex", -1);
    tabs[indexToRemove].classList.remove("active-tab");
    tabContents[indexToRemove].classList.remove("active-tab-content");

    const indexToShow = tabs.indexOf(e.target)

    tabs[indexToShow].setAttribute("tabIndex", "0")
    tabs[indexToShow].setAttribute("aria-selected", "true")
    tabs[indexToShow].classList.add("active-tab")
    tabContents[indexToShow].classList.add("active-tab-content")
}

tabs.forEach( tab => tab.addEventListener('keydown', arrowNavigation))

let tabFocus = 0;

function arrowNavigation(e){
    // On vérifie si l'utilisateur a appuyé sur la flèche droite ou gauche
    if(e.keyCode === 39 || e.keyCode === 37){
        tabs[tabFocus].setAttribute("tabIndex", -1)
        if(e.keyCode === 39){
            //On se déplace à droite
            tabFocus++;

            if (tabFocus >= tabs.length ) {
                tabFocus = 0;
            }
        }     
        else if (e.keyCode === 37){
            tabFocus--;
            if(tabFocus < 0){
                tabFocus = tabs.length -1;
            }
        }
        tabs[tabFocus].setAttribute("tabIndex", 0)
        tabs[tabFocus].focus()
    }
}