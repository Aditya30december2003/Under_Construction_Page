"use client"

import { useState, useEffect } from "react"
import { Mail, AlertTriangle } from "lucide-react"
import Logo from '../assets/logo.png'
export default function ModernUnderConstructionPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border-t border-r border-blue-400/20"></div>
          ))}
        </div>
      </div>
      
      {/* Decorative orbital elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 border-2 border-cyan-400/20 rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 border-2 border-blue-400/10 rounded-full"></div>
      <div className="absolute top-1/2 left-1/3 w-32 h-32 border bg-red-600 border-purple-400/20 rounded-full"></div>

      {/* Header */}
      <header className="relative z-10 py-3 bg-red-500 px-8">
        <div className="flex items-center">
          {/* <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,10.5A1.5,1.5 0 0,1 13.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,12A1.5,1.5 0 0,1 12,10.5" />
          </svg> */}
          <div className="ml-2">
            {/* <h1 className="text-xl font-bold text-white">YourCompany</h1>
            <p className="text-xs text-blue-300">Smarter Way To Work</p> */}
            <div className="mb-2">
            <img className="bg-white p-2 rounded-[100%] w-[8rem] h-auto object-contain" src={Logo || "/placeholder.svg"} alt="Company Logo" />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-6 py-6 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Left content */}
        <div className="w-full lg:w-1/2 text-white z-10 mb-12 lg:mb-0">
          <div className="max-w-xl">
            <div className="text-sm text-cyan-400 font-medium mb-4">WEBSITE STATUS</div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              WEBSITE IS <br />
              <span className="text-cyan-400">UNDER CONSTRUCTION</span>
            </h2>
            
            <p className="text-lg text-blue-100 mb-8 max-w-lg">
              We're currently working on making our website even better. Our team is implementing new features to
              enhance your experience. As promised, our premium software will stay free during this maintenance.
            </p>
            
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-blue-100">Completion Status</span>
                <span className="font-bold text-cyan-400">{progress}%</span>
              </div>
              <div className="h-3 w-full bg-blue-900/60 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-400 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            
            {/* Contact Button */}
            <a
              href="mailto:contact@yourcompany.com"
              className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-bold rounded-full transition-colors duration-200"
            >
              CONTACT US
              <Mail className="ml-2 h-5 w-5" />
            </a>
            
            {/* Social Media */}
            <div className="mt-8">
              <p className="text-sm text-blue-300 mb-2">FOLLOW</p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
                <a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right illustration section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative z-10">
          <div className="relative">
            {/* Orbital visualization */}
            <div className="absolute -top-20 -right-20 w-64 h-64">
              <div className="w-full h-full rounded-full border-4 border-cyan-400/30 absolute transform rotate-45"></div>
              <div className="w-3/4 h-3/4 rounded-full border-2 border-blue-400/40 absolute top-1/8 left-1/8 transform -rotate-12"></div>
              <div className="w-1/2 h-1/2 rounded-full border-2 border-purple-400/30 absolute top-1/4 left-1/4 transform rotate-30"></div>
              <div className="w-1/3 h-1/3 rounded-full border border-cyan-400/50 absolute top-1/3 left-1/3 transform -rotate-45"></div>
            </div>
            
            {/* Laptop with Under Construction */}
            <div className="relative">
              {/* Laptop */}
              <div className="w-96 h-64 bg-gray-800 rounded-t-lg relative">
                {/* Screen */}
                <div className="absolute inset-2 rounded-t-md bg-gray-900 overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full bg-gray-900 p-4 flex flex-col items-center justify-center relative">
                    {/* Orbital visualization on screen */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full border border-cyan-400/30 absolute animate-spin-slow"></div>
                      <div className="w-32 h-32 rounded-full border border-blue-400/40 absolute animate-spin-slow-reverse"></div>
                      <div className="w-24 h-24 rounded-full border border-purple-400/30 absolute animate-pulse"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 mb-2 text-cyan-400">
                        <AlertTriangle className="w-full h-full" />
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-cyan-400">UNDER</div>
                        <div className="text-sm font-bold text-white">CONSTRUCTION</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Construction Tape */}
                <div className="absolute -top-2 left-0 right-0 h-12 bg-cyan-400 transform -rotate-6 z-20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 flex items-center">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="w-8 h-full bg-gray-900 transform -skew-x-12"></div>
                    ))}
                  </div>
                  <div className="relative z-10 font-bold text-gray-900 tracking-wider text-sm">UNDER CONSTRUCTION</div>
                </div>

                {/* Construction Tape Bottom */}
                <div className="absolute -bottom-2 left-0 right-0 h-12 bg-cyan-400 transform rotate-6 z-20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 flex items-center">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="w-8 h-full bg-gray-900 transform -skew-x-12"></div>
                    ))}
                  </div>
                  <div className="relative z-10 font-bold text-gray-900 tracking-wider text-sm">UNDER CONSTRUCTION</div>
                </div>
              </div>

              {/* Laptop Base */}
              <div className="w-96 h-6 bg-gray-700 rounded-b-lg"></div>

              {/* Traffic Cones */}
              <div className="absolute -bottom-8 -left-8">
                <div className="w-16 h-24 relative">
                  <div className="absolute bottom-0 w-full h-3 bg-gray-700 rounded-full"></div>
                  <div className="absolute bottom-3 w-14 h-3 bg-cyan-500 rounded-sm mx-auto left-0 right-0"></div>
                  <div className="absolute bottom-6 w-12 h-12 bg-cyan-500 rounded-sm mx-auto left-0 right-0 overflow-hidden">
                    <div className="w-full h-2 bg-white my-1.5"></div>
                    <div className="w-full h-2 bg-white my-1.5"></div>
                    <div className="w-full h-2 bg-white my-1.5"></div>
                  </div>
                  <div className="absolute bottom-18 w-6 h-6 bg-cyan-500 rounded-sm mx-auto left-0 right-0"></div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-4">
                <div className="w-12 h-16 relative">
                  <div className="absolute bottom-0 w-full h-2 bg-gray-700 rounded-full"></div>
                  <div className="absolute bottom-2 w-10 h-2 bg-cyan-500 rounded-sm mx-auto left-0 right-0"></div>
                  <div className="absolute bottom-4 w-8 h-8 bg-cyan-500 rounded-sm mx-auto left-0 right-0 overflow-hidden">
                    <div className="w-full h-1.5 bg-white my-1"></div>
                    <div className="w-full h-1.5 bg-white my-1"></div>
                  </div>
                  <div className="absolute bottom-12 w-4 h-4 bg-cyan-500 rounded-sm mx-auto left-0 right-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}