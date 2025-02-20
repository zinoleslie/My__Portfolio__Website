import React from 'react'
import SkillCard from '../SkillCard'

const Skills = () => {
    return (
        <article className="skill__page" style={{ padding: '10px 70px', margin: '60px auto' }}>
            <div className='container '>

                <div className='d-flex flex-column justify-content-center text-center' >
                    <h1 style={{ margin: '40px auto' }}>Tech Skills</h1>
                </div>


                <h3 className='my-3 ms-1' style={{ color: '#FF003D' }}>Frontend Development</h3>
                <div className="row mt-2">

                    <div className="col-12 col-sm-3">
                        <SkillCard image={'../Bootstrap-removebg-preview.png'} title={'Bootstrap'} />
                    </div>
                    <div className="col-12 col-sm-3">
                        <SkillCard image={'../Reacticon-removebg-preview.png'} title={'React'} />
                    </div>
                    <div className="col-12 col-sm-3">
                        <SkillCard image={'../html_icons-removebg-preview.png'} title={'HTML'} />
                    </div>
                    <div className="col-12 col-sm-3">
                        <SkillCard image={'../images-removebg-preview.png'} title={'CSS'} />
                    </div>



                    <h3 className='mb-3 ms-1' style={{ color: '#FF003D', marginTop: '50px' }}>Backend Development</h3>
                    <div className="row mt-2">

                        <div className="col-12 col-sm-3">
                            <SkillCard image={'../nodeImage-removebg-preview.png'} title={'Node'} />
                        </div>
                        <div className="col-12 col-sm-3">
                            <SkillCard image={'../mongodb-removebg-preview.png'} title={'MongoDB'} />
                        </div>
                    </div>


                    <h3 className='mb-3 ms-1' style={{ color: '#FF003D', marginTop: '50px' }}>Tools & Version Control</h3>
                    <div className="row mt-2 mb-4">

                        <div className="col-12 ">
                            <SkillCard image={'../Git_icon-removebg-preview.png'} title={'Git'} />
                        </div>
                    </div>
                </div>

            </div>
        </article>
    )
}

export default Skills