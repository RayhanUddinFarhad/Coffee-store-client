
import './App.css'
import banner from '../src/assets/images/more/3.png'
import headerbg from '../src/assets/images/more/15.jpg'
import logo from '../src/assets/images/icons/logo.png'
import icon1 from '../src/assets/images/icons/1.png'
import icon2 from '../src/assets/images/icons/2.png'
import icon3 from '../src/assets/images/icons/3.png'
import icon4 from '../src/assets/images/icons/4.png'
import { Link, useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'

function App() {




  const data = useLoaderData()

  const [remaining, setRemaining] = useState(data)

  return (
    <>


    <div className='w-full h-28'  style={{ backgroundImage: `url(${headerbg})`}}>
      <img className='mx-auto' src={logo} alt="" />




    </div>

<div className="hero h-[600px]" style={{ backgroundImage: `url(${banner})`}}>
  <div className=""></div>
  <div className="hero-content  text-right text-neutral-content">
    <div className="p-48">
      <h1 className="mb-5 text-5xl font-bold ">Would you like a Cup of Delicious Coffee?</h1>
      <p className="mb-5 text-sm pl-28"> It`s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
      <button className="btn btn-warning">Lear More</button>
    </div>
  </div>
</div>

<div className='bg-[#ECEAE3] h-72'>

  <div className='flex justify-center items-center h-full space-x-10'>

    <div className='space-y-2'>

    <img src={icon1} alt="" />
    <h4 className='font-bold text-lg'>Awesome Aroma</h4>
    <p>You will definitely be a fan of the <br /> design & aroma of your coffee</p>

    </div>
    <div className='space-y-2'>

    <img src={icon2} alt="" />
    <h4 className='font-bold text-lg'>High Quality</h4>
    <p>We served the coffee to you <br /> maintaining the best quality</p>

    </div>
    <div className='space-y-2'>

    <img src={icon3} alt="" />
    <h4 className='font-bold text-lg'>Pure Grades</h4>
    <p>You will definitely be a fan of the <br /> design & aroma of your coffee</p>

    </div>
    <div className='space-y-2'>

    <img src={icon4} alt="" />
    <h4 className='font-bold text-lg'>Proper Roasting</h4>
    <p>You will definitely be a fan of the <br /> design & aroma of your coffee</p>

    </div>

  </div>



</div>

<div className='my-20 mx-auto w-full text-center'>


  <p>--- Sip & Savor ---</p>
  <h4 className='text-2xl font-bold text-[#331A15]'>Our Popular Products</h4>
  <Link to = '/addCoffee'><button className='button-primary text-gray-200'>Add Coffee</button></Link>


  <div className='grid lg:grid-cols-2 gap-5'>

 {

  remaining && remaining.map  (data => <CoffeeCard key={data._id} data = {data} setRemaining = {setRemaining} remaining =  {remaining}></CoffeeCard>)
 }








  </div>
</div>
      
    </>
  )
}

export default App
