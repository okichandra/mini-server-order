import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import data from './Data';
import { Button } from 'react-bootstrap';

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

function GroupExample() {


    return (
        <div className="container mt-5">
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
                            <Button variant="outline-success">Tambah</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
export default GroupExample;