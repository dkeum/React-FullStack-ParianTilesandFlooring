import { Card } from 'react-bootstrap';

const ProjectCard = (props) => {
    const { ProjectImage } = props;

    return (
        <Card className="bg-secondary" >
                <Card.Body> 
                    <div className="image-container">
                        <Card.Img src={require(`../images/${ProjectImage}`)}/>
                    </div>
                    
            </Card.Body>
        </Card>
        
    );
}

export default ProjectCard;
