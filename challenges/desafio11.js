db.produtos.find(
    {
      nome: { $nin: [ "Big Mac", "McChicken"]}
    },
    {
      nome: true,
      curtidas: true,
      vendidos: true,
  });