import React, { Suspense } from 'react';
import { Spinner } from 'react-bootstrap';
// import DisplayBody from '../DisplayBody';
const DisplayBody = React.lazy(() => import('../DisplayBody'));


const Homepage = () => {

    return (
        <div>

            <Suspense fallback={<div className='Suspense d-flex align-items-center justify-content-center '>
                <Spinner animation="grow" size="sm" variant="light" />
                <Spinner animation="grow" size="" className='mx-2' variant="light" />
                <Spinner animation="grow" size="sm" variant="light" />
            </div>} >

                <DisplayBody />

            </Suspense>

        </div>
    )
};

export default Homepage;