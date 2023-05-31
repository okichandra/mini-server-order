import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col className='st'>
                        <h4>Oki Place</h4>
                        <p>Oki place adalah restoran yang bergerak dibidang teknologi, yang memadukan restoran dengan teknologi sehingga terciptanya hal baru yang belum ditemukan</p>
                        <div className="information">
                            <img width="24" height="24" src="https://img.icons8.com/material/24/000000/phone--v1.png" alt="phone--v1" />
                            <span>0812-3456-7890</span>
                        </div>
                        <div className="information">
                            <img width="24" height="24" src="https://img.icons8.com/material/24/mail.png" alt="mail" />
                            <span>okiplacee@gmail.com</span>
                        </div>
                        <div className="social-media">
                            <div className="icon">
                            <img width="24" height="24" src="https://img.icons8.com/material/24/facebook-f.png" alt="facebook-f" />
                            </div>
                            <div className="icon">
                            <img width="24" height="24" src="https://img.icons8.com/material/24/instagram-new--v1.png" alt="instagram-new--v1" />
                            </div>
                            <div className="icon">
                            <img width="24" height="24" src="https://img.icons8.com/material/24/twitter--v2.png" alt="twitter--v2" />
                            </div>
                            <div className="icon">
                            <img width="24" height="24" src="https://img.icons8.com/material/24/youtube-play--v1.png" alt="youtube-play--v1" />
                            </div>
                        </div>
                    </Col>
                    <Col className='nd'>
                    <h4>Food</h4>
                    <span>Kualitas</span>
                    <span>Lingkungan Bersih</span>
                    <span>Tempat Ramah</span>
                    <span>Tepat Waktu</span>
                    <span>Berbagai Hiburan</span>
                    </Col>
                    <Col>
                    <h4>Lokasi Kantor</h4>
                    <div className="kantor">
                    <img width="24" height="24" src="https://img.icons8.com/ios/50/link-company-parent.png" alt="link-company-parent"/>
                    <span>OPQ, Jl. Putri Hijau No.1, Kesawan, Kota Medan, Sumatera Utara 20111</span>
                    </div>
                    <div className="kantor">
                    <img width="24" height="24" src="https://img.icons8.com/ios/50/link-company-parent.png" alt="link-company-parent"/>
                    <span>Jl. Gatot Subroto No.217, Sei Sikambing B, Kec. Medan Sunggal, Kota Medan, Sumatera Utara 20123</span>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
