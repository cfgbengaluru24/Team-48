import React from 'react';
// import StudentLayout from './StudentLayout';

const stories = [
  {
    name: 'Aisha Patel',
    image: 'https://www.shutterstock.com/image-photo/portrait-happy-traditional-indian-woman-260nw-2126650322.jpg', // Add path to image
    story: 'I grew up in a small village in Chittoor District. Despite facing numerous hardships in my childhood, including limited access to quality education and financial struggles, I never gave up on my dreams. I joined the coding bootcamp offered by Joining The Dots Foundation with no prior experience in programming. With dedication and hard work, I mastered web development and am now working as a software engineer at a leading tech company, earning a high salary and supporting my family.',
  },
  {
    name: 'Priya Rao',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtOd-HBjwkaTupaHaPPUrV9q2xIhSM4tbgxA&s', // Add path to image
    story: 'Coming from a remote area in Andhra Pradesh, I had always been passionate about technology but lacked the resources to pursue my interest. When I enrolled in the coding program, I excelled in every module. Today, I am a front-end developer at a renowned startup, earning a substantial income and mentoring other girls from my village.',
  },
  {
    name: 'Sana Mehra',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3iD1m8RHH4cl02of867bLtYaPCCWaucpr9g&s', // Add path to image
    story: 'My journey began in a rural village where access to education was a luxury. Determined to change my circumstances, I joined the coding bootcamp. With perseverance and the support of the Foundation, I became proficient in programming and now work as a successful software developer. I am proud to be an inspiration to other girls in my village, showing them that they too can achieve their dreams.',
  },
  // Add more stories as needed
];

function SuccessStories() {
  return (
    // <StudentLayout>
    <div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
        <h1 className="text-4xl font-bold mb-4" style={{ fontSize: '36px', color: '#1d4ed8', textAlign: 'center' }}>Success Stories</h1>
        <p className="text-lg mb-8" style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'center' }}>
          Discover the inspiring stories of young women who have transformed their lives through our coding bootcamps and programs.
        </p>

        {stories.map((story, index) => (
          <div key={index} style={{ marginBottom: '40px', backgroundColor: '#ecf0f1', borderRadius: '10px', padding: '20px', display: 'flex', alignItems: 'center' }}>
            <img src={story.image} alt={story.name} style={{ borderRadius: '50%', width: '150px', height: '150px', marginRight: '20px' }} />
            <div>
              <h2 style={{ fontSize: '28px', color: '#1d4ed8', marginBottom: '10px' }}>{story.name}</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>{story.story}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    // </StudentLayout>
  );
}

export default SuccessStories;
