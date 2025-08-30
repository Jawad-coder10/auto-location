import Navbar from "./components/navbar"


export default function Home() {
  return (
    <div className="bg-[url(/images/acceuil.webp)] bg-cover bg-center min-h-screen opacity-80 text-black flex flex-col gap-35">
       <div>
       <Navbar />
      </div>
    </div>
  );
}
