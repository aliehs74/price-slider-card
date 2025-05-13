const Slider = ({ viewsCounts, defaultIndex, pageViews, setPageViews }: { viewsCounts: number[], defaultIndex: number, pageViews: number, setPageViews: React.Dispatch<React.SetStateAction<number>> }) => {

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setPageViews(viewsCounts[value]);
    };

    const getSliderFillPercentage = () => {
        const currentIndex = viewsCounts.indexOf(pageViews);
        return (currentIndex / (viewsCounts.length - 1)) * 100;
    };

    return (
        <div className="my-6 relative">
            <input
                type="range"
                min="0"
                max={viewsCounts.length - 1}
                step="1"
                defaultValue={defaultIndex}
                onChange={handleSliderChange}
                className="w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer relative z-10"
                style={{ background: `linear-gradient(to right, #3b82f6 ${getSliderFillPercentage()}%, #e0f2fe ${getSliderFillPercentage()}%)` }}
            />

            <div className="flex justify-between mt-2 px-1">
                {viewsCounts.map((view, index) => (
                    <div key={index} className="relative">

                        <div className={`w-2 h-2 mx-auto ${pageViews === view ? 'bg-blue-500' : 'bg-gray-300'} rounded-full`} />

                        <span className={`absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs ${pageViews === view ? 'text-blue-500 font-bold' : 'text-gray-400'}`}                        >
                            {view === 1000 ? '1M' : `${view}K`}
                        </span>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slider