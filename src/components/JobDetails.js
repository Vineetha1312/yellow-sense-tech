import { useParams, useLocation } from 'react-router-dom';

import React from 'react';
import { FaMapMarkerAlt, FaBriefcase, FaIndustry, FaBookmark, FaShareAlt } from 'react-icons/fa';

const JobDetails= () => {
  const { id } = useParams(); 
  const location = useLocation();
  const jobDetails = location.state; 

  if (!jobDetails) {
    return <p>No job details available.</p>;
  }

  const { jobTitle, jobSalary, otherDetails, companyName, jobLocation } = jobDetails;

  const job = {
    type: 'Full-time',
    description: 'We are seeking a talented Senior Software Engineer to join our innovative team. The ideal candidate will have a strong background in full-stack development and a passion for creating scalable, efficient solutions.',
    responsibilities: [
      'Design and implement complex software systems',
      'Collaborate with cross-functional teams to define and develop new features',
      'Mentor junior developers and conduct code reviews',
      'Optimize application performance and scalability',
      'Stay up-to-date with emerging trends and technologies'
    ],
    requirements: [
      '5+ years of experience in software development',
      'Proficiency in React, Node.js, and modern JavaScript',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Strong problem-solving and analytical skills',
      'Excellent communication and teamwork abilities'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Comprehensive health, dental, and vision insurance',
      'Flexible work hours and remote work options',
      '401(k) matching',
      'Professional development budget',
      'Generous paid time off'
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl bg-gray-200">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div className="flex items-center mb-4 sm:mb-0">
              
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{jobTitle}</h1>
                <p className="text-xl text-gray-600">{companyName}</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Apply Now
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded flex items-center">
                <FaBookmark className="mr-2" /> Save
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded flex items-center">
                <FaShareAlt className="mr-2" /> Share
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <FaMapMarkerAlt className="mr-2" /> {jobLocation}
            </div>
            <div className="flex items-center text-gray-600">
              <FaBriefcase className="mr-2" /> {job.type}
            </div>
            <div className="flex items-center text-gray-600">
              <FaIndustry className="mr-2" /> {job.industry}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Salary</h2>
            <p className="text-gray-700">{jobSalary}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Job Description</h2>
            <p className="text-gray-700">{otherDetails}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-700">
              {job.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Requirements</h2>
            <ul className="list-disc list-inside text-gray-700">
              {job.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Benefits</h2>
            <ul className="list-disc list-inside text-gray-700">
              {job.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg w-full sm:w-auto">
              Apply for this position
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

