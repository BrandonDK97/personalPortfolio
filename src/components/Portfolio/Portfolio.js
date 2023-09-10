import { Fragment } from "react";
import PortfolioItem from "../PortfolioItem";

const Portfolio = () => {
  const projects = [
    // {
    //   title: "UAskSam",
    //   subtitle: "Virtual Chatbot Website",
    //   img: "/images/projects/uasksam.jpg",
    //   description: `Prototype of the Temasek Polytechnic Final Year Project that utilises
    //   Google's Dialogflow API to create a virtual chatbot that can answer
    //   queries related to workplace advisory. Developed an external site 
    //   to monitor conversational logs for continuous improvement
    //   of the chatbot. Eventually went live on NTUC website from 2018 
    //   to 2020 and was decommisioned in 2021.`,
    //   icons: [
    //     { name: 'net_core' },
    //     { name: 'html' },
    //     { name: 'css' },
    //     { name: 'javascript' }
    //   ],
    //   githubLink: "https://github.com/BrandonDK97/TP_FYP_UAskSam",
    //   websiteLink: "",
    // },
    {
      title: "Path Finding Visualiser",
      subtitle: "Web Application",
      img: "/images/projects/pathfinding.png",
      description: `I was struggling with graphs in my Data Structures and Algorithms 
      class so I decided to create a visualiser to help me understand. While there were 
      many visualisers online, I took it as an opportunity to learn React and this was 
      actually my first app on React!`,
      icons: [
        { name: 'react' },
        { name: 'javascript' },
        { name: 'html' },
        { name: 'css' }
      ],
      githubLink: "https://github.com/BrandonDK97/PathFindingVisualiser",
      websiteLink: "https://path-finding-visualiser-2xo93lxwp-brandondk97.vercel.app/",
    },
    {
      title: "StudyAT",
      subtitle: "Web Application",
      img: "/images/projects/studyat.png",
      description: `A web application developed in my web application development module for the group project.
      It replicates a virtual study room and all the productivity tools you need such as a pomodoro timer, to-do list all 
      in a fully customisable wall. I was in charge of developing the study room, making components re-usable and movable
      using Vue and also managed to work on the backend connecting APIs such as Firebase and Spotify.`,
      icons: [
        { name: 'vue' },
        { name: 'javascript' },
        { name: 'html' },
        { name: 'css' }
      ],
      githubLink: "https://github.com/BrandonDK97/PathFindingVisualiser",
      websiteLink: "https://path-finding-visualiser-2xo93lxwp-brandondk97.vercel.app/",
    },
    {
      title: "Smart Checkout",
      subtitle: "Web Application",
      img: "/images/projects/smartcheckout.png",
      description: `A take on distributed systems and microservices. This project was developed in my enterprise systems module
      where we explored the use of microservices and how it can be used to scale a system. I was in charge of developing a few of the microservices 
      and setting up sql server and message queues. The end result? A fully functional smart checkout system that showcases
      the prowess of polyglot persistence and microservices architecture dockerised and deployed on kubernetes. Further enhancements
      included a dual cloud deployment on AWS and GCP and hey, it won us an award! ESD Tanzu Winner 2022.`,
      icons: [
        { name: 'html' },
        { name: 'javascript' },
        { name: 'css' },
        { name: 'java' },
        { name: 'python' },
        { name: 'csharp' },
        { name: 'mysql' },
        { name: 'docker' },
        { name: 'kubernetes' },
        { name: 'aws' },
        { name: 'gcp' },
        { name: 'rabbitmq' },
        { name: 'mongodb' },
      ],
      githubLink: "https://github.com/BrandonDK97/IS213_SmartCheckout",
      websiteLink: "",
    },
    {
      title: "SuperIdolCryptocurrency",
      subtitle: "Dev Web Application & Data Analytics",
      img: "/images/projects/superidol.png",
      description: `A group project for my Social Analytics module where we worked with a consulting firm 
      to scrap data off social media sites such as Reddit and Twitter, perform data analytics and try to find 
      correlation between sentiments made by people on social media and DeFi coins prices. While not only providing 
      the analysis to the user, we aimed to create a web portal that scraps data automatically and output charts through 
      a web portal.`,
      icons: [
        { name: 'python' },
        { name: 'flask'},
        { name: 'javascript' }
      ],
      githubLink: "https://github.com/BrandonDK97/IS434_SuperIdolCryptocurrency",
      websiteLink: "",
    },
    {
      title: "Learning Journey Website",
      subtitle: "Web Application",
      img: "/images/projects/learningjourney.png",
      description: `A group project for my Software Project Management module. A learning journey website
      that allows users to create learning journeys and embark on them as learners. It was a great experience, learning
      about agile methodologies and how to manage a project. I helped out in both frontend and backend development while my main task being a scrum master.`,
      icons: [
        { name: 'react' },
        { name: 'nodejs'},
        { name: 'javascript' },
        { name: 'mysql' },
        { name: 'flask' },
        { name: 'python' }
      ],
      githubLink: "https://github.com/BrandonDK97/IS212_LearningJourney",
      websiteLink: "",
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
