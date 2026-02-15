export function generateRandomEmail() {
  const timestamp = Date.now();
  return `qa_${timestamp}@mail.com`;
}


export function generateRandomLastName(prefix = 'QA') {
  return `${prefix}_${Math.floor(Math.random() * 1000)}`;
}
