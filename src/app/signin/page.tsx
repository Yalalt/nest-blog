import DiscordSignInButton from '@/components/auth/DiscordSignInButton';
import GoogleSignInButton from '@/components/auth/GoogleSignInButton';

const SignInPage = () => {
  return (
    <section className='flex min-h-full overflow-hidden pt-16 sm:py-28'>
      <div className='mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6'>
        <div className='relative mt-12 sm:mt-16'>
          <h1 className='text-center text-2xl font-medium tracking-tight text-gray-700'>Өөрийн Discord эсвэл Google эрхээр нэвтрэх</h1>
        </div>
        <div className='sm:rounded-5xl -mx-4 mt-5 flex-auto bg-white px-4 py-10 shadow-2xl shadow-gray-900/20 sm:mx-0 sm:flex-none sm:p-24'>
          <DiscordSignInButton />
          <div className='h-4'></div>
          <GoogleSignInButton />
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
