import React from 'react';

interface ContentProps {
  activeSection: string;
}

const DocumentationContent: React.FC<ContentProps> = ({ activeSection }) => {
  const content = {
    'introduction': <p>Welcome to the Chatter documentation. Here you'll find all the information you need to get started with Chatter.</p>,
    'getting-started': <p>Getting started guide for Chatter. Follow these steps to set up and start using Chatter.</p>,
    'features': <p>Overview of Chatter's features and capabilities.</p>,
    'api-reference': <p>Detailed API reference for developers integrating with Chatter.</p>,
    'faq': <p>Frequently Asked Questions about Chatter.</p>,
  };

  return (
    <div className="p-4">
      {content[activeSection]}
    </div>
  );
};

export default DocumentationContent;
