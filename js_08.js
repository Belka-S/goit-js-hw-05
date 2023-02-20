// # Module 4 - Lesson 8 - Iterating Array Methods

// ## Collection of objects for all examples with cars

const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// ## ******************** Example 1 - Map method ********************

// Let the `getModels` function return an array of models (model field) of all cars.
// const getModels = cars => {};

// -------------------------------------------------------------------------------------------- // const getModels = cars => cars.map(({ model }) => model);

const getModels = cars => {};

// console.table(getModels(cars));

// ## ******************** Example 2 - Map method ********************

// Let the `makeCarsWithDiscount` function return a new array of objects with a changed
// value of the `price` property depending on the discount passed.
// const makeCarsWithDiscount = (cars, discount) => {};

// -------------------------------------------------------------------------------------------- // const makeCarsWithDiscount = (cars, discount) =>
// -------------------------------------------------------------------------------------------- //   cars.map(car => ({ ...car, price: car.price * (1 - discount) }));

const makeCarsWithDiscount = (cars, discount) => {};

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// ## ******************** Example 3 - Filter method ********************

// Let the `filterByPrice` function return an array of cars whose price is less
// than the value of the `threshold` parameter.
// const filterByPrice = (cars, threshold) => {};

// ------------------------------------------------------------------------------------------- // const filterByPrice = (cars, threshold) =>
// -------------------------------------------------------------------------------------------- //   cars.filter(({ price }) => price < threshold);

const filterByPrice = (cars, threshold) => {};

// ## ******************** Example 4 - Filter method ********************

// Let the `getCarsWithDiscount` function return an array of cars whose
// onSale property is true.
// const getCarsWithDiscount = cars => {};

// -------------------------------------------------------------------------------------------- // const getCarsWithDiscount = cars => cars.filter(({ onSale }) => onSale);

const getCarsWithDiscount = cars => {};

// console.table(getCarsWithDiscount(cars));

// ## ******************** Example 5 - Filter method ********************

// Let the `getCarsWithType` function return an array of cars whose type
// coincide with the value of the `type` parameter.
// const getCarsWithType = (cars, type) => {};

// -------------------------------------------------------------------------------------------- // const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

const getCarsWithType = (cars, type) => {};

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

// ## ******************** Example 6 - The find method ********************

// Let the `getCarsWithType` function return an array of cars whose type
// coincide with the value of the `model` parameter.
// const getCarByModel = (cars, model) => {};

// -------------------------------------------------------------------------------------------- // const getCarByModel = (cars, model) => cars.filter(car => car.model === model);

const getCarByModel = (cars, model) => {};

// console.table(getCarByModel(cars, 'F-150'));
// console.table(getCarByModel(cars, 'CX-9'));

// ## ******************** Example 7 - Sort method ********************

// Let the `sortByAscendingAmount` function return a new array of cars
// sorted in ascending order by the value of the `amount` property.
// const sortByAscendingAmount = cars => {};

// -------------------------------------------------------------------------------------------- // console.table(sortByAscendingAmount(cars));

const sortByAscendingAmount = cars => {};

// console.table(sortByAscendingAmount(cars));

// ## ******************** Example 8 - Sort method ********************

// Let the `sortByDescendingPrice` function return a new array of cars
// sorted in descending order by the value of the `price` property.

// const sortByDescendingPrice = cars => {};

// -------------------------------------------------------------------------------------------- // const sortByDescendingPrice = cars => [...cars].sort((a, b) => b.price - a.price);

const sortByDescendingPrice = cars => {};

// console.table(sortByDescendingPrice(cars));

// ## ******************** Example 9 - Sort method ********************

// Let the `sortByModel` function return a new array of cars sorted
// by model name in alphabetical and reverse alphabetical order,
// depending on the value of the `order` parameter.
// const sortByModel = (cars, order) => {};

// -------------------------------------------------------------------------------------------- // const sortByModel = (cars, order) => [...cars].sort((a, b) =>
// -------------------------------------------------------------------------------------------- //     order === 'asc' ? a.model.localeCompare(b.model) : b.model.localeCompare(a.model));

const sortByModel = {};

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// ## ******************** Example 10 - Reduce method ********************

// Let the `getTotalAmount` function return the object whith total number of cars
// of producer (the value  of the `make` and `amount` properties).

// const getTotalAmount = cars => {};

// ------------------------------------------------------------------------------------------- // const getTotalAmount = cars => cars.reduce(
// ------------------------------------------------------------------------------------------- //     (acc, { make, amount }) => {!acc[make] ? (acc[make] = amount) : (acc[make] += amount);
// ------------------------------------------------------------------------------------------- //       acc['total'] += amount; return acc; }, { total: 0 } );

const getTotalAmount = cars => {};

// console.table(getTotalAmount(cars));

// ## ******************** Example 11 - Method chains ********************

// Let the `getAvailableCarNames` function return an array of car models, but
// only those that are currently for sale.

// const getModelsOnSale = cars => {};

// -------------------------------------------------------------------------------------------- // const getModelsOnSale = cars => cars.filter(car => car.onSale).map(car => car);

const getModelsOnSale = {};

// console.table(getModelsOnSale(cars));

// ## ******************** Example 12 - Method chains ********************

// Let the `getSortedCarsOnSale` function return an array of cars for sale
// (onSale property), sorted by price ascending.

// const getSortedCarsOnSale = cars => {};

// -------------------------------------------------------------------------------------------- // const getSortedCarsOnSale = cars => cars.filter(car => car.onSale).map(car => car).sort((a, b) => a.price - b.price);

const getSortedCarsOnSale = cars => {};

// console.table(getSortedCarsOnSale(cars));
