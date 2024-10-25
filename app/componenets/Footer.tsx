import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return (
        <div className="mt-10 py-5 bg-gray-900">
            <footer className="flex justify-around mb-10">
                <div>
                    <h1 className=" text-white font-bold">Explore PakWheels</h1>
<ul className="text-xs text-gray-400 mt-2">
    <li>Used Cars</li>
    <li>Used Bikes</li>
    <li>New Cars</li>
    <li>Auto Parts & Accessories</li>
    <li>Cool Rides</li>
    <li>Forums</li>
    <li>Auto Show</li>
    <li>Sitemap</li>
</ul>
                </div>

{/* 2nd div */}

                <div>
                    <h1 className=" text-white font-bold">Used Bikes by Makes</h1>
<ul className="text-xs text-gray-400 mt-2">
    <li>Honda Bikes for Sale</li>
    <li>Suzuki Bikes for Sale</li>
    <li>Yamaha Bikes for Sale</li>
    <li>Super Power Bikes for Sale</li>
    <li>Kawasaki Bikes for Sale</li>
    <li>Unique Bikes for Sale</li>
    <li>Hero Bikes for Sale</li>
    <li>Ravi Bikes for Sale</li>
</ul>
                </div>

{/* 3rd div */}

                <div>
                    <h1 className=" text-white font-bold">PakWheels.com</h1>
<ul className="text-xs text-gray-400 mt-2">
    <li>About PakWheels.com</li>
    <li>Our Products</li>
    <li>Advertise With Us</li>
    <li>How To Pay</li>
    <li>FAQs</li>
    <li>Refunds & Returns</li>
    <li>Careers</li>
    <li>Contact Us</li>
</ul>
                </div>

                {/* 4th div */}

                <div>
               <h1 className=" text-white font-bold">Used Bikes by CC</h1>
<ul className="text-xs text-gray-400 mt-2">
    <li>70cc Bikes</li>
    <li>100cc Bikes</li>
    <li>110cc Bikes</li>
    <li>125cc Bikes</li>
    <li>150cc Bikes</li>
    <li>200cc Bikes</li>
    <li>250cc Bikes</li>
    <li>300cc Bikes</li>
</ul>
                </div>

{/* 5th div */}

                <div>
                    <h1 className=" text-white font-bold">Sell On PakWheels</h1>
<ul className="text-xs text-gray-400 mt-2">
    <li>Sell your Car</li>
    <li>Sell your Bikes</li>
    <li>Sell Accessory</li>
    </ul>
<div className="mt-10">
    <Image 
    src="/img/logo1.svg"
    alt="logo1"
    width={100}
    height={100}
    />
</div>
                </div>
            </footer>
        
        <hr />

            <div className="text-center text-gray-200 text-sm mt-4">
                <h1>Copyright &copy; 2003-2024 PakWheels (Pvt) Ltd. -All Rights Reserved. </h1>
                <p>Terms of Services | Privacy Policy</p>
            </div> 
        

            <div className="text-black px-5 py-2 bg-gray-300 mt-8 text-sm text-center font-medium">
                <p>Home Work Done! <br /> Given by Sir Ali Jawad <br /> slot: Tuesday 7 - 10</p>
                
                <p className="mt-4">Made by <Link href="https://www.linkedin.com/in/maryam-ansari-a196312b5" target="_blank"
                className="hover:text-blue-800 cursor-pointer font-bold">Maryam Ansari</Link></p>
            </div>
        </div>
    )
} 