import React from 'react'
import Form from 'react-bootstrap/Form'
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

    <Form.Select aria-label="Seleccione un archivo" 
        onChange={(e)=>{props.setSelectedFile(e.target.value)}}
    >
        <option value=''>Seleccione un archivo</option>
        {(fileList.length > 0)? 
            fileList.map((file)=>{
             return (<option key={file}  value={file}>{file}</option>)
            })
        : null}
    </Form.Select>
  )
}

export default SelectFiles