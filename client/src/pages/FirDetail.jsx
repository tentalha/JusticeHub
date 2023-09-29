import { useSelector } from "react-redux";
import { Icon } from "components";

export const FirDetail = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className=" xl:flex-1 xl:overflow-y-auto xl:ml-52 xs:ml-0 lg:flex-1 lg:overflow-y-auto lg:ml-52 md:flex-1 md:overflow-y-auto md:ml-52 sm:flex-1 sm:overflow-y-auto sm:ml-52">
      {" "}
      {/* Adjust the margin to match your sidebar width */}
      <div
        className={`mt-0 flex flex-col sm:flex-row justify-between items-center `}
      >
        <h1 className=" xl:ml-20 sm:ml-0 max-w-sm text-4xl top-0 font-bold font-custom text-center justify-center  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500 ">
          Admin Dashobard
        </h1>

        <div className="flex justify-self-auto mt-2 xl:mr-8 sm:mr-0 sm:mt-0">
          <p className=" font-custom-blue font-semibold font-custom  ">
            FAQ | Contact Us | Help Center
          </p>

          <h1 className=" max-w-sm ml-20 mr-1 text-xl font-bold font-custom text-center justify-center  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500  mx-auto ">
            {user?.name}
          </h1>
          <div className="mt-1">
            <Icon src="/icons/account.png" />
          </div>
        </div>
      </div>
      <hr className="h-2 mt-4 bg-custom-blue"></hr>
      <h1 className=" bg-gray-100 hover:text-white mt-2 mb-2 hover:bg-black p-3 py-6 rounded-2xl xl:ml-4 xl:mr-4 sm:ml-0 sm:mr-0 text-sm sm:text-sm md:text-sm lg:text-sm font-bold font-custom text-center transform scale-100 hover:scale-95 transition-transform duration-300 ease-in-out">
        Hey Admin, Here's the Detailed Infomation of the FIR. You can also see the Related documents of the FIR and also the Evidences which has been uploaded by investigator. You can assign investigators to the pending FIRs.
      </h1>
      <div class="container mx-auto px-4 lg:px-20 mb-20">
        <div class="w-full p-8 my-4 md:px-12 lg:w-full lg:pl-4 lg:pr-0 mr-auto rounded-2xl shadow-xl shadow-custom-blue">
          <div class="flex">
            <h1 class="ml-4 sm:ml-0 w-fit text-4xl border-b-8 border-b-custom-blue top-0 font-bold font-custom bg-clip-text  text-custom-blue">
              FIR # erd426
            </h1>
          </div>
          <div class="grid grid-cols-1 gap-5 gap-x-28 md:grid-cols-2 mt-5 pr-5">
            <div>
              <h1 class="w-full lg:w-full bg-white mr-5 font-semibold placeholder:text-black text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline">Complainant's Name: Arshan Mudassar Yousaf</h1>
            </div>

            <div>
              <h1 class="w-full lg:w-full bg-white mr-5 font-semibold placeholder:text-black text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline">Date and Time: 10-10-2023 12:40 pm</h1>
            </div>

            <div>
              <h1 class="w-full lg:w-full bg-white mr-5 font-semibold placeholder:text-black text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline">CNIC: 35202-4831122-3</h1>
            </div>

            <div>
              <h1 class="w-full lg:w-full bg-white mr-5 font-semibold placeholder:text-black text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline">Place Of Incident: Wapda Town</h1>
            </div>

            <div>
              <h1 class="w-full lg:w-full bg-white mr-5 font-semibold placeholder:text-black text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline">Incident Type: Murder</h1>
            </div>
                
            <div>
              <h1 class="w-full lg:w-full bg-white mr-5 font-semibold placeholder:text-black text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline">Phone Number: +92 331 6437588</h1>
            </div>

          </div>

          <div class="my-4 mr-5">
            <h1
              class="w-full h-full bg-white border-gray-300  font-semibold placeholder:text-black text-gray-900 mt-2 p-1  rounded-lg focus:outline-none focus:shadow-outline"
            >
                Details/Description: <br></br> On the aforementioned date and time, the Urban City Police Department received a distress call reporting a suspected burglary at 123 Oakridge Street. Officer Alex Rodriguez, along with his partner, Officer Emily Martinez, promptly responded to the scene.

Upon arrival, the officers observed signs of forced entry at the rear door of the residence. The reporting party, Mrs. Sarah Johnson, a resident of the house, met the officers and explained that she had returned home from a weekend trip to find her residence in disarray.

Mrs. Johnson reported that valuable items, including jewelry, electronic gadgets, and personal documents, were missing from the master bedroom. She indicated that she left her home securely locked and was certain that no family members or authorized individuals had access during her absence.

Officers conducted a preliminary search of the premises, noting that the burglar had rifled through drawers and closets in a hasty manner, leaving behind several disturbed personal items. The forensic team was contacted to gather fingerprints and any other potential evidence at the scene.

Mrs. Johnson, visibly shaken, provided a detailed list of missing items and their approximate values. She mentioned that she did not witness the crime and was unsure if any security cameras in the vicinity might have captured the incident.

The officers secured the scene and advised Mrs. Johnson not to touch or disturb anything further to preserve the integrity of potential evidence. They assured her that a thorough investigation would be conducted to identify and apprehend the perpetrator.

Subsequently, the incident was officially documented, and a case file was opened for further investigation. The forensic team arrived to collect evidence, and the residence was temporarily secured pending a more detailed examination.

The Urban City Police Department is committed to pursuing all leads and utilizing available resources to bring the perpetrator to justice. Further updates on the investigation will be provided to Mrs. Johnson as they become available.
            </h1>
          </div>

            <div>
              <h1 class="w-full lg:w-full bg-white mr-5 font-semibold placeholder:text-black text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline">Suspect Name: Pablo Escobar</h1>
            </div>

            <div>
              <label
                htmlFor="RelevantDocuments"
                className="text-black font-semibold"
              >
                Relevant Documents
              </label>
              <label class="relative mt-5 font-bold font-custom inline-flex ml-5 items-center px-20 py-3 bg-custom-blue text-white rounded-3xl border border-gray-300 cursor-pointer hover:bg-blue-400">
                <span class="mr-2">Choose File</span>
                <input
                  type="file"
                  id="RelevantDocuments"
                  name="RelevantDocuments"
                  class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer bg-custom-blue rounded-3xl"
                />
              </label>
            </div>
          <div class="my-2 mt-10 w-full lg:w-1/4 flex justify-center items-center">
            <button class="text-sm font-semibold font-custom tracking-wide bg-green-500 text-gray-100 p-4 rounded-3xl w-full focus:outline-none focus:shadow-outline">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
