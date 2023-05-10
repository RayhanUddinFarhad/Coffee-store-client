import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const data = useLoaderData()



    const handleUpdateCoffee = (e) => { 
        e.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo  = form.photo.value;


        const allData = {name, quantity, supplier, taste, category, details, photo}


        console.log (allData);


        fetch (`http://localhost:3000/coffee/${data._id}`, {
            method: "PUT", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(allData),
          })
        .then (res => res.json())
        .then (data => {


            console.log (data)

            if (data.modifiedCount > 0) {  



                Swal.fire(
                    'Good job!',
                    'Your coffee Updated!',
                    'success'
                  )

            }

            
        })



    }




    




    return (
         <div className="bg-[#F4F3F0] p-24">

            <Link to = "/">

            <button className="btn">Back to Home</button>
            
            </Link>
        <h2 className="text-3xl font-extrabold">Update Coffee {data.name}</h2>
        <form onSubmit={handleUpdateCoffee}>
            {/* form name and quantity row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" defaultValue={data.name} placeholder="Coffee Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="quantity" defaultValue={data.quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form supplier row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="supplier" defaultValue={data.supplier} placeholder="Supplier Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="taste" defaultValue={data.taste} placeholder="Taste" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form category and details row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="category" defaultValue={data.category} placeholder="Category" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="details" defaultValue={data.details} placeholder="Details" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form Photo url row */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={data.photo} type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input type="submit" value="Add Coffee" className="btn btn-block" />

        </form>
    </div>
    );
};

export default UpdateCoffee;