# CampusFind — INFR3120 Project Part 1

CampusFind is a first-release prototype of a campus lost-and-found reporting board.

## Features
- Landing page with an original team logo and a clear **Post an Item** button.
- A form to create a Lost or Found report, with server-side validation.
- A table listing reports on the homepage.
- Responsive layout for mobile and desktop.

## Run locally
1. Install Node.js.
2. Open this folder in VS Code Terminal.
3. Run `npm install`.
4. Run `npm start`.
5. Visit `http://localhost:3000`.

## File structure
- `app.js`: Express configuration and static files.
- `routes/board.js`: Home route, new-report form, form submission and temporary records.
- `views/`: EJS templates, shared header and footer.
- `public/stylesheets/style.css`: Website styling.
- `public/images/logo.svg`: Original logo drawn for this project.
- `docs/Project_Part1_Description_and_Contributions.docx`: Project idea and responsibilities.

## Current limitations
This is an initial release, not the final application. Records are stored **in memory** and disappear when the server restarts or Render redeploys. There are no user accounts, file uploads, or permanent database yet. Avoid entering private contact information.

## Deploy to Render
Create a new **Web Service** connected to the public group repository. Use:
- Runtime: Node
- Build: `npm install`
- Start: `npm start`
- Root directory: repository root (if `package.json` is there)

The server uses `process.env.PORT`, which Render provides.

## Group contribution log (complete with actual work)
Update the Word document with real member names, assigned tasks and what each person actually committed. Each member must push work from their **own** GitHub account. Do not claim a contribution or test you did not perform.

## Code sources and attribution
Starter implementation and documentation drafted with OpenAI ChatGPT assistance, November 2026. The group must review, understand, adapt, and document all code according to the assignment's external-code policy (maximum 10% external code, lecture code exempt). Express and EJS API documentation: https://expressjs.com/ and https://ejs.co/ . No downloaded logos or third-party image assets are used.

## Before submission
- [ ] Confirm idea differs from the class project and get group agreement.
- [ ] Customize the code using course materials and verify external-code compliance.
- [ ] Fill in real names/contributions in the Word document.
- [ ] Create public repository named **INFR3120 Fall26 Project** and invite collaborators.
- [ ] Ensure every member has individual commits.
- [ ] Verify deployed Render URL and all form/table functionality.
- [ ] Record a group demo (up to 30 minutes); each member explains their work.
- [ ] Submit ZIP, public GitHub URL, video URL and individual peer evaluation.
