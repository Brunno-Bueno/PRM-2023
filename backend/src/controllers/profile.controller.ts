import { Controller, Get, Param, HttpException, HttpStatus } from "@nestjs/common";
import { User } from "src/entities/user.entity";
import { UserService } from "src/services/user.service";


@Controller("profile")

export class ProfileController{
    constructor(private userService: UserService){}
    @Get(':username')
    getProfile(@Param('username') username: string): Promise<User>{
        const found = this.userService.findByUsername(username);
        if (!found){
            throw new HttpException('Usuario nao encontrado', HttpStatus.NOT_FOUND)
        }
        return found;
    }
}