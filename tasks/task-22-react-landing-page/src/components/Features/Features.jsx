import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="features">
      <div className="box first">
        <div className="first-content">
          <i class="ri-landscape-fill court"></i>

          <h3>
            <span>Professional hard courts</span> with tournament-grade lighting
            & climate control - play in{" "}
            <span>perfect conditions, in any season.</span>
          </h3>

          <div className="mode">
            <i class="ri-checkbox-blank-circle-fill"></i>
            <label htmlFor="game-toggle">Game Mode</label>
          </div>
        </div>
      </div>

      <div className="box second">
        <div className="lesson">
          <h4>Private & Group Lessons</h4>
        </div>
      </div>

      <div className="box third">
        <div className="third-content">
          <div className="info">
            <h3>100+</h3>
            <p>Pro Coaches</p>
            <p className="description">
              Certified professionals ready to boost your
              <br />
              game from first serve to tournament level.
            </p>
          </div>

          <ul class="levels">
            <li>
              <span class="level">Beginner</span>
              <div class="dots">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span class="count">55</span>
            </li>

            <li>
              <span class="level">Intermediate</span>
              <div class="dots">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span class="count">40</span>
            </li>

            <li>
              <span class="level">Advanced</span>
              <div class="dots">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span class="count">35</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
