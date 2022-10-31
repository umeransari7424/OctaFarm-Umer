import React from 'react'
import { App } from './App'

function Tokenallocation() {
  return (
    <div className='tokenallocation' id='token'>
        <div className="container ">
            <div className="row">
            <h1>Token Allocation</h1>
            <div className='token d-flex justify-content-between text-center'>
                <div>
                    <span>Ticker</span>
                    <h1 className='octf'>OCTF</h1> 
                </div>
                <div>
                    <span>Network</span>
                    <h1 className='octf'>BSC</h1> 
                </div>
                <div>
                    <span>Total Fixed Supply</span>
                    <h1 className='octf'>10 Million</h1> 
                </div>
                <div>
                    <span>Emission</span>
                    <h1 className='octf'>2 Years</h1> 
                </div>

            </div>
            </div>
            <div className="row py-5">
                <div className="col-md-6">
                    <App/>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src="Assets/app.png" alt=" App" />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Tokenallocation