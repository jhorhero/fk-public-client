export function showCurrentDate() {
    // Create a new Date object
    const currentDate = new Date();
  
    // Get day, month, date, and year
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = daysOfWeek[currentDate.getDay()];
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[currentDate.getMonth()];
  
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
  
    // Display the result
    return `${day}, ${month} ${date}, ${year}`;
  }
  
  // Call the function to display the current date
//   showCurrentDate();
  