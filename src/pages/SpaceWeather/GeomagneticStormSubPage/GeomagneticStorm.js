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
    }, [startDateFilter, endDateFilter, kpIndexFilter]);
    

    const filteredData = storms.filter(storm => {
        const startTime = new Date(storm.startTime);
        const startDateCondition = startDateFilter ? startTime >= new Date(startDateFilter) : true;
        const endDateCondition = endDateFilter ? startTime <= new Date(endDateFilter) : true;
        const kpIndexCondition = kpIndexFilter ? storm.allKpIndex.some(kp => kp.kpIndex === parseFloat(kpIndexFilter)) : true;
        return startDateCondition && endDateCondition && kpIndexCondition;
    });
    console.log('Filtered data:', filteredData);


    const groups = [{ id: 1, title: 'Geomagnetic Storms' }];
    const timelineItems = filteredData.map(storm => ({
        id: storm.gstID,
        group: 1,
        title: `Storm ID: ${storm.gstID}`,
        start_time: moment(storm.startTime),
        end_time: moment(storm.startTime).add(1, 'hours') 
    }));
    console.log('Timeline items:', timelineItems);

    return (
        <div className="geomagnetic-storm-timeline">
            {/* Filters */}
            <label>
                Start Date:
                <input type="date" value={startDateFilter} onChange={e => setStartDateFilter(e.target.value)} />
            </label>
            <label>
                End Date:
                <input type="date" value={endDateFilter} onChange={e => setEndDateFilter(e.target.value)} />
            </label>
            <label>
                Kp Index:
                <input type="number" value={kpIndexFilter} onChange={e => setKpIndexFilter(e.target.value)} />
            </label>
            {/* Timeline */}
            <Timeline
                groups={groups}
                items={timelineItems}
                defaultTimeStart={moment().add(-12, 'hours')}
                defaultTimeEnd={moment().add(12, 'hours')}
            />
        </div>
    );
};

export default GeomagneticStorm;
