import React from "react";

const cityStateMap = {
 "Visakhapatnam": "Andhra Pradesh",
  "Vijayawada": "Andhra Pradesh",
  "Guntur": "Andhra Pradesh",
  "Nellore": "Andhra Pradesh",
  "Tirupati": "Andhra Pradesh",

  // Arunachal Pradesh
  "Itanagar": "Arunachal Pradesh",
  "Tawang": "Arunachal Pradesh",
  "Ziro": "Arunachal Pradesh",
  "Pasighat": "Arunachal Pradesh",

  // Assam
  "Guwahati": "Assam",
  "Dibrugarh": "Assam",
  "Silchar": "Assam",
  "Jorhat": "Assam",

  // Bihar
  "Patna": "Bihar",
  "Gaya": "Bihar",
  "Bhagalpur": "Bihar",
  "Muzaffarpur": "Bihar",

  // Chhattisgarh
  "Raipur": "Chhattisgarh",
  "Bhilai": "Chhattisgarh",
  "Bilaspur": "Chhattisgarh",
  "Korba": "Chhattisgarh",

  // Goa
  "Panaji": "Goa",
  "Margao": "Goa",
  "Vasco da Gama": "Goa",
  "Mapusa": "Goa",

  // Gujarat
  "Ahmedabad": "Gujarat",
  "Surat": "Gujarat",
  "Vadodara": "Gujarat",
  "Rajkot": "Gujarat",

  // Haryana
  "Faridabad": "Haryana",
  "Gurugram": "Haryana",
  "Panipat": "Haryana",
  "Ambala": "Haryana",

  // Himachal Pradesh
  "Shimla": "Himachal Pradesh",
  "Manali": "Himachal Pradesh",
  "Dharamshala": "Himachal Pradesh",
  "Solan": "Himachal Pradesh",

  // Jharkhand
  "Ranchi": "Jharkhand",
  "Jamshedpur": "Jharkhand",
  "Dhanbad": "Jharkhand",
  "Bokaro": "Jharkhand",

  // Karnataka
  "Bengaluru": "Karnataka",
  "Mysuru": "Karnataka",
  "Mangalore": "Karnataka",
  "Hubli": "Karnataka",

  // Kerala
  "Thiruvananthapuram": "Kerala",
  "Kochi": "Kerala",
  "Kozhikode": "Kerala",
  "Thrissur": "Kerala",

  // Madhya Pradesh
  "Bhopal": "Madhya Pradesh",
  "Indore": "Madhya Pradesh",
  "Gwalior": "Madhya Pradesh",
  "Jabalpur": "Madhya Pradesh",

  // Maharashtra
  "Mumbai": "Maharashtra",
  "Pune": "Maharashtra",
  "Nagpur": "Maharashtra",
  "Nashik": "Maharashtra",

  // Manipur
  "Imphal": "Manipur",
  "Thoubal": "Manipur",
  "Churachandpur": "Manipur",

  // Meghalaya
  "Shillong": "Meghalaya",
  "Tura": "Meghalaya",
  "Nongpoh": "Meghalaya",

  // Mizoram
  "Aizawl": "Mizoram",
  "Lunglei": "Mizoram",
  "Champhai": "Mizoram",

  // Nagaland
  "Kohima": "Nagaland",
  "Dimapur": "Nagaland",
  "Mokokchung": "Nagaland",

  // Odisha
  "Bhubaneswar": "Odisha",
  "Cuttack": "Odisha",
  "Rourkela": "Odisha",
  "Puri": "Odisha",

  // Punjab
  "Ludhiana": "Punjab",
  "Amritsar": "Punjab",
  "Jalandhar": "Punjab",
  "Patiala": "Punjab",

  // Rajasthan
  "Jaipur": "Rajasthan",
  "Jodhpur": "Rajasthan",
  "Udaipur (Rajasthan)": "Rajasthan",
  "Kota": "Rajasthan",

  // Sikkim
  "Gangtok": "Sikkim",
  "Namchi": "Sikkim",
  "Gyalshing": "Sikkim",

  // Tamil Nadu
  "Chennai": "Tamil Nadu",
  "Coimbatore": "Tamil Nadu",
  "Madurai": "Tamil Nadu",
  "Tiruchirappalli": "Tamil Nadu",

  // Telangana
  "Hyderabad": "Telangana",
  "Warangal": "Telangana",
  "Nizamabad": "Telangana",
  "Karimnagar": "Telangana",

  // Tripura
  "Agartala": "Tripura",
  "Udaipur (Tripura)": "Tripura",
  "Dharmanagar": "Tripura",

  // Uttar Pradesh
  "Lucknow": "Uttar Pradesh",
  "Kanpur": "Uttar Pradesh",
  "Varanasi": "Uttar Pradesh",
  "Agra": "Uttar Pradesh",

  // Uttarakhand
  "Dehradun": "Uttarakhand",
  "Haridwar": "Uttarakhand",
  "Nainital": "Uttarakhand",
  "Rishikesh": "Uttarakhand",

  // West Bengal
  "Kolkata": "West Bengal",
  "Asansol": "West Bengal",
  "Siliguri": "West Bengal",
  "Durgapur": "West Bengal",

  // Union Territories
  "Delhi": "Delhi",
  "Chandigarh": "Chandigarh",
  "Puducherry": "Puducherry",
  "Port Blair": "Andaman and Nicobar Islands",
  "Kavaratti": "Lakshadweep",
  "Leh": "Ladakh",
  "Kargil": "Ladakh",
  "Daman": "Dadra and Nagar Haveli and Daman and Diu",
  "Silvassa": "Dadra and Nagar Haveli and Daman and Diu"
};

const CitiesDropdown = ({ state, value, onChange }) => {
  const cities = Object.entries(cityStateMap)
    .filter(([, cityState]) => cityState === state)
    .map(([city]) => city)
    .sort((a, b) => a.localeCompare(b)); // sort cities alphabetically

  return (
    <select className="select-input" name="city" value={value} onChange={onChange} disabled={!state}>
      <option value="">Select City</option>
      {cities.map((city, index) => (
        <option key={index} value={city}>{city}</option>
      ))}
    </select>
  );
};


export default CitiesDropdown;
