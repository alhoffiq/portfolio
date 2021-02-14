import MusikinSiteImg from "./images/MusikinSite pic.jpg";
import WeatherDashboardImg from "./images/Weather Dashboard pic.jpg";
import SchedulerImg from "./images/Scheduler Pic.jpg";
import OdysseyImg from "./images/Odyssey.png";
import LolStackImg from "./images/LolStackImg.png"

const projects = [
    {
        name: "LolStack",
        description: "- LolStack is a user friendly tool to allow summoners to quickly check how their favorite champions stack up against their competitors. After signing up with an email, password, and summoner name, users will be able to navigate to the summoner page which will display a list of their most played champions and useful information about them. Created with a React front end, express server, and MongoAtlas database.",
        img: LolStackImg,
        link: "https://lolstack.herokuapp.com/",
        github: "https://github.com/alhoffiq/LolStack",
    },
    {
        name: "Odyssey",
        description: "- Odyssey is a scrapbooking travel app that allows the user to create country-specific travelogues filled with pictures and notes. The app utilizes the MVC design pattern, and is built with Node.js, Handlebars.js, and Sequelize. It is deployed to Heroku with a jawsDB database.",
        img: OdysseyImg,
        link: "https://team-zeus.herokuapp.com/",
        github: "https://github.com/joeybrown-ctrl/Odyssey",
    },
    {
        name: "MusikinSite",
        description: "- A functional music search engine that will take in user's song input via the artist and song search boxes. It will return with either 'no data found', if the search found nothing by the input fields, or with information about the searched song. This data will include the album, album cover, lyrics, and a short summary about the history of the song. Site is powered by LastFM and ApiSeeds lyrics api.",
        img: MusikinSiteImg,
        link: "https://sltang0815.github.io/MusikinSite/",
        github: "https://github.com/Sltang0815/MusikinSite",
    },
    {
        name: "Weather Dashboard",
        description: "- An application that lets you see weather for any given city. The site will keep track of your last 4 searched cities at all times and put them on buttons for easy searching of nearby cities saving you time from having to type them in every single time. Site is powered by OpenWeather's weather api.",
        img: WeatherDashboardImg,
        link: "https://alhoffiq.github.io/weatherDashboard/",
        github: "https://github.com/alhoffiq/weatherDashboard",
    },
    {
        name: "Scheduler App",
        description: "- A simple application to keep track of tasks needed to be complete throughout the day. Tasks typed into a given time slot will remain for as long as until it is overwritten by the next one. Time slots are colored based on the current time, letting you know at a glance how much time is left for future tasks and which task is running out of time to complete",
        img: SchedulerImg,
        link: "https://alhoffiq.github.io/calendarApp/",
        github: "https://github.com/alhoffiq/calendarApp",
    },    
]

export default projects;