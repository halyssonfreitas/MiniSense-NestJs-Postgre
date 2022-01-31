import { SetMetadata } from '@nestjs/common';
import { Role } from './roles.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => {
    console.log(roles)
    return SetMetadata(ROLES_KEY, roles)
};
