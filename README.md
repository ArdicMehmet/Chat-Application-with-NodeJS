# Chat Application with Node.js

A small real-time chat app built with Node.js, Express and Socket.IO. A message sent by one user is shown to everyone who has the page open.

## How it works

The Express server serves the static files in `public/` and opens a Socket.IO connection. When a client sends a `chat` event with a name and a message, the server broadcasts it to all connected clients, and each page adds it to the message list.

## Run it locally

```
npm install
node server.js
```

Then open http://localhost:8080 in two browser tabs and send a message from one of them.

## Notes

- Messages are not stored anywhere, so they disappear when the page is refreshed.
- There is no login. The name is just a text field.
- The client connects to `http://localhost:8080` directly, so that address has to be changed before it can run anywhere else.
- Messages are inserted into the page as raw HTML. Fine for a local exercise, but the input would need escaping before anything public.
