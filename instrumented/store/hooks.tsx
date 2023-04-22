function cov_9txd8zs8y() {
  var path = "C:\\Users\\anast\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\REACT - RSS\\task6\\src\\store\\hooks.tsx";
  var hash = "580d3dfa6e993415d0e03d1fc4a9b867a535a7a9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\anast\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\REACT - RSS\\task6\\src\\store\\hooks.tsx",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 30
        },
        end: {
          line: 4,
          column: 62
        }
      },
      "1": {
        start: {
          line: 4,
          column: 36
        },
        end: {
          line: 4,
          column: 62
        }
      },
      "2": {
        start: {
          line: 5,
          column: 63
        },
        end: {
          line: 5,
          column: 74
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 30
          },
          end: {
            line: 4,
            column: 31
          }
        },
        loc: {
          start: {
            line: 4,
            column: 36
          },
          end: {
            line: 4,
            column: 62
          }
        },
        line: 4
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "580d3dfa6e993415d0e03d1fc4a9b867a535a7a9"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_9txd8zs8y = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_9txd8zs8y();
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
cov_9txd8zs8y().s[0]++;
export const useAppDispatch = () => {
  cov_9txd8zs8y().f[0]++;
  cov_9txd8zs8y().s[1]++;
  return useDispatch<AppDispatch>();
};
export const useAppSelector: TypedUseSelectorHook<RootState> = (cov_9txd8zs8y().s[2]++, useSelector);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfOXR4ZDh6czh5IiwiYWN0dWFsQ292ZXJhZ2UiLCJUeXBlZFVzZVNlbGVjdG9ySG9vayIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJSb290U3RhdGUiLCJBcHBEaXNwYXRjaCIsInMiLCJ1c2VBcHBEaXNwYXRjaCIsImYiLCJ1c2VBcHBTZWxlY3RvciJdLCJzb3VyY2VzIjpbImhvb2tzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlZFVzZVNlbGVjdG9ySG9vaywgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgdHlwZSB7IFJvb3RTdGF0ZSwgQXBwRGlzcGF0Y2ggfSBmcm9tICcuL3N0b3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBcHBEaXNwYXRjaCA9ICgpID0+IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xyXG5leHBvcnQgY29uc3QgdXNlQXBwU2VsZWN0b3I6IFR5cGVkVXNlU2VsZWN0b3JIb29rPFJvb3RTdGF0ZT4gPSB1c2VTZWxlY3RvcjtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxhQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxhQUFBO0FBZlosU0FBU0Usb0JBQW9CLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxRQUFRLGFBQWE7QUFDNUUsY0FBY0MsU0FBUyxFQUFFQyxXQUFXLFFBQVEsU0FBUztBQUFDTixhQUFBLEdBQUFPLENBQUE7QUFFdEQsT0FBTyxNQUFNQyxjQUFjLEdBQUdBLENBQUEsS0FBTTtFQUFBUixhQUFBLEdBQUFTLENBQUE7RUFBQVQsYUFBQSxHQUFBTyxDQUFBO0VBQUEsT0FBQUosV0FBVyxDQUFDRyxXQUFXLENBQUMsRUFBRTtBQUFELENBQUM7QUFDOUQsT0FBTyxNQUFNSSxjQUFjLEVBQUVSLG9CQUFvQixDQUFDRyxTQUFTLENBQUMsSUFBQUwsYUFBQSxHQUFBTyxDQUFBLE9BQUdILFdBQVcifQ==