import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import './InteractiveSpaceMap.css';
import Select from 'react-select';
import React, { useState } from 'react';

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

  const InteractiveSpaceMap = () => {
    const [selectedCondition, setSelectedCondition] = useState('solarActivity');
  
    const options = [
      { value: 'solarActivity', label: 'Solar Activity' },
      { value: 'geomagneticStorms', label: 'Geomagnetic Storms' },
      { value: 'solarWind', label: 'Solar Wind' },
    ];
  
    const handleSelectChange = (selectedOption) => {
      setSelectedCondition(selectedOption.value);
    };
    const customStyles = {
      control: (provided, state) => ({
        ...provided,
        backgroundColor: 'white',
        borderColor: state.isFocused ? 'blue' : 'gray',
        boxShadow: state.isFocused ? '0 0 0 1px blue' : 'none',
        '&:hover': {
          borderColor: state.isFocused ? 'blue' : 'gray',
        },
      }),
    };
    return (
      <div>
        <Select 
        options={options} 
        onChange={handleSelectChange} 
        styles={customStyles} 
        value={options.find(option => option.value === selectedCondition)} />
        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography key={geo.rsmKey} geography={geo} style={determineStyle(selectedCondition, geo)} />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    );
  };
  
  const determineStyle = (condition, geo) => {
    // Example styling function based on selected condition
    switch(condition) {
      case 'solarActivity':
        return { default: { fill: "#ffeda0", stroke: "#feb24c" } };
      case 'geomagneticStorms':
        return { default: { fill: "#feb24c", stroke: "#f03b20" } };
      case 'solarWind':
        return { default: { fill: "#f03b20", stroke: "#bd0026" } };
      default:
        return { default: { fill: "#ffeda0", stroke: "#feb24c" } };
    }
  };
  export default InteractiveSpaceMap;