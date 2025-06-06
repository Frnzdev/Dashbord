import Link from "next/link";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  Home,
  LogOut,
  Package,
  Settings2,
  ShoppingBag,
  Users,
} from "lucide-react";

export default function DesktopSideBar() {
  return (
    <aside
      className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background
    sm:flex flex-col
    "
    >
      <nav className="flex flex-col items-center gap-4 px-2 py-5">
        <TooltipProvider>
          <Link
            href={"/"}
            className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full"
          >
            <Package className="h-4 w-4" />
            <span className="sr-only">Dashboard Avatar</span>
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={"/"}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Início</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Início</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={"/"}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Pedidos</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Pedidos</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={"/"}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
              >
                <Package className="h-5 w-5" />
                <span className="sr-only">Produtos</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Produtos</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={"/"}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
              >
                <Users className="h-5 w-5" />
                <span className="sr-only">Clientes</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Clientes</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={"/"}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
              >
                <Settings2 className="h-5 w-5" />
                <span className="sr-only">Configurações</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Configurações</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center jusfify-center gap-4 px-2 py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={"/"}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
              >
                <LogOut className="h-5 w-5 text-red-500" />
                <span className="sr-only">Sair</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Sair</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
}
