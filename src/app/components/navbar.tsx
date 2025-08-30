import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between gap-4 text-black px-44 pt-7 font-bold">
      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center pl-1">
        <span className="text-white font-bold text-lg">AL</span>
      </div>

      <Link href="/" className="hover:text-blue-600 text-xl">Accueil</Link>
      <Link href="/about" className="hover:text-blue-600 text-xl">About</Link>
      <Link href="/contact" className="hover:text-blue-600 text-xl">Contact</Link>
      <button className="bg-blue-600 text-white hover:bg-blue-400 px-4 py-2 rounded-2xl">S&apos;inscrire</button>
      <button className="bg-blue-600 text-white hover:bg-blue-400 px-4 py-2 rounded-2xl">Se connecter</button>
        <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-orange-600 h-10 w-10 rounded-full border-2 border-gray-200 hover:border-orange-300 transition-all duration-200"
                >
                  <User className="w-6 h-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <a href="/mon-compte" className="w-full">
                    Mon compte
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/reservation" className="w-full">
                    Mes réservations
                  </a>
                </DropdownMenuItem>
                                <DropdownMenuItem>
                  <a href="/service" className="w-full">
                     Nos services
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
    </div>
  );
}
