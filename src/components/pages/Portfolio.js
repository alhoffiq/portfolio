import OdysseyImg from "../../assets/images/Odyssey.png"
import MusikinSiteImg from "../../assets/images/MusikinSite pic.jpg"
import WeatherDashboardImg from "../../assets/images/Weather Dashboard pic.jpg"
import SchedulerImg from "../../assets/images/Scheduler Pic.jpg"

function Portfolio() {
    return (
        <div>
            <section className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 id="header">Portfolio</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <h2 className="text-center project-title">Odyssey</h2>
                        <img className="img-fluid" src={OdysseyImg} alt="Odyssey pic"></img>
                        <p className="text-center"> - Odyssey is a scrapbooking travel app that allows the user to create
                        country-specific travelogues filled with pictures and notes. The app utilizes the MVC design
                        pattern, and is built with Node.js, Handlebars.js, and Sequelize. It is deployed to Heroku with a
                    jawsDB database.</p>
                        <h5 className="text-center">You can visit the site <a href="https://team-zeus.herokuapp.com/"
                            target="_blank" rel="noreferrer">Here!</a></h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <h2 className="text-center project-title">MusikinSite</h2>
                        <img className="img-fluid" src={MusikinSiteImg} alt="MusikinSite pic"></img>
                        <p className="text-center"> - A functional music search engine that will take in user's song input via the
                        artist and song search
                        boxes. It will return with either "no data found", if the search found nothing by the input fields,
                        or with information about the searched song. This data will include the album, album cover, lyrics,
                        and a short summary about the history of the song. Site is powered by LastFM and ApiSeeds lyrics
                    api.</p>
                        <h5 className="text-center">You can visit the site <a href="https://sltang0815.github.io/MusikinSite/"
                            target="_blank" rel="noreferrer">Here!</a></h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <h2 className="text-center project-title">Weather Dashboard</h2>
                        <img className="img-fluid" src={WeatherDashboardImg} alt="Weather Dashboard pic"></img>
                        <p className="text-center"> - An application that lets you see weather for any given city. The site will
                        keep track of your last 4 searched cities at all times and put them on buttons for easy searching of
                        nearby cities saving you time from having to type them in every single time. Site is powered by
                    OpenWeather's weather api.</p>
                        <h5 className="text-center">You can visit the site <a href="https://alhoffiq.github.io/weatherDashboard/"
                            target="_blank" rel="noreferrer">Here!</a></h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <h2 className="text-center project-title">Hourly Schedule App</h2>
                        <img className="img-fluid" src={SchedulerImg} alt="Weather Dashboard pic"></img>
                        <p className="text-center"> - A simple application to keep track of tasks needed to be complete throughout
                        the day. Tasks typed into a given time slot will remain for as long as until it is overwritten by
                        the next one. Time slots are colored based on the current time, letting you know at a glance how
                    much time is left for future tasks and which task is running out of time to complete</p>
                        <h5 className="text-center">You can visit the site <a href="https://alhoffiq.github.io/calendarApp/"
                            target="_blank" rel="noreferrer">Here!</a></h5>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Portfolio;
