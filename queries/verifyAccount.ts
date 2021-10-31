import { gql } from 'graphql-request';

const VerifyAccountMutation = gql`
    mutation verifyAccount($token: String!) {
        verifyAccount(token: $token) {
            success
            errors
        }
    }
`;

export { VerifyAccountMutation };
