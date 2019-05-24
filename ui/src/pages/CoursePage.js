import React, {useEffect, useState} from 'react';
import NavBar from "../components/NavBar";
import axios from "axios";

function CoursePage({match, connectedUser}) {
    const [course, setCourse] = useState({});
    const [isCourseLoading, setIsCourseLoading] = useState(true);
    useEffect(() => {
        setIsCourseLoading(true);
        axios({
            method: 'get',
            url: '/api/courses/' + match.params.id,
        })
            .then((response) => {
                let fetchedCourse = response.data.body;
                setCourse(fetchedCourse);
                setIsCourseLoading(false)
            }).catch((e) => {
            alert(e);
        })
    }, [match.params.id]);

    const [sheets, setSheets] = useState([]);
    const [areSheetsLoading, setAreSheetsLoading] = useState(true);
    useEffect(() => {
        setAreSheetsLoading(true);
        axios({
            method: 'get',
            url: '/api/courses/' + match.params.id + '/sheets',
        })
            .then((response) => {
                let fetchedSheets = response.data.body;
                setSheets(fetchedSheets);
                setAreSheetsLoading(false)
            }).catch((e) => {
            alert(e);
        })
    }, [match.params.id]);

    return (
        <React.Fragment>
            <NavBar connectedUser={connectedUser}/>
            <div className="page-content">
                <section className="section">
                    {isCourseLoading ? (
                        <h1 className="title">Loading...</h1>
                    ) : (
                        <h1 className="title">{course.name}</h1>
                    )}
                </section>
                <section className="section">
                    {!areSheetsLoading && sheets.map(
                        (sheet) => <h2>{sheet.name}</h2>
                    )}
                </section>
            </div>
        </React.Fragment>

    );
}

export default CoursePage;