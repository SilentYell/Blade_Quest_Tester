# Blade Quest Playtest Version

## Introduction

Welcome to the Blade Quest Playtest Version! This document will guide you through the process of setting up and running the game. Follow the steps below to get started.

## How to Set Up and Run the Game

### 1. Prerequisites

Make sure you have Node.js installed on your computer. You can get it by visiting nodejs.org and following the instructions there to download and install it. To check if **Node.js** is ready, open a terminal (on **Windows**, search for **"Command Prompt"** or **"cmd"**; on **Mac**, search for **"Terminal"**) and type:

```bash
node -v
```

Then press Enter. If you see a version number (like v16.13.0), Node.js is installed and ready.

### 2. Steps to Run the Game

1. #### Download the Repository
If you haven’t yet, download the playtest folder from GitHub. It will be called Blade_Quest_Tester-master. Save it somewhere you can find it, like your Desktop or Downloads folder.

2. #### Navigate to the Playtest Folder
Open your terminal or Command Prompt. Type this command to go to the folder (replace "path/to" with where you saved it, like "Desktop"):

```bash
cd path/to/Blade_Quest_Tester-master
```

Press Enter to run the command.
If this does not work then try finding the root folder for the test and right-clicking it and then clicking **"Copy as path"**. Go back to your terminal and try pasting that path with **ctrl+v** on Windows or **cmd+v** on Mac after the **cd** part.

3. #### Install Dependencies
In the same terminal window, type:

```bash
npm install
```

Press Enter. This will download some files the game needs. Wait until it finishes.

4. #### Start the Game Server
Now type:

```bash
npm start
```

Press Enter. This starts the game server. You’ll see some text in the terminal—don’t close it yet!

5. #### Open the Game in Your Browser
Open your web browser (like Chrome, Firefox, or Edge). In the address bar at the top, type:
<http://localhost:3000>
Press Enter. The game should load in your browser.

6. #### Stopping the Server When You’re Done
When you’re finished playing and want to stop the game server, go back to the terminal window where you typed "npm start". Hold down the "Ctrl" key on your keyboard and press the "C" key at the same time (this is called "Ctrl+C"). This tells the server to stop. You’ll see the terminal prompt return, and you can close the window if you want.

## Troubleshooting

- Error: npm or node not found
Ensure Node.js is installed and added to your system's PATH.

- Port 3000 is already in use
If you see this error, something else on your computer is using port 3000. You can stop that program, or ask someone to help you change the port in the server.js file.

- Game not loading properly
Ensure all files (e.g., index.html, assets/, server.js, package.json) are present in the folder.

## Additional Information

- This playtest version is built using Three.js and Vite.
- If you encounter any issues, feel free to contact the developer.
- Enjoy the game!