import React from 'react';
import PageHeader from '../../components/PageHeader';


import './styles.css';

function TeacherList() {
    return (
        <div id="page-teatcher-list" className="container">
            <PageHeader title="Esses sao os proffys disponiveis">
                <form id="search-teatchers">
                    <div className="input-block">
                        <label htmlFor="subject">Materia</label>
                        <input type="text" className="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week-day">Dia da semana</label>
                        <input type="text" className="week-day"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" className="time"/>
                    </div>
                </form>
            </PageHeader>
        </div>
    )
}

export default TeacherList;