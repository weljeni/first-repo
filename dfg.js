// let elevator = {
//     currentFloor: 1,
//     minFloor: 1,
//     maxFloor: 16,
//     printFloor() {
//         console.log(this.currentFloor);
//     },
//     printError() {
//         console.log("Error!");
//     },
//     upOneFloor() {
//         if (
//             this.currentFloor >= this.minFloor &&
//             this.currentFloor < this.maxFloor
//         ) {
//             this.currentFloor++;
//             this.printFloor();
//         } else {
//             this.printError();
//         }
//     },
//     dowOneFloor() {
//         if (this.currentFloor > this.minFloor &&
//             this.currentFloor <= this.maxFloor) {
//             this.currentFloor--;
//             this.printFloor();
//         } else {
//             this.printError()
//         }
//     },
//     toFloor(floor) {
//         if (floor >= this.minFloor && floor <= this.maxFloor) {
//             while (this.currentFloor < floor) {
//                 this.upOneFloor()
//             }
//             while (this.currentFloor > floor) {
//                 this.dowOneFloor()
//             }
//         } else {
//             this.printError()
//         }

//     }
// };
// elevator.printFloor();
// elevator.upOneFloor();
// elevator.upOneFloor()
// elevator.dowOneFloor()
// elevator.toFloor(7)
// elevator.toFloor(4)
// elevator.toFloor(18)
// elevator.toFloor(0)


// function checkTask(fullName) {
//     let firstName = fullName[0];
//     let([, lastName]) = fullName;
//     console.log(firstName, lastName);
// }
// checkTask(['Albert Einstein'])
