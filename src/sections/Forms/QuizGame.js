import React, { Component } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import Quiz from "../../components/Quiz";
import { connect } from "react-redux";
import { ActionTypes } from "../../components/actionTypes";
import config from "../../partnerconfig.json";

const mapStateToProps = (state) => {
  return { ...state.quiz };
};

const mapDispatchToProps = (dispatch) => ({
  onQuizLoad: (payload) => dispatch({ type: ActionTypes.QuizLoad, payload }),
  onPagerUpdate: (payload) =>
    dispatch({ type: ActionTypes.PagerUpdate, payload }),
});

class App extends Component {
  url = config.jrmClientUrl;
  date = localStorage.getItem("date");
  category = localStorage.getItem("category");
  qno = localStorage.getItem("qdate");
  month = new Date(this.qno).getMonth() + 1;
  // cateh
  day = new Date(this.qno).getDate();

  state = {
    quizes: [
      { id: "data/javascript.json", name: "Bible Quiz" },
    ],
    quizId: `${config.jrmClientUrl}jrms/v1/kidsmas/questions/2026/${this.month}/${this.day}/${this.category}`,
  };

  pager = {
    index: 0,
    size: 1,
    count: 1,
  };

  componentDidMount() {
    this.load(this.state.quizId);
  }

  load(quizId) {
    let urlfetch = quizId || this.props.quizId;
    console.log(quizId);

    fetch(`${urlfetch}`)
      .then((res) => res.json())
      .then((res) => {
        const quiz = res;
        console.log(res);
        console.log(quiz);
        this.start = res.questions.length;

        quiz.questions.forEach((q) => {
          q.options.forEach((o) => (o.selected = false));
        });
        quiz.config = Object.assign(this.props.quiz.config || {}, quiz.config);
        console.log("config-quiz", this.props.quiz.config);
        this.pager.count = quiz.questions.length / this.pager.size;
        this.props.onQuizLoad(quiz);
        this.props.onPagerUpdate(this.pager);
      });
  }

  render() {
    const styles = {
      container: {
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        fontFamily: "'Comic Neue', 'Comic Sans MS', 'Chalkboard SE', 'Poppins', cursive, sans-serif",
        margin: 0,
        padding: 0,
         marginTop: "-90px",
        background: "linear-gradient(135deg, #8fa3ff 0%, #6e1ac1 100%)",
      },
      navbar: {
        position: "relative",
        zIndex: 10,
        background: "transparent",
        padding: "15px 20px",
        color: "white",
      },
      content: {
        position: "relative",
        zIndex: 10,
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 100px)",
        padding: "20px",
        marginTop: "30px", // -30px as you requested
      },
      waitingCard: {
        background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,248,225,0.95) 100%)",
        borderRadius: "50px",
        padding: "35px 50px",
        textAlign: "center",
        boxShadow: "0 30px 50px rgba(0,0,0,0.2)",
        animation: "cardFloat 3s ease-in-out infinite",
        width: "100%",
        maxWidth: "700px",
      },
      waitingTitle: {
        fontSize: "2.8rem",
        fontWeight: "bold",
        background: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 30%, #FFD700 70%, #4CAF50 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginBottom: "12px",
      },
      waitingMessage: {
        fontSize: "1.2rem",
        color: "#FF6B6B",
        fontWeight: "bold",
        lineHeight: "1.4",
      },
      emoji: {
        fontSize: "3rem",
        display: "block",
        marginBottom: "12px",
        animation: "bounce 1s ease-in-out infinite",
      },
    };

    return (
      <div style={styles.container}>
        <style>
          {`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              margin: 0;
              padding: 0;
            }
            
            @keyframes cardFloat {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }
            
            @keyframes bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-15px); }
            }
            
            @keyframes pulse {
              0%, 100% { opacity: 0.7; transform: scale(1); }
              50% { opacity: 1; transform: scale(1.05); }
            }
          `}
        </style>
        
        {/* Navbar */}
        <div style={styles.navbar}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {/* <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.2)" }}>
              🎮 Kids Quiz Game 🎮
            </div> */}
            <div>
              {/* <span style={{ fontSize: "1.2rem" }}>⭐ 🌟 ⭐</span> */}
            </div>
          </div>
        </div>
        
        {/* Content - moved -30px up */}
        <div style={styles.content}>
          {this.start === 0 ? (
            <div style={styles.waitingCard}>
              <div style={styles.emoji}>
                🎨 🎮 🎯 🎲
              </div>
              <div style={styles.waitingTitle}>
                Ready, Set, Quiz! 🚀
              </div>
              <div className="question-count">
                <span style={styles.waitingMessage}>
                  🌟 ✨ 🌟
                  <br />
                  Quiz is not yet started.
                  <br />
                  <span style={{ fontSize: "1.1rem", display: "block", marginTop: "12px", color: "#FF8E53" }}>
                    ⏰ Quiz will start after the program ends ⏰
                  </span>
                  <br />
                  <span style={{ fontSize: "0.9rem", display: "block", marginTop: "15px", color: "#4CAF50" }}>
                    🎉 Get ready for a super fun adventure! 🎉
                  </span>
                  <br />
                  🌟 ✨ 🌟
                </span>
              </div>
              <div style={{ marginTop: "25px" }}>
                <div style={{ 
                  display: "inline-block", 
                  padding: "10px 22px", 
                  background: "linear-gradient(135deg, #FF6B6B, #FF8E53, #FFD700)", 
                  borderRadius: "60px", 
                  color: "white", 
                  fontWeight: "bold",
                  fontSize: "1rem",
                  animation: "pulse 1.5s ease-in-out infinite",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
                }}>
                  ⭐ Loading awesome quiz... ⭐
                </div>
              </div>
            </div>
          ) : (
            <Quiz
              quiz={this.state.quiz}
              quizId={this.state.quizId}
              mode={this.state.mode}
            />
          )}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);