import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Modal from './Components/Modal';
import { useGlobalContext } from './context';

function App() {
  const {openModal} = useGlobalContext();
  return (
    <>
      <Navbar />
      <Sidebar />
      <Modal />
      <main className='modal-controller'>
        <button className='btn btn-selector' onClick={openModal}>
          Apri modal
        </button>
      </main>
    </>
  );
}

export default App;