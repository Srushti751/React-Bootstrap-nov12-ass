import React ,{useState,useEffect}from 'react'
import { Container,Card,Button, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom'
import axios from 'axios'
import NavBar from './NavBar'

function CourseList() {
    const [course, setCourse] = useState([])
   
    
    
    useEffect(() => {
      axios.get("http://localhost:8001/courses").then(res=>setCourse(res.data))
      
    }, [])
    return (
        <Router>
            <NavBar/>
        <div className="bg-dark">
        
            <Container className="p-5">
                <Row>
                {course.map((crs)=>{
                    return(
                    <Col sm={4} className="mb-3">

                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={crs.image}/>
                        <Card.Body>
                            <Card.Title>{crs.course}</Card.Title>
                            <Card.Text>{crs.desc}</Card.Text>
                
                           <Button color="inherit" href={`/form/${crs.id}`}>Enquiry</Button>

                        </Card.Body>
                        </Card>
                </Col>

                    )
                })}
          </Row>
            </Container>
        </div>
        </Router>
    )
}

export default CourseList
