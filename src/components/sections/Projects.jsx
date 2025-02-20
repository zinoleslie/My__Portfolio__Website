import React from 'react'
import LineBreak from '../LineBreak'
import Cards from '../Cards'

const Projects = () => {
    return (
        <div className='container ' style={{ paddingInline: 'auto', margin:'20px auto', height:'100vh',}}>
            <div><LineBreak /></div>
            <div className="d-flex flex-column justify-content-center text-center p-5 mt-5" >
                <h1>Projects</h1>
                {/* <LineBreak customStyle={{ width: '20px', border:'1px solid orangered'}} /> */}
            </div>
            <div className='row  px-5 mt-5'>
                <div className="col-12 col-sm-4">
                    <Cards />
                </div>
                <div className="col-12 col-sm-4">
                    <Cards />
                </div>

                <div className="col-12 col-sm-4">
                    <Cards />
                </div>
            </div>


        </div>
    )
}

export default Projects