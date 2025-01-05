import React, { useState } from 'react';
import './Topbar.css';
import logo from '../assets/iwmi.png'; // First logo
import logo2 from '../assets/nexusgainslogo.png'; // Second logo
import { FaBell, FaUserCircle, FaSearch, FaUpload, FaQuestionCircle, FaBook, FaInfoCircle, FaUserPlus } from 'react-icons/fa'; // Icons
import { useNavigate } from 'react-router-dom';

function Topbar() {
  const [showUploadContainer, setShowUploadContainer] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showFAQContainer, setShowFAQContainer] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const navigate = useNavigate();

  const toggleUploadContainer = () => {
    setShowUploadContainer(!showUploadContainer);
  };

  const toggleRegistrationForm = () => {
    setShowRegistrationForm(!showRegistrationForm);
  };

  const toggleFAQContainer = () => {
    setShowFAQContainer(!showFAQContainer);
  };

  const toggleContactUs = () => {
    setShowContactUs(!showContactUs);
  };

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    setShowRegistrationForm(false);
  };

  const faqData = [
    {
      question: "What is the primary utility of the CGE-W model?",
      answer: "The CGE-W model is primarily used to analyze the economic impacts of water policies and scenarios. It evaluates the role of water in economic systems, helping policymakers assess trade-offs, optimize resource allocation, and understand how changes in water availability or management affect sectors like agriculture, industry, and households."
    },
    {
      question: "Is the CGE-W model focused on hydrological, economic, or policy analysis?",
      answer: "The CGE-W model is focused on economic and policy analysis. While it incorporates hydrological data, its core strength lies in linking water resource availability to macroeconomic and sectoral outcomes within a computable general equilibrium framework."
    },
    {
      question: "Is the CGE-W model open-source or proprietary software? What are its licensing terms?",
      answer: "The CGE-W model is not open-source; it is built on General Algebraic Modeling System (GAMS) which is licensed software."
    },
    {
      question: "How does the CGE-W model integrate water-related data into its economic framework?",
      answer: "The model incorporates water-related data such as sectoral water demands, irrigation requirements, and hydrological flows. This data is integrated into the production functions of economic sectors, allowing the model to simulate the economic impacts of water constraints or policy changes."
    },
    {
      question: "What distinguishes the CGE-W model from other computable general equilibrium models in the water sector?",
      answer: "The CGE-W model explicitly incorporates water as a factor of production and integrates it into the economic system. Unlike general CGE models, it accounts for water-specific challenges, such as seasonal variability, regional disparities in availability, and the competition among sectors for limited water resources."
    },
    {
      question: "How does the model simulate the economic impacts of water policies or scenarios like droughts and floods?",
      answer: "The CGE-W model uses scenario analysis to simulate the impacts of changes in water availability or policy interventions. For example, it can analyze the effects of drought by reducing water availability for key sectors, estimating the resulting shifts in output, prices, and trade."
    },
    {
      question: "What types of data inputs are required to run the CGE-W model?",
      answer: "The model requires data such as national accounts, sectoral water use, hydrological data (e.g., river basin flows), and water allocation policies. It also needs data on trade, production, and household consumption patterns, typically drawn from social accounting matrices (SAMs) and national statistics."
    },
    {
      question: "Can the CGE-W model handle multi-sectoral analysis, such as agriculture, industry, and energy?",
      answer: "Yes, the CGE-W model is designed for multi-sectoral analysis. It captures the interdependencies between sectors, showing how water constraints in one sector (e.g., agriculture) can ripple through to others (e.g., energy and manufacturing)."
    },
    {
      question: "How can the CGE-W model support national or regional water policy development?",
      answer: "The model helps governments evaluate the economic costs and benefits of water policies, such as pricing reforms, subsidies for efficient irrigation, or investments in storage infrastructure. It provides insights into how these policies affect GDP, employment, and sectoral outputs."
    },
    {
      question: "In what ways can the CGE-W model be adapted for country-specific applications?",
      answer: "The model can be customized by incorporating country-specific data, such as local water use patterns, sectoral priorities, and policy objectives. Regional adaptations may focus on specific basins or provinces within a country."
    },
    {
      question: "How does the CGE-W model ensure robust results under varying economic and climatic scenarios?",
      answer: "The model uses scenario-based simulations, allowing for the inclusion of uncertainties such as climate variability, policy changes, or economic shocks. This ensures results are comprehensive and account for a range of possible outcomes."
    },
    {
      question: "How does the CGE-W model enable evidence-based decision-making for policymakers?",
      answer: "The model provides data-driven insights into the economic impacts of water-related decisions. Policymakers can use these results to design policies that maximize economic benefits while ensuring sustainable water use."
    },
    {
      question: "Can you provide examples of how the CGE-W model has been applied in real-world scenarios?",
      answer: "The CGE-W model has been used in studies on the Mekong River Basin, sub-Saharan Africa, and South Asia to evaluate water allocation policies, drought impacts, and agricultural productivity under different water management scenarios."
    },
    {
      question: "What lessons have been learned from past applications of the CGE-W model in policy-making?",
      answer: "Key lessons include the importance of accurate data for robust simulations, the need to involve stakeholders in scenario development, and the value of integrating water and economic policies to achieve sustainable development goals."
    }
  ];

  return (
    <header className="topbar slim-topbar">
      <div className="topbar-left">
        <div className="dashboard-label">CGE-W Dashboard</div>
        <img src={logo} alt="Primary Logo" className="topbar-logo" />
        <img src={logo2} alt="Secondary Logo" className="topbar-logo secondary-logo" />
      </div>

      <div className="topbar-center">
        <h1 className="topbar-title">Hydro-Economic Decision Support System Results for Indus Basin (Pakistan)</h1>
      </div>

      <div className="topbar-right">
        {/* Search Icon */}
        <div className="topbar-icon-container">
          <FaSearch className="topbar-icon" />
        </div>

        {/* Notification Icon */}
        <div className="topbar-icon-container">
          <FaBell className="topbar-icon" />
        </div>

        {/* Upload Icon */}
        <div className="topbar-icon-container" onClick={toggleUploadContainer}>
          <FaUpload className="topbar-icon" />
          {showUploadContainer && (
            <div className="upload-container">
              <h3>Upload File</h3>
              <input type="file" className="file-input" />
              <button className="upload-button">Upload</button>
            </div>
          )}
        </div>

        {/* Tabs */}
        <button className="nav-button" onClick={toggleFAQContainer}>
          <FaQuestionCircle className="nav-icon" /> FAQ's
        </button>
        <button className="nav-button" onClick={() => navigate('/publications')}>
          <FaBook className="nav-icon" /> Publications
        </button>
        <button className="nav-button" onClick={toggleContactUs}>
          <FaInfoCircle className="nav-icon" /> Contact Us
        </button>
        <button className="nav-button" onClick={toggleRegistrationForm}>
          <FaUserPlus className="nav-icon" /> Register
        </button>

        {/* FAQ Container */}
        {showFAQContainer && (
          <div className="faq-container">
            <div className="faq-header">
              <h3>FAQs for CGE-W Model</h3>
              <button className="close-button" onClick={toggleFAQContainer}>X</button>
            </div>
            <div className="faq-content">
              {faqData.map((faq, index) => (
                <div key={index} className="faq-item">
                  <p className="faq-question" onClick={() => toggleQuestion(index)}>
                    <strong>{faq.question}</strong>
                  </p>
                  {activeQuestion === index && <p className="faq-answer">{faq.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Us Container */}
        {showContactUs && (
          <div className="contact-us-overlay" onClick={toggleContactUs}>
            <div className="contact-us-container" onClick={(e) => e.stopPropagation()}>
              <div className="contact-us-header">
                <h3>Contact Us</h3>
                <button className="close-button" onClick={toggleContactUs}>X</button>
              </div>
              <div className="contact-us-content">
                <p><strong>Country Office for Pakistan</strong></p>
                <p>Location: 12km Multan Road, Thokar Niaz Baig, Lahore, Punjab 53700, Pakistan.</p>
                <p>Telephone: +92 4235299504, +92 4235299505.</p>
              </div>
            </div>
          </div>
        )}

        {/* Registration Form Modal */}
        {showRegistrationForm && (
          <div className="registration-overlay" onClick={toggleRegistrationForm}>
            <div className="registration-container" onClick={(e) => e.stopPropagation()}>
              <div className="registration-header">
                <h3>Register</h3>
                <button className="close-button" onClick={toggleRegistrationForm}>X</button>
              </div>
              <form className="registration-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label>First Name:</label>
                  <input type="text" name="firstName" required />
                </div>
                <div className="form-group">
                  <label>Last Name:</label>
                  <input type="text" name="lastName" required />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input type="email" name="email" required />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input type="password" name="password" required />
                </div>
                <div className="form-group">
                  <label>Confirm Password:</label>
                  <input type="password" name="confirmPassword" required />
                </div>
                <div className="form-group">
                  <label>User Type:</label>
                  <select name="userType" required>
                    <option value="Student">Student</option>
                    <option value="Professional">Professional</option>
                  </select>
                </div>
                <button type="submit" className="submit-button">Submit</button>
              </form>
            </div>
          </div>
        )}

        {/* Logout Button */}
        <button className="logout-button">Logout</button>
      </div>
    </header>
  );
}

export default Topbar;
