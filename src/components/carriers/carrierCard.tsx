import { Carrier } from '../../types/Carrier';

interface Props {
  carrier: Carrier;
}

function CarrierCard({ carrier }: Props) {
  return (
    <div key={carrier.name} className="card">
      <h3>{carrier.name}</h3>
    </div>
  );
}

export default CarrierCard;
