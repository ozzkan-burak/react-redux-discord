import { DownloadIcon } from '@heroicons/react/outline';

const Hero = () => {
  return (
    <div className='bg-discord_blue pb-8 md:pb-0'>
      <div className='p-7 py-9 h-screen md:flex relative'>
        <div className='flex flex-col gap-7 md:max-w-md lg:max-w-none lg:justify-center'>
          <h1 className='text-5xl text-white font-bold'>Your place to talk</h1>
          <h2 className='text-white text-lg font-light tracking-wide lg:max-w-3xl w-full'>
            Whether you're a school club, gaming group, orlwide ort community, or just a handful of firiends that want to spend time together,
            Discord makes it easy talk every day and hang out more often.
          </h2>
          <div div className='flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-start sm:items-center gap-6'>
            <button className="
              bg-white w-60 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl 
              hover:text-discord_blurple focus:outline-none transition duration-200 easy-in-out">
              <DownloadIcon className='w-6 mr-2'/>
              Download for Mac
            </button>
            <button className="
              bg-gray-900 text-white font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl
              hover:bg-gray-800 focus:outline-none transition duration-200 ease-in-out">
            ">
              Open Discord in your browser
            </button>
          </div>
        </div>
        <div className="flex-grow">
          <img src="https://discord.com/assets/e92fcc9ab6e63c1a17e954af347a1f1d.svg" alt="" className='absolute-left-36 mt-16 sm:-left-44'/>
          <img src="https://rb.gy/gj8ch" alt ="" className='hidden'/>
        </div>
      </div>
    </div>
  )
};

export default Hero;
