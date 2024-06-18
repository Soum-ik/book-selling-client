import { IoClose } from "react-icons/io5";
import { useState } from "react";

 
function PostForm({isClose}) {
 
  
  const [formData, setFormData] = useState({
    images: "",
    semester: "1st",
    totalBook: "",
    price: 454,
    message: "",
    urgent: true,
    isAvaiableFullSet: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  const handleClose = () => {
    isClose()
  }


  return (
    
    <div className='min-h-screen fixed inset-0 bg-black/70 flex items-center justify-center  '>
    <div className=" relative">
      <div className='bg-white h-[80vh] rounded-lg my-20 overflow-y-scroll sm:min-w-[400px] mx-auto md:min-w-[500px]'>
        <form className="bg-natural-700 p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-neutral-800 mb-2" htmlFor="images">Images:</label>
            <input
              type="text"
              id="images"
              name="images"
              value={formData.images}
              onChange={handleChange}
              className="w-full p-2 rounded border-2 border-neutral-950 text-neutral-800"
            />
          </div>
          <div className="mb-4">
            <label className="block text-neutral-800 mb-2" htmlFor="semester">Semester:</label>
            <input
              type="text"
              id="semester"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className="w-full p-2 rounded border-2 border-neutral-950 bg-natural-800 text-neutral-800"
            />
          </div>
          <div className="mb-4">
            <label className="block text-neutral-800 mb-2" htmlFor="totalBook">Total Book:</label>
            <input
              type="text"
              id="totalBook"
              name="totalBook"
              value={formData.totalBook}
              onChange={handleChange}
              className="w-full p-2 rounded border-2 border-neutral-950 bg-natural-800 text-neutral-800"
            />
          </div>
          <div className="mb-4">
            <label className="block text-neutral-800 mb-2" htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border-2 border-neutral-950 rounded bg-natural-800 text-neutral-800"
            />
          </div>
          <div className="mb-4">
            <label className="block text-neutral-800 mb-2" htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded border-2 border-neutral-950 bg-natural-800 text-neutral-800"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-neutral-800 mb-2">Urgent:</label>
            <input
              type="checkbox"
              id="urgent"
              name="urgent"
              checked={formData.urgent}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-neutral-800" htmlFor="urgent">Is Urgent</label>
          </div>
          <div className="mb-4">
            <label className="block text-neutral-800 mb-2">Is Available Full Set:</label>
            <input
              type="checkbox"
              id="isAvaiableFullSet"
              name="isAvaiableFullSet"
              checked={formData.isAvaiableFullSet}
              onChange={handleChange}
              className="mr-2 peer/draft"
            />
            <label className="text-neutral-800" htmlFor="isAvaiableFullSet">Available Full Set</label>
          </div>
          <button type="submit" className="bg-neutral-900 text-neutral-200 text-natural-800 p-2 rounded-lg shadow">
            Submit
          </button>
        </form>
      </div>
         <div onClick={handleClose} className="absolute top-20 -right-12 border rounded-full p-2">
          <IoClose color="white" />
        </div>
    </div>
  </div>
  )
}

export default PostForm