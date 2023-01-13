export const getRole = async email => {
    const response = await fetch(
      `https://goobike-assigenment-12-server.vercel.app//user/${email}`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
        },
      }
    )
    const user = await response.json()
    return user?.role
  }