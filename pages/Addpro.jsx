import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaPlus } from 'react-icons/fa';

const availableAmenities = [
  'Wi-Fi', 'Parking', 'Laundry Room', 'Gym', 'Security', 'Pool'
];

const AddPro = () => {
  const [propertyData, setPropertyData] = useState({
    title: '',
    address: '',
    rent: '',
    area: '',
    rooms: '',
    bathrooms: '',
    amenities: [], 
    description: '',
  });

  const [status, setStatus] = useState(null); 
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, options } = e.target;

    if (name === 'amenities') {
      const selectedAmenities = Array.from(options)
        .filter(option => option.selected)
        .map(option => option.value);
      setPropertyData({ ...propertyData, [name]: selectedAmenities });
    } else {
      setPropertyData({ ...propertyData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    setStatus(null);

    setTimeout(() => {
      if (propertyData.title && propertyData.rent) {
        setStatus('success');
        setMessage('Property added successfully');
        setPropertyData({
          title: '', address: '', rent: '', area: '', rooms: '', bathrooms: '', amenities: [], description: '',
        });
      } else {
        setStatus('error');
        setMessage('An error occurred. Please fill in all required fields.');
      }
    }, 1000);
  };

  const handleCancel = () => {
    setPropertyData({
      title: '', address: '', rent: '', area: '', rooms: '', bathrooms: '', amenities: [], description: '',
    });
    setStatus(null);
    setMessage('');
  };

  // Tailwind CSS classes
  const inputClasses = "w-full p-2 border border-gray-250 rounded-md box-border focus:ring-blue-500 focus:border-blue-500";
  const labelTextClasses = "block font-bold mb-1";
  const buttonPrimaryClasses = "px-8 py-2 rounded-md font-bold border-none cursor-pointer mr-4 bg-blue-600 text-white hover:bg-blue-700 transition duration-150";
  const buttonSecondaryClasses = "px-8 py-2 rounded-md font-bold border-none cursor-pointer bg-gray-300 text-gray-800 hover:bg-gray-400 transition duration-150";


  return (
    <div className="font-sans">
      
      {/* Header */}
      <div className="w-full px-4">
          <header className="flex justify-between items-center py-4 border-b border-gray-200">
              <div className="flex items-center">
                <span className="text-2xl font-bold">uni-stay</span>
              </div>
              <div>
                <span className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-md cursor-pointer mr-3 hover:bg-yellow-500">Dashboard</span>
                <span className="px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600">Logout</span>
              </div>
          </header>
      </div>

      {/* Main Content */}
      <div className="w-full mt-10 px-4 max-w-4xl mx-auto">
          
          <h2 className="text-center text-2xl font-bold mb-10 border-b pb-4">
            <FaPlus className="inline-block align-middle mr-2 text-3xl" /> Add New Property
          </h2>

          <form onSubmit={handleSubmit}>
            
            {/* 1. Title beside Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
                <div>
                    <label className="block mb-4">
                      <span className={labelTextClasses}>Property Title</span>
                      <input type="text" name="title" value={propertyData.title} onChange={handleChange} className={inputClasses} />
                    </label>
                </div>
                <div>
                    <label className="block mb-4">
                      <span className={labelTextClasses}>Detailed Address</span>
                      <input type="text" name="address" value={propertyData.address} onChange={handleChange} className={inputClasses} />
                    </label>
                </div>
            </div>

            {/* 2. Rent beside Area */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
                <div>
                    <label className="block mb-4">
                      <span className={labelTextClasses}>Monthly Rent Price</span>
                      <input type="number" name="rent" value={propertyData.rent} onChange={handleChange} className={inputClasses} />
                    </label>
                </div>
                <div>
                    <label className="block mb-4">
                      <span className={labelTextClasses}>Area</span>
                      <input type="text" name="area" value={propertyData.area} onChange={handleChange} className={inputClasses} />
                    </label>
                </div>
            </div>

            {/* 3. Rooms beside Bathrooms */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
                <div>
                    <label className="block mb-4">
                      <span className={labelTextClasses}>Number of Rooms</span>
                      <select name="rooms" value={propertyData.rooms} onChange={handleChange} className={inputClasses}>
                        <option value="">Select</option>
                        {[...Array(6).keys()].map(i => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
                      </select>
                    </label>
                </div>
                <div>
                    <label className="block mb-4">
                      <span className={labelTextClasses}>Number of Bathrooms</span>
                      <select name="bathrooms" value={propertyData.bathrooms} onChange={handleChange} className={inputClasses}>
                        <option value="">Select</option>
                        {[...Array(5).keys()].map(i => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
                      </select>
                    </label>
                </div>
            </div>

            {/* 4. Images beside Amenities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
                <div>
                    <label className="block mb-4">
                      <span className={labelTextClasses}>Upload Property Images</span>
                      <input type="file" multiple className={inputClasses} />
                    </label>
                </div>
                <div>
                    <label className="block mb-4">
                        <span className={labelTextClasses}>Available Amenities</span>
                        <select
                          name="amenities"
                          multiple={true}
                          value={propertyData.amenities}
                          onChange={handleChange}
                          className={`${inputClasses} h-24`}
                        >
                          {availableAmenities.map(amenity => (
                              <option key={amenity} value={amenity}>{amenity}</option>
                          ))}
                        </select>
                    </label>
                </div>
            </div>
            
            {/* Description Field (Full Width) */}
            <div className="mb-8">
                <label className="block">
                  <span className={labelTextClasses}>Additional Description</span>
                  <textarea
                    name="description"
                    value={propertyData.description}
                    onChange={handleChange}
                    rows="4"
                    className={inputClasses}
                  ></textarea>
                </label>
            </div>


            {/* Submit and Cancel Buttons */}
            <div className="flex justify-center mt-10 pt-6 border-t border-gray-200">
              <button type="submit" className={buttonPrimaryClasses}>
                Save Property
              </button>
              <button type="button" onClick={handleCancel} className={buttonSecondaryClasses}>
                Cancel
              </button>
            </div>
          </form>

          {/* Success/Error Messages */}
          <div className="mt-12 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Success / Error messages</h3>
              {status === 'success' && (
                  <p className="text-green-600 flex items-center font-bold">
                      <FaCheckCircle className="mr-2" /> {message || 'Property added successfully'}
                  </p>
              )}
              {status === 'error' && (
                  <p className="text-red-600 flex items-center font-bold">
                      <FaTimesCircle className="mr-2" /> {message || 'An error occurred'}
                  </p>
              )}
          </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-12 bg-gray-700 text-white py-8 text-sm leading-relaxed w-full">
          <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
              
              {/* Column 1: Uni-Stay Info */}
              <div>
                  <h4 className="mb-3 text-base font-bold">Uni-Stay</h4>
                  <p>Your trusted partner in finding the perfect student housing for a comfortable university life, affordable and accessible.</p>
                  <div className="mt-4 flex space-x-3">
                    <FaCheckCircle className="text-blue-400" />
                    <FaTimesCircle className="text-blue-400" />
                  </div>
              </div>
              
              {/* Column 2: Quick Links */}
              <div>
                  <h4 className="mb-3 text-base font-bold">Quick Links</h4>
                  <ul className="list-none p-0 space-y-1">
                      <li>For Landlords</li>
                      <li>Student Resources</li>
                      <li>Blog</li>
                  </ul>
              </div>
              
              {/* Column 3: Support */}
              <div>
                  <h4 className="mb-3 text-base font-bold">Support</h4>
                  <ul className="list-none p-0 space-y-1">
                      <li>Help Center</li>
                      <li>Contact Us</li>
                      <li>Safety Guidelines</li>
                      <li>Terms of Service</li>
                  </ul>
              </div>
              
              {/* Column 4: Contact Info */}
              <div>
                  <h4 className="mb-3 text-base font-bold">Contact Info</h4>
                  <p>hello@uni-stay.com</p>
                  <p>+(123) 123-4567</p>
                  <p>123 Main Street, Modern District, CA 94035</p>
              </div>

          </div>
          <div className="text-center mt-6 pt-3 border-t border-gray-600 mx-auto max-w-4xl px-4">
            © 2025 uni-stay. All rights reserved.
          </div>
      </footer>

    </div>
  );
};

export default AddPro;