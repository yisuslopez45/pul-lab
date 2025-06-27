
const NavigationIcon = ({ category, selected }: any) => {
    const iconColor = selected ? "#ff6347" : "#ffffff";
  return (
    <div className="w-12 h-12 flex items-center justify-center">
    {category === "NEUMONIA" && (
      <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 8L14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8Z"
        stroke={iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2V8H20"
        stroke={iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 15L15 9"
        stroke={iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9H9.01"
        stroke={iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 15H15.01"
        stroke={iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    )}
    {category === "CANCER" && (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 8L14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8Z"
          stroke={iconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 2V8H20"
          stroke={iconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 15L15 9"
          stroke={iconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 9H9.01"
          stroke={iconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 15H15.01"
          stroke={iconColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
    {category === "ASMA" && (
       <svg
       width="32"
       height="32"
       viewBox="0 0 24 24"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
     >
       <path
         d="M20 8L14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8Z"
         stroke={iconColor}
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
       />
       <path
         d="M14 2V8H20"
         stroke={iconColor}
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
       />
       <path
         d="M9 15L15 9"
         stroke={iconColor}
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
       />
       <path
         d="M9 9H9.01"
         stroke={iconColor}
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
       />
       <path
         d="M15 15H15.01"
         stroke={iconColor}
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
       />
     </svg>
    )}
    {category === "TUBERCULOSIS" && (
       <svg
       width="32"
       height="32"
       viewBox="0 0 24 24"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
     >
       <path
         d="M20 8L14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8Z"
         stroke={iconColor}
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
       />
       <path
         d="M14 2V8H20"
         stroke={iconColor}
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
       />
       <path
         d="M9 15L15 9"
         stroke={iconColor}
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
       />
       <path
         d="M9 9H9.01"
         stroke={iconColor}
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
       />
       <path
         d="M15 15H15.01"
         stroke={iconColor}
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
       />
     </svg>
    )}
  </div>
  )
}

export default NavigationIcon