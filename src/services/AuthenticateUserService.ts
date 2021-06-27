import { getCustomRepository } from "typeorm"

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UsersRepositories } from "../repositories/UsersRepositories"




interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({email, password}: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    //Verificar se email existe
    const user = await usersRepositories.findOne({
      email
    });

    if(!user) {
      throw new Error("Email/Password incorrect");      
    }

    //Verificar se senha está correta

    //12345 / 732483248-jdancjcnajcsjcsdcs2131312312
    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new Error ("Email/Password incorrect")
    }

    //Gerar token
    const token = sign({
      email: user.email
    },"966f8c945ac72130828c4bfa6a65d81b", {
      subject: user.id,
      expiresIn: "1d" 
    } 
    );

    return token;
  }
}

export { AuthenticateUserService }