import React from "react";
import { motion } from "framer-motion";

function Message({ winner, resetGame }) {
  return (
    <motion.div
      className="msg-container"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
    >
      <motion.p
        id="msg"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "tween", duration: 1 }}
      >
        🎉 Congratulations! Winner is {winner}
      </motion.p>
      <motion.button
        id="new-btn"
        whileHover={{ scale: 1.1, backgroundColor: "#121212", color: "#00ffc3" }}
        whileTap={{ scale: 0.9 }}
        onClick={resetGame}
      >
        New Game
      </motion.button>
    </motion.div>
  );
}

export default Message;
