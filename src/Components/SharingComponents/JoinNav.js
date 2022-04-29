import React from "react";
import { Link } from "react-router-dom";
import caduceus from "../cad.png";

const JoinNav = (props) => {
  return (
    <>
      <nav className={`px-16 ${props.bg}`}>
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex">
            <span className="self-center text-xl font-semibold whitespace-nowrap mr-3">
            <Link to="/" className="text-4xl text-slate-900 font-semibold px-auto font-raleway">
                  e-<span className="text-primary_text">Care</span>
                </Link>
            </span>
            <img src={caduceus} alt=""/>

          </div>
          <div className=" block w-auto">
            <ul className="flex flex-row space-x-8 mt-0 text-sm font-medium">
              <li>
                <Link to="/features"
                  className="block pt-3 px-1 text-primary_text/75  no-underline hover:underline font-raleway "
                >
                  Features
                </Link>
              </li>
              <li>
                <Link to="/volunteer"
                  className="block pt-3 px-1 text-primary_text/75  no-underline hover:underline font-raleway "
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link to="/about"
                  className="block pt-3 px-1 text-primary_text/75  no-underline hover:underline font-raleway "
                >
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact"
                  className="block pt-3 px-1 text-primary_text/75  no-underline hover:underline font-raleway "
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/signIn"
                  href="/"
                  className="block pt-2 pl-4 text-primary_text  no-underline hover:underline decoration-2 font-raleway font-semibold text-lg"
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default JoinNav;
