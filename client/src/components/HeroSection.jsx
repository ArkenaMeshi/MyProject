import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-section position-relative">
      <div className="header container d-flex align-items-center flex-column">
        <h2><em>Renting the way it should be</em></h2>
        <p className="py-2">
        The destination for finding, advertising, and managing rental property
        </p>
        <div className="input-group mb-3 w-50">
          <span className="input-group-text location-radius">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="svg-icons"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
          />
          <span className="input-group-text search-radius">
            <button type="button" className="btn search-button">
              Search
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="search-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
