import React from 'react';

interface SchemaMarkupProps {
  brideFullName: string;
  groomFullName: string;
  eventDate: string;
  eventStartTime: string;
  eventEndTime: string;
  eventLocation: string;
  eventAddress: string;
  eventDescription: string;
  eventImage: string;
  websiteUrl: string;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({
  brideFullName,
  groomFullName,
  eventDate,
  eventStartTime,
  eventEndTime,
  eventLocation,
  eventAddress,
  eventDescription,
  eventImage,
  websiteUrl,
}) => {
  const weddingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    'name': `Wedding of ${groomFullName} and ${brideFullName}`,
    'startDate': `${eventDate}T${eventStartTime}`,
    'endDate': `${eventDate}T${eventEndTime}`,
    'description': eventDescription,
    'image': eventImage,
    'url': websiteUrl,
    'location': {
      '@type': 'Place',
      'name': eventLocation,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': eventAddress
      }
    },
    'performer': [
      {
        '@type': 'Person',
        'name': groomFullName,
        'url': websiteUrl
      },
      {
        '@type': 'Person',
        'name': brideFullName,
        'url': websiteUrl
      }
    ],
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'IDR',
      'availability': 'https://schema.org/InStock',
      'url': websiteUrl,
      'validFrom': eventDate
    },
    'eventStatus': 'https://schema.org/EventScheduled',
    'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode'
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(weddingSchema) }}
    />
  );
};

export default SchemaMarkup;