
const sections = ['About Us',  'Contact', 'Terms of service', 'Privacy Policy']
function Footer() {
  return (
    <div className=' max-w-7xl mx-auto p-3 py-5'>
      <div className=' flex justify-between gap-5 md:items-center flex-col md:flex-row transition-all duration-500'>
        <div>
          <h1 className=' text-lg sm:text-lg md:text-2xl font-semibold'>Sold Book</h1>
          <p className=" md:text-md textmuted">Get your book Easily</p>
        </div>
        <div className=" flex gap-1.5 md:gap-3 flex-col md:flex-row">
          {sections.map((section, idx ) => <h1 className="md:text-md text-sm hover:underline underline-offset-2 cursor-pointer" key={idx}>{section}</h1>)}
        </div>
      </div>
    </div>
  )
}

export default Footer;