import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export type IAddDbGamesInput = {
  name: Scalars['String'],
  consoleType: Scalars['String'],
  imageUrl: Scalars['String'],
  popularity: Scalars['Float'],
};

export type IAddDbGamesMutationInput = {
  games: Array<IAddDbGamesInput>,
};

export type IAddDbGamesMutationResult = {
   __typename?: 'AddDbGamesMutationResult',
  result?: Maybe<Scalars['Boolean']>,
  notAdded?: Maybe<Array<Maybe<IAddDbGamesMutationResultNotAdded>>>,
  error?: Maybe<Scalars['String']>,
};

export type IAddDbGamesMutationResultNotAdded = {
   __typename?: 'AddDbGamesMutationResultNotAdded',
  name: Scalars['String'],
  consoleType: Scalars['String'],
  imageUrl: Scalars['String'],
  popularity: Scalars['Float'],
};

export type IAddGamesInput = {
  gameId: Scalars['ID'],
  details: IUserGameDetailsInput,
  customItemDetails?: Maybe<IAddGamesInputCustomItemDetails>,
};

export type IAddGamesInputCustomItemDetails = {
  name: Scalars['String'],
  consoleType: Scalars['String'],
};

export type IAddGamesMutationInput = {
  games: Array<IAddGamesInput>,
};

export type IAddGamesMutationResult = {
   __typename?: 'AddGamesMutationResult',
  result: Scalars['Boolean'],
  error?: Maybe<IError>,
};

export enum ICacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type ICreateOfferMutationInput = {
  offer: IOfferInput,
};

export type ICreateOfferMutationResult = {
   __typename?: 'CreateOfferMutationResult',
  result?: Maybe<IOffer>,
  error?: Maybe<IError>,
};

export type IError = {
   __typename?: 'Error',
  id: Scalars['ID'],
  message: Scalars['String'],
  type: Scalars['String'],
};

export type IGame = {
   __typename?: 'Game',
  name: Scalars['String'],
  consoleType?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  imageUrl?: Maybe<Scalars['String']>,
};

export type IMatch = {
   __typename?: 'Match',
  user: IUser,
  distance: Scalars['Float'],
};

export type IMatchQueryInput = {
  sortBy: IMatchSortType,
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
};

export type IMatchQueryResult = {
   __typename?: 'MatchQueryResult',
  result?: Maybe<Array<IMatch>>,
};

export enum IMatchSortType {
  Distance = 'distance',
  MatchRate = 'matchRate'
}

export type IMutation = {
   __typename?: 'Mutation',
  addUserGames?: Maybe<IAddGamesMutationResult>,
  removeUserGames?: Maybe<IRemoveGamesMutationResult>,
  updateUserGames?: Maybe<IUpdateGamesMutationResult>,
  addDbGames?: Maybe<IAddDbGamesMutationResult>,
  updateOffer?: Maybe<IUpdateOfferMutationResult>,
  createOffer?: Maybe<ICreateOfferMutationResult>,
  updateUserInfo?: Maybe<IUpdateUserInfoMutationResult>,
};


export type IMutationAddUserGamesArgs = {
  input: IAddGamesMutationInput
};


export type IMutationRemoveUserGamesArgs = {
  input: IRemoveGamesMutationInput
};


export type IMutationUpdateUserGamesArgs = {
  input: IUpdateGamesMutationInput
};


export type IMutationAddDbGamesArgs = {
  input: IAddDbGamesMutationInput
};


export type IMutationUpdateOfferArgs = {
  input?: Maybe<IUpdateOfferMutationInput>
};


export type IMutationCreateOfferArgs = {
  input?: Maybe<ICreateOfferMutationInput>
};


export type IMutationUpdateUserInfoArgs = {
  input: IUpdateUserInfoMutationInput
};

export type IOffer = {
   __typename?: 'Offer',
  offerId: Scalars['ID'],
  senderGames: Array<IUserGame>,
  receiverGames: Array<IUserGame>,
  receiverId: Scalars['ID'],
  senderId: Scalars['ID'],
  epochTimeCreated: Scalars['String'],
  status: IOfferStatus,
  receiverStatus: IOfferStatus,
  senderStatus: IOfferStatus,
};

