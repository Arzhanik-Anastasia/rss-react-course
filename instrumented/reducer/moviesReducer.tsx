function cov_1bet1puo83() {
  var path = "C:\\Users\\anast\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\REACT - RSS\\task6\\src\\reducer\\moviesReducer.tsx";
  var hash = "3fd079097895840f4332c9a44c37e414891c2882";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\anast\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\REACT - RSS\\task6\\src\\reducer\\moviesReducer.tsx",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 35
        },
        end: {
          line: 22,
          column: 1
        }
      },
      "1": {
        start: {
          line: 24,
          column: 22
        },
        end: {
          line: 46,
          column: 2
        }
      },
      "2": {
        start: {
          line: 29,
          column: 6
        },
        end: {
          line: 29,
          column: 36
        }
      },
      "3": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 44,
          column: 9
        }
      },
      "4": {
        start: {
          line: 35,
          column: 8
        },
        end: {
          line: 35,
          column: 31
        }
      },
      "5": {
        start: {
          line: 38,
          column: 8
        },
        end: {
          line: 38,
          column: 38
        }
      },
      "6": {
        start: {
          line: 39,
          column: 8
        },
        end: {
          line: 39,
          column: 32
        }
      },
      "7": {
        start: {
          line: 42,
          column: 8
        },
        end: {
          line: 42,
          column: 27
        }
      },
      "8": {
        start: {
          line: 43,
          column: 8
        },
        end: {
          line: 43,
          column: 32
        }
      },
      "9": {
        start: {
          line: 49,
          column: 29
        },
        end: {
          line: 49,
          column: 50
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 28,
            column: 5
          }
        },
        loc: {
          start: {
            line: 28,
            column: 29
          },
          end: {
            line: 30,
            column: 5
          }
        },
        line: 28
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 32,
            column: 17
          },
          end: {
            line: 32,
            column: 18
          }
        },
        loc: {
          start: {
            line: 32,
            column: 30
          },
          end: {
            line: 45,
            column: 3
          }
        },
        line: 32
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 34,
            column: 34
          },
          end: {
            line: 34,
            column: 35
          }
        },
        loc: {
          start: {
            line: 34,
            column: 45
          },
          end: {
            line: 36,
            column: 7
          }
        },
        line: 34
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 37,
            column: 36
          },
          end: {
            line: 37,
            column: 37
          }
        },
        loc: {
          start: {
            line: 37,
            column: 55
          },
          end: {
            line: 40,
            column: 7
          }
        },
        line: 37
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 41,
            column: 35
          },
          end: {
            line: 41,
            column: 36
          }
        },
        loc: {
          start: {
            line: 41,
            column: 46
          },
          end: {
            line: 44,
            column: 7
          }
        },
        line: 41
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3fd079097895840f4332c9a44c37e414891c2882"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1bet1puo83 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1bet1puo83();
import { createSlice } from '@reduxjs/toolkit';
import { getMovies } from '../thunks/movie';
import { IMovies } from '../types/interfaces';
type IMoviesState = {
  movies: IMovies;
  search: string;
  isLoading: boolean;
  error: boolean;
};
const initialState: IMoviesState = (cov_1bet1puo83().s[0]++, {
  movies: {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0
  },
  search: '',
  isLoading: true,
  error: false
});
const moviesReducer = (cov_1bet1puo83().s[1]++, createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearch(state, action) {
      cov_1bet1puo83().f[0]++;
      cov_1bet1puo83().s[2]++;
      state.search = action.payload;
    }
  },
  extraReducers: builder => {
    cov_1bet1puo83().f[1]++;
    cov_1bet1puo83().s[3]++;
    builder.addCase(getMovies.pending, state => {
      cov_1bet1puo83().f[2]++;
      cov_1bet1puo83().s[4]++;
      state.isLoading = true;
    }).addCase(getMovies.fulfilled, (state, action) => {
      cov_1bet1puo83().f[3]++;
      cov_1bet1puo83().s[5]++;
      state.movies = action.payload;
      cov_1bet1puo83().s[6]++;
      state.isLoading = false;
    }).addCase(getMovies.rejected, state => {
      cov_1bet1puo83().f[4]++;
      cov_1bet1puo83().s[7]++;
      state.error = true;
      cov_1bet1puo83().s[8]++;
      state.isLoading = false;
    });
  }
}));
export default moviesReducer.reducer;
export const {
  setSearch
} = (cov_1bet1puo83().s[9]++, moviesReducer.actions);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWJldDFwdW84MyIsImFjdHVhbENvdmVyYWdlIiwiY3JlYXRlU2xpY2UiLCJnZXRNb3ZpZXMiLCJJTW92aWVzIiwiSU1vdmllc1N0YXRlIiwibW92aWVzIiwic2VhcmNoIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJpbml0aWFsU3RhdGUiLCJzIiwicGFnZSIsInJlc3VsdHMiLCJ0b3RhbF9wYWdlcyIsInRvdGFsX3Jlc3VsdHMiLCJtb3ZpZXNSZWR1Y2VyIiwibmFtZSIsInJlZHVjZXJzIiwic2V0U2VhcmNoIiwic3RhdGUiLCJhY3Rpb24iLCJmIiwicGF5bG9hZCIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsInJlZHVjZXIiLCJhY3Rpb25zIl0sInNvdXJjZXMiOlsibW92aWVzUmVkdWNlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgZ2V0TW92aWVzIH0gZnJvbSAnLi4vdGh1bmtzL21vdmllJztcclxuaW1wb3J0IHsgSU1vdmllcyB9IGZyb20gJy4uL3R5cGVzL2ludGVyZmFjZXMnO1xyXG5cclxudHlwZSBJTW92aWVzU3RhdGUgPSB7XHJcbiAgbW92aWVzOiBJTW92aWVzO1xyXG4gIHNlYXJjaDogc3RyaW5nO1xyXG4gIGlzTG9hZGluZzogYm9vbGVhbjtcclxuICBlcnJvcjogYm9vbGVhbjtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogSU1vdmllc1N0YXRlID0ge1xyXG4gIG1vdmllczoge1xyXG4gICAgcGFnZTogMSxcclxuICAgIHJlc3VsdHM6IFtdLFxyXG4gICAgdG90YWxfcGFnZXM6IDAsXHJcbiAgICB0b3RhbF9yZXN1bHRzOiAwLFxyXG4gIH0sXHJcbiAgc2VhcmNoOiAnJyxcclxuICBpc0xvYWRpbmc6IHRydWUsXHJcbiAgZXJyb3I6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgbW92aWVzUmVkdWNlciA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnbW92aWVzJyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldFNlYXJjaChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIHN0YXRlLnNlYXJjaCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XHJcbiAgICBidWlsZGVyXHJcbiAgICAgIC5hZGRDYXNlKGdldE1vdmllcy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcclxuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICB9KVxyXG4gICAgICAuYWRkQ2FzZShnZXRNb3ZpZXMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHN0YXRlLm1vdmllcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuYWRkQ2FzZShnZXRNb3ZpZXMucmVqZWN0ZWQsIChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIHN0YXRlLmVycm9yID0gdHJ1ZTtcclxuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb3ZpZXNSZWR1Y2VyLnJlZHVjZXI7XHJcbmV4cG9ydCBjb25zdCB7IHNldFNlYXJjaCB9ID0gbW92aWVzUmVkdWNlci5hY3Rpb25zO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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