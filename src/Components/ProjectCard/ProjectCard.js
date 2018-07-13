import React from 'react';
import './ProjectCard.css';

const ProjectCard = props => (
  <div className={props.name} id={props.id}>
    <div className="card">
      <div className="card-content cyan-darken-3">
        <span className="card-title activator grey-text center-align text-darken-4">{props.name}</span>
        
        </div>
        <div className="card-reveal">
          <p className="flow-text">{props.desc}</p>
          <p>Optimized with:</p>
          <p>{props.lang}</p>
          <p><a href={props.url}>Link</a></p>
          </div>
          </div>
          </div>
);

export default ProjectCard;


// <div className={props.name}>
//   <div className="no-pad-bot" id={props.id}>
//     <div className="col s12 ">
//       <div className="card project-card  hoverable blue-grey darken-1">
//         <div className="card-content white-text">
//           <span className="card-title center-align">{props.name} </span>
//           <p>{props.desc}</p>
//           <small>Optimized With</small>
//           <p>{props.lang}</p>
//         </div>
//         <div className="card-action center-align">
//           <a href={props.url}>Link</a>
//         </div>
//       </div>
//     </div>
//   </div>
//   </div>