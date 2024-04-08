export function getTimes(): string[] {
  let output: string[] = [];
  let row = "";
  let startTime: Date = new Date();
  startTime.setHours(9, 0, 0);
  let minute = 0;

  for (let index = 0; index < 5; index++) {
    let endTime = new Date(startTime);

    minute += 90;
    startTime.setHours(9, minute, 0);

    row =
      endTime.getHours() +
      ":" +
      endTime.getMinutes().toString().padEnd(2, "0") +
      " - " +
      startTime.getHours() +
      ":" +
      startTime.getMinutes().toString().padEnd(2, "0");
   
    minute += 15;

    startTime.setHours(9, minute, 0);

    output.push(row);
  }

  return output;
}
