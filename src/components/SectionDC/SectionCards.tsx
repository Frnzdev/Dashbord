import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, Percent, Receipt, Users } from "lucide-react";

export default function SectionCards() {
  return (
    <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
              Total vendas
            </CardTitle>
            <DollarSign className="ml-auto w-4 h-4" />
          </div>
          <CardDescription>Total de vendas em 90 dias:</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-base sm:text-lg font-bold">R$ 40.000</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
              Novos clientes
            </CardTitle>
            <Users className="ml-auto w-4 h-4" />
          </div>
          <CardDescription>Novos clientes em 90 dias:</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-base sm:text-lg font-bold">1.000</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
              Total pedidos
            </CardTitle>
            <Percent className="ml-auto w-4 h-4" />
          </div>
          <CardDescription>Total pedidos hoje0</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-base sm:text-lg font-bold">932</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
              Total pedidos
            </CardTitle>
            <Receipt className="ml-auto w-4 h-4" />
          </div>
          <CardDescription>Total pedidos em 30 dias</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-base sm:text-lg font-bold">2140</p>
        </CardContent>
      </Card>
    </section>
  );
}
