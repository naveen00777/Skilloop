import React, { useState } from 'react';
import './Myskills.css';
import Headerall from '../components/Headerall'
import Footer from '../components/Footer'

const Myskill = () => {
  const [activeTab, setActiveTab] = useState('inProgress');
  const [expandedCourse, setExpandedCourse] = useState(0);
  const [moduleStates, setModuleStates] = useState({
    '1-1': false,
    '1-2': false,
    '1-3': false
  });

  const courses = [
    {
      id: 1,
      title: 'Learn React',
      progress: 34,
      modules: [
        { id: 1, title: 'Meet 1', completed: moduleStates['1-1'] },
        { id: 2, title: 'Meet 2', completed: moduleStates['1-2'] },
        { id: 3, title: 'Meet 3', completed: moduleStates['1-3'] }
      ],
      language: 'Java'
    },
    {
      id: 2,
      title: 'Learn React',
      progress: 34,
      modules: [],
      language: 'Java'
    }
  ];

  const toggleExpand = (courseId) => {
    if (expandedCourse === courseId) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(courseId);
    }
  };

  const handleCheckboxChange = (courseId, moduleId) => {
   const key = `${courseId}-${moduleId}`;
    setModuleStates(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
  <div>
  <Headerall />
    <div className="my-skills-container">
      <h1 className="page-title">My Skills</h1>

      <div className="tabs-container">
        <button
          className={`tab ${activeTab === 'inProgress' ? 'active' : ''}`}
          onClick={() => setActiveTab('inProgress')}
        >
          In progress
        </button>
        <button
          className={`tab ${activeTab === 'completed' ? 'active' : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          completed
        </button>
      </div>

      <div className="divider"></div>

      <div className="courses-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-header">
              <div className="course-label">course</div>
              <div className="course-title-row">
                <h2 className="course-title">{course.title}</h2>
                <div className="progress-container">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">{course.progress}%</span>
                  <button
                    className="expand-toggle"
                    onClick={() => toggleExpand(course.id)}
                    aria-label={expandedCourse === course.id ? "Collapse course" : "Expand course"}
                  >
                    {expandedCourse === course.id ? '▲' : '▼'}
                  </button>
                </div>
              </div>
            </div>

            {expandedCourse === course.id && (
              <div className="course-details">
                <div className="language-tag">{course.language}</div>

                <div className="modules-container">
                  <ul className="modules-list">
                    {course.modules.map((module) => (
                      <li key={module.id} className="module-item">
                        <input
                          type="checkbox"
                          id={`module-${course.id}-${module.id}`}
                          checked={moduleStates[`${course.id}-${module.id}`]}
                          onChange={() => handleCheckboxChange(course.id, module.id)}
                        />
                        <label htmlFor={`module-${course.id}-${module.id}`}>{module.title}</label>
                      </li>
                    ))}
                  </ul>

                  <div className="right-content">
                    <div className="user-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                        <path d="M4 18C4 14.686 7.134 12 11 12H13C16.866 12 20 14.686 20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>

                    <div className="notification-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <div className="notification-dot"></div>
                    </div>
                  </div>
                </div>

                <div className="assignment-container">
                  <button className="view-assignment-btn">
                    view Assignment
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Myskill;