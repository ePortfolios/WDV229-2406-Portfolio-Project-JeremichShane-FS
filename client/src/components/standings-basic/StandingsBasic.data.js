export const columns = [
  { header: "Team", render: d => d.team.name },
  { header: "GP", render: d => d.all.played },
  { header: "W", render: d => d.all.win },
  { header: "D", render: d => d.all.draw },
  { header: "L", render: d => d.all.lose },
  { header: "GD", render: d => (d.goalsDiff > 0 ? `+${d.goalsDiff}` : d.goalsDiff) },
  { header: "Pts", render: d => d.points },
];
