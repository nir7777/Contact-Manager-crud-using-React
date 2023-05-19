

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NewContact from './Components/NewContact';
import AddressBook from './Components/AddressBook';
import EditContact from "./Components/EditContact";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        localStorage.clear();
        <Route exact path="/" element={<NewContact/>}></Route>
        <Route exact path="/addressbook" element={<AddressBook/>}></Route>
        <Route exact path="/editcontact" element={<EditContact/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
