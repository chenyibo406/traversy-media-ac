const name = "John";
const age = 36;
const job = "Web Developer";
const city = "Miami";

// Without template strings (es5)
html =
  "<li><li>Name: " +
  name +
  "</li><li>Age: " +
  age +
  " </li><li>Job: " +
  job +
  " </li><li>City: " +
  " </li></ul>";

// with template strings (es6)

html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
</ul>
`;

document.body.innerHTML = html;
