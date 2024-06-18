import Image from "next/image"
interface postData {
    image: String, 
    date: Date | String,
    message: String, 

}

function Post(data: postData) {
//   const {date, image, message} = data
    return (
    <div className='shadow-lg p-3 rounded-2xl bg-cardColor1 max-w-sm'>
        <h1 className=' font-bold line-clamp-3 text-white text-lg'>Public APIs — A directory of free and public apis</h1>
        <h1 className=' font-semibold line-clamp-3 text-textColor text-xs mt-5'>{ `Apr 29`}</h1>
        {/* <Image src={} width={220} height={200} alt="Post Image"/> */}
    </div>
  )
}

export default Post

 