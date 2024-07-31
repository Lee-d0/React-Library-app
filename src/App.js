import Nav from "./componets/Nav.jsx"

import Footer from "./componets/Footer.jsx";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from "./pages/Home.jsx";
function App() {
  return (
    <Router>
    <div className="App">
      <Route />
      <Nav />
      <Route path="/" exact component={Home} />
      
      <Footer />
    </div>
    </Router>
  );
}

export default App;
