import React, { useState } from 'react'

export default function About(props) {
    const [myStyle, setmyStyle] = useState({
        color: '#ffffffff',
        // backgroundColor: '#000000ae',
    });
    const [btntext, setBtnText] = useState("Enable Dark Mode");
    const [btnStyle, setbtnStyle] = useState();
    const toggleStyle = () => {
        let btnStyle;
        if (myStyle.color === "white") {
            setmyStyle({
                color: '#161616ae',
                backgroundColor: "white"
            });
            setbtnStyle({
                color: '#161616ae',
                backgroundColor: 'white',
            })
            setBtnText("Enable Light Mode")
        } else {
            setmyStyle({
                color: "white",
                backgroundColor: '#161616ae',

            });
            setbtnStyle({
                color: "white",
                backgroundColor: '#161616ae',
            })
            setBtnText("Enable Dark Mode")
        }
    }
    return (
        <div>
            <>
                <div className="accordion" style={{ ...myStyle, borderRadius: '15px', border: '1px solid #4B0082', padding: '10px' }} >

                    <h2 className='my-3 text-center' >About Us</h2>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={btnStyle}>
                                Powerful Text Analyzer Tool
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Welcome to TextUtils, a simple yet powerful online tool designed to help you analyze and manipulate text quickly and efficiently.
                                Whether you are a student, content writer, developer, or just someone who works with text regularly, TextUtils makes your life easier by offering useful text processing features.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={btnStyle}>
                                Features of TextUtils
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <pre>✅ Word and Character Count <br />
                                    ✅ Text Case Conversion (Uppercase, Lowercase, Capitalize First Letter) <br />
                                    ✅ Remove Extra Spaces Automatically<br />
                                    ✅ Text Preview <br />
                                    ✅ Copy Text to Clipboard with One Click <br />
                                    ✅ Dark Mode Support for Comfortable Usage <br />
                                    ✅ Responsive Design (Mobile & Desktop Friendly)</pre>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={btnStyle}>
                                Use Case Example:
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                If you’re writing an article and want to check how many words you’ve written, or need to quickly transform your text into uppercase before posting — TextUtils does it in a few clicks.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container my-3'>
                    {/* <button onClick={toggleStyle} type="button" className="btn btn-primary">Dark Mode Enable</button>F */}
                </div>
            </>
        </div >
    )
}
