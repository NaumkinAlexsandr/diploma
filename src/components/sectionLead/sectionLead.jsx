import React from "react";
import './_sectionLead.scss';

class SectionLead extends React.Component {
    render() {
        return (
            <section className="section-lead">
                <div className="container">
                    <div className="section-lead__title">
                        <p className="title">Lead Table</p>
                        <div className="title-image">
                            <img src="./img/plus.png" alt="table-lead_img" />
                        </div>
                    </div>
                    <div className="scroll-table">
                        <table className="table">
                            <tr>
                                <th className="subtitle">Name</th>
                                <th className="subtitle">Source</th>
                                <th className="subtitle">Budget</th>
                                <th className="subtitle">Next task</th>
                                <th className="subtitle">Contacts</th>
                            </tr>
                            <tr>
                                <td className="text">Simple Way</td>
                                <td className="text">Upwork</td>
                                <td className="text">up to 20k</td>
                                <td className="text">Bid</td>
                                <td className="text">drive.google.com</td>
                            </tr>
                            <tr>
                                <td className="text">Gregor Toy</td>
                                <td className="text">Telegram</td>
                                <td className="text">21-30k</td>
                                <td className="text">Service call</td>
                                <td className="text">upwork.com</td>
                            </tr>
                            <tr>
                                <td className="text">Tiel Max</td>
                                <td className="text">Linkedin</td>
                                <td className="text">31+k</td>
                                <td className="text">Offer</td>
                                <td className="text">066 762 28 28</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionLead;