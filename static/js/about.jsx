 "use strict";

 function About() {
     return (
        <div>Hunter Laine is currently learning React in order to better understand and develop software.</div>
     );
 }

 ReactDOM.render(
    <About />,
    document.querySelector('#about_author')
 );