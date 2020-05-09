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
  searchCountries_Input_EL;
  filterByRegoin_Select_EL;
  countries_Option_EL;
  ListOfAllCountriesContainer_Div_EL;

  // Each countries container
  countryContainerSmallView_Div_EL;
  countryImageSmallView_Img_EL;
  countryNameSmallView_P_EL;
  countryPopulationSmallView_P_EL;
  countryRegionSmallView_P_EL;
  countryCapitaSmallView_P_EL;
}

// All  public variable's
function publicVariables() {
  allCounteries;    
}
let allRegoin = [];
let themMode = 'Dark Mode';
let currentCuntrytoShow = [];
function makeHeaderContainer() {
  // Assign Id and Class to body
  body_EL = document.querySelector("body");
  body_EL.id = "body_JS";
  body_EL.classList = "body_CSS body_darkMode_CSS";

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
  headerContainer_Div_EL.classList = "headerContainer_Div_CSS headerContainer_Div_darkMode_CSS";
  headerLabel_P_EL.id = "headerLabel_P_JS";
  headerLabel_P_EL.classList = "headerLabel_P_CSS headerLabel_P_darkMode_CSS";
  headerLabel_P_EL.textContent = "Where in the world?";
  darkMode_P_EL.id = "darkMode_P_JS";
  darkMode_P_EL.classList = "darkMode_P_CSS darkMode_P_darkMode_CSS";
  darkMode_P_EL.innerHTML = '<i class="far fa-sun"></i> Light Mode';

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
      makeMainCountriesContainer();
    })
    .catch((err) => {
      console.log(err);
    });
}

function makeMainCountriesContainer() {
  // assign element's to globall varaibles
  mainCountriesContainer_Div_EL = document.createElement("div");
  findCountriesTools_Div_EL = document.createElement("div");
  searchCountries_Input_EL = document.createElement("input");
  filterByRegoin_Select_EL = document.createElement("select");  
  ListOfAllCountriesContainer_Div_EL = document.createElement("div");

  // Assign Id and Class to element's
  mainCountriesContainer_Div_EL.id = 'mainCountriesContainer_Div_JS';
  mainCountriesContainer_Div_EL.classList = 'mainCountriesContainer_Div_CSS mainCountriesContainer_Div_darkMode_CSS';
  findCountriesTools_Div_EL.id = 'findCountriesTools_Div_JS';
  findCountriesTools_Div_EL.classList = 'findCountriesTools_Div_CSS';
  searchCountries_Input_EL.id = 'searchCountries_Input_JS';
  searchCountries_Input_EL.classList = 'searchCountries_Input_CSS searchCountries_Input_darkMode_CSS';
  searchCountries_Input_EL.placeholder = 'Search for a country . . .';
  filterByRegoin_Select_EL.id = 'filterByRegoin_Select_JS';
  filterByRegoin_Select_EL.classList = 'filterByRegoin_Select_CSS filterByRegoin_Select_darkMode_CSS';
  ListOfAllCountriesContainer_Div_EL.id = 'ListOfAllCountriesContainer_Div_JS';
  ListOfAllCountriesContainer_Div_EL.classList = 'ListOfAllCountriesContainer_Div_CSS';

  // Add header element's to main container
  container_Div_EL.appendChild(mainCountriesContainer_Div_EL);
  mainCountriesContainer_Div_EL.appendChild(findCountriesTools_Div_EL);
  findCountriesTools_Div_EL.appendChild(searchCountries_Input_EL);
  findCountriesTools_Div_EL.appendChild(filterByRegoin_Select_EL);
  mainCountriesContainer_Div_EL.appendChild(ListOfAllCountriesContainer_Div_EL);

  currentCuntrytoShow = [];
  allCounteries.forEach((countries, index)=>{
    allRegoin.push(countries.region);        
    showCountries(countries, index);
  }) 
  allRegoin = allRegoin.filter((elem, index, self)=> {
      return index === self.indexOf(elem);
  })
  allRegoin.forEach((regoin, index)=>{
    if(regoin != ''){
      countries_Option_EL = document.createElement('option');
      countries_Option_EL.id = `countries_${index}_Option_JS`;
      countries_Option_EL.value = regoin;
      countries_Option_EL.classList = `countries_Option_CSS`;
      countries_Option_EL.textContent = regoin;
      filterByRegoin_Select_EL.appendChild(countries_Option_EL);
    }
  })
  allEvents();
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
  countryNameSmallView_P_EL.innerHTML = `<strong>${country.name}</strong>`;
  countryPopulationSmallView_P_EL.innerHTML = `<strong>Population: </strong>${country.population}`;
  countryRegionSmallView_P_EL.innerHTML = `<strong>Region: </strong>${country.region}`;
  countryCapitaSmallView_P_EL.innerHTML = `<strong>Capital: </strong>${country.capital}`;

  // Show all countries on page
  ListOfAllCountriesContainer_Div_EL.appendChild(countryContainerSmallView_Div_EL);
  countryContainerSmallView_Div_EL.appendChild(countryImageSmallView_Img_EL);
  countryContainerSmallView_Div_EL.appendChild(countryNameSmallView_P_EL);
  countryContainerSmallView_Div_EL.appendChild(countryPopulationSmallView_P_EL);
  countryContainerSmallView_Div_EL.appendChild(countryRegionSmallView_P_EL);
  countryContainerSmallView_Div_EL.appendChild(countryCapitaSmallView_P_EL);      
}

