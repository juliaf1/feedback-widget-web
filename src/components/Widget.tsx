import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';

export function Widget() {
  return (
    <Popover className="absolute bottom-5 right-5">
      <Popover.Panel>oi</Popover.Panel>

      <Popover.Button className="group flex items-center bg-brand-500 rounded-full px-3 h-12 text-white">
        <ChatTeardropDots className="w-6 h-6"/>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}

// import { useState } from 'react';
// export function Widget() {
//   const [isWidgetOpen, setIsWidgetOpen] = useState(false)

//   function toggleWidgetVisibility() {
//     setIsWidgetOpen(!isWidgetOpen)
//   }

//   return (
//     <div className="absolute bottom-5 right-5">
//       { isWidgetOpen && <p>oi</p> }

//       <button onClick={toggleWidgetVisibility} className="group flex items-center bg-brand-500 rounded-full px-3 h-12 text-white">
//         <ChatTeardropDots className="w-6 h-6"/>
//         <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-linear">
//           <span className="pl-2"></span>
//           Feedback
//         </span>
//       </button>
//     </div>
//   )
// }