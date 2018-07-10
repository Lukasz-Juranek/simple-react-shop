import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

const payment_types = [
  {
    value: 'PO',
    label: 'Płatność przy odbiorze',
  },
  {
    value: 'PP',
    label: 'Płatność przelewem tradycyjnym',
  },
  {
    value: 'PayPal',
    label: 'PayPal',
  }
];

class BasketBuyConfirmation extends React.Component {
  state = {
    name: '',
    shipping_adress: '',
    additional: '',
    email: '',
    payment_type: 'PO',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="name"
          label="Imie i Nazwisko"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />

        <TextField
          required
          id="shipping_adress"
          label="Adres dostawy"
          className={classes.textField}
          value={this.state.shipping_adress}
          onChange={this.handleChange('shipping_adress')}
          margin="normal"
        />

        <TextField
          required
          id="email"
          label="E-Mail"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
        />

        <TextField
          id="payment_type"
          select
          label="Proszę wybrać typ płatności"
          className={classes.textField}
          value={this.state.payment_type}
          onChange={this.handleChange('payment_type')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText=""
          margin="normal"
        >
          {payment_types.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField          
          multiline
          rowsMax="6"
          id="additional"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          label="Dodatkowe informacje"
          value={this.state.additional}
          onChange={this.handleChange('additional')}
          fullWidth
          margin="normal"
        />

        <Button onClick={this.handleOpenBasket} color="inherit">ZŁÓż ZAMÓWIENIE                
              
        </Button>

      </form>
    );
  }
}

BasketBuyConfirmation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasketBuyConfirmation);