function cov_21ychsp29g() {
  var path = "C:\\Users\\anast\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\REACT - RSS\\task6\\src\\utils\\helpers.tsx";
  var hash = "3d10f30fab55a9abe1cb2199e1b1442fbc697b41";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\anast\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\REACT - RSS\\task6\\src\\utils\\helpers.tsx",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 27
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 14
        },
        end: {
          line: 2,
          column: 24
        }
      },
      "2": {
        start: {
          line: 3,
          column: 16
        },
        end: {
          line: 3,
          column: 74
        }
      },
      "3": {
        start: {
          line: 4,
          column: 14
        },
        end: {
          line: 4,
          column: 29
        }
      },
      "4": {
        start: {
          line: 5,
          column: 17
        },
        end: {
          line: 5,
          column: 77
        }
      },
      "5": {
        start: {
          line: 6,
          column: 12
        },
        end: {
          line: 6,
          column: 51
        }
      },
      "6": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 9,
          column: 3
        }
      },
      "7": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 18
        }
      },
      "8": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 34
        }
      },
      "9": {
        start: {
          line: 13,
          column: 24
        },
        end: {
          line: 18,
          column: 1
        }
      },
      "10": {
        start: {
          line: 14,
          column: 16
        },
        end: {
          line: 14,
          column: 26
        }
      },
      "11": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 17,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 27
          },
          end: {
            line: 1,
            column: 28
          }
        },
        loc: {
          start: {
            line: 1,
            column: 55
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 13,
            column: 24
          },
          end: {
            line: 13,
            column: 25
          }
        },
        loc: {
          start: {
            line: 13,
            column: 38
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 13
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 9,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 9,
            column: 3
          }
        }, {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 9,
            column: 3
          }
        }],
        line: 7
      },
      "1": {
        loc: {
          start: {
            line: 10,
            column: 9
          },
          end: {
            line: 10,
            column: 33
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 10,
            column: 21
          },
          end: {
            line: 10,
            column: 25
          }
        }, {
          start: {
            line: 10,
            column: 28
          },
          end: {
            line: 10,
            column: 33
          }
        }],
        line: 10
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
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3d10f30fab55a9abe1cb2199e1b1442fbc697b41"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_21ychsp29g = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_21ychsp29g();
cov_21ychsp29g().s[0]++;
export const checkedDate = (value: string): boolean => {
  cov_21ychsp29g().f[0]++;
  const now = (cov_21ychsp29g().s[1]++, new Date());
  const today = (cov_21ychsp29g().s[2]++, new Date(now.getFullYear(), now.getMonth(), now.getDate()));
  const dob = (cov_21ychsp29g().s[3]++, new Date(value));
  const dobnow = (cov_21ychsp29g().s[4]++, new Date(today.getFullYear(), dob.getMonth(), dob.getDate()));
  let age = (cov_21ychsp29g().s[5]++, today.getFullYear() - dob.getFullYear());
  cov_21ychsp29g().s[6]++;
  if (today < dobnow) {
    cov_21ychsp29g().b[0][0]++;
    cov_21ychsp29g().s[7]++;
    age = age - 1;
  } else {
    cov_21ychsp29g().b[0][1]++;
  }
  cov_21ychsp29g().s[8]++;
  return age >= 18 ? (cov_21ychsp29g().b[1][0]++, true) : (cov_21ychsp29g().b[1][1]++, false);
};
cov_21ychsp29g().s[9]++;
export const getToday = (): string => {
  cov_21ychsp29g().f[1]++;
  const today = (cov_21ychsp29g().s[10]++, new Date());
  cov_21ychsp29g().s[11]++;
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMjF5Y2hzcDI5ZyIsImFjdHVhbENvdmVyYWdlIiwicyIsImNoZWNrZWREYXRlIiwidmFsdWUiLCJmIiwibm93IiwiRGF0ZSIsInRvZGF5IiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJkb2IiLCJkb2Jub3ciLCJhZ2UiLCJiIiwiZ2V0VG9kYXkiLCJTdHJpbmciLCJwYWRTdGFydCJdLCJzb3VyY2VzIjpbImhlbHBlcnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjaGVja2VkRGF0ZSA9ICh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XHJcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgbm93LmdldERhdGUoKSk7XHJcbiAgY29uc3QgZG9iID0gbmV3IERhdGUodmFsdWUpO1xyXG4gIGNvbnN0IGRvYm5vdyA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIGRvYi5nZXRNb250aCgpLCBkb2IuZ2V0RGF0ZSgpKTtcclxuICBsZXQgYWdlID0gdG9kYXkuZ2V0RnVsbFllYXIoKSAtIGRvYi5nZXRGdWxsWWVhcigpO1xyXG4gIGlmICh0b2RheSA8IGRvYm5vdykge1xyXG4gICAgYWdlID0gYWdlIC0gMTtcclxuICB9XHJcbiAgcmV0dXJuIGFnZSA+PSAxOCA/IHRydWUgOiBmYWxzZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUb2RheSA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICByZXR1cm4gYCR7dG9kYXkuZ2V0RnVsbFllYXIoKX0tJHtTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyl9LSR7U3RyaW5nKFxyXG4gICAgdG9kYXkuZ2V0RGF0ZSgpXHJcbiAgKS5wYWRTdGFydCgyLCAnMCcp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