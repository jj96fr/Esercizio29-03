import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import SingleBook from "./components/SingleBook";
import books from "./data/fantasy.json";
import AllTheBooks from "./components/AllTheBooks";


function App() {
  
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        
        <BookList books={books} />

      </Container>
      <MyFooter />
    </>
  );
}

export default App;



