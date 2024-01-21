import { CardWrapper } from './auth/CardWrapper';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Something went wrong"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="w-full flex justify-center items-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
};
