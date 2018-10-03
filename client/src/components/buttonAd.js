import React, { Fragment } from 'react';
import  {Add}  from './Add' 

class AddNew extends React.Component {
state = {
  add : '',
  editForm: false,
}
    onBtnClickHandler = e => {
      e.preventDefault();
      this.setState({editForm: true});
     }
    render(){
      const { editForm } = this.state;
      return(
        <Fragment>
          {
            editForm ? <Add>

          </Add> : null
          }
        <button
        className="buttondob" 
        onClick={this.onBtnClickHandler}
          >Добавить новость</button>

          </Fragment>
      )
    }
  }

export { AddNew }