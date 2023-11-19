import React from 'react';
import './MissionList.css';

function MissionList({ missions }) {
    return (
        <div className="mission-list">
            {missions.map(mission => (
                <div key={mission.id} className="mission">
                    <h3>{mission.name}</h3>
                    {/* Additional mission details */}
                </div>
            ))}
        </div>
    );
}

export default MissionList;
