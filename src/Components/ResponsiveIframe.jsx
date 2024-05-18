import React from 'react';

const ResponsiveIframe = ({ src }) => {
  return (
    <div className="iframe-container">
      <iframe
        src={src}
        title="FIDF Live Briefing"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ResponsiveIframe;
