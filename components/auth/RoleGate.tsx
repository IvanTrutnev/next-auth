'use client';

import { useCurrentRole } from '@/hooks/use-user-role';
import { UserRole } from '@prisma/client';
import { FormError } from '../FormError';

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="You do not have pemissions to view this content" />
    );
  }

  return <>{children}</>;
};
