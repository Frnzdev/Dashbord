import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

import {
  Home,
  Package,
  PanelBottom,
  Settings2,
  ShoppingBagIcon,
  Users,
} from "lucide-react";
export default function MobileSideBar() {
  return (
    <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <header
        className="sticky top-0 z-30 h-14 items-center px-4 border-b bg-background gap-4 sm:static
         sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
              <PanelBottom className="w-5 h-5" />
              <span className="sr-only">ABRIR / fechar menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="sm:max-w-xs">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                className="flex h-10 w-10 bg-primary rounded-full
                  text-lg items-center justify-center text-primary-foreground m-2"
                prefetch={false}
                href={"/"}
              >
                <Package className=" h-5 w-5 transition-all" />
                <span className="sr-only">My-dash logo</span>
              </Link>

              <Link
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
                href={"/"}
              >
                <Home className="h-5 w-5 transition-all" />
                Início
              </Link>

              <Link
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
                href={"/"}
              >
                <ShoppingBagIcon className="h-5 w-5 transition-all" />
                Pedidos
              </Link>

              <Link
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
                href={"/"}
              >
                <Package className="h-5 w-5 transition-all" />
                Produtos
              </Link>

              <Link
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
                href={"/"}
              >
                <Users className="h-5 w-5 transition-all" />
                Clinte
              </Link>

              <Link
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
                href={"/"}
              >
                <Settings2 className="h-5 w-5 transition-all" />
                Configurações
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
}
