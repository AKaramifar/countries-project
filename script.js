// All element in my project
function elements() {
  // Body
  body_EL;

  // Main Container
  container_Div_EL;

  // Header
  headerContainer_Div_EL;
  headerLabel_P_EL;
  darkMode_P_EL;

  // First view is a list of all countries with search box and filter box
  mainCountriesContainer_Div_EL;
  findCountriesTools_Div_EL;
  searchCountriesInput_Div_EL
  searchCountries_Input_EL;
  countriesRegoin_Div_EL;
  filterByRegoin_P_EL;  
  countriesRegoin_P_EL;
  ListOfAllCountriesContainer_Div_EL;

  // Each countries container small view
  countryContainerSmallView_Div_EL;
  countryImageSmallView_Img_EL;
  countryNameSmallView_P_EL;
  countryPopulationSmallView_P_EL;
  countryRegionSmallView_P_EL;
  countryCapitaSmallView_P_EL;

  // Each countries container full view
  countryContainerFullView_Div_EL;
  //---------------------------------------------
  countryBackButtonContainerFullView_Div_EL;
  countryBackButtonFullView_P_EL;
  //---------------------------------------------
  countryWholeDetailContainerFullView_Div_EL;
  countryImageFullView_Img_EL;
  countryDetailContainerFullView_Div_EL;
  //---------------------------------------------
  countryDetailContainerFirstChildFullView_Div_EL;
  countryDetailContainerFirstChild_1_FullView_Div_EL;
  countryNameFullView_Div_EL;
  countryNameFullView_P_EL;
  countryNativeNameFullView_P_EL;
  countryPopulationFullView_P_EL;
  countryRegionFullView_P_EL;
  countrySubRegionFullView_P_EL;
  countryCapitaFullView_P_EL;
  countryDetailContainerFirstChild_2_FullView_Div_EL;
  countryTopLevelDomainFullView_P_EL;
  countryCurrenciesFullView_P_EL;
  countryLanguageFullView_P_EL;
  //---------------------------------------------
  countryDetailContainerSecondChildFullView_Div_EL;
  countryBorderCountriesFullView_P_EL;    
  countryBorder_P_EL;    
}

// All  public variable's
function publicVariables() {
  allCounteries;  
  allRegoin;
  allRegoinIndex;
  currentRegoin;
  themMode;
  currentCuntrytoShow;
  currentCountryFullView;
  countriesBordersId;
}

allRegoin = [];
allRegoinIndex = [];
currentRegoin = 'All Regoin';
themMode = 'Light Mode';
currentCuntrytoShow = [];
currentCountryFullView = '';
countriesBordersId = [];

function makeHeaderContainer() {
  // Assign Id and Class to body
  body_EL = document.querySelector("body");
  body_EL.id = "body_JS";
  body_EL.classList = "body_CSS body_lightMode_CSS";

  // Main container for whole page
  container_Div_EL = document.createElement("div");
  container_Div_EL.id = "container_Div_JS";
  container_Div_EL.classList = "container_CSS";
  body_EL.appendChild(container_Div_EL);

  // assign element's to globall varaibles
  headerContainer_Div_EL = document.createElement("div");
  headerLabel_P_EL = document.createElement("p");
  darkMode_P_EL = document.createElement("p");

  // Assign Id and Class to element's
  headerContainer_Div_EL.id = "headerContainer_Div_JS";
  headerContainer_Div_EL.classList = "headerContainer_Div_CSS headerContainer_Div_lightMode_CSS";
  headerLabel_P_EL.id = "headerLabel_P_JS";
  headerLabel_P_EL.classList = "headerLabel_P_CSS headerLabel_P_lightMode_CSS";
  headerLabel_P_EL.textContent = "Where in the world?";
  darkMode_P_EL.id = "darkMode_P_JS";
  darkMode_P_EL.classList = "darkMode_P_CSS darkMode_P_lightMode_CSS";
  darkMode_P_EL.innerHTML = '<i class="far fa-moon"></i> Dark Mode';

  // Add header element's to main container
  container_Div_EL.appendChild(headerContainer_Div_EL);
  headerContainer_Div_EL.appendChild(headerLabel_P_EL);
  headerContainer_Div_EL.appendChild(darkMode_P_EL);

  // Fetch API Date from
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => {
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      return res.json();
    })
    .then((data) => {
      allCounteries = JSON.parse(JSON.stringify(data));      
      mainCountriesContainer_Div_EL = document.createElement("div");
      mainCountriesContainer_Div_EL.id = 'mainCountriesContainer_Div_JS';
      mainCountriesContainer_Div_EL.classList = 'mainCountriesContainer_Div_CSS mainCountriesContainer_Div_lightMode_CSS';
      container_Div_EL.appendChild(mainCountriesContainer_Div_EL);
      makeMainCountriesContainer();
    })
    .catch((err) => {
      console.log(err);
    });
    allEvents();
}

