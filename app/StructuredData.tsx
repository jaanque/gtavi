import React from 'react';

const StructuredData = ({ targetDate }: { targetDate: string }) => {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "GTA 6 Official Release Countdown",
    "description": "Countdown to the highly anticipated release of Grand Theft Auto VI (GTA 6). Stay updated with the latest news, leaks, and trailer information.",
    "startDate": new Date().toISOString(),
    "endDate": targetDate,
    "location": {
      "@type": "VirtualLocation",
      "url": "https://gta6countdown.com"
    },
    "image": [
      "https://gta6countdown.com/og-image.jpg"
    ],
    "performer": {
      "@type": "PerformingGroup",
      "name": "Rockstar Games"
    }
  };

  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "GTA 6: Latest News, Rumors, and Release Date Countdown",
    "image": [
      "https://gta6countdown.com/og-image.jpg"
     ],
    "datePublished": "2024-01-01T08:00:00+08:00",
    "dateModified": new Date().toISOString(),
    "author": [{
        "@type": "Person",
        "name": "Jan"
      }]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "When is GTA 6 coming out?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The official release date for Grand Theft Auto 6 has not been announced by Rockstar Games yet. Our countdown is based on the latest leaks and rumors, but is subject to change. Stay tuned for the official announcement."
      }
    },{
      "@type": "Question",
      "name": "Is the GTA 6 trailer out?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the first official trailer for Grand Theft Auto VI was released in December 2023. You can watch it on the official Rockstar Games YouTube channel. Fans are eagerly awaiting a second trailer."
      }
    },{
      "@type": "Question",
      "name": "What platforms will GTA 6 be on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GTA 6 is expected to be released on PlayStation 5 and Xbox Series X|S. A PC version will likely be released at a later date, following the pattern of previous Grand Theft Auto titles."
      }
    }]
  };


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};

export default StructuredData;
