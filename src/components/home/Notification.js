import React from 'react';
import { OverlayTrigger, Popover, Toast, ToastContainer } from 'react-bootstrap';

const Notification = () => {
    return <div>

        <>
            <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={
                    <Popover id={`popover-positioned-${'placement'}`}>
                        <Popover.Header as="h3">Notifications </Popover.Header>
                        <Popover.Body className='body'>
                            {/* <strong>Holy guacamole!</strong> Check this info. */}
                            <ToastContainer>zzz
                                <Toast className='btn-grad'>
                                    <Toast.Header>
                                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                        <strong className="me-auto">Bootstrap</strong>
                                        <small className="text-muted">just now</small>
                                    </Toast.Header>
                                    <Toast.Body>See? Just like this.</Toast.Body>
                                </Toast>
                                <Toast className='btn-grad'>
                                    <Toast.Header>
                                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                        <strong className="me-auto">Bootstrap</strong>
                                        <small className="text-muted">2 seconds ago</small>
                                    </Toast.Header>
                                    <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
                                </Toast>
                            </ToastContainer>


                        </Popover.Body>
                    </Popover>
                }
            >
                <span className=' text btn' >
                    <i class="far fa-bell " variant="light"></i>
                </span>

            </OverlayTrigger>

        </>

    </div>;
};

export default Notification;
