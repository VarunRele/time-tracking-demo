import worksvg from '../assets/images/icon-work.svg'
import playsvg from '../assets/images/icon-play.svg'
import studysvg from '../assets/images/icon-study.svg'
import exercisesvg from '../assets/images/icon-exercise.svg'
import socialsvg from '../assets/images/icon-social.svg'
import selfsvg from '../assets/images/icon-self-care.svg'

const info = [
    {
        "title": "Work",
        "pic": worksvg,
        "bgcolor": 'bg-light-red-work',
        "timeframes": {
          "daily": {
            "current": 5,
            "previous": 7
          },
          "weekly": {
            "current": 32,
            "previous": 36
          },
          "monthly": {
            "current": 103,
            "previous": 128
          }
        }
      },
      {
        "title": "Play",
        "pic": playsvg,
        "bgcolor": 'bg-soft-blue-play',
        "timeframes": {
          "daily": {
            "current": 1,
            "previous": 2
          },
          "weekly": {
            "current": 10,
            "previous": 8
          },
          "monthly": {
            "current": 23,
            "previous": 29
          }
        }
      },
      {
        "title": "Study",
        "pic": studysvg,
        "bgcolor": 'bg-light-red-study',
        "timeframes": {
          "daily": {
            "current": 0,
            "previous": 1
          },
          "weekly": {
            "current": 4,
            "previous": 7
          },
          "monthly": {
            "current": 13,
            "previous": 19
          }
        }
      },
      {
        "title": "Exercise",
        "pic": exercisesvg,
        "bgcolor": 'bg-lime-green-exercise',
        "timeframes": {
          "daily": {
            "current": 1,
            "previous": 1
          },
          "weekly": {
            "current": 4,
            "previous": 5
          },
          "monthly": {
            "current": 11,
            "previous": 18
          }
        }
      },
      {
        "title": "Social",
        "pic": socialsvg,
        "bgcolor": 'bg-violet-social',
        "timeframes": {
          "daily": {
            "current": 1,
            "previous": 3
          },
          "weekly": {
            "current": 5,
            "previous": 10
          },
          "monthly": {
            "current": 21,
            "previous": 23
          }
        }
      },
      {
        "title": "Self Care",
        "pic": selfsvg,
        "bgcolor": 'bg-soft-orange-self-care',
        "timeframes": {
          "daily": {
            "current": 0,
            "previous": 1
          },
          "weekly": {
            "current": 2,
            "previous": 2
          },
          "monthly": {
            "current": 7,
            "previous": 11
          }
        }
      }
]

export default info