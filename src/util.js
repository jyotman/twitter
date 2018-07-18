exports.splitMessage = (message) => {
    if (message.length <= 50)
        return [message];
    const words = message.split(' ');
    for (const word of words) {
        if (word.length >= 47) {
            throw new Error(`Word ${word} is too long`);
        }
    }

    const result = [];
    let counter = 1;
    let tweet = '1/x ';
    for (const word of words) {
        if (tweet.length + word.length > 50) {
            result.push(tweet);
            counter += 1;
            tweet = `${counter}/x `;
        }
        tweet += ` ${word}`;
    }
    result.push(tweet);

    return result.map(tweet => tweet.substring(0, 2) + counter + tweet.substring(4));
}