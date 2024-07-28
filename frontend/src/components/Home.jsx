
import React from 'react';

function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <header style={{ backgroundColor: '#1d4ed8', color: '#ecf0f1', padding: '20px', textAlign: 'center', borderRadius: '10px' }}>
        <h1 style={{ fontSize: '36px' }}>Joining The Dots Foundation</h1>
        <h2 style={{ fontSize: '24px' }}>Every child must become the best version of themselves.</h2>
      </header>
      
      <section style={{ marginTop: '40px', padding: '20px', backgroundColor: '#ecf0f1', borderRadius: '10px' }}>
        <h3 style={{ fontSize: '28px', color: '#1d4ed8' }}>Who We Are</h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          <strong>Joining The Dots Foundation</strong> is an NGO based out of Bangalore, committed to improving the lives of underprivileged children through education, healthcare, and environmental initiatives. We believe that every child deserves the opportunity to reach their full potential.
        </p>
      </section>

      <section style={{ marginTop: '40px', padding: '20px', backgroundColor: '#ecf0f1', borderRadius: '10px' }}>
        <h3 style={{ fontSize: '28px', color: '#1d4ed8' }}>Our Mission</h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          Our mission is to empower children by providing them with the necessary resources and support to excel in their education and overall well-being. We strive to create a nurturing environment where every child can thrive and become the best version of themselves.
        </p>
      </section>

      <section style={{ marginTop: '40px', padding: '20px', backgroundColor: '#ecf0f1', borderRadius: '10px' }}>
        <h3 style={{ fontSize: '28px', color: '#1d4ed8' }}>Areas of Operation</h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          We primarily operate in Andhra Pradesh, with a focus on the Chittoor District. Our dedicated team works closely with over 100 government schools and 20 government degree colleges to deliver impactful educational programs.
        </p>
      </section>

      <section style={{ marginTop: '40px', padding: '20px', backgroundColor: '#ecf0f1', borderRadius: '10px' }}>
        <h3 style={{ fontSize: '28px', color: '#1d4ed8' }}>Our Focus Areas</h3>
        <ul style={{ fontSize: '18px', lineHeight: '1.6' }}>
          <li><strong>Education:</strong> Providing quality education to children in underprivileged areas.</li>
          <li><strong>Healthcare:</strong> Ensuring access to essential healthcare services and promoting healthy lifestyles.</li>
          <li><strong>Environment:</strong> Promoting environmental sustainability and awareness through various initiatives.</li>
        </ul>
      </section>

      <section style={{ marginTop: '40px', padding: '20px', backgroundColor: '#ecf0f1', borderRadius: '10px' }}>
        <h3 style={{ fontSize: '28px', color: '#1d4ed8' }}>Facts About Us</h3>
        <ul style={{ fontSize: '18px', lineHeight: '1.6' }}>
          <li>India graduates 1.5 million engineers and 8.5 million regular graduates annually.</li>
          <li>Universities have grown from 320 in 2014 to 1,113 in 2023.</li>
          <li>Colleges have increased from 38,498 in 2014 to 43,796 in 2023.</li>
          <li>Only 1 in 4 MBAs, 1 in 5 engineers, and 1 in 10 graduates are employable.</li>
        </ul>
      </section>

      <section style={{ marginTop: '40px', padding: '20px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '28px', color: '#1d4ed8' }}>Join Us</h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          Together, we can make a difference in the lives of many children. Join us in our mission to create a brighter future for the next generation.
        </p>
      </section>
    </div>
  );
}

export default Home;
