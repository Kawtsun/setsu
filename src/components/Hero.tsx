 import logo from "../assets/setsu.png";
 import bg from "../assets/setsubg.png";


function Hero() {
    return (
        <>
            <div className="relative p-12">
                <img className="absolute inset-0 w-full h-full object-cover opacity-80" src={bg} alt="bg" />
                <div className="relative mx-28 space-y-2 bg-opacity-80 bg-slate-200 p-10 rounded-lg">
                    <h1 className="font-bold text-5xl">Setsuna Yuki</h1>
                    <h2 className="text-lg">Member of Nijigasaki High School Idol Club (Former Student Council President)</h2>
                    <img className="w-64 rounded-full" src={logo} alt="logo"/>
                </div>
            </div>
        </>
    );
}

export default Hero;