import { useEffect, useState } from "react"
import { LineChart } from '@mui/x-charts/LineChart';
import { getAllMembersFromServer } from "../members/memberApi"
import { PieChart } from '@mui/x-charts/PieChart';
const Graphes = () => {
    let [mmbrArr, setMmmbrArr] = useState([])
    useEffect(() => {
        const getAllMembers = async () => {
            try {
                let res = await getAllMembersFromServer()
                setMmmbrArr(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getAllMembers();

    }, [])
    const xAxisData = Array.from({ length: 30 }, (_, index) => index + 1);
    const [yAxisData, setYAxisData] = useState(Array(30).fill(0))
    let [vaccinated, setVaccinated] = useState(0);
    let [unVaccinated, setunVaccinated] = useState(0);

    const getDataOfLastMonth = () => {
        let updatedYAxisData = Array.from(yAxisData);
        for (let i = 0; i < mmbrArr.length; i++) {
            let start = 0;
            let end = new Date().getDate() - 1;
            if (mmbrArr[i].dateOfPositiveReply != null) {
                if (mmbrArr[i].recoveryDate != null) {
                    end = new Date(mmbrArr[i].recoveryDate).getDate() - 1;
                }
                if (new Date(new Date(mmbrArr[i].dateOfPositiveReply).getFullYear() == new Date().getFullYear() && mmbrArr[i].dateOfPositiveReply).getMonth() == new Date().getMonth())
                    start = new Date(mmbrArr[i].dateOfPositiveReply).getDate() - 1;
                for (let i = start; i < end; i++) {
                    updatedYAxisData[i] += 1;
                }
            }
        }
        setYAxisData(updatedYAxisData);
    }
    const cntOfvaccinated = () => {
        for (let i = 0; i < mmbrArr.length; i++) {
            console.log("length: " + mmbrArr[i].vaccinations.length)
            if (mmbrArr[i].vaccinations.length != 0) {
                setVaccinated(++vaccinated);
            }
            else {
                setunVaccinated(++unVaccinated);
            }
        }
    }
    let [isFulled, setIsFulled] = useState(false)
    if (!isFulled && mmbrArr.length != 0) {
        getDataOfLastMonth();
        cntOfvaccinated();
        setIsFulled(true)
    }


    return (<div>
        <h2 style={{direction:"rtl", marginRight:"40%"}}>נתוני תחלואה והתחסנות לחודש {new Date().getMonth()}</h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>

            <div style={{ flex: 1, marginTop: "8% ", marginLeft: "10%" }}>
                <PieChart
                    series={[{
                        data: [
                            { id: 0, value: vaccinated, label: 'מחוסנים' },
                            { id: 1, value: unVaccinated, label: 'לא מחוסנים' }
                        ],
                    },]}
                    width={400}
                    height={200} />
            </div>
            <div style={{ flex: 1, marginTop: "4%", }}>
                <LineChart style={{ width: "1200px", height: "1200px" }} xAxis={[{ data: xAxisData }]} series={[{ data: yAxisData, },]} width={500} height={300} />
            </div>
        </div>
    </div>);
}

export default Graphes;