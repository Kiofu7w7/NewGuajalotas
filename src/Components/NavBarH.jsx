import React from 'react'
import { NavBarDiv } from './StyleComponentsHome'
import { useNavigate } from 'react-router-dom'
import { EditOutlined, UserOutlined } from '@ant-design/icons';
import LogOut from './LogOut';
import useUser from '../Hooks/useUser';
import { Badge } from 'antd';

function NavBarH() {

    const navigate = useNavigate();
    const { cartItems } = useUser();

    return (
        <NavBarDiv>
            <img onClick={() => { navigate("/") }} style={{ width: "100px", height: "100px", objectFit: "contain", cursor: "pointer" }} src='https://res.cloudinary.com/dlwr6vxib/image/upload/v1705378408/Guajolota/363f139aa7086e67976c63e2eea1fb1c_kn7onm.png' alt=''></img>
            <div onClick={() => { navigate("/sigin") }} style={{ backgroundColor: "#FA4A0C", padding: 10, borderRadius: 50, border: "2px solid black", cursor: "pointer" }} >
                <UserOutlined />
            </div>
            <div onClick={() => { navigate("/adminPage") }} style={{ backgroundColor: "#FA4A0C", padding: 10, borderRadius: 50, border: "2px solid black", cursor: "pointer" }} >
                <EditOutlined />
            </div>
            <LogOut />
            <div style={{ marginRight: 20 }} >
                <Badge onClick={() => { navigate("/cart") }} count={cartItems.length}>
                    <img src='https://res.cloudinary.com/dlwr6vxib/image/upload/v1705961405/Guajolota/Group_66_ughrn8.png' style={{ width: 24, height: 24, cursor: "pointer" }} alt=''></img>
                </Badge>
            </div>
        </NavBarDiv>
    )
}

export default NavBarH