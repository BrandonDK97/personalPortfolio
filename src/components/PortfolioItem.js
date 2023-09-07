import React from 'react';
import IconList from './IconList';

const PortfolioItem = ({ title, subtitle, img, description, icons, githubLink, websiteLink }) => {
    const cardStyle = {
        backgroundColor: '#383838',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        marginTop: '20px',
    };

    const linkStyle = {
        textDecoration: 'none',
        color : '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
    };

    const iconStyle = {
        marginRight: '5px',
    };

    const titleStyle = {
        color: '#00BCD4',
    }

    return (
        <div style={cardStyle}>
            <h1 className="app-title" style={titleStyle}>{title}</h1>
            <p className="app-description">{subtitle}</p>
            <img className="app-image" src={"/images/projects/" + img + ".jpg"} alt="App Screenshot" />
            <p className="app-paragraph">{description}</p>
            <div className='tech-stack'>
                <IconList icons={icons} />
            </div>
            <div className="app-links">
                <a href={githubLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    <i className="fa fa-github" style={iconStyle} /> Github Repo
                </a>
                {websiteLink !== "" && (
                    <a href={websiteLink} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                        <i className="fa fa-globe" style={iconStyle} /> Website
                    </a>
                )}
            </div>
        </div>
    );
};

export default PortfolioItem;
