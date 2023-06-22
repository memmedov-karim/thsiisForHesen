import './App.css';
import PdfViewer from './components/pdfViewer/PdfViewer';
import Modals from './components/Modal/Modal';
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
function App() {
  const data = [
    {
      id:"1",
      name:"Hasan",
      file:"http://localhost:5000/uploads/1684044534036-MyLastCv.pdf"
    },
    {
      id:"2",
      name:"Karim",
      file:"https://testbackendjob.onrender.com/uploads/1683997505070-ShikhkarimCv.pdf"
    }
  ]
  const liEl = data?.map((val,ind)=>{
    return <li key={ind}>{val.name} <button onClick={()=>handleOpenModal(val.file)}>Cv</button></li>
  })
  const [currentCv,setCurrentCv] = useState(null);

  const [showModal, setShowModal] = useState(false);

  function handleOpenModal(cv) {
    setCurrentCv(cv)
    
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }
  const [user_id,setUserId] = useState("");
  const [company_id,setCompanyId] = useState("");
  const [job_id,setJobId] = useState("");
  const [file,setFile] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user_id',user_id);
    formData.append('company_id',company_id);
    formData.append('job_id',job_id);
    formData.append('file',file);
    console.log(formData)
    axios.post('http://localhost:5000/api/postApply',formData,{
      headers: {
        'Content-Type':'multipart/form-data'
      }
    })
    .then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
  return (
    <div className="App">
      <ul>
        {liEl}
      </ul>
      {showModal && (
        <Modals currentCv={currentCv} showModal={showModal} handleCloseModal={handleCloseModal}/>
      )}
      {/* <PdfViewer /> */}
      <form onSubmit={handleSubmit}>
        <input type='text' value={user_id} onChange={(e)=>{setUserId(e.target.value)}} />
        <input type='text' value={company_id} onChange={(e)=>{setCompanyId(e.target.value)}} />
        <input type='text' value={job_id} onChange={(e)=>{setJobId(e.target.value)}} />
        <input type='file' onChange={(e)=>{setFile(e.target.files[0])}} />
        <input type='submit' />
      </form>
    </div>
  );
}

export default App;
