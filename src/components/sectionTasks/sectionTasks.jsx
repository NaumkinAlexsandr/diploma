import React from "react";
import "./_sectionTasks.scss"

class SectionTasks extends React.Component {
    render() {
        return (
            <section className="section-tasks">
                <div className="container">
                    <p className="title">Tasks</p>
                    <div className="scroll-table">
                        <table className="table">
                            <tr>
                                <th className="subtitle">Task Name</th>
                                <th className="subtitle">Action</th>
                                <th className="subtitle">Action</th>
                                <th className="subtitle">Hold Days</th>
                            </tr>
                            <tr>
                                <td className="text">Send Bid</td>
                                <td className="text"><span className="done">Mark as Done</span></td>
                                <td className="text"><span className="delete">Delete task</span></td>
                                <td className="text">0</td>
                            </tr>
                            <tr>
                                <td className="text">Make Offer</td>
                                <td className="text"><span className="done">Mark as Done</span></td>
                                <td className="text"><span className="delete">Delete task</span></td>
                                <td className="text"><span className="text-yellow">1</span></td>
                            </tr>
                            <tr>
                                <td className="text">Estimate project</td>
                                <td className="text"><span className="done">Mark as Done</span></td>
                                <td className="text"><span className="delete">Delete task</span></td>
                                <td className="text"><span className="text-orange">2</span></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionTasks;