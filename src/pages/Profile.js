import React, { useState } from "react";
import "./Profile.css"; // Import the CSS file
import { Modal, Button } from "react-bootstrap"; // Import Bootstrap components

const Profile = () => {
  const [activeTab, setActiveTab] = useState("enrolled");
  const [modalOpen, setModalOpen] = useState(false);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showBackConfirmModal, setShowBackConfirmModal] = useState(false);
  const [hasMadeChanges, setHasMadeChanges] = useState(false);

  // Course data
  const courseData = {
    "ui-ux-design": {
      title: "UI/UX Designing",
      currentModule: "Wireframing",
      progress: "65%",
      modules: [
        { name: "Introduction to UI/UX", status: "completed" },
        { name: "User Research", status: "completed" },
        { name: "Wireframing", status: "in-progress" },
        { name: "Prototyping", status: "locked" },
        { name: "User Testing", status: "locked" },
      ],
      description:
        "Learn to create effective and aesthetically pleasing user interfaces and experiences.",
    },
    "frontend-dev": {
      title: "Frontend Development",
      currentModule: "Responsive Design",
      progress: "32%",
      modules: [
        { name: "HTML Basics", status: "completed" },
        { name: "CSS Fundamentals", status: "completed" },
        { name: "Responsive Design", status: "in-progress" },
        { name: "JavaScript DOM Manipulation", status: "locked" },
        { name: "Building a Portfolio", status: "locked" },
      ],
      description:
        "Master the skills needed to create responsive and interactive web interfaces.",
    },
    "advanced-react": {
      title: "Advanced React Development",
      currentModule: "Not Started",
      progress: "0%",
      modules: [
        { name: "React Fundamentals Review", status: "locked" },
        { name: "Hooks in Depth", status: "locked" },
        { name: "State Management", status: "locked" },
        { name: "Performance Optimization", status: "locked" },
        { name: "Testing React Applications", status: "locked" },
      ],
      description:
        "Take your React skills to the next level with advanced patterns and techniques.",
    },
    "data-analytics": {
      title: "Data Analytics with Python",
      currentModule: "Not Started",
      progress: "0%",
      modules: [
        { name: "Python Fundamentals", status: "locked" },
        { name: "Data Manipulation with Pandas", status: "locked" },
        { name: "Data Visualization", status: "locked" },
        { name: "Statistical Analysis", status: "locked" },
        { name: "Machine Learning Basics", status: "locked" },
      ],
      description:
        "Learn to analyze and visualize data using Python and popular data science libraries.",
    },
    "html-css": {
      title: "HTML & CSS Fundamentals",
      currentModule: "Completed",
      progress: "100%",
      modules: [
        { name: "HTML Structure", status: "completed" },
        { name: "CSS Styling", status: "completed" },
        { name: "Layout Techniques", status: "completed" },
        { name: "Responsive Design", status: "completed" },
        { name: "CSS Animations", status: "completed" },
      ],
      description:
        "A comprehensive introduction to creating and styling web pages with HTML and CSS.",
    },
    "javascript-basics": {
      title: "JavaScript Basics",
      currentModule: "Completed",
      progress: "100%",
      modules: [
        { name: "JavaScript Syntax", status: "completed" },
        { name: "Functions and Objects", status: "completed" },
        { name: "DOM Manipulation", status: "completed" },
        { name: "Event Handling", status: "completed" },
        { name: "Asynchronous JavaScript", status: "completed" },
      ],
      description:
        "Learn the fundamentals of JavaScript programming for web development.",
    },
  };

  // Handle back button click
  const handleBackClick = () => {
    if (hasMadeChanges) {
      setShowBackConfirmModal(true);
    } else {
      navigateBack();
    }
  };

  // Navigate back to dashboard
  const navigateBack = () => {
    window.location.href = "/dashboard"; // Replace with your dashboard URL
  };

  // Show course details in modal
  const showCourseDetails = (courseId) => {
    setSelectedCourse(courseData[courseId]);
    setShowCourseModal(true);
    setHasMadeChanges(true);
  };

  return (
    <div className="student-profile">
      {/* Background Image */}
      <img
        src="https://via.placeholder.com/800x600?text=Education+Items"
        alt="Background"
        className="background-image"
      />

      <div className="container-fluid px-4">
        {/* Back Button with Tooltip */}
        <div className="back-button-container">
          <div className="back-button" onClick={handleBackClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </div>
          <div className="back-button-tooltip">Back to Dashboard</div>
        </div>

        {/* Profile Title */}
        <div className="row mt-3">
          <div className="col-12">
            <h1 className="profile-header">Profile</h1>
          </div>
        </div>

        {/* Profile Info */}
        <div className="row profile-container">
          <div className="col-md-auto">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile Picture"
              className="profile-image"
            />
          </div>
          <div className="col-md profile-info">
            <h2 className="profile-name">Phani Poojitha</h2>
            <div className="profile-id">
              SL00123
              <span className="ms-2 text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </span>
            </div>
            <div className="profile-contact">+91 9620908049</div>
            <div className="profile-contact">phanipoojitha22@gmail.com</div>
          </div>
        </div>

        {/* Tabs */}
        <ul className="nav nav-tabs mt-5" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "enrolled" ? "active" : ""}`}
              onClick={() => setActiveTab("enrolled")}
            >
              Your enrolled courses
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "wishlist" ? "active" : ""}`}
              onClick={() => setActiveTab("wishlist")}
            >
              Wishlist
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "completed" ? "active" : ""}`}
              onClick={() => setActiveTab("completed")}
            >
              Completed
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Enrolled Courses Tab */}
          {activeTab === "enrolled" && (
            <div className="tab-pane fade show active">
              <div className="row mt-4">
                <div className="col-12">
                  {/* Course Card 1 */}
                  <div className="card course-card">
                    <div className="row g-0">
                      <div className="col-md-10 p-4">
                        <div className="card-body">
                          <div className="d-flex flex-column">
                            <div className="mb-2">
                              <strong>Course:</strong> UI/UX Designing
                            </div>
                            <div>
                              <strong>Current Module:</strong> Wireframing
                            </div>
                            <div className="course-meta">
                              Last accessed: 2 days ago
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "65%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 p-0">
                        <div
                          className="resume-button"
                          onClick={() => showCourseDetails("ui-ux-design")}
                        >
                          Resume
                          <div className="resume-arrow">→</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Course Card 2 */}
                  <div className="card course-card">
                    <div className="row g-0">
                      <div className="col-md-10 p-4">
                        <div className="card-body">
                          <div className="d-flex flex-column">
                            <div className="mb-2">
                              <strong>Course:</strong> Frontend Development
                            </div>
                            <div>
                              <strong>Current Module:</strong> Responsive Design
                            </div>
                            <div className="course-meta">
                              Last accessed: 5 days ago
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "32%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 p-0">
                        <div
                          className="resume-button"
                          onClick={() => showCourseDetails("frontend-dev")}
                        >
                          Resume
                          <div className="resume-arrow">→</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Wishlist Tab */}
          {activeTab === "wishlist" && (
            <div className="tab-pane fade">
              <div className="row mt-4">
                <div className="col-12">
                  {/* Wishlist Course Card 1 */}
                  <div className="card course-card">
                    <div className="row g-0">
                      <div className="col-md-10 p-4">
                        <div className="card-body">
                          <div className="d-flex flex-column">
                            <div className="mb-2">
                              <strong>Course:</strong> Advanced React Development
                            </div>
                            <div>
                              <strong>Duration:</strong> 12 weeks
                            </div>
                            <div className="course-meta">
                              Added on: February 15, 2023
                            </div>
                            <div className="course-meta">Price: $79.99</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 p-0">
                        <div
                          className="start-button"
                          onClick={() => showCourseDetails("advanced-react")}
                        >
                          Enroll
                          <div className="resume-arrow">→</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Wishlist Course Card 2 */}
                  <div className="card course-card">
                    <div className="row g-0">
                      <div className="col-md-10 p-4">
                        <div className="card-body">
                          <div className="d-flex flex-column">
                            <div className="mb-2">
                              <strong>Course:</strong> Data Analytics with Python
                            </div>
                            <div>
                              <strong>Duration:</strong> 8 weeks
                            </div>
                            <div className="course-meta">
                              Added on: January 5, 2023
                            </div>
                            <div className="course-meta">Price: $89.99</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 p-0">
                        <div
                          className="start-button"
                          onClick={() => showCourseDetails("data-analytics")}
                        >
                          Enroll
                          <div className="resume-arrow">→</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Completed Tab */}
          {activeTab === "completed" && (
            <div className="tab-pane fade">
              <div className="row mt-4">
                <div className="col-12">
                  {/* Completed Course Card 1 */}
                  <div className="card course-card">
                    <div className="row g-0">
                      <div className="col-md-10 p-4">
                        <div className="card-body">
                          <div className="d-flex flex-column">
                            <div className="mb-2">
                              <strong>Course:</strong> HTML & CSS Fundamentals
                            </div>
                            <div>
                              <strong>Completed on:</strong> December 12, 2022
                            </div>
                            <div className="course-meta">Grade: A (92%)</div>
                            <div className="progress">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 p-0">
                        <div
                          className="certificate-button"
                          onClick={() => showCourseDetails("html-css")}
                        >
                          Certificate
                          <div className="resume-arrow">→</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Completed Course Card 2 */}
                  <div className="card course-card">
                    <div className="row g-0">
                      <div className="col-md-10 p-4">
                        <div className="card-body">
                          <div className="d-flex flex-column">
                            <div className="mb-2">
                              <strong>Course:</strong> JavaScript Basics
                            </div>
                            <div>
                              <strong>Completed on:</strong> October 5, 2022
                            </div>
                            <div className="course-meta">Grade: B+ (88%)</div>
                            <div className="progress">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 p-0">
                        <div
                          className="certificate-button"
                          onClick={() => showCourseDetails("javascript-basics")}
                        >
                          Certificate
                          <div className="resume-arrow">→</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Course Details Modal */}
      <Modal
        show={showCourseModal}
        onHide={() => setShowCourseModal(false)}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedCourse?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCourse && (
            <>
              <div className="mb-4">
                <h6>Current Progress: {selectedCourse.progress}</h6>
                <div className="progress mb-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: selectedCourse.progress }}
                  ></div>
                </div>
                <p>{selectedCourse.description}</p>
              </div>
              <div>
                <h6>Course Modules:</h6>
                <ul className="list-group">
                  {selectedCourse.modules.map((module, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {module.name}
                      <span
                        className={`${
                          module.status === "completed"
                            ? "text-success"
                            : module.status === "in-progress"
                            ? "text-primary"
                            : "text-muted"
                        }`}
                      >
                        {module.status === "completed" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-check-circle-fill"
                            viewBox="0 0 16 16"
                          >
                                                       <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                                     </svg>
                                                   ) : module.status === "in-progress" ? (
                                                     <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       width="16"
                                                       height="16"
                                                       fill="currentColor"
                                                       className="bi bi-play-circle-fill"
                                                       viewBox="0 0 16 16"
                                                     >
                                                       <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                                                     </svg>
                                                   ) : (
                                                     <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       width="16"
                                                       height="16"
                                                       fill="currentColor"
                                                       className="bi bi-lock-fill"
                                                       viewBox="0 0 16 16"
                                                     >
                                                       <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                                     </svg>
                                                   )}
                                                 </span>
                                               </li>
                                             ))}
                                           </ul>
                                         </div>
                                       </>
                                     )}
                                   </Modal.Body>
                                   <Modal.Footer>
                                     <Button variant="secondary" onClick={() => setShowCourseModal(false)}>
                                       Close
                                     </Button>
                                     <Button
                                       variant="primary"
                                       onClick={() => {
                                         alert(`Redirecting to course: ${selectedCourse?.title}`);
                                         setShowCourseModal(false);
                                       }}
                                     >
                                       {selectedCourse?.currentModule === "Not Started"
                                         ? "Start Course"
                                         : selectedCourse?.currentModule === "Completed"
                                         ? "Review Course"
                                         : "Continue Course"}
                                     </Button>
                                   </Modal.Footer>
                                 </Modal>

                                 {/* Back Confirmation Modal */}
                                 <Modal
                                   show={showBackConfirmModal}
                                   onHide={() => setShowBackConfirmModal(false)}
                                 >
                                   <Modal.Header closeButton>
                                     <Modal.Title>Navigate Away</Modal.Title>
                                   </Modal.Header>
                                   <Modal.Body>
                                     Are you sure you want to go back to the dashboard? Any unsaved changes
                                     will be lost.
                                   </Modal.Body>
                                   <Modal.Footer>
                                     <Button
                                       variant="secondary"
                                       onClick={() => setShowBackConfirmModal(false)}
                                     >
                                       Cancel
                                     </Button>
                                     <Button variant="primary" onClick={navigateBack}>
                                       Yes, Go Back
                                     </Button>
                                   </Modal.Footer>
                                 </Modal>
                               </div>
                             );
                           };

                           export default Profile;