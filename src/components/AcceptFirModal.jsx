import { approveFir, getAllInvestigators } from "features";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from 'react-select'
import { toast } from "react-toastify";

export const AcceptFirModal = ({ isOpen, onClose, id}) => {
    
    const dispatch = useDispatch();

    const investigatorState = useSelector((state)=>state.investigator);
    const investigators = investigatorState.investigators;
    const [selected, setSelected] = useState();


    const availableInvestigators = investigators.filter((elem)=> elem.availability === true);

    useEffect(()=>{
        dispatch(getAllInvestigators());
    },[])

    const handleChange = (selectedOption) => {
        setSelected(selectedOption.value);       
    };

     const handleFormSubmit = () =>{
        console.log(selected);
        dispatch(approveFir({id, selected}));
        onClose();
        toast.success("Investigator Alloted Successfully");
     }
    

  return (
<div
      id="authentication-modal"
      tabIndex="-1"
      aria-hidden="true"
      className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-opacity-50 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition-opacity duration-300 ease-in-out`}
    >    <div class="relative w-full max-w-md max-h-full">

        <div class="relative bg-white rounded-lg shadow-2xl">
            <button onClick={() => onClose()} type="button" class="absolute top-3 right-2.5 text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center ">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="p-6 text-center">
                
                <h3 class="mb-5 text-lg font-custom text-gray-900 ">Assign Investigator To This FIR!</h3>
                <a className="font-custom text-sm">Only the available investigators are being shown in the dropdown, you can assign one of them to this FIR. </a>
                {availableInvestigators.length > 0 ? (
                <div>
                <Select
                    value={selected ? { value: selected, label: selected } : null}
                    onChange={handleChange}
                    className="mt-5"
                    options={availableInvestigators.map((elem) => ({
                    value: elem._id,
                    label: `${elem.name} - ${elem.CNIC}`,
                    }))}
                />
                <br></br>
                <button onClick={handleFormSubmit} data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Save
                </button>
                <button onClick={()=> onClose()} data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
                </div>
                ): (<p>No Investigators are Available</p>)}
            </div>
        </div>
    </div>
</div> 
  );
};


