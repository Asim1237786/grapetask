// src/components/CommonHelmet.js
import React from "react";

const CommonHelmet = ({ title, name, content, keywords, canonical }) => {
  return (
    <head>
      {/* Dynamic Title */}
      <title>{title}</title>

      {/* Meta Description */}
      <meta name={name} content={content} />

      {/* Meta Keywords */}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical Link */}
      {canonical && <link rel="canonical" href={canonical} />}
    </head>
  );
};

export default CommonHelmet;
