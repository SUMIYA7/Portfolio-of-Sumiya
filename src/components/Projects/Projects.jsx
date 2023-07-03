import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Makeup School",
      description:
        "This is the website of the Makeup School. The website is designed to provide information about our school, courses, and services in the field of makeup artistry and cosmetology.",
      features: [
        "Course Listings",
        "Instructor Profile",
        "Enrollment",
        "payment system",
        "Course teacher details",
        "Added to cart",
      ],
      liveLink: "https://makeupschool-b60fd.web.app",
      snapshots: [
        "https://i.ibb.co/r281sYt/abc.jpg",
        "https://i.ibb.co/D15CRhP/abc1.jpg",
"https://i.ibb.co/55MxXSh/abc2.jpg",
"https://i.ibb.co/wYvsB2j/abc3.jpg",
"https://i.ibb.co/LpQWT2f/abc4.jpg",
"https://i.ibb.co/DtgnVJb/abc5.jpg",
"https://i.ibb.co/27ShNbb/abc6.jpg",
"https://i.ibb.co/XFztJDc/abc7.jpg",
"https://i.ibb.co/nR5XqC9/abc8.jpg",
      ],
    },
    {
      id: 2,
      title: "Disney Dolls Store",
      description:
        "Disney Dolls is a web application that allows users to search for all kinds of toys of Disney and can buy toys anytime from anywhere over the world.",
      features: [
        "Login pages & create account",
        "Add toys page",
        "My toys pages",
        "All toys section",
      ],
      liveLink: "https://disneydolls-c1aec.web.app/",
      snapshots: [
        "https://i.ibb.co/KDMcNCT/disney1.jpg",
"https://i.ibb.co/DknHgtd/disney2.jpg",
"https://i.ibb.co/bBDNBgC/disney3.jpg",
"https://i.ibb.co/wsKV5G1/disney4.jpg",
"https://i.ibb.co/BgB6TMP/disney5.jpg",
"https://i.ibb.co/T2FWZLT/disney6.jpg",
      ],
    },
    {
      id: 3,
      title: "Cooking Studio",
      description:
        "Cooking Studio is a web application that allows users to search for recipes of indian delicious cuisine, save their favorite recipes, and share their own recipes with the community.",
      features: [
        "Search recipe",
        "Added to favorite",
        "Chef details",
        "recipe details",
      ],
      liveLink: "https://cookingstudio-87776.web.app/",
      snapshots: [
        "https://i.ibb.co/CwnDBwW/cooking1.jpg",
"https://i.ibb.co/H44N6SL/cooking2.jpg",
"https://i.ibb.co/GQ2BTKb/cooking3.jpg",
"https://i.ibb.co/3F02tmz/cooking4.jpg",
"https://i.ibb.co/xszQfP1/cooking5.jpg",
"https://i.ibb.co/HzqDt9C/cooking6.jpg",
"https://i.ibb.co/C6SyJXw/cooking7.jpg",
"https://i.ibb.co/KwkzqYr/cooking8.jpg",
      ],
    },
    // Add more projects here if needed
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <h2 className="section__title waviy" id="projects">
        <span>P</span>
        <span>r</span>
        <span>o</span>
        <span>j</span>
        <span>e</span>
        <span>c</span>
        <span>t</span>
        <span>s</span>
      </h2>
      <span className="section__subtitle flipX">Explore my works</span>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <button onClick={() => openModal(project)}>View Details</button>
          </div>
        ))}

        {selectedProject && (
          <div className="modal">
            <div className="modal-content">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <ul>
                {" "}
                Features:
                {selectedProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </a>
              <div className="snapshot-gallery">
                {selectedProject.snapshots.map((snapshot, index) => (
                  <img
                    key={index}
                    src={snapshot}
                    alt={`Snapshot ${index + 1}`}
                  />
                ))}
              </div>
              <button onClick={closeModal}>
                <i class="bx bx-x"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
