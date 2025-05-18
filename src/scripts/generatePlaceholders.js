const fs = require('fs');
const path = require('path');

// Ensure the directories exist
const publicDir = path.join(__dirname, '../../public');
const projectsDir = path.join(publicDir, 'projects');

if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

// Create an SVG placeholder image with text
const createSvgPlaceholder = (filename, text, bgColor = '#4B5563', textColor = '#ffffff') => {
  const width = 800;
  const height = 600;
  
  const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${bgColor}"/>
  <text 
    x="50%" 
    y="50%" 
    font-family="Arial, sans-serif" 
    font-size="32" 
    text-anchor="middle" 
    fill="${textColor}"
    dominant-baseline="middle"
  >
    ${text}
  </text>
</svg>
  `;
  
  fs.writeFileSync(path.join(projectsDir, filename), svg);
  console.log(`Created ${filename}`);
};

// Create placeholder profile pictures
const createProfilePlaceholders = () => {
  // Profile picture
  createSvgPlaceholder('profile-pic.jpg', 'Profile Picture', '#3B82F6');
  
  // About image
  createSvgPlaceholder('about-image.jpg', 'About Me Image', '#8B5CF6');
};

// Create placeholder project images
const createProjectPlaceholders = () => {
  const projects = [
    { name: 'project1.jpg', text: 'E-commerce Website', color: '#3B82F6' },
    { name: 'project2.jpg', text: 'Task Management App', color: '#8B5CF6' },
    { name: 'project3.jpg', text: 'Weather Dashboard', color: '#10B981' },
    { name: 'project4.jpg', text: 'Portfolio Website', color: '#F59E0B' },
    { name: 'project5.jpg', text: 'Recipe Sharing Platform', color: '#EF4444' },
    { name: 'project6.jpg', text: 'Fitness Tracker', color: '#6B7280' },
  ];
  
  projects.forEach((project) => {
    createSvgPlaceholder(project.name, project.text, project.color);
  });
};

// Create resume placeholder
const createResumePlaceholder = () => {
  const resumeText = `
Sample Resume
--------------------------
John Doe
Web Developer
john.doe@example.com
(123) 456-7890

Education
--------------------------
Bachelor of Science in Computer Science
University of Example
2015-2019

Experience
--------------------------
Web Developer
Example Corp
2019-Present

Projects
--------------------------
Portfolio Website
E-commerce Platform
Mobile App
`;

  fs.writeFileSync(path.join(publicDir, 'resume.pdf'), resumeText);
  console.log('Created resume.pdf placeholder');
};

// Run the functions
createProfilePlaceholders();
createProjectPlaceholders();
createResumePlaceholder();

console.log('All placeholder assets have been generated.'); 