type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <header>
        <h1>Hello, edit the MainLayout too</h1>
      </header>
      {children}
    </>
  )
}

export default MainLayout
