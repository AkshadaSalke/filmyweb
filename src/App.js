import Header from "./component/Header";
import Cards from "./component/Cards";
import AddMovie from "./component/AddMovie";
import { Routes, Route } from "react-router-dom";
import Detail from "./component/Detail";

function App() {
  return (
    <div className="App relative">
     <Header/>
     <Routes>
      <Route path="/" element={<Cards/>}/>
      <Route path="/addmovie" element={<AddMovie/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
