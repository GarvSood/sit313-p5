import { useState } from "react";
import "./Post.css";

function Post() {
  const [postType, setPostType] = useState("Article");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [abstract, setAbstract] = useState("");
  const [articleText, setArticleText] = useState("");
  const [tags, setTags] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    const tagList = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    if (!title.trim()) {
      setMessage("Please enter a title.");
      return;
    }

    if (tagList.length > 3) {
      setMessage("Please enter a maximum of 3 tags.");
      return;
    }

    if (postType === "Question" && !description.trim()) {
      setMessage("Please describe your problem.");
      return;
    }

    if (postType === "Article" && !abstract.trim()) {
      setMessage("Please enter an abstract.");
      return;
    }

    if (postType === "Article" && !articleText.trim()) {
      setMessage("Please enter your article text.");
      return;
    }

    setMessage(`${postType} submitted successfully!`);

    setPostType("Question");
    setTitle("");
    setDescription("");
    setAbstract("");
    setArticleText("");
    setTags("");
  };

  return (
    <main className="post-page">
      <div className="post-editor">
        <header className="post-header">
          <h1>New Post</h1>
          <p>Share a question or an article with the DEV@Deakin community.</p>
        </header>

        <form onSubmit={handleSubmit}>
          <fieldset className="post-type">
            <legend>Select Post Type</legend>

            <label>
              <input
                type="radio"
                name="postType"
                value="Question"
                checked={postType === "Question"}
                onChange={() => {
                  setPostType("Question");
                  setMessage("");
                }}
              />
              Question
            </label>

            <label>
              <input
                type="radio"
                name="postType"
                value="Article"
                checked={postType === "Article"}
                onChange={() => {
                  setPostType("Article");
                  setMessage("");
                }}
              />
              Article
            </label>
          </fieldset>

          <section className="post-form-section">
            <h2>What do you want to ask or share?</h2>

            <div className="post-field">
              <label htmlFor="post-title">Title</label>
              <input
                id="post-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={
                  postType === "Question"
                    ? "Start your question with how, what, why, etc."
                    : "Enter a descriptive article title"
                }
                maxLength={150}
                required
              />
            </div>

            {postType === "Question" ? (
              <div className="post-field">
                <label htmlFor="description">Describe your problem</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Explain your question or problem..."
                  rows={8}
                  required
                />
              </div>
            ) : (
              <>
                <div className="post-field">
                  <label htmlFor="abstract">Abstract</label>
                  <textarea
                    id="abstract"
                    value={abstract}
                    onChange={(e) => setAbstract(e.target.value)}
                    placeholder="Enter a short summary of your article"
                    rows={3}
                    required
                  />
                </div>

                <div className="post-field">
                  <label htmlFor="article-text">Article Text</label>
                  <textarea
                    id="article-text"
                    value={articleText}
                    onChange={(e) => setArticleText(e.target.value)}
                    placeholder="Write your article here..."
                    rows={10}
                    required
                  />
                </div>
              </>
            )}

            <div className="post-field">
              <label htmlFor="tags">Tags</label>
              <input
                id="tags"
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Add up to 3 tags, separated by commas"
              />
              <small>Example: React, JavaScript, Web Development</small>
            </div>
          </section>

          {message && (
            <p className="post-message" role="alert">
              {message}
            </p>
          )}

          <div className="post-actions">
            <button type="submit" className="post-submit">
              Post
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Post;