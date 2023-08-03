/* eslint-disable react/no-unescaped-entities */
import React from "react"

const experiences = [
    { skill: "Web3.0 Developer" },
    { skill: "Metaverse Developer" },
    { skill: "Blockchain Developer" },
    { skill: "MetaVerse Developer" },
    { skill: "Web2.0 Developer" },
    { skill: "AI Developer" },
    { skill: "IOT Developer" },
    { skill: "AWS Developer" },
    { skill: "Rest Api Developer" },
    { skill: "Graphql Api Developer" },
    { skill: "Server Less Api Developer" },
    { skill: "Web Developer" },
    { skill: "App Developer" },
    { skill: "Game Developer" }
]

const AboutSection = () => {
    return (
        <>
            <h1 id="skills" className="text-center font-bold text-4xl mb-10">
                My Skills
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className="mb-20 flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                <div className="text-center md:w-1/2 md:text-center">
                    <h1 className="text-2xl font-bold mb-6">Skills</h1>
                    <p className="text-gray-700 text-xl sm:text-2xl max-w-3xl m-auto">
                        I've learned a lot in my life, including many frameworks, libraries, and languages.
                        I'm always eager to learn more, so if you want to know my skills/experiences (😊 see below 🥰).
                    </p>
                </div>
                <div className="text-center md:w-1/2 md:text-center">
                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                        {experiences.map((item, idx) => {
                            return (
                                <p
                                    key={idx}
                                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                >
                                    {item.skill}
                                </p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection