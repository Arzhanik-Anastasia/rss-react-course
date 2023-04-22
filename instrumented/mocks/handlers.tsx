function cov_2h950tsuvc() {
  var path = "C:\\Users\\anast\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\REACT - RSS\\task6\\src\\mocks\\handlers.tsx";
  var hash = "138108f896de847cc7e272d037de1cfe0eceb94e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\anast\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\REACT - RSS\\task6\\src\\mocks\\handlers.tsx",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 16
        },
        end: {
          line: 4,
          column: 46
        }
      },
      "1": {
        start: {
          line: 5,
          column: 18
        },
        end: {
          line: 5,
          column: 52
        }
      },
      "2": {
        start: {
          line: 7,
          column: 24
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "3": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 51
        }
      },
      "4": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 50
        }
      },
      "5": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 51
        }
      },
      "6": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 37
        }
      },
      "7": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 51
        }
      },
      "8": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 43
        }
      },
      "9": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 50
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 40
          },
          end: {
            line: 8,
            column: 41
          }
        },
        loc: {
          start: {
            line: 8,
            column: 59
          },
          end: {
            line: 11,
            column: 3
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 38
          },
          end: {
            line: 12,
            column: 39
          }
        },
        loc: {
          start: {
            line: 12,
            column: 57
          },
          end: {
            line: 15,
            column: 3
          }
        },
        line: 12
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 16,
            column: 38
          },
          end: {
            line: 16,
            column: 39
          }
        },
        loc: {
          start: {
            line: 16,
            column: 57
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 16
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
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "138108f896de847cc7e272d037de1cfe0eceb94e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2h950tsuvc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2h950tsuvc();
import { rest } from 'msw';
import { movies, results } from './mockMovie';
const API_URL = (cov_2h950tsuvc().s[0]++, 'https://api.themoviedb.org/3');
const API_KEY_3 = (cov_2h950tsuvc().s[1]++, '7626fdae3c4ee9c8b35ddb93a4196b97');
export const handlers = (cov_2h950tsuvc().s[2]++, [rest.get(`${API_URL}/discover/movie`, (req, res, ctx) => {
  cov_2h950tsuvc().f[0]++;
  cov_2h950tsuvc().s[3]++;
  req.url.searchParams.set('api_key', API_KEY_3);
  cov_2h950tsuvc().s[4]++;
  return res(ctx.status(200), ctx.json(movies));
}), rest.get(`${API_URL}/movie/303857`, (req, res, ctx) => {
  cov_2h950tsuvc().f[1]++;
  cov_2h950tsuvc().s[5]++;
  req.url.searchParams.set('api_key', API_KEY_3);
  cov_2h950tsuvc().s[6]++;
  return res(ctx.json(results[0]));
}), rest.get(`${API_URL}/search/movie`, (req, res, ctx) => {
  cov_2h950tsuvc().f[2]++;
  cov_2h950tsuvc().s[7]++;
  req.url.searchParams.set('api_key', API_KEY_3);
  cov_2h950tsuvc().s[8]++;
  req.url.searchParams.set('search', '');
  cov_2h950tsuvc().s[9]++;
  return res(ctx.status(200), ctx.json(movies));
})]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmg5NTB0c3V2YyIsImFjdHVhbENvdmVyYWdlIiwicmVzdCIsIm1vdmllcyIsInJlc3VsdHMiLCJBUElfVVJMIiwicyIsIkFQSV9LRVlfMyIsImhhbmRsZXJzIiwiZ2V0IiwicmVxIiwicmVzIiwiY3R4IiwiZiIsInVybCIsInNlYXJjaFBhcmFtcyIsInNldCIsInN0YXR1cyIsImpzb24iXSwic291cmNlcyI6WyJoYW5kbGVycy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVzdCB9IGZyb20gJ21zdyc7XG5pbXBvcnQgeyBtb3ZpZXMsIHJlc3VsdHMgfSBmcm9tICcuL21vY2tNb3ZpZSc7XG5cbmNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMyc7XG5jb25zdCBBUElfS0VZXzMgPSAnNzYyNmZkYWUzYzRlZTljOGIzNWRkYjkzYTQxOTZiOTcnO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlcnMgPSBbXG4gIHJlc3QuZ2V0KGAke0FQSV9VUkx9L2Rpc2NvdmVyL21vdmllYCwgKHJlcSwgcmVzLCBjdHgpID0+IHtcbiAgICByZXEudXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2FwaV9rZXknLCBBUElfS0VZXzMpO1xuICAgIHJldHVybiByZXMoY3R4LnN0YXR1cygyMDApLCBjdHguanNvbihtb3ZpZXMpKTtcbiAgfSksXG4gIHJlc3QuZ2V0KGAke0FQSV9VUkx9L21vdmllLzMwMzg1N2AsIChyZXEsIHJlcywgY3R4KSA9PiB7XG4gICAgcmVxLnVybC5zZWFyY2hQYXJhbXMuc2V0KCdhcGlfa2V5JywgQVBJX0tFWV8zKTtcbiAgICByZXR1cm4gcmVzKGN0eC5qc29uKHJlc3VsdHNbMF0pKTtcbiAgfSksXG4gIHJlc3QuZ2V0KGAke0FQSV9VUkx9L3NlYXJjaC9tb3ZpZWAsIChyZXEsIHJlcywgY3R4KSA9PiB7XG4gICAgcmVxLnVybC5zZWFyY2hQYXJhbXMuc2V0KCdhcGlfa2V5JywgQVBJX0tFWV8zKTtcbiAgICByZXEudXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3NlYXJjaCcsICcnKTtcbiAgICByZXR1cm4gcmVzKGN0eC5zdGF0dXMoMjAwKSwgY3R4Lmpzb24obW92aWVzKSk7XG4gIH0pLFxuXTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixTQUFTRSxJQUFJLFFBQVEsS0FBSztBQUMxQixTQUFTQyxNQUFNLEVBQUVDLE9BQU8sUUFBUSxhQUFhO0FBRTdDLE1BQU1DLE9BQU8sSUFBQUwsY0FBQSxHQUFBTSxDQUFBLE9BQUcsOEJBQThCO0FBQzlDLE1BQU1DLFNBQVMsSUFBQVAsY0FBQSxHQUFBTSxDQUFBLE9BQUcsa0NBQWtDO0FBRXBELE9BQU8sTUFBTUUsUUFBUSxJQUFBUixjQUFBLEdBQUFNLENBQUEsT0FBRyxDQUN0QkosSUFBSSxDQUFDTyxHQUFHLENBQUUsR0FBRUosT0FBUSxpQkFBZ0IsRUFBRSxDQUFDSyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxLQUFLO0VBQUFaLGNBQUEsR0FBQWEsQ0FBQTtFQUFBYixjQUFBLEdBQUFNLENBQUE7RUFDdkRJLEdBQUcsQ0FBQ0ksR0FBRyxDQUFDQyxZQUFZLENBQUNDLEdBQUcsQ0FBQyxTQUFTLEVBQUVULFNBQVMsQ0FBQztFQUFDUCxjQUFBLEdBQUFNLENBQUE7RUFDL0MsT0FBT0ssR0FBRyxDQUFDQyxHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRUwsR0FBRyxDQUFDTSxJQUFJLENBQUNmLE1BQU0sQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQyxFQUNGRCxJQUFJLENBQUNPLEdBQUcsQ0FBRSxHQUFFSixPQUFRLGVBQWMsRUFBRSxDQUFDSyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxLQUFLO0VBQUFaLGNBQUEsR0FBQWEsQ0FBQTtFQUFBYixjQUFBLEdBQUFNLENBQUE7RUFDckRJLEdBQUcsQ0FBQ0ksR0FBRyxDQUFDQyxZQUFZLENBQUNDLEdBQUcsQ0FBQyxTQUFTLEVBQUVULFNBQVMsQ0FBQztFQUFDUCxjQUFBLEdBQUFNLENBQUE7RUFDL0MsT0FBT0ssR0FBRyxDQUFDQyxHQUFHLENBQUNNLElBQUksQ0FBQ2QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDLEVBQ0ZGLElBQUksQ0FBQ08sR0FBRyxDQUFFLEdBQUVKLE9BQVEsZUFBYyxFQUFFLENBQUNLLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEtBQUs7RUFBQVosY0FBQSxHQUFBYSxDQUFBO0VBQUFiLGNBQUEsR0FBQU0sQ0FBQTtFQUNyREksR0FBRyxDQUFDSSxHQUFHLENBQUNDLFlBQVksQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsRUFBRVQsU0FBUyxDQUFDO0VBQUNQLGNBQUEsR0FBQU0sQ0FBQTtFQUMvQ0ksR0FBRyxDQUFDSSxHQUFHLENBQUNDLFlBQVksQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7RUFBQ2hCLGNBQUEsR0FBQU0sQ0FBQTtFQUN2QyxPQUFPSyxHQUFHLENBQUNDLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFTCxHQUFHLENBQUNNLElBQUksQ0FBQ2YsTUFBTSxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDLENBQ0gifQ==