import React from "react";
import Faq from "react-faq-component";
import { IoMdArrowDropright } from "react-icons/io";

const data = {
  rows: [
    {
      title: ` What is Octafarm? `,
      content: <div className="text-start p-2">

       Octafarm is an auto-compounding yield aggregator on Binance Smart Chain (BSC) that seeks to streamline the yield farming lifecycle by automating the reinvestment process to maximize users retruns. Octafarm aims to be the easiest gateway for sophisticated and non-sophisticated users to access the world of DeFi yield farming in an automated, simple and safe manner. Octafarm is focused on building a fully-integrated DeFi ecosystem for both crypto natives and the mainstream population.
      </div>
    }]
}

const data1 = {
    rows: [
    {
      title: `What is Auto-Compounding?`,
      content: <div className="text-start p-2">
        It works by allowing exchange of different cryptocurrencies between different pairs. It basically works as a currency exchange to facilitate your transfer/swap of crypto assets.</div>
    }]
}
const data2 = {
        rows: [
    {
      title: `What Issues is Octafarm trying to Solve?`,
      content: <div className="text-start p-2">
       Multiverses can be used in gaming as an advanced feature to enter in parallel universes to explore new area and levels within the game.</div>
    }]
}
const data3 = {
        rows: [
    {
      title: `What Makes Octafarm Unique?`,
      content: <div className="text-start p-2">Generally, there is not limit implied on withdrawal of your funds with Povo. You can withdrawal at any time and for any amount.</div>
      
        
    }]
}
const data4 = {
        rows: [
    {
      title: `What are the Benefits of Yield Farming/Staking on Octafarm?`,
      content: <div className="text-start p-2">Now that you have your Povo card, you can unlock NFT’s exclusive farms. You can mint NFTs or liquidate your Povo cards at any time or swap them with other crypto assets.</div>
        
    }]
}
const data5 = {
    rows: [
{
  title:`What is OCTF Tokens?`,
  content: <div className="text-start p-2">
    OCTF is the native token of Octafarm. There are strong usecases for OCTF including: 1) Staking rewards, 2) Earning free partner tokens, 3) Earn trading fee revenue, 4) Participate in governance and 5) Submit strategies to earn performance fees. OCTF is based on a fixed-supply model that is integrated with a continual buyback-and-burn mechanism for maximum value-accrual and token value sustainability. This ensures that users will be holding an appreciating asset with strong fundamentals.</div>

  
  ,
},
],
}
const data6 = {
        rows: [
    {
      title: `How Can I Take Part in Octafarm’s ICO?`,
      content: <div className="text-start p-2">Octafarm will be giving an opportunity for the community to be part of our journey in being the gateway to DeFi yield farming. Users have two choices for participating in our ICO round; 1) Private Sale or 2) Public Sale. There is limited allocation for Private Sale, which will award private investors with 42.9% in bonuses. Anyone interested in the Private Sale round must whitelist their wallets first when the date is announced. For those that missed the whitelisting process or prefers to join the Public round, they can do so after the Private Round. There is no whitelist for the Public Round.
      </div>
        
    },
  ],
};

const styles = {
  bgColor: "black",
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: "white",
  arrowColor: "white",
};

const config = {
  //   animate: true,
  arrowIcon: <IoMdArrowDropright />,
  //   tabFocus: true
};

function Faqs() {
  return (
    <div className="faq" id="fq">
      <div className="container text-start py-5">
        <div className="row pt-5">
          <div className="col-md-10 m-auto">
          <h1>FAQ <span className="asked">- frequently asked questions</span> </h1>
            
            <div>
              <Faq config={config} data={data} styles={styles} />
              <Faq config={config} data={data1} styles={styles} />
              <Faq config={config} data={data2} styles={styles} />
              <Faq config={config} data={data3} styles={styles} />
              <Faq config={config} data={data4} styles={styles} />
              <Faq config={config} data={data5} styles={styles} />
              <Faq config={config} data={data6} styles={styles} />
            </div>
          </div>
         
        </div>
      </div>
      
    </div>
  );
}

export default Faqs;
