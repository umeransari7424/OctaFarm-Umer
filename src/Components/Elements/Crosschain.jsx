import React from 'react'

function Crosschain() {
  return (
    <div className='crosschain'>
        <div className="container text-center py-5">
            <div className="row py-5">
                <h4>EASIEST GATEWAY TO</h4>
                <h1>Cross-Chain Yield Farming For All</h1>
                <p>Octafarm will be deployed on various blockchain networks so anyone can access supercharged <br /> yields seamlessly cross-chain, thereby maximizing opportunities to access the highest yields.</p>
            </div>
            <div className="row py-5 d-flex justify-content-between">
                <div className="col-md-2 col-12  binance">
                    <div className='d-flex justify-content-between binance'>
                        <span><b>Binance</b></span> 
                        <img className='img-fluid' width={"50px"} src="Assets/c1.svg" alt="c1" />
                    </div>
                    <br /><br />
                    <div className='d-flex justify-content-between binance'>
                        <span><b>Polygon</b></span> &nbsp; &nbsp; &nbsp;
                        <img className='img-fluid' width={"50px"} src="Assets/c2.svg" alt="c1" />
                    </div>
                    <br /><br />
                    <div className='d-flex justify-content-between binance'>
                        <span><b>Moonbean</b></span> &nbsp; &nbsp; &nbsp; &nbsp;
                        <img className='img-fluid' width={"50px"} src="Assets/c3.svg" alt="c1" />
                    </div>
                    <br /><br />
                    <div className='d-flex justify-content-between binance'>
                        <span><b>Avalanche</b></span> &nbsp; &nbsp; &nbsp; &nbsp;
                        <img className='img-fluid' width={"50px"} src="Assets/c4.svg" alt="c1" />
                    </div>
                </div>
                <div className="col-md-4 col-12 octo ">
                    <img className='img-fluid' src="Assets/octo.svg" alt="Octa" />
                </div>
                <div className="col-md-3 col-12  octocards">
                    <div className="card text-start p-2 mb-4" style={{width:"180px"}}>
                        <h6>PancakeSwap <br /> Vaults</h6>
                    </div>
                    <div className="card text-start p-2 mb-4" style={{width:"180px"}}>
                        <h6>QuickSwap Vaults</h6>
                    </div>
                    <div className="card text-start p-2 mb-4" style={{width:"180px"}}>
                        <h6>SolarBeam Vaults</h6>
                    </div>
                    <div className="card text-start p-2 mb-4" style={{width:"180px"}}>
                        <h6>Trader Joe Vaults</h6>
                    </div>

                </div>
                <div className="col-md-3 col-12 octocards ">
                    <div className="card text-start p-2 mb-4" style={{width:"180px"}}>
                        <h6>Auto-Comp. Pools</h6>
                    </div>
                    <div className="card text-start p-2 mb-4" style={{width:"180px"}}>
                        <h6>Multi-Dex Strategy</h6>
                    </div>
                    <div className="card text-start p-2 mb-4" style={{width:"180px"}}>
                        <h6>Maximizer Pools</h6>
                    </div>
                    

                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Crosschain