function makeMainCountriesContainer() {  
  // assign element's to globall varaibles
  findCountriesTools_Div_EL = document.createElement("div");
  searchCountriesInput_Div_EL = document.createElement('div');
  searchCountries_Input_EL = document.createElement("input");
  filterByRegoin_P_EL = document.createElement("p");  
  countriesRegoin_Div_EL = document.createElement('div');  
  ListOfAllCountriesContainer_Div_EL = document.createElement("div");

  // Assign Id and Class to element's
  findCountriesTools_Div_EL.id = 'findCountriesTools_Div_JS';
  findCountriesTools_Div_EL.classList = 'findCountriesTools_Div_CSS';
  searchCountriesInput_Div_EL.id = 'searchCountriesInput_Div_JS';
  searchCountriesInput_Div_EL.classList =  `searchCountriesInput_Div_CSS ${(themMode == 'Dark Mode') ? 'searchCountriesInput_Div_darkMode_CSS' : 'searchCountriesInput_Div_lightMode_CSS'}`;
  searchCountries_Input_EL.id = 'searchCountries_Input_JS';
  searchCountries_Input_EL.classList = `searchCountries_Input_CSS ${(themMode == 'Dark Mode') ? 'searchCountries_Input_darkMode_CSS' : 'searchCountries_Input_lightMode_CSS'}`;
  searchCountries_Input_EL.placeholder = `Search for a country . . .`;
  countriesRegoin_Div_EL.id = `countriesRegoin_Div_JS`;
  countriesRegoin_Div_EL.classList = `countriesRegoin_Div_CSS ${(themMode == 'Dark Mode') ? 'countriesRegoin_Div_darkMode_CSS' : 'countriesRegoin_Div_lightMode_CSS'}`;
  filterByRegoin_P_EL.id = 'filterByRegoin_P_JS';
  filterByRegoin_P_EL.classList = `filterByRegoin_P_CSS`;
  filterByRegoin_P_EL.innerHTML = `All Region &nbsp;&nbsp;<i class="allRegoinSymbol_CSS fas fa-sort-down"></i>`; 
  ListOfAllCountriesContainer_Div_EL.id = 'ListOfAllCountriesContainer_Div_JS';
  ListOfAllCountriesContainer_Div_EL.classList = 'ListOfAllCountriesContainer_Div_CSS';

  // Add header element's to main container
  mainCountriesContainer_Div_EL.appendChild(findCountriesTools_Div_EL);
  findCountriesTools_Div_EL.appendChild(searchCountriesInput_Div_EL);
  searchCountriesInput_Div_EL.innerHTML = `<i id='searchIcon_JS' class="searchIcon_CSS fas fa-search"></i>` //${(themMode == 'Dark Mode') ? 'searchIcon_darkMode_CSS' : 'searchIcon_lightMode_CSS'}
  searchCountriesInput_Div_EL.appendChild(searchCountries_Input_EL);  
  findCountriesTools_Div_EL.appendChild(countriesRegoin_Div_EL);
  countriesRegoin_Div_EL.appendChild(filterByRegoin_P_EL);
  mainCountriesContainer_Div_EL.appendChild(ListOfAllCountriesContainer_Div_EL);

  searchCountries_Input_EL.addEventListener('input',()=>{
    if(searchCountries_Input_EL.value == ''){
      ListOfAllCountriesContainer_Div_EL.innerHTML = '';
      currentCuntrytoShow = [];
      allCounteries.forEach((countries, index)=>{
        showCountries(countries, index);  
      })
    }
    else{
      ListOfAllCountriesContainer_Div_EL.innerHTML = '';
      searchCountries(searchCountries_Input_EL.value, currentRegoin);
    }
  })
  currentCuntrytoShow = [];
  allCounteries.forEach((countries, index)=>{
    allRegoin.push(countries.region);        
    showCountries(countries, index);
  }) 
  allRegoin = allRegoin.filter((elem, index, self)=> {
      return index === self.indexOf(elem);
  })  
  countriesRegoin_P_EL = document.createElement('p');
  countriesRegoin_P_EL.id = `countries_allRegoin_P_JS`;      
  countriesRegoin_P_EL.classList = `countriesRegoin_P_CSS ${(themMode == 'Dark Mode') ? 'countriesRegoin_P_darkMode_CSS' : 'countriesRegoin_P_lightMode_CSS'}`;    
  countriesRegoin_P_EL.textContent = `All Region`;  
  countriesRegoin_Div_EL.appendChild(countriesRegoin_P_EL);
  countriesRegoin_P_EL.addEventListener('click', ()=> {   
    filterByRegoin_P_EL.innerHTML = `All Region &nbsp;&nbsp;<i class="allRegoinSymbol_CSS fas fa-sort-down"></i>`; 
    currentRegoin = `All Regoin`;
    document.getElementById(`countries_allRegoin_P_JS`).style.display = 'none';
    allRegoinIndex.forEach(regoinIndex=>{
      document.getElementById(`countries_${regoinIndex}_P_JS`).style.display = 'none';
    })
    ListOfAllCountriesContainer_Div_EL.innerHTML = '';
    searchCountries_Input_EL.value = '';
    currentCuntrytoShow = []
    allCounteries.forEach((countries, i)=>{      
        showCountries(countries, i);        
    })
  })
  allRegoin.forEach((regoin, index)=>{
    if(regoin != ''){
      allRegoinIndex.push(index);
      countriesRegoin_P_EL = document.createElement('p');
      countriesRegoin_P_EL.id = `countries_${index}_P_JS`;      
      countriesRegoin_P_EL.classList = `countriesRegoin_P_CSS ${(themMode == 'Dark Mode') ? 'countriesRegoin_P_darkMode_CSS' : 'countriesRegoin_P_lightMode_CSS'}`;
      countriesRegoin_P_EL.value = regoin;
      countriesRegoin_P_EL.textContent = regoin;
      countriesRegoin_P_EL.addEventListener('click', ()=> {   
        filterByRegoin_P_EL.innerHTML = `${regoin} &nbsp;&nbsp;<i class="allRegoinSymbol_CSS fas fa-sort-down"></i>`;
        currentRegoin = regoin;
        document.getElementById(`countries_allRegoin_P_JS`).style.display = 'none';
        allRegoinIndex.forEach(regoinIndex=>{
          document.getElementById(`countries_${regoinIndex}_P_JS`).style.display = 'none';
        })
        ListOfAllCountriesContainer_Div_EL.innerHTML = '';
        searchCountries_Input_EL.value = '';
        currentCuntrytoShow = []
        allCounteries.forEach((countries, i)=>{
          if(countries.region == regoin){
            showCountries(countries, i);  
          }
        })
      })
      countriesRegoin_Div_EL.appendChild(countriesRegoin_P_EL);      
    }
  })          
  
  filterByRegoin_P_EL.onclick = ()=>{    
    if( document.getElementById(`countries_allRegoin_P_JS`).style.display == 'none' || document.getElementById(`countries_allRegoin_P_JS`).style.display == ''){
      document.getElementById(`countries_allRegoin_P_JS`).style.display = 'block';
      allRegoinIndex.forEach(regoinIndex=>{
        document.getElementById(`countries_${regoinIndex}_P_JS`).style.display = 'block';
      })
    }
    else{
      document.getElementById(`countries_allRegoin_P_JS`).style.display = 'none';
      allRegoinIndex.forEach(regoinIndex=>{
        document.getElementById(`countries_${regoinIndex}_P_JS`).style.display = 'none';
      })
    }
  }

  filterByRegoin_P_EL.addEventListener('change', ()=>{
    ListOfAllCountriesContainer_Div_EL.innerHTML = '';
    searchCountries_Input_EL.value = '';
    if(filterByRegoin_Select_EL.value == `All Regoin`){
      currentCuntrytoShow = []
      allCounteries.forEach((countries, index)=>{        
          showCountries(countries, index);          
      })
    }
    else{
      currentCuntrytoShow = []
      allCounteries.forEach((countries, index)=>{
        if(countries.region == filterByRegoin_Select_EL.value){
          showCountries(countries, index);  
        }
      })
    }
  })
}

