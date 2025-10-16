export function ConvertEnToFaNumber(str: string) {
  const faNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const enNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let result = str;
  enNumbers.forEach((en, idx) => {
    result = result.replace(new RegExp(en, "g"), faNumbers[idx]);
  });
  return result;
}
