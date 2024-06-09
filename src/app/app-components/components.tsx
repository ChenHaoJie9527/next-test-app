interface Res {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: any;
}

export default async function Product() {
  const res = await fetch("https://fakestoreapi.com/products/3");
  const product: Res = await res.json();
  return (
    <section className="flex flex-col items-center gap-2">
      <p>{product.title}</p>
    </section>
  );
}
