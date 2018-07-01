import React,  {Component} from 'react';
import ProjectCard from '../ProjectCard';
import projectsone from './projects1.json';
import projectstwo from './projects2.json';


class Portfolio extends Component {
        constructor(props){
        super(props);
        this.state = {
        projects: projects,
        }
        }
       
        render() {
                return (   
                        <div>     
        <div className="container">
                <div className="section">
                        {/* <div className="row"> */}
                                <div className="col s12 m6">
                                        <div className="project-card">
                <div className="portfolio">
                        {this.state.projectsone.map(project => (
                                <ProjectCard
                                name = {project.name}
                                desc = {project.desc}
                                id = {project.id}
                                lang = {project.lang}
                                url ={project.url}
                                key = {project.id}
                                />
                        )) 
                        }
                        </div></div></div></div>
                {/* </div> */}
        </div>   
        
        <div className="container">
                <div className="section">
                        {/* <div className="row"> */}
                                <div className="col s12 m6">
                                        <div className="project-card">
                <div className="portfolio">
                        {this.state.projectstwo.map(project => (
                                <ProjectCard
                                name = {project.name}
                                desc = {project.desc}
                                id = {project.id}
                                lang = {project.lang}
                                url ={project.url}
                                key = {project.id}
                                />
                        )) 
                        }
                        </div></div></div></div>
                {/* </div> */}
        </div>   
        </div>
);
                }};

export default Portfolio;