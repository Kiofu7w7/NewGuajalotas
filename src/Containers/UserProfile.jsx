import React, { useEffect, useState } from 'react'
import useUser from '../Hooks/useUser'
import { Input, Typography } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

function UserProfile() {

    const {userMain, setUserMain} = useUser()
    const [dataUser, setDataUser] = useState(userMain)

  return (
    <div>
        <Typography.Title level={5}>Nombre:</Typography.Title>
        <Input
            count={{
                show: true,
                max: 30,
            }}
            defaultValue={dataUser?.name}
            name='nombre_completo'
        />
        <Typography.Title level={5}>Apellidos:</Typography.Title>
        <Input
            count={{
                show: true,
                max: 30,
            }}
            defaultValue={dataUser?.last_name}
            name='nombre_completo'
        />
        <Typography.Title level={5}>Email:</Typography.Title>
        <Input
            count={{
                show: true,
                max: 30,
            }}
            defaultValue={dataUser?.email}
            name='nombre_completo'
        />
        <Typography.Title level={5}>Email:</Typography.Title>
        <Input
            count={{
                show: true,
                max: 30,
            }}
            defaultValue={dataUser?.last_name}
            name='nombre_completo'
        />
        <Typography.Title level={5}>Password:</Typography.Title>
        <Input.Password
        placeholder="input password"
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
        
    </div>
  )
}

export default UserProfile