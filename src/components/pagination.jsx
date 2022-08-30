import React, { Component } from 'react'

class Pagination extends Component {

    state = {
        isEditable: false
    }

    render() {
        return (
            <div className='my-5 d-flex justify-content-between'>
                <button className='btn btn-warning'>Previous</button>
                <div>
                    {this.state.isEditable ? (
                        <input type="number" value="1" />
                    ) : (
                        <p style={{ userSelect: 'none', lineHeight: '1.1' }}
                            title='Double tap to jump'
                            onDoubleClick={() => {
                                this.setState({ isEditable: !this.state.isEditable })
                            }}
                        > {1} of {100}
                            <br />
                            <small>Double Tap to Edit</small>
                        </p>
                    )}
                </div>
                <button className='btn btn-warning ml-auto'>Next</button>
            </div>
        )
    }
}

export default Pagination;
