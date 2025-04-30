"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    FB: any;
  }
}

const FacebookComments = ({ url }: { url: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadFacebook = () => {
      if (window.FB) {
        window.FB.XFBML.parse(containerRef.current);

        // Fix the iframe width after FB renders it
        setTimeout(() => {
          const iframe = containerRef.current?.querySelector("iframe");
          if (iframe) {
            iframe.style.width = "100%";
            iframe.style.minWidth = "100%";
          }
        }, 1500); // wait for FB to render
      }
    };

    if (!window.FB) {
      const script = document.createElement("script");
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0";
      script.async = true;
      script.defer = true;
      script.onload = loadFacebook;
      document.body.appendChild(script);
    } else {
      loadFacebook();
    }
  }, [url]);

  return (
    <div ref={containerRef} className="w-full mt-8">
      <div id="fb-root" />
      <div
        className="fb-comments"
        data-href={url}
        data-width="100%"
        data-numposts="5"
      ></div>
    </div>
  );
};

export default FacebookComments;
