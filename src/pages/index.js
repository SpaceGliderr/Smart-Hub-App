import { useState, useEffect } from "react";
import Head from "next/head";
import TestComponent from "../components/TestComponent";
import { db, rt } from "../config/firebase-config";
import { getTestHook, getTestHooks } from "../api/queries/query";
import mobile from "../../public/img/mobile.svg";

const Index = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // fb.firestore()
    //   .collection("Test")
    //   .onSnapshot((snap) => {
    //     const blogs = snap.docs.map((doc) => ({
    //       id: doc.id,
    //       ...doc.data(),
    //     }));
    //     setBlogs(blogs);
    //   });
    // setBlogs(queryTestHook());
    // console.log(test);

    // const testStuff = getTestHooks();

    // console.log(testStuff);

    // db.collection("Test")
    //   .get()
    //   .then((testItems) => {
    //     const test = testItems.docs.map((doc) => ({
    //       id: doc.id,
    //       ...doc.data(),
    //     }));

    //     setBlogs(test);
    //   })
    //   .catch((err) => {});

    rt.ref("light-strips/06f40fa9-fc42-4086-85e9-d4a223000a79")
      .once("value")
      .then((snapshot) => {
        console.log(snapshot.val().brightness);
      });

    getTestHook(setBlogs);
  }, []);

  return (
    <div>
      <Head>
        <title>Homiez App</title>
      </Head>

      <img src={mobile} alt="mobile" />

      <h1 style={{ paddingLeft: "20px" }}>Welcome to Homiez</h1>

      <TestComponent />
      <div>testing</div>
      {blogs.map(
        (blog) => (
          <p key={blog.id}>{blog.title}</p>
        )
        // <li key={blog.id}>
        //   <Link href="/blog/[id]" as={'/blog/' + blog.id }>
        //     <a itemProp="hello">{blog.title}</a>
        //   </Link>
        // </li>
      )}

      <h1>Ambient Light Controller</h1>
    </div>
  );
};

export default Index;
