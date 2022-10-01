import React from "react";

function Head1() {
  return (
    <header>
      <h1>
        <strong>
          <i class="fa fa-podcast"></i>mypioneer
        </strong>
      </h1>

      <div class="topnav">
        <a class="active" href="#home">
          <i class="fa fa-bank"></i>
          Home
        </a>
        <a href="#Friends">
          <i class="fa fa-group"></i>Friends
        </a>
        <a href="#MarketPlace">
          <i class="fa fa-globe"></i>MarketPlace
        </a>

        <a href="#Yournetwork">
          <i class="fa fa-search"></i>MyNetwork
        </a>

        <a href="#Notification">
          <i class="fa fa-paper-plane"></i>Notifications
        </a>
        <a href="#Messaging">
          <i class="fa fa-envelope">Messaging</i>
        </a>
        <div class="dropdown">
          Account
          <i class="fa fa-power-off"></i>
          <div class="dropdown-content">
            <div>
              <h4>Try a premium account </h4>
            </div>
            <div>
              <h3>
                <em>
                  <i class="fa fa-gear">Settings</i>
                </em>
              </h3>
              <p>
                <i class="fa fa-question"></i>Help
              </p>
              <p>Privacy</p>
              <p>Language</p>
            </div>
            <hr />
            <h4>
              <i class="fa fa-map"></i>posts and activity
            </h4>
            <p>
              <i class="fa fa-location-arrow"></i>Sign out
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Head1;
