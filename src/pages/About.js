import React, { useState } from 'react';

function About() {
  const [selectedImage, setSelectedImage] = useState(null); // สถานะสำหรับเก็บรูปภาพที่เลือก

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // รับไฟล์ที่เลือก
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // ตั้งค่ารูปภาพที่เลือก
      };
      reader.readAsDataURL(file); // อ่านไฟล์เป็น URL
    }
  };

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg flex items-center">
        <div className="w-64 h-64 bg-gray-300 flex items-center justify-center rounded-lg">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <span className="text-gray-500">400 x 400</span>
          )}
        </div>
        <div className="ml-8">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">นาย ลาเมก โลสิงห์</p>
          <p className="text-gray-700 mb-4">รหัสนักศึกษา : 651540005019-2</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-4"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
