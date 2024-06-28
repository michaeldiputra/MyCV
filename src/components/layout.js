import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <div className=" max-w-7xl mx-auto">
        <Navbar />
        <main className="pt-28">{children}</main>
      </div>
    </>
  );
}
