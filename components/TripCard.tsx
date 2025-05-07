import { Link, useLocation } from 'react-router'; // Fixed import (should be 'react-router-dom')
import { getFirstWord , cn } from '~/lib/utils';
import { ChipListComponent, ChipsDirective, ChipDirective } from '@syncfusion/ej2-react-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-react-buttons/styles/material.css';

// Enable ripple effect (optional)
enableRipple(true);

interface TripCardProps {
    id: number | string;
    name: string;
    imageUrls: string[];
    itinerary?: { location: string }[];
    tags?: string[];
    travelStyle?: string;
    estimatedPrice?: string | number;
}

const TripCard = ({ id, name, imageUrls, itinerary, tags, travelStyle, estimatedPrice }: TripCardProps) => {
    const imageUrl = imageUrls?.[0] || '/default-image.jpg';
    const location = useLocation();
    
    return (
       
            <Link to={location.pathname === '/' || location.pathname.startsWith('/travel') ? `/travel/${id}` : `/trips/${id}`} className="trip-card">
                <img src={imageUrl} alt={name} className="trip-image" /> {/* Added alt text and className */}
                <article className='mb-4'>
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <figure className="flex items-center "> {/* Added flex for better alignment */}
                        <img src="/assets/icons/location-mark.svg" alt="location" className='size-4' />
                        <figcaption className="text-sm text-gray-600">
                            {itinerary?.[0]?.location || "Unknown Location"}
                        </figcaption>
                    </figure>
                </article>
                
                {tags && tags.length > 0 && ( // Only render chips if tags exist
                    <div className='mt-5 pl-[18px] pr-3.5 pb-5'>
                        <ChipListComponent id="travel-chip">
                            <ChipsDirective>
                                {tags.map((tag, index) => (
                                    <ChipDirective
                                        key={index}
                                        text={getFirstWord(tag)}
                                        cssClass={cn(index === 1 ? '!bg-pink-50 !text-pink-500': '!bg-success-50  !text-success-700')}
                                    />
                                ))}
                            </ChipsDirective>
                        </ChipListComponent>
                    </div>
                )}
                <article className="tripCard-pill">{estimatedPrice}</article>
            </Link>
        
    );
};

export default TripCard;