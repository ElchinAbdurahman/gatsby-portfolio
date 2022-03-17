import React, { useState } from "react";
import Title from "./Title";
import Project from "./Project";
import ProjectCategory from "./ProjectCategory";
import data from "../constants/projects";
const allCategories = [
  "all",
  ...new Set(data.map((item) => item.projectCategory)),
];

// import { Link } from "gatsby"
const Projects = ({ title }) => {
  const [projectItems, setProjectItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setProjectItems(data);
      return;
    }

    const newItems = data.filter((item) => item.projectCategory === category)
    setProjectItems(newItems);
  };
  return (
    <section className="section projects">
      <Title title={title} />
      <ProjectCategory categories={categories} filterItems={filterItems} />
      <div className=" projects-center">
        {projectItems.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
