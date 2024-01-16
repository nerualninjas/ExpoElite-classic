import Link from "next/link";

const Navbar = () => {
  const menu = [
    { pageName: "Home", path: "/" },
    { pageName: "About", path: "/about" },
    { pageName: "Services", path: "/services" },
    { pageName: "Blog", path: "/blog" },
    { pageName: "Pricing", path: "/pricing" },
    { pageName: "Contact", path: "/contact" },
  ];
  return (
    <div className=" text-[#222222] bg-base-100 py-8 border-b-2 border-[#0c7e5c] ">
      <div className="flex items-center justify-between container mx-auto">
        <h2 className="text-3xl">ExpoElite</h2>
        <ul className="flex items-center gap-6  text-xl">
          {menu.map((item) => (
            <li key={item.pageName}>
              <Link
                className="hover:bg-[#0c7e5c] hover:text-white py-2 px-2 rounded-md"
                href={item.path}
              >
                {item.pageName}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 items-center">
          <h2>My List</h2>
          <button className="py-2 px-3 rounded-md text-white bg-[#0c7e5c]">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
