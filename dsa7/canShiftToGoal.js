function canShiftToGoal(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }

    const concatenated = s + s;
    return concatenated.includes(goal);
}

console.log(canShiftToGoal("abcde", "cdeab")); // Output: true
console.log(canShiftToGoal("abcde", "abced")); // Output: false
