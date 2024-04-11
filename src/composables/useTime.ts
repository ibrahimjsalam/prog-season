export function getTimes(): string[] {
  const output: string[] = [];
  let startTime: Date = new Date();
  startTime.setHours(9, 0, 0);

  const options = { hour12: true };

  for (let index = 0; index < 5; index++) {
    const endTime = new Date(startTime.getTime() + (90 + 15) * 60000 * index);
    const startString = endTime
      .toLocaleTimeString("en-US", options)
      .replace(/:\d+\s+(PM|AM)/g, "");
    const endString = new Date(endTime.getTime() + 90 * 60000)
      .toLocaleTimeString("en-US", options)
      .replace(/:\d+\s+(PM|AM)/g, "");

    output.push(`${startString} - ${endString}`);
  }

  return output;
}
