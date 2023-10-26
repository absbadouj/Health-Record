import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { ServiceInterface } from 'src/interfaces/service.interface';
import { UserRepository } from '../repository/user.repository';
import { CreateUserDto } from 'src/dto/user/user.dto';

@Injectable()
export class UserService {
    constructor(private readonly _userRepository: UserRepository) { }

    async findAll() {
        let users = await this._userRepository.findAll();
        return users;
    }

    findOne(id: string): Promise<User> {
        return this._userRepository.findById(id);
    }

    create(user: CreateUserDto): Promise<User> {
        return this._userRepository.create(user);
    }

    update(id: string, user: User): Promise<User> {
        return this._userRepository.update(id, user);
    }

    delete(id: string): Promise<User> {
        return this._userRepository.delete(id);
    }
}
