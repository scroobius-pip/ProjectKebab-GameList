import { Modal, ModalBody } from 'react-bootstrap';

interface Props {
    visible: boolean
    close: () => any
    [x: string]: any

}

export default (Content: React.ElementType) => ({ visible, close, ...props }: Props) => {

    return (
        <>
            <Modal style={{ backgroundColor: 'transparent' }} onHide={close} show={visible}>
                <ModalBody>
                    <Content {...props} close={close} />
                </ModalBody>
            </Modal>
            <style>
                {
                    `
         .modal-body {
           
             padding:0px;
           
         }

         .modal-content {
             border-radius:10px !important;
            background-color:transparent;
         }
         `
                }
            </style>

        </>
    )

}