const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockApi = {
  async getChargeValues() {
    await delay(500);
    return [
      { value: 10000, canBeAmazing: false },
      { value: 20000, canBeAmazing: false },
      { value: 50000, canBeAmazing: true },
      { value: 100000, canBeAmazing: true },
      { value: 200000, canBeAmazing: true },
    ];
  },

  async processPayment(data: any) {
    await delay(1000);
    return {
      success: true,
      transactionId: `transaction_${Date.now()}`,
      message: "با موفقیت خریداری شد",
    };
  },
};
