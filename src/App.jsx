
import React, { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  BriefcaseIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  ClockIcon,
  DocumentIcon,
  PencilIcon,
  TrashIcon,
  ShareIcon,
} from '@heroicons/react/24/solid';

const colorPalette = [
  '#172554', // dark navy blue
  '#0c4a6e', // dark cyan-blue
  '#064e3b', // deep teal green
  '#78350f', // dark amber-brown
  '#3c096c', // dark indigo-purple
  '#1f2937', // slate black
  '#7f1d1d', // deep crimson red
];

const getRandomColor = () => {
  return colorPalette[Math.floor(Math.random() * colorPalette.length)];
};

const getContrastTextColor = () => '#ffffff';

// Data
const workExperienceData = [
  {
    date: 'Jan 2023 - Present',
    title: 'Senior Software Engineer',
    subtitle: 'TechCorp, Silicon Valley',
    description: 'Leading development of AI-driven analytics platform.',
    skills: ['React', 'Node.js', 'TypeScript'],
  },
  {
    date: 'Jun 2020 - Dec 2022',
    title: 'Software Engineer',
    subtitle: 'Innovate Inc., Seattle',
    description: 'Developed scalable microservices architecture.',
    skills: ['Java', 'Spring Boot', 'AWS'],
  },
  {
    date: 'May 2018 - May 2020',
    title: 'Junior Developer',
    subtitle: 'StartUpX, San Francisco',
    description: 'Built responsive web applications.',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
];

const educationData = [
  {
    date: '2014 - 2018',
    title: 'B.S. Computer Science',
    subtitle: 'Stanford University',
    description: 'Graduated with honors, focused on AI and algorithms.',
    topics: ['Data Structures', 'Machine Learning'],
  },
  {
    date: '2020',
    title: 'Online Certification',
    subtitle: 'Coursera',
    description: 'Completed Deep Learning Specialization.',
    topics: ['Neural Networks', 'TensorFlow'],
  },
];

const projectData = [
  {
    date: '2024',
    title: 'AI Analytics Dashboard',
    subtitle: 'TechCorp',
    description: 'Built real-time analytics platform.',
    image: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg',
    skills: ['React', 'AI/ML'],
    documents: ['dashboard_spec.pdf'],
  },
  {
    date: '2023',
    title: 'E-Commerce Platform',
    subtitle: 'Freelance',
    description: 'Developed full-stack e-commerce solution.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
    skills: ['Node.js', 'MongoDB'],
    documents: ['architecture_doc.pdf', 'user_guide.pdf'],
  },
];

const dailyTasksData = [
  {
    date: 'June 22, 2025',
    title: 'Morning Routine',
    subtitle: 'Daily Personal Tasks',
    description: 'Complete morning workout and meditation.',
    priority: 'High',
    status: 'In Progress',
  },
  {
    date: 'June 22, 2025',
    title: 'Team Sync',
    subtitle: 'Work Tasks',
    description: 'Attend daily standup meeting at 10 AM.',
    priority: 'Medium',
    status: 'Completed',
    documents: ['meeting_agenda.pdf'],
  },
];

const routineData = [
  {
    date: 'Weekly',
    title: 'Grocery Shopping',
    subtitle: 'Household Routine',
    description: 'Buy weekly groceries every Sunday.',
    frequency: 'Weekly',
    status: 'Pending',
  },
  {
    date: 'Monthly',
    title: 'Financial Review',
    subtitle: 'Personal Finance',
    description: 'Review budget and investments.',
    frequency: 'Monthly',
    status: 'Pending',
    documents: ['budget_template.xlsx'],
  },
];

// Timeline styles
const timelineStyles = {
  workExperience: {
    lineColor: '#6b7280',
    cardStyle: () => ({
      background: getRandomColor(),
      color: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.5)',
      padding: '16px',
      marginLeft: '20px',
    }),
    iconStyle: { background: '#0f766e', color: '#fff' },
    position: 'right',
  },
  education: {
    lineColor: '#6b7280',
    cardStyle: () => ({
      background: getRandomColor(),
      color: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 5px 10px rgba(0,0,0,0.5)',
      padding: '20px',
    }),
    iconStyle: { background: '#6b7280', color: '#fff' },
    position: 'left',
  },
  project: {
    lineColor: '#6b7280',
    cardStyle: () => ({
      background: getRandomColor(),
      color: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 6px 12px rgba(0,0,0,0.6)',
      padding: '18px',
    }),
    iconStyle: { background: '#3b82f6', color: '#fff' },
    position: 'alternate',
  },
  dailyTasks: {
    lineColor: '#6b7280',
    cardStyle: () => ({
      background: getRandomColor(),
      color: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.5)',
      padding: '16px',
    }),
    iconStyle: { background: '#d97706', color: '#fff' },
    position: 'right',
  },
  routine: {
    lineColor: '#6b7280',
    cardStyle: () => ({
      background: getRandomColor(),
      color: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.5)',
      padding: '16px',
    }),
    iconStyle: { background: '#a855f7', color: '#fff' },
    position: 'left',
  },
};

