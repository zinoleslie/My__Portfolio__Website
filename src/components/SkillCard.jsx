import Card from 'react-bootstrap/Card';

function SkillCard({ image, title }) {
    return (
        <Card className="border-0 skill__card d-flex flex-column align-items-center justify-content-between text-center me-3"
            style={{ width: '17.5rem', height: '200px', padding: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            
            {/* Card Image at the top */}
            <Card.Img variant="top" src={image || ""} 
                style={{ width: '50%', height: '50%', objectFit: 'contain', margin:'20px 0' }} />
            
            <Card.Body className="d-flex flex-column justify-content-end w-100">
                {/* Title at the bottom */}
                <Card.Title className="mt-auto">{title || "Card Title"}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default SkillCard;
