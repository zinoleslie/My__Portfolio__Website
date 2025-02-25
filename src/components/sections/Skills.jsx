import React from 'react';
import SkillCard from '../SkillCard';

const Skills = () => {
    return (
        <article className="skill__page" style={{ padding: '10px 20px', margin: '40px auto' }}>
            <div className='container'>

                {/* Section Heading */}
                <div className='d-flex flex-column justify-content-center text-center'>
                    <h1 className="mt-4">Tech Skills</h1>
                </div>

                {/* Frontend Development */}
                <h3 className='my-3 text-center text-md-start  ' style={{ color: '#FF003D' }}>Frontend Development</h3>
                <div className="row g-4" style={{paddingInline:'20px'}}>
                    <div className="col-12 col-md-6 col-lg-3">
                        <SkillCard image={'../Bootstrap-removebg-preview.png'} title={'Bootstrap'} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <SkillCard image={'../Reacticon-removebg-preview.png'} title={'React'} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <SkillCard image={'../html_icons-removebg-preview.png'} title={'HTML'} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <SkillCard image={'../images-removebg-preview.png'} title={'CSS'} />
                    </div>
                </div>

                {/* Backend Development */}
                <h3 className='my-3 text-center text-md-start' style={{ color: '#FF003D', marginTop: '50px' }}>Backend Development</h3>
                <div className="row g-4 "  style={{paddingInline:'20px'}}>
                    <div className="col-12 col-md-6 col-lg-3">
                        <SkillCard image={'../nodeImage-removebg-preview.png'} title={'Node'} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <SkillCard image={'../mongodb-removebg-preview.png'} title={'MongoDB'} />
                    </div>
                </div>

                {/* Tools & Version Control */}
                <h3 className='my-3 text-center text-md-start' style={{ color: '#FF003D', marginTop: '50px' }}>Tools & Version Control</h3>
                <div className="row" style={{paddingInline:'20px'}}>
                    <div className="col-12 col-lg-12">
                        <SkillCard image={'../Git_icon-removebg-preview.png'} title={'Git'} />
                    </div>
                </div>

            </div>
        </article>
    );
};

export default Skills;
