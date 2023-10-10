import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { BiSolidEditAlt } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';

function Crud() {
const [create, setCreate] = useState([])
const [inputNama, setinputNama] = useState('')
const [inputNim, setInputNim] = useState('')
const [inputMakul, setInputMakul] = useState('')
const [isEditing, setIsEditing] = useState(false)
const [editingItemId, setEditingItemId] = useState(null)
const handleSave = () => {
    if (isEditing){
        setCreate((prevCreate) => {
            return prevCreate.map((item) => {
                if (item.id === editingItemId){
                    return {id: editingItemId, text: inputNama, nim: inputNim, makul: inputMakul}
                }
                return item;
            })
        })
        setEditingItemId(null);
        setIsEditing(false);
        setinputNama('');
        setInputNim('');
        setInputMakul('');
    }
    else{
        if (inputNama.trim() === "" || inputNim.trim() === "" || inputMakul.trim() === ""){
            alert('Harap Input Semua Data !');
            return;
        }
        setCreate([...create, {id: uuidv4(), text: inputNama, nim: inputNim, makul: inputMakul}]);
        setinputNama('');
        setInputNim('');
        setInputMakul('');
    }
    setIsEditing(false);
}
const handleEdit = (index) => {
    const editedItem = create[index];
    setinputNama(editedItem.text);
    setInputNim(editedItem.nim);
    setInputMakul(editedItem.makul);
    setEditingItemId(editedItem.id);
    setIsEditing(true);
}
const handleCancelEdit = () => {
    setinputNama('');
    setInputNim('');
    setInputMakul('');
    setIsEditing(false);
    setEditingItemId(null);
}
const handleDelete = (id) => {
    const updatedCreate = create.filter((item) => item.id !== id);
    setCreate(updatedCreate);
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
            <button onClick={handleSave}>{isEditing ? 'Simpan Perubahan' : 'Tambah Data'}</button>
            <button onClick={handleCancelEdit} style={{display: isEditing ? 'block' : 'none'}}>Batal</button>
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
            <tr key={item.id}>
                <td>{index+1}</td>
                <td>{item.text}</td>
                <td>{item.nim}</td>
                <td>{item.makul}</td>
                <td><BiSolidEditAlt onClick={() => handleEdit(index)} /></td>
                <td><MdDeleteOutline onClick={() => handleDelete(item.id)}/></td>
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
