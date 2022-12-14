import React from 'react';

export default class TourDates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showId: null,
      trashClass: 'btn btn-link m-2',
      penClass: 'btn btn-link m-2',
      overlay: 'overlay d-none',
      modal: 'col-10 col-lg-4 delete-modal-wrapper text-center rounded position-absolute d-none'
    };
    this.hideIcons = this.hideIcons.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showModal(event) {
    const idValue = Number(event.target.id);
    this.setState({
      showId: idValue,
      overlay: 'overlay',
      modal: 'col-10 col-lg-4 delete-modal-wrapper text-center rounded position-absolute'
    });
  }

  hideIcons(event) {
    this.setState({
      trashClass: 'fa-solid fa-trash m-2 d-none',
      penClass: 'fa-solid fa-pen-to-square m-2 d-none'
    });
  }

  hideModal() {
    this.setState({
      overlay: 'overlay d-none',
      modal: 'col-10 col-lg-4 delete-modal-wrapper text-center rounded position-absolute d-none'
    });
  }

  handleSubmit() {
    const showIdDefault = null;
    const modalClass = 'col-10 col-lg-4 delete-modal-wrapper text-center rounded position-absolute d-none';
    const overayclass = 'overlay d-none';
    const selectedDate = {
      showId: this.state.showId
    };
    this.setState({
      showId: showIdDefault,
      modal: modalClass,
      overlay: overayclass
    });
    this.props.onSubmit(selectedDate);
  }

  render() {
    return (
      <div className="calendar-container">
        <div className="row">
          <div className="col-8 d-flex row p-2">
            <h3 className="m-3 col-9">North American Tour 2023</h3>
          </div>
          <div className='col'>
            <div className="row d-flex justify-content-end">
              <a href="#new-date"><i className="fa-solid fa-plus pt-1 pr-2 m-4" /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <ul className="col-12">
            {
              this.props.tourDates.map(event => {
                return (
                  <li
                  id={event.showId}
                  className="row calendar-list-item"
                  key={event.showId}
                  >
                    <div className="col-xs-2 pl-4 mr-3 calendar-date">
                      <p className="text-center font-weight-bold d-block text-white">
                        {event.showDate}
                      </p>
                    </div>
                    <div className="col-xs-6">
                      <p className="text-white font-weight-bold" id={event.showId}>{event.dateCity}</p>
                      <pre className="text-white font-weight-light font-italic m-0" id={event.showId}>{event.dateVenue}</pre>
                    </div>
                    <div className="col">
                      <div className="row d-flex justify-content-end m-1">
                        <button
                          className={this.state.trashClass}
                          onClick={this.showModal}>
                          <i
                            className='fa-solid fa-trash text-white text-sm'
                            id={event.showId} />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })
            }
          </ul>
        </div>
        <div className={this.state.overlay} />
        <div className={this.state.modal}>
          <h3 className="font-weight-bold m-3">DELETE THIS DATE?</h3>
          <button
            type="submit"
            className="btn confirm-button font-weight-bold text-white m-3"
            onClick={this.handleSubmit}>
            CONFIRM
          </button>
          <button
            className="btn font-weight-bold m-3"
            onClick={this.hideModal}>
            CANCEL
          </button>
        </div>
      </div>
    );
  }
}
