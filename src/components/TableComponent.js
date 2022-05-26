import React from 'react';
import { Container, Table} from 'react-bootstrap';

const TableComponent = () => {
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
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </Table>            
        </Container>
        
    )
}

export default TableComponent