"use client"

import { useState, useEffect } from "react"
import { Mail, AlertTriangle } from "lucide-react"

export default function UnderConstructionPage() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate progress increasing over time
    const timer = setTimeout(() => {
      if (progress < 80) {
        setProgress(progress + 1)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [progress])

  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20">
        <svg className="w-16 h-16 text-gray-400/20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Left Content Section - UNTOUCHED */}
        <div className="w-full lg:w-1/2 text-white z-10 mb-12 lg:mb-0">
          <div className="max-w-xl">
            {/* Logo */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-white">YourCompany</h1>
              <p className="text-sm text-blue-100">Smarter Way To Work</p>
            </div>

            {/* Main Heading */}
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              WEBSITE IS <br />
              <span className="text-yellow-300">UNDER CONSTRUCTION</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-blue-100 mb-8 max-w-lg">
              We&apos;re currently working on making our website even better. Our team is implementing new features to
              enhance your experience. As promised, our premium software will stay free during this maintenance.
            </p>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-blue-100">Completion Status</span>
                <span className="font-bold text-yellow-300">{progress}%</span>
              </div>
              <div className="h-3 w-full bg-blue-600/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-yellow-300 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Contact Button */}
            <a
              href="mailto:contact@yourcompany.com"
              className="inline-flex items-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold rounded-full transition-colors duration-200"
            >
              CONTACT US
              <Mail className="ml-2 h-5 w-5" />
            </a>

            {/* Social Media */}
            <div className="mt-8">
              <p className="text-sm text-blue-100 mb-2">FOLLOW</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Illustration Section - ONLY THIS PART MODIFIED */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative z-10">
          <div className="relative">
            {/* Construction Illustration - MODIFIED: Made bigger and diagonal */}
            <div className="relative transform rotate-6 scale-125">
              {/* Board with placeholder image */}
              <div className="w-[400px] h-[300px] bg-white rounded-lg shadow-xl overflow-hidden relative">
                {/* Placeholder Website Image - ADDED */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Website preview"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Semi-transparent overlay */}
                <div className="absolute inset-0 bg-white/80 z-10 flex flex-col items-center justify-center p-6">
                  <div className="w-16 h-16 mb-4 text-yellow-400">
                    <AlertTriangle className="w-full h-full" />
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-800 mb-1">UNDER</div>
                    <div className="text-xl font-bold text-gray-800 mb-4">CONSTRUCTION</div>
                  </div>
                </div>

                {/* Construction Tape */}
                <div className="absolute -top-2 left-0 right-0 h-12 bg-yellow-400 transform -rotate-6 z-20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 flex items-center">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="w-8 h-full bg-black transform -skew-x-12"></div>
                    ))}
                  </div>
                  <div className="relative z-10 font-bold text-black tracking-wider text-sm">UNDER CONSTRUCTION</div>
                </div>

                {/* Construction Tape Bottom */}
                <div className="absolute -bottom-2 left-0 right-0 h-12 bg-yellow-400 transform rotate-6 z-20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 flex items-center">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="w-8 h-full bg-black transform -skew-x-12"></div>
                    ))}
                  </div>
                  <div className="relative z-10 font-bold text-black tracking-wider text-sm">UNDER CONSTRUCTION</div>
                </div>
              </div>

              {/* Traffic Cones */}
              <div className="absolute -bottom-12 -left-12">
                <div className="w-24 h-32 relative">
                  <div className="absolute bottom-0 w-full h-4 bg-gray-700 rounded-full"></div>
                  <div className="absolute bottom-4 w-20 h-4 bg-orange-500 rounded-sm mx-auto left-0 right-0"></div>
                  <div className="absolute bottom-8 w-16 h-16 bg-orange-500 rounded-sm mx-auto left-0 right-0 overflow-hidden">
                    <div className="w-full h-3 bg-white my-2"></div>
                    <div className="w-full h-3 bg-white my-2"></div>
                    <div className="w-full h-3 bg-white my-2"></div>
                  </div>
                  <div className="absolute bottom-24 w-8 h-8 bg-orange-500 rounded-sm mx-auto left-0 right-0"></div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8">
                <div className="w-16 h-24 relative">
                  <div className="absolute bottom-0 w-full h-3 bg-gray-700 rounded-full"></div>
                  <div className="absolute bottom-3 w-14 h-3 bg-orange-500 rounded-sm mx-auto left-0 right-0"></div>
                  <div className="absolute bottom-6 w-12 h-12 bg-orange-500 rounded-sm mx-auto left-0 right-0 overflow-hidden">
                    <div className="w-full h-2 bg-white my-1.5"></div>
                    <div className="w-full h-2 bg-white my-1.5"></div>
                    <div className="w-full h-2 bg-white my-1.5"></div>
                  </div>
                  <div className="absolute bottom-18 w-6 h-6 bg-orange-500 rounded-sm mx-auto left-0 right-0"></div>
                </div>
              </div>

              {/* Construction Worker */}
              <div className="absolute -top-16 -right-8">
                <div className="relative w-24 h-24">
                  {/* Hard Hat */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-yellow-400 rounded-t-full"></div>

                  {/* Head */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-300 rounded-full"></div>

                  {/* Body */}
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-orange-500 rounded-md"></div>

                  {/* Arms */}
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-2 -rotate-45 w-8 h-3 bg-orange-500 rounded-full origin-left"></div>
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 translate-y-2 rotate-45 w-8 h-3 bg-orange-500 rounded-full origin-left"></div>

                  {/* Wrench */}
                  <div className="absolute top-8 right-0 w-8 h-2 bg-gray-400 rounded-full"></div>
                  <div className="absolute top-6 right-0 w-4 h-4 bg-gray-400 rounded-full"></div>
                </div>
              </div>

              {/* Tools */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8">
                <div className="w-16 h-4 bg-gray-400 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

