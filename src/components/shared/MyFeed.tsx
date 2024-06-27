'use client';
import { useState } from "react";
import { MdThumbsUpDown } from "react-icons/md";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { filterPost } from "@/lib/actions/action";


function MyFeed() {
  const [formData, setFormData] = useState({
    isAvailableFullSet: false,
    minPrice: '',
    maxPrice: '',
    semester: '',
    urgent: false,
    order: '',

  });

  const router = useRouter()
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="flex items-center gap-2 relative">

      <Dialog >
        <DialogTrigger asChild>
          <h1 className="flex items-center px-3 py-2 gap-2 bg-cardColor1 font-semibold max-w-max rounded-lg text-textColor shadow-lg cursor-pointer hover:text-white transition-all duration-500 hover:bg-cardColor">
            <MdThumbsUpDown />
            Feed Settings
          </h1>
        </DialogTrigger>
        <DialogContent  className="sm:max-w-[425px] rounded-md bg-white">
          <DialogHeader>
            <DialogTitle>Edit your Feed</DialogTitle>
            <DialogDescription>
              Make changes to your feed based on your interest.
            </DialogDescription>
          </DialogHeader>
          <form className="grid gap-4 py-4" action={filterPost}>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="isAvailableFullSet"
                name="isAvailableFullSet"
                checked={formData.isAvailableFullSet}
                onChange={handleChange}
              />
              <label
                htmlFor="isAvailableFullSet"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Full Book Set
              </label>
            </div>
            <div>
              <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">Minimum Price</label>
              <input
                type="number"
                id="minPrice"
                name="minPrice"
                value={formData.minPrice}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">Maximum Price</label>
              <input
                type="number"
                id="maxPrice"
                name="maxPrice"
                value={formData.maxPrice}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="semester" className="block text-sm font-medium text-gray-700">Semester</label>
              <select
                id="semester"
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select Semester</option>
                <option value="1">First Semester</option>
                <option value="2">Second Semester</option>
                <option value="3">Third Semester</option>
                <option value="4">Fourth Semester</option>
                <option value="5">Fifth Semester</option>
                <option value="6">Sixth Semester</option>
                <option value="7">Seventh Semester</option>
                <option value="8">Eighth Semester</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="urgent"
                name="urgent"
                checked={formData.urgent}
                onChange={handleChange}
              />
              <label
                htmlFor="urgent"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Urgent
              </label>
            </div>
            <div>
              <label htmlFor="order" className="block text-sm font-medium text-gray-700">Order By</label>
              <select
                id="order"
                name="order"
                value={formData.order}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select Order</option>
                <option value="name">Name</option>
                <option value="date">Date</option>
              </select>
            </div>
            <DialogTrigger>
              <Button type="submit">Save changes</Button>
            </DialogTrigger>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default MyFeed;
