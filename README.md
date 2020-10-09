# note-taker

## Description

An application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

* The following HTML routes were created:

  * GET `/notes` - return the `notes.html` file.

  * GET `*` - return the `index.html` file

* The application have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The following API routes were created:

  * GET `/api/notes` - read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - receive a query parameter containing the id of a note to delete. This means each note has a unique `id` when it's saved. 

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## Deploying the App

[Heroku - Note-Taker](https://safe-plains-93574.herokuapp.com/notes)
[Github Repo - Note-Taker](https://github.com/eschiavoni2/note-taker)

- - -

## Gif

![Note-taker Gif](note.gif) 


## Created By:
Erika Zibelnik
