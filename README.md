## Tecnologias utilizadas
* NextJs: Framework para react
* Prisma: ORM que nos ajuda a gerenciar o banco de dados
* Tailwind: utiliza elementos por meio de classes
* Shadcn: lib de componentes feito em cima do tailwind (possui componentes prontos) 

# Rodar App
`npm run dev`

# Atalhos nos arquivos .tsx
plugin *simple react snippets*

`sfc`:

```
Stateless Function Component (Simple React Snippets)

const  = () => {
    return (  );
}
 
export default ;
```

`.flex`:

```
<div className="flex">|</div>
```

# Observações encontradas
Erro encontrado ao tentar carregar as imagens das categorias. "prop e src (arquivo category-item.tsx) que passou pra Imagem é inválida porque não está no arquivo de configuração do Next (é uma forma do framework proteger de renderizar qualquer imagem na aplicação):
```
Error: Invalid src prop (https://utfs.io/f/92918634-fc03-4425-bc1f-d1fbc8933586-vzk6us.png) on `next/image`, hostname "utfs.io" is not configured under images in your `next.config.js`
See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host
```
Solução: Precisa colocar o domínio para permitir que as imagens sejam renderizadas no arquivo `next.config.msj`:
```
const nextConfig = {
    images: {
        remotePatterns: [{hostname: "utfs.io"}]
    }
};
```
