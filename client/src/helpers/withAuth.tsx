import { GetServerSideProps } from 'next';

import ApplicationRoutes from 'config/ApplicationRoutes';

export const withAuth: GetServerSideProps = async ({ req }) => {
  const { reactmon_token, reactmon_user } = req.cookies;

  if (!reactmon_token && !reactmon_user) {
    return {
      redirect: {
        destination: ApplicationRoutes.LOGIN,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
