import { Link } from "react-router";
import setsu1 from "../assets/setsu.png";
import setsu2 from "../assets/setsu2.png";
import setsu3 from "../assets/setsu3.png";
import setsu4 from "../assets/setsu4.png";
import bg from "../assets/setsubg.png";


function Hero() {
    return (
        <>
            <div className="relative p-12">
                <img className="absolute inset-0 w-full h-full object-cover opacity-40" src={bg} alt="bg" />
                <div className="relative mx-28 bg-opacity-70 bg-slate-100 p-10 rounded-lg">
                    <h1 className="font-bold text-5xl mb-3">Setsuna Yuki</h1>
                    <h2 className="text-lg">Member of Nijigasaki High School Idol Club <span className="italic">(Former Student Council President)</span></h2>
                    <div className="flex justify-evenly">
                        <img className="w-64 rounded-full mt-5 transition-transform duration-300 ease-in-out hover:scale-110" src={setsu1} alt="setsu1"/>
                        <img className="w-64 rounded-full mt-5 transition-transform duration-300 ease-in-out hover:scale-110" src={setsu2} alt="setsu2"/>
                        <img className="w-64 rounded-full mt-5 transition-transform duration-300 ease-in-out hover:scale-110" src={setsu3} alt="setsu3"/>
                        <img className="w-64 rounded-full mt-5 transition-transform duration-300 ease-in-out hover:scale-110" src={setsu4} alt="setsu4"/>
                    </div>
                    <div className="mx-auto w-max my-10 py-10 px-20 text-center space-y-5 bg-slate-50 rounded-lg text-lg">
                <h3 className="">Learn more about this idol</h3>
                <div className="py-2 px-5 border w-max mx-auto rounded-md text-white font-medium bg-blue-700 hover:bg-blue-600 ease-in-out duration-300">
                    <Link to="/about">Explore</Link>
                </div>
            </div>
                    
                </div>
            </div>
            
        </>
    );
}

export default Hero;