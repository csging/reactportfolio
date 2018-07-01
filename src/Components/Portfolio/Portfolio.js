import React,  {Component} from 'react';
import ProjectCard from '../ProjectCard';
import projects from './projects.json';
import Wrapper from '../Wrapper/Wrapper';
import Container from '../Container/Container';
import Col from '../Col/Col';
import Row from '../Row/Row';

class Portfolio extends Component {
        constructor(props){
        super(props);
        this.state = {
        projects: projects,
        }
        }
       
        render() {
                return (        
        <div className="container">
                <span>Portfolio</span>
                        
                <div className="portfolio">
                        {this.state.projects.map(project => (
                             <div className="col s3">
                                <ProjectCard
                                name = {project.name}
                                desc = {project.desc}
                                id = {project.id}
                                lang = {project.lang}
                                url ={project.url}
                                key = {project.id}
                                />
                                </div>
                                
                        ))}
                </div>
                
        </div>     
);
                }};

export default Portfolio;