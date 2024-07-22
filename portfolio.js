document.addEventListener('DOMContentLoaded', function() {
    function showContent(section) {
        let content = '';

        switch (section) {
            case 'profile':
                content = `
                    <h2 style="text-align: center; font-size: 1.2em;"><b>Profile Summary</b></h2>
                    <p style="text-align: center; font-size: 1.1em;"><b>Energetic and versatile Computer Science Engineering (CSE) student with a passion for programming, web development, clous computing, AWS.<br>
                    Dedicated to leveraging technical skills and creative talents to drive innovation and make a positive difference.</b></p>
                `;
                break;
            case 'education':
                content = `
                    <h2 style="text-align: center; font-size: 1.2em;"><b>Education</b></h2>
                    <p style="text-align: center; font-size: 1.1em;"><b>B.Tech/B.E.<br>
                    2022-2026<br>
                    SRM University AP<br>
                    Grade - 7.65/10</b></p><br>
                    <p style="text-align: center; font-size: 1.1em;"><b>Intermediate<br>
                    2020-2022<br>
                    Sri Gayatri Junior Collage<br>
                    Andhra Pradesh, English<br>
                    Grade - 81.3%</b></p><br>
                    <p style="text-align: center; font-size: 1.1em;"><b>10th Grade<br>
                    Siva Shivaani E.M High School<br>
                    Andhra Pradesh, English<br>
                    Grade - 100%</b></p>
                `;
                break;
            case 'contact':
                content = `
                    <h2 style="text-align: center; font-size: 1.2em;"><b>Contact Details</b></h2>
                    <p style="text-align: center; font-size: 1.1em;"><b>PHONE: (+91)9392864389</b></p>
                    <p style="text-align: center; font-size: 1.1em;"><b>EMAIL: mdfaizal_p@srmap.edu.in</b></p>
                    <p style="text-align: center; font-size: 1.1em;"><b>LOCATION: Kadapa, India</b></p><br>
                `;
                break;
            case 'skills':
                content = `
                    <h2 style="text-align: center; font-size: 1.2em;"><b>Key Skills</b></h2>
                    <ul style="text-align: center; font-size: 1.1em; list-style: none; padding: 0;">
                        <li><b>Programming</b></li>
                        <li><b>AWS</b></li>
                        <li><b>Cloud Computing</b></li>
                        <li><b>Communication Skills</b></li>
                        
                    </ul>
                `;
                break;
            case 'workExperience':
                content = `
                    <h2 style="text-align: center; font-size: 1.2em;"><b>Work Experience</b></h2>
                    <p style="text-align: center; font-size: 1.1em;"><b>Front End Developer<br>
                    Edunet Foundation · Internship<br>
                    Jun 2024 - Present · 2 months<br>
                    Remote</b></p><br>
                    
                `;
                break;
            case 'projects':
                content = `
                    <h2 style="text-align: center; font-size: 1.2em;"><b>Projects</b></h2>
                    <p style="text-align: center; font-size: 1.1em;"><b>Atlas: The Collective AI Tools(Web Technology)<br>
                    Developed a comprehensive web application using HTML, CSS, React JS, PHP, and MySQL to provide easy access to top, free AI tools.<br>
                    The purpose of the website is to consolidate various AI tools, such as photo generators, text generators, PPT makers, AI Website builders, Marketing, Audio, Video and photo editors, into a single platform.<br>
                    This project aims to make AI tools more accessible to users, addressing the issue of many AI tools being paid services.<br>
                    The platform allows users to efficiently find and utilize free AI resources in one convenient location.</b></p><br>
                    <p style="text-align: center; font-size: 1.1em;"><b>Wedding Management System(MYSQL)<br>
                    Developed a comprehensive Wedding Management System using MySQL to streamline the planning and management of wedding events.<br>
                    This system allows users to efficiently handle various aspects of wedding planning, including guest lists, venue bookings, vendor coordination, and budget management.<br>
                    By centralizing all necessary information and providing user-friendly interfaces, the system simplifies the complex process of organizing a wedding, ensuring a seamless and stress-free experience for users.<br>
                    The database-driven approach ensures data integrity and facilitates easy retrieval and updating of information, making it a robust solution for wedding planners and individuals alike.</b></p><br>
                    <p style="text-align: center; font-size: 1.1em;"><b>Tic Tac Toe Game<br>
                    Developed a Tic Tac Toe game utilizing principles from Design and Analysis of Algorithms.<br>
                    The project involved implementing efficient algorithms to ensure optimal gameplay and strategy.<br>
                    The game features a user-friendly interface, enabling players to engage in a classic Tic Tac Toe match.<br>
                    By leveraging algorithmic design techniques, the game provides an intelligent opponent, enhancing the challenge and overall user experience.<br>
                    This project demonstrates proficiency in algorithm design, problem-solving, and application development.</b></p><br>
                    <p style="text-align: center; font-size: 1.1em;"><b>Hotel Management System(OOPS with C++)<br>
                    Developed a Hotel Management System using Object-Oriented Programming (OOP) principles in C++.<br>
                    This system streamlines hotel operations by managing room bookings, guest check-ins and check-outs, billing, and staff assignments.<br>
                    The project leverages OOP concepts such as classes, inheritance, and polymorphism to create a modular and maintainable codebase.<br>
                    The system ensures efficient data handling and enhances the overall user experience by providing a comprehensive and easy-to-use interface for hotel management.</b></p><br>
                    <p style="text-align: center; font-size: 1.1em;"><b>Hangman Game(Data Structures)<br>
                    Developed a Hangman game using Data Structures to enhance skills in data structure implementation and algorithm design.<br>
                    The project features a user-friendly interface where players can guess letters to complete words within a limited number of attempts.<br>
                    By utilizing data structures such as arrays and linked lists, the game efficiently manages word storage, user input validation, and game progress tracking.<br>
                    This project demonstrates proficiency in data structure manipulation, algorithmic problem-solving, and interactive application development.</b></p>
                `;
                break;
            case 'certifications':
                content = `
                    <h2 style="text-align: center; font-size: 1.2em;"><b>Certifications</b></h2>
                    <p style="text-align: center; font-size: 1.2em;">Career Essentials in Generative AI by Microsoft and LinkedIn<br><br>
                    Edunet - Front End Development<br><br>
                    E-Business NPTEL Online Cretification<br><br>
                    Online Communication in the Digital Age - NPTEL Online Cretification<br><br>
                    The Joy Of Computing Using Python - NPTEL Online Cretification<br><br>
                    Responsive Web Development with HTML5, CSS3, JavaScript<br><br>
                    Introduction to UI Design <br><br>
                    Employability Skills Program - Advanced By Wadhwani Foundation</p>
                `;
                break;
            
            
        }

        // Display the content in the 'content' div
        document.getElementById('content').innerHTML = content;
    }

    window.showContent = showContent;
});
