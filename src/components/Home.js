import React from 'react';
import './Home.css';
import logo1 from '../assets/nexusgainslogo.jfif'; // Replace with actual logo paths
import logo2 from '../assets/iwmi.png';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Hydro-economic Decision Support System</h1>
        
        {/* Image Animation Section */}
        <div className="image-animation-container">
          <img src={image1} alt="Image 1" className="animated-image" />
          <img src={image2} alt="Image 2" className="animated-image" />
          <img src={image3} alt="Image 3" className="animated-image" />
          <img src={image4} alt="Image 4" className="animated-image" />
        </div>

        <p>
          This dashboard provides insights into the Water-Energy-Food-Environment (WEFE) Nexus in Pakistan.
          Explore different policy scenarios and their impacts on resources.
        </p>

        <div className="objectives-charts-container">
          <div className="objectives-section">
            <h2>Project Objectives</h2>
            <ul>
              <li>Visualize trends over time and across provinces.</li>
              <li>Gain insights into land resource management.</li>
              <li>Analyze water resource allocation.</li>
              <li>Evaluate labor productivity and crop strategies.</li>
              <li>Explore impacts of population dynamics.</li>
            </ul>

            {/* New Section for Additional Content and Logos */}
            <div className="additional-content">
              <p>
                Our project aims to support sustainable development by optimizing resources across water, land, energy, and ecosystems. 
                We encourage cross-sectoral collaboration to make informed decisions.
                Please make the images vertical in the container and increase the size of the images also. 
                Please add this description in the homepage:
                Why is Hydro-Economic Decision Support Important?
                Water is the lifeblood of sustainable development, connecting the environment, society, and the economy. In a world grappling with climate change, population growth, and resource scarcity, effective water management is critical to ensuring food security, energy sustainability, and economic resilience. Hydro-economic decision support systems (HEDSS) provide a structured approach to integrate water resource management with economic considerations, offering a comprehensive framework for making informed decisions.

                Key Reasons for Its Importance:
                Integrated Decision-Making: HEDSS bridges the gap between hydrology and economics, allowing policymakers to assess the trade-offs between water use in agriculture, industry, and domestic sectors. This integrated perspective ensures balanced decisions that align with societal and environmental goals.

                Addressing Resource Scarcity: With increasing water scarcity, it is essential to optimize the allocation of resources. HEDSS enables the prioritization of water use based on economic value, sustainability, and equity, ensuring efficient utilization of limited resources.

                Mitigating Climate Risks: Climate change has intensified the unpredictability of water availability. HEDSS helps in modeling future scenarios, identifying vulnerabilities, and developing strategies to mitigate risks and adapt to changing climatic conditions.

                Enhancing Agricultural Productivity: Agriculture consumes a significant portion of global freshwater. By evaluating the economic impact of different water allocation strategies, HEDSS supports policies that enhance productivity while preserving water for other critical needs.

                Supporting Sustainable Development Goals (SDGs): The United Nations’ SDGs, particularly Goal 6 (Clean Water and Sanitation) and Goal 13 (Climate Action), emphasize sustainable water management. HEDSS plays a vital role in aligning water resource strategies with these global objectives.

                Economic Growth and Resilience: Water-related economic activities, including agriculture, energy production, and industrial processes, depend on reliable water supplies. HEDSS helps maximize economic returns from water investments while ensuring resilience against shocks.

                Informed Policy and Governance: HEDSS equips decision-makers with data-driven insights, enabling the design of policies that are both economically viable and environmentally sustainable. This fosters transparent and accountable governance.

                The Role of HEDSS-IWMI:
                Our Hydro-Economic Decision Support System, developed in collaboration with IWMI, empowers stakeholders with tools to visualize scenarios, evaluate trade-offs, and make evidence-based decisions. By leveraging cutting-edge data analytics, interactive visualizations, and robust economic models, we aim to transform the way water resources are managed for a sustainable future.

                Let this platform guide your journey toward sustainable water management and economic prosperity. Together, we can ensure that every drop of water counts.
              </p>
              <div className="logos-section">
                <img src={logo1} alt="Partner Logo 1" className="partner-logo" />
                <img src={logo2} alt="Partner Logo 2" className="partner-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
