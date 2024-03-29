import axios from "axios"
export const checkAuth = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/users/auth/check", {
        withCredentials: true
      });
      console.log(response.data); // Debugging line to check the response
      return response.data; // Data the server sent back
    } catch (error) {
      console.error("Authentication check failed", error);
      // Handle error appropriately. Maybe return an error state or a specific object structure?
      return { error: true, message: "Authentication check failed" };
    }
  };
  
