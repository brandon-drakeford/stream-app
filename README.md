# Streaming App

Simple streaming app that will allow users to create a stream channel and connect an Open Broadcast Software (OBS) to initalize a stream. This app was built using ReactJS and Node.js.

## Components

This app uses third-party libraries to allow video streaming and data storage:

- [Axios - API Requests](https://www.npmjs.com/package/axios)
- [JSON Server - Fake REST API](https://www.npmjs.com/package/json-server)
- [Node Media Server - RTMP Server](https://www.npmjs.com/package/node-media-server)
- [Redux - State Management](https://www.npmjs.com/package/redux)
- [Redux Form - Form mockup that works with Redux](https://www.npmjs.com/package/redux-form)

## How It Works
In order for the application to start successfully, **JSON and Node Media Server** needs to run.

#### Start Application
1. Clone `Stream-App` project
2. Open up command line
3. Navigate to `Stream-App/client` directory
4. Run `npm install` to make sure local version is up to date
5. Run `npm start` to launch application

#### Start JSON Server
1. Open up a new command line
2. Navigate to `Stream-App/client/api` directory
3. Make sure **db.json** is present in the directory. If not, you can create an empty file.
4. Run `npm start`

#### Start Node Media Server
1. Open up a new command line
2. Navigate to `Stream-App/client/rtmpserver` directory
3. Run `npm start`

## How To Stream Video To Your Channel
To stream video, you can use download [OBS](https://obsproject.com/) and update your **Stream** settings to the following:

- Server - rtmp://localhost/live 
- Stream Key - Unique ID of stream. Can be found in **db.json** file or when viewing stream channel.
 
![image](https://user-images.githubusercontent.com/53025418/110540324-5ddbe600-80f4-11eb-90fb-c620d577b2ad.png)
