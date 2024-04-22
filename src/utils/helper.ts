function roundToDecimals(value: number, precision: number) {
  const pow = Math.pow(10, precision);
  return Math.floor(value * pow) / pow;
}
export function formatCurrency(value: number, precision = 0) {
  if (!value) {
    return 0;
  }

  if (precision === 0) {
    value = roundToDecimals(value, 0);
  }

  return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

// utils/numberFormatter.ts
export const formatNumber = (value: string): string => {
  const isNumeric = /^[0-9.,]+$/.test(value);

  if (isNumeric) {
    const numberValue = parseFloat(value.replace(/,/g, ""));
    return numberValue.toLocaleString("en-US", { minimumFractionDigits: 0 });
  } else if (value === "") {
    return "";
  } else {
    return value;
  }
};
