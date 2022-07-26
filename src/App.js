import React from "react";
import { Routes, Route } from "react-router-dom";
import "./categories.styles.scss";
import Home from "./routes/Home/Home";
import Navigation from "./routes/navigations/navigation";
import SignIn from "./routes/sign-in/SignIn";

const Shop = () => {
  return <h2> i am shoping pager</h2>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
