import React, {Component} from 'react';


const ProjectCard = props => (
  <div className={props.name}>
  <div className="row " id={props.id}>
    <div className="col s3">
      <div className="card small blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{props.name} </span>
          <p>{props.desc}</p>
          <small>Optimized With</small>
          <p>{props.lang}</p>
        </div>
        <div className="card-action">
          <a href={props.url}>Link</a>
        </div>
      </div>
    </div>
  </div>
  </div>
);

export default ProjectCard;