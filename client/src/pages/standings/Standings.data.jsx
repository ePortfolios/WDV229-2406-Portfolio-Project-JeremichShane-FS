export const columns = [
  { header: "Rank", render: d => d.rank, width: "50px" },
  {
    header: "Club",
    render: d => (
      <div className="standings__club-container">
        <img src={d.team.logo} alt={`${d.team.name} logo`} className="standings__logo" />
        <span>{d.team.name}</span>
      </div>
    ),
    width: "max-content",
    textAlign: "left",
  },
  { header: "Points", render: d => d.points, width: "70px" },
  { header: "GP", render: d => d.all.played, width: "50px" },
  { header: "W", render: d => d.all.win, width: "50px" },
  { header: "L", render: d => d.all.lose, width: "50px" },
  { header: "T", render: d => d.all.draw, width: "50px" },
  { header: "GF", render: d => d.all.goals.for, width: "50px" },
  { header: "GA", render: d => d.all.goals.against, width: "50px" },
  { header: "GD", render: d => d.goalsDiff, width: "50px" },
  { header: "Home", render: d => `${d.home.win}-${d.home.lose}-${d.home.draw}`, width: "100px" },
  { header: "Away", render: d => `${d.away.win}-${d.away.lose}-${d.away.draw}`, width: "100px" },
];
