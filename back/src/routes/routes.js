const { Router } = require('express');
const passport = require('passport');

const router = Router();

// importação das controllers
const AuthController = require('../controllers/authController');
const NotesController = require('../controllers/NotesController');
const UserController = require('../controllers/UserController');

// Autenticação
router.use('/private', passport.authenticate('jwt', { session: false }));
router.post('/login', AuthController.login);
router.get('/private/getDetails', AuthController.getDetails);

// Entidade User
router.post('/user', UserController.create);
router.get('/user', UserController.index);
router.get('/private/user/:id', UserController.destroy);
router.get('/private/user/:id', UserController.show);
router.put('/private/user/:id', UserController.update);

// Entidade Notes
router.post('/notes', NotesController.create);
router.get('/notes', NotesController.index);
router.get('/private/notes/userNotes', NotesController.UserNotes);
router.get('/private/notes/delete/:id', NotesController.destroy);
router.get('/private/notes/show/:id', NotesController.show);
router.put('/private/notes/:id', NotesController.update);


module.exports = router;
