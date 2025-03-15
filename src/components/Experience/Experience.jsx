import React from 'react';
import "./Experience.css";
import Data from './Data';
import Card from './Card';

const Experience = () => {
    return (
        <div id="Experience">
            <section className="experience-container" id="experience">
                <h2 className="section_title">Experience</h2>
                <div className="experience_container grid">
                    <div className="timeline grid">
                        {Data.map((val, id) => {
                            if (val.category === "education") {
                                return (
                                    <Card 
                                        key={id} 
                                        icon={val.icon} 
                                        title={val.title} 
                                        year={val.year} 
                                        desc={val.desc} 
                                    />
                                );
                            }
                            return null;
                        })}
                    </div>
                    <div className="timeline grid">
                        {Data.map((val, index) => {
                            if (val.category === "experience") {
                                return (
                                    <Card 
                                        key={index} 
                                        icon={val.icon} 
                                        title={val.title} 
                                        year={val.year} 
                                        desc={val.desc} 
                                    />
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Experience;
