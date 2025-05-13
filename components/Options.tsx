import React from 'react'

const Options = () => {
    const items=[ 'Unlimited websites', '100% data ownership', 'Email reports' ];
  return (
    <ul className="space-y-3 mb-6">
         {items.map((item, index) => (
            <li key={index} className="flex items-center">
                
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>

                {item}
                
            </li>
        ))}
    </ul>
)
}

export default Options