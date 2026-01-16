export function validateEmail(email: string): boolean {
  if (email.includes(' ')) {
    return false;
  }

  const atCount = (email.match(/@/g) || []).length;
  if (atCount !== 1) {
    return false;
  }

  const parts = email.split('@');
  const localPart = parts[0];
  const domain = parts[1];

  if (!localPart || localPart.length === 0) {
    return false;
  }

  if (!domain || domain.length === 0) {
    return false;
  }

  if (!domain.includes('.')) {
    return false;
  }

  if (domain.endsWith('.')) {
    return false;
  }

  return true;
}