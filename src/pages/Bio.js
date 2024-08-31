import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { withTheme } from "@material-ui/styles";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TopBar from "../components/TopBar";
import LeftDrawer from "../components/LeftDrawer";
import { upcomingTimeline } from "../upcomingEvents/index.js"; // Import the timeline data

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const Bio = (props) => {
  return (
    <div>
      <LeftDrawer display={props.display} />
      <TopBar />
      <div id="main">
        <div className="inner">
          <section>
            <header className="main">
              <h1>Upcoming Events</h1>
            </header>
          </section>

          {upcomingTimeline.length === 0 ? (
            <section
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "3rem", // Adjust this if needed
                  fontWeight: "bold",
                }}
              >
                Stay tuned for updates!
              </div>
            </section>
          ) : (
            <VerticalTimeline
              layout={"2-columns"} // Use default alternating layout
              lineColor={"#000"} // Change the timeline bar to black
            >
              {upcomingTimeline.map((event, index) => (
                <VerticalTimelineElement
                  key={index}
                  date={event.date}
                  dateClassName="timeline-date"
                  iconStyle={{ 
                    background: 'rgb(33, 150, 243)', 
                    color: '#fff' 
                  }}
                  icon={event.picture ? <img src={event.picture} alt={event.title} style={{ display: 'none' }} /> : null} // Only display icon if picture exists
                  contentStyle={{ 
                    boxShadow: "none", 
                    padding: "20px", 
                    fontSize: "1.2rem", 
                    border: '1px solid #ddd',
                    backgroundColor: '#f9f9f9',
                    position: 'relative' // Ensure proper positioning for tooltip
                  }}
                  contentArrowStyle={{ 
                    borderRight: '7px solid #000' 
                  }} // Adjust arrow color and size
                >
                  <h3 
                    className="vertical-timeline-element-title" 
                    style={{ 
                      fontSize: "1.5rem", 
                      marginBottom: '10px' 
                    }}
                  >
                    {event.title}
                  </h3>
                  <h4 
                    className="vertical-timeline-element-subtitle" 
                    style={{ 
                      fontSize: "1.2rem", 
                      color: '#555', 
                      marginBottom: '10px' 
                    }}
                  >
                    {event.specfics}
                  </h4>
                  {event.picture && (
                    <img 
                      src={event.picture} 
                      alt={event.title} 
                      style={{
                        width: '100%', 
                        height: 'auto', 
                        maxWidth: '350px', // Enlarged the image size
                        borderRadius: '5px', // Apply rectangular frame
                        marginTop: '10px' // Space between title and image
                      }}
                    />
                  )}
                  {event.route && (
                    <Link to={event.route} style={{ textDecoration: 'none' }}>
                      <button 
                        style={{
                          marginTop: '10px',
                          padding: '10px 20px',
                          backgroundColor: '#007BFF',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: 'pointer',
                          fontSize: '1rem',
                          display: 'block',
                          width: '100%',
                          maxWidth: '350px'
                        }}
                      >
                        Click to find out more!
                      </button>
                    </Link>
                  )}
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(
  withTheme(compose(connect(mapStateToProps, mapDispatchToProps))(Bio))
);
