import React from "react";
const ProjectSection3 = () => (
    <div className="card">
        <div class="card__side card__side--front">
          <div class="card__picture card__picture--1">
            &nbsp;
          </div>
          <h4 class="card__heading">
            <span className="card__heading-span card__heading-span--1">
              The React and Node.js Full Stack Project
            </span>
          </h4>
          <div class="card__details">
            <span>Tech Stacks</span>
            <ul>
              <li>Node.js</li>
              <li>React.js</li>
              <li>Redux & Thunk</li>
            </ul>
          </div>
        </div>
        <div class="card__side card__side--back card__side--back-1">
          <a target='_blank' href="https://arcane-ridge-94605.herokuapp.com" class='btn btn--white'> Go to web </a>
        </div>
      </div>
)

export default ProjectSection3;