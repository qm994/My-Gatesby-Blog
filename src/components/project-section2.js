import React from "react";
const ProjectSection2 = () => (
    <div className="card">
        <div class="card__side card__side--front">
          <div class="card__picture card__picture--1">
            &nbsp;
          </div>
          <h4 class="card__heading">
            <span className="card__heading-span card__heading-span--1">
              The RealEstate Project
            </span>
          </h4>
          <div class="card__details">
            <span>Tech Stacks</span>
            <ul>
              <li>Django</li>
              <li>Postgres</li>
              <li>UnitTest</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>GCP</li>
            </ul>
          </div>
        </div>
        <div class="card__side card__side--back card__side--back-1">
          <a target='_blank' href="http://www.qmrealestate.co/" class='btn btn--white'> Go to web </a>
        </div>
      </div>
)

export default ProjectSection2;