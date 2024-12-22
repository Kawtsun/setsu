import { Link } from "react-router";
import logo from "../assets/setsu.png";
import bg from "../assets/setsubg.png";


function Hero() {
    return (
        <>
            <div className="relative p-12">
                <img className="absolute inset-0 w-full h-full object-cover opacity-80" src={bg} alt="bg" />
                <div className="relative mx-28 bg-opacity-80 bg-slate-200 p-10 rounded-lg">
                    <h1 className="font-bold text-5xl mb-3">Setsuna Yuki</h1>
                    <h2 className="text-lg">Member of Nijigasaki High School Idol Club <span className="italic">(Former Student Council President)</span></h2>
                    <img className="w-64 rounded-full mt-5" src={logo} alt="logo"/>
                </div>
            </div>
            <div className="mx-auto w-max  my-10 p-10 text-center space-y-5 bg-slate-50 rounded-lg text-lg">
                <h3 className="">Interested to learn more about this idol?</h3>
                <div className="py-2 px-5 border w-max mx-auto rounded-md text-white font-medium bg-blue-700 hover:bg-blue-600 ease-in-out duration-300">
                    <Link to="/about">Explore</Link>
                </div>
            </div>
        </>
    );
}

export default Hero;