import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function UpdatedProduct() {
    const product = useLoaderData();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const photo = e.target.photo.value;
        const newProduct = { name, description, price, photo }
        fetch(`http://localhost:5001/product/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success("Product is successfully updated")
                    e.target.reset();
                    navigate(-1); // Go back to previous page
                }
                else {
                    toast.error("Failed to update product")
                }
            })
    }
    return (
        <div className="flex flex-col items-center mt-10 gap-5">
            <button className="self-start btn btn-primary" onClick={() => navigate(-1)}>←Go Back</button>
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" defaultValue={product.name} name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" placeholder="Description" defaultValue={product.description} name="description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Price" defaultValue={product.price} name="price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="Photo" name="photo" defaultValue={product.photo} className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