export type IOfferInput = {
  myGames: Array<IUserGameInput>,
  otherGames: Array<IUserGameInput>,
  otherId: Scalars['ID'],
};

export type IOfferQueryInput = {
  status: IOfferStatus,
  pagination?: Maybe<IPaginationInput>,
};

export type IOfferQueryResult = {
   __typename?: 'OfferQueryResult',
  result?: Maybe<Array<IOffer>>,
  pageInfo?: Maybe<IPageInfo>,
};

export enum IOfferStatus {
  Pending = 'pending',
  Ongoing = 'ongoing',
  Completed = 'completed',
  Cancelled = 'cancelled',
  Declined = 'declined'
}

export type IPageInfo = {
   __typename?: 'PageInfo',
  noOfItems: Scalars['Int'],
};

export type IPaginationInput = {
  offset: Scalars['Int'],
  limit: Scalars['Int'],
};

export type IQuery = {
   __typename?: 'Query',
  searchGames: ISearchGamesQueryResult,
  matches: IMatchQueryResult,
  offers: IOfferQueryResult,
  me?: Maybe<IUser>,
  user?: Maybe<IUser>,
};


export type IQuerySearchGamesArgs = {
  input: ISearchGamesQueryInput
};


export type IQueryMatchesArgs = {
  input: IMatchQueryInput
};


export type IQueryOffersArgs = {
  input: IOfferQueryInput
};


export type IQueryUserArgs = {
  input: IUserQueryInput
};

export type IRemoveGamesInput = {
  id: Scalars['ID'],
};

export type IRemoveGamesMutationInput = {
  games: Array<IRemoveGamesInput>,
};

export type IRemoveGamesMutationResult = {
   __typename?: 'RemoveGamesMutationResult',
  result: Scalars['Boolean'],
};

export type ISearchGamesQueryInput = {
  searchText: Scalars['String'],
  limit?: Maybe<Scalars['Int']>,
};

export type ISearchGamesQueryResult = {
   __typename?: 'SearchGamesQueryResult',
  result?: Maybe<Array<IGame>>,
};

export type IUpdateGamesInput = {
  id: Scalars['ID'],
  details: IUpdateGamesInputDetails,
};

export type IUpdateGamesInputDetails = {
  description: Scalars['String'],
  status: IUserGameDetailsStatus,
  tradeType: IUserGameDetailsTradeType,
};

export type IUpdateGamesMutationInput = {
  games: Array<IUpdateGamesInput>,
};

export type IUpdateGamesMutationResult = {
   __typename?: 'UpdateGamesMutationResult',
  result: Scalars['Boolean'],
};

export type IUpdateOfferMutationInput = {
  offerId: Scalars['ID'],
  type: IUpdateOfferMutationInputType,
};

export enum IUpdateOfferMutationInputType {
  Complete = 'complete',
  Accept = 'accept',
  Decline = 'decline',
  Cancel = 'cancel'
}

export type IUpdateOfferMutationResult = {
   __typename?: 'UpdateOfferMutationResult',
  result?: Maybe<IOffer>,
};

export type IUpdateUserInfoMutationInput = {
  info: IUserInfoInput,
};

export type IUpdateUserInfoMutationResult = {
   __typename?: 'UpdateUserInfoMutationResult',
  result?: Maybe<IUserInfo>,
  error?: Maybe<IError>,
};


export type IUser = {
   __typename?: 'User',
  id: Scalars['ID'],
  info: IUserInfo,
  wantedGames?: Maybe<Array<IUserGame>>,
  hasGames?: Maybe<Array<IUserGame>>,
};

export type IUserGame = {
   __typename?: 'UserGame',
  id: Scalars['ID'],
  details: IUserGameDetails,
  game: IGame,
};

export type IUserGameDetails = {
   __typename?: 'UserGameDetails',
  description: Scalars['String'],
  status: IUserGameDetailsStatus,
  tradeType: IUserGameDetailsTradeType,
};

