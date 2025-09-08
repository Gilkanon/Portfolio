import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Main } from "./components/layout/Main";
import { ThemeToggle } from "./components/ui/ThemeToggle";

function App() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
            <ThemeToggle />
        </>
    );
}

export default App;
