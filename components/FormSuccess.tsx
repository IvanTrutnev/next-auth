import { CheckCircledIcon } from '@radix-ui/react-icons';

interface FormSuccessProps {
  message?: string;
}

export const FormSucceess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="p-3 bg-emerald-500/15 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <CheckCircledIcon className="h-4 w-4" />
      {message}
    </div>
  );
};
