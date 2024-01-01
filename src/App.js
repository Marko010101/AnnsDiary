import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Summer time",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula velit, dapibus id odio eget, blandit faucibus tortor. Nam finibus nulla et ligula feugiat aliquam.",
    date: "9 July , 2022",
  },
  {
    id: 120102,
    name: "Best day of my life",
    text: "Integer maximus lorem mauris, nec rhoncus ante condimentum vel. Ut ut arcu laoreet, viverra elit non, luctus sapien. Aliquam vitae euismod risus. Sed congue magna in molestie bibendum.",
    date: "3 Feb, 2023",
  },
  {
    id: 201200,
    name: "How i meet my GF",
    text: "Aliquam efficitur varius elit et egestas. Fusce condimentum congue sollicitudin. Cras finibus et nisl id ultricies. Morbi vel risus sit amet magna placerat facilisis. Cras sodales erat vestibulum ante dapibus ornare.",
    date: "2 Oct , 2023",
  },
];

export default function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <StoryList />
        <AddToList />
      </div>
    </div>
  );
}

function StoryList() {
  return (
    <div className="story-list">
      {initialFriends.map((story) => (
        <Story story={story} key={story.id} />
      ))}
    </div>
  );
}

function AddToList() {
  return (
    <div className="parent-container">
      <form className="form-container">
        <input className="input" type="text" />
        <input className="input" type="text" />
        <input className="input" type="text" />
      </form>
    </div>
  );
}

function Story({ story }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="each-story" onClick={handleClick}>
      <h2>{story.name}</h2>
      {isOpen && (
        <p>
          {story.text} <span className="story-date">{story.date}</span>
        </p>
      )}
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>AnnsDiary📓</h1>
    </div>
  );
}

function Button() {
  return (
    <div className="btn-container">
      <button className="add-story-btn">Add new story</button>
    </div>
  );
}
