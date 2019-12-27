import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginForm extends Component {
	state = {
		email: this.props.email
	};

	componentDidMount() {}

	handleEmailChange(e) {
		this.setState({
			email: e.target.value,
			login_url: '/users/login?email=' + e.target.value
		});
	}

	render() {
		return (
			<div className="form_box">
				<form action="/users/login" method="POST">
					<h1>Welcome</h1>
					<div className="email">
						<label htmlFor="email">Email</label>
						<br />
						<input
							type="text"
							id="email"
							name="email"
							placeholder="Enter your Email"
							onBlur={(e) => this.handleEmailChange(e)}
							defaultValue={this.state.email}
							required
						/>
					</div>
					<br />
					<div className="password">
						<label htmlFor="password">Password</label>
						<br />
						<input
							type="password"
							id="password"
							name="password"
							placeholder="Enter your password"
							required
						/>
					</div>

					<button type="submit" className="formbutton">
						Login
					</button>
				</form>
			</div>
		);
	}
}

LoginForm.propTypes = {
	email: PropTypes.array
};

export default LoginForm;
