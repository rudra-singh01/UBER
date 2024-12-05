import {MapPin} from 'lucide-react';

const LocationSearchpanel = (props) => {
  
  const locations = [
    {id: 1, name: "b-145 , arjun park , najafgarh , new delhi"},
    {id: 2, name: "b-145 , arjun park , najafgarh , new delhi"},
    {id: 3, name: "c-123 , green valley , dwarka , new delhi"},
    {id: 4, name: "a-678 , sector 11 , rohini , new delhi"},
  ];


  return (
    <div>
        {locations.map((location) => (
            <div onClick={()=>{
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }} key={location.id} className="flex items-center justify-start gap-2 my-5 border-2 rounded-xl p-2 active:border-black">
                <MapPin/>
                <h4>{location.name}</h4>
            </div>
        ))}
    </div>
  )
}

export default LocationSearchpanel