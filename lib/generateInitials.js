export function generateInitials(name) {
    const words = name.split(' ');
 
    let firstInital = words[0][0].toUpperCase();
    let secondInitial = '';

    if (words.length > 1) {
        secondInitial = words[1][0].toUpperCase()
    }
    return firstInital + secondInitial
}