import React from 'react';
import Car from '../utilities/Car';
import Car2 from '../utilities/Car2';

class Home extends React.Component {
  componentDidMount() {
    this.testCar();
    this.testCar2();
  }

  testCar() {
    const car1 = new Car('Tesla', 'Model 3');

    console.log(car1 instanceof Car); //=>true
    console.log(car1.brand); //=>undefined
    console.log(car1.model); //=>undefined
    console.log(car1.getBrand()); //=>'Tesla'
    console.log(car1.getModel()); //=>'Model 3'

    //Propery check also fails - no detection. That is exactly what we want.
    console.log(Object.keys(car1)); //=>[]
    console.log('#brand' in car1); //=> false
    console.log(car1.hasOwnProperty('#brand')); //=>false

    console.log('****************************************************************************');
  }

  testCar2() {
    const car2 = new Car2('Tesla', 'Model 3');

    console.log(car2 instanceof Car2); //=>true

    console.log(car2.brand); //=>'Tesla'
    console.log(car2.model); //=>'Model 3'

    car2.brand = 'Ford';
    car2.model = 'GT';

    console.log(car2.brand); //=>'Ford'
    console.log(car2.model); //=> 'GT'
  }

  render() {
    return (
      <>
        <h1>WELCOME HOME</h1>
      </>
    );
  }
}

export default Home;

