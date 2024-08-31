import Image from 'next/image'
import Link from 'next/link'

const Landingpage = () => {
  return (
    <div className="bg-gray-900  flex flex-col items-center text-gray-200 my-5 min-h-screen gap-16 w-full">
      <div className="flex flex-col items-center gap-5 px-2">
        <div className="flex items-center gap-3 px-2 text-base sm:text-lg md:text-2xl">
          <h2 className="font-bold text-green-400">Welcome to</h2>
          <div className="flex items-center">
            <Image
              src={'/Logo.png'}
              alt="Logo"
              width={60}
              height={60}
              className="rounded-full w-8 sm:w-16"
            />
            <span className="text-green-400 font-bold">Brain Buster</span>
          </div>
        </div>
        <Link
          href={'/Login'}
          className="bg-green-500 text-center text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-600"
        >
          Get Started
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 mx-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-base font-semibold mb-4 text-green-400">
            Create Quizzes
          </h3>
          <p>
            Easily craft and publish your own quizzes with our intuitive
            platform.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-base font-semibold mb-4 text-green-400">
            Delete Quizzes
          </h3>
          <p>Manage your quizzes by deleting any that are no longer needed.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-base font-semibold mb-4 text-green-400">
            Track Attempts
          </h3>
          <p>
            Monitor and review your attempts on quizzes to track your progress.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-base font-semibold mb-4 text-green-400">
            AI-powered Quiz Creation
          </h3>
          <p>
            Utilize our AI to help you create engaging and challenging quizzes.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Landingpage
