# Blade Quest Playtest Version

## Introduction

Welcome to the Blade Quest Playtest Version! This document will guide you through the process of setting up and playing the game, as well as provide information on the game controls and development workflow.

## How to Set Up the Game

### 1. Install Node.js and npm

Ensure you have Node.js and npm installed on your computer. You can download and install them from [nodejs.org](https://nodejs.org/).

### 2. Download the Playtest Version

Download the playtest version from the provided link and unzip the files.

### 3. Navigate to the Project Directory

Open a terminal and navigate to the project directory:
```sh
cd path/to/unzipped/directory
```

### 4. Install Dependencies

Install the project dependencies using npm:
```sh
npm install
```

### 5. Run the Game

Start the development server to run the game:
```sh
npm run dev
```
Open your web browser and navigate to `http://localhost:3000` to play the game.

## Game Controls

- **W**: Move forward
- **A**: Move left
- **S**: Move backward
- **D**: Move right
- **Mouse**: Look around
- **Left Click**: Attack with equipped weapon
- **E**: Interact with objects
- **Space**: Jump
- **Shift**: Sprint
- **Esc**: Pause the game

## Troubleshooting

If you encounter any issues or have any questions, feel free to reach out for assistance. Here are some common troubleshooting steps:

- **Game not starting**: Ensure you have installed all dependencies by running `npm install`.
- **Controls not working**: Make sure the game window is in focus and you have clicked inside the window to capture mouse and keyboard input.
- **Audio issues**: Check your computer's audio settings and ensure that the volume is turned up.

## Development Workflow

### 1. Make Changes to Your Code

Make changes to your code in the `src` directory. Ensure that your code follows the DRY (Don't Repeat Yourself) principle and is well-organized.

### 2. Test Changes Locally

Run the development server to test your changes locally:
```sh
npm run dev
```
Open your web browser and navigate to `http://localhost:3000` to test the game.

### 3. Build the Project

Once you are satisfied with your changes, build the project:
```sh
npm run build
```

### 4. Update the Playtest Version

Copy the built files to the playtest folder:
```sh
npm run update-playtest
```

### 5. Deploy the Playtest Version

Navigate to the playtest folder and push the changes to the remote repository:
```sh
npm run deploy-playtest
```

This script will build the project, copy the built files to the playtest folder, and push the changes to the remote repository.

### 6. Verify the Playtest Version

Ensure that the playtest version is working correctly by running the development server in the playtest folder:
```sh
cd /home/nikh/Blade_Quest/playtest
npm run dev
```
Open your web browser and navigate to `http://localhost:3000` to verify the playtest version.

Thank you for playtesting Blade Quest! Your feedback is valuable and will help improve the game.
