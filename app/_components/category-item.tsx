import { Category } from "@prisma/client";
import Image from "next/image";

// "Cada item vai ser a mesma coisa em questão de estilo, o que vai mudar
// vai ser as informações. Quando você tem um componente que é a mesma coisa
// em questão de estilo e só mudar as informações que ele exibe, aí você usa props."

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex min-w-[160px] items-center gap-3 rounded-full bg-white px-4 py-3 shadow-md">
      <Image
        src={category.imageUrl}
        alt={category.name}
        height={30}
        width={30}
      />

      <span className="text-sm font-semibold">{category.name}</span>
    </div>
  );
};

export default CategoryItem;
