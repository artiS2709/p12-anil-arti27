//Need to test this program
class Calculator {

    //add two numbers
    add(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            return { message: "Please enter valid number." }
        }
        return (num1 + num2)
    }

    //subtract two numbers
    subtract(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            return { message: "Please enter valid number." }
        }

        return (num1 - num2)
    }

    //multiply two numbers
    multiply(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            return { message: "Please enter valid number." }
        }

        return (num1 * num2)
    }

    //divide two numbers
    divide(num1, num2) {

        if (isNaN(num1) || isNaN(num2)) {
            return { message: "Please enter valid number." }
        }

        return (num1 / num2)
    }
}

//extending Calculator class
class ScientificCalculator extends Calculator {

    //squaring the number
    square(num) {
        return (num * num)
    }

    //cube of the number
    cube(num) {
        return (num * num * num)
    }

    power(num, power) {

        if (isNaN(num) || isNaN(power)) {
            return { message: "Please enter valid number." }
        }

        return (Math.pow(num, power))
    }

    multiplyByTwo(num) {
        return num * 2
    }

    powerOfThree(num) {

        if (isNaN(num)) {
            return { message: "Please enter valid number." }
        }

        return (Math.pow(num, 3))

    }
}

const obj = new ScientificCalculator();

//call method to invoke add
console.log(obj.add.call(this, 10, 5))

//apply method to invoke subtract
console.log(obj.subtract.apply(this, [12, 1]))


//bind method to invoke multiplyByTwo
const multiplyByTwoFunc = obj.multiplyByTwo.bind()
console.log(multiplyByTwoFunc(5))

//bind method to invoke powerOfThree
const powerOfThreeFunc = obj.powerOfThree.bind()
console.log(powerOfThreeFunc(2))