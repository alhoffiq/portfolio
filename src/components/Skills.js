import css from "../assets/images/skills/css.png";
import html from "../assets/images/skills/html.png";
import js from "../assets/images/skills/js.png";
import node from "../assets/images/skills/node.png";
import jquery from "../assets/images/skills/jquery.png";
import mysql from "../assets/images/skills/mysql.png";
import react from "../assets/images/skills/react.png";
import mongo from "../assets/images/skills/mongo.png";
import npm from "../assets/images/skills/npm.png";
import git from "../assets/images/skills/git.png";
import bootstrap from "../assets/images/skills/bootstrap.png";
import express from "../assets/images/skills/express.png";

const Skills = () => {
    return (
        <div className="container skills rounded">
            <div className="row">
                <div className="col">
                    <h2 className="header text-center">Skills</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-1">
                    <img src={html} className="img-fluid" alt="html"></img>
                </div>
                <div className="col-1">
                    <img src={css} className="img-fluid" alt="css"></img>
                </div>
                <div className="col-1">
                    <img src={js} className="img-fluid" alt="js"></img>
                </div>
                <div className="col-1">
                    <img src={node} className="img-fluid" alt="node"></img>
                </div>
                <div className="col-1">
                    <img src={react} className="img-fluid" alt="react"></img>
                </div>
                <div className="col-1">
                    <img src={jquery} className="img-fluid" alt="jquery"></img>
                </div>
                <div className="col-1">
                    <img src={mysql} className="img-fluid" alt="mysql"></img>
                </div>
                <div className="col-1">
                    <img src={mongo} className="img-fluid" alt="mongo"></img>
                </div>
                <div className="col-1">
                    <img src={express} className="img-fluid" alt="express"></img>
                </div>
                <div className="col-1">
                    <img src={npm} className="img-fluid" alt="npm"></img>
                </div>
                <div className="col-1">
                    <img src={git} className="img-fluid" alt="git"></img>
                </div>
                <div className="col-1">
                    <img src={bootstrap} className="img-fluid" alt="bootstrap"></img>
                </div>
            </div>
        </div>
    );
};

export default Skills;