// Action Handlers (Dummy implementations)
const handleEdit = (item) => {
  alert(`Editing: ${item.title}`);
};

const handleDelete = (item) => {
  alert(`Deleting: ${item.title}`);
};

const handleShare = (item) => {
  alert(`Sharing: ${item.title}`);
};

// Content Renderer
const renderCardContent = (item, type, bgColor) => {
  const textColor = getContrastTextColor(bgColor);
  const skillStyle = {
    backgroundColor: textColor === '#ffffff' ? '#1f2937' : '#d1d5db',
    color: textColor,
    padding: '4px 8px',
    borderRadius: '4px',
  };

  return (
    <div style={{ color: textColor }} className="relative">
      {/* Action Buttons */}
      <div className="absolute top-2 right-2 flex gap-2">
        <button onClick={() => handleEdit(item)} title="Edit">
          <PencilIcon className="w-4 h-4 hover:text-yellow-300" />
        </button>
        <button onClick={() => handleDelete(item)} title="Delete">
          <TrashIcon className="w-4 h-4 hover:text-red-300" />
        </button>
        <button onClick={() => handleShare(item)} title="Share">
          <ShareIcon className="w-4 h-4 hover:text-blue-300" />
        </button>
      </div>

      {/* Card Content */}
      {type === 'project' ? (
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <h4 className="text-sm opacity-80">{item.subtitle}</h4>
            <p className="mt-2">{item.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.skills?.map((skill, i) => (
                <span key={i} style={skillStyle} className="text-sm">
                  {skill}
                </span>
              ))}
            </div>
            {item.documents && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.documents.map((doc, i) => (
                  <span key={i} className="flex items-center gap-1 text-sm" style={skillStyle}>
                    <DocumentIcon className="w-4 h-4" />
                    {doc}
                  </span>
                ))}
              </div>
            )}
          </div>
          <img
            src={item.image}
            alt={item.title}
            className="w-full md:w-1/3 h-40 object-cover rounded-lg mt-4 md:mt-0"
          />
        </div>
      ) : type === 'dailyTasks' ? (
        <div>
          <h3 className="text-xl font-bold">{item.title}</h3>
          <h4 className="text-sm opacity-80">{item.subtitle}</h4>
          <p className="mt-2">{item.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span style={skillStyle} className="text-sm">Priority: {item.priority}</span>
            <span style={skillStyle} className="text-sm">Status: {item.status}</span>
          </div>
          {item.documents && (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.documents.map((doc, i) => (
                <span key={i} className="flex items-center gap-1 text-sm" style={skillStyle}>
                  <DocumentIcon className="w-4 h-4" />
                  {doc}
                </span>
              ))}
            </div>
          )}
        </div>
      ) : type === 'routine' ? (
        <div>
          <h3 className="text-xl font-bold">{item.title}</h3>
          <h4 className="text-sm opacity-80">{item.subtitle}</h4>
          <p className="mt-2">{item.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span style={skillStyle} className="text-sm">Frequency: {item.frequency}</span>
            <span style={skillStyle} className="text-sm">Status: {item.status}</span>
          </div>
          {item.documents && (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.documents.map((doc, i) => (
                <span key={i} className="flex items-center gap-1 text-sm" style={skillStyle}>
                  <DocumentIcon className="w-4 h-4" />
                  {doc}
                </span>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-bold">{item.title}</h3>
          <h4 className="text-sm opacity-80">{item.subtitle}</h4>
          <p className="mt-2">{item.description}</p>
          {type === 'workExperience' && item.skills && (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.skills.map((skill, i) => (
                <span key={i} style={skillStyle} className="text-sm">
                  {skill}
                </span>
              ))}
            </div>
          )}
          {type === 'education' && item.topics && (
            <div className="mt-3">
              <h5 className="text-sm font-semibold">Topics Covered:</h5>
              <ul className="list-disc list-inside text-sm">
                {item.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Timeline Renderer
const renderTimeline = (type, data, icon) => {
  if (!data?.length) return null;
  const style = timelineStyles[type];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-white">
        {type.charAt(0).toUpperCase() + type.slice(1).replace(/([A-Z])/g, ' $1')}
      </h2>
      <VerticalTimeline
        layout={style.position === 'alternate' ? '2-columns' : style.position === 'right' ? '1-column-right' : '1-column-left'}
        lineColor={style.lineColor}
      >
        {data.map((item, index) => {
          const cardStyle = style.cardStyle();
          return (
            <VerticalTimelineElement
              key={index}
              contentStyle={cardStyle}
              contentArrowStyle={{ display: "none" }}
              iconStyle={style.iconStyle}
              date={item.date}
              icon={icon}
            >
              {renderCardContent(item, type, cardStyle.background)}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

// Component
const App = () => {
  const [activeSection, setActiveSection] = useState('all');

  const sectionMap = {
    workExperience: {
      data: workExperienceData,
      icon: <BriefcaseIcon className="w-5 h-5" />,
    },
    education: {
      data: educationData,
      icon: <AcademicCapIcon className="w-5 h-5" />,
    },
    project: {
      data: projectData,
      icon: <RocketLaunchIcon className="w-5 h-5" />,
    },
    dailyTasks: {
      data: dailyTasksData,
      icon: <ClockIcon className="w-5 h-5" />,
    },
    routine: {
      data: routineData,
      icon: <ClockIcon className="w-5 h-5" />,
    },
  };

  return (
    <div 
      className="w-screen h-screen py-0 bg-gray-900 text-white overflow-scroll"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto pt-20 px-20 backdrop-blur-sm bg-black/30">
        <h1 className="text-4xl font-bold text-center mb-8">
          react-vertical-timeline-component
        </h1>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mb-8">
          {Object.keys(sectionMap).concat('all').map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors border ${
                activeSection === section
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white hover:bg-gray-700'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}
            </button>
          ))}
        </div>

        {/* Timeline Sections */}
        {activeSection === 'all' ? (
          <>
            {renderTimeline('workExperience', workExperienceData, sectionMap.workExperience.icon)}
            {renderTimeline('education', educationData, sectionMap.education.icon)}
            {renderTimeline('project', projectData, sectionMap.project.icon)}
            {renderTimeline('dailyTasks', dailyTasksData, sectionMap.dailyTasks.icon)}
            {renderTimeline('routine', routineData, sectionMap.routine.icon)}
          </>
        ) : (
          renderTimeline(
            activeSection,
            sectionMap[activeSection]?.data,
            sectionMap[activeSection]?.icon
          )
        )}
      </div>
    </div>
  );
};

export default App;