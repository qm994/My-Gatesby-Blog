import React from "react"
import { Link } from "gatsby"
import { Projects, ProjectsSection } from '../styled-elements/header';
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/projects.scss";
import ProjectSection1 from '../components/project-section1';
import ProjectSection2 from '../components/project-section2';
import ProjectSection3 from '../components/project-section3';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <ProjectsSection>
      <ProjectSection1 />
      <ProjectSection2 />
      <ProjectSection3 />
    </ProjectsSection>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
