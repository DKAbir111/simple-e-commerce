import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import UserLayout from "../components/User/UserLayout";
import AdminLayout from "../components/Admin/AdminLayout";
import AllProdcuts from "../components/Admin/AllProdcuts";
import CreateProducts from "../components/Admin/CreateProducts";
import UpdatedProduct from "../components/Admin/UpdateProduct";
import OrderedItem from "../components/Admin/OrderedItem";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <UserLayout />
            },
            {
                path: '/admin',
                element: <AdminLayout />,
                children: [
                    {
                        path: '/admin',
                        element: <AllProdcuts />
                    },
                    {
                        path: '/admin/order',
                        element: <OrderedItem />
                    },
                    {
                        path: '/admin/createproducts',
                        element: <CreateProducts />
                    },
                    {
                        path: '/admin/updateproduct/:id',
                        element: <UpdatedProduct />,
                        loader: ({ params }) => fetch(`http://localhost:5001/product/${params.id}`)
                    }
                ]

            }
        ]
    }
])
export default router;