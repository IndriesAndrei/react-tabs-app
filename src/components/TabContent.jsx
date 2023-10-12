import { useState } from "react";

export default function TabContent({ item }) {
    const [showDetails, setShowDetails] = useState(true);
    const [likes, setLikes] = useState(0);

    console.log('RENDER');
  
    function handleInc() {
      // if we want to update a state based on some previous state, we always need to use callback functions
      setLikes((likes) => likes + 1);
    }

    function tripleInc() {
      setLikes((likes) => likes + 1);
      setLikes((likes) => likes + 1);
      setLikes((likes) => likes + 1);
    }

    // state changes are batched(grouped), so the component will re-render once with all the stat updates
    function handleUndo() {
      setShowDetails(true);
      setLikes(0);
    }

    function handleUndoLater() {
      setTimeout(handleUndo, 2000);
    }
  
    return (
      <div className="tab-content">
        <h4>{item.summary}</h4>
        {showDetails && <p>{item.details}</p>}
  
        <div className="tab-actions">
          <button onClick={() => setShowDetails((h) => !h)}>
            {showDetails ? "Hide" : "Show"} details
          </button>
  
          <div className="hearts-counter">
            <span>{likes} ❤️</span>
            <button onClick={handleInc}>+</button>
            <button onClick={tripleInc}>+++</button>
          </div>
        </div>
  
        <div className="tab-undo">
          <button onClick={handleUndo}>Undo</button>
          <button onClick={handleUndoLater}>Undo in 2s</button>
        </div>
      </div>
    );
}
  