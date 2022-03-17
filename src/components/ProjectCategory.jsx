import React from 'react';
import "../css/ProjectCategory.css"
const ProjectCategory = ({ categories, filterItems }) => {
  return (
    <div className="btn_container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default ProjectCategory;
