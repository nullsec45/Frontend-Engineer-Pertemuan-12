import React from 'react'

const Alert = (props) => {
  const {children} = props;

  return (
    <>
        <div>
            <small color='red'>{children}</small>
        </div>
    </>
  )
}

export default Alert