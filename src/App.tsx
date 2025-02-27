import { CartProvider } from "./context/CartContext";
// import { FavoritesProvider } from "./favoritesContext/FavoritesContext";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Lesson05 from "./lessons/lesson05/Lesson05";
import FetchFox from "./components/fetchFox/FetchFox";
import NoPage from "./components/noPage/NoPage";
import Homework01 from "./homeworks/homework01/Homework01";
import Homework02 from "./homeworks/homework02/Homework02";
import Homework03 from "./homeworks/homework03/Homework03";
import Homework06 from "./homeworks/homework06/Homework06";
import Homework08 from "./homeworks/homework08/Homework08";
import Homework04 from "./homeworks/homework04/Homework04";
import Homework05 from "./homeworks/homework05/Homework05";
import Lesson01 from "./lessons/lesson01/Lesson01";
import Lesson02 from "./lessons/lesson02/Lesson02";
import Lesson03 from "./lessons/lesson03/Lesson03";
import Lesson04 from "./lessons/lesson04/Lesson04";
import Lesson06 from "./lessons/lesson06/Lesson06";
import Lesson07 from "./lessons/lesson07/Lesson07";
import Lesson08 from "./lessons/lesson08/Lesson08";
import Lesson09 from "./lessons/lesson09/Lesson09";
import Lesson11 from "./lessons/lesson11/Lesson11";
import CityPage from "./consultation/consultation01/CityPage";
import User from "./consultation/consultation02/User";
import Playground from "./consultation/consultation03/Playground";
import Carshop from "./consultation/consultation04/Carshop/Carshop";
import Counter from "./consultation/consultation05/Counter/Counter";
import Sendwich from "./consultation/consultation06/Sendwich/Sendwich";
import PostContainer from "./consultation/consultation07/PostContainer/PostContainer";
import Coctail from "./consultation/consultation08/Coctail/Coctail";
import UserPage from "./consultation/consultation09/UserPage/UserPage";
import ProductList from "./consultation/consultation10/ProductList/ProductList";
import Homework11 from "./homeworks/homework11/Homework11";
import ChuckNorris from "./consultation/consultation11/ChuckNorris";
import IpLocation from "./consultation/consultation12/IpLocation";
import HomePage from "./components/homePage/HomePage";
import Lesson12 from "./lessons/lesson12/Lesson12";
import FormGender from "./homeworks/homework12/FormGender";
import Task12 from "./exercises/lesson12/Task12";
import Lesson13 from "./lessons/lesson13/Lesson13";
import Task13 from "./exercises/lesson13/Task13";
import Homework13 from "./homeworks/homework13/Homework13";
import DataFetcher from "./consultation/consultation14/DataFetcher";
import Lesson14 from "./lessons/lesson14/Lesson14";
import ProductPage from "./components/productPage/ProductPage";
import Homework14 from "./homeworks/homework14/Homework14";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";


function App() {
  return (
    // <FavoritesProvider>
    <CartProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="fellowship" element={<Lesson05 />} />
            <Route path="fetch-fox" element={<FetchFox />} />
            
            {/* добавили новые пути для корзины и продутков */}
            <Route path="cart" element={<Cart />} />
            <Route path="products" element={<Products />} />
            {/* новый динамический роутинг */}
            <Route path="products/:id" element={<ProductPage />} />

            <Route path="homework-01" element={<Homework01 />} />
            <Route path="homework-02" element={<Homework02 />} />
            <Route path="homework-03" element={<Homework03 />} />
            <Route path="homework-04" element={<Homework04 />} />
            <Route path="homework-05" element={<Homework05 />} />
            <Route path="homework-06" element={<Homework06 />} />
            <Route path="homework-08" element={<Homework08 />} />
            <Route path="homework-11" element={<Homework11 />} />
            <Route path="homework-12" element={<FormGender />} />
            <Route path="homework-13" element={<Homework13 />} />
            <Route path="homework-14" element={<Homework14 />} />
            <Route path="homework-14/:id" element={<ProductPage />} />

            <Route path="lesson-01" element={<Lesson01 />} />
            <Route path="lesson-02" element={<Lesson02 />} />
            <Route path="lesson-03" element={<Lesson03 />} />
            <Route path="lesson-04" element={<Lesson04 />} />
            <Route path="lesson-05" element={<Lesson05 />} />
            <Route path="lesson-06" element={<Lesson06 />} />
            <Route path="lesson-07" element={<Lesson07 />} />
            <Route path="lesson-08" element={<Lesson08 />} />
            <Route path="lesson-09" element={<Lesson09 />} />
            <Route path="lesson-10" element={<h2>React Routing</h2>} />
            <Route path="lesson-11" element={<Lesson11 />} />
            <Route path="lesson-12" element={<Lesson12 />} />
            <Route path="lesson-13" element={<Lesson13 />} />
            <Route path="lesson-14" element={<Lesson14 />} />
            <Route path="lesson-14/:id" element={<ProductPage />} />

            <Route path="consultation-01" element={<CityPage />} />
            <Route path="consultation-02" element={<User />} />
            <Route path="consultation-03" element={<Playground />} />
            <Route path="consultation-04" element={<Carshop />} />
            <Route path="consultation-05" element={<Counter />} />
            <Route path="consultation-06" element={<Sendwich />} />
            <Route path="consultation-07" element={<PostContainer />} />
            <Route path="consultation-08" element={<Coctail />} />
            <Route path="consultation-09" element={<UserPage />} />
            <Route path="consultation-10" element={<ProductList />} />
            <Route path="consultation-11" element={<ChuckNorris />} />
            <Route path="consultation-12" element={<IpLocation />} />
            <Route path="consultation-13" element={<Products />} />
            <Route path="products/:productId" element={<ProductPage />} />
            <Route path="consultation-14" element={<DataFetcher />} />

            <Route path="task-12" element={<Task12 />} />
            <Route path="task-13" element={<Task13 />} />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </CartProvider>
    // </FavoritesProvider>
  );
}

export default App;
