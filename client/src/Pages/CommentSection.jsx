import React from "react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Time from "react-time-format";
import "flowbite";

const CommentSection = () => {
  const { token } = useSelector((state) => state.auth);
  const [isOpen, setOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const { user } = useSelector((state) => state.auth);

  const id = useParams().id;

  useEffect(() => {
    const fetchRoom = async () => {
      const res = await axios.get(
        `http://localhost:3200/room/usercomment/${id}`
      );

      setComments(res.data);
    };
    fetchRoom();
  }, [comment]);
  console.log("data: ", comments);
  // Handle Comment

  const handleComment = async () => {
    const headers = {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    await axios.post(
      `http://localhost:3200/room/${id}/comment`,
      {
        user: user,
        text: comment,
      },
      {
        headers,
      }
    );
    setComment("");
  };
  const index = comments.map((items, index) => {
    return index;
  });
  // console.log("mapkey: ", mapkey);
  console.log(index);

  const handleDeleteComment = async ({ items }) => {
    try {
      const headers = {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      await axios.delete(
        `http://localhost:3200/room/${items?._id}/deletecomment`,
        headers
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Discussion ({Math.max(index[index.length - 1])})
          </h2>
        </div>
        {/* <form className="mb-6"> */}
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <label for="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            id="comment"
            rows="6"
            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Write a comment..."></textarea>
        </div>
        <button
          onClick={handleComment}
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-bg-main rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-white hover:text-bg-main border border-solid border-bg-main">
          Post comment
        </button>

        {comments.map(({ user: { email, username }, ...items }, index) => (
          <article
            key={items._id}
            className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900 relative">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Michael Gough"
                  />
                  {username}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <Time
                    value={items.date}
                    title={items.date}
                    format="DD/MM/YYYY"
                  />
                </p>
              </div>
              <button
                id="dropdownComment1Button"
                data-dropdown-toggle="dropdownComment1"
                class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                </svg>
                <span class="sr-only">Comment settings</span>
              </button>
              <div
                id="dropdownComment1"
                class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul
                  class="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton">
                  <li>
                    <a class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Edit
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => console.log(items._id)}
                      class="block py-2 px-4 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Remove
                    </button>
                  </li>
                  <li>
                    <a class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Report
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
            <p className="text-gray-500 dark:text-gray-400">{items.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CommentSection;
