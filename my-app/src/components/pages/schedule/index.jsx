import React , {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSessions} from "../../../actions/sessions";
import {Spinner} from "../../Spinner";

export const SchedulePage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.scheduleData.isLoading);
    const schedule = useSelector((state) => state.scheduleData.sessions);

    useEffect(() => {
        dispatch(getSessions());
    }, [dispatch]);

    return isLoading ? (
        <Spinner/>
    ) : (
        <div>
            {
                schedule.map((item, i) => (
                    <div key={i}>
                        <h3>{new Date(item.date).toLocaleDateString()}</h3>
                    </div>
                ))
            }
        </div>
    )
};
