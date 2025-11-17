type richVehicle = {
    bike : string,
    car : string,
    ship : string
}


type checkVehicle<T> = T extends keyof richVehicle ? true : false


type HasBike = checkVehicle<"car">


