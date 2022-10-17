db.produtos.updateMany(
    { nome: "Big Mac" },
    { $unset: { curtidas: "" } },
  );
  db.produtos.find({
    nome: {
      $nin: ["Big Mac"],
    }, 
  }, { _id: false, nome: true, curtidas: true });