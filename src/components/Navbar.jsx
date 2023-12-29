import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Menu, Search, TimerReset, X } from "lucide-react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const links = [
  { label: "Movies", href: "/movies" },
  { label: "Tv Shows", href: "/tv" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, register } = useKindeAuth();
  const { scrollY } = useScroll();
  const [scroll, setScroll] = useState(false);
  const [hidden, setHidden] = useState(false);
  const router = useNavigate();
  const { pathname } = useLocation();

  const [term, setTerm] = useState("");
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    router(`/search/${term}`);
  };
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    addEventListener("scroll", () => {
      window.scrollY > 200 ? setScroll(true) : setScroll(false);
    });
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duartion: 0.35, ease: "easeInOut" }}
      className={`${
        scroll && "bg-black shadow-2xl"
      } fixed py-4 z-50 w-full top-0 left-0`}
    >
      <nav className="max-w-6xl mx-auto px-8 flex justify-between items-center">
        <Link to={"/"}>
          {" "}
          <h1 className="text-2xl text-red-500 font-semibold">Movico</h1>
        </Link>
        <form onSubmit={handleSubmit} className="flex items-center relative">
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Movies & Tv Shows"
            className="bg-transparent outline-none px-4 border border-gray-700 rounded-full w-full py-1"
          />
          <Search className="absolute right-3" size={18} />
        </form>
        <ul className="md:flex hidden text-sm  items-center space-x-4">
          {links.map((link) => (
            <Link
              className={`${pathname === link.href && "text-red-500"}`}
              key={link.label}
              to={link.href}
            >
              <li>{link.label}</li>
            </Link>
          ))}

          {isAuthenticated ? (
            <Link to={"/profile"}>Profile</Link>
          ) : (
            <button onClick={register} type="button">
              Register
            </button>
          )}
        </ul>
        <div
          className="cursor-pointer md:hidden flex duration-300 hover:text-red-500"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </div>
        <ul
          className={`${
            open ? "-bottom-[200px]" : "bottom-full"
          } md:hidden absolute right-6 duration-300  z-50 flex bg-red-700 w-52 h-52 p-6 flex-col  items-center space-y-4 text-xl rounded-md`}
        >
          {links.map((link) => (
            <Link
              className={`${pathname === link.href && "text-black"}`}
              key={link.label}
              to={link.href}
            >
              <li>{link.label}</li>
            </Link>
          ))}
          {isAuthenticated ? (
            <Link to={"/profile"}>Profile</Link>
          ) : (
            <button onClick={register} type="button">
              Register
            </button>
          )}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
