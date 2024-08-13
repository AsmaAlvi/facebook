import React from "react";

const page = () => {
  return (
    <div><figure className="md:flex bg-orange-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/asma.pic.jpg.jpg" alt="" width="384" height="512"></img>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Hi i am Asma Alvi.. I’m professional Digital Marketer and Social Media Expert. I have been working in this sector since 2020. I've accepted online work as a hobby and profession. My main resource is efficiency and honesty. I am Expert in: ☑ Social Media Page Setup & Management ☑ Social Media Banner Design ☑ Facebook Business Page Setup ☑ Instagram Business Profile Setup ☑.”
        </p>
      </blockquote>
      <figcaption className="font-large">
        <div className="text-blue-500 dark:text-blue-400">
          Asma Alvi
        </div>
        <div className="text-black-700 dark:text-slate-500">
          Social Media Expert
        </div>
      </figcaption>
    </div>
  </figure> </div>
  )
}

export default page
