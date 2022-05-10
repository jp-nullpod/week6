function getUmbrella(isRaining) {
    // before the function is executed, all variables are joisted to the top of the function scope.
    //var raining, dry;
    if (isRaining) {
        var raining = 'Take Umbrella';
    }
    else {
        var dry = 'The Umbrella but for the sun';
        console.log(raining);
    }
}

getUmbrella(false); //undefined