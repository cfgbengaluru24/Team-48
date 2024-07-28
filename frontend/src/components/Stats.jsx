import React from 'react';
import 'tailwindcss/tailwind.css';
import "./Stats.css";


const Statistics = () => {
  return (
   <div id="page">
    <div class="navbar">
    </div>
    <div class="statbox">Statistics
        <div id="quote">
            “Facts are stubborn things, but statistics are pliable.” - Mark Twain
        </div>
    </div>
  
    <div class="statbox" style={{color:"#E6293C"}}>
        <div class="number">169</div>
              <div class="type" style={{ color: "#F26F7D" }}>Colleges and 20 Volunteers
                  <div class="details" style={{ color: "#E6293C" }}>Which means each volunteer covers about 8-9 colleges</div>
        </div>
    </div>
          <div class="statbox" style={{ color: "#F4733D" }}>
        <div class="number">500</div>
              <div class="type" style={{ color: "#FAB669" }}>Total capacity to teach
                  <div class="details" style={{ color: "#F4733D" }}>Yet less than 100 girls have enrolled till now </div>
        </div>
    </div>
          <div class="statbox" style={{ color: "#F1F73E" }}>
        <div class="number">200</div>
              <div class="type" style={{ color: "#F4F799" }}>Ruppees
                  <div class="details" style={{ color: "#F1F73E" }}>Made a young girl drop out of the program</div>
        </div>
    </div>
          <div class="statbox" style={{ color: "#A4E838" }}>
        <div class="number">16.6</div>
              <div class="type" style={{ color: "#C6F27E" }}>Percent
                  <div class="details" style={{ color: "#A4E838" }}>of girls are married underage in Andhra Pradesh</div>
        </div>
    </div>
          <div class="statbox" style={{ color: "#42C91C" }}>
        <div class="number">72</div>
              <div class="type" style={{ color: "#8AF26D" }}>hours
                  <div class="details" style={{ color: "#42C91C" }}>Time taken by each recruiter in a college</div>
        </div>
    </div>
          <div class="statbox" style={{ color: "#2A8DDE" }}>
        <div class="number">09</div>
              <div class="type" style={{ color: "#7CBDF2" }}>Weeks 
                  <div class="details" style={{ color: "#2A8DDE" }}>Time taken to cover the colleges</div>
        </div>
    </div>
    <div class="statbox">
        </div>
    </div>
  );
};

export default Statistics;
