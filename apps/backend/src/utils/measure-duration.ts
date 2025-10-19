export const measureDuration = () => {
  let start: number;

  const startMeasurement = () => {
    start = performance.now();
  };
  const endMeasurement = () => {
    const duration = performance.now() - start;
    return duration;
  };
  return { startMeasurement, endMeasurement };
};
