import React, {useState, useEffect} from "react";
import "./Commentss.css";

const Commentss = () => {
  // const [comments, setComments] = useState([])
  useEffect(() => {
    loadComments();
  }, []);
  let comments = [];




  function addComment(e) {
    e.preventDefault();
    let commentName = document.getElementById("comment-name");
    let commentBody = document.getElementById("comment-body");
    let comment = {
      name: commentName.value,
      body: commentBody.value,
      time: Math.floor(Date.now() / 1000),
    };
    commentName.value = "";
    commentBody.value = "";
    comments.push(comment);
    saveComments();
    showComments();
  }

  function saveComments() {
    localStorage.setItem("comments", JSON.stringify(comments));
  }

  function loadComments() {
    if (localStorage.getItem("comments"))
      comments = JSON.parse(localStorage.getItem("comments"));
      // setComments(JSON.parse(localStorage.getItem("comments")))
    showComments();
  }

  function timeConverter(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp * 1000);
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  }

  function showComments() {
    let commentField = document.getElementById("comment-field");
    let out = "";
    comments.forEach(function (item) {
      out += `<p className="text-right">${timeConverter(item.time)}</p>`;
      out += `<p className="alert-name">${item.name}</p>`;
      out += `<p className="alert-body">${item.body}</p>`;
    });
    commentField.innerHTML = out;
  }

  return (
    <div>
      <div className="container">
        <div className="raw">
          <div className="col-1">
            <h2 className="text-center">Comments</h2>
          </div>

          <div className="col-6">
            <div id="comment-field"></div>
          </div>
          <div className="col-6">
            <form>
              <div className="form-group1">
                <label htmlFor="comment-name">Name:</label> <br />
                <input
                  type="name"
                  className="form-control1"
                  id="comment-name"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group1">
                <label htmlFor="comment-body">Comment:</label> <br />
                <input
                  type="name"
                  className="form-control1"
                  id="comment-body"
                  placeholder="Your comment"
                />
              </div>
              <div>
                <button
                  type="submit"
                  id="comment-add"
                  className="btn1"
                  onClick={(e) => addComment(e)}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commentss;
