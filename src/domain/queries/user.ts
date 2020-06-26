import gql from 'graphql-tag';

export const ME_QUERY = gql`
  query Me {
    me {
      username
    }
  }
`;

export const USERS_LIST_QUERY = gql`
  query Users {
    users {
      username
      name
    }
  }
`;
