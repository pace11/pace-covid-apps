import * as React from 'react'

function SvgLoader(props) {
  return (
    <svg
      width={100}
      height={100}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      display="block"
      {...props}
    >
      <path
        fill="none"
        stroke="#f2f2f2"
        strokeWidth={6.4}
        strokeDasharray="42.76482137044271 42.76482137044271"
        d="M19.44 24C9.12 24 4 34.64 4 40s5.12 16 15.44 16c15.44 0 25.68-32 41.12-32C70.88 24 76 34.64 76 40s-5.12 16-15.44 16c-15.44 0-25.68-32-41.12-32z"
        strokeLinecap="round"
        style={{
          transformOrigin: '50px 50px',
        }}
      >
        <animate
          attributeName="stroke-dashoffset"
          repeatCount="indefinite"
          dur="1.2s"
          keyTimes="0;1"
          values="0;256.58892822265625"
        />
      </path>
    </svg>
  )
}

export default SvgLoader
