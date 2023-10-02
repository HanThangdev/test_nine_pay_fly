/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace Types {
  import { Component } from 'react';

  export interface IRoute {
    key: number;
    path: string;
    component: Component;
    layout?: Component;
    isProtected?: boolean;
    isAdmin?: boolean;
  }

  export interface IObject<T = any> {
    [key: string]: T;
  }

  export interface ICoordinates {
    x: number;
    y: number;
  }

  export type Nullable<T = any> = T | null;

  export type Optional<T = any> = T | undefined;
}
