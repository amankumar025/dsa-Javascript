function checkStraightLine(coordinates) {
    if (coordinates.length < 3) {
        return true; // Any two points always form a straight line
    }

    const calculateSlope = (p1, p2) => {
        if (p2[0] - p1[0] === 0) {
            return Infinity; // Vertical line with undefined slope
        }
        return (p2[1] - p1[1]) / (p2[0] - p1[0]);
    };

    const initialSlope = calculateSlope(coordinates[0], coordinates[1]);

    for (let i = 2; i < coordinates.length; i++) {
        const currentSlope = calculateSlope(coordinates[i - 1], coordinates[i]);
        if (currentSlope !== initialSlope) {
            return false;
        }
    }

    return true;
}

console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]])); // Output: true
console.log(checkStraightLine([[1,2],[2,3],[4,5]])); // Output: true
console.log(checkStraightLine([[1,2],[2,3],[4,6]])); // Output: false
