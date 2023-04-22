function cov_1rmb5egj2u() {
  var path = "C:\\Users\\anast\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\REACT - RSS\\task6\\src\\reducer\\formReducer.tsx";
  var hash = "8503266dd720fdd40da6547baab57e8b5fa3edb5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\anast\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\REACT - RSS\\task6\\src\\reducer\\formReducer.tsx",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 33
        },
        end: {
          line: 12,
          column: 1
        }
      },
      "1": {
        start: {
          line: 14,
          column: 20
        },
        end: {
          line: 25,
          column: 2
        }
      },
      "2": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 42
        }
      },
      "3": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 22,
          column: 35
        }
      },
      "4": {
        start: {
          line: 28,
          column: 44
        },
        end: {
          line: 28,
          column: 63
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 18,
            column: 5
          }
        },
        loc: {
          start: {
            line: 18,
            column: 31
          },
          end: {
            line: 20,
            column: 5
          }
        },
        line: 18
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        },
        loc: {
          start: {
            line: 21,
            column: 31
          },
          end: {
            line: 23,
            column: 5
          }
        },
        line: 21
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8503266dd720fdd40da6547baab57e8b5fa3edb5"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1rmb5egj2u = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1rmb5egj2u();
import { createSlice } from '@reduxjs/toolkit';
import { ICardForm } from './../types/interfaces';
type IFormState = {
  cardForm: ICardForm[];
  modal: boolean;
};
const initialState: IFormState = (cov_1rmb5egj2u().s[0]++, {
  cardForm: [],
  modal: false
});
const formReducer = (cov_1rmb5egj2u().s[1]++, createSlice({
  name: 'form',
  initialState,
  reducers: {
    addformCard(state, action) {
      cov_1rmb5egj2u().f[0]++;
      cov_1rmb5egj2u().s[2]++;
      state.cardForm.push(action.payload);
    },
    toggleModal(state, action) {
      cov_1rmb5egj2u().f[1]++;
      cov_1rmb5egj2u().s[3]++;
      state.modal = action.payload;
    }
  }
}));
export default formReducer.reducer;
export const {
  addformCard,
  toggleModal
} = (cov_1rmb5egj2u().s[4]++, formReducer.actions);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMXJtYjVlZ2oydSIsImFjdHVhbENvdmVyYWdlIiwiY3JlYXRlU2xpY2UiLCJJQ2FyZEZvcm0iLCJJRm9ybVN0YXRlIiwiY2FyZEZvcm0iLCJtb2RhbCIsImluaXRpYWxTdGF0ZSIsInMiLCJmb3JtUmVkdWNlciIsIm5hbWUiLCJyZWR1Y2VycyIsImFkZGZvcm1DYXJkIiwic3RhdGUiLCJhY3Rpb24iLCJmIiwicHVzaCIsInBheWxvYWQiLCJ0b2dnbGVNb2RhbCIsInJlZHVjZXIiLCJhY3Rpb25zIl0sInNvdXJjZXMiOlsiZm9ybVJlZHVjZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IElDYXJkRm9ybSB9IGZyb20gJy4vLi4vdHlwZXMvaW50ZXJmYWNlcyc7XHJcblxyXG50eXBlIElGb3JtU3RhdGUgPSB7XHJcbiAgY2FyZEZvcm06IElDYXJkRm9ybVtdO1xyXG4gIG1vZGFsOiBib29sZWFuO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBJRm9ybVN0YXRlID0ge1xyXG4gIGNhcmRGb3JtOiBbXSxcclxuICBtb2RhbDogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBmb3JtUmVkdWNlciA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnZm9ybScsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBhZGRmb3JtQ2FyZChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIHN0YXRlLmNhcmRGb3JtLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZU1vZGFsKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUubW9kYWwgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtUmVkdWNlci5yZWR1Y2VyO1xyXG5leHBvcnQgY29uc3QgeyBhZGRmb3JtQ2FyZCwgdG9nZ2xlTW9kYWwgfSA9IGZvcm1SZWR1Y2VyLmFjdGlvbnM7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxjQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxjQUFBO0FBZlosU0FBU0UsV0FBVyxRQUFRLGtCQUFrQjtBQUM5QyxTQUFTQyxTQUFTLFFBQVEsdUJBQXVCO0FBRWpELEtBQUtDLFVBQVUsR0FBRztFQUNoQkMsUUFBUSxFQUFFRixTQUFTLEVBQUU7RUFDckJHLEtBQUssRUFBRSxPQUFPO0FBQ2hCLENBQUM7QUFFRCxNQUFNQyxZQUFZLEVBQUVILFVBQVUsSUFBQUosY0FBQSxHQUFBUSxDQUFBLE9BQUc7RUFDL0JILFFBQVEsRUFBRSxFQUFFO0VBQ1pDLEtBQUssRUFBRTtBQUNULENBQUM7QUFFRCxNQUFNRyxXQUFXLElBQUFULGNBQUEsR0FBQVEsQ0FBQSxPQUFHTixXQUFXLENBQUM7RUFDOUJRLElBQUksRUFBRSxNQUFNO0VBQ1pILFlBQVk7RUFDWkksUUFBUSxFQUFFO0lBQ1JDLFdBQVdBLENBQUNDLEtBQUssRUFBRUMsTUFBTSxFQUFFO01BQUFkLGNBQUEsR0FBQWUsQ0FBQTtNQUFBZixjQUFBLEdBQUFRLENBQUE7TUFDekJLLEtBQUssQ0FBQ1IsUUFBUSxDQUFDVyxJQUFJLENBQUNGLE1BQU0sQ0FBQ0csT0FBTyxDQUFDO0lBQ3JDLENBQUM7SUFDREMsV0FBV0EsQ0FBQ0wsS0FBSyxFQUFFQyxNQUFNLEVBQUU7TUFBQWQsY0FBQSxHQUFBZSxDQUFBO01BQUFmLGNBQUEsR0FBQVEsQ0FBQTtNQUN6QkssS0FBSyxDQUFDUCxLQUFLLEdBQUdRLE1BQU0sQ0FBQ0csT0FBTztJQUM5QjtFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsZUFBZVIsV0FBVyxDQUFDVSxPQUFPO0FBQ2xDLE9BQU8sTUFBTTtFQUFFUCxXQUFXO0VBQUVNO0FBQVksQ0FBQyxJQUFBbEIsY0FBQSxHQUFBUSxDQUFBLE9BQUdDLFdBQVcsQ0FBQ1csT0FBTyJ9