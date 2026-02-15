export function generateRandomEmail() {
  const timestamp = Date.now();
  return `qa_${timestamp}@mail.com`;
}
