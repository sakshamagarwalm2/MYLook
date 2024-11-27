import { useEffect, useState } from 'react';
import { databases, DATABASE_ID, TIMELINE_COLLECTION_ID } from '../../../../config.js';
import { Query } from 'node-appwrite';

const Timeline = () => {
  const [items, setTimeline] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        TIMELINE_COLLECTION_ID,
        [
          Query.orderDesc('$createdAt') // Sort by creation time, newest first
        ]
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
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical md:pr-14 md:pl-14 pr-3">
        {items.map((item, index) => (
          <li key={item.$id || index}>
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
              <div className="text-sm itali">{item.year}</div>
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