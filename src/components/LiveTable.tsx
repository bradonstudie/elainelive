import { LiveDate } from "@/interfaces";

export const LiveTable = ({ liveDates }: { liveDates: LiveDate[] }) => (
    <table style={{ width: "100%" }}>
        <tr>
            <th style={{ width: "80%" }}>Location</th>
            <th style={{ width: "20%" }}>Date</th>
        </tr>
        {liveDates.map((liveDate) => (
            <tr key={liveDate.date}>
                <td>{liveDate.location}</td>
                <td>{liveDate.date}</td>
            </tr>
        ))}
    </table>
);
