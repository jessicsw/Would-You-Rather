import noImage from './images/noImage.jpeg';
import christineAvatar from './images/avatar_christine.png';
import tanyaAvatar from './images/avatar_tanya.png';

let users = {
  christineshiba: {
    id: 'christineshiba',
    name: 'Christine Shiba',
    avatarURL: christineAvatar,
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tanyaseneviratne: {
    id: 'tanyaseneviratne',
    name: 'Tanya Seneviratne',
    avatarURL: tanyaAvatar,
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  janedoe: {
    id: 'janedoe',
    name: 'Jane Doe',
    avatarURL: noImage,
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'christineshiba',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['christineshiba'],
      text: 'be bouldering',
    },
    optionTwo: {
      votes: [],
      text: 'be sports climbing'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'janedoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'lose your keys',
    },
    optionTwo: {
      votes: ['janedoe', 'christineshiba'],
      text: 'lose your phone'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'christineshiba',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'have free wifi wherever you go',
    },
    optionTwo: {
      votes: ['christineshiba'],
      text: 'have free coffee wherever you go'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tanyaseneviratne',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'have one eyebrow',
    },
    optionTwo: {
      votes: ['christineshiba'],
      text: 'have no eyebrows'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tanyaseneviratne',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tanyaseneviratne'],
      text: 'win the lottery',
    },
    optionTwo: {
      votes: ['janedoe'],
      text: 'live twice as long'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'janedoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['janedoe'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['tanyaseneviratne'],
      text: 'write Ruby'
    }
  },
}

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 500)
  })
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 500)
  })
}

export function _updateAuthedUser(user) {
  return new Promise((res, rej) => res(user))
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveAvatar({ userID, defaultAvatar }) {
  return new Promise((res, rej) => {
    users = {
      ...users,
      [userID]: {
        ...users[userID],
        avatarURL: defaultAvatar
      }
    }
    res()
  })
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}
