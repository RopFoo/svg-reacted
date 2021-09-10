import { argsConfig } from './args.config';

export enum fileNameType {
  OUTPUT = 'output',
  INPUT = 'input',
}

export const getFileName = (fileName: fileNameType): string => {
  const args = process.argv.slice(2);

  switch (fileName) {
    case fileNameType.OUTPUT:
      return args[argsConfig.outputFileName]
        ? args[argsConfig.outputFileName]
        : 'noname.tsx';

    case fileNameType.INPUT:
      return args[argsConfig.inputFileName];

    default:
      return 'noname.tsx';
  }
};
