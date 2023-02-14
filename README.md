# Project Car Shop

Api was developed using TypeScript following the principles of Programming Oriented Object (POO), Behavior Driven Development (BDD) and using ODM Mongoose to perform the CRUD of a vehicle carrier.

Unit tests were also developed for all layers and integration tests to validate the operation of the API.
## Running locally

Clone the project

```bash
  git clone git@github.com:lucas-da-silva/project-car-shop.git
```

Enter the project directory

```bash
  cd project-car-shop
```

Upload containers ([docker-compose](https://docs.docker.com/compose/install/) is required)

```bash
docker-compose up -d
```

Enter the `car_shop` container


```bash
docker exec -it car_shop bash
```

Install the dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Running the tests

Inside the `car_shop` container, run the following command

```bash
  npm run test
```


## API documentation

### Register a new car

```http
  POST /cars
```

Request **body** parameters:

| Parameter  | Type      | Description                                       |
| :--------- | :-------- | :------------------------------------------------ |
| `model`    | `string`  | **Mandatory**. Vehicle model                      |
| `year`     | `number`  | **Mandatory**. Year of manufacture of the vehicle |
| `color`    | `string`  | **Mandatory**. Vehicle main color                 |
| `status`   | `boolean` | **Optional**. Vehicle may or may not be purchased |
| `buyValue` | `number`  | **Mandatory**. Vehicle purchase price             |
| `doorsQty` | `number`  | **Mandatory**. Number of doors on a car           |
| `seatsQty` | `number`  | **Mandatory**. Number of seats in a car           |

### List all cars

```http
  GET /cars
```

### List a car

```http
  GET /cars/${id}
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `id`      | `string` | **Mandatory**. ID of the car you want |

### Update a car

```http
  PUT /cars/${id}
```

| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `id`      | `string` | **Mandatory**. Car ID you want to change |

Request **body** parameters:

| Parameter  | Type      | Description                                       |
| :--------- | :-------- | :------------------------------------------------ |
| `model`    | `string`  | **Mandatory**. Vehicle model                      |
| `year`     | `number`  | **Mandatory**. Year of manufacture of the vehicle |
| `color`    | `string`  | **Mandatory**. Vehicle main color                 |
| `status`   | `boolean` | **Optional**. Vehicle may or may not be purchased |
| `buyValue` | `number`  | **Mandatory**. Vehicle purchase price             |
| `doorsQty` | `number`  | **Mandatory**. Number of doors on a car           |
| `seatsQty` | `number`  | **Mandatory**. Number of seats in a car           |

### Delete a car

```http
  DELETE /cars/${id}
```

| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `id`      | `string` | **Mandatory**. Car ID you want to delete |

### Register a new motorcycle

```http
  POST /motorcycles
```

Request **body** parameters:

| Parameter        | Type      | Description                                                                 |
| :--------------- | :-------- | :-------------------------------------------------------------------------- |
| `model`          | `string`  | **Mandatory**. Vehicle model                                                |
| `year`           | `number`  | **Mandatory**. Year of manufacture of the vehicle                           |
| `color`          | `string`  | **Mandatory**. Vehicle main color                                           |
| `status`         | `boolean` | **Optional**. Vehicle may or may not be purchased                           |
| `buyValue`       | `number`  | **Mandatory**. Vehicle purchase price                                       |
| `category`       | `number`  | **Mandatory**. Motorcycle category (options: `Street`, `Custom` or `Trail`) |
| `engineCapacity` | `number`  | **Mandatory**. Engine capacity                                              |

### List all motorcycles

```http
  GET /motorcycles
```

### List a motorcycles

```http
  GET /motorcycles/${id}
```

| Parameter | Type     | Description                                   |
| :-------- | :------- | :-------------------------------------------- |
| `id`      | `string` | **Mandatory**. ID of the motorcycles you want |


### Update a motorcycle

```http
  PUT /motorcycle/${id}
```

| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `id`      | `string` | **Mandatory**. Motorcycle ID you want to change |

Request **body** parameters:

| Parameter        | Type      | Description                                                                 |
| :--------------- | :-------- | :-------------------------------------------------------------------------- |
| `model`          | `string`  | **Mandatory**. Vehicle model                                                |
| `year`           | `number`  | **Mandatory**. Year of manufacture of the vehicle                           |
| `color`          | `string`  | **Mandatory**. Vehicle main color                                           |
| `status`         | `boolean` | **Optional**. Vehicle may or may not be purchased                           |
| `buyValue`       | `number`  | **Mandatory**. Vehicle purchase price                                       |
| `category`       | `number`  | **Mandatory**. Motorcycle category (options: `Street`, `Custom` or `Trail`) |
| `engineCapacity` | `number`  | **Mandatory**. Engine capacity                                              |

### Delete a motorcycle

```http
  DELETE /motorcycle/${id}
```

| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `id`      | `string` | **Mandatory**. Motorcycle ID you want to delete |

## Stack used

**Database:** 
    ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

**Back-end:** 
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white) ![Chai](https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white) 
- Mongoose and Sinon

