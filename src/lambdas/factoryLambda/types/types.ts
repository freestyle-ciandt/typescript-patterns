import ResourceFactory from '../factories/resource-factory';

export interface EventMessage {
  message: string
  route: string
}

export interface ConfigFunction {
  (message: string): ResourceFactory
}

export interface ResourceMap {
  [resource: string]: ConfigFunction,
}
