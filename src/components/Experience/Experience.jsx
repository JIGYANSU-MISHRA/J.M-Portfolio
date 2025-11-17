import { useState, useMemo } from 'react';
import './Experience.css';
import Data from './Data';

const Experience = () => {
    const [activeTab, setActiveTab] = useState('education');

    // Helper function to extract date for sorting (returns sortable number)
    const getDateForSorting = (yearString) => {
        const monthMap = {
            'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6,
            'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12
        };

        // Handle format like "2022 - Present" or "2019 - 2021"
        if (yearString.includes('Present')) {
            const startYear = parseInt(yearString.split(' - ')[0]);
            return (startYear + 1000) * 100; // Put "Present" at the top
        }
        if (yearString.match(/^\d{4}/)) {
            // Format: "2022 - 2024" or "2019 - 2021"
            const startYear = parseInt(yearString.split(' - ')[0]);
            return startYear * 100;
        }
        // Handle format like "Jun'24 - Jun'25" or "Jul'25 - Sep'25"
        const match = yearString.match(/(\w{3})'(\d{2})/);
        if (match) {
            const month = monthMap[match[1]] || 1;
            const year = parseInt(match[2]);
            // Convert 2-digit year to 4-digit (assuming 20xx)
            const fullYear = 2000 + year;
            // Return year * 100 + month for proper sorting (e.g., 202507 for Jul'25)
            return fullYear * 100 + month;
        }
        return 0;
    };

    // Sort education data (most recent first)
    const educationData = useMemo(() => {
        return Data.filter(item => item.category === "education")
            .sort((a, b) => getDateForSorting(b.year) - getDateForSorting(a.year));
    }, []);

    // Sort experience data (most recent first)
    const experienceData = useMemo(() => {
        return Data.filter(item => item.category === "experience")
            .sort((a, b) => getDateForSorting(b.year) - getDateForSorting(a.year));
    }, []);

    return (
        <div id="Experience">
            <section className="experience-container" id="experience">
                <h2 className="section_title">Education & Experience</h2>
                
                <div className="tabs-container">
                    <button 
                        className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
                        onClick={() => setActiveTab('education')}
                    >
                        Education
                    </button>
                    <button 
                        className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
                        onClick={() => setActiveTab('experience')}
                    >
                        My Experiences
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === 'education' && (
                        <div className="content-section">
                            {educationData.map((val, id) => (
                                <div key={id} className="content-item">
                                    <div className="content-year">{val.year}</div>
                                    <div className="content-title">{val.title}</div>
                                    <div className="content-desc">{val.desc}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'experience' && (
                        <div className="content-section">
                            {experienceData.map((val, id) => (
                                <div key={id} className="content-item">
                                    <div className="content-year">{val.year}</div>
                                    <div className="content-title">{val.title}</div>
                                    <div className="content-desc">{val.desc}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Experience;