import { gql } from 'graphql-request';
const login = gql`
    mutation Login($password: String!, $email: String!) {
        tokenAuth(password: $password, email: $email) {
            token
            success
            errors
            user {
                id
                firstName
                isActive
            }
            unarchiving
            refreshToken
        }
    }
`;
const registerQuery = gql`
    mutation Register(
        $email: String!
        $firstName: String!
        $lastName: String!
        $phoneNumber: String!
        $password1: String!
        $password2: String!
    ) {
        register(
            email: $email
            firstName: $firstName
            lastName: $lastName
            phoneNumber: $phoneNumber
            password1: $password1
            password2: $password2
        ) {
            token
            success
            errors
            refreshToken
        }
    }
`;
const signIn = gql`
    mutation SignIn($accessToken: String!, $provider: String!) {
        socialAuth(accessToken: $accessToken, provider: $provider) {
            social {
                id
                provider
                uid
                id
            }
            token
        }
    }
`;
const signOut = gql`
    mutation SignOut($refreshToken: String!) {
        revokeToken(refreshToken: $refreshToken) {
            success
            errors
        }
    }
`;
const status = gql`
    mutation Status($token: String!) {
        verifyToken(token: $token) {
            payload
            success
            errors
        }
    }
`;
const passwordReset = gql`
    mutation ResetPassword($token: String!, $newPassword1: String!, $newPassword2: String!) {
        passwordReset(token: $token, newPassword1: $newPassword1, newPassword2: $newPassword2) {
            success
            errors
        }
    }
`;
const sendPasswordResetEmail = gql`
    mutation ResetPassword($email: String!) {
        sendPasswordResetEmail(email: $email) {
            success
            errors
        }
    }
`;
export { login, status, signIn, signOut, registerQuery, passwordReset, sendPasswordResetEmail };
