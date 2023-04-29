import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import data from './Data';

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
                                <Card.Text className='food-price'>Rp {list.harga}</Card.Text>
                                <Card.Text className='food-rating'>
                                    <img width={20} src="https://img.icons8.com/fluency/48/null/star.png" alt="Rating image" />
                                    <span>{list.rating} | Terjual {list.terjual}</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
export default GroupExample;