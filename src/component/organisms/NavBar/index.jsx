import React from "react";
import { Link } from "react-router-dom";
import { Button, Text } from "../../atoms";

export const NavBar = () => {
  return (
    <nav>
      <div>
        <Text type="h2" className="compy-logo">
          Company logo
        </Text>
      </div>
      <div className="rite-nav">
        <div>
          <ul className="md-nav">
            <li>
              <Link className="link-btn" to="play">
                Play
              </Link>
            </li>
            <li>
              <Link className="link-btn" to="livegames">
                Live games
              </Link>
            </li>
            <li>
              <Link className="link-btn" to="/puzzles">
                Puzzles
              </Link>
            </li>
            <li>
              <Link className="link-btn" to="/news">
                News
              </Link>
            </li>
            <li className="srch-btn">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.75 0.5C17.96 0.5 23 5.54 23 11.75C23 17.96 17.96 23 11.75 23C5.54 23 0.5 17.96 0.5 11.75C0.5 5.54 5.54 0.5 11.75 0.5ZM11.75 20.5C16.5837 20.5 20.5 16.5837 20.5 11.75C20.5 6.915 16.5837 3 11.75 3C6.915 3 3 6.915 3 11.75C3 16.5837 6.915 20.5 11.75 20.5ZM22.3563 20.5887L25.8925 24.1238L24.1238 25.8925L20.5887 22.3563L22.3563 20.5887Z"
                  fill="#CBAF85"
                />
              </svg>
            </li>
          </ul>
        </div>
        <div>
          <Button className="nav-btn bwn-btn" children="Sign up" />
          <Button className="nav-btn blk-btn" children="Sign in" />
        </div>
      </div>
    </nav>
  );
};
