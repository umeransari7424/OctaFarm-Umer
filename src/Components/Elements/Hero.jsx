import React from 'react'

function Hero() {
  return (
    <div className='hero'>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>
                        Maximize Staking Returns
                        with Auto-Compouning</h1>
                    <h4>Automate your DeFi reinvestment with Octafarm to compound your returns even when you</h4>
                    <br />
                    <button type="button" className="btn btn-primary">Buy on PencakeSwap</button> <br /> <br />
                    <code>
                    Official Contract: <br /> 0x04d4F38Dcdfe976Cb325dB16b868F0020104014e
                    </code> <br /><br />
                    <div>

                    <button type="button" className="btn btn-primary launch">Launch App</button> 
                    <button type="button" className="btn btn-primary launch">Documentation</button>
                    </div>
                </div>
                <div className="col-md-6 v">
                    <div >

                    <video controls src="Assets/nature.mkv"></video>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero