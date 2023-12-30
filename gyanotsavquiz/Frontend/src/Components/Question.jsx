import React from 'react'

function Question({
    queNo,
    question,
    option1,
    option2,
    option3,
    option4
}) {
    return (
        <>
            <div className='py-3 text-black'>
                <p>{queNo} : {question}</p>
            </div>
            <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                    <div className="flex items-center ps-3">
                        <input id="list-radio-license" type="radio" value={option1} name={`queNo${queNo}`} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 "/>
                            <label for="list-radio-license" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">{option1} </label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                    <div className="flex items-center ps-3">
                        <input id="list-radio-id" type="radio" value={option2} name={`queNo${queNo}`} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 "/>
                            <label for="list-radio-id" class="w-full py-3 ms-2 text-sm font-medium text-gray-900" >{option2}</label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                    <div className="flex items-center ps-3">
                        <input id="list-radio-military" type="radio" value={option3} name={`queNo${queNo}`} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "/>
                            <label for="list-radio-military" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">{option3}</label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                    <div className="flex items-center ps-3">
                        <input id="list-radio-passport" type="radio" value={option4} name={`queNo${queNo}`} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  focus:ring-2 "/>
                            <label for="list-radio-passport" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">{option4}</label>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Question