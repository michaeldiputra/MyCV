import Navbar from "./navbar";
import MobileNav from "./mobilenav";

export default function Layout({ children }) {
  return (
    <>
      <div className=" max-w-7xl mx-auto">
        <Navbar />
        <main className="md:pt-28 md:pb-0 pt-0 pb-16 px-3">{children}</main>
        <MobileNav />
      </div>
    </>
  );
}
