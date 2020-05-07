// All element in my project
function elements(){
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

function makeHeaderContainer(){
    // Assign Id and Class to body
    body_EL = document.querySelector('body');
    body_EL.id = 'body_JS';
    body_EL.classList = 'body_lightMode_CSS';

    // Main container for whole page
    container_Div_EL = document.createElement('div');
    container_Div_EL.id = 'container_Div_JS';
    container_Div_EL.classList = 'container_Div_lightMode_CSS';
    body_EL.appendChild(container_Div_EL);

    // assign element's to globall varaibles
    headerContainer_Div_EL = document.createElement('div');
    headerLabel_P_EL = document.createElement('p');
    darkMode_P_EL = document.createElement('p');

    // Assign Id and Class to element's    
    headerContainer_Div_EL.id = 'headerContainer_Div_JS';
    headerContainer_Div_EL.classList = 'headerContainer_Div_lightMode_CSS';
    headerLabel_P_EL.id = 'headerLabel_P_JS';
    headerLabel_P_EL.classList = 'headerLabel_P_lightMode_CSS';
    headerLabel_P_EL.textContent = 'Where in the world?';
    darkMode_P_EL.id = 'darkMode_P_JS';
    darkMode_P_EL.classList = 'darkMode_P_CSS';
    darkMode_P_EL.innerHTML = '<i class="far fa-moon"></i> Dark Mode';

    // Add header element's to main container 
    container_Div_EL.appendChild(headerContainer_Div_EL);
    headerContainer_Div_EL.appendChild(headerLabel_P_EL);
    headerContainer_Div_EL.appendChild(darkMode_P_EL);


}

function makeMainCountriesContainer(){

}

window.onload = makeHeaderContainer;