export type IUserGameDetailsInput = {
  description: Scalars['String'],
  status?: Maybe<IUserGameDetailsStatus>,
  tradeType: IUserGameDetailsTradeType,
};

export enum IUserGameDetailsStatus {
  Has = 'has',
  Want = 'want'
}

export enum IUserGameDetailsTradeType {
  Swap = 'swap',
  Sale = 'sale'
}

export type IUserGameInput = {
  details: IUserGameDetailsInput,
  gameId: Scalars['ID'],
};

export type IUserInfo = {
   __typename?: 'UserInfo',
  email?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  isPro?: Maybe<Scalars['Boolean']>,
  epochTimeCreated?: Maybe<Scalars['String']>,
  location?: Maybe<IUserInfoLocation>,
  noOfSuccessfulExchanges?: Maybe<Scalars['Int']>,
  rating?: Maybe<IUserInfoRating>,
  userImageUrl?: Maybe<Scalars['String']>,
  userName?: Maybe<Scalars['String']>,
  isBanned?: Maybe<Scalars['Boolean']>,
  setting_matchNotifications?: Maybe<Scalars['Boolean']>,
};

export type IUserInfoInput = {
  email?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  isPro?: Maybe<Scalars['Boolean']>,
  location?: Maybe<IUserInfoLocationInput>,
  userImageUrl?: Maybe<Scalars['String']>,
  userName?: Maybe<Scalars['String']>,
  isBanned?: Maybe<Scalars['Boolean']>,
  setting_matchNotifications?: Maybe<Scalars['Boolean']>,
};

export type IUserInfoLocation = {
   __typename?: 'UserInfoLocation',
  city: Scalars['String'],
  state: Scalars['String'],
};

export type IUserInfoLocationInput = {
  longitude: Scalars['Float'],
  latitude: Scalars['Float'],
};

export type IUserInfoRating = {
   __typename?: 'UserInfoRating',
  negative?: Maybe<Scalars['Int']>,
  positive?: Maybe<Scalars['Int']>,
};

export type IUserQueryInput = {
  by: IUserQueryType,
  value: Scalars['String'],
};

export enum IUserQueryType {
  Id = 'id',
  Username = 'username'
}

export type IAddUserGamesMutationVariables = {
  games: Array<IAddGamesInput>
};


export type IAddUserGamesMutation = { __typename?: 'Mutation', addUserGames: Maybe<{ __typename?: 'AddGamesMutationResult', result: boolean, error: Maybe<{ __typename?: 'Error', message: string, type: string, id: string }> }> };

export type IGetDescriptionQueryVariables = {};


export type IGetDescriptionQuery = { __typename?: 'Query', me: Maybe<{ __typename?: 'User', info: { __typename?: 'UserInfo', description: Maybe<string> } }> };

export type IUserGameQueryVariables = {};


export type IUserGameQuery = { __typename?: 'Query', me: Maybe<{ __typename?: 'User', hasGames: Maybe<Array<{ __typename?: 'UserGame', id: string, details: { __typename?: 'UserGameDetails', description: string, status: IUserGameDetailsStatus, tradeType: IUserGameDetailsTradeType }, game: { __typename?: 'Game', consoleType: Maybe<string>, id: string, imageUrl: Maybe<string>, name: string } }>>, wantedGames: Maybe<Array<{ __typename?: 'UserGame', id: string, details: { __typename?: 'UserGameDetails', description: string, status: IUserGameDetailsStatus, tradeType: IUserGameDetailsTradeType }, game: { __typename?: 'Game', consoleType: Maybe<string>, id: string, imageUrl: Maybe<string>, name: string } }>> }> };

export type ISearchGamesQueryVariables = {
  input: ISearchGamesQueryInput
};


export type ISearchGamesQuery = { __typename?: 'Query', searchGames: { __typename?: 'SearchGamesQueryResult', result: Maybe<Array<{ __typename?: 'Game', consoleType: Maybe<string>, id: string, imageUrl: Maybe<string>, name: string }>> } };


