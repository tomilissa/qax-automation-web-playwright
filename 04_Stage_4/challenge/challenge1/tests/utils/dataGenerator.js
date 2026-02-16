export function generateRandomUserName() {
  const timestamp = Date.now();
  return `qa_${timestamp}`;
}
