import { useState } from "react";
import "./App.css";

function App() {
  let [color, setColor] = useState("black");

  /*
  I can create like this in the button took a onClick and a variable and call this variable using this.
  and then update the handler state of onClick like that
  but instead of doing this we can return in the same line of onClick, bcz. onClick expects function(this is basic nature)
  so doing same line more and more we can do like-  onClick={() => setColor("blue")} 
  Explaination:
  onClick expects function so we returning callback function and then we are returning the setColor function using parameter
  */

  const redColor = () => {
    setColor("red");
  };

  const greenColor = () => {
    setColor("green");
  };

  // const blueColor = () => {
  //   setColor("blue")
  // }

  const randomColor = () => {
    const colors = [
      "red",
      "green",
      "blue",
      "yellow",
      "pink",
      "navy",
      "cyan",
      "teal",
      "gray",
      "purple",
      "orange",
      "brown",
      "lime",
      "magenta",
      "olive",
      "goldenrod",
      "tomato",
      "turquoise",
      "darkorange",
      "coral",
      "lightgreen",
    ];
    const random = colors[Math.floor(Math.random() * colors.length)];
    setColor(random);
  };

  return (
    <div
      className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
    >
      {/* Title */}
      <h1 className='text-4xl font-bold text-white text-center pt-10 drop-shadow-lg'>
        🎨 Color Switcher
      </h1>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
            onClick={redColor}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={greenColor}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("navy")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "navy" }}
          >
            Navy
          </button>
          <button
            onClick={() => setColor("yellow")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("purple")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("pink")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("orange")}
            className='outline-none px-4 py-1 rounded-full text-black text-bold shadow-lg'
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("olive")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("brown")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
          <button
            onClick={() => setColor("cyan")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "cyan" }}
          >
            Cyan
          </button>
          <button
            onClick={() => setColor("teal")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "teal" }}
          >
            Teal
          </button>
          <button
            onClick={() => setColor("gray")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => setColor("magenta")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "magenta" }}
          >
            Magenta
          </button>
          <button
            onClick={() => setColor("lime")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "lime" }}
          >
            Lime
          </button>
          <button
            onClick={() => setColor("goldenrod")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "goldenrod" }}
          >
            Goldenrod
          </button>
          <button
            onClick={() => setColor("tomato")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "tomato" }}
          >
            Tomato
          </button>
          <button
            onClick={() => setColor("turquoise")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "turquoise" }}
          >
            Turquoise
          </button>
          <button
            onClick={() => setColor("darkorange")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "darkorange" }}
          >
            Darkorange
          </button>
          <button
            onClick={() => setColor("coral")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "coral" }}
          >
            Coral
          </button>
          <button
            onClick={() => setColor("lightgreen")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "lightgreen" }}
          >
            LightGreen
          </button>
          <button
            onClick={randomColor}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{
              background:
                "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)",
            }}
          >
            Random
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className='text-center text-white pb-4'>
        Made with ❤️ by Avijit
      </footer>
    </div>
  );
}

export default App;
