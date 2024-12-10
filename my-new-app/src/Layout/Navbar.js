import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  console.log(router.pathname);

  // navbar
  return (
    <nav className="p-4 flex items-center justify-between">
      {/* logo */}
      <div className="text-xl font-bold">
        <a href="/">
          <img
            src="https://sginterior.com.sg/wp-content/uploads/2024/06/cropped-SGI-Primary_OB_Transparent-SQ-2000px-1.png"
            className="h-16 pl-4"
          />
        </a>
      </div>
      {/* Navbar */}
      <ul className="list-none flex gap-8 pr-14">
        <li className={router.pathname === "/" ? "font-bold" : ""}>
          <a href="/">Home</a>
        </li>
        <li className={router.pathname === "/projects" ? "font-bold" : ""}>
          <a href="/projects">Projects</a>
        </li>
        <li className={router.pathname === "/whatWeDo" ? "font-bold" : ""}>
          <a href="/whatWeDo">What We Do</a>
        </li>
        <li className={router.pathname === "/about" ? "font-bold" : ""}>
          <a href="/about">About Us</a>
        </li>
        <li className={router.pathname === "/events" ? "font-bold" : ""}>
          <a href="/events">Events</a>
        </li>
        <li className={router.pathname === "/career" ? "font-bold" : ""}>
          <a href="/career">Career</a>
        </li>
        <li className={router.pathname === "/contact" ? "font-bold" : ""}>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
