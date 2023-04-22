function cov_29ozklh0da() {
  var path = "C:\\Users\\anast\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\REACT - RSS\\task6\\src\\store\\store.tsx";
  var hash = "c7566fd85700d186be040110187096f63a272697";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\anast\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\REACT - RSS\\task6\\src\\store\\store.tsx",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 21
        },
        end: {
          line: 16,
          column: 2
        }
      },
      "1": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 15,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 14
          },
          end: {
            line: 12,
            column: 15
          }
        },
        loc: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 15,
            column: 6
          }
        },
        line: 13
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c7566fd85700d186be040110187096f63a272697"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_29ozklh0da = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_29ozklh0da();
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import moviesReducer from './../reducer/moviesReducer';
import formReducer from './../reducer/formReducer';
import movieReducer from './../reducer/movieReducer';
export const store = (cov_29ozklh0da().s[0]++, configureStore({
  reducer: {
    moviesCard: moviesReducer,
    movieCard: movieReducer,
    formCard: formReducer
  },
  middleware: getDefaultMiddleware => {
    cov_29ozklh0da().f[0]++;
    cov_29ozklh0da().s[1]++;
    return getDefaultMiddleware({
      serializableCheck: false
    });
  }
}));
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMjlvemtsaDBkYSIsImFjdHVhbENvdmVyYWdlIiwiY29uZmlndXJlU3RvcmUiLCJUaHVua0FjdGlvbiIsIkFjdGlvbiIsIm1vdmllc1JlZHVjZXIiLCJmb3JtUmVkdWNlciIsIm1vdmllUmVkdWNlciIsInN0b3JlIiwicyIsInJlZHVjZXIiLCJtb3ZpZXNDYXJkIiwibW92aWVDYXJkIiwiZm9ybUNhcmQiLCJtaWRkbGV3YXJlIiwiZ2V0RGVmYXVsdE1pZGRsZXdhcmUiLCJmIiwic2VyaWFsaXphYmxlQ2hlY2siLCJBcHBEaXNwYXRjaCIsImRpc3BhdGNoIiwiUm9vdFN0YXRlIiwiUmV0dXJuVHlwZSIsImdldFN0YXRlIiwiQXBwVGh1bmsiXSwic291cmNlcyI6WyJzdG9yZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUsIFRodW5rQWN0aW9uLCBBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IG1vdmllc1JlZHVjZXIgZnJvbSAnLi8uLi9yZWR1Y2VyL21vdmllc1JlZHVjZXInO1xyXG5pbXBvcnQgZm9ybVJlZHVjZXIgZnJvbSAnLi8uLi9yZWR1Y2VyL2Zvcm1SZWR1Y2VyJztcclxuaW1wb3J0IG1vdmllUmVkdWNlciBmcm9tICcuLy4uL3JlZHVjZXIvbW92aWVSZWR1Y2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiB7XHJcbiAgICBtb3ZpZXNDYXJkOiBtb3ZpZXNSZWR1Y2VyLFxyXG4gICAgbW92aWVDYXJkOiBtb3ZpZVJlZHVjZXIsXHJcbiAgICBmb3JtQ2FyZDogZm9ybVJlZHVjZXIsXHJcbiAgfSxcclxuICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+XHJcbiAgICBnZXREZWZhdWx0TWlkZGxld2FyZSh7XHJcbiAgICAgIHNlcmlhbGl6YWJsZUNoZWNrOiBmYWxzZSxcclxuICAgIH0pLFxyXG59KTtcclxuXHJcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoO1xyXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBzdG9yZS5nZXRTdGF0ZT47XHJcbmV4cG9ydCB0eXBlIEFwcFRodW5rPFJldHVyblR5cGUgPSB2b2lkPiA9IFRodW5rQWN0aW9uPFxyXG4gIFJldHVyblR5cGUsXHJcbiAgUm9vdFN0YXRlLFxyXG4gIHVua25vd24sXHJcbiAgQWN0aW9uPHN0cmluZz5cclxuPjtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQWZaLFNBQVNFLGNBQWMsRUFBRUMsV0FBVyxFQUFFQyxNQUFNLFFBQVEsa0JBQWtCO0FBQ3RFLE9BQU9DLGFBQWEsTUFBTSw0QkFBNEI7QUFDdEQsT0FBT0MsV0FBVyxNQUFNLDBCQUEwQjtBQUNsRCxPQUFPQyxZQUFZLE1BQU0sMkJBQTJCO0FBRXBELE9BQU8sTUFBTUMsS0FBSyxJQUFBUixjQUFBLEdBQUFTLENBQUEsT0FBR1AsY0FBYyxDQUFDO0VBQ2xDUSxPQUFPLEVBQUU7SUFDUEMsVUFBVSxFQUFFTixhQUFhO0lBQ3pCTyxTQUFTLEVBQUVMLFlBQVk7SUFDdkJNLFFBQVEsRUFBRVA7RUFDWixDQUFDO0VBQ0RRLFVBQVUsRUFBR0Msb0JBQW9CLElBQy9CO0lBQUFmLGNBQUEsR0FBQWdCLENBQUE7SUFBQWhCLGNBQUEsR0FBQVMsQ0FBQTtJQUFBLE9BQUFNLG9CQUFvQixDQUFDO01BQ25CRSxpQkFBaUIsRUFBRTtJQUNyQixDQUFDLENBQUM7RUFBRDtBQUNMLENBQUMsQ0FBQztBQUVGLE9BQU8sS0FBS0MsV0FBVyxHQUFHLE9BQU9WLEtBQUssQ0FBQ1csUUFBUTtBQUMvQyxPQUFPLEtBQUtDLFNBQVMsR0FBR0MsVUFBVSxDQUFDLE9BQU9iLEtBQUssQ0FBQ2MsUUFBUSxDQUFDO0FBQ3pELE9BQU8sS0FBS0MsUUFBUSxDQUFDLGFBQWEsSUFBSSxDQUFDLEdBQUdwQixXQUFXLENBQ25Ea0IsVUFBVSxFQUNWRCxTQUFTLEVBQ1QsT0FBTyxFQUNQaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUNmIn0=