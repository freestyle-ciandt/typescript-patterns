export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type MessageData = {
  __typename?: 'MessageData';
  message: Scalars['String'];
  route: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  defaultMessage?: Maybe<MessageData>;
};


export type MutationDefaultMessageArgs = {
  message: Scalars['String'];
  route: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getVehicle?: Maybe<Vehicle>;
};


export type QueryGetVehicleArgs = {
  id: Scalars['String'];
};

export type Vehicle = {
  __typename?: 'Vehicle';
  available: Scalars['Boolean'];
  category: Scalars['String'];
  id: Scalars['String'];
  publishedAt: Scalars['Int'];
  seats: Scalars['Int'];
};
