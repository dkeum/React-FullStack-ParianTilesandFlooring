import { Card } from 'react-bootstrap';

const ProjectCard = (props) => {
    const { ProjectName, ProjectDescription, ProjectImage } = props;

    return (
        <Card.Body> 
            <div className="image-container">
                <Card.Img src={require(`../images/${ProjectImage}`)}/>
            </div>
            
            <Card.Title><b>{ProjectName}</b></Card.Title>
            <Card.Text>{ProjectDescription}</Card.Text>
        </Card.Body>
    );
}

export default ProjectCard;
