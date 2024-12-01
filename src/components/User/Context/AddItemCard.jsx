/* eslint-disable react/prop-types */
export default function AddItemCard({ item }) {
    console.log(item)
    return (
        <div className="bg-base-100 shadow-xl w-full  items-center grid grid-cols-3 rounded-lg gap-5 p-3">
            <img src={item.photo} alt="" />
            <h2>{item.name}</h2>
            <button className="btn btn-sm btn-primary">Confirm</button>
        </div>
    )
}
