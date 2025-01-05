import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { GiLandMine, GiWaterDrop, GiFactory, GiSprout } from 'react-icons/gi';
import { FaUsers, FaCaretDown, FaCaretUp, FaHome } from 'react-icons/fa';

function Sidebar({ setScenario, setSection, setSubsection, setChartType, setMetric }) {
  const [dropdowns, setDropdowns] = useState({
    decisionsPolicies: false,
  });
  const [nestedDropdowns, setNestedDropdowns] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const optionsData = {
    'Land Allocation': [
      { name: '15% Reduction in Large Farms', subOptions: ['Historical', 'Climate'] },
      { name: '15% Increase in Large Farms', subOptions: ['Historical', 'Climate'] },
      { name: '15% Reduction in Small Farms', subOptions: ['Historical', 'Climate'] },
      { name: '15% Increase in Small Farms', subOptions: ['Historical', 'Climate'] },
    ],
    'Water Allocation': [
      {
        name: 'Tubewell Extraction Limits',
        subOptions: [
          '30 MAF - Historical',
          '30 MAF - Climate',
          '40 MAF - Historical',
          '40 MAF - Climate',
          '50 MAF - Historical',
          '50 MAF - Climate',
        ],
      },
    ],
    'Resource Efficiency': [
      { name: 'Land Productivity', subOptions: ['10% Growth Rate', '20% Growth Rate'] },
    ],
    'Crop Strategies': [
      { name: 'TFP', subOptions: ['10% from Base Growth', '20% from Base Growth'] },
    ],
    'Macro Policies': [
      {
        name: 'International Price Changes',
        subOptions: ['Rice', 'Textile', 'Oilseed', 'Petroleum'],
      },
      { name: 'Labor', subOptions: ['10% Growth Rate', '20% Growth Rate'] },
      { name: 'Tax and Fertilizer', subOptions: ['10%', '20%', '30%'] },
    ],
  };

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleNestedDropdown = (key) => {
    setNestedDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleScenarioSelection = (section, subsection, scenario) => {
    if (selectedOption === `${section}-${subsection}-${scenario}`) {
      setSelectedOption(null);
      if (setSection) setSection(null);
      if (setSubsection) setSubsection(null);
      if (setScenario) setScenario(null);
    } else {
      setSelectedOption(`${section}-${subsection}-${scenario}`);
      if (setSection) setSection(section);
      if (setSubsection) setSubsection(subsection);
      if (setScenario) setScenario(scenario);
      if (setMetric) setMetric('Production'); // Default metric
      navigate('/visualization');
    }
  };

  const renderNestedOptions = (options, section) =>
    options.map((option, index) => (
      <li key={`${section}-${index}`}>
        {option.subOptions && option.subOptions.length > 0 ? (
          <>
            <div
              className="dropdown-toggle"
              onClick={() => toggleNestedDropdown(option.name)}
            >
              {option.name}
              {nestedDropdowns[option.name] ? <FaCaretUp /> : <FaCaretDown />}
            </div>
            {nestedDropdowns[option.name] && (
              <ul className="dropdown-menu">
                {option.subOptions.map((subOption, subIndex) => (
                  <li key={`${section}-${index}-${subIndex}`}>
                    <label>
                      <input
                        type="radio"
                        name={section}
                        value={subOption}
                        checked={selectedOption === `${section}-${option.name}-${subOption}`}
                        onChange={() =>
                          handleScenarioSelection(section, option.name, subOption)
                        }
                      />
                      {subOption}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <label>
            <input
              type="radio"
              name={section}
              value={option.name}
              checked={selectedOption === `${section}-${option.name}-null`}
              onChange={() => handleScenarioSelection(section, option.name, null)}
            />
            {option.name}
          </label>
        )}
      </li>
    ));

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">HEDSS-IWMI</h2>
      <ul>
        <li>
          <Link to="/home" className="sidebar-link">
            <FaHome className="sidebar-icon" /> Home
          </Link>
        </li>
        <li>
          <div
            className="dropdown-toggle"
            onClick={() => toggleDropdown('decisionsPolicies')}
          >
            <span>Decisions and Policies</span>
            {dropdowns.decisionsPolicies ? <FaCaretUp /> : <FaCaretDown />}
          </div>
          {dropdowns.decisionsPolicies && (
            <ul className="dropdown-menu">
              {Object.entries(optionsData).map(([section, options]) => (
                <li key={section}>
                  <div
                    className="dropdown-toggle"
                    onClick={() => toggleDropdown(section)}
                  >
                    {section === 'Land Allocation' && <GiLandMine className="sidebar-icon" />}
                    {section === 'Water Allocation' && <GiWaterDrop className="sidebar-icon" />}
                    {section === 'Resource Efficiency' && <FaUsers className="sidebar-icon" />}
                    {section === 'Crop Strategies' && <GiSprout className="sidebar-icon" />}
                    {section === 'Macro Policies' && <GiFactory className="sidebar-icon" />}
                    {section}
                    {dropdowns[section] ? <FaCaretUp /> : <FaCaretDown />}
                  </div>
                  {dropdowns[section] && (
                    <ul className="dropdown-menu nested-menu">
                      {renderNestedOptions(options, section)}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
