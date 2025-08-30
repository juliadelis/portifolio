import Navbar from "@/components/Navbar";

export default function EraPrincipal() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F0F0F0] ">
      <Navbar theme="light" />
      <div className="container mt-24 mx-auto px-12 py-4">
        <div>Era principal</div>
      </div>
    </main>
  );
}
