# YOLO challenge

## Intro

Challenge proposed by YOLO in an assessment for a Front-end developer that consists in developing a front-end application from an example png file with instructions contained in [README of the proposed challenge](https://github.com/coingaming/front-end-test-assignment)

First of all, I would like to thank you for the opportunity to be able to take the test and have the chance to join YOLO.

## Used Libs

I've created this project using React (^18.2.0) with Typescript 

To build the project I used [Vite](https://vitejs.dev) as boilerplate

I used those libs:
- apollo-client ("^3.6.9")
- styled-components ("^5.3.5")
- sweetalert2: ("^11.4.28")
  
## Getting Started

To run this project on your device is very simple.
- Clone this repository in your device
- Instal the dependencies `npm install` or `yarn`
- Run the project with `npm run dev` or `yarn dev`


## Design System

In this Project, I used Atomic Design as a Design System

## Functionalities

**Coin Suggestions**
You can search coins just by typing on the input field

**Persistent List**
The list of tracked const is stored at local storage. If you close the tab the values will persist

**Shared State**
I used Contex API to handle the state of the application and avoid prop Drilling

**Avoid duplicated coins**
To avoid duplicated coins in the list, I used a simple strategy transforming the array into a Set
