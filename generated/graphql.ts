import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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

export type Author = {
  __typename?: 'Author';
  books?: Maybe<Array<Maybe<Book>>>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Book = {
  __typename?: 'Book';
  authorId?: Maybe<Scalars['Int']>;
  authorName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** Root Mutation */
export type Mutation = {
  __typename?: 'Mutation';
  /** Add an author */
  addAuthor?: Maybe<Author>;
  /** Add a book */
  addBook?: Maybe<Book>;
};


/** Root Mutation */
export type MutationAddAuthorArgs = {
  name: Scalars['String'];
};


/** Root Mutation */
export type MutationAddBookArgs = {
  authorId: Scalars['Int'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** A Single Author */
  author?: Maybe<Author>;
  /** List of All Authors */
  authors?: Maybe<Array<Maybe<Author>>>;
  /** A single Book */
  book?: Maybe<Book>;
  /** List of All Books */
  books?: Maybe<Array<Maybe<Book>>>;
};


export type QueryAuthorArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryBookArgs = {
  id?: InputMaybe<Scalars['Int']>;
};

export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = { __typename?: 'Query', books?: Array<{ __typename?: 'Book', id?: number | null, name?: string | null } | null> | null };


export const GetBooksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBooks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"books"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetBooksQuery, GetBooksQueryVariables>;