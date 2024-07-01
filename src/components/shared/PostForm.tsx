'use client'

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDropzone } from "react-dropzone";
import fetchData from "data-fetch-ts";
import { CgClose } from "react-icons/cg";
import { toast } from "sonner";
import Cookies from 'js-cookie';


interface PostFormProps {
  isClose: () => void;
}

interface FormData {
  images: Array<string>;
  semester: string;
  totalBook: string;
  message: string;
  price: number;
  urgent: boolean;
  isAvaiableFullSet: boolean;
}

const PostForm: React.FC<PostFormProps> = ({ isClose }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    images: [],
    semester: "",
    totalBook: "",
    message: "",
    price: 0,
    urgent: false,
    isAvaiableFullSet: false,
  });
  const [error, setError] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string[]>([]);

  // handle Images
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleDrop = async (acceptedFiles: File[]) => {
    if (acceptedFiles.length + formData.images.length > 5) {
      setError("You can upload a maximum of 5 images.");
      return;
    }

    setError("");

    const uploadedImages = await Promise.all(
      acceptedFiles.map(async (file) => {
        try {
          // Create a new FormData object for the image upload
          const formData = new FormData();
          formData.append("image", file);

          // Ensure NEXT_PUBLIC_ENDPOINT_IMAGEBB is correctly set
          if (!process.env.NEXT_PUBLIC_ENDPOINT_IMAGEBB) {
            throw new Error("Missing NEXT_PUBLIC_ENDPOINT_IMAGEBB environment variable.");
          }

          const endpoint = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_ENDPOINT_IMAGEBB}`;

          // Perform the image upload using a more robust HTTP client
          const response = await fetch(endpoint, {
            method: "POST",
            body: formData,
          });


          // Handle potential network or server issues
          if (!response.ok) {
            throw new Error(`Image upload failed with status: ${response.status}`);
          }

          // Parse the JSON response and extract the image URL
          const data = await response.json();
          console.log(data, "res");

          return data.data.url;
        } catch (error) {
          console.error("Image upload error:", error);
          setError("Failed to upload image. Please try again.");
          return null; // Indicate a failed upload
        }
      })
    );


    const validImages = uploadedImages.filter((url) => url !== null) as string[];

    setFormData({
      ...formData,
      images: [...formData.images, ...validImages],
    });

    setImagePreview([
      ...imagePreview,
      ...acceptedFiles.map((file) => URL.createObjectURL(file)),
    ]);
  };

  let token = Cookies.get('authToken')
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.images.length < 3) {
      setError("You must upload at least 3 images.");
      toast('You must upload at least 3 images', {
        description: new Date() + '',
        action: {
          label: "Close",
          onClick: () => console.log("Close"),
        },
      });
      return;
    }
    try {
      const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT_BASEPATH}create-post`;
      const body = formData
      const data = await fetchData({ endpoint, method: "POST", body, token })
      console.log(data, 'checking');
      const date = new Date();
      if (data.statusCode === 200) {
        toast(data.message, {
          description: date.toString(),
          action: {
            label: "Close",
            onClick: () => console.log("Close"),
          },
        });
        setFormData({
          images: [],
          semester: "",
          totalBook: "",
          message: "",
          price: 0,
          urgent: false,
          isAvaiableFullSet: false,
        });
        // Reload the window and navigate to home page after successful sign-in
        setLoading(false);
        isClose()
        return;
      }



      toast(data.message);
    } catch (error) {
      console.log(error);
      toast('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    isClose();
  };

  // useDropzone hook result
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: "image/*",
  });


  return (
    <div className="min-h-screen z-[500px] fixed inset-0 bg-shadowColor/50 flex items-center justify-center">
      <div className="relative">
        <div className="bg-bgColor shadow-lg text-textColor h-[70vh] sm:h-[90vh] rounded-xl my-20 overflow-y-scroll max-w-[300px] xs:min-w-[400px] mx-auto md:min-w-[500px]">
          <form className="bg-natural-700 p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="images">
                Images:
              </label>
              <div
                {...getRootProps()}
                className="w-full p-6 border-2 border-dashed border-textColor rounded-xl bg-cardColor text-white cursor-pointer"
              >
                <input {...getInputProps()} />
                <p>Drag & drop some files here, or click to select files</p>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {imagePreview.map((preview, index) => (
                  <div key={index} className="relative w-24 h-24">
                    <img
                      src={preview}
                      alt={`preview ${index}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <button><CgClose className=" top-0 right-0 bg-white rounded-full cursor-pointer ml-5 absolute" /></button>
                  </div>
                ))}
              </div>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="semester">
                Semester:
              </label>
              <input
                type="text"
                id="semester"
                placeholder="Enter Semester (1st, 2nd, etc.)"
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                className="w-full p-2 rounded-xl ring-2 bg-cardColor transition-colors duration-100 border-textColor active:border-l-4 hover:border-l-4 ring-textColor/30 outline-none text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="totalBook">
                Total Book:
              </label>
              <input
                type="number"
                id="totalBook"
                name="totalBook"
                value={formData.totalBook}
                placeholder="Enter Pics Books"
                onChange={handleChange}
                className="w-full p-2 rounded-xl ring-2 bg-cardColor transition-colors duration-100 border-textColor active:border-l-4 hover:border-l-4 ring-textColor/30 outline-none text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="price">
                Price:
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-2 rounded-xl ring-2 bg-cardColor transition-colors duration-100 border-textColor active:border-l-4 hover:border-l-4 ring-textColor/30 outline-none text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="message">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Please drop some message "
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 rounded-xl ring-2 bg-cardColor transition-colors duration-100 border-textColor active:border-l-4 hover:border-l-4 ring-textColor/30 outline-none text-white"
              ></textarea>
            </div>
            <div className="mb-4 flex items-center gap-4">
              <input
                type="checkbox"
                id="urgent"
                name="urgent"
                checked={formData.urgent}
                onChange={handleChange}
                className="rounded-2xl h-5 w-5"
              />
              <label className="text-white" htmlFor="urgent">
                Is Urgent
              </label>
            </div>
            <div className="mb-4 flex items-center gap-4">
              <input
                type="checkbox"
                id="isAvaiableFullSet"
                name="isAvaiableFullSet"
                checked={formData.isAvaiableFullSet}
                onChange={handleChange}
                className="rounded-2xl h-5 w-5"
              />
              <label className="text-white" htmlFor="isAvaiableFullSet">
                Available Full Set
              </label>
            </div>
            <button
              type="submit"
              className="border-textColor/30 border-2 text-neutral-200 bg-cardColor p-2 rounded-lg shadow-lg cursor-pointer"
              disabled={loading}
            >
              {loading ? 'loading...' : 'submit'}
            </button>
          </form>
        </div>
        <div
          onClick={handleClose}
          className="absolute top-20 z-50  -right-12 border rounded-xl bg-cardColor border-textColor/30 p-2 cursor-pointer"
        >
          <IoClose color="white" />
        </div>
      </div>
    </div>
  );
};

export default PostForm;
