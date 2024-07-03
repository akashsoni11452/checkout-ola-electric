import { NextPage } from 'next';
import Carousel from '../components/carousal';

const Home: NextPage = () => {
  return (
    <div className="h-screen flex">
      <div className="w-3/4 h-full flex items-center justify-center">
        <Carousel />
      </div>
      <div className="w-1/4 h-full p-6 overflow-y-auto bg-white">
        <h1 className="text-2xl font-bold mb-4">Ola S1 Pro 2nd Generation</h1>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Color</label>
          <div className="flex space-x-4">
            <button className="w-8 h-8 rounded-full border-2 border-black" style={{ backgroundColor: '#625d5d' }}></button>
            <button className="w-8 h-8 rounded-full border" style={{ backgroundColor: '#3374ff' }}></button>
            <button className="w-8 h-8 rounded-full border" style={{ backgroundColor: '#f1e7e7' }}></button>
            <button className="w-8 h-8 rounded-full border" style={{ backgroundColor: '#000000' }}></button>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Model and Variant</label>
          <select className="block w-full border rounded px-3 py-2">
            <option>Ola S1 Pro</option>
            <option>Ola S1 Air</option>
            <option>Ola S1 X</option>
          </select>
        </div>
        <div className="mb-4">
          <p className="text-green-600 font-semibold">8 Year Battery Warranty included!</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700">
            Certified Range: <span className="font-semibold">195 km</span>
          </p>
          <p className="text-gray-700">
            Top Speed: <span className="font-semibold">120 km/h</span>
          </p>
          <p className="text-gray-700">
            0-40 km/h: <span className="font-semibold">2.6 sec</span>
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-500">Estimated delivery by <span className="font-semibold">15th Jul 2024</span></p>
        </div>
        <div className="mb-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded w-full">Continue</button>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 text-lg">₹1,28,999</p>
          <p className="text-gray-500">EMI starting from ₹3,099</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
