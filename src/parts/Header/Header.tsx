import { NavBar } from "../../components/NavBar";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <header>
      <NavBar />
    </header>
  );
};

export { Header };
