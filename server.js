import express from 'express';
import bcrypt from 'bcrypt';
import passport from 'passport';
import flash from 'express-flash';
import session from 'express-session';
import methodOverride from 'method-override';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { Strategy as LocalStrategy } from 'passport-local';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

async function initializeApp() {
  try {
    // Create MySQL connection
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    console.log('Connected to AWS RDS Database');

    // Middleware Setup
    app.set('view engine', 'ejs');
    app.use(express.urlencoded({ extended: false }));
    app.use(flash());
    app.use(
      session({
        secret: 'secret',
        resave: false,
        saveUninitialized: false,
      })
    );
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(methodOverride('_method'));

    // Passport Configuration
    passport.use(
      new LocalStrategy(async (username, password, done) => {
        try {
          const [rows] = await db.query('SELECT * FROM Person WHERE username = ?', [username]);
          if (rows.length === 0) return done(null, false, { message: 'No user with that username' });

          const user = rows[0];
          const match = await bcrypt.compare(password, user.password);
          return match ? done(null, user) : done(null, false, { message: 'Password incorrect' });
        } catch (err) {
          return done(err);
        }
      })
    );

    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser(async (id, done) => {
      try {
        const [rows] = await db.query('SELECT * FROM Person WHERE id = ?', [id]);
        return done(null, rows[0]);
      } catch (err) {
        return done(err);
      }
    });

    // Routes
    app.get('/', (req, res) => res.render('index.ejs', { user: req.user }));

    app.get('/login', (req, res) => res.render('login.ejs'));

    app.post(
      '/login',
      passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true,
      })
    );

    app.get('/register', (req, res) => res.render('register.ejs'));

    app.post('/register', async (req, res) => {
      try {
        const { first_name, last_name, dob, username, password, email, phone } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.query(
          'INSERT INTO Person (first_name, last_name, dob, username, password, email, phone) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [first_name, last_name, dob, username, hashedPassword, email, phone]
        );
        res.redirect('/login');
      } catch (err) {
        console.error(err);
        res.redirect('/register');
      }
    });

    app.delete('/logout', (req, res) => {
      req.logOut(() => {
        res.redirect('/login');
      });
    });

    // Start the server
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
}

// Initialize the application
initializeApp();
