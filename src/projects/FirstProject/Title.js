import React from 'react'

function Title({ name , title}) {
  return (
    <>
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <div className="text-capitalize" style={{fontSize: "30px" ,fontWeight: "800"} }>
                    {name} <strong className='text-blue'>{title}</strong> 
                </div>
            </div>
        </div>
    </>
  )
}

export default Title