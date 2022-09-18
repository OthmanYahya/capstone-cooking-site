This project was built using React JS with "create-react-app".

The Libraries/dependencies used are Material UI, Splide, Axios, and React-Router-Dom.

You can check it out [here](https://othman-wecode-capstone.netlify.app/)

This is a cooking recipes website, it has recipes from across the world because it's using [Spoonacular](https://spoonacular.com/food-api) API that has a plethora of recipes that you can search and pick from.

bugs:-
<br />
[Netlify](https://app.netlify.com) hosting service is breaking the fetching process for some components on the website, but the site works completely fine with no errors if you try to build it locally on your computer.

Limitations:-
<br />
[Spoonacular ](https://spoonacular.com/food-api) API service provides free users(like myself) with only 150 points for requesting and fetching data from its servers and getting more points per day requires subscribing to their paid service, so if you use the site to the point that it spends150 points in one day, it will stop the data fetching data from the servers for the next 24h.

Notes:-
<br />
-Because of the limitation mentioned above, I had to store some of the fetched data locally on the user's computer, but it's not for all the components, only the popular and veggie picks on the front page of the website. 
The reason that led me to not store every fetching process locally on the host's computer is the fact that it's not how a realistic website would work, but as long as you use the site while considering the number of recipes you can check, you'll be fine to roam the website freely.
<br />
-This site is responsive and fits all sizes of screens, mobile, iPad, PC screens, and so on...

