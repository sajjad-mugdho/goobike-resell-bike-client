import { useContext, useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import Spinner from "../../Component/Spinner/Spinner"
import { AuthContext } from "../../Context/AuthProvider"

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    
    const [roleLoading, setRoleLoading] = useState(true)
   
  
    if (loading || roleLoading) {
      return (
        <div className='h-screen'>
          <Spinner />
        </div>
      )
    }
  
    if (user && user.uid && user?.role === 'Seller') {
      return children
    }
    return <Navigate to='/dashboard' />
  }

  export default SellerRoute;