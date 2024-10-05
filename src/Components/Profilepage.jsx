import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [isCustomerDropdownOpen, setCustomerDropdownOpen] = useState(false);
  const [isOrganizerDropdownOpen, setOrganizerDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const toggleCustomerDropdown = () => {
    setCustomerDropdownOpen(!isCustomerDropdownOpen);
  };

  const toggleOrganizerDropdown = () => {
    setOrganizerDropdownOpen(!isOrganizerDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setCustomerDropdownOpen(false);
        setOrganizerDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/src/ticketverse.jpg" alt="TicketVerse Logo" className="w-8 h-8" />
            <span className="text-xl font-semibold text-gray-700">TicketVerse</span>
          </div>
          <nav className="flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Events</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Blog</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
          </nav>
          <div className="flex space-x-4 items-center">
            <button className="text-gray-700">English</button>
            <div className="flex space-x-4 items-center relative">
              <div className="relative dropdown">
                <button className="bg-purple-600 text-white px-4 py-2 rounded" onClick={toggleCustomerDropdown}>
                  Customer
                </button>
                {isCustomerDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Login</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Signup</a>
                  </div>
                )}
              </div>
              <div className="relative dropdown">
                <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded" onClick={toggleOrganizerDropdown}>
                  Organizer
                </button>
                {isOrganizerDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Login</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Signup</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="relative bg-cover bg-center h-80 flex items-center justify-center" style={{ backgroundImage: 'url(/src/ticketverse.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 w-full px-8">
          <div className="flex justify-between items-center text-white">
            <div className="flex items-center space-x-4">
              <img src="/src/profile.png" alt="Profile Avatar" className="w-20 h-20 inline-block" />
              <div>
                <h1 className="text-3xl font-semibold">Tandav fusion</h1>
                <p className="text-sm">Member since Sep 2024</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="text-2xl">Follow me</div>
              <a href="#" className="text-gray-400 hover:text-blue-600 p-2 px-3 bg-gray-100 bg-opacity-20 rounded-full"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 p-2 px-3 bg-gray-100 bg-opacity-20 rounded-full"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-gray-400 hover:text-blue-500 p-2 px-3 bg-gray-100 bg-opacity-20 rounded-full"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <nav className="text-white font-bold mt-4">
            <a href="#" className="hover:text-indigo-600">Home</a> /
            <span className="ml-2">Organizer Details</span>
          </nav>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="pt-40 px-10 col-lg-8 max-w-4xl">
          <h1 className="text-3xl mb-5">All Events</h1>
          <ul className="flex flex-wrap max-w-3xl">
            {['All', 'Film screenings', 'Music Concerts', 'Sports Events', 'Travel & Tourism', 'Food & Drink', 'Nightlife & Parties', 'Dance', 'Conferences & Summits', 'Comedy Shows', 'Theater & Performing Arts', 'Festival'].map((category) => (
              <li key={category} className="mr-6 mb-1 font-bold text-lg">
                <button
                  className={`${activeCategory === category ? 'text-violet-500' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-gray-400 shadow shadow-inner w-2/5 h-70 mt-40 mr-10">
          <div className="p-4">
            <div className="flex items-center space-x-4">
              <img src="/src/profile.png" alt="Profile Avatar" className="w-20 h-20 inline-block" />
              <div>
                <h1 className="text-2xl font-semibold">Tandav fusion</h1>
                <p className="text-sm">Member since Sep 2024</p>
              </div>
            </div>
            <ul className="p-5 py-8">
              <li className="flex justify-between py-4">
                <span className="font-bold">Total Events</span>
                <span>1</span>
              </li>
              <li className="flex justify-between py-4">
                <span className="font-bold">Email</span>
                <span>tandavfusion@gmail.com</span>
              </li>
            </ul>
            <div className="text-center bg-violet-700 py-3 rounded-xl text-white">
              <button>Contact Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-70 bg-gray-100 ">
      <div className="bg-white shadow-md rounded-lg max-w-md w-full p-6 mb-80">

        <div className="relative">
          <img
            src="/src/ticketverse.jpg"
            alt="Dance Meet"
            className="rounded-t-lg w-full object-cover"
          />
          <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-2 py-1">
            FREE
          </div>
          
        </div>
        
        <div className="p-4">
          <a href="#" className="text-2xl font-semibold mb-2 text-gray-800">Tandav Fusion's First Dance Meet</a>
          <p className="text-gray-600 mb-4">
            Hey everyone! We’re so excited to invite you to Tandav Fusion's very first Dance Meet...
          </p>
          <div className="text-gray-700">
            <div className="flex items-center space-x-2 mb-1">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M7 10v11h10V10H7zm0-1h10V7.5l-5-4.5-5 4.5V9z" />
              </svg>
              <span>Sunday, 20 Oct, 2024</span>
            </div>
            <div className="flex items-center space-x-2 mb-1">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M5 19h14v1H5v-1zm14-6v-2H5v2h14zm0 2v2H5v-2h14zm-7-8a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
              <span>03:00 PM (Duration: 1h 30m)</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2C8.4 2 5 5.4 5 9c0 5.6 7 13 7 13s7-7.4 7-13c0-3.6-3.4-7-7-7zm0 9c-1.1 0-2-.9-2-2 0-1.1.9-2 2-2 1.1 0 2 .9 2 2 0 1.1-.9 2-2 2z" />
              </svg>
              <span>Frankfurt, Germany</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          
          <span className="text-gray-500">Entry: Free</span>
        </div>
      </div>
    </div>
    <footer className="bg-blue-950 text-white p-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h1 className="pb-5 text-3xl">TicketVerse</h1>
            <p className="max-w-md text-xl leading-6">
              We Are A Passionate Team Of Event Enthusiasts With A Shared Vision - Bringing Together Fans Like Yourself 
              With A Kaleidoscope Of Experiences! We Understand The Thrill, Anticipation, And Joy That Comes With 
              Attending Live Events.
            </p>
            <div className="mt-8 flex justify-center space-x-6">
        <a href="#" className="text-gray-400 hover:text-blue-600 p-2 px-3 bg-gray-100 bg-opacity-20 rounded-full"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 p-2 px-3 bg-gray-100 bg-opacity-20 rounded-full"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-gray-400 hover:text-blue-500 p-2 px-3 bg-gray-100 bg-opacity-20 rounded-full"><i className="fab fa-twitter"></i></a>
          
        <a href="#" className="text-gray-400 hover:text-blue-600 p-2 px-3 bg-gray-100 bg-opacity-20 rounded-full"><i className="fab fa-whatsapp"></i></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 p-2 px-3 bg-gray-100 bg-opacity-20 rounded-full"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-gray-400 hover:text-blue-500 p-2 px-3  bg-gray-100 bg-opacity-20 rounded-full"><i className="fab fa-instagram"></i></a>
      
        </div>
          </div>

        
          <div className="mb-6 md:mb-0">
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-xl">
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Imprint</a></li>
            </ul>
          </div>

        
          <div className="mb-6 md:mb-0">
            <h5 className="font-semibold mb-4">Contact Us</h5>
            <p className="text-xl mb-2">📍 Germany</p>
            <p className="text-xl mb-2">✉️ <a href="mailto:admin@ticketverse.eu" className="hover:underline">admin@ticketverse.eu</a></p>
            <p className="text-xl mb-2">📞 +49 1590 1459100</p>
          </div>
        </div>
       
      </div>
      <hr className="mt-20"></hr>
      <div className="text-center m-4">
      Copyright ©2024. All Rights Reserved. TicketVerse UG
      </div>
    </footer>
    </div>
  );
};

export default ProfilePage;
