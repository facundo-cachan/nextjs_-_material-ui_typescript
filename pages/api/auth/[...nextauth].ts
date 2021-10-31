import NextAuth from 'next-auth';
import { NextApiRequest, NextApiResponse } from 'next-auth/internals/utils';
import Providers from 'next-auth/providers';

const options = {
    secret: process.env.SECRET,
    providers: [
        Providers.Facebook({
            clientId: process.env.FACEBOOK_KEY,
            clientSecret: process.env.FACEBOOK_SECRET,
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_KEY,
            clientSecret: process.env.GOOGLE_SECRET,
            authorizationUrl:
                'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
        }),
    ],
    jwt: { encryption: true, signingKey: process.env.JWT_SIGNING_PRIVATE_KEY },
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60,
    },
    callbacks: {
        redirect: async (_: any, baseUrl: string) => {
            return Promise.resolve(baseUrl);
        },
        /* async session({ session, token, user }: any) {
            console.log('NextAuth Callbacks Session');
            console.log({ session, token, user });
            session.accessToken = token.accessToken;
            return session;
        }, */
        async jwt(
            token: { accessToken: string },
            account: { accessToken: string; provider: string },
        ) {
            console.log('NextAuth Callbacks JWT');
            console.log(token);
            if (account) {
                token.accessToken = account.accessToken;
            }
            return token;
        },
    },
    debug: false,
};
const CustomNetcAuth = (req: NextApiRequest, res: NextApiResponse<any>) =>
    NextAuth(req, res, options);
export default CustomNetcAuth;
