import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Main } from "./components/layout/Main";
import { ThemeToggleButton } from "./components/ui/ThemeToggleButton";
import { useScreenWidth } from "./hooks/useScreenWidth";

function App() {
    const width = useScreenWidth();

    return (
        <>
            <Header />
            <Main />
            <Footer />
            {width <= 768 ? <ThemeToggleButton /> : null}
        </>
    );
}

export default App;
