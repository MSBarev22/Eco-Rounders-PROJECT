document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById('loadingScreen');

  setTimeout(function () {
    loadingScreen.style.transition = "opacity 0.1s ease-in-out";
    setTimeout(function () {
      let opacity = 1;
      const interval = setInterval(function () {
        opacity -= 0.1;
        loadingScreen.style.opacity = opacity.toFixed(1);
        if (opacity <= 0) {
          clearInterval(interval);
          loadingScreen.style.display = "none";
        }
      }, 100);
    }, 500);
  }, 700);

  const loadingTexts = document.querySelectorAll('.loading-text');

  let textIndex = 0;
  setInterval(function () {
    loadingTexts.forEach((text, index) => {
      text.style.opacity = index === textIndex ? 1 : 0;
    });
    textIndex = (textIndex + 1) % loadingTexts.length;
  }, 450);
});



  function rotateHomeButton(event) {
    const homeButton = document.querySelector('.rotate');
    homeButton.classList.toggle('clicked');
  }


  function filterFiles() {
const searchInput = document.querySelector('.search-bar input');
const resultsList = document.getElementById('results');
const files = ['Countries/Afghanistan.html', 'Countries/Albania.html', 'Countries/Algeria.html', 'Countries/Andorra.html', 'Countries/Angola.html', 'Countries/Antigua and Barbuda.html', 'Countries/Argentina.html', 'Countries/Armenia.html', 'Countries/Australia.html', 'Countries/Austria.html', 'Countries/Azerbaijan.html', 'Countries/Bahamas.html', 'Countries/Bahrain.html', 'Countries/Bangladesh.html', 'Countries/Barbados.html', 'Countries/Belarus.html', 'Countries/Belgium.html', 'Countries/Belize.html', 'Countries/Benin.html', 'Countries/Bhutan.html', 'Countries/Bolivia.html', 'Countries/Bosnia and Herzegovina.html', 'Countries/Botswana.html', 'Countries/Brazil.html', 'Countries/Brunei.html', 'Countries/Bulgaria.html', 'Countries/Burkina Faso.html', 'Countries/Burundi.html', 'Countries/Cabo Verde.html', 'Countries/Cambodia.html', 'Countries/Cameroon.html', 'Countries/Canada.html', 'Countries/Central African Republic.html', 'Countries/Chad.html', 'Countries/Chile.html', 'Countries/China.html', 'Countries/Colombia.html', 'Countries/Comoros.html', 'Countries/Congo.html', 'Countries/Costa Rica.html', 'Countries/Cote d\'Ivoire.html', 'Countries/Croatia.html', 'Countries/Cuba.html', 'Countries/Cyprus.html', 'Countries/Czech Republic.html', 'Countries/Denmark.html', 'Countries/Djibouti.html', 'Countries/Dominica.html', 'Countries/Dominican Republic.html', 'Countries/Ecuador.html', 'Countries/Egypt.html', 'Countries/El Salvador.html', 'Countries/Equatorial Guinea.html', 'Countries/Eritrea.html', 'Countries/Estonia.html', 'Countries/Eswatini.html', 'Countries/Ethiopia.html', 'Countries/Fiji.html', 'Countries/Finland.html', 'Countries/France.html', 'Countries/Gabon.html', 'Countries/Gambia.html', 'Countries/Georgia.html', 'Countries/Germany.html', 'Countries/Ghana.html', 'Countries/Greece.html', 'Countries/Grenada.html', 'Countries/Guatemala.html', 'Countries/Guinea.html', 'Countries/Guinea-Bissau.html', 'Countries/Guyana.html', 'Countries/Haiti.html', 'Countries/Honduras.html', 'Countries/Hungary.html', 'Countries/Iceland.html', 'Countries/India.html', 'Countries/Indonesia.html', 'Countries/Iran.html', 'Countries/Iraq.html', 'Countries/Ireland.html', 'Countries/Israel.html', 'Countries/Italy.html', 'Countries/Jamaica.html', 'Countries/Japan.html', 'Countries/Jordan.html', 'Countries/Kazakhstan.html', 'Countries/Kenya.html', 'Countries/Kiribati.html', 'Countries/Korea, North.html', 'Countries/Korea, South.html', 'Countries/Kosovo.html', 'Countries/Kuwait.html', 'Countries/Kyrgyzstan.html', 'Countries/Laos.html', 'Countries/Latvia.html', 'Countries/Lebanon.html', 'Countries/Lesotho.html', 'Countries/Liberia.html', 'Countries/Libya.html', 'Countries/Liechtenstein.html', 'Countries/Lithuania.html', 'Countries/Luxembourg.html', 'Countries/Madagascar.html', 'Countries/Malawi.html', 'Countries/Malaysia.html', 'Countries/Maldives.html', 'Countries/Mali.html', 'Countries/Malta.html', 'Countries/Marshall Islands.html', 'Countries/Mauritania.html', 'Countries/Mauritius.html', 'Countries/Mexico.html', 'Countries/Micronesia.html', 'Countries/Moldova.html', 'Countries/Monaco.html', 'Countries/Mongolia.html', 'Countries/Montenegro.html', 'Countries/Morocco.html', 'Countries/Mozambique.html', 'Countries/Myanmar.html', 'Countries/Namibia.html', 'Countries/Nauru.html', 'Countries/Nepal.html', 'Countries/Netherlands.html', 'Countries/New Zealand.html', 'Countries/Nicaragua.html', 'Countries/Niger.html', 'Countries/Nigeria.html', 'Countries/North Macedonia.html', 'Countries/Norway.html', 'Countries/Oman.html', 'Countries/Pakistan.html', 'Countries/Palau.html', 'Countries/Panama.html', 'Countries/Papua New Guinea.html', 'Countries/Paraguay.html', 'Countries/Peru.html', 'Countries/Philippines.html', 'Countries/Poland.html', 'Countries/Portugal.html', 'Countries/Qatar.html', 'Countries/Romania.html', 'Countries/Russia.html', 'Countries/Rwanda.html', 'Countries/Saint Kitts and Nevis.html', 'Countries/Saint Lucia.html', 'Countries/Saint Vincent and the Grenadines.html', 'Countries/Samoa.html', 'Countries/San Marino.html', 'Countries/Sao Tome and Principe.html', 'Countries/Saudi Arabia.html', 'Countries/Senegal.html', 'Countries/Serbia.html', 'Countries/Seychelles.html', 'Countries/Sierra Leone.html', 'Countries/Singapore.html', 'Countries/Slovakia.html', 'Countries/Slovenia.html', 'Countries/Solomon Islands.html', 'Countries/Somalia.html', 'Countries/South Africa.html', 'Countries/South Sudan.html', 'Countries/Spain.html', 'Countries/Sri Lanka.html', 'Countries/Sudan.html', 'Countries/Suriname.html', 'Countries/Sweden.html', 'Countries/Switzerland.html', 'Countries/Syria.html', 'Countries/Taiwan.html', 'Countries/Tajikistan.html', 'Countries/Tanzania.html', 'Countries/Thailand.html', 'Countries/Timor-Leste.html', 'Countries/Togo.html', 'Countries/Tonga.html', 'Countries/Trinidad and Tobago.html', 'Countries/Tunisia.html', 'Countries/Turkey.html', 'Countries/Turkmenistan.html', 'Countries/Tuvalu.html', 'Countries/Uganda.html', 'Countries/Ukraine.html', 'Countries/United Arab Emirates.html', 'Countries/United Kingdom.html', 'Countries/United States.html', 'Countries/Uruguay.html', 'Countries/Uzbekistan.html', 'Countries/Vanuatu.html', 'Countries/Vatican City.html', 'Countries/Venezuela.html', 'Countries/Vietnam.html', 'Countries/Yemen.html', 'Countries/Zambia.html', 'Countries/Zimbabwe.html'];


    const searchTerm = searchInput.value.toLowerCase();


    resultsList.innerHTML = '';


    const filteredFiles = files.filter(file => file.toLowerCase().includes(searchTerm));

    
    filteredFiles.forEach(file => {
      const listItem = document.createElement('li');
      listItem.textContent = file.replace(/\.[^/.]+$/, '').replace('Countries/', '');
      resultsList.appendChild(listItem);
    });

    resultsList.style.display = 'block';
  }

 
  function loadContent(event) {
if (event.target.tagName === 'LI') {
  const fileName = 'Countries/' + event.target.textContent + '.html'; 
  window.location.href = fileName; 
}
}


 
  function hideResults() {
    setTimeout(() => {
      const resultsList = document.getElementById('results');
      resultsList.style.display = 'none';
    }, 200); 
  }

  
  function submitOnEnter(event) {
    if (event.key === 'Enter') {
      const topSuggestion = document.querySelector('#results li');
      if (topSuggestion) {
        topSuggestion.click(); 
      }
      hideResults(); 
    }
  }
  function rotateFlag() {
    const flag = document.querySelector('.flag');
    flag.classList.toggle('clicked');
}
  document.addEventListener('click', function (event) {
    const searchContainer = document.querySelector('.search-container');
    const resultsList = document.getElementById('results');
    if (!searchContainer.contains(event.target) && !resultsList.contains(event.target)) {
      hideResults();
    }
  });