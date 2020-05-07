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

function makeHeaderContainer() {
  // Assign Id and Class to body
  body_EL = document.querySelector("body");
  body_EL.id = "body_JS";
  body_EL.classList = "body_lightMode_CSS";

  // Main container for whole page
  container_Div_EL = document.createElement("div");
  container_Div_EL.id = "container_Div_JS";
  container_Div_EL.classList = "container_Div_lightMode_CSS";
  body_EL.appendChild(container_Div_EL);

  // assign element's to globall varaibles
  headerContainer_Div_EL = document.createElement("div");
  headerLabel_P_EL = document.createElement("p");
  darkMode_P_EL = document.createElement("p");

  // Assign Id and Class to element's
  headerContainer_Div_EL.id = "headerContainer_Div_JS";
  headerContainer_Div_EL.classList = "headerContainer_Div_lightMode_CSS";
  headerLabel_P_EL.id = "headerLabel_P_JS";
  headerLabel_P_EL.classList = "headerLabel_P_lightMode_CSS";
  headerLabel_P_EL.textContent = "Where in the world?";
  darkMode_P_EL.id = "darkMode_P_JS";
  darkMode_P_EL.classList = "darkMode_P_CSS";
  darkMode_P_EL.innerHTML = '<i class="far fa-moon"></i> Dark Mode';

  // Add header element's to main container
  container_Div_EL.appendChild(headerContainer_Div_EL);
  headerContainer_Div_EL.appendChild(headerLabel_P_EL);
  headerContainer_Div_EL.appendChild(darkMode_P_EL);

  // Fetch API Date from
  fetch("http://restcountries.eu/rest/v2/all")
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
      console.error(err);
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
  mainCountriesContainer_Div_EL.classList = 'mainCountriesContainer_Div_CSS';
  findCountriesTools_Div_EL.id = 'findCountriesTools_Div_JS';
  findCountriesTools_Div_EL.classList = 'findCountriesTools_Div_CSS';
  searchCountries_Input_EL.id = 'searchCountries_Input_JS';
  searchCountries_Input_EL.classList = 'searchCountries_Input_CSS';
  searchCountries_Input_EL.placeholder = 'Search for a country . . .';
  filterByRegoin_Select_EL.id = 'filterByRegoin_Select_JS';
  filterByRegoin_Select_EL.classList = 'filterByRegoin_Select_CSS';
  ListOfAllCountriesContainer_Div_EL.id = 'ListOfAllCountriesContainer_Div_JS';
  ListOfAllCountriesContainer_Div_EL.classList = 'ListOfAllCountriesContainer_Div_CSS';

  // Add header element's to main container
  container_Div_EL.appendChild(mainCountriesContainer_Div_EL);
  mainCountriesContainer_Div_EL.appendChild(findCountriesTools_Div_EL);
  findCountriesTools_Div_EL.appendChild(searchCountries_Input_EL);
  findCountriesTools_Div_EL.appendChild(filterByRegoin_Select_EL);
  mainCountriesContainer_Div_EL.appendChild(ListOfAllCountriesContainer_Div_EL);

  // Show all Countries in page
  allCounteries.forEach((countries, index)=>{
    // assign element's to globall varaibles
    countryContainerSmallView_Div_EL = document.createElement('div');
    countryImageSmallView_Img_EL = document.createElement('img');
    countryNameSmallView_P_EL = document.createElement('p');
    countryPopulationSmallView_P_EL = document.createElement('p');
    countryRegionSmallView_P_EL = document.createElement('p');
    countryCapitaSmallView_P_EL = document.createElement('p');
    
    // Assign Id and Class to element's
    countryContainerSmallView_Div_EL.id = `countryContainerSmallView_${index}_Div_JS`;
    countryContainerSmallView_Div_EL.classList = `countryContainerSmallView_Div_CSS`;
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
    countryImageSmallView_Img_EL.src = `${countries.flag}`;
    countryNameSmallView_P_EL.innerHTML = `<strong>${countries.name}</strong>`;
    countryPopulationSmallView_P_EL.innerHTML = `<strong>Population: </strong>${countries.population}`;
    countryRegionSmallView_P_EL.innerHTML = `<strong>Region: </strong>${countries.region}`;
    countryCapitaSmallView_P_EL.innerHTML = `<strong>Capital: </strong>${countries.capital}`;

    // Show all countries on page
    ListOfAllCountriesContainer_Div_EL.appendChild(countryContainerSmallView_Div_EL);
    countryContainerSmallView_Div_EL.appendChild(countryImageSmallView_Img_EL);
    countryContainerSmallView_Div_EL.appendChild(countryNameSmallView_P_EL);
    countryContainerSmallView_Div_EL.appendChild(countryPopulationSmallView_P_EL);
    countryContainerSmallView_Div_EL.appendChild(countryRegionSmallView_P_EL);
    countryContainerSmallView_Div_EL.appendChild(countryCapitaSmallView_P_EL);

  })
}

window.onload = makeHeaderContainer;
