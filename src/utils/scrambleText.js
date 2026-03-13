const runScramble = (ref, targetText, chars, speed, flickerRate, delay = 0) => {
    let frame = 0;
    let frameId;

    // Pre-fill array with spaces so text width stays constant
    let outputArray = Array.from(targetText).map(() => ' ');

    const update = () => {
    let complete = 0;

    for (let i = 0; i < targetText.length; i++) {
        const start = i * speed;
        const lock = start + 20;

        if (frame >= lock) {
        outputArray[i] = targetText[i]; // lock letter
        complete++;
        } 
        else if (frame >= start) {
        const index = Math.floor((frame / flickerRate) + i) % chars.length;
        outputArray[i] = chars[index]; // scramble letter
        } 
        else {
        outputArray[i] = ' ';
        }
    }

    if (ref.current) ref.current.textContent = outputArray.join('');

    if (complete < targetText.length) {
        frame++;
        frameId = requestAnimationFrame(update);
    }
    };

    setTimeout(() => frameId = requestAnimationFrame(update), delay);

    return () => cancelAnimationFrame(frameId);
};

export default runScramble;