import { Link } from "react-router";
import setsu1 from "../assets/setsu.png";
import setsu2 from "../assets/setsu2.png";
import setsu3 from "../assets/setsu3.png";
import setsu4 from "../assets/setsu4.png";
import bg2 from "../assets/setsubg3.png";


function Hero() {
    return (
      <>
        <div className="relative p-12">
            {/*bg image*/}
            <img className="absolute top-24 right-20 h-3/4 object-cover"
            src={bg2}
            alt="bg" 
            />
            {/*hero intro*/}
            <div className="relative ml-2 w-max py-10 px-14 bg-white shadow-md rounded-lg">
                <h1 className="font-bold text-5xl mb-3">Setsuna Yuki</h1>
                <h2 className="text-xl">Member of Nijigasaki High Scool Idol Club <span className="italic">(Former Student Council President)</span></h2>
                <p className="mt-2 text-lg max-w-screen-md text-opacity-80 text-black">
                    A school idol who gives powerful, fiery performances and always has a smile on her face. Setsuna is so busy with her school idol activities that there are even rumors that no one has ever actually seen her at school.
                </p>
                {/*images*/}
                <div className="flex justify-evenly gap-10">
                    <img className="w-64 rounded-full mt-5 transition-transform duration-300 ease-in-out hover:scale-110"
                    src={setsu1} 
                    alt="setsu1" 
                    />
                    <img className="w-64 rounded-full mt-5 transition-transform duration-300 ease-in-out hover:scale-110"
                    src={setsu2} 
                    alt="setsu2" 
                    />
                    <img className="w-64 rounded-full mt-5 transition-transform duration-300 ease-in-out hover:scale-110"
                    src={setsu3} 
                    alt="setsu3" 
                    />
                    <img className="w-64 rounded-full mt-5 transition-transform duration-300 ease-in-out hover:scale-110"
                    src={setsu4} 
                    alt="setsu4" 
                    />
                </div>
                {/*Explore*/}
                <div className="mt-10 py-2 px-5 border w-max mx-auto rounded-md text-white font-medium bg-blue-700 hover:bg-blue-600 ease-in-out duration-300">
                    <Link to="/about">
                        Explore
                    </Link>
                </div>
            </div>
        </div>
      </>
    );
}

export default Hero;