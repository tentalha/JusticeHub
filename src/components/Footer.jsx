import { Link } from "react-router-dom"

export const Footer = ()=>{
return(
    
<footer  style={{ zIndex: 1000 }} class=" fixed bottom-0 left-0 z-30 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span class="text-sm sm:text-xs sm:justify-center  text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">JUSTICE HUB™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm sm:text-xs font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link to="/contactus" class="mr-4 hover:underline md:mr-6">Contact Us</Link>
        </li>
        <li>
            <Link to="#" class="mr-4 hover:underline md:mr-6">Help Center</Link>
        </li>
        <li>
            <Link to="/faqs" class="hover:underline">FAQs</Link>
        </li>
    </ul>
</footer>


)
}