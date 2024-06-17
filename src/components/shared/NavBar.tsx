 
import { PlusIcon } from '@radix-ui/react-icons'
import Image from 'next/image'


export default function NavBar() {
  return (
    <div className=' bg-white shadow-sm static inset-0 backdrop-blur-md mx-auto px-3 py-2 items-center justify-between   flex flex-grow'>
      <div>
       <h2> {`Book <Sell/>`}</h2>
       </div>

      <div>
        <div>
          
          <input type="text" className=' outline-none border' name="" id="" />
        </div>

      </div>

      <div>
        <div className='  flex gap-2 dark:bg-white text-3xl !rounded-xl'>
          <h1 className='p-1.5 !rounded-xl bg-black'><PlusIcon className='text-white size-7  '/></h1>
          <h1 className='p-1.5 !rounded-xl bg-black'><PlusIcon className='text-white size-7  '/></h1>
        </div>
      </div>

    </div>
  )
}
