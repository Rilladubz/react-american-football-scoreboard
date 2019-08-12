import React from 'react';



export default function buttons (props){

  const handleHomeScore = e => {
    e.preventDefault();
    props.setHomeScoreprops(props.homeScoreprops + 6);
  }

  const handleHomeFieldGoal = e => {
    e.preventDefault();
    props.setHomeScoreprops(props.homeScoreprops + 1);
  }
  
  const handleAwayScore = e => {
    e.preventDefault();
    props.setAwayScoreprops(props.awayScoreprops + 6);
  }

  const handleAwayFieldGoal = e => {
    e.preventDefault();
    props.setAwayScoreprops(props.awayScoreprops + 1);
  }
  

  return (
    <div>
        <section className="buttons">
            <div className="homeButtons">
              {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
              {/* <button onClick={() => props.setHomeScoreprops(props.homeScoreprops + 6)} className="homeButtons__touchdown">Home Touchdown</button>
              <button onClick={() => props.setHomeScoreprops(props.homeScoreprops + 1)} className="homeButtons__fieldGoal">Home Field Goal</button> */}

              <button onClick={handleHomeScore} className="homeButtons__touchdown">Home Touchdown</button>
              <button onClick={handleHomeFieldGoal} className="homeButtons__fieldGoal">Home Field Goal</button>
            </div>
            <div className="awayButtons">
              {/* <button onClick={() => props.setAwayScoreprops(props.awayScoreprops + 6)} className="awayButtons__touchdown">Away Touchdown</button>
              <button onClick={() => props.setAwayScoreprops(props.awayScoreprops + 1)}className="awayButtons__fieldGoal">Away Field Goal</button> */}

              <button onClick={handleAwayScore} className="homeButtons__touchdown">Home Touchdown</button>
              <button onClick={handleAwayFieldGoal} className="homeButtons__fieldGoal">Home Field Goal</button>
            </div>
          </section>
    </div>
 );
};

