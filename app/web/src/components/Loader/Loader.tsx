const Loader = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div
        style={{ borderTopColor: 'transparent' }}
        className="w-16 h-16 border-8 border-blue-400 border-solid rounded-full animate-spin"
      ></div>
      <p className="mt-8">Loading gallery</p>
    </div>
  )
}

export default Loader
