'use client';

import { admin } from '@/actions/admin';
import { RoleGate } from '@/components/auth/RoleGate';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useCurrentRole } from '@/hooks/use-user-role';
import { UserRole } from '@prisma/client';
import { toast } from 'sonner';

const AdminPage = () => {
  const onApiRouteClick = () => {
    fetch('/api/admin').then((response) => {
      if (response.ok) {
        toast.success('allowed');
      } else {
        toast.error('forbidden');
      }
    });
  };

  const onServerActionClick = () => {
    admin().then((response) => {
      if (response.success) {
        toast.success(response.success);
      } else {
        toast.error(response.error);
      }
    });
  };

  const role = useCurrentRole();

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
            <p className="text-sm font-medium">Admin client action</p>
            <Button onClick={onApiRouteClick}>Click to test</Button>
          </div>

          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
            <p className="text-sm font-medium">Admin server action</p>
            <Button onClick={onServerActionClick}>Click to test</Button>
          </div>
        </RoleGate>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
