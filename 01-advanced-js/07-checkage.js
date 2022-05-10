function checkAge(age) {
    let message = '';

    if (age < 18) {
        message = "Sorry, you're too young.";
    } else {
        message = "Yay! You're old enough!";
    }

    return message;
}

console.log(checkAge(25));