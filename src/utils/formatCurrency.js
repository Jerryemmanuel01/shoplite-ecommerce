/**
 * Format a numeric amount into Nigerian Naira (NGN) currency string.
 * Example: 45000 -> ₦45,000
 * 
 * @param {number} amount - The price in Naira
 * @returns {string} Formatted currency string
 */
export function formatCurrency(amount) {
  if (typeof amount !== 'number') return '₦0';
  return `₦${amount.toLocaleString('en-NG')}`;
}
