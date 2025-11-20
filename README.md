# Online Bus Ticket Booking System (Prototype)

This is a small React prototype and it is meant to show how a bus ticket system could work before connecting it to a real backend. Everything here runs in the browser and uses `localStorage` to save data, so nothing is permanent and nothing is secured. It’s just for learning

## What it does

* It has two types of users:

  * **Passenger**: can view available tickets (plus a simulation of purchasing them)
  * **Agency**: can create and delete tickets (plus view bookings)
* Simple login screen where you choose a role and continue as a guest
* All data is stored in `localStorage`

## Features

### Login

Pick a role (passenger or agency) and continue as guest. The selected role is saved in `localStorage`.

### Passenger view

Shows a simple list of tickets that the agency created. and a passenger can edi their username and view their purchased tickets

### Agency view

Can:

* Add tickets with fields (from, to, time)
* Delete tickets
* See th bookings
* and all changes are stored in `localStorage`

## The File structure

```
src/
  main.jsx
  app.jsx
  auth.jsx
  store.jsx
  main.css
  pages/
    login.jsx
    passenger.jsx
    agency.jsx
    profile.jsx
  components/
    ticketform.jsx
    ticketlist.jsx
    wrapper.jsx
  styles/
    main.css
```

## Running the project

1. Install dependencies first by running
   `npm install`

2. Start the app with
   `npm run dev`

3. Open your browser and test the system

## Notes

* This app is not meant to be production ready it is just a prototype
* There is no security measures at the moment
* There is no backend or API at the moment
