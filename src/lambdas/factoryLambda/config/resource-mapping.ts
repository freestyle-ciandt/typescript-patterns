import DynamoResourceCreator from '../resources/dynamo-resource';
import LambdaResourceCreator from '../resources/lambda-resource';
import S3ResourceCreator from '../resources/s3-resource';
import SQSResourceCreator from '../resources/sqs-resource';
import { ResourceMap } from '../types/types';

const resourceConfig = (): ResourceMap => ({
  SQS: (message: string) => (new SQSResourceCreator(message)),
  LAMBDA: (message: string) => (new LambdaResourceCreator(message)),
  DYNAMO: (message: string) => (new DynamoResourceCreator(message)),
  S3: (message: string) => (new S3ResourceCreator(message)),
});

export default {
  resourceConfig,
};
