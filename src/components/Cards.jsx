// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaExternalLinkAlt } from "react-icons/fa";

function Cards({image, title, description }) {
    const dummytext = "Some quick example text to build on the card title and make up the bulk of the card's content."
    return (
        <Card className='card__box' style={{ width: '23rem',height:'420px', margin:'auto',padding:'0 10px', backgroundColor:' rgb(239, 248, 255)', color:'rgba(3, 3, 3, 0.95)' }}>
            <Card.Body>
                <Card.Title className='d-flex justify-content-between ' style={{fontWeight:'700'}}>{title || "Card Title"}<span><FaExternalLinkAlt /></span></Card.Title> 
                <Card.Text>
                    { description > 100 ? description.substring(0, 100) + '...' : description || dummytext > 100 ? dummytext.substring(0, 100) + '...' : dummytext} 
                </Card.Text>
                <Card.Img variant="top" style={{height:'250px'}} src={image ||"https://howtofunda.com/wp-content/uploads/2024/06/school-building-model.jpg"} />
            </Card.Body>
        </Card>
    );
}

export default Cards;