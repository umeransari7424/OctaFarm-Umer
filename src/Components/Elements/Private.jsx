import React from 'react'

function Private() {
  return (
    <div className='private'>
        <div className="contianer  p-5">
            <div className="row">
                <div className="col-md-4 col-12">
                    <div className="card text-center mx-1 pb-5 mb-4">
                        <span className='complete'>Complete</span>
                        <div className='py-3'>

                        <h3 className='sale'>Private Sale</h3>
                        <span>13th Jan, 2022</span> <br /> <br />
                        <span className='sale'>
                            BONUS
                        </span> <br />
                        <span className='seven'>7%</span>
                        <p><b>Allocation:</b> 1.5% Tokens <br />
                            <b>Price:</b>  1 BNB ≈ 691.93 OCTF</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="card text-center mx-1  mb-4">
                        <span className='complete'>Complete</span>
                        <div className='py-3'>

                        <h3 className='sale'>Pre Sale</h3>
                        <span>15th Jan, 2022 @ <br />pinkSale</span> <br /> <br />
                        <span className='sale'>
                            BONUS
                        </span> <br />
                        <span className='seven'>3%</span>
                        <p><b>Allocation:</b> 10% Tokens <br />
                            <b>Price:</b>  1 BNB ≈ 666.66 OCTF</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="card text-center mx-1  mb-4">
                        <span className='live'>Live Now</span>
                        <div className='py-3'>

                        <h3 className='sale'>Listing</h3>
                        <span>PencakeSwap</span> <br /> <br />
                        <span className='sale'>
                            Listing price
                        </span> <br />
                        <span className='seven'>$0.75%</span>
                        <p><b>Allocation:</b> 1.5% Tokens <br />
                            <b>Price:</b>  1 BNB ≈ 691.93 OCTF</p>
                            <br />
                            <button type="button" class="btn btn-primary">Buy OCTF</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Private