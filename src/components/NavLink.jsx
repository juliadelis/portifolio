import Link from "next/link";

const NavLink = ({ href, title, theme = "dark" }) => {
  const isDark = theme === "dark";

  const palette = {
    textBase: isDark ? "text-[#ADB7BE]" : "text-[#33353F]",
    hover: isDark ? "hover:text-white" : "hover:text-[#111827]",
  };
  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 ${palette.textBase} ${palette.hover}`}>
      {title}
    </Link>
  );
};

export default NavLink;
