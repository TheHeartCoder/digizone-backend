import { SetMetadata } from '@nestjs/common';
import { userTypes } from '../schema/users';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: userTypes[]) => SetMetadata(ROLES_KEY, roles);
