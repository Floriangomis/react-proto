# react-proto

To launch the project git clone the project, then Use Yarn or Npm to install all dependencies.

After that simply launch :

`npm run start` in order to launch the app.

### Data to display

In order to get data to display you should run this appart form this project :
https://github.com/Stepsize/take-home-exercise

Due to CORS limitation and because I am running this React app on a different Port,
I needed to add this rule on my Nodejs expres server.

`app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});`

You can add this in the server.js file in order to let your server accept request from other domain.
