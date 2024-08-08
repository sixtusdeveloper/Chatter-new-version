'use client';

import React, { useState } from 'react';
import DocumentationSidebar from '../../components/DocsSidebar';
import DocumentationContent from '../../components/DocsContent';
import Image from 'next/image';
import '../styles/documentation.css';

const DocumentationPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setSidebarOpen(false); // Close sidebar on mobile after selecting a section
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="documentation-page flex">
      <div className={`sidebar ${sidebarOpen ? 'show' : ''}`}>
        <div className="sidebar-header flex items-center justify-between p-4 bg-black-300">
          <a href="/" className="flex items-center">
            <span className="sr-only">Chatter</span>
            <Image
              alt="Chatter"
              src="/img/logo-black.png"
              className="h-16 w-auto"
              width={100}
              height={100}
              priority={true}
            />
          </a>
          <button onClick={toggleSidebar} className="text-white lg:hidden">
            {sidebarOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <DocumentationSidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
      </div>
      <div className="flex-1 ml-0 lg:ml-64">
        <DocumentationContent activeSection={activeSection} />
      </div>
    </div>
  );
};

export default DocumentationPage;
