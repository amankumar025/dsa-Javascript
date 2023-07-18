function areIsomorphic(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sToTMapping = new Map();
    const tToSMapping = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (
            (sToTMapping.has(charS) && sToTMapping.get(charS) !== charT) ||
            (tToSMapping.has(charT) && tToSMapping.get(charT) !== charS)
        ) {
            return false;
        }

        sToTMapping.set(charS, charT);
        tToSMapping.set(charT, charS);
    }

    return true;
}
console.log(areIsomorphic("egg", "add")); // Output: true