function showCountriesFullView() {    
  currentCuntrytoShow = [];    
  countriesBordersId = [];   
  allRegoinIndex = []; 
  setTimeout(()=>{      
    mainCountriesContainer_Div_EL.innerHTML = '';
    countryContainerFullView_Div_EL = document.createElement('div');
    //---------------------------------------------
    countryBackButtonContainerFullView_Div_EL = document.createElement('div');
    countryBackButtonFullView_P_EL = document.createElement('p');
    //---------------------------------------------
    countryWholeDetailContainerFullView_Div_EL = document.createElement('div');
    countryImageFullView_Img_EL = document.createElement('img');
    countryDetailContainerFullView_Div_EL = document.createElement('div');
    //---------------------------------------------
    countryDetailContainerFirstChildFullView_Div_EL = document.createElement('div');
    countryDetailContainerFirstChild_1_FullView_Div_EL = document.createElement('div');
    countryNameFullView_Div_EL = document.createElement('div');
    countryNameFullView_P_EL = document.createElement('p');
    countryNativeNameFullView_P_EL = document.createElement('p');
    countryPopulationFullView_P_EL = document.createElement('p');
    countryRegionFullView_P_EL = document.createElement('p');
    countrySubRegionFullView_P_EL = document.createElement('p');
    countryCapitaFullView_P_EL = document.createElement('p');
    countryDetailContainerFirstChild_2_FullView_Div_EL = document.createElement('div');
    countryTopLevelDomainFullView_P_EL = document.createElement('p');
    countryCurrenciesFullView_P_EL = document.createElement('p');
    countryLanguageFullView_P_EL = document.createElement('p');
    //---------------------------------------------
    countryDetailContainerSecondChildFullView_Div_EL = document.createElement('div');
    countryBorderCountriesFullView_P_EL = document.createElement('p');
    // ----------------------------------------------------------------------------------  
    countryContainerFullView_Div_EL.id = `countryContainerFullView_${currentCountryFullView}_Div_JS`;
    countryContainerFullView_Div_EL.classList = `countryContainerFullView_Div_CSS ${(themMode == 'Dark Mode') ? 'countryContainerFullView_Div_darkMode_CSS' : 'countryContainerFullView_Div_lightMode_CSS'}`;
    // ----------------------------------------------------------------------------------
    countryBackButtonContainerFullView_Div_EL.id = `countryBackButtonContainerFullView_${currentCountryFullView}_Div_JS`;
    countryBackButtonContainerFullView_Div_EL.classList = `countryBackButtonContainerFullView_Div_CSS`;
    countryBackButtonFullView_P_EL.id = `countryBackButtonFullView_${currentCountryFullView}_P_JS`;
    countryBackButtonFullView_P_EL.classList = `countryBackButtonFullView_P_CSS ${(themMode == 'Dark Mode') ? 'countryBackButtonFullView_P_darkMode_CSS' : 'countryBackButtonFullView_P_lightMode_CSS'}`;      
    countryBackButtonFullView_P_EL.innerHTML = `<i class="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;&nbsp;&nbsp;Back`;
    countryBackButtonFullView_P_EL.addEventListener('click', ()=>{  
      setTimeout(()=> {          
        countryContainerFullView_Div_EL.parentNode.removeChild(countryContainerFullView_Div_EL);
        currentRegoin = 'All Regoin';
        currentCuntrytoShow = [];
        makeMainCountriesContainer();
      },200);
    })
    // ----------------------------------------------------------------------------------
    countryWholeDetailContainerFullView_Div_EL.id = `countryWholeDetailContainerFullView_${currentCountryFullView}_Div_JS`;
    countryWholeDetailContainerFullView_Div_EL.classList = `countryWholeDetailContainerFullView_Div_CSS`;
    countryImageFullView_Img_EL.id = `countryImageFullView_${currentCountryFullView}_Img_JS`;
    countryImageFullView_Img_EL.classList = `countryImageFullView_Img_CSS`;
    countryImageFullView_Img_EL.src = allCounteries[currentCountryFullView].flag;
    countryDetailContainerFullView_Div_EL.id = `countryDetailContainerFullView_${currentCountryFullView}_Div_JS`;
    countryDetailContainerFullView_Div_EL.classList = `countryDetailContainerFullView_Div_CSS`;
    // ----------------------------------------------------------------------------------
    countryDetailContainerFirstChildFullView_Div_EL.id = `countryDetailContainerFirstChildFullView_${currentCountryFullView}_Div_JS`;
    countryDetailContainerFirstChildFullView_Div_EL.classList = `countryDetailContainerFirstChildFullView_Div_CSS`;
    countryDetailContainerFirstChild_1_FullView_Div_EL.id = `countryDetailContainerFirstChild_1_FullView_${currentCountryFullView}_Div_JS`;
    countryDetailContainerFirstChild_1_FullView_Div_EL.classList = `countryDetailContainerFirstChild_1_FullView_Div_CSS`;
    countryNameFullView_Div_EL.id = `countryNameFullView_${currentCountryFullView}_Div_JS`;
    countryNameFullView_Div_EL.classList = `countryNameFullView_Div_CSS`;
    countryNameFullView_P_EL.id = `countryNameFullView_${currentCountryFullView}_P_JS`;
    countryNameFullView_P_EL.classList = `countryNameFullView_P_CSS`;
    countryNameFullView_P_EL.textContent = allCounteries[currentCountryFullView].name;
    countryNativeNameFullView_P_EL.id = `countryNativeNameFullView_${currentCountryFullView}_P_JS`;
    countryNativeNameFullView_P_EL.classList = `countryNativeNameFullView_P_CSS`;
    countryNativeNameFullView_P_EL.innerHTML = `<strong>Native Name:</strong> ${allCounteries[currentCountryFullView].nativeName}`;
    countryPopulationFullView_P_EL.id = `countryPopulationFullView_${currentCountryFullView}_P_JS`;
    countryPopulationFullView_P_EL.classList = `countryPopulationFullView_P_CSS`;
    countryPopulationFullView_P_EL.innerHTML = `<strong>Population:</strong> ${allCounteries[currentCountryFullView].population}`;
    countryRegionFullView_P_EL.id = `countryRegionFullView_${currentCountryFullView}_P_JS`;
    countryRegionFullView_P_EL.classList = `countryRegionFullView_P_CSS`;
    countryRegionFullView_P_EL.innerHTML = `<strong>Regoin:</strong> ${allCounteries[currentCountryFullView].region}`;
    countryCapitaFullView_P_EL.id = `countryCapitaFullView_${currentCountryFullView}_P_JS`;
    countryCapitaFullView_P_EL.classList = `countryCapitaFullView_P_CSS`;
    countryCapitaFullView_P_EL.innerHTML = `<strong>Capital:</strong> ${allCounteries[currentCountryFullView].capital}`;
    countryDetailContainerFirstChild_2_FullView_Div_EL.id = `countryDetailContainerFirstChild_2_FullView_${currentCountryFullView}_Div_JS`;
    countryDetailContainerFirstChild_2_FullView_Div_EL.classList = `countryDetailContainerFirstChild_2_FullView_Div_CSS`;
    countryTopLevelDomainFullView_P_EL.id = `countryTopLevelDomainFullView_${currentCountryFullView}_P_JS`;
    countryTopLevelDomainFullView_P_EL.classList = `countryTopLevelDomainFullView_P_CSS`;
    countryTopLevelDomainFullView_P_EL.innerHTML = `<strong>Top Level Domain:</strong> ${allCounteries[currentCountryFullView].topLevelDomain.join()}`;
    countryCurrenciesFullView_P_EL.id = `countryCurrenciesFullView_${currentCountryFullView}_P_JS`;
    countryCurrenciesFullView_P_EL.classList = `countryCurrenciesFullView_P_CSS`;
    countryCurrenciesFullView_P_EL.innerHTML = `<strong>Currencies:</strong> ${allCounteries[currentCountryFullView].currencies[0].name}`;
    countryLanguageFullView_P_EL.id = `countryLanguageFullView_${currentCountryFullView}_P_JS`;
    countryLanguageFullView_P_EL.classList = `countryLanguageFullView_P_CSS`;            
    countryLanguageFullView_P_EL.innerHTML = `<strong>Languages:</strong> ${allCounteries.map(el=> el.languages)[currentCountryFullView].map(el=> el.name).join()}`;
    countryDetailContainerSecondChildFullView_Div_EL.id = `countryDetailContainerSecondChildFullView_${currentCountryFullView}_Div_JS`;
    countryDetailContainerSecondChildFullView_Div_EL.classList = `countryDetailContainerSecondChildFullView_Div_CSS`;
    countryBorderCountriesFullView_P_EL.id = `countryBorderCountriesFullView_${currentCountryFullView}_P_JS`;
    countryBorderCountriesFullView_P_EL.classList = `countryBorderCountriesFullView_P_CSS`;
    countryBorderCountriesFullView_P_EL.innerHTML = `<strong>Border Countries:</strong> `;
    //----------------------------------------------------------------------------------------------
    mainCountriesContainer_Div_EL.appendChild(countryContainerFullView_Div_EL);
    countryContainerFullView_Div_EL.appendChild(countryBackButtonContainerFullView_Div_EL);
    countryBackButtonContainerFullView_Div_EL.appendChild(countryBackButtonFullView_P_EL);
    countryContainerFullView_Div_EL.appendChild(countryWholeDetailContainerFullView_Div_EL);
    countryWholeDetailContainerFullView_Div_EL.appendChild(countryImageFullView_Img_EL);
    countryWholeDetailContainerFullView_Div_EL.appendChild(countryDetailContainerFullView_Div_EL);
    countryDetailContainerFullView_Div_EL.appendChild(countryNameFullView_Div_EL);
    countryDetailContainerFullView_Div_EL.appendChild(countryDetailContainerFirstChildFullView_Div_EL);    
    countryDetailContainerFirstChildFullView_Div_EL.appendChild(countryDetailContainerFirstChild_1_FullView_Div_EL);    
    countryNameFullView_Div_EL.appendChild(countryNameFullView_P_EL);
    countryDetailContainerFirstChild_1_FullView_Div_EL.appendChild(countryNativeNameFullView_P_EL);
    countryDetailContainerFirstChild_1_FullView_Div_EL.appendChild(countryPopulationFullView_P_EL);
    countryDetailContainerFirstChild_1_FullView_Div_EL.appendChild(countryRegionFullView_P_EL);
    countryDetailContainerFirstChild_1_FullView_Div_EL.appendChild(countrySubRegionFullView_P_EL);
    countryDetailContainerFirstChild_1_FullView_Div_EL.appendChild(countryCapitaFullView_P_EL);
    countryDetailContainerFirstChildFullView_Div_EL.appendChild(countryDetailContainerFirstChild_2_FullView_Div_EL);
    countryDetailContainerFirstChild_2_FullView_Div_EL.appendChild(countryTopLevelDomainFullView_P_EL);
    countryDetailContainerFirstChild_2_FullView_Div_EL.appendChild(countryCurrenciesFullView_P_EL);
    countryDetailContainerFirstChild_2_FullView_Div_EL.appendChild(countryLanguageFullView_P_EL);      
    countryDetailContainerFullView_Div_EL.appendChild(countryDetailContainerSecondChildFullView_Div_EL);
    countryDetailContainerSecondChildFullView_Div_EL.appendChild(countryBorderCountriesFullView_P_EL);
    allCounteries.map(country=> country.borders)[currentCountryFullView].forEach((borders, i)=>{        
      countriesBordersId.push(`contry_${currentCountryFullView}_border_${i}_P_JS`)
      countryBorder_P_EL = document.createElement('p');
      countryBorder_P_EL.id = `contry_${currentCountryFullView}_border_${i}_P_JS`;
      countryBorder_P_EL.classList = `titlesBold_CSS ${(themMode == 'Dark Mode') ? 'titlesBold_darkMode_CSS' : 'titlesBold_lightMode_CSS'}`;
      countryBorder_P_EL.textContent = `${allCounteries.filter(country=> country.alpha3Code == borders).map(country=> country.name)}`;
      countryBorderCountriesFullView_P_EL.appendChild(countryBorder_P_EL)
      countryBorder_P_EL.addEventListener('click', ()=>{
        allCounteries.forEach((c, index)=>{          
          c.alpha3Code == borders ? currentCountryFullView = index : {};
        })
        showCountriesFullView()
      });
    });
    if(countriesBordersId.length == 0){
      countryBorderCountriesFullView_P_EL.innerHTML = `<strong>Border Countries:</strong>&nbsp; No Border`;
    }      
  }, 200);  
}

