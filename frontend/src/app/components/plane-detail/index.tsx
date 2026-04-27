const PlaneDetail = ({plane}: {
    plane: [
        string, string, string,
        number, number, number, number, number,
        boolean,
        number, number, number,
        null | number | string,
        number,
        null | number | string,
        boolean,
        number
    ]
}) => {
    return (
        <div style={{ minWidth: '150px' }}>
            <div style={{ borderBottom: '1px solid #ccc', marginBottom: '5px', paddingBottom: '2px' }}>
                <strong>{plane[1] || 'Unknown Callsign'}</strong> 
                <span style={{ fontSize: '0.8em', color: '#666', marginLeft: '8px' }}>({plane[0]})</span>
            </div>
            
            <div style={{ fontSize: '0.9em', lineHeight: '1.4' }}>
                <b>Origin:</b> {plane[2]}<br />
                <b>Altitude:</b> {plane[7] ? `${plane[7]} m` : 'N/A'}<br />
                <b>Speed:</b> {plane[9] ? `${(plane[9] * 3.6).toFixed(0)} km/h` : '0 km/h'}<br />
                <b>Heading:</b> {plane[10]}°<br />
                <b>Status:</b> {plane[8] ? 'On Ground' : 'In Flight'}<br />
                <hr style={{ margin: '5px 0', border: 'none', borderTop: '1px dashed #e2e2e2' }} />
                <span style={{ fontSize: '1em', color: '#888' }}>
                    Last Seen: {new Date(plane[3] * 1000).toLocaleTimeString()}
                </span>
            </div>
        </div>
    )
}

export default PlaneDetail;