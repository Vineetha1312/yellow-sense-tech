import React, { Component } from 'react';
import { FaSearch, FaBookmark, FaBuilding, FaMapMarkerAlt, FaSortAmountDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

class JobsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      sortOption: 'date',
      bookmarks: JSON.parse(localStorage.getItem('bookmarks')) || [],
      jobsList: [],
      pageNo: 1,
      isLoading: false,
      hasError: false,
      hasMoreJobs: true,
    };
  }

  componentDidMount() {
    this.getJobsList();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getJobsList = async () => {
    const { pageNo } = this.state;

    this.setState({ isLoading: true });

    try {
      const response = await fetch(`https://testapi.getlokalapp.com/common/jobs?page=${pageNo}`);
      const data = await response.json();
      
      if (data.results.length === 0) {
        this.setState({ hasMoreJobs: false });
      }

      const updatedJobsList = data.results.map(eachJob => ({
        id: eachJob.id,
        jobTitle: eachJob.job_role,
        jobSalary: eachJob.primary_details?.Salary || 'Not Provided',
        phoneNo: eachJob.whatsapp_no,
        jobLocation: eachJob.Place || 'Unknown Location',
        otherDetails: eachJob.other_details,
        companyName: eachJob.company_name,
      }));

      this.setState(prevState => ({
        jobsList: [...prevState.jobsList, ...updatedJobsList],
        isLoading: false,
      }));
    } catch (error) {
      this.setState({ isLoading: false, hasError: true });
    }
  };

  handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if (this.state.hasMoreJobs && !this.state.isLoading) {
        this.setState(prevState => ({ pageNo: prevState.pageNo + 1 }), this.getJobsList);
      }
    }
  };

  setSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  setSortOption = (e) => {
    this.setState({ sortOption: e.target.value });
  };

  toggleBookmark = (job) => {
    const { bookmarks } = this.state;
    const isBookmarked = bookmarks.some(bookmark => bookmark.id === job.id);

    const updatedBookmarks = isBookmarked
      ? bookmarks.filter(bookmark => bookmark.id !== job.id)
      : [...bookmarks, job];

    this.setState({ bookmarks: updatedBookmarks });
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  JobCard = ({ job, isBookmarked }) => {
    const navigate = useNavigate();
  
    const handleCardClick = () => {
      navigate(`/jobs/${job.id}`, { state: job });
    };
  
    const handleBookmarkClick = (e) => {
      e.stopPropagation(); // Prevent the click event from bubbling up to the card
      this.toggleBookmark(job);
    };
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:bg-blue-50 transition-shadow duration-300"
        onClick={handleCardClick} // Only card clicks navigate
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.jobTitle}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <FaBuilding className="mr-2" />
          <span>{job.phoneNo || 'Not Provided'}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FaMapMarkerAlt className="mr-2" />
          <span>{job.jobLocation}</span>
        </div>
        <p className="text-gray-700 mb-4">{job.jobSalary}</p>
        <div className="flex items-center justify-between">
          <button
            onClick={handleBookmarkClick} // Bookmark button click
            className={`text-sm font-medium ${isBookmarked ? 'text-blue-600' : 'text-gray-500'} hover:text-blue-700 transition-colors duration-300`}
          >
            <FaBookmark className="inline-block mr-1" />
            {isBookmarked ? 'Bookmarked' : 'Bookmark'}
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
            Apply Now
          </button>
        </div>
      </motion.div>
    );
  };

  render() {
    const { searchTerm, sortOption, bookmarks, jobsList, isLoading, hasError, hasMoreJobs } = this.state;
    const { activeSection } = this.props;

    return (
      <div className="min-h-screen bg-gray-100 font-sans text-sm">
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-6 py-4">
            <h1 className="text-3xl font-bold text-gray-800 text-center">Jobs Lists</h1>
          </nav>
        </header>
        <main className="container mx-auto px-6 py-8">
          {activeSection === 'jobs' && (
            <div>
              <div className="flex items-center mb-6">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search for jobs or companies"
                    value={searchTerm}
                    onChange={this.setSearchTerm}
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <div className="ml-4 relative">
                  <select
                    value={sortOption}
                    onChange={this.setSortOption}
                    className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="date">Sort by Date</option>
                    <option value="title">Sort by Title</option>
                    <option value="location">Sort by Location</option>
                  </select>
                  <FaSortAmountDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
              {isLoading && <div className="text-center py-4">Loading...</div>}
              {hasError && <div className="text-center py-4 text-red-600">Error fetching jobs. Please try again later.</div>}
              {jobsList.length === 0 && !isLoading && !hasError && <div className="text-center py-4">No jobs available.</div>}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobsList.map(job => (
                  <this.JobCard
                    key={job.id}
                    job={job}
                    isBookmarked={bookmarks.some(bookmark => bookmark.id === job.id)}
                  />
                ))}
              </div>
              {!hasMoreJobs && <div className="text-center py-4">No more jobs to show.</div>}
            </div>
          )}

          {activeSection === 'bookmarks' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookmarks.length > 0 ? (
                bookmarks.map(job => (
                  <this.JobCard key={job.id} job={job} isBookmarked={true} />
                ))
              ) : (
                <div className='text-center'>
                  <h1 className="text-2xl font-bold text-center">No jobs bookmarked yet.</h1>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    );
  }
}

export default JobsPage;
