import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as path from 'path';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

   // Create Lambda function from your existing app
   const appLambda = new lambda.Function(this, 'AppHandler', {
    runtime: lambda.Runtime.NODEJS_16_X,
    handler: 'dist/index.handler', // Point to your app's entry point
    code: lambda.Code.fromAsset(path.join(__dirname, '../../')), // Root of your app
    environment: {
      NODE_ENV: 'production',
      // Add other environment variables your app needs
    },
  });

  // Create API Gateway
  const api = new apigateway.RestApi(this, 'AppApi', {
    restApiName: 'My TypeScript App API',
    defaultCorsPreflightOptions: {
      allowOrigins: apigateway.Cors.ALL_ORIGINS,
      allowMethods: apigateway.Cors.ALL_METHODS,
    },
  });

  // Add Lambda integration
  const integration = new apigateway.LambdaIntegration(appLambda);
  api.root.addProxy({
    defaultIntegration: integration,
    anyMethod: true,
    });
  }
}
