import CommentSection from "./component/CommentSection";
import Like from "./component/Like";
import PlusButton from "./component/PlusButton";
import Toggle from "./component/Toggle";

function App() {
  return (
    <div className="App">
      {/* <PlusButton /> */}
      {/* <Toggle /> */}
      {/* <Like /> */}
      <CommentSection
        comments={["좋은 글이에요!", "유익한 정보 감사합니다."]}
      />
    </div>
  );
}

export default App;
