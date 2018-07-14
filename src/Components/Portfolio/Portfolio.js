import React,  {Component} from 'react';
import ProjectCard from '../ProjectCard';
import projectsone from './projects1.json';
import projectstwo from './projects2.json';
// import projects from './projects.json';
import './Portfolio.css';


class Portfolio extends Component {
        constructor(props){
        super(props);
        this.state = {
        projectsone: projectsone,
        projectstwo: projectstwo,
        // projects:projects
                }
        };
       
        render() {
                return (   

                <div>
                <div className="projects-container col s12 center-align">
                        <h4 className="col s12 projects-title">Projects</h4>
                <div className="col s12 center-align">
                             
                        <div className="row valign-wrapper">
        
                                <div className="container projectsone col s6 offset-s1 valign">
                                        {/* <div className="row"> */}
                                                {/* <div className="col s12 m12"> */}
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
                                                ))}
                                                </div>
                                        </div>
                                </div>

                                <div className="container projectstwo col s6">
                                        <div className="project-card">
                                                <div className="portfolio">
                                        {       this.state.projectstwo.map(project => (
                                                        <ProjectCard
                                                        name = {project.name}
                                                        desc = {project.desc}
                                                        id = {project.id}
                                                        lang = {project.lang}
                                                        url ={project.url}
                                                        key = {project.id}
                                                        />
                                                ))}
                                                </div>
                                        </div>
                                </div>
                      
                        </div>
                </div>
                </div>
                </div>
                               
                );
        }
};
export default Portfolio;