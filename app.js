const url = 'https://restcountries.com/v3.1/'

// All countries
fetch(`${url}all`)
    .then(response => response.json())
    .then(data => countries(data))

    const countries = data => {
    countrie(data)
    filter(data)
    selectContries(data)
}


// cards countries
const countrie = data => {
    const countrieCart = document.querySelector('.hero__countries');
    for( let i = 0; i < data.length; i++) {

        const countrieInfo = document.createElement('li');
        const flag = data[i].flags.png;
        const nameCountrie = data[i].name.common
        const population = data[i].population.toLocaleString()
        const region = data[i].region
        const capital = data[i].capital

        countrieInfo.classList.add('hero__countries__cart')

        countrieInfo.innerHTML = 
        `
            <img class="hero__countries__flag_item" src="${flag}" alt=""/>
            <div class="hero__countries__description">
                <h1> ${nameCountrie}</h1>
                <p>Population: <span> ${population}</span></p>
                <p>Region: <span id="region"> ${region}</span></p>
                <p>Capital: <span> ${capital}</span></p> 
            </div>
        
        `   
        countrieCart.appendChild(countrieInfo)
    }
}

// filter country by input
const filter = data => {
    const nameCountrieFiltr = document.querySelectorAll('.hero__countries__cart');
    const input = document.querySelector('#input');
    let filter = input.value.toUpperCase();
    let letter;
    let txtValue;
    for(let i = 0; i < nameCountrieFiltr.length; i++ ) {
        letter = nameCountrieFiltr[i].getElementsByTagName('h1')[0]
        txtValue = letter.textContent || letter.innerHTML
        if(txtValue.toUpperCase().indexOf(filter) > -1){
            nameCountrieFiltr[i].style.display = 'block'
        } else {
            nameCountrieFiltr[i].style.display = 'none'
        }
    }  
}

// dark mode and filter by region
function selectContries(data) {
    const selectContriesOption = document.querySelector('.hero__select_tools');
    const selectCountriesOptionModal = document.querySelector('.hero__select_options');
    const iconDownArrow = selectContriesOption.querySelector('i');
    const cartdarkMode = document.querySelectorAll('.hero__countries__description')

    // dark mode
    const switchMode = document.querySelector('.menu__switch');

    switchMode.addEventListener('click', () => {
        selectCountriesOptionModal.classList.toggle('bg-dark-mode-nav_cart_wigets');
        selectContriesOption.classList.toggle('bg-dark-mode-nav_cart_wigets');
        cartdarkMode.forEach( el => {
            el.classList.toggle('bg-dark-mode-nav_cart_wigets')
        })
    })

    // open modal with regional bloc
    selectContriesOption.addEventListener("click" , () => {
        selectCountriesOptionModal.classList.toggle('is-active')
        iconDownArrow.classList.toggle('animate-arrow')
    })

    // choose countrie and replace title modul 
    let titleCountriesOptionModal = selectContriesOption.querySelector('span')
    const allCountriesRegional = selectCountriesOptionModal.querySelectorAll('li');

    allCountriesRegional.forEach( el => {
        el.addEventListener('click', (e) => {
            const target = e.target.textContent
            const countrie = el.textContent

            if(target === countrie){
                titleCountriesOptionModal.textContent = countrie
                iconDownArrow.classList.remove('animate-arrow')
                selectCountriesOptionModal.classList.remove('is-active')
            }       
           

        })
    }) 
}



// filtr by region 
// const co = 'Asia'

// fetch(`${url}region/${co}`) 
//     .then(response => response.json())
//     .then(region => console.log(region))

