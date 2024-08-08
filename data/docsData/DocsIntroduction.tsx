import React from 'react'

const DocsIntroduction = () => {
  return (
    <div>
        <div>
            <h1 className="text-2xl font-bold mb-4">Introduction to Chatter</h1>
            <p className="mb-4">
                Welcome to the Chatter documentation. Chatter is a powerful platform designed to enhance team collaboration and communication. This documentation will guide you through the various features and functionalities of Chatter, helping you to get started and make the most of the platform.
            </p>
            <p className="mb-4">
                <strong>Key Features:</strong>
                <ul className="list-disc list-inside mb-4">
                <li className="mb-2">Real-time messaging with support for multimedia attachments.</li>
                <li className="mb-2">Robust file management system with folder organization.</li>
                <li className="mb-2">Customizable notification settings to keep you informed.</li>
                <li className="mb-2">Advanced search functionality for finding messages and files quickly.</li>
                <li className="mb-2">Integration with third-party applications for enhanced functionality.</li>
                </ul>
            </p>
            <p className="mb-4">
                This guide will help you navigate through the setup process, explore key features, and troubleshoot common issues. For any additional support, feel free to reach out to our support team.
            </p>
        </div>
    </div>
  )
}

export default DocsIntroduction