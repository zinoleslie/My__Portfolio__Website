import React from 'react'

const LineBreak = ({style: customStyle}) => {

    const styles = {
        LineBreak: {
            color: 'whitesmoke',
            width: '90%',
            display: 'block',
            margin: 'auto',
            border: '1px solid whitesmoke',
        }
    }
    return (
        <div>
            <hr style={styles.LineBreak || customStyle}/>
        </div>
    )
}

export default LineBreak