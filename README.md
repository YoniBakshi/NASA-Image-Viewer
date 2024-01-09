

README :
NASA Image Viewer
Welcome to the NASA Image Viewer project! This Single Page Application (SPA) allows users to explore daily images from NASA's Astronomy Picture of the Day, along with user comments, in a social media-style interface. The project is built using Asynchronous JavaScript and utilizes both the NASA API for fetching images and a custom Node.js Express REST API for storing user comments.

Getting Started
Clone the repository to your local machine.
Open the project in Webstorm and create a new Express project with "none" selected for the view engine.
Install the required dependencies using npm install.
Start the server with npm start.
Open your web browser and navigate to http://localhost:3000.
Features
User Authentication: Users must enter a 24-character username (composed of [a-z]/numbers) before accessing the site. The username serves as an identifier for saving and displaying user comments.

Image Browsing: Users can navigate through NASA's daily images, displaying relevant information such as date, title, and explanations.

Commenting System: Users can add comments limited to 128 characters for each image. Additionally, users can delete their own comments.

Date Selection: The interface provides a date picker for users to choose a specific date, and the site displays images up to that date.

Pagination: Users can easily access more images either through infinite scrolling or by clicking a "more" button at the end of the page.

Real-time Comment Updates: Comments are updated every 15 seconds through polling, ensuring users see the latest comments from others.

Responsive Design: The interface is designed to be clear and user-friendly, using Bootstrap for styling and ensuring a pleasant user experience on various devices.

Server-Side Comment Management
The Express REST API handles comment management, allowing users to add, retrieve, and delete comments.

Contributors :
Yehonatan Bakshi

Hila Saadon
