// components/FacebookComments.tsx
"use client";

import { useEffect } from "react";

const FacebookComments = ({ url }: { url: string }) => {
  useEffect(() => {
    if (typeof window !== "undefined" && !window.FB) {
      const script = document.createElement("script");
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0";
      script.async = true;
      script.defer = true;
      script.onload = () => window.FB && window.FB.XFBML.parse();
      document.body.appendChild(script);
    } else if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="mt-6">
      <div id="fb-root"></div>
      <div className="fb-comments"
           data-href={url}
           data-width="100%"
           data-numposts="5"></div>
    </div>
  );
};

export default FacebookComments;
