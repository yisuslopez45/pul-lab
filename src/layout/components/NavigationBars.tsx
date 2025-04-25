
import type React from "react"
import { useState } from "react"
import { NavLink } from "react-router"

interface RetroMenuItem {
  to: string
  label: string
  icon?: React.ReactNode
}

interface RetroMenuProps {
  items: RetroMenuItem[]
  defaultSelected?: string
  onSelect?: (id: string) => void
  className?: string
}

const NavigationBars = ({ items, defaultSelected, onSelect , className }: RetroMenuProps) => {
const [selected, setSelected] = useState(defaultSelected || items[0]?.to)

  const handleSelect = (id: string) => {
    setSelected(id)
    onSelect?.(id)
  }

  return (
    <div className={`w-full px-4 py-6 bg-indigo-900 rounded-lg ${className}`}>
      <div className="w-full flex justify-center">
        <div className="inline-flex gap-2 p-2 bg-indigo-950 rounded-lg border-4 border-indigo-700 shadow-lg">
          {items.map((item) => (
            <NavLink to={item.to} end>
            <button
              key={item.to}
              onClick={() => handleSelect(item.to)}
              className={`
                relative px-6 py-3 font-bold text-lg uppercase 
                tracking-wider transition-all duration-200 rounded-md  
                border-4 border-b-8 active:border-b-4 active:translate-y-1 
                focus:outline-none focus:ring-2 focus:ring-offset-2 
                focus:ring-yellow-400
                ${selected === item.to 
                    ? "bg-yellow-500 text-indigo-900 border-yellow-700 shadow-yellow-700/30"  
                    : "bg-indigo-600 text-white border-indigo-800 hover:bg-indigo-500 shadow-indigo-900/30"
                }
                `
            }
            >
              <div className="flex items-center gap-2">
                {item.icon && <span>{item.icon}</span>}
                <span className="font-['Press_Start_2P',_monospace] text-sm">{item.label}</span>
              </div>

              {selected === item.to && (
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-300 rounded-full animate-pulse" />
              )}
            </button>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NavigationBars
