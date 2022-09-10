import styled from "@emotion/styled";

export const Box = styled.div`
  display: flex;
  width: 1520px;
  flex-wrap: wrap;
  padding: 50px;

  .box_white {
    display: flex;
    padding: 20px;
    margin: 0 50px 140px 0;
    width: 620px;
    height: 225px;
    background: white;
    box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%),
      0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);
  }

  .thumb_box {
    width: 150px;
    height: 225px;
    margin-right: 30px;

    img {
      width: 150px;
      height: 225px;
      margin-top: -50px;
      box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%),
      0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);
  }
    }
  }

  h1 {
    font-size: 24px;
    margin-bottom: 5px;
  }
  h2 {
    font-size: 14px;
  }
  p {
    font-size: 14px;
  }
  ul {
    display: flex;
    padding-left: 0px;
    li {
      list-style: none;
      margin-right: 10px;
      font-size: 14px;
    }
  }
`;

export const GenreList = styled.ul``;
