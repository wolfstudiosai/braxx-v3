import { getProducts } from "@/lib/api";
import { Suspense } from "react";
import { HomePageContainer } from "@/components/HomePageContainer";
import { ApiProduct } from "@/types";

export default function Home() {
  return (
    <>
      <Suspense fallback={<div className="w-full min-h-screen flex items-center justify-center text-black text-5xl">Loading...</div>}>
        <HomePageContent />
      </Suspense>
    </>
  );
}

const HomePageContent = async () => {
  const products: ApiProduct[] = await getProducts();

  return <HomePageContainer products={products} />;
}
