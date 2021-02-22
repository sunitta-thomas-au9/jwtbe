const express = require('express');
const router = express.Router();
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const google =require('../config').google;

//start passpot
router.use(passport.initialize());
router.use(passport.session());
passport.serializeUser((user,cb) => {
    cb(null,user)
})

passport.use(new GoogleStrategy({
    clientID: google.GOOGLE_CLIENT_ID,
    clientSecret: google.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:9801/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
       console.log(profile)
       userProfile = profile
       return done(null,userProfile);
    
    
    //    User.findOrCreate({ googleId: profile.id }, function (err, user) {
           
    //      return done(err, user);
    //    });
  }
));


const toGoogle = () => {
    console.log("google")
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
}

// when done with google it comes to this 
const fromGoogle = () => {
  passport.authenticate('google', { failureRedirect: '/err' }),
  function(req, res) {
    res.redirect('/');
    // res.redirect('/'); for react
  }
}

module.exports = { toGoogle,fromGoogle }