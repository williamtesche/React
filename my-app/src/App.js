import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';

function App(){
return <>

<img className="imagem" src="fundo.png"/>
<Table className="opa" striped bordered hover size="dark">
<thead>
<tr>
 <th>#</th>
 <th>First Name</th>
 <th>Last Name</th>
 <th>Username</th>
</tr>
</thead>
<tbody>
<tr>
 <td>1</td>
 <td>Mark</td>
 <td>Otto</td>
 <td>@mdo</td>
</tr>
<tr>
 <td>2</td>
 <td>Jacob</td>
 <td>Thornton</td>
 <td>@fat</td>
</tr>
<tr>
 <td>3</td>
 <td colSpan="2">Larry the Bird</td>
 <td>@twitter</td>
</tr>
</tbody>
</Table>



   
    </>


  }
export default App;
