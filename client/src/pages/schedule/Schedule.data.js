export const columns = [
  { render: d => d.game.name },
  { render: d => d.all.played },
  { render: d => d.all.win },
  { render: d => d.all.draw },
  { render: d => d.all.lose },
];
