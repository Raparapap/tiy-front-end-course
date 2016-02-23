
Syntactically, a div inside a p is invalid in all standards of HTML. Moreover, when using a conforming HTML parser, it is impossible to place a <div> element inside a <p> in the DOM because the opening <div> tag will automatically close the <p> element.

Semantically, the correct choice depends on the content that you are marking up. You will need to show at least a sample full paragraph and possibly the content surrounding it to be sure of providing sufficient information for the correct semantic mark-up to be determined.

However, given that both <div> and <span> are semantics free, and that CSS in no way can ever change that, if you are certain that the contents of the <p> tag truly form a paragraph, and that <span style="display: block"> gets you the presentational effect that you are seeking, then that is valid HTML and would be a wholly appropriate solution.