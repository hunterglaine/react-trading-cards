"use strict";

function Homepage() {
  return (
    <div>
      <h1>Welcome User</h1>
      <a href="/cards">Check Out the Cards Here</a><br/>
      <img src="/static/img/balloonicorn.jpg" alt="Image of Balloonicorn"/>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
