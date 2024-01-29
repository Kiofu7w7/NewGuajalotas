import { Modal } from 'antd'

function PopUpDetails(props) {
    const { item, onClose } = props;

    return (
        <Modal
            title={item.nombre_completo}
            centered
            open
            onOk={onClose}
            onCancel={onClose} //cambiarlo por editar y agregvar otro boton para eliminar
            width={1000}
            maskClosable={false}
        >
            <p>{item.nombre}</p>
            <p>{item.precio}</p>
            <img alt="imagen producto" src={item.imagen}></img>
        </Modal>
    );
}

export default PopUpDetails