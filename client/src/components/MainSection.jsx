import React from "react";
import landlord from "../assets/landlord.jpg";
import tenant from "../assets/tenant.jpg"

const MainSection = () => {
  return (
    <>
      <div className="text-center max-w-70%">
        <p className="display-5">
          {" "}
          5.9 million Tenants and Landlords
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="heart-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          PerfectMove
        </p>
      </div>
      <div className="cards">
        <div class="card mb-3 w-50">
          <div class="row g-0 align-items-center">
            <div class="col-md-4">
              <img src={landlord} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8 ">
              <div class="card-body">
                <h5 class="card-title text-center">Landlords</h5>
                <p class="card-text">
                  We find you tenants and help with referencing, contracts and
                  more if you need it. PerfectMove gives you the best possible
                  chance of finding your ideal tenant, and you stay in control.
                  <ul>
                    <li>100% Free</li>
                    <li>Advertising Option </li>
                    <li>No Hidden Fees </li>
                    <li>No Renewal Fees </li>
                    <li> No Credit Card to Get Started</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 w-50">
          <div class="row g-0 align-items-center">
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title text-center">Tenants</h5>
                <p class="card-text">
                  On PerfectMove there are never any admin fees. Ever. We take
                  down listings as soon as they are let, so no more ghost
                  adverts. And we'll protect your deposit and rent money.
                  <ul>
                  <li> No Admin Fees</li>
                   <li>No Dead Listings </li>
                   <li>Rent & Deposit Protected </li>
                   </ul>
                The safer, faster and cheaper way to rent.
                </p>
               
              </div>
            </div>
            <div class="col-md-4">
              <img src={tenant} class="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainSection;
