import { BillingType } from '@/utils/Enums'

const Switcher = ({ billingType, setBillingType }: { billingType: BillingType, setBillingType: React.Dispatch<React.SetStateAction<BillingType>> }) => {
    return (
        <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm ${billingType === BillingType.MONTHLY ? 'text-gray-800' : 'text-gray-400'}`}>
                Monthly Billing
            </span>

            <button className="w-12 h-6 bg-blue-500 rounded-full p-1 transition-colors duration-300 focus:outline-none"
                onClick={() => setBillingType(billingType === BillingType.MONTHLY ? BillingType.YEARLY : BillingType.MONTHLY)}
            >
                <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${billingType === BillingType.YEARLY ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>

            <span className={`text-sm ${billingType === BillingType.YEARLY ? 'text-gray-800' : 'text-gray-400'}`}>
                Yearly Billing <span className="text-orange-600 bg-orange-100 rounded-xl p-1 text-[8px]">-25%</span>
            </span>
        </div>
    )
}

export default Switcher