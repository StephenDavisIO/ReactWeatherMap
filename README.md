# React Weather Map - [View Project](https://weathermap.stephendavis.io/)

## About This Project
This small React Application uses Leaflet Maps to display icon markers of every major city in the world. The markers are populated from a JSON file that resides inside the React Application, which provides Leaflet with the following:

- City ID
- City Name
- Country Name
- Latitude
- Longitude

When the user clicks on a marker, the method `GetWeather()` is called. This method displays an initial Bootstrap Modal to the user with the message "Loading Weather". This method then uses the Open Weather Map API to fetch the weather based on the latitude and longitude that is passed into the method when the user first clicked on a map marker. Axios then sets the API response to the Weather Data state. This data is then displayed to the user using Bootstrap Components. If Axios runs into any errors while fetching the data from Open Weather Map, it catches these errors. These errors are then displayed instead of the weather to the user.

This React Application does run a bit slow, just because of the size of the cities JSON file. This small project is mearly to demonistrate how one can use Leaflet Maps in a React Application, without the need of having a server-side application.

It is hosted using [Cloudflare Pages](https://pages.cloudflare.com/).