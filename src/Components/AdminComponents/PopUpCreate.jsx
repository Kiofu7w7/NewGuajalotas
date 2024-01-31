import { Input, Modal, Popconfirm, Typography, Upload } from 'antd';
import React, { useEffect, useState } from 'react'
import { DivFlexSpaceA } from './StyledComponents/Components';
import { uploadFile } from '../../helpers/uploadFiles';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { PutDataUsersCarts } from '../../Peticiones/axios';
import { urlBase } from '../../helpers/urls';

function PopUpCreate(props) {

    const { item, baseData, cats, onClose } = props;
    const [produc, setProduct] = useState({
        id: crypto.randomUUID(),
        nombre: "",
        precio: 0,
        stock: 0,
        imagen: "",
        plato: "",
        sabor_imagen: "",
        nombre_completo: "",
        categoria: ""
    });
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [imagePlatoUrl, setImagePlatoUrl] = useState();
    const [base, setBase] = useState();

    useEffect(() => {
        setBase(baseData)
    }, [baseData])


    const showPopconfirm = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(async () => {
            setOpen(false);
            setConfirmLoading(false);
            await PutDataUsersCarts(`${urlBase}${base}`, produc).then(()=>{
                onClose();
            })
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    const handleUpload = (e) => {
        console.warn(e.file.originFileObj)
        setLoading(true)
        const file = e.file.originFileObj
        uploadFile(file)
            .then(resp => handleChangeImagen(resp))
    }

    const handleChangeImagen = (url) => {
        setProduct({
            ...produc,
            imagen: url,
        })
        setImageUrl(url)
        setLoading(false)
    };

    const handleOnChange = ({ target }) => {
        setProduct({
            ...produc,
            [target.name]: target.value,
        });
    };

    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );

    return (
        <Modal
            title={produc.nombre_completo}
            centered
            open
            onOk={showPopconfirm}
            onCancel={onClose} //cambiarlo por editar y agregvar otro boton para eliminar
            width={800}
            maskClosable={false}
        >
            <DivFlexSpaceA style={{ justifyContent: "space-between" }}>
                <div>
                    <Typography.Title level={5}>Nombre completo del producto:</Typography.Title>
                    <Input
                        count={{
                            show: true,
                            max: 30,
                        }}
                        defaultValue={produc.nombre_completo}
                        name='nombre_completo'
                        onChange={handleOnChange}
                    />
                    <Typography.Title level={5}>Nombre corto:</Typography.Title>
                    <Input
                        count={{
                            show: true,
                            max: 15,
                        }}
                        defaultValue={produc.nombre}
                        name='nombre'
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <Typography.Title level={5}>Categoria:</Typography.Title>
                    <select
                        name="categoria"
                        onChange={handleOnChange}
                    >
                        <option value="">Seleccione una categoria</option>
                        {cats?.map((a, index) => (
                            <option key={index} value={a}>
                                {a}
                            </option>
                        ))}
                    </select>
                </div>
                <div>

                </div>

                <div>
                    <Typography.Title level={5}>Precio:</Typography.Title>
                    <input
                        type="number"
                        name="precio"
                        defaultValue={produc.precio}
                        onChange={handleOnChange}
                        placeholder="$"
                    />

                    <Typography.Title level={5}>En stock:</Typography.Title>
                    <input
                        type="number"
                        name="stock"
                        defaultValue={produc.stock}
                        onChange={handleOnChange}
                    />
                </div>
            </DivFlexSpaceA>

            <Typography.Title level={4}>Imagenes:</Typography.Title>
            <DivFlexSpaceA>
                <div>
                    <Typography.Title level={5}>Fotografia:</Typography.Title>
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        onChange={handleUpload}
                    >
                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt="avatar"
                                style={{
                                    width: '100%',
                                }}
                            />
                        ) : (
                            uploadButton
                        )}
                    </Upload>
                </div>
                <div>
                    <Typography.Title level={5}>Plato: (no funciona)</Typography.Title>
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                    // onChange={handleUpload}
                    >
                        {imagePlatoUrl ? (
                            <img
                                src={imagePlatoUrl}
                                alt="avatar"
                                style={{
                                    width: '100%',
                                }}
                            />
                        ) : (
                            uploadButton
                        )}
                    </Upload>
                </div>
                <div>
                    <Typography.Title level={5}>Icono sabor: (no funciona)</Typography.Title>
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                    // onChange={handleUpload}
                    >
                        {imagePlatoUrl ? (
                            <img
                                src={imagePlatoUrl}
                                alt="avatar"
                                style={{
                                    width: '100%',
                                }}
                            />
                        ) : (
                            uploadButton
                        )}
                    </Upload>
                </div>
                <div>
                    <Typography.Title level={5}>Foto final:</Typography.Title>
                    <img style={{
                        width: 100,
                        height: 100,
                        objectFit: "contain",
                        backgroundImage: `url(${produc.plato})`,
                        backgroundPosition: "center 40px",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                    }} alt="imagen producto" src={imageUrl}></img>
                </div>
            </DivFlexSpaceA>

            <Popconfirm
                title="Confirmacion"
                description="Esta seguro que desea crear este producto?"
                open={open}
                onConfirm={handleOk}
                okButtonProps={{
                    loading: confirmLoading,
                }}
                onCancel={handleCancel}
            >
            </Popconfirm>

        </Modal>
    );
}

export default PopUpCreate