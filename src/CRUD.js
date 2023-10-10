import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { BiSolidEditAlt } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md'

function Crud() {
const [create, setCreate] = useState([])
const [inputNama, setinputNama] = useState('')
const [inputNim, setInputNim] = useState('')
const [inputMakul, setInputMakul] = useState('')
const [id, setId] = useState(1)
const handleCreate = () => {
    if (inputNama.trim() === "" || inputNim.trim() === "" || inputMakul.trim() === ""){
        alert('Harap Input Semua Data !');
        return;
    }
    setCreate([...create, {id, text: inputNama, nim: inputNim, makul: inputMakul}]);
    setinputNama('');
    setInputNim('');
    setInputMakul('');
    setId(id+1);
}

console.log({create})
  return (
    <div>
    {/* start input create */}
        <Card className='align-items-center mx-auto'>
            <h4>Nama:</h4>
            <input 
            type='text'
            onChange={(e) => setinputNama(e.target.value)}
            value={inputNama}
            placeholder='Masukkan Nama Anda'
            />
            <h4>NIM:</h4>
            <input
            type='text'
            onChange={(e) => setInputNim(e.target.value)}
            value={inputNim}
            placeholder='Masukkan NIM Anda'       
            /><br></br>
            <h4>Pilih Mata Kuliah:</h4>
            <select name='Makul' id='Makul' value={inputMakul} onChange={(e) => setInputMakul(e.target.value)}>
                <option value="">--Pilih Mata Kuliah--</option>
                <option value="Dasar Pemrograman">Dasar Pemrograman</option>
                <option value="Algoritma dan Struktur Data">Algoritma dan Struktur Data</option>
                <option value="Logika Matematika">Logika Matematika</option>
                <option value="Pemrograman Web">Pemrograman Web</option>
                <option value="Statistika Data">Statistika Data</option>
            </select>
            <br></br><br></br>
            <button onClick={handleCreate}>Tambah Data</button>
            <h1></h1>
        </Card>
    {/* end input create */}
    {/* start read funciton */}
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>No.</th>
          <th>Nama</th>
          <th>NIM</th>
          <th>Mata Kuliah</th>
          <th>Edit</th>
          <th>Hapus</th>
        </tr>
      </thead>
      <tbody>
      {create.map((item, index) => (
            <tr key={item}>
                <td>{item.id}</td>
                <td>{item.text}</td>
                <td>{item.nim}</td>
                <td>{item.makul}</td>
                <td><BiSolidEditAlt /></td>
                <td><MdDeleteOutline /></td>
            </tr>
      ))
      }
      </tbody>
    </Table>
    {/* end read function */}
    </div>
  )
}

export default Crud
