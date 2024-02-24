import React from 'react';

const RawTextToHtml = ({ rawText }) => {
  const formattedHtml = rawText
    .replace(/(\d+\.\s\*\*.*?\*\*.*?)(?=\d+\.\s\*\*)/g, match => {
      return `<li>${match}</li>`;
    })
    .replace(/\n/g, '<br>')
    .replace(/(\d+\.\s\*\*.*?\*\*.*?)(?=\n|$)/g, match => {
      return `<li>${match}</li>`;
    })
    .replace(/(\*\*.*?\*\*)/g, match => {
      return `<strong>${match}</strong>`;
    })
    .replace(/(\*\*\s\*.*?\*\*.*?)(?=\n|\*)/g, match => {
      return `<ul><li>${match}</li></ul>`;
    });

  return <div dangerouslySetInnerHTML={{ __html: `<ol>${formattedHtml}</ol>` }} />;
};

export default RawTextToHtml;
