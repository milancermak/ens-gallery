import { Link, routes } from '@redwoodjs/router'

type GalleryLayoutProps = {
  children?: React.ReactNode
}

const GalleryLayout = ({ children }: GalleryLayoutProps) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Gallery</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default GalleryLayout
