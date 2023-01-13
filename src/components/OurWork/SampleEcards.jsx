import React from "react";
import "../../index.css";

const SampleEcards = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center gap-10 p-4 items-center">
      <iframe
        src="https://drive.google.com/file/d/1Jfyktb-fGqHjFDcJc4i70fxDuttQsqSb/preview"
        className="w-60 h-72 rounded-lg Neomarphism p-1"
        allow="autoplay"
        allowFullScreen
      ></iframe>
      <iframe
        src="https://drive.google.com/file/d/1Jhhj5ylDWsVuJg9dWsakduv6nIr_1tuG/preview"
        className="w-60  h-72 rounded-lg Neomarphism p-1"
        allow="autoplay"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default SampleEcards;
