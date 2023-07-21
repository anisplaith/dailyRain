const User = require('../models/User');
const Auth = require('../config/auth');

// criar uma usuário
const create = async (req, res) => {
  try {
    const { password } = req.body;
    const HashSalt = Auth.generatePassword(password);
    const { salt, hash } = HashSalt;
    const newUser = {
      id: Date.now(),
      name: req.body.name,
      email: req.body.email,
      hash,
      salt,
    };
    const user = await User.create(newUser);

    return res.status(201).json({ message: 'Usuário foi cadastrado com sucesso!', user });

  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// modifica uma usuario 
const update = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await User.update(req.body, { where: { id: id } });
    if (updated) {
      const user = await User.findByPk(id);
      return res.status(200).send(user);
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
    const deleted = await User.destroy({ where: { id: id } });
    if (deleted) {
      return res.status(200).json('O usuário foi deletado com sucesso!');
    }
    throw new Error();
  } catch (err) {
    return res.status(500).json('Usuário não foi encontrado.');
  }
};

// todos os usuários
const index = async (req, res) => {
  try {
    const users = await User.findAll({});
    return res.status(200).json({ users });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

// acha um usuário especifico
const show = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    return res.status(200).json({ user });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy
};
