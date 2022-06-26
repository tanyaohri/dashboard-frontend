import React, { useEffect, useMemo, useState } from "react";
import MUIDataTable from "mui-datatables";
import { getTickets } from "../../providers/DataPipe/dataLoad";
import { Chip } from "@material-ui/core";


const priorityOptions = [
    "Low", "Normal",
    "High"
]
const columns = [
    {
        name: "postId",
        label: "Ticket No.",
        options: {
         filter: true,
         sort: true,
        }
    },
    {
        name: "name",
        label: "Ticket Details",
        options: {
         filter: true,
         sort: true,
        }
    },
    {
        name: "email",
        label: "E-mail",
        options: {
         filter: true,
         sort: true,
        }
    },
    {
        name: "email",
        label: "Customer Name",
        options: {
         filter: true,
         sort: true,
         customBodyRender:(value) => {
            return value && value.substr(0, value.indexOf('@')); 
         }
        }
    },
    {
        name: "priority",
        label: "Priority",
        options: {
         filter: true,
         sort: true,
         customBodyRender : (value) => {
            switch (value) {
                case priorityOptions[0]:
                    return (
                        <Chip
                            label={value}
                            style={{
                                background:"#FEC400",
                                color:"white"
                            }}
                        />
                    )
                case priorityOptions[1]:
                    return (
                        <Chip
                            label={value}
                            style={{
                                background:"#29CC97",
                                color:"white"
                            }}
                        />
                    )
                    
                case priorityOptions[2]:
                    return (
                        <Chip
                            label={value}
                            style={{
                                background:"#F12B2C",
                                color:"white"
                            }}
                        />
                    )
                            
            
                default:
                    break;
            }
         }
        }
    },
];


/*
{
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
}

*/

function Datatable(){

    const [tickets, setTickets] = useState([])

    useEffect(() => {
        getTickets()
            .then((res) => setTickets(res.data))
            .catch((err) => console.log(err));
    }, [])


    const ticketsWithPriority = useMemo(() => {
        let optnsLen = priorityOptions.length || 1;
        return tickets.reduce((result, curr, ind) => {
            curr["priority"]=priorityOptions[ind%optnsLen];
            return [...result, curr]
        }, [])
    }, [tickets])

    return (
        <React.Fragment>
            <MUIDataTable
                columns={columns} 
                data={ticketsWithPriority}  
            />
        </React.Fragment>
    )
}

export default React.memo(Datatable);