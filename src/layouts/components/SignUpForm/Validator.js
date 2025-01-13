import styles from './SignUpForm.module.scss';

function Validator(formSelector, options = {}) {
  // Get the parent element
  const getParent = (element, selector) => {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  };

  // Contains all Rules
  var formRules = {};

  /**
   * Rule creation convention
   * - if there is an error then return "error message"
   * - if there is no error then return "undefined"
   */
  var validatorRules = {
    required: function (value) {
      return value ? undefined : 'Please enter this field';
    },

    email: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : 'Please enter email';
    },

    min: function (min) {
      return function (value) {
        return value.length >= min ? undefined : `Please enter at least ${min} characters`;
      };
    },

    max: function (max) {
      return function (value) {
        return value.length < max ? undefined : `Please enter a maximum of ${max} characters`;
      };
    },

    isConfirmed: function (confirm) {
      return function (value) {
        const valueConfirm = document.querySelector(`#${confirm}`).value;
        return value === valueConfirm && value !== '' ? undefined : 'This field value is incorrect';
      };
    },
  };

  // Func to execute Validate
  const handleValidate = (e) => {
    var rules = formRules[e.target.name];

    var errorMessage;
    for (var rule of rules) {
      errorMessage = rule(e.target.value);
      if (errorMessage) break;
    }

    // If there is an error, display the error message in the UI
    if (errorMessage) {
      var formGroup = getParent(e.target, `.${styles.formGroup}`);
      if (formGroup) {
        formGroup.classList.add(styles.invalid);
        var formMessage = formGroup.querySelector(`.${styles.formMessage}`);
        formMessage.innerText = errorMessage;
      }
    }
    return !errorMessage;
  };

  // Func to clear error massage
  const handleClearError = (e) => {
    var formGroup = getParent(e.target, `.${styles.formGroup}`);
    if (formGroup.classList.contains(styles.invalid)) {
      formGroup.classList.remove(styles.invalid);

      var formMessage = formGroup.querySelector(`.${styles.formMessage}`);
      if (formMessage) {
        formMessage.innerText = '';
      }
    }
  };

  //   Only handle when there is element in the DOM
  if (formSelector) {
    // Get all inputs
    const inputs = formSelector.querySelectorAll('[name][rules');

    for (var input of inputs) {
      formRules[input.name] = input.getAttribute('rules');
      var rules = input.getAttribute('rules').split('|');

      for (var rule of rules) {
        var ruleInfo;
        var isRuleHasValue = rule.includes(':');

        if (isRuleHasValue) {
          ruleInfo = rule.split(':');
          rule = ruleInfo[0];
        }

        var ruleFunc = validatorRules[rule];

        if (isRuleHasValue) {
          ruleFunc = ruleFunc(ruleInfo[1]);
        }

        if (Array.isArray(formRules[inputs.name])) {
          formRules[input.name].push(ruleFunc);
        } else {
          formRules[input.name] = [ruleFunc];
        }
      }

      // Listen to event to validate (blur, change...)
      input.onblur = handleValidate;
      input.oninput = handleClearError;
    }

    // Handle submit from behavior
    formSelector.onsubmit = (e) => {
      e.preventDefault();

      const inputs = formSelector.querySelectorAll('[name][rules');
      let isformVali = true;

      for (var input of inputs) {
        if (handleValidate({ target: input })) {
          isformVali = false;
        }
      }

      // Handle submit
      if (!isformVali) {
        if (typeof options.onSubmit === 'function') {
          var enableInput = formSelector.querySelectorAll('[name]');

          // Check for errors when submit
          var isFormValues = Array.from(enableInput).some((input) => !input.value);
          if (isFormValues) return;

          var formValues = Array.from(enableInput).reduce((values, input) => {
            values[input.name] = input.value.trim();
            input.value = '';
            return values;
          }, {});

          return options.onSubmit(formValues);
        }
        formSelector.submit();
      }
    };
  }

  return;
}

export default Validator;
