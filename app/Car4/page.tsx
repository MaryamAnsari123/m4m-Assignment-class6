import Image from "next/image"
import Link from "next/link"

export default function car1(){
    return(
        <div className="mt-5 mx-48 bg-gray-100 p-5 mb-5">
            <h1 className="text-center text-3xl font-bold"><u>Toyota Corolla 2024 Price in Pakistan,Images,Reviews & Specs</u></h1>
        
        <div className="flex justify-center mt-5">
        <Image 
         src="/img/car4.jpeg"
         alt="pic1"
         width={300}
         height={200}
         />
         </div>

         {/* buttons */}

         <div className="flex mt-8 gap-4 justify-center">
         <button className="text-blue-700 hover:bg-blue-600 hover:text-white font-semibold text-xs py-2 px-4 rounded-md shadow-xl bg-white border-2 border-blue-600">
            Book a Test Drive</button>
         <button className="text-blue-700 hover:bg-blue-600 hover:text-white font-semibold text-xs py-2 px-4 rounded-md shadow-xl bg-white border-2 border-blue-600">Request Bank Fianance</button>
         <button className="text-blue-700 hover:bg-blue-600 hover:text-white font-semibold text-xs py-2 px-4 rounded-md shadow-xl bg-white border-2 border-blue-600">Visit Place</button>
         <button className="text-blue-700 shadow-xl hover:bg-blue-600 hover:text-white font-semibold text-xs py-2 px-4 rounded-md bg-white border-2 border-blue-600">Car Inspection</button>
         </div>
         
         <h1 className="text-center mt-5 text-xl font-semibold">Vehicle Description</h1>


{/* detail */}
<div className="flex justify-center gap-4 text-xs mt-4">
    <div><b>Numbers of Doors</b> 4</div>
    <div><b>Engine</b> 1800 CC</div>
    <div><b>Condition</b> 8.5 / 10</div>
    <div><b>Driven</b> 9,500 KM</div>
    <div><b>Suspension type</b> Soft Suspension</div>
</div>

<div className="flex justify-center gap-4 text-xs mt-2">
<div><b>Avg</b> 13 Km per ltr</div>
    <div><b>Transmission</b> Automatic</div>
    <div><b>Fuel Type</b> High Octane</div>
</div>

<h1 className="text-green-600 text-xl mt-8 font-mono text-center">PKR 85,00,000</h1>

<div className="text-center mt-10">
    <Link href="/Orderform">
<button className="text-white hover:bg-green-700 shadow-2xl hover:text-white font-semibold text-xs py-2 px-4 rounded-md bg-blue-700">
    Make Payment
</button>
</Link>
</div>
        </div>
    )
}