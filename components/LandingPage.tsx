import Image from 'next/image'
import Link from 'next/link'

const LandingPage = () => {
  return (
    <div className="bg-gray-50 flex flex-col items-center  text-gray-900 my-5 min-h-screen gap-16 w-full">
      <div className=" flex flex-col gap-5 px-2">
        <div className=" flex items-center gap-3 px-2 text-sm sm:text-lg md:text-2xl  ">
          <h2 className=" font-bold  text-customBg">Welcome to </h2>{' '}
          <div className=" flex items-center">
            {' '}
            <Image
              src={'/Logo.png'}
              alt="Logo"
              width={60}
              height={60}
              className="rounded-full w-8 sm:w-16"
            />{' '}
            <span className='text-customBg  font-bold "'>Thought Flow</span>
          </div>
        </div>
        <Link
          href={'/Login'}
          className="bg-customBg text-center text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-rose-200"
        >
          Get Started
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 mx-4 text-justify">
        <div className="bg-white p-6 rounded-lg shadow-lg ">
          <h3 className="text-sm sm:text-xl font-semibold mb-4 text-customBg">
            Create Blogs
          </h3>
          <p>
            Effortlessly craft and publish your blogs using our intuitive
            platform.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-sm sm:text-xl font-semibold mb-4 text-customBg">
            Comment and Like
          </h3>
          <p>
            Engage with other users by commenting on and liking their posts.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-sm sm:text-xl font-semibold mb-4 text-customBg">
            Suggest Topics
          </h3>
          <p>
            Share your ideas and suggest topics that you want to see covered.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-sm sm:text-xl font-semibold mb-4 text-customBg">
            AI-Powered Writing
          </h3>
          <p>
            Input a topic and let Gemini AI generate high-quality blog content
            for you.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
