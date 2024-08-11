export async function FetchUserData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch user data:', error);
      throw error; // Re-throw the error to be handled by the calling code
    }
  }