import { useEffect, useState } from 'react'
import { databases, DATABASE_ID, TIMELINE_COLLECTION_ID} from '../../../../config.js'

const Timeline = () => {
  const [items, setTimeline] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        TIMELINE_COLLECTION_ID,
        // You might want to add queries or other options here
      );
      
      setTimeline(response.documents);
      setError(null);
    } catch (err) {
      console.error('Error fetching timeline:', err);
      setError(err.message);
    }
  }

  if (error) {
    return <div className="text-center text-red-500">Error loading timeline: {error}</div>
  }

  return (
    <div className="text-center w-full">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {items.map((item, index) => (
          <li key={item.$id || index}>  {/* Using $id if available for better key uniqueness */}
            {index === 0 && (
              <hr className="mr-2 ml-2 bg-Black" />
            )}
            <div className="timeline-middle mr-2 ml-2 w-5 h-5 bg-black rounded-full flex justify-center items-center m-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div
              className={`${
                index % 2 === 0
                  ? "timeline-start md:text-end"
                  : "timeline-end md:text-start"
              } mb-10`}
            >
              <time className="text-sm italic">{item.year}</time>
              <div className="text-lg font-black">{item.title}</div>
              <div className="">{item.description}</div>
            </div>
            <hr className="mr-2 ml-2 bg-black" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;