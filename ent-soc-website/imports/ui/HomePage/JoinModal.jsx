import React, { Component } from 'react';

export default class JoinModal extends Component {
    render() {
        return (
            <div className="modal fade" id="JoinModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{height: "80vh"}}>
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <iframe src="" style={{zoom: "0.60"}} height="100%" frameBorder="0"></iframe>
                    </div>
                </div>
            </div>
        );
    }
}
