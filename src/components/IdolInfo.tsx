import setsubg from "../assets/setsuinfobg.png";

export default function IdolInfo() {
  return (
    <div className="w-max mx-auto" style={{ maxWidth: "1000px" }}>
      {/*intro img*/}
      <div className="my-6">
        <img
          src={setsubg}
          alt="Idol Info Background"
          style={{ maxHeight: "600px" }}
        />
      </div>

      <div>
        {/*Table Heading and Data */}
        <div className="flex flex-row justify-between border-t-2 border-gray-500 w-full py-4 px-4 text-lg">
          <div>
            <strong>Name</strong>
          </div>
          <div>
            <span>Setsuna Yuki</span>
          </div>
        </div>
        {/*Table Heading and Data */}
        <div className="flex flex-row justify-between border-t-2 border-gray-500 w-full py-4 px-4 text-lg">
          <div>
            <strong>Unit</strong>
          </div>
          <div>
            <span>Nijigasaki High School Idol Club</span>
          </div>
        </div>
        {/*Table Heading and Data */}
        <div className="flex flex-row justify-between border-t-2 border-gray-500 w-full py-4 px-4 text-lg">
          <div>
            <strong>Sub Unit</strong>
          </div>
          <div>
            <span>A-Zu-Na</span>
          </div>
        </div>
        {/*Table Heading and Data */}
        <div className="flex flex-row justify-between border-t-2 border-gray-500 w-full py-4 px-4 text-lg">
          <div>
            <strong>School</strong>
          </div>
          <div>
            <span>Nijigasaki High</span>
          </div>
        </div>
        {/*Table Heading and Data */}
        <div className="flex flex-row justify-between border-t-2 border-gray-500 w-full py-4 px-4 text-lg">
          <div>
            <strong>School Year</strong>
          </div>
          <div>
            <span>2nd year</span>
          </div>
        </div>
        {/*Table Heading and Data */}
        <div className="flex flex-row justify-between border-t-2 border-gray-500 w-full py-4 px-4 text-lg">
          <div>
            <strong>Birthday</strong>
          </div>
          <div>
            <span>August 8</span>
          </div>
        </div>
        {/*Table Heading and Data */}
        <div className="flex flex-row justify-between border-t-2 border-gray-500 w-full py-4 px-4 text-lg">
          <div>
            <strong>Astrological sign</strong>
          </div>
          <div>
            <span>Leo</span>
          </div>
        </div>
        {/*Table Heading and Data */}
        <div className="flex flex-row justify-between border-t-2 border-gray-500 w-full py-4 px-4 text-lg">
          <div>
            <strong>Height</strong>
          </div>
          <div>
            <span>1m 54cm | <small>5'</small></span>
          </div>
        </div>
        
    
        
      </div>
    </div>
  );
}
