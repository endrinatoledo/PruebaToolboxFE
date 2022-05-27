import React from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
const AxiosInstance = require("../utils/request").default;


const SelectFiles = (props) => {

    const [fileList, setFileList] = React.useState([])
    const getFileList = async () => {

        try{
          const result = (await AxiosInstance.get("/files/data/")).data
          setFileList(result.data)
        }catch{
            console.log('Error de Conexion')
      }
    }

    React.useEffect(() => {  
         getFileList()    
        }, [0]);

  return (
    <Container style={{ marginTop:'2%', marginLeft:'2%', marginRight:'2%' }}>
        <Form.Select style={{ paddingLeft:'1%', paddingRight:'1%'}} aria-label="Seleccione un archivo" 
        onChange={(e)=>{props.setSelectedFile(e.target.value)}}
        >
            <option value=''>Seleccione un archivo</option>
            {(fileList.length > 0)? 
                fileList.map((file)=>{
                return (<option key={file}  value={file}>{file}</option>)
                })
            : null}
        </Form.Select>

    </Container>
    
  )
}

export default SelectFiles