export const checkProfileStatus = async (userId: string) => {
    try {
      const response = await fetch(`/api/profile-status?userId=${userId}`, {
        method: 'GET',
      });
  
      // Log the response to see what it contains
      const textResponse = await response.text();
      console.log('Raw response:', textResponse);
  
      // Attempt to parse it as JSON
      const jsonResponse = JSON.parse(textResponse);
  
      if (!response.ok) {
        throw new Error(jsonResponse.message || 'Failed to check profile status');
      }
  
      return jsonResponse.hasProfile; // Adjust based on the actual response structure
    } catch (error) {
      console.error('Error checking profile status:', error);
      throw error; // Re-throw the error after logging it
    }
  };
  