const initialFriends = [
  {
    id: 118836,
    name: "Summer time",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula velit, dapibus id odio eget, blandit faucibus tortor. Nam finibus nulla et ligula feugiat aliquam.",
    date: "9 July , 2022",
  },
  {
    id: 118836,
    name: "Best day of my life",
    text: "Integer maximus lorem mauris, nec rhoncus ante condimentum vel. Ut ut arcu laoreet, viverra elit non, luctus sapien. Aliquam vitae euismod risus. Sed congue magna in molestie bibendum.",
    date: "3 Feb, 2023",
  },
  {
    id: 118836,
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
        <Story />
      </div>
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

function StoryList() {
  return (
    <div className="story-list">
      {initialFriends.map((story) => (
        <div className="each-story">
          <h2>{story.name}</h2>
          <p>
            {story.text} {story.date}
          </p>
        </div>
      ))}
    </div>
  );
}
function AddToList() {}

function Story() {}
