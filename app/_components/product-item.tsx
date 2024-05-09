import { Prisma } from "@prisma/client";
import Image from "next/image";
import { calculateProductTotalPrice, formatCurrency } from "../_helpers/price";
import { ArrowDownIcon } from "lucide-react";

// "Cada item vai ser a mesma coisa em questão de estilo, o que vai mudar
// vai ser as informações. Quando você tem um componente que é a mesma coisa
// em questão de estilo e só mudar as informações que ele exibe, aí você usa props."

interface ProductItemProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="w-[150px] min-w-[150px] space-y-2">
      {/* div da IMAGEM */}
      <div className="relative h-[150px] w-full">
        {/* prop 'fill' dentro da tag Image: automaticamente, preenche 100% da div pai 
                    className="object-cover" faz com que a imagem não perca o aspect ratio (pra imagem não ficar esticada)*/}
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="rounded-lg object-cover shadow-md"
        />
        {product.discountPercentage > 0 && (
          <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-primary px-2 py-[2px] text-white">
            <ArrowDownIcon size={12} />
            <span className="text-xs font-semibold">
              {product.discountPercentage}%
            </span>
          </div>
        )}
        ;
      </div>

      {/* div do TITULO, PREÇO E RESTAURANTE */}
      <div>
        <h2 className="truncate text-sm">{product.name}</h2>
        <div className="flex items-center gap-1 font-semibold">
          <h3>{formatCurrency(calculateProductTotalPrice(product))}</h3>
          {product.discountPercentage > 0 && (
            <span className="text-xs text-muted-foreground line-through">
              {" "}
              {formatCurrency(Number(product.price))}
            </span>
          )}
        </div>
        <span className="block text-xs text-muted-foreground">
          {product.restaurant.name}
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
