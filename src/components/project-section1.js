import React from "react";
const ProjectSection1 = () => (
    <div className="card">
        <div class="card__side card__side--front">
          <div class="card__picture card__picture--1">
            &nbsp;
          </div>
          <h4 class="card__heading">
            <span className="card__heading-span card__heading-span--1">
              The ecommerce Project
            </span>
          </h4>
          <div class="card__details">
            <span>Tech Stacks</span>
            <ul>
              <li>React.js</li>
              <li>Redux</li>
              <li>React Hooks</li>
              <li>Styled Components</li>
              <li>Firebase</li>
              <li>Stripe API</li>
              <li>node.js</li>
              <li>GraphQl</li>
            </ul>
          </div>
        </div>
        <div class="card__side card__side--back card__side--back-1">
          <a target='_blank' href="https://ecommerce-9d3b6.web.app/" class='btn btn--white'> Go to web </a>
        </div>
      </div>
)

export default ProjectSection1;