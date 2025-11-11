import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <>
      <div className="absolute">
        <img className="bg-gray-600 rounded-br-2xl p-3" src={Logo} />
      </div>
    </>
  );
}
