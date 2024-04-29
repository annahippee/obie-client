import { StateCode, TypeOfInsurance } from '../../../types';

export const mapStringToStateCode = (str: string): StateCode | undefined => {
  switch (str) {
    case StateCode.IL:
      return StateCode.IL;
    case StateCode.IN:
      return StateCode.IN;
    case StateCode.MI:
      return StateCode.MI;
    default:
      return;
  }
};

export const mapStringToInsuranceType = (
  str: string,
): TypeOfInsurance | undefined => {
  switch (str) {
    case TypeOfInsurance.AUTO:
      return TypeOfInsurance.AUTO;
    case TypeOfInsurance.FLOOD:
      return TypeOfInsurance.FLOOD;
    case TypeOfInsurance.FIRE:
      return TypeOfInsurance.FIRE;
    default:
      return;
  }
};
