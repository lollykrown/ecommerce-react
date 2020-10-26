import React from 'react';
import { Container } from 'react-bootstrap'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <React.Fragment>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to ProShop</h1>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
