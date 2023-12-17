import React from 'react';
import './codespace.css'

const Codespace = () => {
    return (
        <div className='codespace-content'>


        <div id="popup-container" className="popup-container">
            <div className="popup-content">
                {/* <span className="close-btn" onClick={() => closePopup()}>&times;</span> */}

                <form id="program-form">
                    <div className="program-details">
                        <input type="text" id="yourName" name="yourName" placeholder="Your or subject name eg.'AkA DS'" />
                        <br />
                        <input type="text" id="programName" name="programName" placeholder="Program Title" />
                        <label htmlFor="programLanguage">Programming Language:
                            <select id="programLanguage" name="programLanguage">
                                <option>Select</option>
                                <option value="python">Python</option>
                                <option value="c">C</option>
                                <option value="c++">C++</option>
                                <option value="java">Java</option>
                                <option value="c#">C#</option>
                                <option value="r">R</option>
                                <option value="javascript">Javascript</option>
                                <option value="sql">SQL</option>
                                <option value="html">HTML</option>
                                <option value="css">CSS</option>
                                <option value="swift">Swift</option>
                                <option value="ruby">Ruby</option>
                                <option value="go">Go</option>
                                <option value="other">Other</option>
                            </select>
                        </label>
                    </div>
                    <pre><textarea id="programCODE" placeholder="Enter your program code here"></textarea></pre>
                    {/* <button type="submit" onClick={() => addCode()}>Post <i className="fa fa-paper-plane" aria-hidden="true"></i></button> */}
                </form>
            </div>
        </div>

        <form className="searchBar">
            <input type="text" id="search-input" placeholder="Search Programs" />
            {/* <button type="button" id="search-btn" onClick={() => searchPrograms()}><i className="search-inputIcon fa fa-search" aria-hidden="true"></i></button> */}
        </form>

        <div id="program-container" className="posted-program"></div>

        <div className="loading-icon" style={{ backgroundColor: 'rgb(0, 0, 0)' }}></div>
        <button id="open-popup-btn" className="button-code">New post <i className="fas fa-pencil-alt"></i></button>
    </div>
);
}


export default Codespace;
