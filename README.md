# Time Guesser

## Table of Contents

- [Live demo](#Live-demo)
- [Description](#Description)
- [Features](#Features)
  - [API request](#API-request)
  - [Timeline features](#Timeline-features)
  - [Upcoming features](#Upcoming-features)
  - [Known Bugs](#Known-Bugs)
- [Functionality](#Functionality)
- [Installation](#Installation)
  - [Before you clone](#Before-you-clone)
  - [Install the app](#Install-the-app)
  - [Usage](#Usage)
  
## Live demo

[You can find the demo here]. (insert link)

## Description

During this course I created a frontend app with React. The data I use comes from the NMVW Collection API. The user has the ability to play a game where they have to guess from which time the object comes from. The item page shows an object with a title and picture along with a timeline aswell, where they can place a marker. The closer the user is to the correct time, the more points they get.

## Features

### API request

The app starts with an API request to the NMVW collection API. It searches for 3 things using a endpoint and a SparQL query.
```
?title
?date
?imgUrl
```

### Timeline features

- [x] Searches for a random collection.
- [x] Able to select a timestamp.
- [x] Earn points if your close to the correct answer.


### Known Bugs

- If the year is close to 2000 it automatically sets the offset to 2019.

### Upcoming features

- [ ] Able to search a specific country's collection.

---

## Installation

### Before you clone

- [x] Install Node.js
- [x] Install a Code Editor
- [x] A CLI

### Install the app
```
git clone https://github.com/kylebot0/frontend-applications.git
```
Get into the right folder
```
cd client
```
Install npm packages
```
npm install
```
Run the application
```
npm run start
```
If you wanna build the app use
```
npm run build
```

### Usage

Start the application
```
npm run start
```

## License
Find the license [here](https://github.com/kylebot0/frontend-applications/blob/master/LICENSE)


---
