import type { Options } from 'tsup';

declare const configFactory: (options: Options) => Options;

export = configFactory;
