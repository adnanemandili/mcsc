"use client";
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useState } from 'react';

const FAQ = () => {
    const [faqData, setFaqData] = useState([
        { question: 'What is the Cyber Security Camp Morocco?', answer: 'It is the oldest largest open cyber security event in Morocco. This year we are celebrating the beginning of a new era with the 11th edition.', isOpen: false },
        { question: 'Who can participate in the event?', answer: 'We welcome attendees from diverse backgrounds, including students, professionals, educators, and anyone interested in cybersecurity. However, as the Cyber Security Camp hosts a CTF competition, your team and you can participate only if you successfully passed the qualification phase before.', isOpen: false },
        { question: 'How can I register for the Cybersecurity Camp?', answer: 'Get you ticket now by completing the registration above.', isOpen: false },
        { question: 'Do I need prior cybersecurity knowledge to attend?', answer: "Absolutely not! While prior cybersecurity knowledge is certainly beneficial, it's not a requirement. What's most important is your enthusiasm for the field and your eagerness to learn. So, if you're keen to dive into cybersecurity and establish valuable connections, you're more than welcome to join us!", isOpen: false },
        { question: 'Are there any registration fees for the event?', answer: 'For a standard visitor you will not be asked to pay any fee. But if you want to receive any of the goodies we are offering exclusively to our competition participants, our speakers and our guests of honour, make sure you reach out to us by messaging us directly via our instagram account or our email.', isOpen: false },
        { question: 'Will there be hands-on activities or workshops?', answer: 'Yes, there will be numerous workshops covering a wide range of topics within the cybersecurity field.', isOpen: false },
        { question: 'Who are the instructors or speakers at the Cybersecurity Camp?', answer: 'The Cybersecurity Camp features a diverse lineup of instructors and speakers, including industry experts, cybersecurity professionals, academics, and thought leaders. Our goal is to provide participants with valuable insights, practical knowledge, and the latest trends in cybersecurity.', isOpen: false },
        { question: "How can I stay updated about the Cyber Security Camp Morocco's announcements?", answer: 'You can stay updated about the event, announcements, and registration deadlines by consulting the official website and following social media channels listed at the bottom of the website.', isOpen: false },
        { question: 'How can I contact the organizers for further inquiries?', answer: 'For further inquiries or assistance, you can contact the organizers through the contact information provided on the official website.', isOpen: false },
        { question: 'How can I get involved as a sponsor or partner for the event?', answer: "To become a sponsor or partner for the event, simply reach out to our sponsorship team through the contact details available on our website. We're eager to discuss partnership opportunities and the benefits of collaborating with us.", isOpen: false },
    ]);
    
    const toggleAnswer = (index:any) => {
        console.log('index', index);
        faqData[index].isOpen = !faqData[index].isOpen;
        console.log('updatedFaqData', faqData);
        setFaqData([...faqData]);
    };
    return (
        <div className='w-full px-4 py-10 md:px-8 md:py-20'>
        {/* Frequently Asked questions */}
        <div className='flex flex-col items-center pb-10 md:pb-20'>
            <h1 className='text-3xl md:text-4xl font-semibold text-center mb-4'>
                <code>Frequently Asked Questions</code>
            </h1>
        </div>
        <div className='flex flex-col items-start md:px-20 mx-auto'>
            {faqData.map((faq, index) => (
                <motion.div
                    key={index}
                    className="card-container"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{
                        y: 0,
                        opacity: 100,
                        transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 1
                        }
                    }}
                    viewport={{ once: true, amount: 1 }}
                >
                    <div>
                        <div className='flex flex-row justify-between py-2 md:py-4'>
                            <div onClick={() => toggleAnswer(index)}>
                                {faq.isOpen ? (
                                    <ChevronDownIcon className='w-5 h-5 md:w-6 md:h-6 hover:cursor-pointer' />
                                ) : (
                                    <ChevronRightIcon className='w-5 h-5 md:w-6 md:h-6 transform transition-transform duration-300 ease-in-out hover:cursor-pointer' style={{ transform: faq.isOpen ? 'rotate(90deg)' : 'rotate(0)' }} />
                                )}
                            </div>
                            <div className='justify-between px-4 md:px-8 min-w-full md:min-w-2/3'>
                                <p className='text-base md:text-xl font-regular'>
                                    <code>{faq.question}</code>
                                </p>
                                <p className='text-xs md:text-sm break-normal pt-2 md:pt-6 pr-2'>
                                    {faq.isOpen && (
                                        <code>{faq.answer}</code>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
    );
}
export default FAQ;