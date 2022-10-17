db.produtos.deleteOne({
    curtidas: {
      $lt: 50
    }
  })
 db.produtos.find({}, { nome: true, _id: false};