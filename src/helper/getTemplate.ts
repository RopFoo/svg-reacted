import { defaultTSX } from '../templates/defaultTSX';
import { createWithHocTSX } from '../templates/withHocTSX';
import { getSetupJSON, template } from './getSetupJSON';

export const getTemplate = (data: string) => {
  const { templateType } = getSetupJSON();

  switch (templateType) {
    case template.HOC:
      return createWithHocTSX(data);

    default:
      return defaultTSX(data);
  }
};
