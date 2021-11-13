import React, { useEffect, useState } from 'react'
import {Table} from 'react-bootstrap'
import axios from 'axios'
import NavBar from './NavBar'

function Students() {
    const [student, setStudent] = useState([])
    useEffect(() => {
      axios.get("http://localhost:8002/courses/").then(res=>setStudent(res.data))
       
    }, [])
    return (
        <div>
            <NavBar/>
          <Table striped bordered hover size="md" variant="dark">
            <thead>
                <tr>
                
                <th>ID</th> 
                <th>Department</th>
                <th>Name</th>
                <th>SSC</th>
                <th>Category</th>
                <th>Enquiries</th>
                </tr>
            </thead>
            <tbody>
                {console.log(student)}
                {student.map((stud,index)=>{
                {console.log(stud.science)}

                    return(
                        <>
                        
                        <tr>
                        <td>{stud.id}</td>
                        {stud.science &&
                        <>
                        <th>SCIENCE</th>
                        <td>{stud.science.name}</td> 
                        <td>{stud.science.ssc}</td>
                        <td>{stud.science.category}</td>
                        <td>{stud.science.enquiry}</td>
                        </>
                }
                        {stud.commerce &&
                        <>
                        <th>COMMERCE</th>
                        <td>{stud.commerce.name}</td> 
                        <td>{stud.commerce.ssc}</td>
                        <td>{stud.commerce.category}</td>
                        <td>{stud.commerce.enquiry}</td>
                        </>}
                        {stud.arts &&
                        <>
                        <th>ARTS</th>
                        <td>{stud.arts.name}</td> 
                        <td>{stud.arts.ssc}</td>
                        <td>{stud.arts.category}</td>
                        <td>{stud.arts.enquiry}</td>
                        </>}
                        
                       </tr>
                           
                    
                    
                </>
                
                )})}
                    
               
            </tbody>
            </Table>  
        </div>
    )
}

export default Students
