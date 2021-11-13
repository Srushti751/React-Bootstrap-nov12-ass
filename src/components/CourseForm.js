import React, { useEffect, useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
import NavBar from './NavBar';


function CourseForm(props) {
    const id = props.match.params.id
    const [name, setName] = useState("")
    const [ssc, setSsc] = useState("")
    const [category, setCategory] = useState("")
    const [enquiry, setEnquiry] = useState("")
    const [course, setCourse] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8002/courses/${id}`).then(res=>setCourse(res.data))
        
        
    }, [])
    // function addData(e){
    //     e.preventDefault()
    //     const data ={name:name,ssc:ssc,category:category}
    //     course.person.push(data)
    //      localStorage.setItem('course',JSON.stringify(course))
    //      var cour = JSON.parse(localStorage.getItem('course'));
    //      console.log(cour)
    //     axios.post(`http://localhost:8002/courses`, cour.person)
    //       }
    function addData(e){
        e.preventDefault()
        console.log(id)

        if(id==1){
        const data ={science:{name:name,ssc:ssc,category:category,enquiry:enquiry}}
        
        axios.post(`http://localhost:8002/courses`, data)
          }
        else if(id==2){
            const data ={commerce:{name:name,ssc:ssc,category:category,enquiry:enquiry}}
           
            axios.post(`http://localhost:8002/courses`, data)
        }
        else{
            const data ={arts:{name:name,ssc:ssc,category:category,enquiry:enquiry}}
           
            axios.post(`http://localhost:8002/courses`, data)
        }
    }
    return (
        <div>
       {/* { console.log(course)} */}
            <NavBar/>
            <h3 className="text-center">Enquiry Form</h3>
            <Form  onSubmit={addData} style={{border:"5px solid grey", margin:"10px 20%",padding:"30px"}}>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name.." />        
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>SSc marks</Form.Label>
                    <Form.Control type="text" value={ssc} onChange={(e)=>setSsc(e.target.value)} placeholder="Percentage.." />        
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Open/OBC/ST/SC..." />        
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Enquiry</Form.Label>
                    <Form.Control as="textarea"  value={enquiry} onChange={(e)=>setEnquiry(e.target.value)} placeholder="Ask any enquiry questions..." rows={3} />
                </Form.Group>
          
               
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            
        </div>
    )
}

export default CourseForm
