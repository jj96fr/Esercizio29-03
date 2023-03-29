import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome/>
        <AllTheBooks />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;


