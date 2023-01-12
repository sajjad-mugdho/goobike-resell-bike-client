export const setAuthToken = user => {
    const currentUser = {
      email: user.email,
    }
  
    //   Save user in db & get token
    fetch(`https://goobike-assigenment-12-server.vercel.app/user/${user?.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(currentUser),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        //Save token in LocalStorage
        localStorage.setItem('gooBike-token', data.token)
      })
  };

  // Get Role

  export const getRole = async email => {
    const response = await fetch(
      `https://goobike-assigenment-12-server.vercel.app/user/${email}`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      }
    )
    const user = await response.json()
    return user?.role
  }