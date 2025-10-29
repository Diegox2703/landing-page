import { NavBar } from "./NavBar";

export function Header() {
  return (
    <header className="flex justify-between">
      <a href="/">
        <img className="w-20 " src="/images/logo.svg" alt="Logo" />
      </a>
      <NavBar/>
    </header>
  )
}
