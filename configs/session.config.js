// require session

 // use session
module.exports = (app) => {
 
  app.use(
    session({
      // in the network tab, we will be able to see the cookie - this secret is getting hashed inside that cookie
      secret: process.env.SESS_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 60000, // 60 * 1000 ms === 1 min
      },
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        // ttl => time to live
        ttl: 60 * 60 * 24, // 60sec * 60min * 24h => 1 day
      }),
    })
  );
};
 