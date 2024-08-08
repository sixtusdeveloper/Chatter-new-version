import React from 'react'

const DocsReleaseNotes = () => {
  return (
    <div>
        <div>
            <h1 className="text-2xl font-bold mb-4">Release Notes</h1>
            <p className="mb-4">
                Stay updated with the latest changes and improvements in Chatter. Below are the details of recent updates:
            </p>
            <h2 className="text-xl font-semibold mb-2">Version 1.2.0 (August 2024)</h2>
            <p className="mb-4">
                <strong>New Features:</strong>
                <ul className="list-disc list-inside mb-4">
                <li className="mb-2">Enhanced file sharing capabilities with support for larger files.</li>
                <li className="mb-2">New customizable dashboard for a personalized user experience.</li>
                </ul>
                <strong>Bug Fixes:</strong>
                <ul className="list-disc list-inside mb-4">
                <li className="mb-2">Resolved issue with message notifications not being delivered on time.</li>
                <li className="mb-2">Fixed bug causing incorrect file size display in file management.</li>
                </ul>
                <strong>Performance Improvements:</strong>
                <ul className="list-disc list-inside mb-4">
                <li className="mb-2">Optimized search functionality for faster results.</li>
                <li className="mb-2">Improved overall application responsiveness and stability.</li>
                </ul>
            </p>
            <h2 className="text-xl font-semibold mb-2">Version 1.1.0 (June 2024)</h2>
            <p className="mb-4">
                <strong>New Features:</strong>
                <ul className="list-disc list-inside mb-4">
                <li className="mb-2">Introduced new collaboration tools including real-time editing and commenting.</li>
                <li className="mb-2">Added support for integration with third-party calendar applications.</li>
                </ul>
                <strong>Bug Fixes:</strong>
                <ul className="list-disc list-inside mb-4">
                <li className="mb-2">Fixed issue with login process on mobile devices.</li>
                <li className="mb-2">Resolved problem with file upload errors in certain scenarios.</li>
                </ul>
                <strong>Performance Improvements:</strong>
                <ul className="list-disc list-inside mb-4">
                <li className="mb-2">Enhanced application loading speed.</li>
                <li className="mb-2">Optimized database queries for better performance.</li>
                </ul>
            </p>
            <p>
                For a complete list of changes and updates, please refer to our release history documentation.
            </p>
        </div>
    </div>
  )
}

export default DocsReleaseNotes