function searchCountries(country){
  currentCuntrytoShow = [];
  allCounteries.forEach((countries, index)=>{
    if(countries.name.toLowerCase().indexOf(country.toLowerCase()) > -1)
    showCountries(countries, index); 
  })   
}

function allEvents(){  
  darkMode_P_EL.addEventListener('click', ()=>{
    if (themMode == 'Dark Mode'){
      themMode = 'Light Mode';
      body_EL.classList.remove('body_darkMode_CSS');
      headerContainer_Div_EL.classList.remove('headerContainer_Div_darkMode_CSS');
      headerLabel_P_EL.classList.remove('headerLabel_P_darkMode_CSS');
      darkMode_P_EL.classList.remove('darkMode_P_darkMode_CSS');
      searchCountries_Input_EL.classList.remove('searchCountries_Input_darkMode_CSS');
      mainCountriesContainer_Div_EL.classList.remove('mainCountriesContainer_Div_darkMode_CSS');
      filterByRegoin_Select_EL.classList.remove('filterByRegoin_Select_darkMode_CSS');
      currentCuntrytoShow.forEach(element=>{
        let elementContainer = document.getElementById(`countryContainerSmallView_${element}_Div_JS`);
        elementContainer.classList.remove('countryContainerSmallView_Div_darkMode_CSS');
      });
      darkMode_P_EL.innerHTML = '<i class="far fa-moon"></i> Dark Mode';
      body_EL.classList.add('body_lightMode_CSS');
      headerContainer_Div_EL.classList.add('headerContainer_Div_lightMode_CSS');
      headerLabel_P_EL.classList.add('headerLabel_P_lightMode_CSS');
      darkMode_P_EL.classList.add('darkMode_P_lightMode_CSS');    
      searchCountries_Input_EL.classList.add('searchCountries_Input_lightMode_CSS'); 
      mainCountriesContainer_Div_EL.classList.add('mainCountriesContainer_Div_lightMode_CSS');
      filterByRegoin_Select_EL.classList.add('filterByRegoin_Select_lightMode_CSS'); 
      currentCuntrytoShow.forEach(element=>{
        let elementContainer = document.getElementById(`countryContainerSmallView_${element}_Div_JS`);
        elementContainer.classList.add('countryContainerSmallView_Div_lightMode_CSS');
      });
    }    
    else{
      themMode = 'Dark Mode';
      body_EL.classList.remove('body_lightMode_CSS');
      headerContainer_Div_EL.classList.remove('headerContainer_Div_lightMode_CSS');
      headerLabel_P_EL.classList.remove('headerLabel_P_lightMode_CSS');
      darkMode_P_EL.classList.remove('darkMode_P_lightMode_CSS');
      searchCountries_Input_EL.classList.remove('searchCountries_Input_lightMode_CSS');
      mainCountriesContainer_Div_EL.classList.remove('mainCountriesContainer_Div_lightMode_CSS');
      filterByRegoin_Select_EL.classList.remove('filterByRegoin_Select_lightMode_CSS');
      countryContainerSmallView_Div_EL.classList.remove('countryContainerSmallView_Div_lightMode_CSS');
      currentCuntrytoShow.forEach(element=>{
        let elementContainer = document.getElementById(`countryContainerSmallView_${element}_Div_JS`);
        elementContainer.classList.remove('countryContainerSmallView_Div_lightMode_CSS');
      });
      darkMode_P_EL.innerHTML = '<i class="far fa-sun"></i> Light Mode';
      body_EL.classList.add('body_darkMode_CSS');
      headerContainer_Div_EL.classList.add('headerContainer_Div_darkMode_CSS');
      headerLabel_P_EL.classList.add('headerLabel_P_darkMode_CSS');
      darkMode_P_EL.classList.add('darkMode_P_darkMode_CSS');     
      searchCountries_Input_EL.classList.add('searchCountries_Input_darkMode_CSS'); 
      mainCountriesContainer_Div_EL.classList.add('mainCountriesContainer_Div_darkMode_CSS');
      filterByRegoin_Select_EL.classList.add('filterByRegoin_Select_darkMode_CSS');
      currentCuntrytoShow.forEach(element=>{
        let elementContainer = document.getElementById(`countryContainerSmallView_${element}_Div_JS`);
        elementContainer.classList.add('countryContainerSmallView_Div_darkMode_CSS');
      });
    }

  })
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
      searchCountries(searchCountries_Input_EL.value);
    }
  })

  filterByRegoin_Select_EL.addEventListener('change', ()=>{
    ListOfAllCountriesContainer_Div_EL.innerHTML = '';
    searchCountries_Input_EL.value = '';
    currentCuntrytoShow = []
    allCounteries.forEach((countries, index)=>{
      if(countries.region == filterByRegoin_Select_EL.value){
        showCountries(countries, index);  
      }
    })
  })

}

