type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <h1>Hello, edit the MainLayout too</h1>
      {children}
    </>
  )
}

export default MainLayout
