const global = {
   currentPage: window.location.pathname
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  // const API_KEY = global.api.apiKey;
  // const API_URL = global.api.apiUrl;

  const API_KEY = global.api.apiKey;
  const API_URL = global.api.apiUrl;
 
  // showSpinner();
 
  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );
 
  const data = await response.json();
 
  // hideSpinner();
 
  return data;
}

// Highlight active link
function highlightActiveLink() {
   const links = document.querySelectorAll('.nav-link');
   links.forEach((link) => {
     if (link.getAttribute('href') === global.currentPage) {
       link.classList.add('active');
     }
   });
}


// Init App
function init() {
   switch (global.currentPage) {
     case '/':
     case '/index.html':
      console.log('Home');
      //  displaySlider();
      //  displayPopularMovies();
       break;
     case '/shows.html':
      console.log('Shows');
      //  displayPopularShows();
       break;
     case '/movie-details.html':
      console.log('Movies');
      //  displayMovieDetails();
       break;
     case '/tv-details.html':
      console.log('TV');
      //  displayShowDetails();
       break;
     case '/search.html':
      console.log('Search');
      //  search();
       break;
   }
 
   highlightActiveLink();
}
 
document.addEventListener('DOMContentLoaded', init);
 