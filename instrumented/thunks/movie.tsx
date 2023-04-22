function cov_1hlp5zyu70() {
  var path = "C:\\Users\\anast\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\REACT - RSS\\task6\\src\\thunks\\movie.tsx";
  var hash = "671d4fbfb9763e8a1122d59b86da57e9b064f14f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\anast\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\REACT - RSS\\task6\\src\\thunks\\movie.tsx",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 25
        },
        end: {
          line: 19,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 18,
          column: 3
        }
      },
      "2": {
        start: {
          line: 7,
          column: 6
        },
        end: {
          line: 13,
          column: 11
        }
      },
      "3": {
        start: {
          line: 14,
          column: 17
        },
        end: {
          line: 14,
          column: 38
        }
      },
      "4": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 16
        }
      },
      "5": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 44
        }
      },
      "6": {
        start: {
          line: 21,
          column: 24
        },
        end: {
          line: 30,
          column: 2
        }
      },
      "7": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 29,
          column: 3
        }
      },
      "8": {
        start: {
          line: 23,
          column: 21
        },
        end: {
          line: 23,
          column: 79
        }
      },
      "9": {
        start: {
          line: 25,
          column: 17
        },
        end: {
          line: 25,
          column: 38
        }
      },
      "10": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 16
        }
      },
      "11": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 44
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 56
          },
          end: {
            line: 4,
            column: 57
          }
        },
        loc: {
          start: {
            line: 4,
            column: 82
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 21,
            column: 54
          },
          end: {
            line: 21,
            column: 55
          }
        },
        loc: {
          start: {
            line: 21,
            column: 76
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 21
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 6
          },
          end: {
            line: 13,
            column: 11
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 8,
            column: 10
          },
          end: {
            line: 10,
            column: 11
          }
        }, {
          start: {
            line: 11,
            column: 10
          },
          end: {
            line: 13,
            column: 11
          }
        }],
        line: 7
      }
    },
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
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "671d4fbfb9763e8a1122d59b86da57e9b064f14f"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1hlp5zyu70 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1hlp5zyu70();
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY_3, API_URL } from './../utils/constants';
export const getMovies = (cov_1hlp5zyu70().s[0]++, createAsyncThunk('movies/get', async (search: string) => {
  cov_1hlp5zyu70().f[0]++;
  cov_1hlp5zyu70().s[1]++;
  try {
    const response = (cov_1hlp5zyu70().s[2]++, search === '' ? (cov_1hlp5zyu70().b[0][0]++, await fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=popularity.desc&page=1`)) : (cov_1hlp5zyu70().b[0][1]++, await fetch(`${API_URL}/search/movie?api_key=${API_KEY_3}&query=${search}&sort_by=popularity.desc&page=1`)));
    const data = (cov_1hlp5zyu70().s[3]++, await response.json());
    cov_1hlp5zyu70().s[4]++;
    return data;
  } catch (err) {
    cov_1hlp5zyu70().s[5]++;
    throw new Error((err as Error).message);
  }
}));
export const getMovie = (cov_1hlp5zyu70().s[6]++, createAsyncThunk('movie/get', async (id: string) => {
  cov_1hlp5zyu70().f[1]++;
  cov_1hlp5zyu70().s[7]++;
  try {
    const response = (cov_1hlp5zyu70().s[8]++, await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY_3}`));
    const data = (cov_1hlp5zyu70().s[9]++, await response.json());
    cov_1hlp5zyu70().s[10]++;
    return data;
  } catch (err) {
    cov_1hlp5zyu70().s[11]++;
    throw new Error((err as Error).message);
  }
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWhscDV6eXU3MCIsImFjdHVhbENvdmVyYWdlIiwiY3JlYXRlQXN5bmNUaHVuayIsIkFQSV9LRVlfMyIsIkFQSV9VUkwiLCJnZXRNb3ZpZXMiLCJzIiwic2VhcmNoIiwiZiIsInJlc3BvbnNlIiwiYiIsImZldGNoIiwiZGF0YSIsImpzb24iLCJlcnIiLCJFcnJvciIsIm1lc3NhZ2UiLCJnZXRNb3ZpZSIsImlkIl0sInNvdXJjZXMiOlsibW92aWUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgQVBJX0tFWV8zLCBBUElfVVJMIH0gZnJvbSAnLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1vdmllcyA9IGNyZWF0ZUFzeW5jVGh1bmsoJ21vdmllcy9nZXQnLCBhc3luYyAoc2VhcmNoOiBzdHJpbmcpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPVxyXG4gICAgICBzZWFyY2ggPT09ICcnXHJcbiAgICAgICAgPyBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICAgYCR7QVBJX1VSTH0vZGlzY292ZXIvbW92aWU/YXBpX2tleT0ke0FQSV9LRVlfM30mc29ydF9ieT1wb3B1bGFyaXR5LmRlc2MmcGFnZT0xYFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIDogYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICAgIGAke0FQSV9VUkx9L3NlYXJjaC9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWV8zfSZxdWVyeT0ke3NlYXJjaH0mc29ydF9ieT1wb3B1bGFyaXR5LmRlc2MmcGFnZT0xYFxyXG4gICAgICAgICAgKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigoZXJyIGFzIEVycm9yKS5tZXNzYWdlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1vdmllID0gY3JlYXRlQXN5bmNUaHVuaygnbW92aWUvZ2V0JywgYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9tb3ZpZS8ke2lkfT9hcGlfa2V5PSR7QVBJX0tFWV8zfWApO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigoZXJyIGFzIEVycm9yKS5tZXNzYWdlKTtcclxuICB9XHJcbn0pO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxjQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxjQUFBO0FBZlosU0FBU0UsZ0JBQWdCLFFBQVEsa0JBQWtCO0FBQ25ELFNBQVNDLFNBQVMsRUFBRUMsT0FBTyxRQUFRLHNCQUFzQjtBQUV6RCxPQUFPLE1BQU1DLFNBQVMsSUFBQUwsY0FBQSxHQUFBTSxDQUFBLE9BQUdKLGdCQUFnQixDQUFDLFlBQVksRUFBRSxPQUFPSyxNQUFNLEVBQUUsTUFBTSxLQUFLO0VBQUFQLGNBQUEsR0FBQVEsQ0FBQTtFQUFBUixjQUFBLEdBQUFNLENBQUE7RUFDaEYsSUFBSTtJQUNGLE1BQU1HLFFBQVEsSUFBQVQsY0FBQSxHQUFBTSxDQUFBLE9BQ1pDLE1BQU0sS0FBSyxFQUFFLElBQUFQLGNBQUEsR0FBQVUsQ0FBQSxVQUNULE1BQU1DLEtBQUssQ0FDUixHQUFFUCxPQUFRLDJCQUEwQkQsU0FBVSxpQ0FBZ0MsQ0FDaEYsS0FBQUgsY0FBQSxHQUFBVSxDQUFBLFVBQ0QsTUFBTUMsS0FBSyxDQUNSLEdBQUVQLE9BQVEseUJBQXdCRCxTQUFVLFVBQVNJLE1BQU8saUNBQWdDLENBQzlGO0lBQ1AsTUFBTUssSUFBSSxJQUFBWixjQUFBLEdBQUFNLENBQUEsT0FBRyxNQUFNRyxRQUFRLENBQUNJLElBQUksRUFBRTtJQUFDYixjQUFBLEdBQUFNLENBQUE7SUFDbkMsT0FBT00sSUFBSTtFQUNiLENBQUMsQ0FBQyxPQUFPRSxHQUFHLEVBQUU7SUFBQWQsY0FBQSxHQUFBTSxDQUFBO0lBQ1osTUFBTSxJQUFJUyxLQUFLLENBQUMsQ0FBQ0QsR0FBRyxJQUFJQyxLQUFLLEVBQUVDLE9BQU8sQ0FBQztFQUN6QztBQUNGLENBQUMsQ0FBQztBQUVGLE9BQU8sTUFBTUMsUUFBUSxJQUFBakIsY0FBQSxHQUFBTSxDQUFBLE9BQUdKLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxPQUFPZ0IsRUFBRSxFQUFFLE1BQU0sS0FBSztFQUFBbEIsY0FBQSxHQUFBUSxDQUFBO0VBQUFSLGNBQUEsR0FBQU0sQ0FBQTtFQUMxRSxJQUFJO0lBQ0YsTUFBTUcsUUFBUSxJQUFBVCxjQUFBLEdBQUFNLENBQUEsT0FBRyxNQUFNSyxLQUFLLENBQUUsR0FBRVAsT0FBUSxVQUFTYyxFQUFHLFlBQVdmLFNBQVUsRUFBQyxDQUFDO0lBRTNFLE1BQU1TLElBQUksSUFBQVosY0FBQSxHQUFBTSxDQUFBLE9BQUcsTUFBTUcsUUFBUSxDQUFDSSxJQUFJLEVBQUU7SUFBQ2IsY0FBQSxHQUFBTSxDQUFBO0lBQ25DLE9BQU9NLElBQUk7RUFDYixDQUFDLENBQUMsT0FBT0UsR0FBRyxFQUFFO0lBQUFkLGNBQUEsR0FBQU0sQ0FBQTtJQUNaLE1BQU0sSUFBSVMsS0FBSyxDQUFDLENBQUNELEdBQUcsSUFBSUMsS0FBSyxFQUFFQyxPQUFPLENBQUM7RUFDekM7QUFDRixDQUFDLENBQUMifQ==