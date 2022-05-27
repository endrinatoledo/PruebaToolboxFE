import React from 'react';
import { Container, Table} from 'react-bootstrap';

const TableComponent = (props) => {
    
    let data = (props.data.lines !== undefined)? props.data.lines :  []
    
    return (
        <Container fluid style={{ marginTop:'2%', marginLeft:'2%', marginRight:'2%', width:'100%' }}>
                    <Table striped bordered hover size="sm" style={{  width:'95%' }}>
                        <thead>
                            <tr>
                                <th>Fill Name</th>
                                <th>Text</th>
                                <th>Number</th>
                                <th>Hex</th>
                            </tr>
                        </thead>
                        <tbody>
                            { (data.length > 0)?                                
                                data.map((item)=>{
                                    return (
                                        <tr key={item.text}>
                                            <td>{props.data.file}</td>
                                            <td>{item.text}</td>
                                            <td>{item.number}</td>
                                            <td>{item.hex}</td>
                                        </tr>
                                    )
                                })
                            
                        :
                            <tr >
                                <td style={{ fontWeight:'bold', textAlign:'center' }} colSpan='4'>Sin datos para mostrar</td>
                            </tr>
                        } 
                        </tbody>
                    </Table>            
        </Container>
    )
}

export default TableComponent