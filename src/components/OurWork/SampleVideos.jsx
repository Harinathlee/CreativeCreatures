import React from "react";
import "../../index.css";

const SampleVideos = () => {
  return (

      <div className="flex lg:flex-row flex-col justify-center gap-10 p-4">
        <iframe
          src="https://drive.google.com/file/d/1Jmhe-pCoEQ1RtQ9B3vz3QMQrwB-jt1GO/preview"
          className="w-80 h-60 rounded-lg Neomarphism p-1"
          allow="autoplay"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://drive.google.com/file/d/1JkByMy_t2_nKiTpRGTLCI67jOkGljxQm/preview"
          className="w-80 h-60 rounded-lg Neomarphism p-1"
          allow="autoplay"
          allowFullScreen
        ></iframe>
      </div>
   
  );
};

export default SampleVideos;
