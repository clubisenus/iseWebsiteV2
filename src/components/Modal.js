return (            //This is the sample HTML code for the Modal for upcoming events
  <div
    className="mini-posts"
    onMouseEnter={this.handleMouseEnter} // Start animation on hover
    onMouseLeave={this.handleMouseLeave} // Stop animation when hover ends
    onClick={this.handleLottieClick} // Open modal on click
    style={{ cursor: "pointer" }}
  >
    <Lottie
      lottieRef={this.animationRef} // Ref to control the Lottie animation
      animationData={animation}
      loop
      autoplay={false} // Prevent autoplay
      style={{ width: "100%", height: "auto" }}
    />
  </div>
);
