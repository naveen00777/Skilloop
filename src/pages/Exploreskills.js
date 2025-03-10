import React, { useState, useEffect } from 'react';
import './Exploreskills.css';
import Headerall from '../components/Headerall'
import Footer from '../components/Footer'

const Exploreskills = () => {
  // State for sidebar visibility
   const [sidebarVisible, setSidebarVisible] = useState(false);

    // State for filters
    const [filters, setFilters] = useState({
      level: [],
      price: [],
      type: []
    });

    // State for search term
    const [searchTerm, setSearchTerm] = useState('');

    // State for skills data
    const [skills, setSkills] = useState([
      {
        id: 1,
        title: "Cloud Computing",
        description: "Enhance your skills with a cloud computing course and master cloud architecture, deployment, and security.",
        level: "advanced",
        price: "paid",
        type: "technology",
        image: "/api/placeholder/400/320"
      },
      {
        id: 2,
        title: "Network Infrastructure",
        description: "Learn network design, implementation, security, and troubleshooting to build robust IT infrastructures.",
        level: "intermediate",
        price: "free",
        type: "technology",
        image: "/api/placeholder/400/320"
      },
      {
        id: 3,
        title: "Cloud Network Architecture",
        description: "Master the integration of cloud services with network infrastructure for scalable, secure enterprise solutions.",
        level: "advanced",
        price: "paid",
        type: "technology",
        image: "/api/placeholder/400/320"
      },
      {
        id: 4,
        title: "Organizational Hierarchy",
        description: "Understand organizational structures and hierarchies to improve workplace communication and efficiency.",
        level: "beginner",
        price: "free",
        type: "communication",
        image: "/api/placeholder/400/320"
      },
      {
        id: 5,
        title: "Digital Painting",
        description: "Learn digital painting techniques using professional software to create stunning digital artwork.",
        level: "intermediate",
        price: "paid",
        type: "art",
        image: "/api/placeholder/400/320"
      },
      {
        id: 6,
        title: "Public Speaking",
        description: "Develop confidence and effective public speaking techniques for presentations and speeches.",
        level: "beginner",
        price: "free",
        type: "softskills",
        image: "/api/placeholder/400/320"
      },
      {
        id: 7,
        title: "Piano Basics",
        description: "Start your musical journey with foundational piano skills, from reading music to basic playing techniques.",
        level: "beginner",
        price: "paid",
        type: "music",
        image: "/api/placeholder/400/320"
      },
      {
              id: 8,
              title: "Piano Basics",
              description: "Start your musical journey with foundational piano skills, from reading music to basic playing techniques.",
              level: "beginner",
              price: "paid",
              type: "music",
              image: "/api/placeholder/400/320"
            }
    ]);

    // State for filtered skills
    const [filteredSkills, setFilteredSkills] = useState(skills);

    // Handle checkbox change for filters
    const handleFilterChange = (e) => {
      const { name, checked, value } = e.target;
      const filterType = name;

      setFilters(prevFilters => {
        const updatedFilters = { ...prevFilters };

        if (checked) {
          updatedFilters[filterType] = [...updatedFilters[filterType], value];
        } else {
          updatedFilters[filterType] = updatedFilters[filterType].filter(item => item !== value);
        }

        return updatedFilters;
      });
    };

    // Handle search input change
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value.toLowerCase().trim());
    };

    // Reset all filters
    const resetFilters = () => {
      setFilters({ level: [], price: [], type: [] });
      setSearchTerm('');

      // Reset all checkboxes
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
      });
    };

    // Apply filters to the skills list
    useEffect(() => {
      const filtered = skills.filter(skill => {
        // Search filter
        const matchesSearch = searchTerm === '' ||
                              skill.title.toLowerCase().includes(searchTerm) ||
                              skill.description.toLowerCase().includes(searchTerm);

        // Category filters
        const matchesLevel = filters.level.length === 0 || filters.level.includes(skill.level);
        const matchesPrice = filters.price.length === 0 || filters.price.includes(skill.price);
        const matchesType = filters.type.length === 0 || filters.type.includes(skill.type);

        return matchesSearch && matchesLevel && matchesPrice && matchesType;
      });

      setFilteredSkills(filtered);
    }, [filters, searchTerm, skills]);

    // Close sidebar on window resize (for mobile)
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 992) { // Changed from 768 to 992 for better responsive breakpoint
          setSidebarVisible(false);
          resetMobileStyles();
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        resetMobileStyles();
      };
    }, []);

    // Reset mobile styles (FIXED)
    const resetMobileStyles = () => {
      document.body.classList.remove('overflow-hidden');
      const sidebar = document.querySelector('.sidebar-filters');
      if (sidebar) {
        sidebar.classList.remove('show');
      }
    };

    // Toggle sidebar visibility (FIXED)
    const toggleSidebar = () => {
      setSidebarVisible(!sidebarVisible);

      // Only manipulate body overflow, not the container itself
      if (!sidebarVisible) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    };

    // Close sidebar (FIXED)
    const closeSidebar = () => {
      setSidebarVisible(false);
      document.body.classList.remove('overflow-hidden');
    };

    return (
    <div>
    <Headerall />
      <div className="skills-explorer">
        {/* Sidebar Toggle Button (Mobile Only) */}
        <button className="sidebar-toggle d-lg-none" onClick={toggleSidebar} aria-label="Toggle filters">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16">
            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>

        {/* Sidebar Overlay (Mobile Only) */}
        {sidebarVisible && (
          <div className="sidebar-overlay d-lg-none" onClick={closeSidebar}></div>
        )}

        <div className="container-fluid py-4">
          <div className="row">
            {/* Main Heading and Search */}
            <div className="col-12 mb-4">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                <h1 className="main-heading mb-0">Explore skills</h1>
                <div className="search-box w-100 w-md-50">
                  <input
                    type="text"
                    id="searchInput"
                    className="form-control form-control-lg"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    aria-label="Search skills"
                  />
                  <span className="search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Sidebar Filters */}
            <div className="col-lg-3 mb-4 mb-lg-0">
              <div className={`sidebar-filters ${sidebarVisible ? 'show' : ''}`}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="mb-0 fs-4">Filters</h2>
                  <button className="btn btn-sm btn-outline-secondary d-lg-none" onClick={closeSidebar} aria-label="Close filters">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                  </button>
                </div>

                <div className="filter-section">
                  <div className="filter-title">Level</div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="beginner"
                      id="beginner"
                      name="level"
                      checked={filters.level.includes('beginner')}
                      onChange={handleFilterChange}
                    />
                    <label className="form-check-label" htmlFor="beginner">
                      Beginner
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="intermediate"
                      id="intermediate"
                      name="level"
                      checked={filters.level.includes('intermediate')}
                      onChange={handleFilterChange}
                    />
                    <label className="form-check-label" htmlFor="intermediate">
                      Intermediate
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="advanced"
                      id="advanced"
                      name="level"
                      checked={filters.level.includes('advanced')}
                      onChange={handleFilterChange}
                    />
                    <label className="form-check-label" htmlFor="advanced">
                      Advanced
                    </label>
                  </div>
                </div>

                <div className="filter-section">
                  <div className="filter-title">Price</div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="free"
                      id="free"
                      name="price"
                      checked={filters.price.includes('free')}
                      onChange={handleFilterChange}
                    />
                    <label className="form-check-label" htmlFor="free">
                      Free
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="paid"
                      id="paid"
                      name="price"
                      checked={filters.price.includes('paid')}
                      onChange={handleFilterChange}
                    />
                    <label className="form-check-label" htmlFor="paid">
                      Paid
                    </label>
                  </div>
                </div>

                <div className="filter-section">
                  <div className="filter-title">Type</div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="technology"
                      id="technology"
                      name="type"
                      checked={filters.type.includes('technology')}
                      onChange={handleFilterChange}
                    />
                    <label className="form-check-label" htmlFor="technology">
                      Technology
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="communication"
                      id="communication"
                      name="type"
                      checked={filters.type.includes('communication')}
                      onChange={handleFilterChange}
                    />
                    <label className="form-check-label" htmlFor="communication">
                      Communication
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="art"
                      id="art"
                      name="type"
                      checked={filters.type.includes('art')}
                      onChange={handleFilterChange}
                    />
                    <label className="form-check-label" htmlFor="art">
                      Art
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="softskills"
                      id="softskills"
                      name="type"
                      checked={filters.type.includes('softskills')}
                      onChange={handleFilterChange}
                    />
                    <label className="form-check-label" htmlFor="softskills">
                      Softskills
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="music"
                      id="music"
                      name="type"
                      checked={filters.type.includes('music')}
                      onChange={handleFilterChange}
                    />
                    <label className="form-check-label" htmlFor="music">
                      Music
                    </label>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    onClick={resetFilters}
                    className="btn btn-outline-secondary btn-sm"
                    aria-label="Reset all filters"
                  >
                    Reset All Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content - Skill Cards */}
            <div className="col-lg-9 main-content">
              {filteredSkills.length > 0 ? (
                <div className="row">
                  {filteredSkills.map(skill => (
                    <div className="col-12 mb-4" key={skill.id}>
                      <div className="card skill-card h-100">
                        <div className="row g-0 h-100">
                          <div className="col-md-4 col-lg-3">
                            <img
                              src={skill.image}
                              alt={`Illustration for ${skill.title}`}
                              className="img-fluid rounded-start h-100 object-fit-cover p-3"
                            />
                          </div>
                          <div className="col-md-8 col-lg-9">
                            <div className="card-body d-flex flex-column h-100">
                              <h5 className="card-title skill-title">{skill.title}</h5>
                              <div className="skill-info">
                                <span className={`skill-level ${skill.level}`}>
                                  {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                                </span>
                                <span className={`price-tag ${skill.price}`}>
                                  {skill.price.charAt(0).toUpperCase() + skill.price.slice(1)}
                                </span>
                                <span className="badge bg-secondary">
                                  {skill.type.charAt(0).toUpperCase() + skill.type.slice(1)}
                                </span>
                              </div>
                              <p className="card-text flex-grow-1">{skill.description}</p>
                              <a href="#" className="btn btn-primary btn-sm align-self-start mt-2">Learn More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-search text-secondary mb-3" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                  <h3>No matching skills found</h3>
                  <p className="text-muted">Try adjusting your search or filters</p>
                  <button
                    onClick={resetFilters}
                    className="btn btn-outline-primary mt-2"
                    aria-label="Clear search"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    );
  };

export default Exploreskills;