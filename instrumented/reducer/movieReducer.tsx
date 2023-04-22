function cov_1oehlqickh() {
  var path = "C:\\Users\\anast\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\REACT - RSS\\task6\\src\\reducer\\movieReducer.tsx";
  var hash = "82a3c3f8063cbfd8cbc8f203881df7296f835791";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\anast\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\REACT - RSS\\task6\\src\\reducer\\movieReducer.tsx",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 34
        },
        end: {
          line: 30,
          column: 1
        }
      },
      "1": {
        start: {
          line: 32,
          column: 21
        },
        end: {
          line: 50,
          column: 2
        }
      },
      "2": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 48,
          column: 9
        }
      },
      "3": {
        start: {
          line: 39,
          column: 8
        },
        end: {
          line: 39,
          column: 31
        }
      },
      "4": {
        start: {
          line: 42,
          column: 8
        },
        end: {
          line: 42,
          column: 41
        }
      },
      "5": {
        start: {
          line: 43,
          column: 8
        },
        end: {
          line: 43,
          column: 32
        }
      },
      "6": {
        start: {
          line: 46,
          column: 8
        },
        end: {
          line: 46,
          column: 27
        }
      },
      "7": {
        start: {
          line: 47,
          column: 8
        },
        end: {
          line: 47,
          column: 32
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 36,
            column: 17
          },
          end: {
            line: 36,
            column: 18
          }
        },
        loc: {
          start: {
            line: 36,
            column: 30
          },
          end: {
            line: 49,
            column: 3
          }
        },
        line: 36
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 38,
            column: 33
          },
          end: {
            line: 38,
            column: 34
          }
        },
        loc: {
          start: {
            line: 38,
            column: 44
          },
          end: {
            line: 40,
            column: 7
          }
        },
        line: 38
      },
      "2": {
        name: "(anonymous_2)",
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
            column: 54
          },
          end: {
            line: 44,
            column: 7
          }
        },
        line: 41
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 45,
            column: 34
          },
          end: {
            line: 45,
            column: 35
          }
        },
        loc: {
          start: {
            line: 45,
            column: 45
          },
          end: {
            line: 48,
            column: 7
          }
        },
        line: 45
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
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "82a3c3f8063cbfd8cbc8f203881df7296f835791"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1oehlqickh = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1oehlqickh();
import { createSlice } from '@reduxjs/toolkit';
import { getMovie } from '../thunks/movie';
import { IMovie } from '../types/interfaces';
type IMovieState = {
  movieInfo: IMovie;
  isLoading: boolean;
  error: boolean;
};
const initialState: IMovieState = (cov_1oehlqickh().s[0]++, {
  movieInfo: {
    adult: false,
    backdrop_path: '',
    genre_ids: [],
    id: '',
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0
  },
  isLoading: true,
  error: false
});
const movieReducer = (cov_1oehlqickh().s[1]++, createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: builder => {
    cov_1oehlqickh().f[0]++;
    cov_1oehlqickh().s[2]++;
    builder.addCase(getMovie.pending, state => {
      cov_1oehlqickh().f[1]++;
      cov_1oehlqickh().s[3]++;
      state.isLoading = true;
    }).addCase(getMovie.fulfilled, (state, action) => {
      cov_1oehlqickh().f[2]++;
      cov_1oehlqickh().s[4]++;
      state.movieInfo = action.payload;
      cov_1oehlqickh().s[5]++;
      state.isLoading = false;
    }).addCase(getMovie.rejected, state => {
      cov_1oehlqickh().f[3]++;
      cov_1oehlqickh().s[6]++;
      state.error = true;
      cov_1oehlqickh().s[7]++;
      state.isLoading = false;
    });
  }
}));
export default movieReducer.reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMW9laGxxaWNraCIsImFjdHVhbENvdmVyYWdlIiwiY3JlYXRlU2xpY2UiLCJnZXRNb3ZpZSIsIklNb3ZpZSIsIklNb3ZpZVN0YXRlIiwibW92aWVJbmZvIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJpbml0aWFsU3RhdGUiLCJzIiwiYWR1bHQiLCJiYWNrZHJvcF9wYXRoIiwiZ2VucmVfaWRzIiwiaWQiLCJvcmlnaW5hbF9sYW5ndWFnZSIsIm9yaWdpbmFsX3RpdGxlIiwib3ZlcnZpZXciLCJwb3B1bGFyaXR5IiwicG9zdGVyX3BhdGgiLCJyZWxlYXNlX2RhdGUiLCJ0aXRsZSIsInZpZGVvIiwidm90ZV9hdmVyYWdlIiwidm90ZV9jb3VudCIsIm1vdmllUmVkdWNlciIsIm5hbWUiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiZiIsImFkZENhc2UiLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVqZWN0ZWQiLCJyZWR1Y2VyIl0sInNvdXJjZXMiOlsibW92aWVSZWR1Y2VyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBnZXRNb3ZpZSB9IGZyb20gJy4uL3RodW5rcy9tb3ZpZSc7XHJcbmltcG9ydCB7IElNb3ZpZSB9IGZyb20gJy4uL3R5cGVzL2ludGVyZmFjZXMnO1xyXG5cclxudHlwZSBJTW92aWVTdGF0ZSA9IHtcclxuICBtb3ZpZUluZm86IElNb3ZpZTtcclxuICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgZXJyb3I6IGJvb2xlYW47XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IElNb3ZpZVN0YXRlID0ge1xyXG4gIG1vdmllSW5mbzoge1xyXG4gICAgYWR1bHQ6IGZhbHNlLFxyXG4gICAgYmFja2Ryb3BfcGF0aDogJycsXHJcbiAgICBnZW5yZV9pZHM6IFtdLFxyXG4gICAgaWQ6ICcnLFxyXG4gICAgb3JpZ2luYWxfbGFuZ3VhZ2U6ICcnLFxyXG4gICAgb3JpZ2luYWxfdGl0bGU6ICcnLFxyXG4gICAgb3ZlcnZpZXc6ICcnLFxyXG4gICAgcG9wdWxhcml0eTogMCxcclxuICAgIHBvc3Rlcl9wYXRoOiAnJyxcclxuICAgIHJlbGVhc2VfZGF0ZTogJycsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICB2aWRlbzogZmFsc2UsXHJcbiAgICB2b3RlX2F2ZXJhZ2U6IDAsXHJcbiAgICB2b3RlX2NvdW50OiAwLFxyXG4gIH0sXHJcbiAgaXNMb2FkaW5nOiB0cnVlLFxyXG4gIGVycm9yOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IG1vdmllUmVkdWNlciA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnbW92aWUnLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge30sXHJcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcclxuICAgIGJ1aWxkZXJcclxuICAgICAgLmFkZENhc2UoZ2V0TW92aWUucGVuZGluZywgKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgfSlcclxuICAgICAgLmFkZENhc2UoZ2V0TW92aWUuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHN0YXRlLm1vdmllSW5mbyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuYWRkQ2FzZShnZXRNb3ZpZS5yZWplY3RlZCwgKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgc3RhdGUuZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vdmllUmVkdWNlci5yZWR1Y2VyO1xyXG4iXSwi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