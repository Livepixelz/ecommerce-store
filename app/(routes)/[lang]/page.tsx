import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import { Locale } from "@/i18n-config";
import ProductList from "@/components/product-list";
import getBillboard from "@/actions/get-billboard";
import { getDictionary } from "@/get-dictionary";
import getProducts from "@/actions/get-products";

export const revalidate = 0;

const HomePage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("ea21fd59-d314-43b7-ba6c-a0b01a356646");

  const t = await getDictionary(lang);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList
            title={t["server-component"]["featuredProducts"]}
            items={products}
          />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
