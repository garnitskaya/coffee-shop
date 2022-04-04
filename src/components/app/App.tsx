import { BrowserRouter, Routes, Route, } from "react-router-dom";
import MainPage from '../pages/MainPage';
import Footer from './../footer/Footer';
import OurCoffeePage from '../pages/OurCoffeePage';
import ForYourPage from '../pages/ForYourPage';
import CardItemPage from './../pages/CardItemPage';
import Page404 from '../pages/404';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/coffee-shop' element={<MainPage />} />
                <Route path='/ourCoffee' element={<OurCoffeePage />} />
                <Route path='/forYour' element={<ForYourPage />} />
                <Route path='/ourCoffee/:id' element={<CardItemPage />} />
                <Route path='/forYour/:id' element={<CardItemPage />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;