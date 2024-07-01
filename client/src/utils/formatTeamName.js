// Mapping of full team names to their abbreviations
const teamNameMap = {
  "Atlanta United FC": "ATL",
  "Chicago Fire": "CHI",
  "Colorado Rapids": "COL",
  "Columbus Crew": "CLB",
  "DC United": "DC",
  "FC Cincinnati": "CIN",
  "FC Dallas": "DAL",
  "Houston Dynamo": "HOU",
  "Inter Miami": "MIA",
  "Los Angeles FC": "LAFC",
  "Los Angeles Galaxy": "LA",
  "Minnesota United FC": "MIN",
  "Montreal Impact": "MTL",
  "Nashville SC": "NSH",
  "New England Revolution": "NE",
  "New York City FC": "NYC",
  "New York Red Bulls": "RBNY",
  "Orlando City SC": "ORL",
  "Philadelphia Union": "PHI",
  "Portland Timbers": "POR",
  "Real Salt Lake": "RSL",
  "San Jose Earthquakes": "SJ",
  "Seattle Sounders": "SEA",
  "Sporting Kansas City": "SKC",
  "St. Louis City": "STL",
  "Toronto FC": "TOR",
  "Vancouver Whitecaps": "VAN",
  Austin: "ATX",
  Charlotte: "CLT",
};

// Utility function to format team names using the teamNameMap
export const formatTeamName = name => {
  return teamNameMap[name] || name;
};