export const AddUserGamesDocument = gql`
    mutation addUserGames($games: [AddGamesInput!]!) {
  addUserGames(input: {games: $games}) {
    result
    error {
      message
      type
      id
    }
  }
}
    `;
export type IAddUserGamesMutationFn = ApolloReactCommon.MutationFunction<IAddUserGamesMutation, IAddUserGamesMutationVariables>;
export type AddUserGamesComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<IAddUserGamesMutation, IAddUserGamesMutationVariables>, 'mutation'>;

    export const AddUserGamesComponent = (props: AddUserGamesComponentProps) => (
      <ApolloReactComponents.Mutation<IAddUserGamesMutation, IAddUserGamesMutationVariables> mutation={AddUserGamesDocument} {...props} />
    );
    
export type IAddUserGamesProps<TChildProps = {}> = ApolloReactHoc.MutateProps<IAddUserGamesMutation, IAddUserGamesMutationVariables> & TChildProps;
export function withAddUserGames<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IAddUserGamesMutation,
  IAddUserGamesMutationVariables,
  IAddUserGamesProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, IAddUserGamesMutation, IAddUserGamesMutationVariables, IAddUserGamesProps<TChildProps>>(AddUserGamesDocument, {
      alias: 'addUserGames',
      ...operationOptions
    });
};

/**
 * __useAddUserGamesMutation__
 *
 * To run a mutation, you first call `useAddUserGamesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserGamesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserGamesMutation, { data, loading, error }] = useAddUserGamesMutation({
 *   variables: {
 *      games: // value for 'games'
 *   },
 * });
 */
export function useAddUserGamesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<IAddUserGamesMutation, IAddUserGamesMutationVariables>) {
        return ApolloReactHooks.useMutation<IAddUserGamesMutation, IAddUserGamesMutationVariables>(AddUserGamesDocument, baseOptions);
      }
export type AddUserGamesMutationHookResult = ReturnType<typeof useAddUserGamesMutation>;
export type AddUserGamesMutationResult = ApolloReactCommon.MutationResult<IAddUserGamesMutation>;
export type AddUserGamesMutationOptions = ApolloReactCommon.BaseMutationOptions<IAddUserGamesMutation, IAddUserGamesMutationVariables>;
export const GetDescriptionDocument = gql`
    query getDescription {
  me {
    info {
      description
    }
  }
}
    `;
export type GetDescriptionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IGetDescriptionQuery, IGetDescriptionQueryVariables>, 'query'>;

    export const GetDescriptionComponent = (props: GetDescriptionComponentProps) => (
      <ApolloReactComponents.Query<IGetDescriptionQuery, IGetDescriptionQueryVariables> query={GetDescriptionDocument} {...props} />
    );
    
export type IGetDescriptionProps<TChildProps = {}> = ApolloReactHoc.DataProps<IGetDescriptionQuery, IGetDescriptionQueryVariables> & TChildProps;
export function withGetDescription<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IGetDescriptionQuery,
  IGetDescriptionQueryVariables,
  IGetDescriptionProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, IGetDescriptionQuery, IGetDescriptionQueryVariables, IGetDescriptionProps<TChildProps>>(GetDescriptionDocument, {
      alias: 'getDescription',
      ...operationOptions
    });
};

