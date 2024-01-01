

const NoticeBoard = () => {
    return (
        <div className="max-w-screen-2xl lg:flex  justify-center  mx-auto h-">
          <div className="border-2 h-[] m-2  lg:w-[20%]">
            <h1 className="text-center p-2 text-white font-bold bg-blue-600">Notice Board</h1>
            <div className="container p-5 ">
              <div className="border-l-2 border-blue-600 p-5">
              <h1>Goverment Notice</h1>
              <p>22 December 2023</p>
              </div>
            </div>
            <div className="container p-5 ">
              <div className="border-l-2 border-blue-600 p-5">
              <h1>Goverment Notice</h1>
              <p>22 December 2023</p>
              </div>
            </div>
            <div className="container p-5 ">
              <div className="border-l-2 border-blue-600 p-5">
              <h1>Goverment Notice</h1>
              <p>22 December 2023</p>
              </div>
            </div>
            </div>  
          
        </div>
    );
};

export default NoticeBoard;