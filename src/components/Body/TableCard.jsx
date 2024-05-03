import { BsThreeDots } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";


const TableCard = () => {
    return (


            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
                <table class="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Job Id
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Position
                            </th>
                            <th scope="col" class="px-6 py-3">
                                1st level
                            </th>
                            <th scope="col" class="px-6 py-3">
                                2nd level
                            </th>
                            <th scope="col" class="px-6 py-3">
                                3rd level
                            </th>  
                            <th scope="col" class="px-6 py-3">
                                4th level
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Total marks
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>                                
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                #001"
                            </th>
                            <td class="px-6 py-4">
                                John Doe
                            </td>
                            <td class="px-6 py-4">
                                Designer
                            </td>
                            <td class="px-6 py-4">
                                6/10
                            </td>
                            <td class="px-6 py-4">
                                6/10
                            </td>
                            <td class="px-6 py-4">
                                6/10
                            </td>
                            <td class="px-6 py-4">
                                ...
                            </td>
                            <td class="px-6 py-4">
                                <BsThreeDots/>
                            </td>
                            <td class="px-6 py-4">
                               <div className=" bg-red-200 px-4 py-1 text-red-700 font-semibold">
                                    Reject
                                </div>                            </td>
                            <td class="px-6 py-4">
                                <IoEyeOutline className="w-4 h-4"/>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                #002"
                            </th>
                            <td class="px-6 py-4">
                                John Smith
                            </td>
                            <td class="px-6 py-4">
                                Angular developer
                            </td>
                            <td class="px-6 py-4">
                                6/10
                            </td>
                            <td class="px-6 py-4">
                                6/10
                            </td>
                            <td class="px-6 py-4">
                                6/10
                            </td>
                            <td class="px-6 py-4">
                                ...
                            </td>
                            <td class="px-6 py-4">
                                ...
                            </td>
                            <td class="px-6 py-4">
                               <div className=" bg-green-200 px-4 py-1 text-green-700 font-semibold">
                                    Hired
                                </div>                            </td>
                            <td class="px-6 py-4">
                            <IoEyeOutline className="w-4 h-4"/>
                            </td>
                        </tr>                        
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                #003"
                            </th>
                            <td class="px-6 py-4">
                                Stella
                            </td>
                            <td class="px-6 py-4">
                                React developer
                            </td>
                            <td class="px-6 py-4">
                                6/10
                            </td>
                            <td class="px-6 py-4">
                                6/10
                            </td>
                            <td class="px-6 py-4">
                                6/10
                            </td>
                            <td class="px-6 py-4">
                                ...
                            </td>
                            <td class="px-6 py-4">
                                ...
                            </td>
                            <td class="px-6 py-4">
                               <div className=" bg-yellow-200 px-4 py-1 text-yellow-700 font-semibold">
                                    Active
                                </div>                            </td>
                            <td class="px-6 py-4">
                            <IoEyeOutline className="w-4 h-4"/>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                #004"
                            </th>
                            <td class="px-6 py-4">
                                Randy
                            </td>
                            <td class="px-6 py-4">
                                ios developer
                            </td>
                            <td class="px-6 py-4">
                                6/10
                            </td>
                            <td class="px-6 py-4">
                                6/10
                            </td>
                            <td class="px-6 py-4">
                                6/10
                            </td>
                            <td class="px-6 py-4">
                                ...
                            </td>
                            <td class="px-6 py-4">
                                ...
                            </td>
                            <td class="px-6 py-4">
                               <div className=" bg-red-200 px-4 py-1 text-red-700 font-semibold">
                                    Reject
                                </div>                            </td>
                            <td class="px-6 py-4">
                            <IoEyeOutline className="w-4 h-4"/>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                #001"
                            </th>
                            <td class="px-6 py-4">
                                John Doe
                            </td>
                            <td class="px-6 py-4">
                                Designer
                            </td>
                            <td class="px-6 py-4">
                                6/10
                            </td>
                            <td class="px-6 py-4">
                                6/10
                            </td>
                            <td class="px-6 py-4">
                                6/10
                            </td>
                            <td class="px-6 py-4">
                                ...
                            </td>
                            <td class="px-6 py-4">
                                ...
                            </td>
                            <td class="px-6 py-4">
                                <div className=" bg-green-200 px-4 py-1 text-green-700 font-semibold">
                                    Hired
                                </div>
                            </td>
                            <td class="px-6 py-4">
                            <IoEyeOutline className="w-4 h-4"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

    )
}

export default TableCard