window.onload = makeHeaderContainer;


// function episodeSearch(allEpisodes, elementParameterToSearch){  
//   mainDiv_El.innerHTML = ''; 
//   let searchResualt = 0;
//   allEpisodes.forEach((episode, index)=> {  
//     let episodeResualt = 0;
//     let episodeContainer = JSON.parse(JSON.stringify(episode))      
//     episodeContainer.name = `${episode.name} - ${titleCodeGenerator(episode)}`;    
  
//     if (episodeContainer.name.toLowerCase().indexOf(elementParameterToSearch.value) > -1){
//       episodeContainer.name = episodeContainer.name.replace(new RegExp(elementParameterToSearch.value, "gi"), (match) => `<strong class="highlight_CSS">${match}</strong>`);
//       episodeResualt++;
//     }
//     if(episode.summary != null){
//       if (episode.summary != ''){
//         episodeContainer.summary = `${pureSummary(episode)}`;
//         if (episodeContainer.summary.toLowerCase().indexOf(elementParameterToSearch.value) > -1){
//           episodeContainer.summary = episodeContainer.summary.replace(new RegExp(elementParameterToSearch.value, "gi"), (match) => `<strong class="highlight_CSS">${match}</strong>`);      
//           episodeResualt++;
//         }    
//       }       
//     }        
//     if(episodeResualt > 0) {
//       searchResualt++;
//       makePageForEpisodes(episodeContainer, index, 'search');
//     }
//   })
//   if (searchResualt == 0) {    
//     nothingToShow_El.id = 'nothingToShow_JS';
//     nothingToShow_El.textContent = 'Sorry Nothing to show ! ! !';
//     mainDiv_El.appendChild(nothingToShow_El);     
//     searchResualt_El.textContent = `0 | ${allEpisodes.length}`;
//   }
//   else{
//     searchResualt_El.textContent = `${searchResualt} | ${allEpisodes.length}`;
//   }
// }