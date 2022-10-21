import jwt from 'jsonwebtoken';

function generateToken(Name_User, User_Password) {
  const secret = '41491375';

 return jwt.sign({infoUser: {Name_User, User_Password}}, 
secret, {expiresIn: 60 * 60 * 5});
}
export {generateToken};
