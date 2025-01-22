import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAll(): Promise<object> {
    return this.usersService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<object> {
    return this.usersService.getById(Number(id))
  }

  @Post()
  async createUser(@Body('username') username: string): Promise<object> {
    return this.usersService.createUser(username)
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body('username') username: string): Promise<object> {
    return this.usersService.updateUser(Number(id), username)
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<object> {
    return this.usersService.deleteUser(Number(id))
  }
}
