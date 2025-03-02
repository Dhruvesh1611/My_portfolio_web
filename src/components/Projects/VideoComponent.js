import React, { useEffect, useRef } from "react";

function VideoComponent() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);

    script.onload = () => {
      window.onYouTubeIframeAPIReady = () => {
        new window.YT.Player(iframeRef.current, {
          events: {
            onReady: (event) => event.target.playVideo(),
          },
        });
      };
    };

    return () => {
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <iframe
        ref={iframeRef}
        id="youtube-player"
        width="100%"
        height="600"
        src="https://www.youtube.com/embed/OAvjmlRpBAA?autoplay=1&controls=1&loop=1&playlist=OAvjmlRpBAA&enablejsapi=1"
        title="Shyara Gold Demo"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoComponent;
