import React from 'react';
import './Footer.css';

function Footer() {
  const columns = [
    {
      title: 'Company',
      id: 1,
      links: [
        { id: 1, label: 'About us', url: '#' },
        { id: 2, label: 'why choose us', url: '#' },
        { id: 3, label: 'pricing', url: '#' },
        { id: 4, label: 'Testimonial', url: '#' },
      ],
    },
    {
      title: 'Resources',
      id: 2,
      links: [
        { id: 1, label: 'Privacy policy', url: '#' },
        { id: 2, label: 'Terms & Conditions', url: '#' },
        { id: 3, label: 'Blog', url: '#' },
        { id: 4, label: 'contact us', url: '#' },
      ],
    },
    {
      title: 'Product',
      id: 3,
      links: [
        { id: 1, label: 'Project managment', url: '#' },
        { id: 1, label: 'Time tracker', url: '#' },
        { id: 2, label: 'Time Schedule', url: '#' },
        { id: 3, label: 'Lead generate', url: '#' },
        { id: 4, label: 'Remote Collaboration', url: '#' },
      ],
    },
  ];
  return (
    <footer className='footer-container'>
      {columns.map((column) => (
        <div key={column.id} className='column'>
          <h3 className='title'>{column.title}</h3>
          <ul>
            {column.links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
}

export default Footer;
