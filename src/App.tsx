import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
  const id= localStorage.getItem("myKey")
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
