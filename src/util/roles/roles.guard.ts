import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './roles.enum';
import { ROLES_KEY } from './roles.decorator';
import { subscribe } from 'superagent';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    if (!user) {
        console.log("if (!user) {")
        console.log(context.getHandler())
        console.log(context.getClass())
        console.log("}")
        return true
    }
    console.log(requiredRoles)
    console.log("user.roles")
    console.log(user.roles)

    console.log(requiredRoles.some((role) => user.roles?.includes(role)))
    
    return requiredRoles.some((role) => user.roles?.includes(role));
  }
}