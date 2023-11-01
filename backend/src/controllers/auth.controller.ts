import { Body, Controller, HttpStatus, Post, UnauthorizedException, HttpCode, UseInterceptors, ClassSerializerInterceptor, HttpException,} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/entities/user.entity";
import { AuthService } from "src/services/auth.service";
import { UserService } from "src/services/user.service";

@UseInterceptors(ClassSerializerInterceptor)
@Controller("auth")
export class AuthController {

    constructor(
        private readonly service: AuthService,
        private readonly jwtService: JwtService,
        private readonly userService: UserService
        ){}
        @Post("signin")
        @HttpCode(HttpStatus.OK)
        async signIn(@Body() credential: Record<string, string>) {

            const found = await this.service.validateCredential(credential.username, credential.password)
            
            if (!found){
                throw new UnauthorizedException();
            }

            const payload = {userId: found.id, userName: found.username, fullName: found.fullname}
            const token = await this.jwtService.signAsync(payload);
            
            return {
                acessToken: token
            };
        }
        @Post('signup')
        async signUp(@Body() user: User): Promise<User>{
            const found = await this.userService.findByUsername(user.username);
            if (found)
                throw new HttpException ('Esse nome de usuario ja está em uso', HttpStatus.CONFLICT)
            return this.userService.create(user);
        }
        
}