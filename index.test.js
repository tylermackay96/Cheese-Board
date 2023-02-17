const { User, Cheese, Board } = require("./models");
const sequelize = require("./connection.js");

// User test - Tests if we can create, modify and delete 

describe("User Model", () => {
  beforeAll(async () => {
    await sequelize.sync();
  });

  afterEach(async () => {
    await User.destroy({ where: {} });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it("should create a new user", async () => {
    const user = await User.create({ name: "John Doe", email: "johndoe@example.com" });
    expect(user.id).toBe(1);
    expect(user.name).toBe("John Doe");
    expect(user.email).toBe("johndoe@example.com");
  });

  it("should retrieve a user by email", async () => {
    await User.create({ name: "John Doe", email: "johndoe@example.com" });
    const user = await User.findOne({ where: { email: "johndoe@example.com" } });
    expect(user.name).toBe("John Doe");
  });

  it("should update a user's name", async () => {
    const user = await User.create({ name: "John Doe", email: "johndoe@example.com" });
    await user.update({ name: "Jane Doe" });
    expect(user.name).toBe("Jane Doe");
  });

  it("should delete a user", async () => {
    const user = await User.create({ name: "John Doe", email: "johndoe@example.com" });
    await user.destroy();
    const count = await User.count();
    expect(count).toBe(0);
  });
});

// Tests for Cheese - Tests if we can create, modify and delete 

describe("Cheese Model", () => {
  beforeAll(async () => {
    await sequelize.sync();
  });

  afterEach(async () => {
    await Cheese.destroy({ where: {} });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it("should create a new cheese", async () => {
    const cheese = await Cheese.create({ title: "Cheddar", description: "A hard, sharp-tasting cheese." });
    expect(cheese.id).toBe(1);
    expect(cheese.title).toBe("Cheddar");
    expect(cheese.description).toBe("A hard, sharp-tasting cheese.");
  });

  it("should retrieve a cheese by title", async () => {
    await Cheese.create({ title: "Cheddar", description: "A hard, sharp-tasting cheese." });
    const cheese = await Cheese.findOne({ where: { title: "Cheddar" } });
    expect(cheese.description).toBe("A hard, sharp-tasting cheese.");
  });

  it("should update a cheese's description", async () => {
    const cheese = await Cheese.create({ title: "Cheddar", description: "A hard, sharp-tasting cheese." });
    await cheese.update({ description: "A classic English cheese with a tangy, savory flavor." });
    expect(cheese.description).toBe("A classic English cheese with a tangy, savory flavor.");
  });

  it("should delete a cheese", async () => {
    const cheese = await Cheese.create({ title: "Cheddar", description: "A hard, sharp-tasting cheese." });
    await cheese.destroy();
    const count = await Cheese.count();
    expect(count).toBe(0);
  });
});

// Tests for Board - Testing for creation, modification and deletion

describe("Board Model", () => {
  beforeAll(async () => {
    await sequelize.sync();
  });

  afterEach(async () => {
    await Board.destroy({ where: {} });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it("should create a new cheese board", async () => {
    const board = await Board.create({ type: "Cheese Board", description: "A wooden board used for serving cheese and crackers.", rating: 4 });
    expect(board.id).toBe(1);
    expect(board.type).toBe("Cheese Board");
    expect(board.description).toBe("A wooden board used for serving cheese and crackers.");
    expect(board.rating).toBe(4);
  });

  it("should retrieve a cheese board by type", async () => {
    await Board.create({ type: "Cheese Board", description: "A wooden board used for serving cheese and crackers.", rating: 4 });
    const board = await Board.findOne({ where: { type: "Cheese Board" } });
    expect(board.description).toBe("A wooden board used for serving cheese and crackers.");
  });

  it("should update a cheese board's rating", async () => {
    const board = await Board.create({ type: "Cheese Board", description: "A wooden board used for serving cheese and crackers.", rating: 4 });
    await board.update({ rating: 5 });
    expect(board.rating).toBe(5);
  });

  it("should delete a cheese board", async () => {
    const board = await Board.create({ type: "Cheese Board", description: "A wooden board used for serving cheese and crackers.", rating: 4 });
    await board.destroy();
    const count = await Board.count();
    expect(count).toBe(0);
  });
});
