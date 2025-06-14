import { useState, useEffect } from "react"
import { Mail, AlertTriangle } from "lucide-react"
import Logo from '../assets/logo.png'
import Laptop from '../assets/Desktop.png'
import { databases } from "../Appwrite/appwrite";

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
  // eslint-disable-next-line no-empty-pattern
  const [] = useState("")
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

      {/* Main content - MOBILE LAYOUT REORDERED */}
      <div className="container mx-auto px-4 sm:px-6 py-6 flex lg:flex-row flex-col items-center min-h-screen">
        {/* Right illustration section - MOVED TO TOP ON MOBILE */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative z-10 px-4 mb-12 lg:mb-0 lg:order-2">
          <div className="relative transforlg:scale-110 origin-center max-w-full">
            {/* Orbital visualization - adjusted for responsiveness */}
            {/* <div className="absolute -top-16 sm:-top-20 lg:-top-32 -right-8 sm:-right-12 lg:-right-20 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 pointer-events-none select-none">
              <div className="w-full h-full rounded-full border-4 border-cyan-400/30 absolute transform rotate-45"></div>
              <div className="w-3/4 h-3/4 rounded-full border-2 border-blue-400/40 absolute top-[12.5%] left-[12.5%] transform -rotate-12"></div>
              <div className="w-1/2 h-1/2 rounded-full border-2 border-purple-400/30 absolute top-1/4 left-1/4 transform rotate-30"></div>
              <div className="w-1/3 h-1/3 rounded-full border border-cyan-400/50 absolute top-1/3 left-1/3 transform -rotate-45"></div>
            </div> */}

            {/* Laptop with Under Construction - responsive sizing */}
            <div className="relative lg:-top-[6.6rem]">
              <div>
                <img src={Laptop} alt="" />
              </div>
</div>
          </div>
        </div>
        
        {/* Left content - MOVED BELOW ILLUSTRATION ON MOBILE */}
        <div className="w-full lg:w-1/2 text-white z-10 lg:order-1">
          <div className="max-w-xl mx-auto lg:mx-0">
            <div className="text-sm text-cyan-400 font-medium mb-4">{content?.subHeading || "WEBSITE STATUS"}</div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            {content?.Heading || "WEBSITE IS UNDER CONSTRUCTION"}<br />
            </h2>
            
            <p className="text-lg text-blue-100 mb-8 max-w-lg">
              {content?.Content || "We're currently working on making our website even better."} 
            </p>
            
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-blue-100">{content?.Completion_Status_Heading || "Completion Status"}</span>
                <span className="font-bold text-cyan-400">{content?.Completion_Status || progress}%</span>
              </div>
              <div className="h-3 w-full bg-blue-900/60 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-400 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${content?.Completion_Status || progress}%` }}
                ></div>
              </div>
              <div className="text-sm text-blue-300 mt-2">
                {content?.completion_date && (
                  <>Expected completion: <span className="text-cyan-400 font-medium">{content.completion_date}</span></>
                )}
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
              {content?.end_content || "FOLLOW US FOR UPDATES"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}