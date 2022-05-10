function getUmbrella(isRaining) {
    // Variables declared with let and const are only available within the block they're declared
    let x = 0;
    let y = 0;


    if (isRaining) {
        let raining = 'Take Umbrella';
    }
    else {
        let dry = 'The Umbrella but for the sun';
        console.log(raining);
    }
}

getUmbrella(false); // gives an error, because raining does not exist in the block 