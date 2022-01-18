import logo from '../assets/logo.png'

const Header = () => {


  return (
    <header className="flex items-center justify-between py-4 px-6 bg-black">
      <a href="/">
        <img src={logo} alt="" className="w-32 h-12 object-contain"/>
      </a>
      <div className="hidden lg:flex space-x-6 text-white">
        <a className="link">Download</a>
        <a className="link">Why Discord</a>
        <a className="link">Nitro</a>
        <a className="link">Safety</a>
        <a className="link">Support</a>
      </div>
    </header>
  )
}

export default Header
