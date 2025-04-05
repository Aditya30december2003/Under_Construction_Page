import { useState, useEffect } from "react"
import { Mail, AlertTriangle } from "lucide-react"
import Logo from '../assets/logo.png'
import { databases } from "../Appwrite/appwrite";
// Import ID and Query directly from the Appwrite SDK
import { ID, Query } from "appwrite";


const fetchContent = async () => {
  try {
    const response = await databases.listDocuments(
      '67f13617000106057fa7',      // 🔁 Replace with your database ID
      '67f13bcf0039d714d432',
    );
    
    console.log("Raw Appwrite Response:", response);
    console.log("Documents:", response.documents);
    console.log("Total documents:", response.documents.length);
    
    if (response.documents.length > 0) {
      console.log("First document full details:", response.documents[0]);
      console.log("heading value:", response.documents[0].heading);
    }
    
    return response.documents;
  } catch (error) {
    console.error("Detailed Appwrite Fetch Error:", {
      message: error.message,
      code: error.code,
      type: error.type
    });
    throw error;
  }
};
export default function ModernUnderConstructionPage() {
  const [progress, setProgress] = useState(0)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [content, setContent] = useState(null);

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Simulate progress increasing over time
    const timer = setTimeout(() => {
      if (progress < 80) {
        setProgress(progress + 1)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [progress])


  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true)
  //     try {
  //       const response = await databases.listDocuments(
  //         '67f13617000106057fa7',      // 🔁 Replace with your database ID
  //         '67f13bcf0039d714d432',    // 🔁 Replace with your collection ID
  //         // '67f13ee70022ea39a950'         // ✅ Document ID (from your screenshot)
  //       );
  //       setData(response);
  //       setIsLoading(false)
  //     } catch (err) {
  //       console.error("Error fetching data:", err);
  //       setError("Failed to fetch content 😢");
  //     }
  //   };

    

  //   fetchData();
  // }, []);

  useEffect(()=>{
    const loadContent = async () => {
      setIsLoading(true)
      try {
        const data = await fetchContent();
        console.log("Fetched data in component:", data);
        
        if (data && data.length > 0) {
          console.log("Setting content:", data[0]);
          setContent(data[0]);
        } else {
          console.warn("No documents found");
          setError("No content available");
        }
        setIsLoading(false)
      } catch (err) {
        console.error("Component fetch error:", err);
        setError(err.message);
      }
    };

    loadContent();
  },[])


  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!content?.email) {
      setError("No email found to submit.");
      return;
    }
  
    const recipient = content.email; // Replace with your actual email
    const subject = "New Contact Request";
    const body = `Hi,\n\nYou received a request from:\nEmail: ${content.email}\n\nMessage: ${message || "No message provided."}`;
  
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    // Open the user's mail client
    window.location.href = mailtoLink;
  
    setSubmitted(true);
    setMessage("");
  
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };
  


  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-pulse">
            <div className="h-8 bg-blue-400/20 rounded w-64 mx-auto mb-8"></div>
            <div className="h-4 bg-blue-400/20 rounded w-48 mx-auto mb-4"></div>
            <div className="h-4 bg-blue-400/20 rounded w-56 mx-auto mb-8"></div>
            <div className="h-32 w-64 bg-blue-400/20 rounded mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

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
      <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-purple-400/20 rounded-full"></div>

      {/* Header */}
      <header className="relative z-10 py-3 px-8">
        <div className="flex items-center">
          <div className="ml-2">
            <div className="mb-2">
            <img className="bg-white p-2 rounded-full w-32 h-auto object-contain" src={Logo || "/placeholder.svg"} alt="Company Logo" />
            </div>
          </div>
        </div>
      </header>

      {/* Error notification */}
      {error && (
        <div className="absolute top-4 right-4 bg-red-500/90 text-white px-4 py-2 rounded-md shadow-lg z-50 flex items-center">
          <AlertTriangle className="mr-2 h-5 w-5" />
          <span>{error}</span>
        </div>
      )}

      {/* Main content */}
      <div className="container mx-auto px-6 py-6 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Left content */}
        <div className="w-full lg:w-1/2 text-white z-10 mb-12 lg:mb-0">
          <div className="max-w-xl">
            <div className="text-sm text-cyan-400 font-medium mb-4">{content.subHeading}</div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            {content.Heading}<br />
            </h2>
            
            <p className="text-lg text-blue-100 mb-8 max-w-lg">
              {content.Content} 
            </p>
            
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-blue-100">{content.Completion_Status_Heading}</span>
                <span className="font-bold text-cyan-400">{content.Completion_Status}%</span>
              </div>
              <div className="h-3 w-full bg-blue-900/60 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-400 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${content.Completion_Status}%` }}
                ></div>
              </div>
              <div className="text-sm text-blue-300 mt-2">
                {/* Expected completion: <span className="text-cyan-400 font-medium">{statusData.completionDate}</span> */}
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-blue-900/40 p-6 rounded-lg backdrop-blur-sm border border-blue-800/50 mb-8">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              
              {submitted ? (
                <div className="text-green-400 mb-4">
                  Thank you! We'll keep you updated on our progress.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
  <button
    type="submit"
    className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-full transition-colors duration-200"
  >
    NOTIFY ME
    <Mail className="ml-2 h-5 w-5" />
  </button>
  {error && <p className="text-red-500 mt-2">{error}</p>}
  {submitted && <p className="text-green-500 mt-2">Email window opened! 📬</p>}
</form>


              )}
            </div>
            
            {/* Social Media */}
            <div className="mt-8">
              <p className="text-sm text-blue-300 mb-2">
              {content.end_content}
              </p>
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