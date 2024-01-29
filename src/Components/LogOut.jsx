import React, { useContext } from 'react'
import { UserContext } from '../Hooks/userContext'
import { LogoutOutlined } from '@ant-design/icons'

function LogOut() {

    const { setUser } = useContext(UserContext)

    const handleLogOut = () => {
      setUser(null)
      console.log("Cuernta cerrada con exito");
    }

  return (
    <div onClick={() => { handleLogOut() }} style={{ backgroundColor: "#FA4A0C", padding: 10, borderRadius: 50, border: "2px solid black", cursor: "pointer" }} >
      <LogoutOutlined />
    </div>
  )
}

export default LogOut