function showCountries(country, index){  
  currentCuntrytoShow.push(index);
  // assign element's to globall varaibles
  countryContainerSmallView_Div_EL = document.createElement('div');
  countryImageSmallView_Img_EL = document.createElement('img');
  countryNameSmallView_P_EL = document.createElement('p');
  countryPopulationSmallView_P_EL = document.createElement('p');
  countryRegionSmallView_P_EL = document.createElement('p');
  countryCapitaSmallView_P_EL = document.createElement('p');
  
  // Assign Id and Class to element's
  countryContainerSmallView_Div_EL.id = `countryContainerSmallView_${index}_Div_JS`;
  countryContainerSmallView_Div_EL.classList = `countryContainerSmallView_Div_CSS ${(themMode == 'Dark Mode') ? 'countryContainerSmallView_Div_darkMode_CSS' : 'countryContainerSmallView_Div_lightMode_CSS'}`;
  countryContainerSmallView_Div_EL.addEventListener('click', ()=>{
    currentCountryFullView = index;
    showCountriesFullView();
  });
  countryImageSmallView_Img_EL.id = `countryImageSmallView_${index}_Img_JS`;
  countryImageSmallView_Img_EL.classList = `countryImageSmallView_Img_CSS`;
  countryNameSmallView_P_EL.id = `countryNameSmallView_${index}_P_JS`;
  countryNameSmallView_P_EL.classList = `countryNameSmallView_P_CSS`;
  countryPopulationSmallView_P_EL.id = `countryPopulationSmallView_${index}_P_JS`;
  countryPopulationSmallView_P_EL.classList = `countryPopulationSmallView_P_CSS`;
  countryRegionSmallView_P_EL.id = `countryRegionSmallView_${index}_P_JS`;
  countryRegionSmallView_P_EL.classList = `countryRegionSmallView_P_CSS`;
  countryCapitaSmallView_P_EL.id = `countryCapitaSmallView_${index}_P_JS`;
  countryCapitaSmallView_P_EL.classList = `countryCapitaSmallView_P_CSS`;

  // Fill out elements with data
  countryImageSmallView_Img_EL.src = `${country.flag}`;
  countryNameSmallView_P_EL.innerHTML = `<strong class='textSmallView_CSS'>${country.name}</strong>`;
  countryPopulationSmallView_P_EL.innerHTML = `<strong class='textSmallView_CSS'>Population:  &nbsp;</strong>${country.population}`;
  countryRegionSmallView_P_EL.innerHTML = `<strong class='textSmallView_CSS'>Region:  &nbsp;</strong>${country.region}`;
  countryCapitaSmallView_P_EL.innerHTML = `<strong class='textSmallView_CSS'>Capital:  &nbsp;</strong>${country.capital}`;

  // Show all countries on page
  ListOfAllCountriesContainer_Div_EL.appendChild(countryContainerSmallView_Div_EL);
  countryContainerSmallView_Div_EL.appendChild(countryImageSmallView_Img_EL);
  countryContainerSmallView_Div_EL.appendChild(countryNameSmallView_P_EL);
  countryContainerSmallView_Div_EL.appendChild(countryPopulationSmallView_P_EL);
  countryContainerSmallView_Div_EL.appendChild(countryRegionSmallView_P_EL);
  countryContainerSmallView_Div_EL.appendChild(countryCapitaSmallView_P_EL);       
}

