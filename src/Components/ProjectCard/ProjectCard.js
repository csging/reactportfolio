import React from 'react';
import './ProjectCard.css';

const ProjectCard = props => (
  <div className={props.name}>
  <div className="no-pad-bot" id={props.id}>
    <div className="col s12 m6">
      <div className="card project-card     horizontal hoverable blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title center-align">{props.name} </span>
          <p>{props.desc}</p>
          <small>Optimized With</small>
          <p>{props.lang}</p>
        </div>
        <div className="card-action center-align">
          <a href={props.url}>Link</a>
        </div>
      </div>
    </div>
  </div>
  <div className="divider"></div>
  </div>
);

export default ProjectCard;