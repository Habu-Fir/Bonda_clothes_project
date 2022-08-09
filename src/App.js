import React from "react";
import { Routes, Route } from "react-router-dom";
import "./categories.styles.scss";
import Home from "./routes/Home/Home";
import Navigation from "./routes/navigations/navigation";
import Authentication from "./Component/Authentication/Authentication";
import Shop from "./routes/Shop/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
