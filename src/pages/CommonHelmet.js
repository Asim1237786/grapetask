import React from "react";
import { Helmet } from "react-helmet-async";

const CommonHelmet = ({ title, description, keywords, canonical }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="google-site-verification"
        content="Niq1HpCbj3_T3yC-gOlT1Otykze5gRAHmSdr9B2_olU"
      />
      <meta
        name="google-site-verification"
        content="CEZMzfWOYIXFRnu7qetOPigFCug2cGQN0QJJLA_e7wA"
      />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Grapetask.co" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />

      {/* GTM Meta Tags */}
      <meta name="gtm:layout_service" content="true" />
      <meta name="gtm:country" content="Pakistan" />
      <meta name="gtm:qualtrics_enabled" content="true" />

      {/* Favicon and Icons */}
      <link rel="icon" href="/logo.webp" />
      <link rel="apple-touch-icon" href="/logo.png" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
  );
};

export default CommonHelmet;
