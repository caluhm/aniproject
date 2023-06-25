export default function calcSeason(month: number) {
    // Adjusting the month value to match the desired format
    const adjustedMonth = month + 1;
  
    if (adjustedMonth === 12 || adjustedMonth === 1 || adjustedMonth === 2) {
      return "WINTER";
    } else if (adjustedMonth >= 3 && adjustedMonth <= 5) {
      return "SPRING";
    } else if (adjustedMonth >= 6 && adjustedMonth <= 8) {
      return "SUMMER";
    } else if (adjustedMonth >= 9 && adjustedMonth <= 11) {
      return "FALL";
    }
  }