import React from "react";

function Scrol() {
  return (
    <div>
      <button class="btn">
        <i class="fa fa-camera"></i>photo
      </button>
      <button class="btn">
        <i class="fa fa-caret-square-o-right"></i>video
      </button>
      <button class="btn">
        <i class="fa fa-folder-o"></i> job
      </button>
      <button class="btn">
        <i class="fa fa-plus-circle"></i> posts
      </button>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl2tIIzUz4Gqx3baC-0ki_26PGBcZjGGQwsw&usqp=CAU"
          alt="Avatar"
          width="60px"
          border-radius="50%"
          class="round"
        />
        <h3 id="para" align="left">
          Priya sood
        </h3>
        <p>software engineer at Google</p>

        <img
          src="https://thumbs.dreamstime.com/b/googleplex-google-headquarters-california-mountain-view-ca-usa-may-office-buildings-93111097.jpg"
          alt="google-office"
          width="650"
          height="550"
        />

        <div class="emo" align="left">
          <h3>
            <i class="fa fa-heart">
              Like&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </i>
            <i class="fa fa-commenting-o">
              Comment&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </i>
            <i class="fa fa-mail-forward">
              Share&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </i>
            <i class="fa fa-paper-plane-o">Send</i>
          </h3>
        </div>
      </div>
      <div class="bi">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdogycOicEiU9R45u7T8H1vUq5T6NlebEFQ&usqp=CAU"
          alt="Avatar"
          width="60px"
          border-radius="50%"
          class="round"
        />
        <h3 id="para" texts-align="left">
          Neha sharma
        </h3>
        <p>entreprener</p>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D22AQFY_34c2nsCsg/feedshare-shrink_2048_1536/0/1661064659750?e=1666828800&v=beta&t=f00ugbeJLU0FdLSFCNXbI0OgN_v360_6UQNfOLZ6jMo"
          alt="sucess"
          width="700"
          height="600"
          position="block"
          align-texts="bottom"
        />

        <div>
          <p id="com" align="left">
            <i class="fa fa-heart"></i>
            <i class="fa fa-hand-peace-o" aria-hidden="true"></i>
            <i class="fa fa-meh-o" aria-hidden="true"></i>
            98 likes ,34 comments
          </p>
        </div>
      </div>

      <div class="like" align="left">
        <h3>
          <i class="fa fa-heart">
            Like&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </i>
          <i class="fa fa-commenting-o">
            Comment&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </i>
          <i class="fa fa-mail-forward">
            Share&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </i>
          <i class="fa fa-paper-plane-o">Send</i>
        </h3>
        <pre></pre>
      </div>

      <pre></pre>
      <div></div>

      <div class="cop" width="800px" height="900px">
        <div>
          <p></p>
        </div>
      </div>
      <div>
        <img
          src="data:image/jpeg;base64,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"
          alt="Avatar"
          width="60px"
          border-radius="50%"
          class="round"
        />
        <h3 id="para">Nisha Gurjar</h3>
        <p>Business Development</p>

        <img
          src="https://media.gettyimages.com/photos/female-student-listening-to-costudent-picture-id658984457?k=20&m=658984457&s=612x612&w=0&h=ahXdSg4_fXsSu5f3ahZg6o-3lgACTQVovsapsCAyU8c="
          alt="google-office"
          width="700"
          height="550"
          align="right"
        />
      </div>
    </div>
  );
}

export default Scrol;
