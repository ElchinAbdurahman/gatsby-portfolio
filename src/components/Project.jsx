import React from "react";
const Project = ({ url, projectImg, projectName}) => {
  return (
    <a href={url} style={{ textDecoration: "none" }}>
      <div className="card">
        <img
          className="card-img"
          src={projectImg}
          alt="noo"
        />
       
        <div className="card-body">
          <h4>{projectName}</h4>
        </div>
      </div>
    </a>
  );
};

export default Project;


