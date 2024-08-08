import React from 'react'

const DocsFeatures = () => {
  return (
    <div>
        <div>
            <h1 className="text-2xl font-bold mb-4">Features</h1>
            <p className="mb-4">
                Chatter offers a range of features designed to improve team productivity and communication:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li className="mb-2"><strong>Real-time Messaging:</strong> Communicate instantly with team members using text, images, and videos.</li>
                <li className="mb-2"><strong>File Management:</strong> Upload, organize, and share files easily. Utilize folder structures and tagging for better organization.</li>
                <li className="mb-2"><strong>Custom Notifications:</strong> Set up personalized notification preferences to stay informed about important updates.</li>
                <li className="mb-2"><strong>Search Functionality:</strong> Quickly locate messages and files using advanced search features.</li>
                <li className="mb-2"><strong>Integrations:</strong> Connect Chatter with other applications to enhance your workflow.</li>
            </ul>
        </div>
    </div>
  )
}

export default DocsFeatures