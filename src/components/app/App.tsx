import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Footer } from "../";

const MainPage = React.lazy(() => import("../../pages/MainPage"));
const CardItemPage = React.lazy(() => import("../../pages/CardItemPage"));
const ForYourPage = React.lazy(() => import("../../pages/ForYourPage"));
const OurCoffeePage = React.lazy(() => import("../../pages/OurCoffeePage"));
const Page404 = React.lazy(() => import("../../pages/404"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1 className="title">Loading...</h1>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ourCoffee" element={<OurCoffeePage />} />
          <Route path="/forYour" element={<ForYourPage />} />
          <Route path="/ourCoffee/:id" element={<CardItemPage />} />
          <Route path="/forYour/:id" element={<CardItemPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
