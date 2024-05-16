import React from "react";
import "./streets-filters.css";
import all_streets from "../../streets.json";

const StreetsFilters = ({ region, streetName, onSelect }) => {
  const streets = all_streets.content.filter((el) => {
    if (region.length) {
      return (
        region.includes(el.districtHy) &&
        (el.titleHy.toLowerCase().startsWith(streetName.toLowerCase()) ||
          el.titleEn.toLowerCase().startsWith(streetName.toLowerCase()))
      );
    } else {
      return (
        el.titleHy.toLowerCase().startsWith(streetName.toLowerCase()) ||
        el.titleEn.toLowerCase().startsWith(streetName.toLowerCase())
      );
    }
  });
  return (
    <div className="streets-panel">
      {streets.length ? (
        streets.map((el, index) => {
          return (
            <div
              className="street-name"
              key={index}
              onClick={() => onSelect(el.titleHy)}
            >
              <span>{el.titleHy}</span>
              <span style={{ color: "gray", marginLeft: "10px" }}>
                {el.districtHy}
              </span>
            </div>
          );
        })
      ) : (
        <div className="street-name">
          <p>Ոչինչ չի գտնվել</p>
        </div>
      )}
    </div>
  );
};

export default StreetsFilters;
