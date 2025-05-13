"use client";

import { BillingType } from '@/utils/Enums';
import { calculatePrice } from '@/utils/FN';
import { useState } from 'react';
import Switcher from './Switcher';
import Options from './Options';
import Slider from './Slider';

export default function PricingCard() {
    const viewsCounts = [10, 50, 100, 500, 1000];
    const defaultIndex = viewsCounts.indexOf(100);
    const [pageViews, setPageViews] = useState<number>(viewsCounts[defaultIndex]);
    const [billingType, setBillingType] = useState<BillingType>(BillingType.MONTHLY);

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
            <div className="text-center mb-8">

                <h2 className="text-gray-500 uppercase text-sm font-semibold tracking-wider">
                    {pageViews === 1000 ? '1M' : `${pageViews}K`} PAGEVIEWS
                </h2>

                <Slider viewsCounts={viewsCounts} defaultIndex={defaultIndex} pageViews={pageViews} setPageViews={setPageViews} />

                <div className="flex items-center justify-center mb-6">
                    <span className="text-4xl font-bold text-gray-800">${calculatePrice({ pageViews, billingType })}</span>
                    <span className="ml-2 text-gray-500">/{billingType === BillingType.MONTHLY ? 'month' : 'year'}</span>
                </div>

                <Switcher billingType={billingType} setBillingType={setBillingType} />
            </div>

            <div className="border-t border-gray-200 pt-6 flex flex-col items-center">
                <Options />

                <button className="w-fit bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-full transition-colors duration-200">
                    Start my trial
                </button>

            </div>
        </div>
    );
}