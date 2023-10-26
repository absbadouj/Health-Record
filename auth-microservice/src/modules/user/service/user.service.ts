import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from '../repository/user.repository';
import { CreateUserDto } from '../../../interfaces/user.dto';

@Injectable()
export class UserService {
    constructor(private readonly _userRepository: UserRepository) { }

    async findAll() {
        let users = await this._userRepository.findAll();
        return users;
    }

    async findOne(id: string): Promise<User> {
        return await this._userRepository.findById(id);
    }

    async findByEmail(email: string) {
        return await this._userRepository.findByEmail(email);
    }

    async create(user: CreateUserDto): Promise<User> {
        return await this._userRepository.create(user);
    }

    async update(id: string, user: User): Promise<User> {
        return await this._userRepository.update(id, user);
    }

    async delete(id: string): Promise<User> {
        return await this._userRepository.delete(id);
    }
}