function searchCountries(country, regoin){
  currentCuntrytoShow = [];
  if(regoin == 'All Regoin'){
    allCounteries.forEach((countries, index)=>{
      if(countries.name.toLowerCase().indexOf(country.toLowerCase()) > -1)
      showCountries(countries, index); 
    })   
  }
  else{
    allCounteries.forEach((countries, index)=>{
      if(countries.name.toLowerCase().indexOf(country.toLowerCase()) > -1 && countries.region == regoin)
      showCountries(countries, index); 
    }) 
  }
}

function allEvents(){  
  darkMode_P_EL.onclick = ()=>{    
    if (themMode == 'Dark Mode'){
      themMode = 'Light Mode';
      body_EL.classList.remove('body_darkMode_CSS');
      headerContainer_Div_EL.classList.remove('headerContainer_Div_darkMode_CSS');
      headerLabel_P_EL.classList.remove('headerLabel_P_darkMode_CSS');
      darkMode_P_EL.classList.remove('darkMode_P_darkMode_CSS');
      searchCountries_Input_EL.classList.remove('searchCountries_Input_darkMode_CSS');
      countriesRegoin_Div_EL.classList.remove('countriesRegoin_Div_darkMode_CSS');
      typeof countryBackButtonFullView_P_EL != 'undefined' && countryBackButtonFullView_P_EL != null ? countryBackButtonFullView_P_EL.classList.remove('countryBackButtonFullView_P_darkMode_CSS') : {};
      typeof countryContainerFullView_Div_EL != 'undefined' && countryContainerFullView_Div_EL != null ? countryContainerFullView_Div_EL.classList.remove('countryContainerFullView_Div_darkMode_CSS') : {};      
      typeof searchCountriesInput_Div_EL != 'undefined' &&  searchCountriesInput_Div_EL != null ? searchCountriesInput_Div_EL.classList.remove('searchCountriesInput_Div_darkMode_CSS') : {};
      countriesBordersId.forEach((border)=>{ 
        let borderContainer = document.getElementById(border);
        typeof borderContainer != 'undefined' && borderContainer != null? borderContainer.classList.remove('titlesBold_darkMode_CSS') : {};
      })
      currentCuntrytoShow.forEach(element=>{
        let elementContainer = document.getElementById(`countryContainerSmallView_${element}_Div_JS`);
        elementContainer.classList.remove('countryContainerSmallView_Div_darkMode_CSS');
      });      
      let countriesRegoin = document.getElementById(`countries_allRegoin_P_JS`);
      countriesRegoin ? countriesRegoin.classList.remove('countriesRegoin_P_darkMode_CSS') : {};
      allRegoinIndex.forEach(element=>{
        countriesRegoin = document.getElementById(`countries_${element}_P_JS`);
        countriesRegoin.classList.remove('countriesRegoin_P_darkMode_CSS');
      });
      darkMode_P_EL.innerHTML = '<i class="far fa-moon"></i> Dark Mode';
      body_EL.classList.add('body_lightMode_CSS');
      headerContainer_Div_EL.classList.add('headerContainer_Div_lightMode_CSS');
      headerLabel_P_EL.classList.add('headerLabel_P_lightMode_CSS');
      darkMode_P_EL.classList.add('darkMode_P_lightMode_CSS');    
      searchCountries_Input_EL.classList.add('searchCountries_Input_lightMode_CSS'); 
      countriesRegoin_Div_EL.classList.add('countriesRegoin_Div_lightMode_CSS');
      typeof countryBackButtonFullView_P_EL != 'undefined' && countryBackButtonFullView_P_EL != null ? countryBackButtonFullView_P_EL.classList.add('countryBackButtonFullView_P_lightMode_CSS') : {};
      typeof countryContainerFullView_Div_EL != 'undefined' && countryContainerFullView_Div_EL != null ? countryContainerFullView_Div_EL.classList.add('countryContainerFullView_Div_lightMode_CSS') : {};      
      typeof searchCountriesInput_Div_EL != 'undefined' &&  searchCountriesInput_Div_EL != null ? searchCountriesInput_Div_EL.classList.add('searchCountriesInput_Div_lightMode_CSS') : {};
      countriesBordersId.forEach((border)=>{
        let borderContainer = document.getElementById(border);
        typeof borderContainer != 'undefined' && borderContainer != null ? borderContainer.classList.add('titlesBold_lightMode_CSS') : {};
      })
      currentCuntrytoShow.forEach(element=>{
        let elementContainer = document.getElementById(`countryContainerSmallView_${element}_Div_JS`);
        elementContainer.classList.add('countryContainerSmallView_Div_lightMode_CSS');
      });
      countriesRegoin = document.getElementById(`countries_allRegoin_P_JS`);
      countriesRegoin ? countriesRegoin.classList.add('countriesRegoin_P_lightMode_CSS') : {};
      allRegoinIndex.forEach(element=>{
        countriesRegoin = document.getElementById(`countries_${element}_P_JS`);
        countriesRegoin.classList.add('countriesRegoin_P_lightMode_CSS');
      });      
    }    
    else {      
      themMode = 'Dark Mode';
      body_EL.classList.remove('body_lightMode_CSS');
      headerContainer_Div_EL.classList.remove('headerContainer_Div_lightMode_CSS');
      headerLabel_P_EL.classList.remove('headerLabel_P_lightMode_CSS');
      darkMode_P_EL.classList.remove('darkMode_P_lightMode_CSS');
      searchCountries_Input_EL.classList.remove('searchCountries_Input_lightMode_CSS');
      countriesRegoin_Div_EL.classList.remove('countriesRegoin_Div_ligtMode_CSS');
      countryContainerSmallView_Div_EL.classList.remove('countryContainerSmallView_Div_lightMode_CSS');
      typeof countryBackButtonFullView_P_EL != 'undefined' && countryBackButtonFullView_P_EL != null ? countryBackButtonFullView_P_EL.classList.remove('countryBackButtonFullView_P_lightMode_CSS') : {};
      typeof countryContainerFullView_Div_EL != 'undefined' && countryContainerFullView_Div_EL != null ? countryContainerFullView_Div_EL.classList.remove('countryContainerFullView_Div_lightMode_CSS') : {};
      typeof searchCountriesInput_Div_EL != 'undefined' &&  searchCountriesInput_Div_EL != null ? searchCountriesInput_Div_EL.classList.remove('searchCountriesInput_Div_lightMode_CSS') : {};
      countriesBordersId.forEach((border)=>{
        let borderContainer = document.getElementById(border);
        typeof borderContainer != 'undefined' && borderContainer != null ? borderContainer.classList.remove('titlesBold_lightMode_CSS') : {};
      })
      currentCuntrytoShow.forEach(element=>{
        let elementContainer = document.getElementById(`countryContainerSmallView_${element}_Div_JS`);
        elementContainer.classList.remove('countryContainerSmallView_Div_lightMode_CSS');
      });
      let countriesRegoin = document.getElementById(`countries_allRegoin_P_JS`);
      countriesRegoin ? countriesRegoin.classList.remove('countriesRegoin_P_lightMode_CSS') : {};
      allRegoinIndex.forEach(element=>{
        countriesRegoin = document.getElementById(`countries_${element}_P_JS`);
        countriesRegoin.classList.remove('countriesRegoin_P_lightMode_CSS');
      });
      darkMode_P_EL.innerHTML = '<i class="far fa-sun"></i> Light Mode';
      body_EL.classList.add('body_darkMode_CSS');
      headerContainer_Div_EL.classList.add('headerContainer_Div_darkMode_CSS');
      headerLabel_P_EL.classList.add('headerLabel_P_darkMode_CSS');
      darkMode_P_EL.classList.add('darkMode_P_darkMode_CSS');     
      searchCountries_Input_EL.classList.add('searchCountries_Input_darkMode_CSS'); 
      typeof countryBackButtonFullView_P_EL != 'undefined' && countryBackButtonFullView_P_EL != null ? countryBackButtonFullView_P_EL.classList.add('countryBackButtonFullView_P_darkMode_CSS') : {};
      typeof countryContainerFullView_Div_EL != 'undefined' && countryContainerFullView_Div_EL != null ? countryContainerFullView_Div_EL.classList.add('countryContainerFullView_Div_darkMode_CSS') : {};      
      typeof searchCountriesInput_Div_EL != 'undefined' &&  searchCountriesInput_Div_EL != null ? searchCountriesInput_Div_EL.classList.add('searchCountriesInput_Div_darkMode_CSS') : {};
      countriesBordersId.forEach((border)=>{
        let borderContainer = document.getElementById(border);
        typeof borderContainer != 'undefined' && borderContainer != null ? borderContainer.classList.add('titlesBold_darkMode_CSS') : {};
      })
      countriesRegoin ? countriesRegoin_Div_EL.classList.add('countriesRegoin_Div_darkMode_CSS') : {};
      currentCuntrytoShow.forEach(element=>{
        let elementContainer = document.getElementById(`countryContainerSmallView_${element}_Div_JS`);
        elementContainer.classList.add('countryContainerSmallView_Div_darkMode_CSS');
      });
      countriesRegoin = document.getElementById(`countries_allRegoin_P_JS`);
      countriesRegoin ? countriesRegoin.classList.add('countriesRegoin_P_darkMode_CSS') : {};
      allRegoinIndex.forEach(element=>{
        countriesRegoin = document.getElementById(`countries_${element}_P_JS`);
        countriesRegoin.classList.add('countriesRegoin_P_darkMode_CSS');
      });
    }
  }  
}

window.onload = makeHeaderContainer;
