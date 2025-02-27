import React from 'react';
import LineBreak from '../LineBreak';
import Cards from '../Cards';

const Projects = () => {
    return (
        <div className='container-fluid' style={{ margin: '20px auto', minHeight: '100vh' }}>
            <div><LineBreak /></div>

            {/* Section Heading */}
            <div className="d-flex flex-column justify-content-center text-center p-4 mt-4">
                <h1>Projects</h1>
            </div>

            {/* Project Cards */}
            <div className='row g-4 px-3 px-md-5 mt-4 justify-content-center'>

                {/* Project 1 */}
                <div className="col-12 col-md-6 d-flex justify-content-center">
                    <Cards
                        title="Voting Application System"
                        description="A sophisticated electoral management platform engineered with React, Node.js, and MongoDB."
                        image="../votingAPP__image.jpg"
                        linkProf={'https://votingapp-frontend-project.onrender.com'}
                    />
                </div>

                {/* Project 2 */}
                <div className="col-12 col-md-6 d-flex justify-content-center">
                    <Cards
                        title={'School Management System'}
                        description={'A School Management System built using React, Node.js, and MongoDB.'}
                        image={'../chizzyKids.jpg'}
                        linkProf={'https://chizzy-kids-school.onrender.com/'}

                    />
                </div>

            </div>
        </div>
    );
};

export default Projects;
