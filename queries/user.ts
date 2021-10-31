import { gql } from 'graphql-request';

const checkUser = gql`
    query CheckUser($email: String!) {
        users(email: $email) {
            edges {
                node {
                    email
                    isActive
                }
            }
        }
    }
`;

export { checkUser };
