import { v4 as uuidv4 } from 'uuid';
import { StateCode, TypeOfInsurance } from '../../../types';

export const stateOptions = [
  {
    name: 'Select state...',
    value: undefined,
    id: uuidv4(),
  },
  {
    name: 'Illinois',
    value: StateCode.IL,
    id: uuidv4(),
  },
  {
    name: 'Indiana',
    value: StateCode.IN,
    id: uuidv4(),
  },
  {
    name: 'Michigan',
    value: StateCode.MI,
    id: uuidv4(),
  },
];
export const insuranceOptions = [
  {
    name: 'Select type...',
    value: undefined,
    id: uuidv4(),
  },
  {
    name: 'Auto',
    value: TypeOfInsurance.AUTO,
    id: uuidv4(),
  },
  {
    name: 'Fire',
    value: TypeOfInsurance.FIRE,
    id: uuidv4(),
  },
  {
    name: 'Flood',
    value: TypeOfInsurance.FLOOD,
    id: uuidv4(),
  },
];
