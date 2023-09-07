import { Fragment } from "react";
import PortfolioItem from "../PortfolioItem";

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      subtitle: "Subtitle 1",
      img: "project1.jpg",
      description: "Project 1 description",
      icons: [
        { name: 'python' },
        { name: 'javascript' },
        { name: 'typescript' },
        { name: 'flask' },
        { name: 'react' },
        { name: 'postgresql' },
      ],
      githubLink: "https://github.com/project1",
      websiteLink: "https://www.project1.com",
    },
    {
      title: "Project 2",
      subtitle: "Subtitle 2",
      img: "project2.jpg",
      description: "Project 2 description",
      icons: [
        { name: 'python' },
        { name: 'javascript' },
        { name: 'typescript' },
        { name: 'flask' },
        { name: 'react' },
        { name: 'postgresql' },
      ],
      githubLink: "https://github.com/project2",
      websiteLink: "https://www.project2.com",
    },
  ];

  return (
    <Fragment>
      <div className="container portfolio-container">
        <div className="row">
          {projects.map((project, index) => (
            <PortfolioItem {...project}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
