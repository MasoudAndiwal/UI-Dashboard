import { Link } from 'react-router';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Chip } from 'primereact/chip';
import { getFirstWord } from '~/lib/utils';
        
interface TripCardProps {
    id: number | string;
    name: string;
    imageUrls: string[];
    itinerary?: { location: string }[];
    tags?: string[];
    travelStyle?: string;
    estimatedPrice?: string | number;
}

const TripCard = ({ id, name, imageUrls, itinerary, tags, travelStyle, estimatedPrice }: TripCardProps ) => {
    const imageUrl = imageUrls?.[0] || '/default-image.jpg'; // Fallback to a default image if imageUrls is undefined or empty

    return (
        <>
        <Link to={`/trips/${id}`} className="trip-card" >
            <img src={imageUrl} alt="" />
        </Link>
        <article className=''>
            <h2 className="text-lg font-semibold">{name}</h2>
            <figure className='flex items-center gap-2'>
                <img src="/assets/icons/location-mark.svg" alt="location" className='size-4' />
                <figcaption>
                    {itinerary?.[0]?.location || "Unknown Location"}
                </figcaption>
            </figure>
        </article>


        {/* <div className='mt-5 pl-[18px] pr-3.5 pb-5'>
            <ChipListComponent  id="travel-chip">
                {tags?.map((tag, index) => (
                    <Chip
                        key={index}
                        label={getFirstWord(tag)}
                        className={cn(index === 1 ? '!bg-pink-500 !text-pink-500' : 'bg-success-50 text-success-700')}
                    />
                ))}
            </ChipListComponent>
        </div> */}
        </>
    );
};

export default TripCard;