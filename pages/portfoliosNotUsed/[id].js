import React, { Component } from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import { withRouter } from "next/router";
import axios from "axios";
class Portfolio extends Component {
  constructor(props) {
    super(props);
  }
  static async getInitialProps({ query }) {
    let post = {};
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${query.id}`
      );

      post = res.data;
    } catch (e) {
      console.error(e);
    }
    return { post };
  }
  render() {
    const { post } = this.props;
    return (
      <BaseLayout>
        <h1>Portfolio page {post.id}</h1>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </BaseLayout>
    );
  }
}
export default withRouter(Portfolio);
