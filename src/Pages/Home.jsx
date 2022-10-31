import React from 'react'
import Crosschain from '../Components/Elements/Crosschain'
import Digital from '../Components/Elements/Digital'
import Hero from '../Components/Elements/Hero'
import Invest from '../Components/Elements/Invest'
import Private from '../Components/Elements/Private'
import Roadmap from '../Components/Elements/Roadmap'
import Tokenallocation from '../Components/Elements/Tokenallocation'
import Tokenvalue from '../Components/Elements/Tokenvalue'
import Faqs from '../Components/Utils/Faqs'

function Home() {
  return (
    <div>
        <Hero />
        <Digital/>
        <Invest/>
        <Crosschain/>
        <Private/>
        <Tokenallocation />
        <Tokenvalue/>
        <Roadmap/>
        <Faqs/>
    </div>
  )
}

export default Home