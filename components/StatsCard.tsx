import React from 'react';
import  { calculateTrendPercentage, cn } from '~/lib/utils';

interface StatsCardProps {
    headerTitle: string;
    total: number;
    currentMonthCount: number;
    lastMonthCount: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ headerTitle, total, currentMonthCount, lastMonthCount }) => {
    const {trend , percentage} =  calculateTrendPercentage (currentMonthCount, lastMonthCount);
    const isDecrement = trend === "decrement";
    const isIncrement = trend === "increment";
    return (
        <article className="stats-card">
           <h3 className='text-base font-medium'>
            {headerTitle} 
           </h3>
            <div className='content'>
                <div className='flex flex-col  gap-2'>
                    <h2 className='text-4xl font-semibold'>
                        {total}
                    </h2>
                    <figure className='flex items-center gap-1'>
                        <img src={`/assets/icons/${isDecrement ? 'arrow-down-red.svg' : 'arrow-up-green.svg'}`} alt="arrow" />
                        <figure className={
                            cn(`text-sm font-medium`, isDecrement ? 'text-red-500' : 'text-success-700')
                        }>
                            {Math.round(percentage)}%
                        </figure>
                    </figure>
                    <p className='text-sm font-medium text-gray-100 truncate'> vs last month</p>
                </div>
            <img src={`/assets/icons/${isDecrement ? 'decrement.svg' : 'increment.svg'}`} alt="Trend graph" className='xl:w-32 w-full md:h-32 xl:h-full  ' />

            </div>
        </article>
    );
};

export default StatsCard;