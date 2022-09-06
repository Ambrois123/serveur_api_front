import "bootswatch/dist/darkly/bootstrap.min.css"
import Layout from "./components/UI/Layout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Partenaire from "./components/Partenaires/Partenaire";
import Salles from "./components/Salles/Salles";
import Formulaire from "./components/Formulaire/Formulaire";

function App() {
  return (
   <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Partenaire />} />
          <Route path="/Salles" element={<Salles />} />
          <Route path="/Formulaire" element={<Formulaire/>} />
        </Routes>
      </Layout>
   </Router>
  );
}

export default App;
