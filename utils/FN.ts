import { BillingType } from "./Enums";

export const calculatePrice = ({ pageViews, billingType }: { pageViews: number, billingType: BillingType }) => {
    const basePrice = 12;
    let price = basePrice * (pageViews / 100);

    if (billingType === BillingType.YEARLY)
        price = price * 0.75 * 12;

    return price.toFixed(2);
};
