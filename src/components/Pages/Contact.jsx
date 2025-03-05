
import Banner from "@/Banner/Banner";
import React from "react";


 function ContactUs() {
  const bannerImage = 'https://www.shutterstock.com/image-photo/blue-color-laser-cnc-cut-260nw-2149033525.jpg';


  return (
    <>
      <Banner  title="Contact Us " breadcrumb="Contact us" image={bannerImage} />
      <div className="p-6 text-center min-h-screen max-w-7xl mx-auto bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
      {/* <h1 className="text-5xl font-extrabold text-blue-700 drop-shadow-md">
        Contact Us
      </h1> */}
      <p className="text-xl text-gray-800 mt-2 font-medium">
        Get in touch with R.S. Industries
      </p>

      {/* Contact Information Section */}
      <div className="mt-8 text-left bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Contact Details</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            <strong>Office Address:</strong> Plot No. 21, Prem Enclave, Meerut Road, Ghaziabad
          </p>
          <p className="text-gray-600">
            <strong>Factory Address:</strong> Khasra No. 1087, Vikes Nagar, Opposite D.P.S., Near Kailash Hospital, Opposite Ultam Toyota, Meerut Road, Ghaziabad
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> +91-123-456-7890
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> info@rsindustries.com
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="mt-8 text-left bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default ContactUs