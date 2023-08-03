"use client"
import Image from 'next/image';
import { useState } from 'react';
import { aboutMeData } from '../lib/aboutMeData';

function About() {
    const [aboutMe, setAboutMe] = useState(aboutMeData);
    return (
        <>
            <h1 id="about" className="text-center font-bold text-4xl mb-10">
                About Me
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className="h-full container block sm:flex gap-10 mb-20">
                <div className="w-full sm:w-1/6 mb-7 sm:mb-0">
                    <Image
                        src="/logo.png"
                        width={500}
                        height={500}
                        className="rounded-lg"
                        alt="Profile Image"
                    />
                </div>

                <div className="w-full sm:w-3/4 text-center">
                    {aboutMe.map((bio) => (
                        <p
                            className="mb-4 text-ternary-dark dark:text-ternary-light text-xl"
                            key={bio.id}
                        >
                            {bio.bio}
                        </p>
                    ))}
                </div>
            </div>
        </>
    );
}

export default About;