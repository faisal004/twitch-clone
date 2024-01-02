


https://github.com/faisal004/twitch-clone/assets/88244542/0b38b3f6-7482-43ac-9eb4-e40858838449


# LiveHUB

Live streaming platform like twitch.

## Key Features

- User can stream by connecting their OBS to our app
- Live viewers count
- Real-time chat is implemented using LiveKit
- Follower and Following also available
- Blocking and Unblocking system also available
- Slow chat mode
- Followers only chat
- Enable or Disable chat
- Search functionality also available
- Updating user using Clerk WEBHOOKS


## Installation

Clone the project on your machine

```bash
  git clonehttps://github.com/faisal004/twitch-clone.git
```
Open Project
```bash
cd twitch-clone
```
Install dependencies
```bash
yarn install
```

Set up .env file
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
CLERK_WEBHOOK_SECRET=



DATABASE_URL="Your DB URL"


//Go to livekit
LIVEKIT_API_URL=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_WS_URL=


// Go to Uploading thing and get credentials
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```

## Setup Database
You can go to [neon.tech](https://neon.tech) to get a free postgres instance.Now run
```bash
npx prisma generate
npx prisma db push

```
Start app
```bash
yarn dev
```

## Future Improvements

- Migrate auth from clerk to NextAuth

## Feedback 

Feel free to provide Feedback at 
faisalhusain1320@gmail.com
