import { useState, useEffect } from "react";

// const initialStories = [
//   {
//     id: 118836,
//     name: "Summer time",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula velit, dapibus id odio eget, blandit faucibus tortor. Nam finibus nulla et ligula feugiat aliquam.",
//     date: "9 July , 2022",
//   },
//   {
//     id: 120102,
//     name: "Best day of my life",
//     text: "Integer maximus lorem mauris, nec rhoncus ante condimentum vel. Ut ut arcu laoreet, viverra elit non, luctus sapien. Aliquam vitae euismod risus. Sed congue magna in molestie bibendum.",
//     date: "3 Feb, 2023",
//   },
//   {
//     id: 201200,
//     name: "How i meet my GF",
//     text: "Aliquam efficitur varius elit et egestas. Fusce condimentum congue sollicitudin. Cras finibus et nisl id ultricies. Morbi vel risus sit amet magna placerat facilisis. Cras sodales erat vestibulum ante dapibus ornare.",
//     date: "2 Oct , 2023",
//   },
// ];

export default function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const storedStories = JSON.parse(localStorage.getItem("stories")) || [];
    setStories(storedStories);
  }, []);

  useEffect(() => {
    if (stories.length > 0) {
      document.body.classList.add("non-empty");
    } else {
      document.body.classList.remove("non-empty");
    }
  }, [stories]);

  const updateLocalStorage = (updatedStories) => {
    localStorage.setItem("stories", JSON.stringify(updatedStories));
  };

  const addToStory = (newStory) => {
    setStories((prevStories) => {
      const updatedStories = [...prevStories, newStory];
      updateLocalStorage(updatedStories);
      return updatedStories;
    });
  };

  const handleDelete = (id) => {
    const updatedStories = stories.filter((story) => story.id !== id);
    setStories(updatedStories);
    updateLocalStorage(updatedStories);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <StoryList stories={stories} handleDelete={handleDelete} />
        <AddToListForm addToStory={addToStory} />
      </div>
    </div>
  );
}

function StoryList({ stories, handleDelete }) {
  return (
    <div className="story-list">
      {stories.map((story) => (
        <Story story={story} key={story.id} onDelete={handleDelete} />
      ))}
    </div>
  );
}

function AddToListForm({ addToStory }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (title === "" || text === "") return;

    const newStory = {
      id: Date.now(),
      name: title,
      text: text,
      date: new Date().toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };
    addToStory(newStory);

    setTitle("");
    setText("");
    setIsClicked(false);
  }

  function handleToggleForm() {
    setIsClicked(!isClicked);
  }

  return (
    <div className="parent-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <Button onClick={handleToggleForm}>
          {isClicked ? "Close form" : "Add new story"}
        </Button>
        {isClicked && (
          <>
            <input
              className="input form-title"
              type="text"
              placeholder="Story Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="input form-text"
              placeholder="Write your story here"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button type="submit">Submit</Button>
          </>
        )}
      </form>
    </div>
  );
}

function Story({ story, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this story?"
    );
    if (confirmDelete) {
      onDelete(story.id);
    }
  };

  return (
    <div
      className={isOpen ? "each-story opened" : "each-story"}
      onClick={handleClick}
    >
      {isOpen ? (
        <>
          <span className="spanX" onClick={handleDelete}>
            &#10005;
          </span>
          <h2>{story.name}</h2>
          <p>
            {story.text} <span className="story-date">{story.date}</span>
          </p>
        </>
      ) : (
        <h2>{story.name}</h2>
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

function Button({ onClick, children }) {
  return (
    <div className="btn-container">
      <button className="add-story-btn" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
