import React from 'react';

interface ContentProps {
  activeSection: string;
}

const DocumentationContent: React.FC<ContentProps> = ({ activeSection }) => {
  const content: { [key: string]: JSX.Element } = {
    //==============================  Introduction Section ======================//
    'introduction': (
      <div className='max-w-3xl px-2 mx-auto md:px-0'>
        <h1 className="text-2xl md:text-4xl tracking-wide text-purple font-bold mb-4">Introduction</h1>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Welcome to the comprehensive documentation for Chatter, your premier solution for streamlined communication and
          collaboration. This guide will equip you with the necessary knowledge to fully utilize Chatter’s features, whether you
          are a new user or a seasoned developer.
        </p>
        <h2 className='text-lg md:text-xl tracking-wider text-purple font-bold'>Benefits</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Chatter offers an array of functionalities designed to enhance productivity and streamline interactions within your
          team or community. From instant messaging to file sharing and real-time notifications, Chatter is built to support
          a wide range of collaborative activities.
        </p>
        <p className="mb-4 text-md tracking-wide text-gray-200 py-2">
          In this documentation, you will find:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2 text-md text-gray-400">
            <strong className='text-gray-200 leading-7 text-md'>Getting Started:</strong> Step-by-step instructions on setting up your Chatter account and initial
            configurations.
          </li>
          <li className="mb-2 text-md text-gray-400">
            <strong className='text-gray-200 leading-7 text-md'>Features:</strong> A detailed overview of Chatter's core features and their functionalities.
          </li>
          <li className="mb-2 text-md text-gray-400">
            <strong className='text-gray-200 leading-7 text-md'>API Reference:</strong> Comprehensive details on Chatter’s API endpoints, including usage examples and
            integration tips.
          </li>
          <li className="mb-2 text-md text-gray-400">
            <strong className='text-gray-200 leading-7 text-md'>FAQ:</strong> Answers to common questions and solutions to frequently encountered issues.
          </li>
          <li className="mb-2 text-md text-gray-400">
            <strong className='text-gray-200 leading-7 text-md'>Best Practices:</strong> Recommended practices for maximizing the effectiveness of Chatter in your
            organization.
          </li>
          <li className="mb-2 text-md text-gray-400">
            <strong className='text-gray-200 leading-7 text-md'>Release Notes:</strong> Information about recent updates, bug fixes, and new features.
          </li>
        </ul>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-2">
          We encourage you to explore each section to get a thorough understanding of Chatter’s capabilities and how to make the
          most out of the platform.
        </p>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400">
          If you have any questions or require further assistance, don’t hesitate to contact our support team or consult the
          community forums where you can find additional resources and engage with other Chatter users.
        </p>
      </div>
    ),

    //===========================  Getting Started Section ====================//
    'getting-started': (
      <div className='max-w-3xl px-2 mx-auto md:px-0'>
        <h1 className="text-2xl md:text-4xl tracking-wider text-purple font-bold mb-4">Getting Started</h1>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Follow this guide to set up your Chatter account and start leveraging the platform’s features. This section covers
          the initial setup process, from account creation to profile configuration.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">1. Create Your Account</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Visit the registration page and provide your email address, choose a secure password, and fill in other required
          details. After submitting the form, you will receive a verification email.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">2. Email Verification</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Open the verification email and click on the provided link to confirm your email address. This step is crucial for
          activating your account and ensuring secure access.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">3. Log In to Chatter</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Use your email and password to log in. If you encounter any issues with login, use the "Forgot Password" option to
          reset your password.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">4. Configure Your Profile</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Access your profile settings to personalize your account. Upload a profile picture, update your biography, and
          adjust your privacy settings according to your preferences.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">5. Explore Chatter</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Familiarize yourself with Chatter&apos;s user interface and features. Explore messaging options, file sharing capabilities,
          and other tools to get the most out of your experience.
        </p>
        <p className='mb-4 text-md tracking-wide leading-7 text-gray-400 py-4'>
          For further assistance, refer to our support documentation or reach out to our customer support team.
        </p>
      </div>
    ),

    //==========================  Features Section =========================//
    'features': (
      <div className='max-w-3xl px-2 mx-auto md:px-0'>
        <h1 className="text-2xl md:text-4xl tracking-wider text-purple font-bold mb-4">Features</h1>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Chatter offers a rich array of features designed to enhance communication, collaboration, and productivity. Below is
          a detailed description of the key features available on the platform:
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">1. Real-time Messaging</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Engage in real-time conversations with individuals or groups. The messaging system supports text messages, emojis,
          and file attachments, making communication swift and effective.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">2. File Sharing and Management</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Share and manage files with ease. Chatter supports various file types and sizes, allowing you to upload, download,
          and organize documents, images, and more.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">3. Customizable Notifications</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Stay informed with customizable notifications. Set preferences for different types of alerts, including message
          notifications, activity updates, and system alerts, delivered through your preferred channels.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">4. Enhanced User Profiles</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Personalize your profile with customizable settings. Update your profile picture, display name, and personal details,
          and manage your privacy settings to control who can view your information.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">5. Detailed Analytics</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Access powerful analytics tools to track engagement, performance, and usage metrics. Generate detailed reports to gain
          insights into your interactions and optimize your communication strategies.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">6. API Integration</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Integrate Chatter with external applications using our API. The API provides endpoints for messaging, file management,
          user management, and more, enabling seamless integration with your existing systems.
        </p>
        <p className='mb-4 text-md tracking-wide leading-7 text-gray-400 py-4'>
          For a complete list of features and their functionalities, please refer to the detailed descriptions in this section.
        </p>
      </div>
    ),

    //===========================  API Reference Section ======================//
    'api-reference': (
      <div className='max-w-3xl px-2 mx-auto md:px-0'>
        <h1 className="text-2xl md:text-4xl tracking-wider text-purple font-bold mb-4">API Reference</h1>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          The Chatter API enables developers to integrate and interact with Chatter’s functionalities programmatically. Below is
          a summary of the available API endpoints and their usage.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">Authentication Endpoints</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          <strong className="text-gray-200 leading-7 text-md">POST /api/auth/login:</strong> Authenticates a user and provides a JWT token. Required fields: email, password.
        </p>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          <strong className="text-gray-200 leading-7 text-md">POST /api/auth/logout:</strong> Logs out a user and invalidates the JWT token. No additional parameters required.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">Messaging Endpoints</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          <strong className="text-gray-200 leading-7 text-md">GET /api/messages:</strong> Retrieves a list of messages for the authenticated user. Supports query parameters
          for pagination and filtering by date and sender.
        </p>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          <strong className="text-gray-200 leading-7 text-md">POST /api/messages/send:</strong> Sends a new message to a recipient. Required fields: recipient ID, message content.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">User Management Endpoints</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          <strong className="text-gray-200 leading-7 text-md">GET /api/users:</strong> Retrieves a list of users with optional filtering and pagination.
        </p>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          <strong className="text-gray-200 leading-7 text-md">PUT /api/users/update:</strong> Updates user information. Required fields: user ID, fields to be updated.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">File Management Endpoints</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          <strong className="text-gray-200 leading-7 text-md">POST /api/files/upload:</strong> Uploads a new file. Required fields: file data, metadata (optional).
        </p>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          <strong className="text-gray-200 leading-7 text-md">GET /api/files:</strong> Retrieves a list of files. Supports query parameters for filtering and pagination.
        </p>
        <p className='mb-4 text-md tracking-wide leading-7 text-gray-400 py-4'>
          For detailed information on each endpoint, including request and response examples, please refer to the API documentation
          provided in this section.
        </p>
      </div>
    ),
    //===================== FAQ Section ==========================//
    'faq': (
      <div className='max-w-3xl px-2 mx-auto md:px-0'>
        <h1 className="text-2xl md:text-4xl tracking-wider text-purple font-bold mb-4">FAQ</h1>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">How do I reset my password?</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          To reset your password, go to the login page and click on the "Forgot Password" link. Enter your registered email
          address to receive a password reset link. Follow the instructions in the email to create a new password.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">Can I customize my notification settings?</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Yes, you can customize your notification settings by navigating to the profile settings section. Choose which types
          of notifications you wish to receive and select your preferred delivery method (e.g., email, in-app notifications).
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">How do I contact support?</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          You can contact our support team through the contact form available on our support page. Provide detailed
          information about your issue or inquiry, and our team will respond to you as soon as possible. We aim to address
          all support requests within 24 hours.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">What should I do if I encounter a bug or technical issue?</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          If you encounter a bug or technical issue, please report it through the bug report form on our support page. Include
          as much detail as possible, including steps to reproduce the issue and any error messages you may have received.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">Is there a mobile app for Chatter?</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Currently, Chatter is available as a web application. We are working on developing mobile applications to enhance
          accessibility and user experience on mobile devices. Stay tuned for updates on our mobile app release.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">How can I provide feedback or suggest new features?</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          We welcome feedback and feature suggestions from our users. Use the feedback form available on our website or contact
          us directly through our support channels. We review all feedback and consider it for future updates.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">Can I integrate Chatter with other applications?</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Yes, Chatter provides API endpoints that allow for integration with other applications. Refer to the API Reference section
          for detailed information on how to use our API for integration purposes.
        </p>
        <p className='mb-4 text-md tracking-wide leading-7 text-gray-400 py-4'>
          For any additional questions or concerns, please do not hesitate to reach out to our support team.
        </p>
      </div>
    ),

    //=========================  Best Practices Section =====================//
    'best-practices': (
      <div className='max-w-3xl px-2 mx-auto md:px-0'>
        <h1 className="text-2xl md:text-4xl tracking-wider text-purple font-bold mb-4">Best Practices</h1>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          To ensure you make the most out of Chatter, we recommend following these best practices. These guidelines will help
          you optimize your usage of the platform and maintain a productive environment.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">1. Keep Your Profile Updated</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Regularly update your profile information to reflect your current role and responsibilities. This helps in maintaining
          accurate and relevant communication within your team.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">2. Organize Your Channels</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Create and manage channels effectively to keep conversations organized. Use descriptive names for channels and set
          appropriate access permissions to ensure relevant members are included.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">3. Leverage Notifications Wisely</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Customize your notification settings to avoid information overload. Prioritize notifications that are essential to your
          tasks and activities, and mute or disable notifications that are less relevant.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">4. Use File Management Features</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Utilize Chatter’s file management features to store and share important documents. Regularly organize files into
          folders and ensure that they are properly tagged for easy retrieval.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">5. Secure Your Account</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Enable two-factor authentication (2FA) to add an extra layer of security to your account. Regularly update your
          password and review your security settings to protect your data.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">6. Engage with the Community</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Participate in the Chatter community forums and user groups. Engaging with other users can provide valuable insights,
          solutions to common issues, and suggestions for improvements.
        </p>
      </div>
    ),

    //======================  Release Note Section =======================//
    'release-notes': (
      <div className='max-w-3xl px-2 mx-auto md:px-0'>
        <h1 className="text-2xl md:text-4xl tracking-wider text-purple font-bold mb-4">Release Notes</h1>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          Stay informed about the latest updates and improvements to Chatter. This section provides information about recent
          releases, including new features, bug fixes, and performance enhancements.
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">Version 1.0.0</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          <strong className="text-gray-200 leading-7 text-md">Release Date:</strong> August 8, 2024
        </p>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          <strong className="text-gray-200 leading-7 text-md">New Features:</strong>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2 text-md text-gray-400">Real-time messaging with support for multimedia attachments.</li>
            <li className="mb-2 text-md text-gray-400">File management system with folder organization and search functionality.</li>
            <li className="mb-2 text-md text-gray-400">Customizable notification settings for different types of alerts.</li>
          </ul>
          <strong className="text-gray-200 leading-7 text-md">Bug Fixes:</strong>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2 text-md text-gray-400">Resolved issues with login and authentication flow.</li>
            <li className="mb-2 text-md text-gray-400">Fixed bugs related to file upload and download errors.</li>
          </ul>
          <strong className="text-gray-200 leading-7 text-md">Performance Enhancements:</strong>
          <ul className="list-disc list-inside">
            <li className="mb-2 text-md text-gray-400">Improved message delivery speed and reliability.</li>
            <li className="mb-2 text-md text-gray-400">Optimized file storage and retrieval processes.</li>
          </ul>
        </p>
        <h2 className="text-lg md:text-xl tracking-wider text-purple font-bold">Version 1.1.0</h2>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          <strong className="text-gray-200 leading-7 text-md">Release Date:</strong> September 5, 2024
        </p>
        <p className="mb-4 text-md tracking-wide leading-7 text-gray-400 py-4">
          <strong className="text-gray-200 leading-7 text-md">New Features:</strong>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2 text-md text-gray-400">Enhanced analytics dashboard with customizable reports.</li>
            <li className="mb-2 text-md text-gray-400">Integration with third-party applications via updated API endpoints.</li>
          </ul>
          <strong className="text-gray-200 leading-7 text-md">Bug Fixes:</strong>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2 text-md text-gray-400">Resolved issues with user profile updates and settings synchronization.</li>
            <li className="mb-2 text-md text-gray-400">Fixed minor bugs affecting file sharing permissions.</li>
          </ul>
          <strong className="text-gray-200 leading-7 text-md">Performance Enhancements:</strong>
          <ul className="list-disc list-inside">
            <li className="mb-2 text-md text-gray-400">Optimized backend processes for faster data retrieval.</li>
            <li className="mb-2 text-md text-gray-400">Improved user interface responsiveness on mobile devices.</li>
          </ul>
        </p>
      </div>
    ),
  };

  return (
    <div className="documentation-content pt-10 p-4 max-h-screen overflow-y-auto">
      {content[activeSection]}
    </div>
  );
};

export default DocumentationContent;
