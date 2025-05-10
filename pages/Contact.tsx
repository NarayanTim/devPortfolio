"use client";
import { CopyCheckIcon } from 'lucide-react';
import React, { useState } from 'react'
import MainHTMButton from '@/components/html/MagicButton';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "narayan.timsina65@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In<span className='text-textLink'>&nbsp;Touch</span></h2>
        <p className='text-secondary'>
          I&apos;m actively seeking opportunities to contribute to meaningful projects, whether it&apos;s a full-time role or freelance work. If you&apos;re looking for someone with experience in game development, backend systems, or full-stack web development, I&apos;d love to connect and discuss how I can add value to your team or project.
        </p>

        <div className="mt-5 relative flex items-center justify-center">
          <MainHTMButton
            title={copied ? "Email is Copied!" : "Copy my email address"}
            icon={<CopyCheckIcon />}
            position="left"
            handleClick={handleCopy}
            otherClasses="!bg-[#161A31]"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;