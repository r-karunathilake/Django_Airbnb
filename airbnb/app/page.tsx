import Categories from "./components/categories";
import PropertyListing from "./components/properties/property_collection";

export default function Home() {
  return (
    <main className="max-w-[1500px] mx-auto px-6 text-black">
      <Categories/>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 
                      lg:grid-cols-5 gap-6">
        <PropertyListing/>
      </div>
    </main>
  );
}
