import * as React from 'react';
import Header from './components/Header'
import TableComponent from './components/TableComponent';
import SelectFiles from './components/SelectFiles';
const AxiosInstance = require("./utils/request").default;

function App() {

  const [selectedFile, setSelectedFile] = React.useState('')
  const [data, setData] = React.useState([])

  const fillTable = async () => {

    try{
      const result = (await AxiosInstance.get("/files/data/" + selectedFile)).data
          setData(result)
      
    }catch{
        console.log('Error de Conexion')
  }
}

  React.useEffect(() => {  
    if(selectedFile !== ''){ fillTable()}
}, [selectedFile]);

  return (
    <div>
      <Header />
      <SelectFiles selectedFile={selectedFile} setSelectedFile={setSelectedFile}/>
      <TableComponent data={data} />
    </div>
  );
}

export default App;
