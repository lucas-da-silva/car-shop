import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import CustomError from '../utils/CustomError';

class CarService {
  private carODM: CarODM;

  constructor() {
    this.carODM = new CarODM();
  }

  private createCarDomain(car: ICar): Car {
    return new Car(car);
  }

  public async register(data: ICar) {
    const newCar = await this.carODM.create(data);
    return this.createCarDomain(newCar);
  }

  public async getAllCars() {
    const cars = await this.carODM.find();
    return cars.map((car) => this.createCarDomain(car));
  }

  public async getByIdCar(id: string) {
    const car = await this.carODM.findById(id);
    if (!car) throw new CustomError(404, 'Car not found');
    return this.createCarDomain(car);
  }

  public async update(id: string, car: ICar) {
    const updatedCar = await this.carODM.update(id, car);
    if (!updatedCar) throw new CustomError(404, 'Car not found');
    return this.createCarDomain(updatedCar);
  } 
}

export default CarService;
