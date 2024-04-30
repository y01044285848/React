import React from 'react'

const PropsComponents = (props) => {

    const subject = props.subject;
    const message = props.message;

  // JSX Render
  return (
    <div className='PropsComponent'>
        <h4>PropsComponents</h4>
        <p>
            subject : {subject}<br/>
            message : {message}
        </p>
    </div>
  )
}

export default PropsComponents