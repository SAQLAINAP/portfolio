'use client';

import React, { useState } from 'react';
import { 
  Github, Twitter, Linkedin, Instagram, 
  LinkIcon, Code2, BookOpen, Newspaper 
} from 'lucide-react';

const socialLinks = [
  { icon: Github, href: "https://github.com/SAQLAINAP", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/saqlainahmed302", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/saqlain-ahmed-p-sap", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/saqlain_x_ahmed", label: "Instagram" },
  { icon: LinkIcon, href: "https://linktr.ee/sap-302", label: "Linktree" },
  { icon: Code2, href: "https://leetcode.com/u/saqlainahmed302/", label: "LeetCode" },
  { icon: Code2, href: "https://www.codechef.com/users/saqlainahmed30", label: "CodeChef" },
  { icon: BookOpen, href: "https://kaggle.com/saqlainahmedp", label: "Kaggle" },
  { icon: Newspaper, href: "https://medium.com/", label: "Medium" },
];

export default function ModernFooter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailFocus, setEmailFocus] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));

    if (id === 'email') {
      validateEmail(value);
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsEmailValid(re.test(email));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEmailValid) {
      console.log(formData);
      try {
        const response = await fetch('YOUR_GOOGLE_SHEETS_MACRO_URL', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          alert('Message sent successfully!');
        } else {
          alert('Failed to send message.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while sending the message.');
      }
    }
  };

  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col items-center space-y-12">
          {/* Logo */}
          <div className="text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              SAP
            </h2>
            <p className="text-neutral-400 mt-2">Personal Portfolio</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <a 
                key={index} 
                href={href} 
                aria-label={label}
                className="
                  text-neutral-400 
                  hover:text-white 
                  transition-all 
                  duration-300 
                  transform 
                  hover:-translate-y-1 
                  hover:scale-110 
                  hover:text-blue-400
                  inline-block
                "
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit} 
            className="w-full max-w-md space-y-4"
          >
            <div className="relative group">
              <input 
                type="text" 
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                required
                className="
                  w-full 
                  bg-neutral-800 
                  border-2 
                  border-transparent 
                  focus:border-blue-500 
                  text-white 
                  rounded-lg 
                  px-4 
                  py-3 
                  outline-none 
                  transition-all 
                  duration-300
                  hover:shadow-lg
                  hover:shadow-blue-500/20
                "
              />
            </div>

            <div className="relative group">
              <input 
                type="email" 
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                placeholder="Email"
                required
                className={`
                  w-full 
                  bg-neutral-800 
                  border-2 
                  ${!isEmailValid && formData.email ? 'border-red-500' : 'border-transparent'}
                  ${emailFocus ? 'border-blue-500' : 'border-transparent'}
                  text-white 
                  rounded-lg 
                  px-4 
                  py-3 
                  outline-none 
                  transition-all 
                  duration-300
                  hover:shadow-lg
                  hover:shadow-blue-500/20
                `}
              />
              {!isEmailValid && formData.email && (
                <p className="text-red-500 text-sm mt-1">
                  Please enter a valid email address
                </p>
              )}
            </div>

            <div className="relative group">
              <textarea 
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                required
                rows={4}
                className="
                  w-full 
                  bg-neutral-800 
                  border-2 
                  border-transparent 
                  focus:border-blue-500 
                  text-white 
                  rounded-lg 
                  px-4 
                  py-3 
                  outline-none 
                  transition-all 
                  duration-300
                  hover:shadow-lg
                  hover:shadow-blue-500/20
                  resize-none
                "
              />
            </div>

            <button 
              type="submit" 
              className="
                w-full 
                bg-blue-500 
                text-white 
                py-3 
                rounded-lg 
                font-semibold 
                hover:bg-blue-600 
                transition-all 
                duration-300 
                transform 
                hover:scale-105 
                active:scale-95
              "
            >
              Send Message
            </button>
          </form>

          {/* Footer Note */}
          <div className="text-center">
            <p className="text-neutral-400">
              Crafted with{' '}
              <span className="text-red-500">❤️</span>{' '}
              by SAP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
