import { EnsInfo } from 'src/hooks/useEns'

type HeaderProps = {
  ensInfo: EnsInfo
}

const Header = ({ ensInfo }: HeaderProps) => {
  return (
    <header className="flex flex-col w-screen h-20 mb-12 justify-center text-center bg-gray-700">
      <span
        className="text-3xl font-bold text-purple-100 tracking-wide cursor-default "
        title={ensInfo.address}
      >
        {ensInfo.domain}
      </span>
    </header>
  )
}

export default Header
