@import url('https://fonts.googleapis.com/css?family=Crimson+Text');
article {
    width: 60%;
    margin: auto;
}
blockquote,
div,
h1 {
    text-align: center;
}
blockquote {
    font-size: 1.2rem;
}
.btn {
        background-color: #eee;
        background-image: linear-gradient(to bottom,#fcfcfc 0,#eee 100%);
        border-radius: 3px;
        border: 1px solid #d5d5d5;
        color: #333;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif; 
        font-size: .5rem;
        font-weight: bold;
        padding: 4px 6px 4px 6px;
        text-decoration: none;
        text-shadow: 0 1px 0 #fff;
}
button {
    background: none;
    border: none;
    cursor: pointer;
    height: 48px;
    outline: none;
    padding: 0;
    width: 48px;
}
html {
    font-size: 16pt;
    font-family: crimson text;
}
#play {
	background-image: url(play.svg);
}
#play.played {
	background-image: url(play1.svg);
}
#pause {
	background-image: url(pause.svg);
}
#pause.paused {
	background-image: url(pause1.svg);
}
#stop {
    background-image: url(stop.svg);
}
#stop.stopped {
    background-image: url(stop1.svg);
}
@media (max-width: 700px) {
    html {
        font-size: 14pt;
    }
    article {
        width: 90%;
    }
}