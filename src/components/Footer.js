import React from 'react';

export default function Footer(props) {
    return (
        <footer className="text-center py-3 mt-5" >
            <div className={`container text-center text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <div className="row">
                    <div className="col">
                        <h2>TextUtils</h2>
                        <p>The professional web tool for analysing texts.</p>
                    </div>
                    <div className="col">
                        <p>&copy; {new Date().getFullYear()} TextUtils. All rights reserved.</p>
                    </div>
                    <div className="col">
                        <small>
                            <h6>Developed by Sahil Bharti</h6>
                            Contact Us <br />
                            <a href="https://github.com/Sah912" target="_blank" rel="noopener noreferrer" className="text-primary">
                                GitHub
                            </a><br />
                            <a href="https://x.com/Techsahil199" target="_blank" rel="noopener noreferrer" className="text-primary">
                                Twitter
                            </a><br />
                            <a href="https://www.linkedin.com/in/sahil-bharti-995724329/" target="_blank" rel="noopener noreferrer" className="text-primary">
                                Linkedin
                            </a><br />
                        </small>
                    </div>
                </div>
            </div>
        </footer>
    );
}
