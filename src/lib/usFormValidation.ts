/**
 * US Region Form Validation Utilities (Publish A Book - US Desk)
 */

// Sanitizes phone input down to digits only
export function cleanDigits(phone: string): string {
  return phone.replace(/\D/g, "");
}

// Formats 10-digit or 11-digit US phone number dynamically as typed
export function formatUSPhoneNumber(value: string): string {
  let digits = cleanDigits(value);

  // Strip leading 1 if user typed 11 digits starting with 1
  if (digits.length === 11 && digits.startsWith("1")) {
    digits = digits.substring(1);
  }

  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
}

// Validates whether input is a valid 10-digit US phone number
export function validateUSPhoneNumber(phone: string): { isValid: boolean; message?: string } {
  if (!phone || !phone.trim()) {
    return { isValid: false, message: "Please enter your phone number." };
  }

  let digits = cleanDigits(phone);
  if (digits.length === 11 && digits.startsWith("1")) {
    digits = digits.substring(1);
  }

  if (digits.length !== 10) {
    return {
      isValid: false,
      message: "Please enter a valid 10-digit US phone number (e.g. (833) 492-2918).",
    };
  }

  // Area code cannot start with 0 or 1 in standard US numbering (NANP)
  if (digits.startsWith("0") || digits.startsWith("1")) {
    return {
      isValid: false,
      message: "US area codes cannot start with 0 or 1. Please enter a valid US phone number.",
    };
  }

  // Reject repeating test digits like 0000000000 or 9999999999
  if (/^(\d)\1{9}$/.test(digits)) {
    return {
      isValid: false,
      message: "Please enter a real, valid US phone number.",
    };
  }

  return { isValid: true };
}

// Validates strict email format with valid domain TLD
export function validateStrictEmail(email: string): { isValid: boolean; message?: string } {
  if (!email || !email.trim()) {
    return { isValid: false, message: "Please enter your email address." };
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email.trim())) {
    return {
      isValid: false,
      message: "Please enter a valid email address ending in .com, .org, etc. (e.g. author@domain.com)",
    };
  }

  return { isValid: true };
}

// Validates Full Name
export function validateFullName(name: string): { isValid: boolean; message?: string } {
  if (!name || !name.trim()) {
    return { isValid: false, message: "Please enter your full name." };
  }

  const trimmed = name.trim();
  if (trimmed.length < 2) {
    return { isValid: false, message: "Name must be at least 2 characters long." };
  }

  if (/^\d+$/.test(trimmed)) {
    return { isValid: false, message: "Name cannot contain numbers only." };
  }

  return { isValid: true };
}
