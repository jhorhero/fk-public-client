import { Helmet } from "react-helmet-async";


const Admisions = () => {
    return (
        
        <div className="bg-gray-100  flex items-center justify-center">
 
 <Helmet>
        <title>Admission</title>
            </Helmet>

  <div className="bg-white max-w-md p-6 rounded-md shadow-md">
    <div className="flex items-start">
      <div className="mr-4">
        {/* <!-- Use appropriate icon for your notice, I'm using an exclamation mark for demonstration purposes --> */}
        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h0"></path>
          <path d="M21 21.167A10 10 0 1 1 2.83 2.83 10 10 0 0 1 21 21.167zM12 14V7"></path>
        </svg>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-800">Notice:</p>
        <p className="text-sm text-gray-600">This is a sample notice. Sorry! No Information Found.</p>
      </div>
    </div>
  </div>

</div>
    );
};

export default Admisions;