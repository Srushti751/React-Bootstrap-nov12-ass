import React ,{useState,useEffect}from 'react'
import { Container,Card,Button, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Navbar from './NavBar'

function ProductList() {
    const [prodlist, setProdlist] = useState([])
   
   
    useEffect(() => {
      axios.get("http://localhost:8000/products").then(res=>setProdlist(res.data))
    }, [])

    return (
        <div className="bg-dark">
            <Navbar/>
            <Container className="p-5">
                <Row>
                {prodlist.map((prod)=>{
                    return(
                    <Col sm={4} className="mb-3">

                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" className="p-3" src={prod.image} height="200" />
                        <Card.Body style={{background:"lightgrey"}}>
                            <Card.Title>{prod.pname}</Card.Title>
                            <Card.Text>
                           Price: <strong>₹{prod.prod}</strong>
                            </Card.Text>
                            <Card.Text>
                           Qty: {prod.quantity}
                            </Card.Text>
                            <Button variant="warning">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </Col>

                    )
                })}
          </Row>
            </Container>
        </div>
    )
}

export default ProductList
