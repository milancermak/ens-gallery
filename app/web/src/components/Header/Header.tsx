import { EnsInfo } from 'src/hooks/useEns'

type HeaderProps = {
  ensInfo: EnsInfo
}

const Header = ({ ensInfo }: HeaderProps) => {
  return (
    <header
      className="cursor-default m-20 text-3xl font-bold tracking-wide text-center"
      title={ensInfo.address}
    >
      {ensInfo.domain}
    </header>
  )
}

export default Header
