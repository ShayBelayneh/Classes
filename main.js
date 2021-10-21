class Car {
    numberOfWeels;
    samak;
    color;
    constructor(_numberOfWeels, _samak, _color) {
        this.numberOfWeels = _numberOfWeels;
        this.samak = _samak;
        this.color = _color;
    }
    getDetails() {
        return `number Of Weels : ${this.numberOfWeels},
        engine size: ${this.samak},
        car color: ${this.color}`
    }
    static getBiggerSamak(carsArray) {
        let biggestSamak = carsArray[0];
        carsArray.forEach((carItem) => {
            if (carItem.samak > biggestSamak.samak) biggestSamak = carItem;
        });
        // for (const carItem of carsArray) {
        //     if (carItem.samak > biggestSamak.samak) biggestSamak = carItem;
        // }
        return biggestSamak;
    }
}
class Truck extends Car {
    truckName;
    constructor(_numberOfWeels, _samak, _color, _truckName) {
        super(_numberOfWeels, _samak, _color);
        this.truckName = _truckName;
    }
    getDetails() {
        return `${super.getDetails()}, ${this.truckName}`
    }
}
class Bus extends Car {
    busName;
    constructor(_numberOfWeels, _samak, _color, _busName) {
        super(_numberOfWeels, _samak, _color);
        this.busName = _busName;
    }
    getDetails() {
        return `${super.getDetails()}, ${this.busName}`
    }
    getBusNameUppercase() {
        return this.busName.toUpperCase()
    }
    get nameUpperCase() {
        return this.getBusNameUppercase()
    }
}
saveCar.onclick = () => {
    switch (carTypeId.value) {
        case "bus":
            return new Bus(numOfWeelsId.value, samakId.value, colorId.value, "hq")
        case "truck":
            return new Truck(numOfWeelsId.value, samakId.value, colorId.value, "as")
        default:
            alert("no such car")
    }
}