import React from 'react'

const DocsAPIReference = () => {
  return (
    <div>
        <div>
            <h1 className="text-2xl font-bold mb-4">API Reference</h1>
            <p className="mb-4">
                Chatter provides a comprehensive API for developers to integrate with the platform. Here are some key endpoints:
            </p>
            <h2 className="text-xl font-semibold mb-2">Authentication</h2>
            <p className="mb-4">
                <strong>POST /api/auth/login:</strong> Authenticates a user and returns a token. Required fields: username, password.
            </p>
            <h2 className="text-xl font-semibold mb-2">Messages</h2>
            <p className="mb-4">
                <strong>GET /api/messages:</strong> Retrieves a list of messages. Supports query parameters for filtering and pagination.
            </p>
            <h2 className="text-xl font-semibold mb-2">Files</h2>
            <p className="mb-4">
                <strong>POST /api/files/upload:</strong> Uploads a new file. Required fields: file data, metadata (optional).
            </p>
            <p className="mb-4">
                <strong>GET /api/files:</strong> Retrieves a list of files. Supports query parameters for filtering and pagination.
            </p>
            <p>
                For detailed information on each endpoint, including request and response examples, please refer to the API documentation provided in this section.
            </p>
        </div>
    </div>
  )
}

export default DocsAPIReference