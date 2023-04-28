import { ReactElement } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartPage } from "./pages/CartPage/CartPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import styles from "./App.module.css";
import CartProvider from "./context/CartContext";

interface ExactRouteProps {
  exact: boolean;
  path: string;
  element: ReactElement;
}

const MainRoute: ExactRouteProps = {
  exact: true,
  path: "/",
  element: <MainPage />,
};

export const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <CartProvider>
          <Header />
          <Routes>
            <Route {...MainRoute} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </CartProvider>
      </div>
    </Router>
  );
};
