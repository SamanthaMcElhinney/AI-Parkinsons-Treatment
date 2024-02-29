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
This application was created as a speech language pathologist working with many patients with Parkinson's Disease to enhancing speech intelligibility in patients. Utilizing standardized treatment methods, the application addresses the limitations of existing materials, which are often outdated and non-personalized.

Key Features
- Vocal Exercise Page: Provides vocal exercises to improve voice projection and enhance articulation as well as breath support. Features a countdown timer as a visual aid for each exercise.
- AI-Powered Functional Phrase Generator: Generates 10 personalized phrases designed to improve functional language skills critical in day-to-day conversations.
- AI-Driven Story Generator: The AI-Driven Story Generator provides a unique approach to improving user fluency. Here's a brief overview of its process:
    - Story Generation: Upon a user's input of a topic, the AI crafts a short story related to it.
    - Database Storage: This story is then saved for future interactions, ensuring a continued personalized experience.
    - User Retrieval: In later sessions, users can revisit and practice with their personalized stories.

This application serves as a comprehensive tool for both clinicians and patients, offering a modern and effective approach to treating Parkinson's disease.

## Technologies
- React
- Express
- Node.js
- PostgreSQL

## Illustrations
![Title](https://github.com/SamanthaMcElhinney/AI-Parkinsons-Treatment/assets/115356592/853488ae-e2f8-44ca-b108-712d6a5b28e0)

![phrases](https://github.com/SamanthaMcElhinney/AI-Parkinsons-Treatment/assets/115356592/24363d19-27a2-4a1f-85d1-09fec04a6376)

![Story](https://github.com/SamanthaMcElhinney/AI-Parkinsons-Treatment/assets/115356592/80538943-46ce-4c37-90eb-2c02671f5328)

![Vocal-exercises](https://github.com/SamanthaMcElhinney/AI-Parkinsons-Treatment/assets/115356592/1a955aff-65ed-4a1e-af7f-e94e479e5c2f)

## Deployed Page
See an overview of the application here https://www.loom.com/share/6d58ee0cd8ed4a4988a83188ed8e64d6?sid=5a293123-7a1e-4a51-98b0-fab8239c5a58

## Wins
- AI Integration: Successfully integrated ChatGPT for a personalized treatment approach, enhancing user engagement and treatment effectiveness.
- Full-Stack Development: This marks my first full-stack application
- Rapid Development: Accomplished the Minimum Viable Product (MVP) within an impressive 3-day timeline, proving the project's feasibility and impact.

## Challenges & Improvements
- Adapting to backend data changes and updates posed a technical hurdle
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
 
