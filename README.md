# Online Bus Ticket Booking System (Prototype)

This is a small React prototype and it is meant to show how a bus ticket system could work before connecting it to a real backend. Everything here runs in the browser and uses `localStorage` to save data, so nothing is permanent and nothing is secured. It’s just for learning

## What it does

* It has two types of users:

  * **Passenger**: can view available tickets
  * **Agency**: can create and delete tickets
* Simple login screen where you choose a role or continue as a guest
* All data is stored in `localStorage`
* No backend and no routing library

## How the “pages” work without changing the URL

This app doesn’t actually move between real pages, theres only one browser URL everytime

when the app loads, React checks `localStorage`

* If there’s no user, it shows the login screen
* If the user is a passenger, it shows the passenger view
* If the user is an agency, it shows the agency view

Refreshing the page still shows the correct screen because the user info and the tickets are stored in `localStorage`, so the app can rebuild the state every time it loads

##

## Features

### Login

Pick a role (passenger or agency) and continue as guest. The selected role is saved in `localStorage`.

### Passenger view

Shows a simple list of tickets that the agency created.

### Agency view

Can:

* Add tickets with fields (from, to, time)
* Delete tickets
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
  components/
    ticketform.jsx
    ticketlist.jsx
```

## Running the project

1. Install dependencies first by running
   `npm install`

2. Start the app with
   `npm run dev`

3. Open your browser and test the flow

## Notes

* This app is not meant to be production ready it is just a prototype
* There is no security measures
* There is no backend or API
