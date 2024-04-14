# AI-Parkinsons-Treatment

## Table of Contents
  - [Introduction](#Introduction)
  - [Technologies](#Technologies)
  - [Illustrations](#Illustrations)
  - [Wins](#Wins)
  - [Challenges & Improvements](#Challenges-&-Improvements)
  - [Set Up](#Set-Up)
  - [Sources](#Sources)

## Project Summary
This application was created as a speech language pathologist working with many patients with Parkinson's Disease to enhancing speech intelligibility in patients. Utilizing standardized treatment methods I wanted to create an application that could be used by both client's and SLP's. There are a lot of application for measuring dB and fluency, but none currently created that provided personalized treatment stimulus based on the client's interests. 

Key Features
- Vocal Exercise Page: Provides vocal exercises to improve voice projection and enhance articulation as well as breath support. Features a countdown timer as a visual aid for each exercise.
- AI-Powered Functional Phrase Generator: Generates 10 personalized phrases designed to improve functional language skills critical in day-to-day conversations.
- AI-Driven Story Generator: The AI-Driven Story Generator provides a unique approach to improving user fluency. Here's a brief overview of its process:
  

## Technologies
- React
- Express
- Node.js
- Cypress
- PostgreSQL

## Illustrations

![AI-Landing](https://github.com/SamanthaMcElhinney/AI-Parkinsons-Treatment/assets/115356592/08aaef1d-ac03-4f3f-bcc6-6d31546ddfc2)

![AI-Phrases](https://github.com/SamanthaMcElhinney/AI-Parkinsons-Treatment/assets/115356592/680d54f2-fab8-47cb-b3a2-a64fb542baa6)

![AI-Story](https://github.com/SamanthaMcElhinney/AI-Parkinsons-Treatment/assets/115356592/9fd36cd9-b6d0-48f8-973e-f214bf06f325)


## Deployed Page


## Wins
- AI Integration: Successfully integrated ChatGPT for a personalized treatment approach, enhancing user engagement and treatment effectiveness.
- Full-Stack Development: This marks my first full-stack application with successful implemention.
- Rapid Development: Accomplished the Minimum Viable Product (MVP) within a 4 day timeline.
- 100% Accessibility Rating via Lighthouse
- Fully responsive for mobile view
![AI-Accessibility](https://github.com/SamanthaMcElhinney/AI-Parkinsons-Treatment/assets/115356592/1e7677b0-4d00-4d02-bb30-635bac4126dd)

![Screenshot 2024-04-14 at 3 17 56 PM](https://github.com/SamanthaMcElhinney/AI-Parkinsons-Treatment/assets/115356592/5ed68497-df1c-4d39-b41c-4a4599a1a839)

## Challenges & Improvements
- Specific challenge I faced was handling a TypeError caused by incorrect data types being passed to the OpenAI API. This issue was resolved by adding checks to ensure that all incoming data to the /v1/completions and /v1/chat/completions endpoints are strings, as expected by the API specifications. This preventative measure helps avoid server crashes and ensures smoother operations. Additionally, to enhance robustness, I introduced more detailed error messages to aid in debugging and improve the ability to understand what went wrong. Moving forward, implementing automated testing for edge cases and integrating more comprehensive logging could significantly improve reliability and ease of maintenance.
- Future improvements:
Progress Visualization: Integrate a graph to visually display treatment progress over time.
User Perspectives: Introduce separate views for clinicians and patients to tailor the user experience based on their specific needs.
User Authentication: Implement a login feature for secure and personalized tracking of treatment progress.

## Set Up 
Front End Site
1. Fork this repository to your GitHub account.
2. Copy SSH key on GitHub inside the code dropdown.
3. Using the terminal, run git clone.
4. cd into the repository.
5. cd into client
6. Open it in your text editor.
7. Run npm install 
8. Run npm run dev
9. Click the hyperlink where the project is running in Vite to launch the application in the web browser
  ➜  Local:  (click link)

Backend Server
1. cd into server.
2. Open in your text editor.
3. run npm start
   
- Hit control + c in your terminal to stop the servers at any time.
- BOTH servers must be running in order to view the app.

Database Story Integration:
To ensure the story generation and storage feature works seamlessly:

Ensure Database Setup: Make sure the PostgreSQL database is correctly set up, particularly the stories table.
Server Endpoints: Ensure the server has appropriate routes and logic to handle the story generation and database storage. (For details, refer to the /chat endpoint in the server setup.)
Stable Connection: Confirm that the connection between the frontend and backend is error-free. If using environment variables for database configurations, ensure they are correctly set up and hidden.
By adhering to these steps, the application provides users with an evolving tool to hone their conversational skills, in line with the treatment objectives for Parkinson's patients.

## Sources
  - [MDN](http://developer.mozilla.org/en-US/)
  - [React Docs](https://reactjs.org/docs/getting-started.html)
  - [GPT OPEN AI](https://platform.openai.com/docs/guides/gpt/chat-completions-api)
  - [Node.js](https://nodejs.org/en/docs)
 
