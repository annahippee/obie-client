import { useState } from 'react';
import { Carrier, StateCode, TypeOfInsurance } from '../../types';
import axios from 'axios';
import { API_URL } from '../../constants';
import { insuranceOptions, stateOptions } from './dropdownOptions';
import CarrierCard from './carrierCard';
import { mapUnknownToAxiosError } from '../../utils/errors';
import { mapStringToInsuranceType, mapStringToStateCode } from './mapping';

function CarriersView() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [carriers, setCarriers] = useState<Array<Carrier>>([]);
  const [state, setState] = useState<StateCode>();
  const [insuranceType, setInsuranceType] = useState<TypeOfInsurance>();

  const fetchData = async () => {
    setLoading(true);
    try {
      if (!state && !insuranceType) {
        setLoading(false);
        return;
      }
      const { data } = await axios.get<Array<Carrier>>(`${API_URL}/carriers`, {
        params: {
          stateCode: state,
          insuranceType: insuranceType,
        },
      });
      setCarriers(data);
    } catch (e) {
      const err = mapUnknownToAxiosError(e);
      setError(err.response?.data.message || 'Error fetching carriers.');
    }
    setLoading(false);
  };

  const handleOnClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (!state && !insuranceType) {
      setCarriers([]);
    }
    fetchData();
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const mapped = mapStringToStateCode(e.target.value);
    setState(mapped);
  };

  const handleInsuranceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const mapped = mapStringToInsuranceType(e.target.value);
    setInsuranceType(mapped);
  };

  return (
    <>
      <div className="filter-container">
        <select
          className="filter"
          value={insuranceType}
          onChange={handleInsuranceChange}
        >
          {insuranceOptions.map((item) => (
            <option key={item.id} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        <select className="filter" value={state} onChange={handleStateChange}>
          {stateOptions.map((item) => (
            <option key={item.id} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        <button
          disabled={!state && !insuranceType}
          className="filter"
          onClick={(e) => handleOnClick(e)}
        >
          Go!
        </button>
      </div>
      <div className="card-container">
        {loading ? (
          <>Loading...</>
        ) : (
          carriers.map((carrier) => (
            <CarrierCard key={carrier.id} carrier={carrier} />
          ))
        )}
      </div>
    </>
  );
}

export default CarriersView;
