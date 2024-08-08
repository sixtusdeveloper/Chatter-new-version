import React from 'react'

const DocsFAQ = () => {
  return (
    <div>
        <div>
            <h1 className="text-2xl font-bold mb-4">FAQ</h1>
            <h2 className="text-xl font-semibold mb-2">How do I reset my password?</h2>
            <p className="mb-4">
                To reset your password, go to the login page and click on the "Forgot Password" link. Enter your registered email address to receive a password reset link. Follow the instructions in the email to create a new password.
            </p>
            <h2 className="text-xl font-semibold mb-2">Can I customize my notification settings?</h2>
            <p className="mb-4">
                Yes, you can customize your notification settings by navigating to the profile settings section. Choose which types of notifications you wish to receive and select your preferred delivery method (e.g., email, in-app notifications).
            </p>
            <h2 className="text-xl font-semibold mb-2">How do I contact support?</h2>
            <p className="mb-4">
                You can contact our support team through the contact form available on our support page. Provide detailed information about your issue or inquiry, and our team will respond to you as soon as possible. We aim to address all support requests within 24 hours.
            </p>
            <h2 className="text-xl font-semibold mb-2">What should I do if I encounter a bug or technical issue?</h2>
            <p className="mb-4">
                If you encounter a bug or technical issue, please report it through the bug report form on our support page. Include as much detail as possible, including steps to reproduce the issue and any error messages you may have received.
            </p>
            <h2 className="text-xl font-semibold mb-2">Is there a mobile app for Chatter?</h2>
            <p className="mb-4">
                Currently, Chatter is available as a web application. We are working on developing mobile applications to enhance accessibility and user experience on mobile devices. Stay tuned for updates on our mobile app release.
            </p>
            <h2 className="text-xl font-semibold mb-2">How can I provide feedback or suggest new features?</h2>
            <p className="mb-4">
                We welcome feedback and feature suggestions from our users. Use the feedback form available on our website or contact us directly through our support channels. We review all feedback and consider it for future updates.
            </p>
            <h2 className="text-xl font-semibold mb-2">Can I integrate Chatter with other applications?</h2>
            <p className="mb-4">
                Yes, Chatter provides API endpoints that allow for integration with other applications. Refer to the API Reference section for detailed information on how to use our API for integration purposes.
            </p>
            <p>
                For any additional questions or concerns, please do not hesitate to reach out to our support team.
            </p>
            </div>
    </div>
  )
}

export default DocsFAQ