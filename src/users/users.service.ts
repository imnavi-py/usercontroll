import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    const users = await this.prisma.user.findMany()
    return {
      data: users,
      statusCode: 200,
      message: 'Get all users!'
    }
  }

  async getById(id: number): Promise<object> {
    const user = await this.prisma.user.findUnique({ where: { id } })
    if (!user) {
      return {
        data: null,
        statusCode: 404,
        message: 'User not found!'
      }
    }
    return {
      data: user,
      statusCode: 200,
      message: 'Get user!'
    }
  }

  async createUser(username: string): Promise<object> {
    const newUser = await this.prisma.user.create({
      data: { username }
    })
    return {
      data: newUser,
      statusCode: 201,
      message: 'User created!'
    }
  }

  async updateUser(id: number, username: string): Promise<object> {
    try {
      const updatedUser = await this.prisma.user.update({
        where: { id },
        data: { username }
      })
      return {
        data: updatedUser,
        statusCode: 200,
        message: 'User updated!'
      }
    } catch (error) {
      return {
        data: null,
        statusCode: 404,
        message: 'User not found!'
      }
    }
  }

  async deleteUser(id: number): Promise<object> {
    try {
      await this.prisma.user.delete({ where: { id } })
      return {
        data: null,
        statusCode: 200,
        message: 'User deleted!'
      }
    } catch (error) {
      return {
        data: null,
        statusCode: 404,
        message: 'User not found!'
      }
    }
  }
}