/**
 * __useGetDescriptionQuery__
 *
 * To run a query within a React component, call `useGetDescriptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDescriptionQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDescriptionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDescriptionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IGetDescriptionQuery, IGetDescriptionQueryVariables>) {
        return ApolloReactHooks.useQuery<IGetDescriptionQuery, IGetDescriptionQueryVariables>(GetDescriptionDocument, baseOptions);
      }
export function useGetDescriptionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IGetDescriptionQuery, IGetDescriptionQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IGetDescriptionQuery, IGetDescriptionQueryVariables>(GetDescriptionDocument, baseOptions);
        }
export type GetDescriptionQueryHookResult = ReturnType<typeof useGetDescriptionQuery>;
export type GetDescriptionLazyQueryHookResult = ReturnType<typeof useGetDescriptionLazyQuery>;
export type GetDescriptionQueryResult = ApolloReactCommon.QueryResult<IGetDescriptionQuery, IGetDescriptionQueryVariables>;
export const UserGameDocument = gql`
    query UserGame {
  me {
    hasGames {
      id
      details {
        description
        status
        tradeType
      }
      game {
        consoleType
        id
        imageUrl
        name
      }
    }
    wantedGames {
      id
      details {
        description
        status
        tradeType
      }
      game {
        consoleType
        id
        imageUrl
        name
      }
    }
  }
}
    `;
export type UserGameComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<IUserGameQuery, IUserGameQueryVariables>, 'query'>;

    export const UserGameComponent = (props: UserGameComponentProps) => (
      <ApolloReactComponents.Query<IUserGameQuery, IUserGameQueryVariables> query={UserGameDocument} {...props} />
    );
    
export type IUserGameProps<TChildProps = {}> = ApolloReactHoc.DataProps<IUserGameQuery, IUserGameQueryVariables> & TChildProps;
export function withUserGame<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  IUserGameQuery,
  IUserGameQueryVariables,
  IUserGameProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, IUserGameQuery, IUserGameQueryVariables, IUserGameProps<TChildProps>>(UserGameDocument, {
      alias: 'userGame',
      ...operationOptions
    });
};

/**
 * __useUserGameQuery__
 *
 * To run a query within a React component, call `useUserGameQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserGameQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserGameQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserGameQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IUserGameQuery, IUserGameQueryVariables>) {
        return ApolloReactHooks.useQuery<IUserGameQuery, IUserGameQueryVariables>(UserGameDocument, baseOptions);
      }
export function useUserGameLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IUserGameQuery, IUserGameQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IUserGameQuery, IUserGameQueryVariables>(UserGameDocument, baseOptions);
        }
export type UserGameQueryHookResult = ReturnType<typeof useUserGameQuery>;
export type UserGameLazyQueryHookResult = ReturnType<typeof useUserGameLazyQuery>;
export type UserGameQueryResult = ApolloReactCommon.QueryResult<IUserGameQuery, IUserGameQueryVariables>;
export const SearchGamesDocument = gql`
    query searchGames($input: SearchGamesQueryInput!) {
  searchGames(input: $input) {
    result {
      consoleType
      id
      imageUrl
      name
    }
  }
}
    `;
export type SearchGamesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ISearchGamesQuery, ISearchGamesQueryVariables>, 'query'> & ({ variables: ISearchGamesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SearchGamesComponent = (props: SearchGamesComponentProps) => (
      <ApolloReactComponents.Query<ISearchGamesQuery, ISearchGamesQueryVariables> query={SearchGamesDocument} {...props} />
    );
    
export type ISearchGamesProps<TChildProps = {}> = ApolloReactHoc.DataProps<ISearchGamesQuery, ISearchGamesQueryVariables> & TChildProps;
export function withSearchGames<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ISearchGamesQuery,
  ISearchGamesQueryVariables,
  ISearchGamesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ISearchGamesQuery, ISearchGamesQueryVariables, ISearchGamesProps<TChildProps>>(SearchGamesDocument, {
      alias: 'searchGames',
      ...operationOptions
    });
};

/**
 * __useSearchGamesQuery__
 *
 * To run a query within a React component, call `useSearchGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchGamesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSearchGamesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ISearchGamesQuery, ISearchGamesQueryVariables>) {
        return ApolloReactHooks.useQuery<ISearchGamesQuery, ISearchGamesQueryVariables>(SearchGamesDocument, baseOptions);
      }
export function useSearchGamesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ISearchGamesQuery, ISearchGamesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ISearchGamesQuery, ISearchGamesQueryVariables>(SearchGamesDocument, baseOptions);
        }
export type SearchGamesQueryHookResult = ReturnType<typeof useSearchGamesQuery>;
export type SearchGamesLazyQueryHookResult = ReturnType<typeof useSearchGamesLazyQuery>;
export type SearchGamesQueryResult = ApolloReactCommon.QueryResult<ISearchGamesQuery, ISearchGamesQueryVariables>;