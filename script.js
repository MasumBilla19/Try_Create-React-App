fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => displayCountries(data))



function displayCountries(Countries) {
    const countriesDiv = document.getElementById('countries');

    Countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        const countryInfo = `
            <h1 class="country-name">${country.name}</h1>
            <h4 class="country-capital">${country.capital}</h4>
            <button onclick="displayCountryDetail('${country.name}')">Details</button>
        `;
        countryDiv.innerHTML = countryInfo;

        countriesDiv.appendChild(countryDiv);
    });

    /*for (let i = 0; i < Countries.length; i++) {
        const country = Countries[i];
        countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        // countryH1 = document.createElement('h1');
        // countryH4= document.createElement('h4');

        // countryH1.innerText = country.name;
        // countryH4.innerText = country.capital;

        // countryDiv.appendChild(countryH1); 
        // countryDiv.appendChild(countryH4);
        
        // short code
        const countryInfo = `
            <h1 class="country-name">${country.name}</h1>
            <h4 class="country-capital">${country.capital}</h4>
        `
        countryDiv.innerHTML = countryInfo;

        countriesDiv.appendChild(countryDiv);
    }*/
    
}

const displayCountryDetail = Name => {
    const url = `https://restcountries.eu/rest/v2/name/${Name}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const countryDetails = document.getElementById('country-details');
            
            const countryInfos = `
                <h1>Country Name: ${data[0].name}</h1>
                <h4>City Name: ${data[0].capital}</h4>
                <h4>Population: ${data[0].population}</h4>
                <h4>Area: ${data[0].area}</h4>
                <img src="${data[0].flag}"/>
            `;

            countryDetails.innerHTML = countryInfos;
        })
}










