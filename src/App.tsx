import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/homepage";
import KakoFunkcioniraGotvachi from "./pages/kakoFunkcionira-Gotvachi";
import KakoFunkcioniraGurmani from "./pages/kakoFunkcionira-Gurmani";
import Meni from "./pages/menu";
import Gotvachi from "./pages/gotvachi";
import ChefHomepage from "./pages/chefHomepage";
import { useEffect, useState } from "react";
import { ContextProvider } from "./context/ProviderChefList";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    const [chefData, setChefData] = useState([]);
    const [recipeData, setRecipeData] = useState([]);
    const [reviewsData, setReviewsData] = useState([]);

    let loadedData = false;

    useEffect(() => {
        if (loadedData === false) {
            fetch("https://thankful-purring-orca.glitch.me/data")
                .then((res) => res.json())
                .then((data) => {
                    setChefData(data[0].chefs);
                    setRecipeData(data[0].recipes);
                    setReviewsData(data[0].reviews);
                });
        }

        return () => {
            loadedData = true;
        };
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop>
                    <ContextProvider
                        chefData={chefData}
                        reviewsData={reviewsData}
                        recipesData={recipeData}
                    >
                        <Header />
                        <Routes>
                            <Route path="/" element={<Homepage />} />
                            <Route
                                path="/kako-funkcionira-Gotvachi"
                                element={<KakoFunkcioniraGotvachi />}
                            />
                            <Route
                                path="/kako-funkcionira-Gurmani"
                                element={<KakoFunkcioniraGurmani />}
                            />
                            <Route path="/meni" element={<Meni />} />
                            <Route path="/meni/:address" element={<Meni />} />
                            <Route path="/gotvachi" element={<Gotvachi />} />
                            <Route
                                path="/gotvachi/:id"
                                element={<ChefHomepage />}
                            />
                        </Routes>
                        <Footer />
                    </ContextProvider>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
}

export default App;
