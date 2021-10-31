import { gql } from 'graphql-request';

const SiteConfiguration = gql`
    {
        siteConfiguration {
            siteName
            copyright
            socialnetworkSet {
                name
                icon
                path
            }
        }
    }
`;

export { SiteConfiguration };
