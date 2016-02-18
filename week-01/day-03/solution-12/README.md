By validating form data while the user is filling it out, the user can know immediately if they've made any mistakes; this saves the user the time of waiting on an HTTP response, and saves your server from dealing with bad form input.

HTML Syntax for Constraint Validation

The following items in HTML5 syntax can be used to specify constraints on form data.

The required attribute on the <input>, <select>, and <textarea> elements indicates that a value must be supplied. (On the <input> element, required applies only in conjunction with certain values of the type attribute.)
The pattern attribute on the <input> element constrains the value to match a specific regular expression.
The min and max attributes of the <input> element constrain the minimum and maximum values that can be entered.
The step attribute of the <input> element (when used in combination with the min and max attributes) constrains the granularity of values that can be entered. A value that does not correspond an allowed value step does not validate.
The maxlength attribute of the <input> and <textarea> elements constrains the maximum number of characters (in Unicode code points) that the user can enter.
The values url and email for the type constrain the value to being a valid URL or e-mail address, respectively.
In addition, you can prevent constraint validation by specifying the novalidate attribute on the <form>, or the formnovalidate attribute on the <button> element and on the <input> element (when type is submit or image). These attributes indicate that the form is not to be validated when it is submitted.

