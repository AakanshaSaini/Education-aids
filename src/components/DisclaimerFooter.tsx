import React from "react";

const DisclaimerFooter: React.FC = () => (
  <footer
    style={{
      width: "100%",
      padding: "1.5rem 0.5rem 0.5rem 0.5rem",
      background: "none",
      textAlign: "center",
      marginTop: "auto",
    }}
  >
    <p
      style={{
        fontSize: "0.85rem",
        color: "#888",
        lineHeight: 1.5,
        maxWidth: 700,
        margin: "0 auto",
        fontWeight: 400,
        letterSpacing: "0.01em",
      }}
    >
      The information provided on this website is for general informational purposes only. Educational aids assumes no responsibility for errors or omissions in the content, or for any actions taken based on the information provided on this site. Links to external websites are provided for convenience and do not imply endorsement. Educational aids is not responsible for the accuracy, reliability, or content of third-party websites. Use of this website is at your own risk, and Educational aids is not liable for any damages arising from its use.
    </p>
  </footer>
);

export default DisclaimerFooter;
