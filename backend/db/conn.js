const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://luizmazzinghy:EZRNgnxwtNq3bIsF@cluster0.payicyk.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Conectado ao banco");
  } catch (error) {
    console.log(`Erro: ${error} `);
  }
}

module.exports = main;
