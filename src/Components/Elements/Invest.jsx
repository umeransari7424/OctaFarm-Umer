import React from 'react'

function Invest() {
  return (
    <div className='invest' id='investid'>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-4">
                    <h4>INVEST THE RIGHT WAY</h4>
                    <h2>Supercharge Your Returns</h2>
                    <h1>Save the time & Gass Fees Through Automation</h1>
                </div>
               

                <div className="col-md-4">
                    <div className="card card2 text-start p-3 mt-3">
                        <div>

                        <p>HIGHEST AUTO <br />
                            COMPOUNDING POOLS</p>
                        </div>
                        <div className='p-2'>
                            <span>UPTO</span> <br />
                            <span className='seven'>7,000%</span>
                        </div> <br />
                        <div>
                            <h5 className='annual'>Annual Percentage Yield</h5>
                        </div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card2 text-start p-3 mt-3">
                   


                        <div>
                        <p> PROJECTED <br />
                            TOTAL VALUE LOCKED (TVL)</p>
                        </div>
                        <div className='p-2 py-4'>
                           
                            <span className='seven'>$538.4M</span>
                        </div> <br />
                        <div>
                            <h5 className='annual'>Within 6 months of launch</h5>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Invest