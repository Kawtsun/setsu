import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <>
            <div className="flex flex-col">
                <header>
                    <Navbar />
                </header>

                <main className="flex-1">
                    <Hero />
                </main>
            </div>
        </>
    );
}

export default Home;