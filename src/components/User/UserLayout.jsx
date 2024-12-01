import AddToCart from "./AddToCart";
import AllProducts from "./AllProducts";
import AddContext from "./Context/AddContext";


export default function UserLayout() {
    return (
        <AddContext>
            <div className="grid grid-cols-3 pt-10 container mx-auto gap-5">
                <section className="col-span-2 bg-base-200 rounded-lg min-h-screen">
                    <AllProducts />
                </section>
                <section className="bg-base-200 rounded-lg min-h-screen">
                    <AddToCart />
                </section>
            </div>
        </AddContext>
    )
}
