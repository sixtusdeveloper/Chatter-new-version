import React from 'react'

const DocsGettingStarted = () => {
  return (
    <div>
        <div>
            <h1 className="text-2xl font-bold mb-4">Getting Started</h1>
            <p className="mb-4">
                To get started with Chatter, follow these steps:
            </p>
            <ol className="list-decimal list-inside mb-4">
                <li className="mb-2">Sign up for a Chatter account.</li>
                <li className="mb-2">Complete the onboarding tutorial to familiarize yourself with the platform.</li>
                <li className="mb-2">Set up your profile and customize your notification settings.</li>
                <li className="mb-2">Create channels and invite team members to start collaborating.</li>
                <li className="mb-2">Explore the file management system and upload your documents.</li>
            </ol>
            <p>
                For detailed setup instructions, refer to the specific sections of this documentation.
            </p>
        </div>
    </div>
  )
}

export default DocsGettingStarted