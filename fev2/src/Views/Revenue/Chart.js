import React from "react";
import { Line } from 'react-chartjs-2'
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import * as moment from "moment";
import {GetListPdFromTo, GetTotalIncomeFromTo } from "../../services/rev";



Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

const LineChart = (props) => {

    const list = props.listPds
    // console.log('listpd',list)
    const label1 = props.listLable
    const data1 = props.listData
    const fromTime = props.fromTime
    const toTime = props.toTime
    let listMonth = []
    
    

    return <div>
        <Line
            height={400}
            width={600}
            data={{
                labels: label1,
                datasets: [{
                    label: '# of Votes',
                    data: data1,
                    backgroundColor: 
                        'rgba(255, 99, 132, 0.2)'
                    ,
                    borderColor: 
                        'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            }}
            options={{
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }}


        >

        </Line>
    </div>
}
export default LineChart