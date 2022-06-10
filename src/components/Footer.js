import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Footer = () => {
    return (
        <>

            <Card className="text-center navbg mt-5 " >
                <Card.Body>
                    <em> <h1>CUBIFY</h1></em>
                    <Card.Text>

                        <h6>  <i class="far fa-copyright "></i> 2022, CUBIFY, Inc. All rights reserved.</h6>
                    </Card.Text>
                    <i class="footerlogo fab fa-twitter"></i>
                    <i class="footerlogo fab fa-instagram"></i>
                    <i class="footerlogo fab fa-facebook-f"></i>
                    <i class="footerlogo fab fa-github"></i>
                    <i class="footerlogo fab fa-pinterest-p"></i>
                    <i class="footerlogo fab fa-linkedin-in"></i>
                    
                    <br />
                </Card.Body>
                <Card.Footer className="text-muted">  Terms of service  Refund policy  Privacy policy  Sitemapo</Card.Footer>
            </Card>

        </>
    )
}

export default Footer
