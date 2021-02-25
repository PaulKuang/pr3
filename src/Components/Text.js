import React from "react";

class Text extends React.Component {
  render() {
    return <div className="header">
        <form action>
            First name: <br />
            <input name="name" /> <br />
            Last name: <br />
            <input name="name" />
            <p>Favorite Movie:</p>
            <input type="radio" name="favoritemovie" defaultValue="Avengers" /> Avengers<br />
            <input type="radio" name="favoritemovie" defaultValue="Dark Knight" /> Dark Knight<br />
            <input type="radio" name="favoritemovie" defaultValue="Tenet" /> Tenet<br />
            <p><input type="submit" name="Done" defaultValue="Done" /></p>
        </form>
    </div>;
  }

}

export default Text;