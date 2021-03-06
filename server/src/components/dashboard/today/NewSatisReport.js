import React from 'react';
import PropTypes from 'prop-types';

// Import radio button component
import RadioButton from './NewSatisReportRadioButton';

const NewSatisReport = (props) => {
	let today = new Date();

	let recapCounter = (input) => {
		var maxInput = 100;
		var inputLength = input.length;

		document.getElementById('recap_counter').innerHTML = '<span>' + inputLength + '/' + maxInput + '</span>';
	};

	// className of button will change depending on the chosen mood
	let button_bg_color = props.button_bg_color;
	// Show the Satis Setter if the user has 0 satis reports or if their latest satis report is not the current day.
	if (props.satis_report.total_results == 0 || props.last_report_date != today.toLocaleDateString()) {
		return (
			<div className={'mood_setter ' + button_bg_color}>
				<span className="question">How did you feel after work today?</span>
				<form
					className="dashboard_row"
					id="set_mood"
					style={{ marginBottom: '0' }}
					onSubmit={() => props.postNewSatisReport()}
				>
					<div className="all_radio_buttons_container">
						<RadioButton handleCurrentMoodOnChange={props.handleCurrentMoodOnChange} mood={'Ecstatic'} />
						<RadioButton handleCurrentMoodOnChange={props.handleCurrentMoodOnChange} mood={'Happy'} />
						<RadioButton handleCurrentMoodOnChange={props.handleCurrentMoodOnChange} mood={'Content'} />
						<RadioButton handleCurrentMoodOnChange={props.handleCurrentMoodOnChange} mood={'Displeased'} />
						<RadioButton
							handleCurrentMoodOnChange={props.handleCurrentMoodOnChange}
							mood={'Disappointed'}
						/>
						<RadioButton handleCurrentMoodOnChange={props.handleCurrentMoodOnChange} mood={'Stressed'} />
					</div>

					<input
						type="text"
						name="recap"
						className="recap_input"
						maxLength="100"
						placeholder="Recap your day (optional)"
						defaultValue=""
						onKeyUp={(e) => recapCounter(e.target.value)}
						onChange={(e) => props.handleRecapChange(e.target.value)}
					/>
					<div id="recap_counter" className="recap_counter">
						<span>0/100</span>
					</div>

					<div className="button_holder">
						<button
							type="button"
							onClick={() => {
								document
									.getElementById('set_mood')
									.dispatchEvent(new Event('submit', { cancelable: true }));
							}}
						>
							Set Mood
						</button>
					</div>
				</form>
			</div>
		);
	} else {
		return '';
	}
};

NewSatisReport.propTypes = {
	satis_report: PropTypes.object,
	last_report_date: PropTypes.string,
	button_bg_color: PropTypes.string,
	handleCurrentMoodOnChange: PropTypes.func,
	handleNoteChange: PropTypes.func,
	postNewSatisReport: PropTypes.func
};

export default NewSatisReport;
