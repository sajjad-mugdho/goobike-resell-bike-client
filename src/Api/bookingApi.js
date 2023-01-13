export const bookingData = async bookingItem => {
    const response = await fetch(`https://goobike-assigenment-12-server.vercel.app/bookings`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
         
        },
        body: JSON.stringify(bookingData),
      })
    
      const data = await response.json()
      return data
    }

    
    
