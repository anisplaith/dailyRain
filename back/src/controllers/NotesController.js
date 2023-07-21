const Notes = require('../models/Notes');
const User = require('../models/User');
const Auth = require('../config/auth')

// API UNSPLASH ----------
const { createApi } = require('unsplash-js');
const fetch = require('node-fetch'); // atenção: só funciona com versões < ou == 2

global.fetch = fetch;
const unsplash = createApi({ accessKey: '92fcO3PjFcLYbe0JRl5K2NPfe1yGpO61QSIFltSlHlk' })

var photoURL;

// criar uma anotação
const create = async (req, res) => {
    try {
        let numberRandom = Math.floor(Math.random() * 10) // int aleatório de 0 até 10

        // usa a api do unsplash para pegar uma foto com tema chuva
        await unsplash.search.getPhotos({
            query: 'rain', // keyword
            page: numberRandom, // qual página
            perPage: numberRandom // quantas imagens por página
        })
            .then(res => {
                photoURL = res.response?.results[0].urls.thumb // thumb = w 80 x h 200
                console.log(JSON.stringify(photoURL))
            });
        const newNote = {
            id: Date.now(),
            title: req.body.title,
            content: req.body.content,
            cover: photoURL,
            UserId: req.body.UserId
        };
        const note = await Notes.create(newNote);

        return res.status(201).json({ message: 'Anotação criada!', note });

    } catch (err) {
        res.status(500).json({ error: err });
    }
};

// modifica uma anotação 
const update = async (req, res) => {
    const { id } = req.params;
    try {
        const [updated] = await Notes.update(req.body, { where: { id: id } });
        if (updated) {
            const notes = await Notes.findByPk(id);
            return res.status(200).send(notes);
        }
        throw new Error();
    } catch (err) {
        res.status(500).json({ err });
    }
};

// deleta um usuário
const destroy = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await Notes.destroy({ where: { id: id } });
        if (deleted) {
            return res.status(200).json('Anotação deletada!');
        }
        throw new Error();
    } catch (err) {
        return res.status(500).json('Anotação não encontrada');
    }
};

// todas as notas
const index = async (req, res) => {
    try {
        const notes = await Notes.findAll({});
        return res.status(200).json({ notes });
    } catch (err) {
        return res.status(500).json({ err });
    }
};

// acha uma anotação especifica
const show = async (req, res) => {
    const { id } = req.params;
    try {
        const note = await Notes.findByPk(id);
        return res.status(200).json({ note });
    } catch (err) {
        return res.status(500).json({ err });
    }
};

const UserNotes = async (req, res) => {
    try {
      const token = Auth.getToken(req);
      const payload = Auth.decodeJwt(token);
      const user = await User.findByPk(payload.sub);
  
      if (!user) { return res.status(404).json({ message: 'Usuario não encontrado.' }); }
  
      const associatedNotes = await user.getNotes();
  
      if (typeof associatedNotes !== 'undefined' && associatedNotes.length === 0) {
        return res.status(200).json({ message: 'Nenhuma anotação encontrado para o usuário!' });
      }
  
      return res.status(200).json({ Notes: associatedNotes });
    } catch (e) {
      return res.status(500).json({ err: e});
    }
  };

module.exports = {
    index,
    show,
    create,
    update,
    destroy, 
    UserNotes,
    
};
