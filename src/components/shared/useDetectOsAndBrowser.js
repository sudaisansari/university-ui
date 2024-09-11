import React, { useEffect } from "react";

const useDetectOsAndBrowser = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
    const isMacOrIPhone = /Macintosh|Mac OS X|iPhone/.test(userAgent);

    if (isSafari && isMacOrIPhone) {
      document.body.classList.add("SafariMac");
    }
  }, []);
};

export default useDetectOsAndBrowser;
