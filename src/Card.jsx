import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import data from './Data';
import { Button } from 'react-bootstrap';
import RightSide from './RightSide';
import { useState } from 'react';

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

let send = []
export default function GroupExample() {
    const [prev, seData] = useState({})
    const addFood = params => {
        seData(params)
        send.push(params)
    }

    return (
        <div className="container maincomp mt-5">
            <div className="forLeft">
                <h1 className='judul'>Makanan Yang Dapat Anda Pesan</h1>
                <Row xs={1} md={6} className="g-4">
                    {Array.from(data).map((list, idx) => (
                        <Col key={idx}>
                            <Card className='piece'>
                                <Card.Img className='card-image' variant="top" src={list.gambar} />
                                <Card.Body>
                                    <Card.Title className='food-name'>{list.nama}</Card.Title>
                                    <Card.Text className='food-price'>Rp {formatNumber(list.harga)}</Card.Text>
                                    <Card.Text className='food-rating'>
                                        <img width={20} src="https://img.icons8.com/fluency/48/null/star.png" alt="Rating image" />
                                        <span>{list.rating} | Terjual {list.terjual}</span>
                                    </Card.Text>
                                    <Button variant="outline-primary" onClick={() => addFood(list)}>Tambah</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            {
                send.length > 0 && <RightSide kirimData={send}/>
            }
        </div>
    );
}