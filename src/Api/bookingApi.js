export const bookingData = async bookingItem => {
    const response = await fetch(`http://localhost:5000/bookings`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
         
        },
        body: JSON.stringify(bookingData),
      })
    
      const data = await response.json()
      return data
    }
