export const Tooltip = ({
  message,
  width = 'w-[300px]',
  children,
}: {
  message: string
  width?: string
  children: React.ReactNode
}) => {
  return (
    <div className="relative flex flex-col items-center group transition-all duration-150">
      {children}
      <div
        className={`absolute duration-150 invisible ${width} bottom-10 flex-col items-center mb-6 opacity-0 -translate-y-2 group-hover:-translate-y-0 group-hover:opacity-100 group-hover:visible flex`}
      >
        <p className="relative z-10 py-2 px-4 text-md text-custom-grey bg-light-grey/80 rounded-full">
          {message}
        </p>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-light-grey"></div>
      </div>
    </div>
  )
}
