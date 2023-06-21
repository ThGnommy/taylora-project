export const Alert = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div
      className={`absolute bg-black text-white px-4 py-2 rounded-md left-1/2 -translate-x-1/2 -translate-y-1/2  ${
        isVisible ? 'top-1/2' : 'top-32'
      } transition-all duration-500`}
    >
      Please, select a model first!
    </div>
  )
}
