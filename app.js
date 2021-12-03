const url = 'https://restcountries.com/v3.1/'

// All countries
fetch(`${url}all`)
    .then(response => response.json())
    .then(data => countries(data))


const countries = data => {
    countrie(data)
}


const countrie = data => {
    const countrieCart = document.querySelector('.hero__countries');
   
    for( let i = 0; i < data.length; i++) {

        const countrieInfo = document.createElement('div');
        const flag = data[i].flags.png;
        const nameCountrie = data[i].name.common
        const population = data[i].population.toLocaleString()
        const region = data[i].region
        const capital = data[i].capital

        
        countrieInfo.innerHTML = 
        `
        <div class="hero__countries__cart">
            <div>
                <img class="hero__countries_flag" src="${flag}" alt=""/>
            </div>
            <div class="hero__countries__description">
                <h1>${nameCountrie}</h1>
                <p>Population: <span>${population}</span></p>
                <p>Region: <span>${region}</span></p>
                <p>Capital: <span>${capital}</span></p>
            </div>
        </div>
        `

        countrieCart.appendChild(countrieInfo)
    }

     // countrieInfo.classList.add();

}



function selectContries() {
    const selectContriesOption = document.querySelector('.hero__select_tools');
    const selectCountriesOptionModal = document.querySelector('.hero__select_options');
    const iconDownArrow = selectContriesOption.querySelector('i')
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
            
            // this one is for filter https://restcountries.com/v3.1/region/{region}
        })
    })

}







const init = () => {
    selectContries()
}

init();