import React from 'react';
import { Chrono } from 'react-chrono';


const HorizontalTimeline = () => {



    const items = [
        {
            title: <span style={{ color: '#FFFFFF' }}>Poly Internship</span>,
            cardTitle: <span style={{ color: '#00BCD4' }}>Software Engineer Intern</span>,
            cardSubtitle: <span style={{ color: '#FFFFFF' }} className='my-2'>@ NTUC Congress</span>,
            cardDetailedText: `During an enriching 8 months, I embarked on my journey as a Software Engineer, subsequently transitioning into a full-time role as a Junior Engineer. 
            In this role, I was granted substantial creative freedom, which I eagerly embraced to its fullest extent. My accomplishments 
            included conceptualizing and crafting a comprehensive chatbot solution for Workplace Advisory, a feat that was not only impressive but also became a live platform for two productive years spanning 2018 to 2020. 
            This experience not only ignited my passion for coding but also became the decisive factor propelling me towards my future studies in computing.`,
        },
        {
            title: <span style={{ color: '#FFFFFF' }}>Y1 Summer Internship</span>,
            cardTitle: <span style={{ color: '#00BCD4' }}>Software Engineer Intern</span>,
            cardSubtitle: <span style={{ color: '#FFFFFF' }} className='my-2'>@ PricewaterhouseCoopers (PwC)</span>,
            cardDetailedText: `I had the privilege of spending an amazing Y1 summer with PwC mentors who taught me about digital transformation and the importance of technology in this day and age. 
            Despite the Covid-19 lockdown, I embraced remote work to develop a full stack web app for Marketplace, an internal HR tool. 
            This experience reinforced my software development skills after 2 years of National Service and fueled my passion for coding and learning.`,
        },
        {
            title: <span style={{ color: '#FFFFFF' }}>Y2 Summer Internship</span>,
            cardTitle: <span style={{ color: '#00BCD4' }}>Data Analyst Intern</span>,
            cardSubtitle: <span style={{ color: '#FFFFFF' }} className='my-2'>@ SeaMoney</span>,
            cardDetailedText: `During my university journey, spanning two enriching years, I honed valuable Data Analytics skills. 
            Eager to bridge the gap between academia and real-world application, I ventured into a transformative 6-month internship with SeaMoney through the Google-SMU Squared Data Analytics Programme. 
            This experience not only allowed me to leverage my skills in a professional setting but also introduced me to the dynamic world of finance. 
            This encounter sparked a genuine interest and desire for deeper exploration in the financial domain.`,
        },
        {
            title: <span style={{ color: '#FFFFFF' }}>Y3 Mid-Term Internship</span>,
            cardTitle: <span style={{ color: '#00BCD4' }}>Product Analyst Intern</span>,
            cardSubtitle: <span style={{ color: '#FFFFFF' }} className='my-2'>@ Wise (formerly known as Transferwise)</span>,
            cardDetailedText: `I'm grateful for the enriching 5 months at Wise with an amazing team, where I dived into the payments industry and honed my business acumen. 
            Collaborating on data-driven projects allowed me to share insights with larger teams, bridging the gap between technology and business. 
            With a supportive mentor and significant growth, I realized my passion for coding and how much I missed Software Development and decided to return to Software Engineering.`,
        },
        {
            title: <span style={{ color: '#FFFFFF' }}>Y3 Summer Internship</span>,
            cardTitle: <span style={{ color: '#00BCD4' }}>Software Engineering Summer Analyst</span>,
            cardSubtitle: <span style={{ color: '#FFFFFF' }} className='my-2'>@ JPMorgan Chase & Co</span>,
            cardDetailedText: `During my third-year summer, I fulfilled a long-held dream by interning at a prestigious bank. 
            This experience provided invaluable insights into the financial landscape, particularly from the perspective of an investment bank, showcasing its unique distinctions from other financial institutions. 
            I was fortunate to be positioned at the front office, granting me firsthand exposure to the inner workings of traders in the banking industry. 
            Witnessing technology's pivotal role in the heart of the business was an enlightening revelation that left a lasting impact.`,

        }
    ];

    return (
        <Chrono
            mode="VERTICAL_ALTERNATING"
            items={items}
            cardHeight={200}
            theme={{ primary: '#00BCD4', secondary: '#00BCD4', cardBgColor: '#383838', cardForeColor: '#ffffff' }}
            iconPosition="TOP" // Adjust the icon position
            hideControls={true}
            scrollable={false}
        />
    );
};

export default HorizontalTimeline;
