import { Card } from 'react-bootstrap';
import './Items.css'

const ItemsAll = ({ item, handelDelete }) => {
    const { _id, name, img, price, quantity, suppliername, details, email } = item;



    return (
        <div>
            <Card className='itemsdelete'>
                <Card.Img className='deleteImg' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h6>Price:{price}</h6>
                    <h6>Quantity:{quantity}</h6>
                    <h6>Supplier Name: {suppliername}</h6>
                    <h6>Supplier Email: {email}</h6>
                    <p>{details}</p>
                </Card.Body>
                <Card.Body className='mx-auto'>
                    <Card.Link className='btn btn-primary pe-auto mx-2 text-center' onClick={() => handelDelete(item._id)}>
                        Delete
                    </Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ItemsAll;