export const ContactUs = () => {
    return (
      <div className="xl:flex-1 xl:overflow-y-auto xl:ml-52 xs:ml-0 lg:flex-1 lg:overflow-y-auto lg:ml-52 md:flex-1 md:overflow-y-auto md:ml-52 sm:flex-1 sm:overflow-y-auto sm:ml-52">
        <div className="container mx-auto mt-10 p-8 bg-white rounded-lg shadow-xl">
          <h2 className=" text-8xl font-bold mb-8 text-center justify-center font-custom text-custom-blue">Contact Us</h2>
          <div className="mb-6">
            <p className="text-2xl text-gray-600 mb-2 font-semibold">Website:</p>
            <a href="https://www.yourwebsite.com" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-600 underline">JusticeHub.com</a>
          </div>
          <div className="mb-6">
            <p className="text-2xl text-gray-600 mb-2 font-semibold">Social Media:</p>
            <ul className="list-none p-0">
              <li className="mb-3">
                <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-600 underline">Facebook</a>
              </li>
              <li className="mb-3">
                <a href="https://www.twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-600 underline">Twitter</a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <p className="text-2xl text-gray-600 mb-2 font-semibold">Contact Information:</p>
            <p className="text-xl text-gray-800">Email: info@justicehub.com</p>
            <p className="text-xl text-gray-800">Phone: +92 3316 437588</p>
          </div>
        </div>
      </div>
    );
  };
  