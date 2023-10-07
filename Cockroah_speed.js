//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(s) {
    // 1 km = 100,000 cm (since 1 km = 1000 meters and 1 meter = 100 cm)
    // 1 hour = 3600 seconds
    // Speed in cm/s = (s * 100000) / 3600
    const speedInCmPerSecond = (s * 100000) / 3600;
    
    // Round down to the nearest integer using Math.floor()
    const roundedSpeed = Math.floor(speedInCmPerSecond);
    
    return roundedSpeed;
    
  }