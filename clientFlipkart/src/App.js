import { Box, styled } from '@mui/material';
import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailView from './components/ItemDetails/DetailView';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 55 }}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/product/:id" element={<DetailView />}/>
            <Route path="/cart" element={<Cart />}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
