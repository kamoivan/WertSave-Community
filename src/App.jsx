import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Join from "./pages/Join";
import About from "./pages/About";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/join" element={<Join />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          theme="light"
          limit={3}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
