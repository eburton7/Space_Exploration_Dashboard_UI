import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import './GeomagneticStorm.css';

const GeomagneticStorm = () => {
    const [storms, setStorms] = useState([]);
    const [startDateFilter, setStartDateFilter] = useState('');
    const [endDateFilter, setEndDateFilter] = useState('');
    const [kpIndexFilter, setKpIndexFilter] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                let queryParams = new URLSearchParams();
                if (startDateFilter) queryParams.append('startDate', startDateFilter);
                if (endDateFilter) queryParams.append('endDate', endDateFilter);
                if (kpIndexFilter) queryParams.append('kpIndex', kpIndexFilter);
                console.log(`Fetching data with query: ${queryParams.toString()}`);
                const response = await axios.get(`http://localhost:3000/api/space-weather?${queryParams.toString()}`);
                console.log('API response:', response.data);
                const uniqueData = Array.from(new Map(response.data.map(item => [item['gstID'], item])).values());
                setStorms(uniqueData);
            } catch (error) {
                console.error('Error fetching geomagnetic storm data:', error);
            }
        };
    
        fetchData();
         // Update the timeline view when the filters change
    if (startDateFilter) {
        setViewStart(moment(startDateFilter));
        if (!endDateFilter) {
            setViewEnd(moment(startDateFilter).add(1, 'year'));
        }
    }

    if (endDateFilter) {
        setViewEnd(moment(endDateFilter));
        if (!startDateFilter) {
            setViewStart(moment(endDateFilter).subtract(1, 'year'));
        }
    }
    }, [startDateFilter, endDateFilter, kpIndexFilter]);
    const [viewStart, setViewStart] = useState(moment().startOf('day').add(-12, 'hours'));
    const [viewEnd, setViewEnd] = useState(moment().startOf('day').add(12, 'hours'));

    const setTimelineView = (year) => {
        setViewStart(moment(`${year}-01-01`));
        setViewEnd(moment(`${year}-12-31`));
    };
    const createTimelineItems = (stormsData) => {
        return stormsData.map((storm, index) => {
            const startTime = moment(storm.startTime);
            let endTime = startTime.clone().add(1, 'hours'); // Default duration

            if (storm.allKpIndex.length > 1) {
                const lastKpIndex = storm.allKpIndex[storm.allKpIndex.length - 1];
                endTime = moment(lastKpIndex.observedTime);
            }

            return {
                id: index,
                group: 1,
                title: `Kp Index: ${storm.allKpIndex[0].kpIndex} - Start: ${startTime.format('LLL')}`,
                start_time: startTime,
                end_time: endTime,
                itemProps: {
                    style: {
                        background: getColorForKpIndex(storm.allKpIndex[0].kpIndex),
                    },
                },
            };
        });
    };

    const getColorForKpIndex = (kpIndex) => {
        if (kpIndex <= 1) return 'yellow';
        if (kpIndex <= 2) return 'blue';
        if (kpIndex <= 3) return 'green';
        if (kpIndex <= 4) return 'tan';
        if (kpIndex <= 5) return 'orange';
        if (kpIndex <= 6) return 'red';
        if (kpIndex <= 7) return 'purple';
        if (kpIndex <= 8) return 'pink';
        return 'red';
    };
    
    const filteredData = storms.filter(storm => {
        const startTime = new Date(storm.startTime);
        const startDateCondition = startDateFilter ? startTime >= new Date(startDateFilter) : true;
        const endDateCondition = endDateFilter ? startTime <= new Date(endDateFilter) : true;
        const kpIndexCondition = kpIndexFilter ? storm.allKpIndex.some(kp => kp.kpIndex === parseFloat(kpIndexFilter)) : true;
        return startDateCondition && endDateCondition && kpIndexCondition;
    });
    
    const groups = [{ id: 1, title: 'Geomagnetic Storms' }];
    const timelineItems = createTimelineItems(filteredData);
    return (
        <div className="geomagnetic-storm-timeline">
            {/* Filters */}
            <div className="filters">
                <div className="filter-item">
                    <label htmlFor="start-date">Start Date:</label>
                    <input
                        id="start-date"
                        type="date"
                        value={startDateFilter}
                        onChange={(e) => setStartDateFilter(e.target.value)}
                    />
                </div>
                <div className="filter-item">
                    <label htmlFor="end-date">End Date:</label>
                    <input
                        id="end-date"
                        type="date"
                        value={endDateFilter}
                        onChange={(e) => setEndDateFilter(e.target.value)}
                    />
                </div>
                <div className="filter-item">
                    <label htmlFor="kp-index">Kp Index:</label>
                    <input
                        id="kp-index"
                        type="number"
                        value={kpIndexFilter}
                        onChange={(e) => setKpIndexFilter(e.target.value)}
                    />
                </div>
            </div>
              {/* Buttons for time jumps */}
              <div className="time-jump-buttons">
                {Array.from({ length: new Date().getFullYear() - 2009 }, (_, index) => (
                    <button key={index + 2010} onClick={() => setTimelineView(index + 2010)}>
                        {index + 2010}
                    </button>
                ))}
            </div>
            {/* Timeline */}
            <Timeline
                groups={groups}
                items={timelineItems}
                visibleTimeStart={viewStart.valueOf()} // .valueOf() converts moment to milliseconds
                 visibleTimeEnd={viewEnd.valueOf()}
                canMove={false}
                canResize={false}
                lineHeight={50}
                itemHeightRatio={0.75}
                onTimeChange={(visibleTimeStart, visibleTimeEnd, updateScrollCanvas) => {
                    // This function is necessary to allow Timeline to manage its own internal state
                    setViewStart(moment(visibleTimeStart));
                    setViewEnd(moment(visibleTimeEnd));
                    updateScrollCanvas(visibleTimeStart, visibleTimeEnd);
                }}
            />
        </div>
    );
};

export default GeomagneticStorm;