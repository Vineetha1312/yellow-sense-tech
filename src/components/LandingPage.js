import React, { useState } from 'react';
import { FaSearch, FaBriefcase, FaBuilding, FaUser, FaEnvelope, FaStar, FaBars, FaTimes, FaBookmark } from 'react-icons/fa';
import JobsPage from './JobsPage';

const testimonials = [
  {
    username: "Emily Clark",
    jobTitle: "Software Engineer",
    review: "This platform exceeded my expectations. The user experience is seamless, and the customer support is fantastic. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    username: "James Wilson",
    jobTitle: "Product Manager",
    review: "The job listings are very comprehensive and easy to navigate. I found my dream job within days of using this platform.",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg"
  },
  {
    username: "Sophia Johnson",
    jobTitle: "Data Analyst",
    review: "A great resource for anyone looking to switch careers. The search and filter features are top-notch!",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg"
  }
];


const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [email, setEmail] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('jobs');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    console.log('Newsletter signup for:', email);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleJobs = () => {
    setActiveSection('jobs')
  }

  const toggleBookmarkPage = () => {
    setActiveSection('bookmarks')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 sm:py-6 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-600">YellowSense</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4 sm:space-x-6">
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-blue-600">Find Jobs</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-blue-600">For Employers</a></li>
              <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="text-sm sm:text-base bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full hover:bg-blue-700">Sign In</a></li>
            </ul>
          </nav>
          <button className="md:hidden text-blue-600" onClick={toggleDrawer}>
            <FaBars className="text-xl sm:text-2xl" />
          </button>
        </div>
      </header>

      <div className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="p-6">
          <button className="absolute top-4 right-4 text-gray-600" onClick={toggleDrawer}>
            <FaTimes className="text-xl sm:text-2xl" />
          </button>
          <ul className="mt-8 space-y-4">
            <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-blue-600 block py-2">Find Jobs</a></li>
            <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-blue-600 block py-2">For Employers</a></li>
            <li><a href="#" className="text-sm sm:text-base text-gray-600 hover:text-blue-600 block py-2">About Us</a></li>
            <li><a href="#" className="text-sm sm:text-base bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full hover:bg-blue-700 inline-block mt-4">Sign In</a></li>
          </ul>
        </div>
      </div>

      <main>
        <section className="bg-orange-400 text-white py-12 sm:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Find Your Dream Job Today</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8">Connect with top employers and discover exciting career opportunities</p>
            <form onSubmit={handleSearch} className="max-w-3xl mx-auto flex bg-white rounded-full overflow-hidden shadow-lg">
              <input
                type="text"
                placeholder="Search jobs, keywords, or companies"
                className="flex-grow px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="bg-blue-700 text-white text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 hover:bg-blue-800 transition duration-300">
                <FaSearch className="inline mr-2" />
                Search
              </button>
            </form>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8 sm:mb-10">Popular Job Categories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {['Technology', 'Healthcare', 'Finance', 'Education'].map((category) => (
                <div key={category} className="bg-gray-100 rounded-lg p-4 sm:p-6 text-center hover:shadow-md transition duration-300">
                  <FaBriefcase className="text-3xl sm:text-4xl text-blue-600 mb-3 sm:mb-4 mx-auto" />
                  <h4 className="text-lg sm:text-xl font-semibold">{category}</h4>
                  <p className="mt-2 text-sm sm:text-base text-gray-600">100+ Jobs Available</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8 sm:mb-10">Featured Job Listings</h3>
            
            <JobsPage toggleBookmarkPage={toggleBookmarkPage} toggleJobs={toggleJobs} activeSection={activeSection}/>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-8 sm:mb-10">What Our Users Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial} className="bg-white text-gray-800 rounded-lg p-4 sm:p-6 shadow-md">
                  <p className="text-sm sm:text-base mb-3 sm:mb-4">{testimonial.review}</p>
                  <div className="flex items-center">
                    <img src={testimonial.avatar} alt="User" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4" />
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold">{testimonial.username}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{testimonial.jobTitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Stay Updated with New Opportunities</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Subscribe to our newsletter and receive the latest job listings directly in your inbox.</p>
              <form onSubmit={handleNewsletterSignup} className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-3 sm:px-4 py-2 rounded-l-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-r-full text-sm sm:text-base hover:bg-blue-700 transition duration-300">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

       <footer className="bg-gray-800 text-white py-8 sm:py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">JobConnect</h4>
              <p className="text-sm sm:text-base text-gray-400">Connecting talent with opportunities</p>
            </div>
            <div>
              <h5 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white">Find Jobs</a></li>
                <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white">Post a Job</a></li>
                <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white">Resources</a></li>
                <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Company</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Connect With Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><FaEnvelope className="text-xl sm:text-2xl" /></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaUser className="text-xl sm:text-2xl" /></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaStar className="text-xl sm:text-2xl" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
            <p>&copy; 2023 JobConnect. All rights reserved.</p>
          </div>
        </div>
      </footer> 
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md py-2 px-4">
      <div className="container mx-auto flex justify-center space-x-4">
        <button onClick={toggleJobs}
          className={`px-4 py-2 rounded-full text-sm sm:text-base ${activeSection === 'jobs' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          <FaBriefcase className="inline-block mr-2" /> Jobs
        </button>
        <button
          onClick={toggleBookmarkPage}
          className={`px-4 py-2 rounded-full text-sm sm:text-base ${activeSection === 'bookmarks' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          <FaBookmark className="inline-block mr-2" /> Bookmarks
        </button>
      </div>
    </div>
    </div>
  );
};

export default LandingPage;
