import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Products";
import { DefaultLayout } from "../layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
      </Route>
    </Routes>
  );
}
