import tomori from "../assets/tomori.jpg";

export default function SeiyuuInfo() {
    return (
        <div
            className="w-max mx-auto bg-white py-3 px-10 text-opacity-80 text-black"
            style={{ width: "1000px" }}
        >
            {/*intro img*/}
            <div className="my-6">
                <img className="mx-auto"
                src={tomori}
                alt="Idol Info Background"
                style={{ maxHeight: "600px" }}
                />
            </div>

            <div className="my-5 space-y-5 text-lg">
                <h2 className="text-2xl font-bold">Tomori Kusunoki</h2>
                <p>
                    <b>Tomori Kusunoki</b> was born on December 22, 1999. Her common voice actress nickname is "Tomoriru". She is the former voice actress of Setsuna Yuki, one of the main characters in Love Live! Nijigasaki High School Idol Club.
                </p>
                <p>
                    Her call-and-response during concerts began with "Are? Minna-san, jaaku na mono ni tori tsukaretemasu yo!" (lit. Huh? Everyone, you've been taken over by an evil being!), to which the audience replies "Tasukete!" (lit. Save me!). She then shouts "Setsuna Scarlet Storm!" and aims at the audience who shouts "Woah!" in response. She finishes with "Fuu~! Kyou mo mata sekai wo sukutte shimaimashita!" (lit. Phew, I managed to save the world again today!). Her call-and-reponse is now being used by Setsuna's current voice actress, Coco Hayashi.
                </p>
                <p>
                    Her image color during concerts was scarlet red.
                </p>
            </div>

            <div>
                {/*Table Heading and Data */}
                <div className="flex flex-row justify-between border-t-2 border-gray-500 w-full py-4 px-4 text-lg">
                    <div>
                        <strong>Name</strong>
                    </div>
                    <div>
                        <span>Kusunoki Tomori</span>
                    </div>
                </div>
                {/*Table Heading and Data */}
                <div className="flex flex-row justify-between border-t-2 border-gray-500 w-full py-4 px-4 text-lg">
                    <div>
                        <strong>Nickname</strong>
                    </div>
                    <div>
                        <span>Tomoriru</span>
                    </div>
                </div>
                {/*Table Heading and Data */}
                <div className="flex flex-row justify-between border-t-2 border-gray-500 w-full py-4 px-4 text-lg">
                    <div>
                        <strong>Astrological sign</strong>
                    </div>
                    <div>
                        <span>Capricorn</span>
                    </div>
                </div>
                {/*Table Heading and Data */}
                <div className="flex flex-row justify-between border-t-2 border-gray-500 w-full py-4 px-4 text-lg">
                    <div>
                        <strong>Height</strong>
                    </div>
                    <div>
                        <span>1m 54cm <small>(5')</small></span>
                    </div>
                </div>
                {/*Table Heading and Data */}
                <div className="flex flex-row justify-between border-t-2 border-gray-500 w-full py-4 px-4 text-lg">
                    <div>
                        <strong>Specialty</strong>
                    </div>
                    <div>
                        <span>Drawing</span>
                    </div>
                </div>
                {/*Table Heading and Data */}
                <div className="flex flex-row justify-between border-t-2 border-gray-500 w-full py-4 px-4 text-lg">
                    <div>
                        <strong>Hobbies</strong>
                    </div>
                    <div>
                        <span>Songwriting, Playing the guitar and the trumpet</span>
                    </div>
                </div>
            </div>
            {/*Other Information*/}
            <div className="my-5 space-y-5 text-lg">
                <h2 className="text-2xl font-bold">Background</h2>
                <p>
                    She has been learning the piano since she was three. She was in the brass band in junior high school, and was in the light music club in high school.
                </p>
                <p>
                    She also contributed her singing voice in a lot of other media franchises such as Onsen Musume and Banmeshi.
                </p>
                <p>
                    She is one of the awardees for Best Newcomer (Female) in the 13th Seiyuu Awards (2019).
                </p>
                <p>
                    She announced her solo artist debut during her birthday live event in 2019. She released her first EP "Hamidashimono" on August 19, 2020 — the title track is featured as the ED theme for "The Misfit of Demon King Academy" TV anime.
                </p>
                <p>
                    On November 1, 2022, it was announced that Tomori would step down from her role as Setsuna in the Love Live! franchise on March 31, 2023.[1] On March 25, 2023, it was announced that her successor to being Setsuna's new voice actress would be Coco Hayashi.
                </p>

                <h2 className="text-2xl font-bold">Personality & Hobbies</h2>
                <p>
                    Her hobbies are songwriting, playing the guitar, walking around in an art materials store, and looking at the sky. Her skills are drawing (including digital art) and playing the trumpet.
                </p>
                
                <h2 className="text-2xl font-bold">Other Roles</h2>
                <p>
                    Some of Tomori's other roles include:
                </p>
                <ul className="list-disc ml-10">
                    <li>Makima in <span className="italic">Chainsaw Man</span></li>
                    <li>Karen Kohiruimaki/LLENN in <span className="italic">Sword Art Online Alternative: Gun Gale Online</span></li>
                    <li>Natsume in <span className="italic">Deca-Dence</span></li>
                    <li>Futaba Igarashi in <span className="italic">My Senpai is Annoying</span></li>
                    <li>Tamao Tomoe in <span className="italic">Shojo Kageki Revue Starlight: ReLIVE</span></li>
                    <li>Kanade Yoisaki in <span className="italic">Project SEKAI COLOFUL STAGE! feat. Hatsune Miku</span></li>
                    <li>Annett in <span className="italic">Spy Kyoushitsu</span></li>
                    <li>Firefly in <span className="italic">Honkai Star Rail</span></li>
                    <li>Viper in <span className="italic">NIKKE</span></li>
                </ul>

                <h2 className="text-2xl font-bold">Health issues</h2>
                <p>
                    Tomori has been experiencing joint pains and numbness when doing large movements which led to her live performances and dance movements being minimized. On November 1, 2022, her condition for why she feels joint pains and numbness when doing large movements during her live performances was diagnosed as Hypermobile Ehlers-Danlos syndrome.
                </p>
                <p>
                    On May 8, 2023, Tomori tested positive for COVID-19.[2]
                </p>

                <h2 className="text-2xl font-bold">Etymology</h2>
                <ul className="list-disc ml-10">
                    <li>Tomori's surname <b>Kusunoki</b> means "camphor tree" (楠) (<b>kusu</b>) and "tree, wood" (木) (<b>ki</b>).</li>
                </ul>

                <h2 className="text-2xl font-bold">Trivia</h2>
                <ul className="list-disc ml-10">
                    <li>She was the student council president in middle school.</li>
                    <li>She is in the same agency as Anju Inami and Hinaki Yano.</li>
                    <li>She is the youngest among the Nijigaku main cast members and the youngest Love Live! seiyuu prior to the introduction of Naomi Payton and Sayuri Date from Love Live! Superstar!!.</li>
                    <li>She is under the same record label as Shuka Saito.</li>
                    <li>She apparently eats ramen for breakfast everyday. Her favorite is shoryu ramen.</li>
                    <li>She is the first seiyuu in the Love Live! franchise to step down from voicing her character.</li>
                </ul>
            </div>
        </div>
    );
}