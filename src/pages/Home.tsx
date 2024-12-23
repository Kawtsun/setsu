import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>
                <Hero />
            </main>
        </>
    );
}

export default Home;