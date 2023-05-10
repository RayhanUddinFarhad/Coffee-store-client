import { Link } from "react-router-dom";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";


const CoffeeCard = ({ data, setRemaining, remaining }) => {


    console.log (remaining)
    console.log (data._id)


    const handleDelete = (id) => {













        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {






                fetch(`http://localhost:3000/coffee/${id}`, {
                    method: 'DELETE',
        
        
                })
                    .then((res) => res.json())
                    .then(data => {
        
        
        
                        console.log(data)
        
                        
        
                    })
        
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }


            const rest = remaining.filter  (rest => rest._id !== id)

            setRemaining  (rest)
          })


      



        console.log(id)



    }
    return (

        <div>

            <div className="card card-side h-full bg-base-100 shadow-xl">
                <figure><img className="w-44" src={data.photo} alt="Movie" /></figure>
                <div className="flex w-full items-center justify-between">
                    <div>


                        <h2> <span className="font-bold">Name</span>: {data.name}  </h2>
                        <p> <span className="font-bold">Category</span> : {data.category} </p>
                        <p> <span className="font-bold">Quantity</span> : {data.quantity}</p>
                    </div>
                    <div className="flex flex-col space-y-5">

                        <Link to = {`/updatecoffee/`}>
                        <button className="bg-[#D2B48C] text-white p-1 rounded-sm"><FaEye/></button>
                        </Link>

                        <Link to = {`/updatecoffee/${data._id}`} >
                        <button className="bg-black text-white p-1 rounded-sm"><FaPen/></button>
                        </Link>
                        <button  onClick={() => handleDelete(data._id)} className="bg-red-500 text-white p-1 rounded-sm"> <FaTrash></FaTrash> </button>



                    </div>

                </div>
            </div>

        </div>
    );
};

export default CoffeeCard;