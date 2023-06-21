export const ArrowSvg = ({
  width,
  height,
  viewBox,
  className,
}: {
  width?: string
  height?: string
  viewBox?: string
  className?: string
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width={width}
    height={height}
    viewBox={viewBox}
    className={className}
  >
    <g transform="translate(0, 8)">
      <polygon points="4.9,15.7 3.4,14.3 9.7,8 3.4,1.7 4.9,0.3 12.6,8 " />
    </g>
  </svg>
)

export const CarCheckSvg = ({
  selectedCar,
}: {
  selectedCar: string | null
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="44px"
    height="44px"
    viewBox="0 0 44 44"
    className={`transition-opacity duration-150 ${
      selectedCar ? 'opacity-100' : 'opacity-0'
    }`}
  >
    <g transform="translate(10, 10)">
      <polyline
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="square"
        strokeMiterlimit="10"
        points="2,12 9,19 22,6 &#10;&#9;"
        strokeLinejoin="miter"
      />
    </g>
  </svg>
)

export const AccessoryCheckSvg = ({
  accessorySelected,
}: {
  accessorySelected: boolean
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="44px"
    height="44px"
    viewBox="0 0 44 44"
    className={`transition-opacity duration-150 ${
      accessorySelected ? 'opacity-100' : 'opacity-0'
    }`}
  >
    <g transform="translate(10, 10)">
      <polyline
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="square"
        strokeMiterlimit="10"
        points="2,12 9,19 22,6 &#10;&#9;"
        strokeLinejoin="miter"
      />
    </g>
  </svg>
)
