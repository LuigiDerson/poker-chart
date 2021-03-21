/* eslint-disable */
(function (t) {
  function e(e) {
    for (
      var s, a, l = e[0], r = e[1], c = e[2], d = 0, u = [];
      d < l.length;
      d++
    )
      (a = l[d]), o[a] && u.push(o[a][0]), (o[a] = 0)
    for (s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s])
    h && h(e)
    while (u.length) u.shift()()
    return n.push.apply(n, c || []), i()
  }
  function i() {
    for (var t, e = 0; e < n.length; e++) {
      for (var i = n[e], s = !0, a = 1; a < i.length; a++) {
        var l = i[a]
        0 !== o[l] && (s = !1)
      }
      s && (n.splice(e--, 1), (t = r((r.s = i[0]))))
    }
    return t
  }
  var s = {},
    a = {
      app: 0,
    },
    o = {
      app: 0,
    },
    n = []
  function l(t) {
    return (
      r.p +
      'js/' +
      ({
        user: 'user',
      }[t] || t) +
      '.' +
      {
        user: '05841ea4',
      }[t] +
      '.js'
    )
  }
  function r(e) {
    if (s[e]) return s[e].exports
    var i = (s[e] = {
      i: e,
      l: !1,
      exports: {},
    })
    return t[e].call(i.exports, i, i.exports, r), (i.l = !0), i.exports
  }
  ;(r.e = function (t) {
    var e = [],
      i = {
        user: 1,
      }
    a[t]
      ? e.push(a[t])
      : 0 !== a[t] &&
        i[t] &&
        e.push(
          (a[t] = new Promise(function (e, i) {
            for (
              var s =
                  'css/' +
                  ({
                    user: 'user',
                  }[t] || t) +
                  '.' +
                  {
                    user: '9ca6c933',
                  }[t] +
                  '.css',
                o = r.p + s,
                n = document.getElementsByTagName('link'),
                l = 0;
              l < n.length;
              l++
            ) {
              var c = n[l],
                d = c.getAttribute('data-href') || c.getAttribute('href')
              if ('stylesheet' === c.rel && (d === s || d === o)) return e()
            }
            var u = document.getElementsByTagName('style')
            for (l = 0; l < u.length; l++) {
              ;(c = u[l]), (d = c.getAttribute('data-href'))
              if (d === s || d === o) return e()
            }
            var h = document.createElement('link')
            ;(h.rel = 'stylesheet'),
              (h.type = 'text/css'),
              (h.onload = e),
              (h.onerror = function (e) {
                var s = (e && e.target && e.target.src) || o,
                  n = new Error(
                    'Loading CSS chunk ' + t + ' failed.\n(' + s + ')'
                  )
                ;(n.code = 'CSS_CHUNK_LOAD_FAILED'),
                  (n.request = s),
                  delete a[t],
                  h.parentNode.removeChild(h),
                  i(n)
              }),
              (h.href = o)
            var p = document.getElementsByTagName('head')[0]
            p.appendChild(h)
          }).then(function () {
            a[t] = 0
          }))
        )
    var s = o[t]
    if (0 !== s)
      if (s) e.push(s[2])
      else {
        var n = new Promise(function (e, i) {
          s = o[t] = [e, i]
        })
        e.push((s[2] = n))
        var c,
          d = document.createElement('script')
        ;(d.charset = 'utf-8'),
          (d.timeout = 120),
          r.nc && d.setAttribute('nonce', r.nc),
          (d.src = l(t)),
          (c = function (e) {
            ;(d.onerror = d.onload = null), clearTimeout(u)
            var i = o[t]
            if (0 !== i) {
              if (i) {
                var s = e && ('load' === e.type ? 'missing' : e.type),
                  a = e && e.target && e.target.src,
                  n = new Error(
                    'Loading chunk ' + t + ' failed.\n(' + s + ': ' + a + ')'
                  )
                ;(n.type = s), (n.request = a), i[1](n)
              }
              o[t] = void 0
            }
          })
        var u = setTimeout(function () {
          c({
            type: 'timeout',
            target: d,
          })
        }, 12e4)
        ;(d.onerror = d.onload = c), document.head.appendChild(d)
      }
    return Promise.all(e)
  }),
    (r.m = t),
    (r.c = s),
    (r.d = function (t, e, i) {
      r.o(t, e) ||
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: i,
        })
    }),
    (r.r = function (t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {
          value: 'Module',
        }),
        Object.defineProperty(t, '__esModule', {
          value: !0,
        })
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t
      var i = Object.create(null)
      if (
        (r.r(i),
        Object.defineProperty(i, 'default', {
          enumerable: !0,
          value: t,
        }),
        2 & e && 'string' != typeof t)
      )
        for (var s in t)
          r.d(
            i,
            s,
            function (e) {
              return t[e]
            }.bind(null, s)
          )
      return i
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t['default']
            }
          : function () {
              return t
            }
      return r.d(e, 'a', e), e
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (r.p = '/reckoner/'),
    (r.oe = function (t) {
      throw (console.error(t), t)
    })
  var c = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    d = c.push.bind(c)
  ;(c.push = e), (c = c.slice())
  for (var u = 0; u < c.length; u++) e(c[u])
  var h = d
  n.push([0, 'chunk-vendors']), i()
})({
  0: function (t, e, i) {
    t.exports = i('56d7')
  },
  '10ec': function (t, e, i) {
    'use strict'
    var s = i('a5ae'),
      a = i.n(s)
    a.a
  },
  '161d': function (t, e, i) {},
  '1c2e': function (t, e, i) {
    t.exports = i.p + 'img/group-39.a858798a.svg'
  },
  '2a66': function (t, e, i) {},
  '2e03': function (t, e, i) {
    'use strict'
    var s = i('bc3a'),
      a = i.n(s),
      o = '/tool/v1/',
      n = a.a.create({
        baseURL: o,
        headers: {},
      })
    e['a'] = n
  },
  '3fa6': function (t, e) {
    t.exports =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAELklEQVRIS62Xf0jjdRjHX9vU9DK5S7jTqaemlD9Sm8j+mRmJMQkUTHRRINEfSUEeJUJ0SZ6iV044lCsphYKDovpDUAkx/wgCFcU2h3NOZ9t5mj+y+2EoN+du8ZGNdLcfX7Xnr/14nuf1eb7P+3k+mwzppvC6PgI80sMCe8okJrgApALC/w5wFxAHOLVJAV8EPgLqgHjgZ+ATwHiWysOBlcCnQC1w/kh5Q97DzJ+25FDgy8A14DUgzg8genwd6AE2TwMPBs4A2oAKIDZIYpfXpxfYPik8EPg5oB0oB54Mk3AfaAb6gHsngfuD87xVvAKck5hoD7gKfAM8kBhzOB4+ewH4DHgJiJaawOv3j1dstwDxOqz5wKK6HwBR6RNhowI7iEfdBHwPiKcQ0nzgFGAauBQuINj3ERER1NTU3FtaWrqyvb39k8PheBgqlw8sZvQXQAX4VqPkM0RGRtLU1ERpaSkbGxt/9vf3f7i1tTUwPz8vxBfQjvb4Te9GehaQS6UKaEtLCyUlJcTExHBwcOCxWq13ent7P3C5XEMzMzNi7B4zf1W/BbwPFEipPCoqivb2djQaDeK1z1wul2dhYcHe3d3dYDQaRwC3PznQHL8I3ASeD1V5dHQ0er0etVqNQvF4d5xOp8disSx2dXU1LCwsiDYeu9ECgcVnLwNfAGKZHPORyWTExsbS2dlJUVER4n0wczqdj8xms7mzs7PBZrP9etQvWJTosRgtAX/GBxeQ+Ph4Ojo6KCwslCSDvb0999zc3O96vb7Rbrf/5gsKdUlEAK96L4LLcrlclpiYSGtrKwUFQgLSzOPxsLu7ezA3NzfZ09PTuLi4OCUiw12LQjEVcrm8R6lUKtva2sjLE1v1ZCbgOzs7++Pj46PNzc01wMNwYEGITkpKqtHpdN06ne5CICFJOYZQuslkctTX14td8UAKGKVSeU6lUr1eV1enT09Pf1oulzzmh2dyu91sbm7eHxoa6u/r6/sYcEkCi+CcnJzY3NzcN2pra7vS0tKeCqXmo09AQNfX1++Ojo72T0xMfGkwGG5L6fGxp5iZmRmnVqvrqqurP09NTQ17bbrdbs/a2tpfIyMjX01OTn5tMplWpag6YOvS0tLOl5SUvF1VVXU9JSXlv3Xl5y1W5+rq6sbw8HCv2Wzum56e3pAyxyH1kpWVFa/RaN6pqKi4lpycHOnvLIS0srKyOjw8fHN2dvZbk8m0JWVlShEpGRkZF7Va7Xvl5eVXlUqlmPlDE1CHw3F7cHCwe3l5+dbU1NTfgRJKFleg4Ozs7EStVnulrKysMSEhIWJ/f99jt9uXBwYGbthstu+MRuP9YFWcCSySqlSq1OLi4ob8/Px3nU7nH2NjYzcsFsuPVqs15E+gM4PF9qusrIyNi4u7pFAoPAaDYcNkMu2G69f/AfafEEl/6P4FPatoLi7evwsAAAAASUVORK5CYII='
  },
  '555f': function (t, e, i) {
    'use strict'
    var s = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e
        return i(
          'div',
          {
            staticClass: 'text-center',
          },
          [
            i(
              'v-overlay',
              {
                attrs: {
                  value: t.overlay,
                },
              },
              [
                i('v-progress-circular', {
                  attrs: {
                    indeterminate: '',
                    size: '64',
                  },
                }),
              ],
              1
            ),
          ],
          1
        )
      },
      a = [],
      o = {
        name: 'Loader',
        props: ['overlay'],
      },
      n = o,
      l = i('2877'),
      r = i('6544'),
      c = i.n(r),
      d = i('a797'),
      u = i('490a'),
      h = Object(l['a'])(n, s, a, !1, null, null, null)
    e['a'] = h.exports
    c()(h, {
      VOverlay: d['a'],
      VProgressCircular: u['a'],
    })
  },
  '56d7': function (t, e, i) {
    'use strict'
    i.r(e)
    i('cadf'), i('551c'), i('f751'), i('097d')
    var s = i('2b0e'),
      a = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e
        return i(
          'v-app',
          [
            i('Navbar'),
            i(
              'v-content',
              {
                class: {
                  'black-background': 'user' === t.$route.name,
                },
                staticStyle: {
                  padding: '70px 0 0',
                },
              },
              [i('router-view')],
              1
            ),
            i('Footer'),
            i(
              'div',
              {
                on: {
                  click: function (e) {
                    return e.stopPropagation(), t.closeDropdown()
                  },
                },
              },
              [
                i('v-overlay', {
                  attrs: {
                    opacity: '0.8',
                    color: '#000001',
                    value: t.overlay,
                  },
                }),
              ],
              1
            ),
          ],
          1
        )
      },
      o = [],
      n =
        (i('28a5'),
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e
          return s(
            'div',
            [
              s(
                'v-app-bar',
                {
                  staticStyle: {
                    'background-color': '#161719',
                    height: '70px',
                    'justify-content': 'center',
                  },
                  attrs: {
                    id: 'mainNav11',
                    app: '',
                    dense: '',
                  },
                },
                [
                  s(
                    'a',
                    {
                      staticClass: 'logo-wrap',
                      attrs: {
                        href: t.baseurl,
                      },
                    },
                    [
                      s('img', {
                        staticClass: 'logo-img',
                        attrs: {
                          src: i('1c2e'),
                        },
                      }),
                    ]
                  ),
                  s(
                    'nav',
                    {
                      staticClass: 'main-menu',
                      attrs: {
                        id: 'main-menu',
                      },
                    },
                    [
                      s('ul', [
                        s(
                          'li',
                          [
                            s('i', {
                              staticClass: 'fa fa-filter filter-icon',
                            }),
                            s(
                              'font',
                              {
                                staticClass: 'logo-name',
                                staticStyle: {
                                  'vertical-align': 'inherit',
                                },
                                on: {
                                  click: function (e) {
                                    return t.clearFilters()
                                  },
                                },
                              },
                              [
                                s(
                                  'a',
                                  {
                                    staticStyle: {
                                      color: 'inherit',
                                    },
                                  },
                                  [
                                    s(
                                      'font',
                                      {
                                        staticStyle: {
                                          'vertical-align': 'inherit',
                                        },
                                      },
                                      [t._v('Reiniciar filtros')]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ]),
                    ]
                  ),
                ]
              ),
              'user' !== t.routeName
                ? s(
                    'v-app-bar',
                    {
                      staticClass: 'admin-navbar',
                      staticStyle: {
                        'margin-top': '70px',
                      },
                      attrs: {
                        app: '',
                        dense: '',
                      },
                    },
                    [
                      s(
                        'v-toolbar-title',
                        {
                          staticClass: 'headline',
                        },
                        [
                          s('span', [t._v(t._s(t.pathTitle) + ' ')]),
                          'home' !== t.routeName
                            ? s(
                                'span',
                                {
                                  staticClass: 'font-weight-light',
                                },
                                [t._v('dashboard')]
                              )
                            : t._e(),
                        ]
                      ),
                      s('v-spacer'),
                      'admin' === t.routeName
                        ? s(
                            'v-btn',
                            {
                              staticClass: 'mr-3',
                              attrs: {
                                small: '',
                                text: '',
                                to: '/asd4154er45ds/addSubscription',
                              },
                            },
                            [
                              s('v-icon', [t._v('add')]),
                              t._v('Subscripton Option'),
                            ],
                            1
                          )
                        : t._e(),
                      'admin' === t.routeName
                        ? s(
                            'v-btn',
                            {
                              staticClass: 'mr-3',
                              attrs: {
                                small: '',
                                text: '',
                                to: '/asd4154er45ds/addFilter',
                              },
                            },
                            [s('v-icon', [t._v('add')]), t._v('Filter Option')],
                            1
                          )
                        : t._e(),
                      'admin' === t.routeName
                        ? s(
                            'v-btn',
                            {
                              staticClass: 'mr-3',
                              attrs: {
                                small: '',
                                text: '',
                                to: '/user',
                              },
                            },
                            [s('v-icon', [t._v('add')]), t._v('Users Screen')],
                            1
                          )
                        : t._e(),
                    ],
                    1
                  )
                : t._e(),
            ],
            1
          )
        }),
      l = [],
      r =
        (i('7f7f'),
        {
          data: function () {
            return {
              baseurl: window.origin,
            }
          },
          created: function () {},
          computed: {
            routeName: function () {
              return this.$route.name
            },
            routePath: function () {
              return this.$route.path
                ? this.$route.path.split('/')[1]
                : this.routeName
            },
            title: function () {
              return this.routeName && this.routeName.length
                ? this.routeName[0].toUpperCase() + this.routeName.substr(1)
                : ''
            },
            pathTitle: function () {
              return this.routeName
                ? this.routeName[0].toUpperCase() + this.routeName.substr(1)
                : ''
            },
          },
          methods: {
            logout: function () {
              this.$router.push('/')
            },
            clearFilters: function () {
              pe.$emit('clearFilters')
            },
          },
        }),
      c = r,
      d = i('2877'),
      u = i('6544'),
      h = i.n(u),
      p = i('40dc'),
      f = i('8336'),
      v = i('132d'),
      b = i('2fa4'),
      m = i('2a7f'),
      g = Object(d['a'])(c, n, l, !1, null, null, null),
      S = g.exports
    h()(g, {
      VAppBar: p['a'],
      VBtn: f['a'],
      VIcon: v['a'],
      VSpacer: b['a'],
      VToolbarTitle: m['a'],
    })
    var C = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e
        return i(
          'v-footer',
          {
            staticStyle: {
              padding: '0',
            },
          },
          [
            i(
              'div',
              {
                staticClass: 'footer',
              },
              [
                i(
                  'div',
                  {
                    staticClass: 'footer-content',
                  },
                  [
                    i(
                      'a',
                      {
                        staticClass: 'social-block_icon',
                        attrs: {
                          href: 'https://www.twitch.tv/zerospoker',
                          target: '_blank',
                        },
                      },
                      [
                        i('i', {
                          staticClass: 'fa fa-twitch',
                        }),
                      ]
                    ),
                    i(
                      'a',
                      {
                        staticClass: 'social-block_icon',
                        attrs: {
                          href: 'https://www.instagram.com/zerospoker',
                          target: '_blank',
                        },
                      },
                      [
                        i('i', {
                          staticClass: 'fa fa-instagram',
                        }),
                      ]
                    ),
                    i(
                      'a',
                      {
                        staticClass: 'social-block_icon',
                        attrs: {
                          href: 'https://twitter.com/zerospoker',
                          target: '_blank',
                        },
                      },
                      [
                        i('i', {
                          staticClass: 'fa fa-twitter',
                        }),
                      ]
                    ),
                    i(
                      'a',
                      {
                        staticClass: 'social-block_icon',
                        attrs: {
                          href: 'https://www.youtube.com/c/ZeroSChannel',
                          target: '_blank',
                        },
                      },
                      [
                        i('i', {
                          staticClass: 'fa fa-youtube',
                        }),
                      ]
                    ),
                  ]
                ),
                i(
                  'div',
                  {
                    staticClass: 'footer-content',
                  },
                  [
                    i(
                      'nav',
                      {
                        staticClass: 'footer-menu',
                      },
                      [
                        i(
                          'ul',
                          {
                            staticClass: 'footer-menu__list',
                          },
                          [
                            i(
                              'li',
                              {
                                staticClass:
                                  'menu-item menu-item-type-post_type menu-item-object-page menu-item-47563',
                                attrs: {
                                  id: 'menu-item-47563',
                                },
                              },
                              [
                                i(
                                  'a',
                                  {
                                    attrs: {
                                      href:
                                        t.baseurl + '/terminos-y-condiciones/',
                                    },
                                  },
                                  [
                                    i(
                                      'font',
                                      {
                                        staticStyle: {
                                          'vertical-align': 'inherit',
                                        },
                                      },
                                      [
                                        i(
                                          'font',
                                          {
                                            staticStyle: {
                                              'vertical-align': 'inherit',
                                            },
                                          },
                                          [t._v('Términos y condiciones')]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            ),
                            i(
                              'li',
                              {
                                staticClass:
                                  'menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-47564',
                                attrs: {
                                  id: 'menu-item-47564',
                                },
                              },
                              [
                                i(
                                  'a',
                                  {
                                    attrs: {
                                      href: t.baseurl + '/aviso-legal/',
                                    },
                                  },
                                  [
                                    i(
                                      'font',
                                      {
                                        staticStyle: {
                                          'vertical-align': 'inherit',
                                        },
                                      },
                                      [
                                        i(
                                          'font',
                                          {
                                            staticStyle: {
                                              'vertical-align': 'inherit',
                                            },
                                          },
                                          [t._v('Privacidad')]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            ),
                            i(
                              'li',
                              {
                                staticClass:
                                  'menu-item menu-item-type-post_type menu-item-object-page menu-item-47565',
                                attrs: {
                                  id: 'menu-item-47565',
                                },
                              },
                              [
                                i(
                                  'a',
                                  {
                                    attrs: {
                                      href: t.baseurl + '/politica-de-cookies/',
                                    },
                                  },
                                  [
                                    i(
                                      'font',
                                      {
                                        staticStyle: {
                                          'vertical-align': 'inherit',
                                        },
                                      },
                                      [
                                        i(
                                          'font',
                                          {
                                            staticStyle: {
                                              'vertical-align': 'inherit',
                                            },
                                          },
                                          [t._v('Política de cookies')]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            ),
                            i(
                              'li',
                              {
                                staticClass:
                                  'menu-item menu-item-type-custom menu-item-object-custom menu-item-47566',
                                attrs: {
                                  id: 'menu-item-47566',
                                },
                              },
                              [
                                i(
                                  'a',
                                  {
                                    attrs: {
                                      href: 'mailto:soporte@zerospoker.com:',
                                    },
                                  },
                                  [
                                    i(
                                      'font',
                                      {
                                        staticStyle: {
                                          'vertical-align': 'inherit',
                                        },
                                      },
                                      [
                                        i(
                                          'font',
                                          {
                                            staticStyle: {
                                              'vertical-align': 'inherit',
                                              color: '#2bb7e2',
                                            },
                                          },
                                          [t._v('soporte@zerospoker.com')]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
                i(
                  'div',
                  {
                    staticClass: 'footer-content',
                  },
                  [
                    i(
                      'p',
                      {
                        staticClass: 'footer-enterprise-info',
                      },
                      [
                        i(
                          'font',
                          {
                            staticStyle: {
                              'vertical-align': 'inherit',
                            },
                          },
                          [
                            i(
                              'font',
                              {
                                staticStyle: {
                                  'vertical-align': 'inherit',
                                },
                              },
                              [t._v('Zeros Videos Limited')]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            ),
          ]
        )
      },
      k = [],
      F = {
        data: function () {
          return {
            baseurl: window.origin,
          }
        },
      },
      y = F,
      _ = i('553a'),
      w = Object(d['a'])(y, C, k, !1, null, null, null),
      O = w.exports
    h()(w, {
      VFooter: _['a'],
    })
    var I = i('2e03'),
      x = i('d225'),
      D = i('b0b4'),
      L = i('bd86'),
      q = Object({
        NODE_ENV: 'production',
        BASE_URL: '/reckoner/',
      }).VUE_APP_DEBUG,
      P = (function () {
        function t(e) {
          var i = this,
            s = e.onOpen,
            a = e.onClose,
            o = e.onMessage,
            n = e.onError,
            l = e.connectionUrl,
            r = e.pingInterval
          if (
            (Object(x['a'])(this, t),
            Object(L['a'])(this, 'onOpen', function (t) {
              ;(i.reconnectTries = 0),
                (i.lastReconnectTry = null),
                i.debug && console.log('[WS]: Connection is Open: ', t),
                (i.lastPongAt = +new Date()),
                i.dataToSendOnHold &&
                  (i.sendMessage(
                    i.dataToSendOnHold.data,
                    i.dataToSendOnHold.type
                  ),
                  (i.dataToSendOnHold = null)),
                i.$checkConnection(),
                i.onOpenHandler && i.onOpenHandler(t)
            }),
            Object(L['a'])(this, 'onClose', function (t) {
              clearInterval(i.pingIntervalId),
                i.debug && console.log('[WS]: Closing Sokcet: ', t),
                i.closedByUser ||
                  (1e3 !== t.code && i.$reconnect(),
                  i.onCloseHandler && i.onCloseHandler(t))
            }),
            Object(L['a'])(this, 'onError', function (t) {
              clearInterval(i.pingIntervalId),
                i.debug && console.log('[WS]: Error in socket: ', t),
                i.onErrorHandler && i.onErrorHandler(t)
            }),
            Object(L['a'])(this, 'onMessage', function (t) {
              i.debug &&
                console.log('[WS]: Message Received: ', t, i.WebSocketInstance),
                (i.lastPongAt = +new Date()),
                t &&
                  t.type &&
                  'pong' === t.type &&
                  (i.lastPongAt = +new Date()),
                i.onMessageHandler && i.onMessageHandler(t.data)
            }),
            Object(L['a'])(this, 'sendMessage', function (t, e) {
              if (
                (i.debug &&
                  console.log(
                    '[WS]: Sending Message: ',
                    t,
                    i.WebSocketInstance
                  ),
                1 !== i.WebSocketInstance.readyState)
              )
                return (
                  i.$reconnect(0),
                  void (i.dataToSendOnHold = {
                    data: t,
                    type: e,
                  })
                )
              'JSON' === e && (t = JSON.stringify(t)),
                i.WebSocketInstance.send(t)
            }),
            Object(L['a'])(this, '$reconnect', function (t) {
              if (!(i.reconnectTries >= 5)) {
                var e = i
                i.reconnectTimeoutId = setTimeout(function () {
                  1 !== e.WebSocketInstance.readyState &&
                    ((e.lastReconnectTry &&
                      +new Date() - e.lastReconnectTry <= 5e3) ||
                      ((i.lastReconnectTry = +new Date()),
                      (e.reconnectTries += 1),
                      e.debug && console.log('[WS]: Reconnecting.. '),
                      (e.WebSocketInstance = new WebSocket(e.connectionUrl)),
                      (e.constructor.instance = e),
                      e.$setHandlers()))
                }, t || e.reconnectTries * e.pingInterval)
              }
            }),
            Object(L['a'])(this, '$checkConnection', function () {
              i.pingIntervalId && clearTimeout(i.pingIntervalId),
                (i.pingIntervalId = setInterval(function () {
                  ;+new Date() - i.lastPongAt >= i.pingInterval &&
                    i.sendMessage(
                      {
                        type: 'ping',
                      },
                      'JSON'
                    )
                }, i.pingInterval))
            }),
            Object(L['a'])(this, '$setHandlers', function () {
              ;(i.WebSocketInstance.onopen = function (t) {
                return i.onOpen(t)
              }),
                (i.WebSocketInstance.onmessage = function (t) {
                  return i.onMessage(t)
                }),
                (i.WebSocketInstance.onerror = function (t) {
                  return i.onError(t)
                }),
                (i.WebSocketInstance.onclose = function (t) {
                  return i.onClose(t)
                })
            }),
            q && console.log('Running constructor', l),
            (this.onOpenHandler = s),
            (this.onCloseHandler = a),
            (this.onMessageHandler = o),
            (this.onErrorHandler = n),
            (this.connectionUrl = l || this.connectionUrl),
            (this.pingInterval = r || 1e4),
            (this.pingIntervalId = null),
            (this.lastReconnectTry = null),
            (this.reconnectTries = 0),
            (this.lastPongAt = +new Date()),
            q && console.log('DEBUG VALUE', q),
            (this.debug = q),
            (this.closedByUser = !1),
            this.constructor.instance &&
              '1' === this.WebSocketInstance.readyState)
          )
            return this.$setHandlers(), this.constructor.instance
          ;(this.WebSocketInstance = new WebSocket(this.connectionUrl)),
            (this.constructor.instance = this),
            this.$setHandlers()
        }
        return (
          Object(D['a'])(t, [
            {
              key: 'closeConnection',
              value: function () {
                this.debug && console.log('[WS]: Closing connection '),
                  this.$resetSocketData(),
                  (this.closedByUser = !0),
                  this.WebSocketInstance.close(1e3)
              },
            },
            {
              key: '$resetSocketData',
              value: function () {
                clearInterval(this.reconnectTimeoutId),
                  clearInterval(this.pingIntervalId),
                  (this.reconnectTries = 0),
                  (this.lastPongAt = null),
                  (this.lastReconnectTry = null),
                  (this.connectionUrl = null),
                  (this.onOpenHandler = null),
                  (this.onCloseHandler = null),
                  (this.onErrorHandler = null),
                  (this.onMessageHandler = null),
                  (this.WebSocketInstance = null),
                  (this.constructor.instance = null)
              },
            },
          ]),
          t
        )
      })(),
      T = P,
      B = {
        name: 'App',
        components: {
          Navbar: S,
          Footer: O,
        },
        data: function () {
          return {
            overlay: !1,
          }
        },
        mounted: function () {
          var t = this
          pe.$on('toggleOverlay', function (e) {
            t.overlay = e
          })
          var e = 'ws://'.concat(window.location.hostname),
            i = ''.concat(e, '/ws'),
            a = new T({
              connectionUrl: i,
            })
          s['a'].prototype.$websocket = a
        },
        created: function () {
          var t = this
          function e() {
            window.dataLayer.push(arguments)
          }
          I['a']
            .get('auth')
            .then(function (e) {
              var i = (e && e.data && e.data.type) || {}
              ;(s['a'].prototype.$userType = i || {
                subscriber: !0,
              }),
                (window.$isAuthenticated = !0)
              var a = window.location.hash.split('#/')[1]
              i && i.administrator
                ? t.$router.push(a || 'asd4154er45ds')
                : t.$router.push({
                    name: 'user',
                  })
            })
            .catch(function (e) {
              ;(t.err = e),
                (s['a'].prototype.$userType = {
                  subscriber: !0,
                }),
                t.$router.push({
                  name: 'user',
                })
            }),
            (window.dataLayer = window.dataLayer || []),
            e('js', new Date()),
            e('config', 'UA-110480600-3')
        },
        methods: {
          closeDropdown: function () {
            pe.$emit('closeDropdown')
          },
        },
      },
      N = B,
      A = (i('5c0b'), i('7496')),
      E = i('a75b'),
      j = i('a797'),
      R = Object(d['a'])(N, a, o, !1, null, null, null),
      V = R.exports
    h()(R, {
      VApp: A['a'],
      VContent: E['a'],
      VOverlay: j['a'],
    })
    var U = i('8c4f'),
      J = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e
        return i(
          'div',
          {
            staticClass: 'centerContainer',
          },
          [
            i(
              'v-card',
              {
                staticClass: 'loginCard',
              },
              [
                i('v-text-field', {
                  attrs: {
                    rules: t.emailRules,
                    name: 'loginEmail',
                    label: 'E-mail',
                    required: '',
                  },
                  model: {
                    value: t.email,
                    callback: function (e) {
                      t.email = e
                    },
                    expression: 'email',
                  },
                }),
                i('v-text-field', {
                  attrs: {
                    'append-icon': t.show ? 'visibility' : 'visibility_off',
                    required: '',
                    type: t.show ? 'text' : 'password',
                    name: 'loginPass',
                    label: 'Password',
                  },
                  on: {
                    'click:append': function (e) {
                      t.show = !t.show
                    },
                  },
                  model: {
                    value: t.password,
                    callback: function (e) {
                      t.password = e
                    },
                    expression: 'password',
                  },
                }),
                i(
                  'v-btn',
                  {
                    attrs: {
                      rounded: '',
                      color: 'primary',
                    },
                    on: {
                      click: function (e) {
                        return t.login()
                      },
                    },
                  },
                  [t._v('Login'), i('v-icon', [t._v('arrow_right')])],
                  1
                ),
              ],
              1
            ),
          ],
          1
        )
      },
      H = [],
      $ = {
        data: function () {
          return {
            show: !1,
            rules: {
              required: function (t) {
                return !!t || 'Required.'
              },
              min: function (t) {
                return t.length >= 8 || 'Min 8 characters'
              },
            },
            emailRules: [
              function (t) {
                return !!t || 'E-mail is required'
              },
              function (t) {
                return /.+@.+\..+/.test(t) || 'E-mail must be valid'
              },
            ],
            email: '',
            password: '',
          }
        },
        methods: {
          login: function () {
            var t = this
            I['a']
              .post('login', {
                email: this.email,
                password: this.password,
              })
              .then(function (e) {
                200 === e.status &&
                  e.data.success &&
                  ('user' === e.data.result.role
                    ? t.$router.push('user')
                    : 'admin' === e.data.result.role &&
                      t.$router.push('asd4154er45ds'))
              })
          },
        },
      },
      M = $,
      K = (i('10ec'), i('b0af')),
      W = i('8654'),
      G = Object(d['a'])(M, J, H, !1, null, '61c608c2', null),
      Q = G.exports
    h()(G, {
      VBtn: f['a'],
      VCard: K['a'],
      VIcon: v['a'],
      VTextField: W['a'],
    })
    var z = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e
        return i(
          'div',
          [
            i('TableAndFilters', {
              attrs: {
                columns: 13,
                rows: 13,
              },
            }),
          ],
          1
        )
      },
      Y = [],
      X = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e
        return s(
          'div',
          [
            s('Loader', {
              attrs: {
                overlay: t.showLoader,
              },
            }),
            s('SnackBar', {
              attrs: {
                showSnackbar: t.showSnackbar,
                message: t.snackBarMessage,
                color: t.snackBarType,
              },
            }),
            s(
              'div',
              [
                s(
                  'v-dialog',
                  {
                    attrs: {
                      'max-width': '500',
                    },
                    model: {
                      value: t.showWarningDialog,
                      callback: function (e) {
                        t.showWarningDialog = e
                      },
                      expression: 'showWarningDialog',
                    },
                  },
                  [
                    s(
                      'v-card',
                      [
                        s(
                          'div',
                          {
                            staticClass: 'headline p_10 bord_bot_lg',
                          },
                          [t._v('Warning !')]
                        ),
                        s(
                          'div',
                          {
                            staticClass: 'p_10 bord_bot_lg',
                          },
                          [
                            s(
                              'p',
                              {
                                staticClass: 'mt-2 mb-2',
                              },
                              [t._v('You will loose all of your progress.')]
                            ),
                            s(
                              'p',
                              {
                                staticClass: 'mb-2',
                              },
                              [
                                t._v(
                                  'Please save it first or undo all the changes.'
                                ),
                              ]
                            ),
                          ]
                        ),
                        s(
                          'v-card-actions',
                          [
                            s('div', {
                              staticClass: 'flex-grow-1',
                            }),
                            s(
                              'v-btn',
                              {
                                attrs: {
                                  color: 'black darken-1',
                                  text: '',
                                },
                                on: {
                                  click: function (e) {
                                    t.showWarningDialog = !1
                                  },
                                },
                              },
                              [t._v(' Close ')]
                            ),
                            s(
                              'v-btn',
                              {
                                attrs: {
                                  color: 'primary',
                                },
                                on: {
                                  click: function (e) {
                                    return t.undoAllChanges()
                                  },
                                },
                              },
                              [t._v(' Undo All ')]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                s(
                  'v-dialog',
                  {
                    attrs: {
                      'max-width': '500',
                    },
                    model: {
                      value: t.commentChangedWarning,
                      callback: function (e) {
                        t.commentChangedWarning = e
                      },
                      expression: 'commentChangedWarning',
                    },
                  },
                  [
                    s(
                      'v-card',
                      [
                        s(
                          'div',
                          {
                            staticClass: 'headline p_10 bord_bot_lg',
                          },
                          [t._v('Warning !')]
                        ),
                        s(
                          'div',
                          {
                            staticClass: 'p_10 bord_bot_lg',
                          },
                          [
                            s(
                              'p',
                              {
                                staticClass: 'mt-2 mb-2',
                              },
                              [
                                t._v(
                                  'You will loose changes made to the comment section.'
                                ),
                              ]
                            ),
                            s(
                              'p',
                              {
                                staticClass: 'mb-2',
                              },
                              [
                                t._v(
                                  'Please save it first or undo the changes.'
                                ),
                              ]
                            ),
                          ]
                        ),
                        s(
                          'v-card-actions',
                          [
                            s('div', {
                              staticClass: 'flex-grow-1',
                            }),
                            s(
                              'v-btn',
                              {
                                attrs: {
                                  color: 'black darken-1',
                                  text: '',
                                },
                                on: {
                                  click: function (e) {
                                    t.commentChangedWarning = !1
                                  },
                                },
                              },
                              [t._v(' Close ')]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                s(
                  'v-dialog',
                  {
                    attrs: {
                      'max-width': '500',
                    },
                    model: {
                      value: t.casinoChangedWarning,
                      callback: function (e) {
                        t.casinoChangedWarning = e
                      },
                      expression: 'casinoChangedWarning',
                    },
                  },
                  [
                    s(
                      'v-card',
                      [
                        s(
                          'div',
                          {
                            staticClass: 'headline p_10 bord_bot_lg',
                          },
                          [t._v('Warning !')]
                        ),
                        s(
                          'div',
                          {
                            staticClass: 'p_10 bord_bot_lg',
                          },
                          [
                            s(
                              'p',
                              {
                                staticClass: 'mt-2 mb-2',
                              },
                              [
                                t._v(
                                  'You will loose changes made to the Casino ' +
                                    t._s(this.casinoSelected) +
                                    "'s detail."
                                ),
                              ]
                            ),
                            s(
                              'p',
                              {
                                staticClass: 'mb-2',
                              },
                              [
                                t._v(
                                  'Please save it first or undo the changes.'
                                ),
                              ]
                            ),
                          ]
                        ),
                        s(
                          'v-card-actions',
                          [
                            s('div', {
                              staticClass: 'flex-grow-1',
                            }),
                            s(
                              'v-btn',
                              {
                                attrs: {
                                  color: 'black darken-1',
                                  text: '',
                                },
                                on: {
                                  click: function (e) {
                                    t.casinoChangedWarning = !1
                                  },
                                },
                              },
                              [t._v(' Close ')]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                s(
                  'v-dialog',
                  {
                    attrs: {
                      'max-width': '500',
                    },
                    model: {
                      value: t.noDataToShow,
                      callback: function (e) {
                        t.noDataToShow = e
                      },
                      expression: 'noDataToShow',
                    },
                  },
                  [
                    s(
                      'v-card',
                      [
                        s(
                          'div',
                          {
                            staticClass: 'headline p_10 bord_bot_lg',
                          },
                          [t._v('Oops !')]
                        ),
                        s(
                          'div',
                          {
                            staticClass: 'p_10 bord_bot_lg',
                          },
                          [
                            s(
                              'p',
                              {
                                staticClass: 'mt-2 mb-2',
                              },
                              [
                                t._v(
                                  "There's no data available to show for currently selected filter combination."
                                ),
                              ]
                            ),
                          ]
                        ),
                        s(
                          'v-card-actions',
                          [
                            s('div', {
                              staticClass: 'flex-grow-1',
                            }),
                            s(
                              'v-btn',
                              {
                                attrs: {
                                  color: 'black darken-1',
                                  text: '',
                                },
                                on: {
                                  click: function (e) {
                                    t.noDataToShow = !1
                                  },
                                },
                              },
                              [t._v(' Close ')]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                s(
                  'div',
                  {
                    staticClass: 'mainContainer mt-60',
                    on: {
                      '!click': function (e) {
                        return t.closeDrops(e)
                      },
                    },
                  },
                  [
                    s(
                      'div',
                      {
                        staticClass: 'subContainer',
                      },
                      [
                        s(
                          'p',
                          {
                            staticClass: 'fs25 p_t_45 ',
                          },
                          [t._v('Select Color : ')]
                        ),
                        s(
                          'div',
                          {
                            staticClass: 'colorBlocks',
                          },
                          [
                            s(
                              'div',
                              {
                                staticClass: 'd-flex',
                              },
                              [
                                s('v-color-picker', {
                                  style: t.allFilterSelected()
                                    ? 'cursor: pointer'
                                    : 'cursor: not-allowed',
                                  attrs: {
                                    id: t.allFilterSelected()
                                      ? 'colorPicker'
                                      : '',
                                    disabled: !t.allFilterSelected(),
                                    mode: t.mode,
                                    'hide-mode-switch': t.hideModeSwitch,
                                  },
                                  on: {
                                    'update:mode': function (e) {
                                      t.mode = e
                                    },
                                    'update:color': function (e) {
                                      return t.selectColor(e)
                                    },
                                  },
                                  model: {
                                    value: t.selectedColor,
                                    callback: function (e) {
                                      t.selectedColor = e
                                    },
                                    expression: 'selectedColor',
                                  },
                                }),
                                s(
                                  'div',
                                  {
                                    staticClass: 'colorBoxContainer ml-7',
                                  },
                                  t._l(t.swatches[0], function (e, i) {
                                    return s(
                                      'div',
                                      {
                                        key: 'color' + i,
                                        staticClass: 'colorSwatchBox',
                                        style: {
                                          background: e,
                                        },
                                        attrs: {
                                          id: 'color-' + i,
                                          disabled: !t.allFilterSelected(),
                                        },
                                        on: {
                                          click: function (i) {
                                            t.allFilterSelected() &&
                                              [].concat([
                                                (t.selectedColor = e),
                                                (t.eraserSelected = !1),
                                                (t.eraserSelectedThroughBtn = !1),
                                              ])
                                          },
                                          contextmenu: function (e) {
                                            return t.showChangeColor(e, i)
                                          },
                                          '!mouseleave': function (e) {
                                            return t.removeChangeColor(e)
                                          },
                                        },
                                      },
                                      [
                                        t.allFilterSelected() &&
                                        t.selectedColor &&
                                        t.selectedColor.toLowerCase() ===
                                          e.toLowerCase()
                                          ? s(
                                              'v-icon',
                                              {
                                                attrs: {
                                                  color: '#ffffff',
                                                  size: '16px',
                                                },
                                              },
                                              [t._v('check_circle')]
                                            )
                                          : t._e(),
                                      ],
                                      1
                                    )
                                  }),
                                  0
                                ),
                              ],
                              1
                            ),
                            s(
                              'div',
                              {
                                class: [
                                  'eraserContainer',
                                  'ml-7',
                                  t.eraserSelected ? 'selectedShadow' : '',
                                ],
                                style: t.checkAnyColorInTable()
                                  ? 'cursor: pointer'
                                  : 'cursor: not-allowed',
                                on: {
                                  click: function (e) {
                                    t.checkAnyColorInTable() && t.selectEraser()
                                  },
                                },
                              },
                              [
                                s('img', {
                                  attrs: {
                                    src: i('3fa6'),
                                  },
                                }),
                              ]
                            ),
                            s(
                              'v-btn',
                              {
                                staticClass: 'ml-7',
                                attrs: {
                                  small: '',
                                  rounded: '',
                                  fab: '',
                                  dark: '',
                                  title: 'Clear color selection',
                                },
                                on: {
                                  click: t.clearColor,
                                },
                              },
                              [s('v-icon', [t._v('close')])],
                              1
                            ),
                          ],
                          1
                        ),
                        s(
                          'div',
                          {
                            staticClass: 'd-flex',
                          },
                          [
                            s(
                              'p',
                              {
                                staticClass: 'fs25',
                              },
                              [t._v('Select Filters : ')]
                            ),
                            s('div', {
                              staticClass: 'flex-grow-1',
                            }),
                            t.colorLabelChanged ||
                            t.tableChanged() ||
                            Object.keys(this.listOfActions).length
                              ? s(
                                  'div',
                                  [
                                    s(
                                      'v-btn',
                                      {
                                        attrs: {
                                          color: 'black darken-1',
                                          text: '',
                                        },
                                        on: {
                                          click: function (e) {
                                            return t.clearTableChanges()
                                          },
                                        },
                                      },
                                      [t._v(' Undo changes ')]
                                    ),
                                    s(
                                      'v-btn',
                                      {
                                        key: t.coloring,
                                        attrs: {
                                          color: 'primary',
                                          loading: t.startedSaving,
                                          disabled:
                                            !Object.keys(this.justEditedBox)
                                              .length &&
                                            !Object.keys(this.totalBoxesColored)
                                              .length,
                                        },
                                        on: {
                                          click: t.save,
                                        },
                                      },
                                      [t._v('save')]
                                    ),
                                  ],
                                  1
                                )
                              : s(
                                  'v-btn',
                                  {
                                    attrs: {
                                      small: '',
                                      rounded: '',
                                      fab: '',
                                      dark: '',
                                      title: 'Clear all filters',
                                    },
                                    on: {
                                      click: t.clearFilter,
                                    },
                                  },
                                  [s('v-icon', [t._v('close')])],
                                  1
                                ),
                          ],
                          1
                        ),
                        s(
                          'div',
                          {
                            staticClass: 'filterContainer align-center',
                          },
                          [
                            s(
                              'div',
                              {
                                staticClass: 'upperFilters',
                                attrs: {
                                  id: 'gameFilter',
                                },
                              },
                              [
                                t._m(0),
                                s(
                                  'div',
                                  {
                                    staticClass:
                                      'customDrop bord_2 justifyBetween p_5_10',
                                    class: {
                                      optionSelectedBackground: t.gameSelected,
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.showDropOptions('Games')
                                      },
                                    },
                                  },
                                  [
                                    s(
                                      'span',
                                      {
                                        staticClass: 'text-upper',
                                      },
                                      [t._v(t._s(t.gameSelected))]
                                    ),
                                    t.showGames
                                      ? s(
                                          'v-icon',
                                          {
                                            staticClass: 'dropIcon',
                                          },
                                          [t._v('keyboard_arrow_up')]
                                        )
                                      : s(
                                          'v-icon',
                                          {
                                            staticClass: 'dropIcon',
                                          },
                                          [t._v('keyboard_arrow_down')]
                                        ),
                                  ],
                                  1
                                ),
                                t.showGames
                                  ? s(
                                      'div',
                                      {
                                        staticClass: 'optionsBlock',
                                      },
                                      t._l(t.gameList, function (e, i) {
                                        return s(
                                          'div',
                                          {
                                            key: 'game' + i,
                                            staticClass: 'p_5_10 text-upper',
                                            on: {
                                              click: function (i) {
                                                t.gameSelected !== e.value &&
                                                  t.selectGame(e)
                                              },
                                            },
                                          },
                                          [
                                            t._v(
                                              '\n              ' +
                                                t._s(e.value) +
                                                '\n            '
                                            ),
                                          ]
                                        )
                                      }),
                                      0
                                    )
                                  : t._e(),
                              ]
                            ),
                            s(
                              'div',
                              {
                                staticClass: 'upperFilters',
                                attrs: {
                                  id: 'casinoFilter',
                                },
                              },
                              [
                                t._m(1),
                                s(
                                  'div',
                                  {
                                    staticClass:
                                      'customDrop bord_2 justifyBetween p_5_10',
                                    class: {
                                      optionSelectedBackground:
                                        t.casinoSelected,
                                      disabledDropdown: !t.gameSelected,
                                    },
                                    on: {
                                      click: function (e) {
                                        t.gameSelected &&
                                          t.showDropOptions('Casinos')
                                      },
                                    },
                                  },
                                  [
                                    s(
                                      'span',
                                      {
                                        staticClass: 'text-upper',
                                      },
                                      [t._v(t._s(t.casinoSelected))]
                                    ),
                                    t.showCasinos
                                      ? s(
                                          'v-icon',
                                          {
                                            staticClass: 'dropIcon',
                                          },
                                          [t._v('keyboard_arrow_up')]
                                        )
                                      : s(
                                          'v-icon',
                                          {
                                            staticClass: 'dropIcon',
                                          },
                                          [t._v('keyboard_arrow_down')]
                                        ),
                                  ],
                                  1
                                ),
                                t.showCasinos
                                  ? s(
                                      'div',
                                      {
                                        staticClass: 'optionsBlock',
                                      },
                                      t._l(
                                        t.casinoList[t.gameId],
                                        function (e, i) {
                                          return s(
                                            'div',
                                            {
                                              key: 'casino' + i,
                                              staticClass: 'p_5_10 text-upper',
                                              on: {
                                                click: function (i) {
                                                  t.casinoSelected !==
                                                    e.value && t.selectCasino(e)
                                                },
                                              },
                                            },
                                            [
                                              t._v(
                                                '\n              ' +
                                                  t._s(e.value) +
                                                  '\n            '
                                              ),
                                            ]
                                          )
                                        }
                                      ),
                                      0
                                    )
                                  : t._e(),
                              ]
                            ),
                            s(
                              'div',
                              {
                                staticClass: 'upperFilters',
                                attrs: {
                                  id: 'stakeFilter',
                                },
                              },
                              [
                                t._m(2),
                                s(
                                  'div',
                                  {
                                    staticClass:
                                      'customDrop bord_2 justifyBetween p_5_10',
                                    class: {
                                      optionSelectedBackground: t.stakeSelected,
                                      disabledDropdown: !t.casinoSelected,
                                    },
                                    on: {
                                      click: function (e) {
                                        t.casinoSelected &&
                                          t.showDropOptions('Stakes')
                                      },
                                    },
                                  },
                                  [
                                    s(
                                      'span',
                                      {
                                        staticClass: 'text-upper',
                                      },
                                      [t._v(t._s(t.stakeSelected))]
                                    ),
                                    t.showStakes
                                      ? s(
                                          'v-icon',
                                          {
                                            staticClass: 'dropIcon',
                                          },
                                          [t._v('keyboard_arrow_up')]
                                        )
                                      : s(
                                          'v-icon',
                                          {
                                            staticClass: 'dropIcon',
                                          },
                                          [t._v('keyboard_arrow_down')]
                                        ),
                                  ],
                                  1
                                ),
                                t.showStakes
                                  ? s(
                                      'div',
                                      {
                                        staticClass: 'optionsBlock',
                                      },
                                      t._l(
                                        t.stakeList[t.casinoId],
                                        function (e, i) {
                                          return s(
                                            'div',
                                            {
                                              key: 'stake' + i,
                                              staticClass: 'p_5_10 text-upper',
                                              on: {
                                                click: function (i) {
                                                  t.stakeSelected !== e.value &&
                                                    t.selectStake(e)
                                                },
                                              },
                                            },
                                            [
                                              t._v(
                                                '\n              ' +
                                                  t._s(e.value) +
                                                  '\n            '
                                              ),
                                            ]
                                          )
                                        }
                                      ),
                                      0
                                    )
                                  : t._e(),
                              ]
                            ),
                            s(
                              'div',
                              {
                                staticClass: 'upperFilters',
                                attrs: {
                                  id: 'playerFilter',
                                },
                              },
                              [
                                t._m(3),
                                s(
                                  'div',
                                  {
                                    staticClass:
                                      'customDrop bord_2 justifyBetween p_5_10',
                                    class: {
                                      optionSelectedBackground:
                                        t.playersSelected,
                                      disabledDropdown: !t.stakeSelected,
                                    },
                                    on: {
                                      click: function (e) {
                                        t.stakeSelected &&
                                          t.showDropOptions('Players')
                                      },
                                    },
                                  },
                                  [
                                    s(
                                      'span',
                                      {
                                        staticClass: 'text-upper',
                                      },
                                      [t._v(t._s(t.playersSelected))]
                                    ),
                                    t.showPlayers
                                      ? s(
                                          'v-icon',
                                          {
                                            staticClass: 'dropIcon',
                                          },
                                          [t._v('keyboard_arrow_up')]
                                        )
                                      : s(
                                          'v-icon',
                                          {
                                            staticClass: 'dropIcon',
                                          },
                                          [t._v('keyboard_arrow_down')]
                                        ),
                                  ],
                                  1
                                ),
                                t.showPlayers
                                  ? s(
                                      'div',
                                      {
                                        staticClass: 'optionsBlock',
                                      },
                                      t._l(
                                        t.playersList[t.stakeId],
                                        function (e, i) {
                                          return s(
                                            'div',
                                            {
                                              key: 'player' + i,
                                              staticClass: 'p_5_10 text-upper',
                                              on: {
                                                click: function (i) {
                                                  t.playersSelected !==
                                                    e.value &&
                                                    t.selectPlayers(e)
                                                },
                                              },
                                            },
                                            [
                                              t._v(
                                                '\n              ' +
                                                  t._s(e.value) +
                                                  '\n            '
                                              ),
                                            ]
                                          )
                                        }
                                      ),
                                      0
                                    )
                                  : t._e(),
                              ]
                            ),
                            s('div', {
                              staticClass: 'flex-grow-1',
                            }),
                            s(
                              'div',
                              {
                                staticClass: 'd-flex',
                              },
                              [
                                t.checkAnyColorInTable() &&
                                this.gameSelected &&
                                !this.tableCopied
                                  ? s(
                                      'v-btn',
                                      {
                                        staticClass: 'ms-1',
                                        attrs: {
                                          small: '',
                                          rounded: '',
                                          color: 'primary',
                                          disabled: !(
                                            !t.colorLabelChanged &&
                                            !t.tableChanged()
                                          ),
                                        },
                                        on: {
                                          click: function (e) {
                                            return t.copyTable()
                                          },
                                        },
                                      },
                                      [t._v('Copy table')]
                                    )
                                  : t._e(),
                                t.allFilterSelected() && this.tableCopied
                                  ? s(
                                      'v-btn',
                                      {
                                        staticClass: 'ms-1',
                                        attrs: {
                                          small: '',
                                          rounded: '',
                                          color: 'primary',
                                        },
                                        on: {
                                          click: function (e) {
                                            return t.pasteTable()
                                          },
                                        },
                                      },
                                      [t._v('Paste table')]
                                    )
                                  : t._e(),
                                this.tableCopied
                                  ? s(
                                      'v-btn',
                                      {
                                        staticClass: 'ms-1',
                                        attrs: {
                                          small: '',
                                          rounded: '',
                                          fab: '',
                                          dark: '',
                                          height: '30px',
                                          width: '30px',
                                          title: 'Cancel copy action',
                                        },
                                        on: {
                                          click: function (e) {
                                            return t.clearCopiedTable()
                                          },
                                        },
                                      },
                                      [s('v-icon', [t._v('close')])],
                                      1
                                    )
                                  : t._e(),
                              ],
                              1
                            ),
                          ]
                        ),
                        s(
                          'div',
                          {
                            staticClass: 'mainArea',
                          },
                          [
                            s(
                              'div',
                              {
                                staticClass: 'seqFilters',
                              },
                              t._l(t.sequenceList[t.playersId], function (e) {
                                return s(
                                  'div',
                                  {
                                    key: e.value,
                                    on: {
                                      click: function (i) {
                                        t.playersSelected && t.selectSequence(e)
                                      },
                                    },
                                  },
                                  [
                                    s(
                                      'p',
                                      {
                                        staticClass: 'm0 p_5_10 text-upper',
                                        class: {
                                          bot_bord_2:
                                            t.sequenceSelected === e.value &&
                                            t.showSubSequence &&
                                            t.subSequenceList[e.id] &&
                                            t.subSequenceList[e.id].length,
                                          optionSelectedBackground:
                                            t.sequenceSelected &&
                                            t.sequenceSelected === e.value,
                                          disabledDropdown: !t.playersSelected,
                                        },
                                      },
                                      [
                                        s('span', [t._v(t._s(e.value))]),
                                        t.subSequenceList[e.id] &&
                                        t.subSequenceList[e.id].length
                                          ? s(
                                              'span',
                                              [
                                                t.showSubSequence
                                                  ? t._e()
                                                  : s('v-icon', [
                                                      t._v(
                                                        'keyboard_arrow_down'
                                                      ),
                                                    ]),
                                                t.showSubSequence &&
                                                t.sequenceSelected === e.value
                                                  ? s('v-icon', [
                                                      t._v('keyboard_arrow_up'),
                                                    ])
                                                  : t.showSubSequence
                                                  ? s('v-icon', [
                                                      t._v(
                                                        'keyboard_arrow_down'
                                                      ),
                                                    ])
                                                  : t._e(),
                                              ],
                                              1
                                            )
                                          : t._e(),
                                      ]
                                    ),
                                    t.sequenceSelected === e.value &&
                                    t.subSequenceList[e.id] &&
                                    t.subSequenceList[e.id].length &&
                                    t.showSubSequence
                                      ? s(
                                          'div',
                                          {
                                            staticClass: 'subSeqFilter',
                                          },
                                          t._l(
                                            t.subSequenceList[e.id],
                                            function (e) {
                                              return s(
                                                'div',
                                                {
                                                  key: e.id,
                                                  staticClass:
                                                    'p_5_10 text-upper',
                                                  class: {
                                                    optionSelectedBackground:
                                                      t.selectedSubSequence &&
                                                      t.selectedSubSequence ===
                                                        e.value,
                                                  },
                                                  on: {
                                                    click: function (i) {
                                                      return t.selectSubSequence(
                                                        i,
                                                        e
                                                      )
                                                    },
                                                  },
                                                },
                                                [
                                                  s('span', [
                                                    t._v(t._s(e.value)),
                                                  ]),
                                                ]
                                              )
                                            }
                                          ),
                                          0
                                        )
                                      : t._e(),
                                  ]
                                )
                              }),
                              0
                            ),
                            s(
                              'div',
                              {
                                staticClass: 'tableCover',
                              },
                              [
                                s(
                                  'div',
                                  {
                                    staticClass: 'd-flex',
                                  },
                                  [
                                    s(
                                      'div',
                                      {
                                        attrs: {
                                          id: 'positionAndReactionDiv',
                                        },
                                      },
                                      [
                                        this.positionList[this.subSequenceId] &&
                                        this.positionList[this.subSequenceId]
                                          .length
                                          ? s(
                                              'div',
                                              {
                                                class: [
                                                  'd-flex',
                                                  'stnFilterContainer flex-wrap',
                                                  this.positionList[
                                                    this.subSequenceId
                                                  ]
                                                    ? ''
                                                    : [].concat([
                                                        'mt-4',
                                                        'mb-4',
                                                      ]),
                                                ],
                                              },
                                              t._l(
                                                t.positionList[t.subSequenceId],
                                                function (e, i) {
                                                  return s(
                                                    'div',
                                                    {
                                                      key: 'position' + i,
                                                      staticClass:
                                                        'text-center text-upper',
                                                      class: {
                                                        optionSelectedBackground:
                                                          t.selectedSituation &&
                                                          t.selectedSituation ===
                                                            e.value,
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.selectSituation(
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        '\n                  ' +
                                                          t._s(e.value) +
                                                          '\n                '
                                                      ),
                                                    ]
                                                  )
                                                }
                                              ),
                                              0
                                            )
                                          : this.positionList[
                                              this.sequenceId
                                            ] &&
                                            this.positionList[this.sequenceId]
                                              .length
                                          ? s(
                                              'div',
                                              {
                                                class: [
                                                  'd-flex',
                                                  'stnFilterContainer flex-wrap',
                                                  this.positionList[
                                                    this.sequenceId
                                                  ]
                                                    ? ''
                                                    : [].concat([
                                                        'mt-4',
                                                        'mb-4',
                                                      ]),
                                                ],
                                              },
                                              t._l(
                                                t.positionList[t.sequenceId],
                                                function (e, i) {
                                                  return s(
                                                    'div',
                                                    {
                                                      key: 'position' + i,
                                                      staticClass:
                                                        'text-center text-upper',
                                                      class: {
                                                        optionSelectedBackground:
                                                          t.selectedSituation &&
                                                          t.selectedSituation ===
                                                            e.value,
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.selectSituation(
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        '\n                  ' +
                                                          t._s(e.value) +
                                                          '\n                '
                                                      ),
                                                    ]
                                                  )
                                                }
                                              ),
                                              0
                                            )
                                          : t._e(),
                                        this.sub2FilterList[this.positionId] &&
                                        this.sub2FilterList[this.positionId]
                                          .length
                                          ? s(
                                              'div',
                                              {
                                                class: [
                                                  'd-flex',
                                                  'stnFilterContainer flex-wrap mt-3',
                                                  this.sub2FilterList[
                                                    this.positionId
                                                  ]
                                                    ? ''
                                                    : [].concat([
                                                        'mt-4',
                                                        'mb-4',
                                                      ]),
                                                ],
                                              },
                                              t._l(
                                                t.sub2FilterList[t.positionId],
                                                function (e, i) {
                                                  return s(
                                                    'div',
                                                    {
                                                      key: 'sub2Filter' + i,
                                                      staticClass:
                                                        'text-center text-upper',
                                                      class: {
                                                        optionSelectedBackground:
                                                          t.selectedSub2Filter &&
                                                          t.selectedSub2Filter ===
                                                            e.value,
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.selectSub2Filter(
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        '\n                  ' +
                                                          t._s(e.value) +
                                                          '\n                '
                                                      ),
                                                    ]
                                                  )
                                                }
                                              ),
                                              0
                                            )
                                          : t._e(),
                                        this.sub3FilterList[
                                          this.sub2FilterId
                                        ] &&
                                        this.sub3FilterList[this.sub2FilterId]
                                          .length
                                          ? s(
                                              'div',
                                              {
                                                class: [
                                                  'd-flex',
                                                  'stnFilterContainer-1 flex-wrap mt-3',
                                                  this.sub3FilterList[
                                                    this.sub2FilterId
                                                  ]
                                                    ? ''
                                                    : [].concat([
                                                        'mt-4',
                                                        'mb-4',
                                                      ]),
                                                ],
                                              },
                                              [
                                                s(
                                                  'div',
                                                  {
                                                    staticClass: 'upperFilters',
                                                    attrs: {
                                                      id: 'sub3FilterId',
                                                    },
                                                  },
                                                  [
                                                    s(
                                                      'p',
                                                      {
                                                        staticClass:
                                                          'text-upper mb5 stackFilterMargingTop',
                                                      },
                                                      [
                                                        s('strong', [
                                                          t._v(
                                                            t._s(
                                                              t.filterTitles[
                                                                'sub3Filter'
                                                              ][
                                                                t.sub2FilterId
                                                              ] || ''
                                                            ) + '  '
                                                          ),
                                                        ]),
                                                      ]
                                                    ),
                                                    s(
                                                      'div',
                                                      {
                                                        staticClass:
                                                          'customDrop bord_2 justifyBetween p_5_10 sub3Width',
                                                        class: {
                                                          optionSelectedBackground:
                                                            t.selectedSub3Filter,
                                                        },
                                                        on: {
                                                          click: function (e) {
                                                            t.selectedSub2Filter &&
                                                              t.showDropOptions(
                                                                'Sub3Filters'
                                                              )
                                                          },
                                                        },
                                                      },
                                                      [
                                                        s(
                                                          'span',
                                                          {
                                                            staticClass:
                                                              'text-upper',
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(
                                                                t.selectedSub3Filter
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                        t.showSub3Filters
                                                          ? s(
                                                              'v-icon',
                                                              {
                                                                staticClass:
                                                                  'dropIcon',
                                                              },
                                                              [
                                                                t._v(
                                                                  'keyboard_arrow_up'
                                                                ),
                                                              ]
                                                            )
                                                          : s(
                                                              'v-icon',
                                                              {
                                                                staticClass:
                                                                  'dropIcon',
                                                              },
                                                              [
                                                                t._v(
                                                                  'keyboard_arrow_down'
                                                                ),
                                                              ]
                                                            ),
                                                      ],
                                                      1
                                                    ),
                                                    t.showSub3Filters
                                                      ? s(
                                                          'div',
                                                          {
                                                            staticClass:
                                                              'optionsBlock',
                                                          },
                                                          t._l(
                                                            t.sub3FilterList[
                                                              t.sub2FilterId
                                                            ],
                                                            function (e, i) {
                                                              return s(
                                                                'div',
                                                                {
                                                                  key:
                                                                    'sub3Filter' +
                                                                    i,
                                                                  staticClass:
                                                                    'p_5_10 text-upper',
                                                                  on: {
                                                                    click: function (
                                                                      i
                                                                    ) {
                                                                      t.selectedSub3Filter !==
                                                                        e.value &&
                                                                        t.selectSub3Filter(
                                                                          e
                                                                        )
                                                                    },
                                                                  },
                                                                },
                                                                [
                                                                  t._v(
                                                                    '\n                      ' +
                                                                      t._s(
                                                                        e.value
                                                                      ) +
                                                                      '\n                    '
                                                                  ),
                                                                ]
                                                              )
                                                            }
                                                          ),
                                                          0
                                                        )
                                                      : t._e(),
                                                  ]
                                                ),
                                                s(
                                                  'div',
                                                  {
                                                    staticClass: 'upperFilters',
                                                    attrs: {
                                                      id: 'reactionFilter',
                                                    },
                                                  },
                                                  [
                                                    s(
                                                      'p',
                                                      {
                                                        staticClass:
                                                          'text-upper mb5 stackFilterMargingTop',
                                                      },
                                                      [
                                                        s('strong', [
                                                          t._v(
                                                            t._s(
                                                              t.filterTitles[
                                                                'reaction'
                                                              ][
                                                                t.sub2FilterId
                                                              ] || ''
                                                            ) + '  '
                                                          ),
                                                        ]),
                                                      ]
                                                    ),
                                                    s(
                                                      'div',
                                                      {
                                                        staticClass:
                                                          'customDrop bord_2 justifyBetween p_5_10 sub3Width',
                                                        class: {
                                                          optionSelectedBackground:
                                                            t.selectedReaction,
                                                        },
                                                        on: {
                                                          click: function (e) {
                                                            t.selectedReaction &&
                                                              t.showDropOptions(
                                                                'Reactions'
                                                              )
                                                          },
                                                        },
                                                      },
                                                      [
                                                        s(
                                                          'span',
                                                          {
                                                            staticClass:
                                                              'text-upper',
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(
                                                                t.selectedReaction
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                        t.showReactions
                                                          ? s(
                                                              'v-icon',
                                                              {
                                                                staticClass:
                                                                  'dropIcon',
                                                              },
                                                              [
                                                                t._v(
                                                                  'keyboard_arrow_down'
                                                                ),
                                                              ]
                                                            )
                                                          : s(
                                                              'v-icon',
                                                              {
                                                                staticClass:
                                                                  'dropIcon',
                                                              },
                                                              [
                                                                t._v(
                                                                  'keyboard_arrow_up'
                                                                ),
                                                              ]
                                                            ),
                                                      ],
                                                      1
                                                    ),
                                                    t.showReactions
                                                      ? s(
                                                          'div',
                                                          {
                                                            staticClass:
                                                              'optionsBlock',
                                                          },
                                                          t._l(
                                                            t.reactionList[
                                                              t.sub3FilterId
                                                            ],
                                                            function (e, i) {
                                                              return s(
                                                                'div',
                                                                {
                                                                  key:
                                                                    'reaction' +
                                                                    i,
                                                                  staticClass:
                                                                    'p_5_10 text-upper',
                                                                  on: {
                                                                    click: function (
                                                                      i
                                                                    ) {
                                                                      t.selectedReaction !==
                                                                        e.value &&
                                                                        t.selectReaction(
                                                                          e
                                                                        )
                                                                    },
                                                                  },
                                                                },
                                                                [
                                                                  t._v(
                                                                    '\n                      ' +
                                                                      t._s(
                                                                        e.value
                                                                      ) +
                                                                      '\n                    '
                                                                  ),
                                                                ]
                                                              )
                                                            }
                                                          ),
                                                          0
                                                        )
                                                      : t._e(),
                                                  ]
                                                ),
                                              ]
                                            )
                                          : this.reactionList[
                                              this.sub2FilterId ||
                                                this.positionId
                                            ] &&
                                            this.reactionList[
                                              this.sub2FilterId ||
                                                this.positionId
                                            ].length
                                          ? s(
                                              'div',
                                              {
                                                class: [
                                                  'd-flex',
                                                  'stnFilterContainer flex-wrap mt-3',
                                                  this.reactionList[
                                                    this.sub2FilterId ||
                                                      this.positionId
                                                  ]
                                                    ? ''
                                                    : [].concat([
                                                        'mt-4',
                                                        'mb-4',
                                                      ]),
                                                ],
                                              },
                                              t._l(
                                                t.reactionList[
                                                  t.sub2FilterId || t.positionId
                                                ],
                                                function (e, i) {
                                                  return s(
                                                    'div',
                                                    {
                                                      key: 'reaction' + i,
                                                      staticClass:
                                                        'text-center text-upper',
                                                      class: {
                                                        optionSelectedBackground:
                                                          t.selectedReaction &&
                                                          t.selectedReaction ===
                                                            e.value,
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.selectReaction(
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        '\n                  ' +
                                                          t._s(e.value) +
                                                          '\n                '
                                                      ),
                                                    ]
                                                  )
                                                }
                                              ),
                                              0
                                            )
                                          : t._e(),
                                      ]
                                    ),
                                    s(
                                      'div',
                                      {
                                        attrs: {
                                          id: 'stackDiv',
                                        },
                                      },
                                      [
                                        s(
                                          'div',
                                          {
                                            staticClass: 'upperFilters',
                                            attrs: {
                                              id: 'stackFilter',
                                            },
                                          },
                                          [
                                            t._m(4),
                                            s(
                                              'div',
                                              {
                                                staticClass:
                                                  'customDrop bord_2 justifyBetween p_5_10',
                                                class: {
                                                  optionSelectedBackground:
                                                    t.selectedStack,
                                                  disabledDropdown: !t.selectedSituation,
                                                },
                                                on: {
                                                  click: function (e) {
                                                    t.selectedSituation &&
                                                      t.showDropOptions(
                                                        'Stacks'
                                                      )
                                                  },
                                                },
                                              },
                                              [
                                                s(
                                                  'span',
                                                  {
                                                    staticClass: 'text-upper',
                                                  },
                                                  [t._v(t._s(t.selectedStack))]
                                                ),
                                                t.showStacks
                                                  ? s(
                                                      'v-icon',
                                                      {
                                                        staticClass: 'dropIcon',
                                                      },
                                                      [
                                                        t._v(
                                                          'keyboard_arrow_up'
                                                        ),
                                                      ]
                                                    )
                                                  : s(
                                                      'v-icon',
                                                      {
                                                        staticClass: 'dropIcon',
                                                      },
                                                      [
                                                        t._v(
                                                          'keyboard_arrow_down'
                                                        ),
                                                      ]
                                                    ),
                                              ],
                                              1
                                            ),
                                            t.showStacks &&
                                            this.stackList[this.reactionId] &&
                                            this.stackList[this.reactionId]
                                              .length
                                              ? s(
                                                  'div',
                                                  {
                                                    staticClass: 'optionsBlock',
                                                  },
                                                  t._l(
                                                    t.stackList[t.reactionId],
                                                    function (e, i) {
                                                      return s(
                                                        'div',
                                                        {
                                                          key: 'stack' + i,
                                                          staticClass:
                                                            'p_5_10 text-upper',
                                                          on: {
                                                            click: function (
                                                              i
                                                            ) {
                                                              t.selectedStack !==
                                                                e.value &&
                                                                t.selectStack(e)
                                                            },
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            '\n                      ' +
                                                              t._s(e.value) +
                                                              '\n                    '
                                                          ),
                                                        ]
                                                      )
                                                    }
                                                  ),
                                                  0
                                                )
                                              : t.sub2FilterId && !t.reactionId
                                              ? s('div', {})
                                              : t.showStacks &&
                                                !this.reactionId &&
                                                this.stackList[
                                                  this.positionId
                                                ] &&
                                                this.stackList[this.positionId]
                                                  .length
                                              ? s(
                                                  'div',
                                                  {
                                                    staticClass: 'optionsBlock',
                                                  },
                                                  t._l(
                                                    t.stackList[t.positionId],
                                                    function (e, i) {
                                                      return s(
                                                        'div',
                                                        {
                                                          key: 'stack' + i,
                                                          staticClass:
                                                            'p_5_10 text-upper',
                                                          on: {
                                                            click: function (
                                                              i
                                                            ) {
                                                              t.selectedStack !==
                                                                e.value &&
                                                                t.selectStack(e)
                                                            },
                                                          },
                                                        },
                                                        [
                                                          t._v(
                                                            '\n                      ' +
                                                              t._s(e.value) +
                                                              '\n                    '
                                                          ),
                                                        ]
                                                      )
                                                    }
                                                  ),
                                                  0
                                                )
                                              : t._e(),
                                          ]
                                        ),
                                        t.filterTitles['stackChild'][t.stackId]
                                          ? s(
                                              'div',
                                              {
                                                staticClass: 'upperFilters',
                                                attrs: {
                                                  id: 'stackChildFilter',
                                                },
                                              },
                                              [
                                                s(
                                                  'p',
                                                  {
                                                    staticClass:
                                                      'text-upper mb5 stackFilterMargingTop',
                                                  },
                                                  [
                                                    s('strong', [
                                                      t._v(
                                                        t._s(
                                                          t.filterTitles[
                                                            'stackChild'
                                                          ][t.stackId]
                                                        )
                                                      ),
                                                    ]),
                                                  ]
                                                ),
                                                s(
                                                  'div',
                                                  {
                                                    staticClass:
                                                      'customDrop bord_2 justifyBetween p_5_10',
                                                    class: {
                                                      optionSelectedBackground:
                                                        t.selectedStackChild,
                                                      disabledDropdown: !t.selectedStack,
                                                    },
                                                    on: {
                                                      click: function (e) {
                                                        t.selectedStack &&
                                                          t.showDropOptions(
                                                            'StackChilds'
                                                          )
                                                      },
                                                    },
                                                  },
                                                  [
                                                    s(
                                                      'span',
                                                      {
                                                        staticClass:
                                                          'text-upper',
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            t.selectedStackChild
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                    t.showStackChilds
                                                      ? s(
                                                          'v-icon',
                                                          {
                                                            staticClass:
                                                              'dropIcon',
                                                          },
                                                          [
                                                            t._v(
                                                              'keyboard_arrow_up'
                                                            ),
                                                          ]
                                                        )
                                                      : s(
                                                          'v-icon',
                                                          {
                                                            staticClass:
                                                              'dropIcon',
                                                          },
                                                          [
                                                            t._v(
                                                              'keyboard_arrow_down'
                                                            ),
                                                          ]
                                                        ),
                                                  ],
                                                  1
                                                ),
                                                t.showStackChilds
                                                  ? s(
                                                      'div',
                                                      {
                                                        staticClass:
                                                          'optionsBlock',
                                                      },
                                                      t._l(
                                                        t.stackChildList[
                                                          t.stackId
                                                        ],
                                                        function (e, i) {
                                                          return s(
                                                            'div',
                                                            {
                                                              key:
                                                                'stackChild' +
                                                                i,
                                                              staticClass:
                                                                'p_5_10 text-upper',
                                                              on: {
                                                                click: function (
                                                                  i
                                                                ) {
                                                                  t.selectedStackChild !==
                                                                    e.value &&
                                                                    t.selectStackChild(
                                                                      e
                                                                    )
                                                                },
                                                              },
                                                            },
                                                            [
                                                              t._v(
                                                                '\n                      ' +
                                                                  t._s(
                                                                    e.value
                                                                  ) +
                                                                  '\n                    '
                                                              ),
                                                            ]
                                                          )
                                                        }
                                                      ),
                                                      0
                                                    )
                                                  : t._e(),
                                              ]
                                            )
                                          : t._e(),
                                      ]
                                    ),
                                  ]
                                ),
                                s(
                                  'div',
                                  {
                                    staticClass: 'd-flex tableAndColorLabel',
                                  },
                                  [
                                    s(
                                      'div',
                                      {
                                        class: ['tableContainer'],
                                        on: {
                                          mouseleave: function (e) {
                                            return t.fillComplete()
                                          },
                                        },
                                      },
                                      [
                                        t._l(t.rows, function (e, i) {
                                          return s(
                                            'div',
                                            {
                                              key: 'row' + i,
                                              staticClass: 'row m0',
                                              class: [
                                                t.eraserSelected
                                                  ? 'eraserCursor'
                                                  : '',
                                              ],
                                              on: {
                                                mouseenter: function (e) {
                                                  return t.keepInFocus()
                                                },
                                              },
                                            },
                                            t._l(t.columns, function (e, a) {
                                              return s(
                                                'div',
                                                {
                                                  key: 'col' + a,
                                                  ref: t.generateId(i, a),
                                                  refInFor: !0,
                                                  staticClass: 'colorAnimation',
                                                  staticStyle: {
                                                    height: '25px',
                                                    width: '50px',
                                                    display: 'inline-block',
                                                    position: 'relative',
                                                    'line-height': 'normal',
                                                    outline: 'none',
                                                  },
                                                  attrs: {
                                                    id: t.generateId(i, a),
                                                    tabindex: '0',
                                                  },
                                                  on: {
                                                    mouseleave: function (e) {
                                                      t.removeBubble(
                                                        t.generateId(i, a)
                                                      )
                                                    },
                                                    mousedown: function (e) {
                                                      t.mouseDownFn(
                                                        e,
                                                        t.generateId(i, a)
                                                      )
                                                    },
                                                    mouseover: function (e) {
                                                      t.mouseDrag(
                                                        e,
                                                        t.generateId(i, a)
                                                      )
                                                    },
                                                    contextmenu: function (e) {
                                                      if (
                                                        e.ctrlKey ||
                                                        e.shiftKey ||
                                                        e.altKey ||
                                                        e.metaKey
                                                      )
                                                        return null
                                                      t.showPartitioningDiv(
                                                        e,
                                                        t.generateId(i, a)
                                                      )
                                                    },
                                                    mouseup: function (e) {
                                                      return t.fillComplete()
                                                    },
                                                    keydown: function (e) {
                                                      t.allFilterSelected() &&
                                                        t.controlEraser(
                                                          e,
                                                          'enable'
                                                        )
                                                    },
                                                    keyup: function (e) {
                                                      t.allFilterSelected() &&
                                                        t.controlEraser(
                                                          e,
                                                          'disable'
                                                        )
                                                    },
                                                    click: function (e) {
                                                      return !e.type.indexOf(
                                                        'key'
                                                      ) &&
                                                        t._k(
                                                          e.keyCode,
                                                          'left',
                                                          37,
                                                          e.key,
                                                          ['Left', 'ArrowLeft']
                                                        )
                                                        ? null
                                                        : 'button' in e &&
                                                          0 !== e.button
                                                        ? null
                                                        : e.ctrlKey ||
                                                          e.shiftKey ||
                                                          e.altKey ||
                                                          e.metaKey
                                                        ? null
                                                        : void (
                                                            !t.eraserEnabled &&
                                                            t.clickToFill(
                                                              e,
                                                              t.generateId(i, a)
                                                            )
                                                          )
                                                    },
                                                  },
                                                },
                                                [
                                                  s(
                                                    'span',
                                                    {
                                                      staticClass: 'boxLabel',
                                                      style: {
                                                        color: t.getFontColor(
                                                          t.generateId(i, a)
                                                        ),
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          t.boxLabels[
                                                            t.generateId(i, a)
                                                          ]['label']
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            }),
                                            0
                                          )
                                        }),
                                        s(
                                          'div',
                                          {
                                            staticClass: 'm0 statsContainer',
                                          },
                                          [
                                            s('span', [
                                              t._v(
                                                t._s(t.totalColorCombos) +
                                                  ' combos [' +
                                                  t._s(t.totalColorPercentage) +
                                                  '% of hands]'
                                              ),
                                            ]),
                                          ]
                                        ),
                                        s(
                                          'div',
                                          {
                                            key: t.rerenderEditor,
                                            class: [
                                              'm0',
                                              {
                                                editorContainer:
                                                  t.casinoSelected,
                                              },
                                            ],
                                          },
                                          [
                                            t.allFilterSelected()
                                              ? s('div', [
                                                  s(
                                                    'div',
                                                    {
                                                      staticClass:
                                                        'd-flex justify-space-between mb-2 align-center',
                                                    },
                                                    [
                                                      s(
                                                        'h3',
                                                        {
                                                          staticClass: 'mb-1',
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              t.currentComment
                                                                ? 'Edit'
                                                                : 'Enter'
                                                            ) + ' Comment'
                                                          ),
                                                        ]
                                                      ),
                                                      this.commentChanged()
                                                        ? s(
                                                            'v-btn',
                                                            {
                                                              attrs: {
                                                                small: '',
                                                                color:
                                                                  'primary',
                                                              },
                                                              on: {
                                                                click: function (
                                                                  e
                                                                ) {
                                                                  return t.saveComment()
                                                                },
                                                              },
                                                            },
                                                            [t._v('save')]
                                                          )
                                                        : t._e(),
                                                    ],
                                                    1
                                                  ),
                                                  s(
                                                    'div',
                                                    {
                                                      ref: 'editCommentRef',
                                                      attrs: {
                                                        id: 'editorComment',
                                                      },
                                                    },
                                                    [
                                                      s('editor', {
                                                        attrs: {
                                                          'api-key':
                                                            'z7wla2ncd135b2wgmnc7kgnweaja968dtpbiyb2dc0o0t19q',
                                                          init: t.editorInit(
                                                            'editorCommentHeight',
                                                            'editCommentRef'
                                                          ),
                                                        },
                                                        model: {
                                                          value:
                                                            t.currentComment,
                                                          callback: function (
                                                            e
                                                          ) {
                                                            t.currentComment = e
                                                          },
                                                          expression:
                                                            'currentComment',
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                ])
                                              : t._e(),
                                            t.casinoSelected
                                              ? s(
                                                  'v-expansion-panels',
                                                  {
                                                    staticClass: 'mt-2',
                                                    attrs: {
                                                      accordion: '',
                                                    },
                                                  },
                                                  [
                                                    s(
                                                      'v-expansion-panel',
                                                      [
                                                        s(
                                                          'v-expansion-panel-header',
                                                          {
                                                            staticClass: 'pa-2',
                                                          },
                                                          [
                                                            s(
                                                              'div',
                                                              {
                                                                staticClass:
                                                                  'd-flex justify-space-between align-center',
                                                              },
                                                              [
                                                                s('h3', [
                                                                  t._v(
                                                                    t._s(
                                                                      t.currentCasinoDetail
                                                                        ? 'Edit'
                                                                        : 'Enter'
                                                                    ) +
                                                                      ' Casino details'
                                                                  ),
                                                                ]),
                                                                this.casinoChanged()
                                                                  ? s(
                                                                      'v-btn',
                                                                      {
                                                                        attrs: {
                                                                          small:
                                                                            '',
                                                                          color:
                                                                            'primary',
                                                                        },
                                                                        on: {
                                                                          click: function (
                                                                            e
                                                                          ) {
                                                                            return t.saveCasino()
                                                                          },
                                                                        },
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          'save'
                                                                        ),
                                                                      ]
                                                                    )
                                                                  : t._e(),
                                                              ],
                                                              1
                                                            ),
                                                          ]
                                                        ),
                                                        s(
                                                          'v-expansion-panel-content',
                                                          {
                                                            staticClass: 'px-1',
                                                          },
                                                          [
                                                            s(
                                                              'div',
                                                              {
                                                                ref:
                                                                  'editDetailRef',
                                                                attrs: {
                                                                  id:
                                                                    'editorDetails',
                                                                },
                                                              },
                                                              [
                                                                s('editor', {
                                                                  attrs: {
                                                                    'api-key':
                                                                      'z7wla2ncd135b2wgmnc7kgnweaja968dtpbiyb2dc0o0t19q',
                                                                    init: t.editorInit(
                                                                      'editorDetailHeight',
                                                                      'editDetailRef'
                                                                    ),
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      t.currentCasinoDetail,
                                                                    callback: function (
                                                                      e
                                                                    ) {
                                                                      t.currentCasinoDetail = e
                                                                    },
                                                                    expression:
                                                                      'currentCasinoDetail',
                                                                  },
                                                                }),
                                                              ],
                                                              1
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                  ],
                                                  1
                                                )
                                              : t._e(),
                                          ],
                                          1
                                        ),
                                      ],
                                      2
                                    ),
                                    s(
                                      'div',
                                      {
                                        attrs: {
                                          id: 'legendDiv',
                                        },
                                      },
                                      [
                                        s(
                                          'draggable',
                                          {
                                            attrs: {
                                              id: 'labelContainer',
                                              tag: 'div',
                                              list: t.colorInSequence,
                                              handle: '.labelChild',
                                            },
                                            on: {
                                              end: t.colorReordered1,
                                            },
                                          },
                                          t._l(
                                            t.colorInSequence,
                                            function (e, i) {
                                              return s(
                                                'div',
                                                {
                                                  key:
                                                    'color' +
                                                    i *
                                                      t.colorInSequence.length,
                                                  staticClass: 'label',
                                                  attrs: {
                                                    'data-id': i,
                                                  },
                                                },
                                                [
                                                  t.checkVisibility(e)
                                                    ? s(
                                                        'div',
                                                        {
                                                          staticClass:
                                                            'colorBox',
                                                          style: {
                                                            'background-color': e,
                                                            color:
                                                              t
                                                                .fontColorInSequence[
                                                                i
                                                              ],
                                                          },
                                                          attrs: {
                                                            id: 'color' + i,
                                                            title: e,
                                                          },
                                                          on: {
                                                            mouseenter: function (
                                                              i
                                                            ) {
                                                              return t.colorFilter(
                                                                'apply',
                                                                e
                                                              )
                                                            },
                                                            mouseleave: function (
                                                              i
                                                            ) {
                                                              return t.colorFilter(
                                                                'remove',
                                                                e
                                                              )
                                                            },
                                                          },
                                                        },
                                                        [
                                                          s(
                                                            'div',
                                                            {
                                                              staticClass:
                                                                'd-flex',
                                                              on: {
                                                                click: function (
                                                                  t
                                                                ) {
                                                                  t.stopPropagation(),
                                                                    t.preventDefault()
                                                                },
                                                              },
                                                            },
                                                            [
                                                              s(
                                                                'v-text-field',
                                                                {
                                                                  key:
                                                                    t.labelUpdated,
                                                                  staticClass:
                                                                    'colorName',
                                                                  attrs: {
                                                                    flat: '',
                                                                    'hide-details':
                                                                      '',
                                                                    clearable:
                                                                      '',
                                                                    'single-line':
                                                                      '',
                                                                    height:
                                                                      '27',
                                                                    label:
                                                                      'Name',
                                                                    color:
                                                                      'white',
                                                                    value:
                                                                      t
                                                                        .colorName[
                                                                        e +
                                                                          '_name'
                                                                      ],
                                                                  },
                                                                  on: {
                                                                    input: function (
                                                                      i
                                                                    ) {
                                                                      return t.updateName(
                                                                        e,
                                                                        i
                                                                      )
                                                                    },
                                                                  },
                                                                }
                                                              ),
                                                              s('div', {
                                                                staticStyle: {
                                                                  'flex-basis':
                                                                    '20px',
                                                                },
                                                              }),
                                                              s(
                                                                'v-menu',
                                                                {
                                                                  attrs: {
                                                                    top: '',
                                                                    'offset-x':
                                                                      '',
                                                                  },
                                                                  scopedSlots: t._u(
                                                                    [
                                                                      {
                                                                        key:
                                                                          'activator',
                                                                        fn: function (
                                                                          e
                                                                        ) {
                                                                          var i =
                                                                            e.on
                                                                          return [
                                                                            s(
                                                                              'v-btn',
                                                                              t._g(
                                                                                {
                                                                                  attrs: {
                                                                                    'x-small':
                                                                                      '',
                                                                                    icon:
                                                                                      '',
                                                                                    color:
                                                                                      'black',
                                                                                    depressed:
                                                                                      '',
                                                                                  },
                                                                                },
                                                                                i
                                                                              ),
                                                                              [
                                                                                s(
                                                                                  'v-icon',
                                                                                  [
                                                                                    t._v(
                                                                                      'more_vert'
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                              ],
                                                                              1
                                                                            ),
                                                                          ]
                                                                        },
                                                                      },
                                                                    ],
                                                                    null,
                                                                    !0
                                                                  ),
                                                                },
                                                                [
                                                                  s(
                                                                    'v-list',
                                                                    {
                                                                      staticClass:
                                                                        'pa-0',
                                                                    },
                                                                    [
                                                                      t._l(
                                                                        t.colorEditingOptions,
                                                                        function (
                                                                          i,
                                                                          a
                                                                        ) {
                                                                          return s(
                                                                            'v-list-item',
                                                                            {
                                                                              key: a,
                                                                              on: {
                                                                                click: function (
                                                                                  i
                                                                                ) {
                                                                                  return t.saveFontColor(
                                                                                    e
                                                                                  )
                                                                                },
                                                                              },
                                                                            },
                                                                            [
                                                                              s(
                                                                                'v-list-item-title',
                                                                                [
                                                                                  t._v(
                                                                                    t._s(
                                                                                      i.text
                                                                                    )
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            ],
                                                                            1
                                                                          )
                                                                        }
                                                                      ),
                                                                      s(
                                                                        'v-list-item',
                                                                        {
                                                                          on: {
                                                                            click: function (
                                                                              i
                                                                            ) {
                                                                              return t.copyColorLabel(
                                                                                e,
                                                                                t
                                                                                  .colorName[
                                                                                  e +
                                                                                    '_name'
                                                                                ]
                                                                              )
                                                                            },
                                                                          },
                                                                        },
                                                                        [
                                                                          s(
                                                                            'v-list-item-title',
                                                                            [
                                                                              t._v(
                                                                                'Copy label'
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        ],
                                                                        1
                                                                      ),
                                                                      t.copiedColorLabel.hasOwnProperty(
                                                                        e
                                                                      ) &&
                                                                      t
                                                                        .copiedColorLabel[
                                                                        e
                                                                      ].text !==
                                                                        t
                                                                          .colorName[
                                                                          e +
                                                                            '_name'
                                                                        ]
                                                                        ? s(
                                                                            'v-list-item',
                                                                            {
                                                                              on: {
                                                                                click: function (
                                                                                  i
                                                                                ) {
                                                                                  return t.pasteColorLabel(
                                                                                    e
                                                                                  )
                                                                                },
                                                                              },
                                                                            },
                                                                            [
                                                                              s(
                                                                                'v-list-item-title',
                                                                                [
                                                                                  t._v(
                                                                                    'Paste label'
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            ],
                                                                            1
                                                                          )
                                                                        : t._e(),
                                                                    ],
                                                                    2
                                                                  ),
                                                                ],
                                                                1
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                          s(
                                                            'p',
                                                            {
                                                              staticClass:
                                                                'm0 labelChild',
                                                            },
                                                            [
                                                              s('span', [
                                                                t._v(
                                                                  t._s(
                                                                    t.calculateColorPercentage(
                                                                      e,
                                                                      2
                                                                    )
                                                                  ) + '%'
                                                                ),
                                                              ]),
                                                              t._v(
                                                                ' \n                      '
                                                              ),
                                                              s('span', [
                                                                t._v(
                                                                  '(' +
                                                                    t._s(
                                                                      t
                                                                        .calculateCombos[
                                                                        e
                                                                      ]
                                                                        ? t
                                                                            .calculateCombos[
                                                                            e
                                                                          ]
                                                                        : 0
                                                                    ) +
                                                                    ' combos)'
                                                                ),
                                                              ]),
                                                            ]
                                                          ),
                                                        ]
                                                      )
                                                    : t._e(),
                                                ]
                                              )
                                            }
                                          ),
                                          0
                                        ),
                                      ],
                                      1
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                        s('div', {
                          staticClass: 'm4p',
                        }),
                      ]
                    ),
                  ]
                ),
              ],
              1
            ),
          ],
          1
        )
      },
      Z = [
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i(
            'p',
            {
              staticClass: 'text-upper mb5',
            },
            [i('strong', [t._v('game')])]
          )
        },
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i(
            'p',
            {
              staticClass: 'text-upper mb5',
            },
            [i('strong', [t._v('casino')])]
          )
        },
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i(
            'p',
            {
              staticClass: 'text-upper mb5',
            },
            [i('strong', [t._v('stake')])]
          )
        },
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i(
            'p',
            {
              staticClass: 'text-upper mb5',
            },
            [i('strong', [t._v('players')])]
          )
        },
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i(
            'p',
            {
              staticClass: 'text-upper mb5 stackFilterMargingTop',
            },
            [i('strong', [t._v('Stack')])]
          )
        },
      ],
      tt =
        (i('8e6e'),
        i('7514'),
        i('456d'),
        i('20d6'),
        i('a481'),
        i('6762'),
        i('2fdb'),
        i('5df3'),
        i('1c4c'),
        i('55dd'),
        i('75fc')),
      et = (i('c5f6'), i('ac4d'), i('8a81'), i('ac6a'), i('6b54'), i('310e')),
      it = i.n(et),
      st = {
        box0_0: {
          label: 'AA',
          value: 6,
        },
        box0_1: {
          label: 'AKs',
          value: 4,
        },
        box0_2: {
          label: 'AQs',
          value: 4,
        },
        box0_3: {
          label: 'AJs',
          value: 4,
        },
        box0_4: {
          label: 'ATs',
          value: 4,
        },
        box0_5: {
          label: 'A9s',
          value: 4,
        },
        box0_6: {
          label: 'A8s',
          value: 4,
        },
        box0_7: {
          label: 'A7s',
          value: 4,
        },
        box0_8: {
          label: 'A6s',
          value: 4,
        },
        box0_9: {
          label: 'A5s',
          value: 4,
        },
        box0_10: {
          label: 'A4s',
          value: 4,
        },
        box0_11: {
          label: 'A3s',
          value: 4,
        },
        box0_12: {
          label: 'A2s',
          value: 4,
        },
        box1_0: {
          label: 'AKo',
          value: 12,
        },
        box1_1: {
          label: 'KK',
          value: 6,
        },
        box1_2: {
          label: 'KQs',
          value: 4,
        },
        box1_3: {
          label: 'KJs',
          value: 4,
        },
        box1_4: {
          label: 'KTs',
          value: 4,
        },
        box1_5: {
          label: 'K9s',
          value: 4,
        },
        box1_6: {
          label: 'K8s',
          value: 4,
        },
        box1_7: {
          label: 'K7s',
          value: 4,
        },
        box1_8: {
          label: 'K6s',
          value: 4,
        },
        box1_9: {
          label: 'K5s',
          value: 4,
        },
        box1_10: {
          label: 'K4s',
          value: 4,
        },
        box1_11: {
          label: 'K3s',
          value: 4,
        },
        box1_12: {
          label: 'K2s',
          value: 4,
        },
        box2_0: {
          label: 'AQo',
          value: 12,
        },
        box2_1: {
          label: 'KQo',
          value: 12,
        },
        box2_2: {
          label: 'QQ',
          value: 6,
        },
        box2_3: {
          label: 'QJs',
          value: 4,
        },
        box2_4: {
          label: 'QTs',
          value: 4,
        },
        box2_5: {
          label: 'Q9s',
          value: 4,
        },
        box2_6: {
          label: 'Q8s',
          value: 4,
        },
        box2_7: {
          label: 'Q7s',
          value: 4,
        },
        box2_8: {
          label: 'Q6s',
          value: 4,
        },
        box2_9: {
          label: 'Q5s',
          value: 4,
        },
        box2_10: {
          label: 'Q4s',
          value: 4,
        },
        box2_11: {
          label: 'Q3s',
          value: 4,
        },
        box2_12: {
          label: 'Q2s',
          value: 4,
        },
        box3_0: {
          label: 'AJo',
          value: 12,
        },
        box3_1: {
          label: 'KJo',
          value: 12,
        },
        box3_2: {
          label: 'QJo',
          value: 12,
        },
        box3_3: {
          label: 'JJ',
          value: 6,
        },
        box3_4: {
          label: 'JTs',
          value: 4,
        },
        box3_5: {
          label: 'J9s',
          value: 4,
        },
        box3_6: {
          label: 'J8s',
          value: 4,
        },
        box3_7: {
          label: 'J7s',
          value: 4,
        },
        box3_8: {
          label: 'J6s',
          value: 4,
        },
        box3_9: {
          label: 'J5s',
          value: 4,
        },
        box3_10: {
          label: 'J4s',
          value: 4,
        },
        box3_11: {
          label: 'J3s',
          value: 4,
        },
        box3_12: {
          label: 'J2s',
          value: 4,
        },
        box4_0: {
          label: 'ATo',
          value: 12,
        },
        box4_1: {
          label: 'KTo',
          value: 12,
        },
        box4_2: {
          label: 'QTo',
          value: 12,
        },
        box4_3: {
          label: 'JTo',
          value: 12,
        },
        box4_4: {
          label: 'TT',
          value: 6,
        },
        box4_5: {
          label: 'T9s',
          value: 4,
        },
        box4_6: {
          label: 'T8s',
          value: 4,
        },
        box4_7: {
          label: 'T7s',
          value: 4,
        },
        box4_8: {
          label: 'T6s',
          value: 4,
        },
        box4_9: {
          label: 'T5s',
          value: 4,
        },
        box4_10: {
          label: 'T4s',
          value: 4,
        },
        box4_11: {
          label: 'T3s',
          value: 4,
        },
        box4_12: {
          label: 'T2s',
          value: 4,
        },
        box5_0: {
          label: 'A9o',
          value: 12,
        },
        box5_1: {
          label: 'K9o',
          value: 12,
        },
        box5_2: {
          label: 'Q9o',
          value: 12,
        },
        box5_3: {
          label: 'J9o',
          value: 12,
        },
        box5_4: {
          label: 'T9o',
          value: 12,
        },
        box5_5: {
          label: '99',
          value: 6,
        },
        box5_6: {
          label: '98s',
          value: 4,
        },
        box5_7: {
          label: '97s',
          value: 4,
        },
        box5_8: {
          label: '96s',
          value: 4,
        },
        box5_9: {
          label: '95s',
          value: 4,
        },
        box5_10: {
          label: '94s',
          value: 4,
        },
        box5_11: {
          label: '93s',
          value: 4,
        },
        box5_12: {
          label: '92s',
          value: 4,
        },
        box6_0: {
          label: 'A8o',
          value: 12,
        },
        box6_1: {
          label: 'K8o',
          value: 12,
        },
        box6_2: {
          label: 'Q8o',
          value: 12,
        },
        box6_3: {
          label: 'J8o',
          value: 12,
        },
        box6_4: {
          label: 'T8o',
          value: 12,
        },
        box6_5: {
          label: '98o',
          value: 12,
        },
        box6_6: {
          label: '88',
          value: 6,
        },
        box6_7: {
          label: '87s',
          value: 4,
        },
        box6_8: {
          label: '86s',
          value: 4,
        },
        box6_9: {
          label: '85s',
          value: 4,
        },
        box6_10: {
          label: '84s',
          value: 4,
        },
        box6_11: {
          label: '83s',
          value: 4,
        },
        box6_12: {
          label: '82s',
          value: 4,
        },
        box7_0: {
          label: 'A7o',
          value: 12,
        },
        box7_1: {
          label: 'K7o',
          value: 12,
        },
        box7_2: {
          label: 'Q7o',
          value: 12,
        },
        box7_3: {
          label: 'J7o',
          value: 12,
        },
        box7_4: {
          label: 'T7o',
          value: 12,
        },
        box7_5: {
          label: '97o',
          value: 12,
        },
        box7_6: {
          label: '87o',
          value: 12,
        },
        box7_7: {
          label: '77',
          value: 6,
        },
        box7_8: {
          label: '76s',
          value: 4,
        },
        box7_9: {
          label: '75s',
          value: 4,
        },
        box7_10: {
          label: '74s',
          value: 4,
        },
        box7_11: {
          label: '73s',
          value: 4,
        },
        box7_12: {
          label: '72s',
          value: 4,
        },
        box8_0: {
          label: 'A6o',
          value: 12,
        },
        box8_1: {
          label: 'K6o',
          value: 12,
        },
        box8_2: {
          label: 'Q6o',
          value: 12,
        },
        box8_3: {
          label: 'J6o',
          value: 12,
        },
        box8_4: {
          label: 'T6o',
          value: 12,
        },
        box8_5: {
          label: '96o',
          value: 12,
        },
        box8_6: {
          label: '86o',
          value: 12,
        },
        box8_7: {
          label: '76o',
          value: 12,
        },
        box8_8: {
          label: '66',
          value: 6,
        },
        box8_9: {
          label: '65s',
          value: 4,
        },
        box8_10: {
          label: '64s',
          value: 4,
        },
        box8_11: {
          label: '63s',
          value: 4,
        },
        box8_12: {
          label: '62s',
          value: 4,
        },
        box9_0: {
          label: 'A5o',
          value: 12,
        },
        box9_1: {
          label: 'K5o',
          value: 12,
        },
        box9_2: {
          label: 'Q5o',
          value: 12,
        },
        box9_3: {
          label: 'J5o',
          value: 12,
        },
        box9_4: {
          label: 'T5o',
          value: 12,
        },
        box9_5: {
          label: '95o',
          value: 12,
        },
        box9_6: {
          label: '85o',
          value: 12,
        },
        box9_7: {
          label: '75o',
          value: 12,
        },
        box9_8: {
          label: '65o',
          value: 12,
        },
        box9_9: {
          label: '55',
          value: 6,
        },
        box9_10: {
          label: '54s',
          value: 4,
        },
        box9_11: {
          label: '53s',
          value: 4,
        },
        box9_12: {
          label: '52s',
          value: 4,
        },
        box10_0: {
          label: 'A4o',
          value: 12,
        },
        box10_1: {
          label: 'K4o',
          value: 12,
        },
        box10_2: {
          label: 'Q4o',
          value: 12,
        },
        box10_3: {
          label: 'J4o',
          value: 12,
        },
        box10_4: {
          label: 'T4o',
          value: 12,
        },
        box10_5: {
          label: '94o',
          value: 12,
        },
        box10_6: {
          label: '84o',
          value: 12,
        },
        box10_7: {
          label: '74o',
          value: 12,
        },
        box10_8: {
          label: '64o',
          value: 12,
        },
        box10_9: {
          label: '54o',
          value: 12,
        },
        box10_10: {
          label: '44',
          value: 6,
        },
        box10_11: {
          label: '43s',
          value: 4,
        },
        box10_12: {
          label: '42s',
          value: 4,
        },
        box11_0: {
          label: 'A3o',
          value: 12,
        },
        box11_1: {
          label: 'K3o',
          value: 12,
        },
        box11_2: {
          label: 'Q3o',
          value: 12,
        },
        box11_3: {
          label: 'J3o',
          value: 12,
        },
        box11_4: {
          label: 'T3o',
          value: 12,
        },
        box11_5: {
          label: '93o',
          value: 12,
        },
        box11_6: {
          label: '83o',
          value: 12,
        },
        box11_7: {
          label: '73o',
          value: 12,
        },
        box11_8: {
          label: '63o',
          value: 12,
        },
        box11_9: {
          label: '53o',
          value: 12,
        },
        box11_10: {
          label: '43o',
          value: 12,
        },
        box11_11: {
          label: '33',
          value: 6,
        },
        box11_12: {
          label: '32s',
          value: 4,
        },
        box12_0: {
          label: 'A2o',
          value: 12,
        },
        box12_1: {
          label: 'K2o',
          value: 12,
        },
        box12_2: {
          label: 'Q2o',
          value: 12,
        },
        box12_3: {
          label: 'J2o',
          value: 12,
        },
        box12_4: {
          label: 'T2o',
          value: 12,
        },
        box12_5: {
          label: '92o',
          value: 12,
        },
        box12_6: {
          label: '82o',
          value: 12,
        },
        box12_7: {
          label: '72o',
          value: 12,
        },
        box12_8: {
          label: '62o',
          value: 12,
        },
        box12_9: {
          label: '52o',
          value: 12,
        },
        box12_10: {
          label: '42o',
          value: 12,
        },
        box12_11: {
          label: '32o',
          value: 12,
        },
        box12_12: {
          label: '22',
          value: 6,
        },
      },
      at = st,
      ot = i('8229'),
      nt = i('ca72'),
      lt = i('555f'),
      rt = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e
        return i(
          'div',
          {
            staticClass: 'text-center ma-2',
          },
          [
            'success' == t.color
              ? i(
                  'v-snackbar',
                  {
                    attrs: {
                      right: !0,
                      top: !0,
                      color: 'success',
                    },
                    model: {
                      value: t.snackbar,
                      callback: function (e) {
                        t.snackbar = e
                      },
                      expression: 'snackbar',
                    },
                  },
                  [
                    t._v('\n    ' + t._s(t.message) + '\n    '),
                    i(
                      'v-btn',
                      {
                        attrs: {
                          color: 'pink',
                          text: '',
                        },
                        on: {
                          click: function (e) {
                            t.snackbar = !1
                          },
                        },
                      },
                      [t._v('Close')]
                    ),
                  ],
                  1
                )
              : i(
                  'v-snackbar',
                  {
                    attrs: {
                      right: !0,
                      top: !0,
                      color: 'warning',
                    },
                    model: {
                      value: t.snackbar,
                      callback: function (e) {
                        t.snackbar = e
                      },
                      expression: 'snackbar',
                    },
                  },
                  [
                    t._v('\n    ' + t._s(t.message) + '\n    '),
                    i(
                      'v-btn',
                      {
                        attrs: {
                          color: 'pink',
                          text: '',
                        },
                        on: {
                          click: function (e) {
                            t.snackbar = !1
                          },
                        },
                      },
                      [t._v('Close')]
                    ),
                  ],
                  1
                ),
          ],
          1
        )
      },
      ct = [],
      dt = {
        data: function () {
          return {
            snackbar: !1,
          }
        },
        props: ['showSnackbar', 'message', 'color'],
        watch: {
          showSnackbar: function (t) {
            this.snackbar = t
          },
        },
      },
      ut = dt,
      ht = i('2db4'),
      pt = Object(d['a'])(ut, rt, ct, !1, null, null, null),
      ft = pt.exports
    function vt(t, e) {
      var i = Object.keys(t)
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t)
        e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          })),
          i.push.apply(i, s)
      }
      return i
    }
    function bt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {}
        e % 2
          ? vt(i, !0).forEach(function (e) {
              Object(L['a'])(t, e, i[e])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
          : vt(i).forEach(function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            })
      }
      return t
    }
    h()(pt, {
      VBtn: f['a'],
      VSnackbar: ht['a'],
    })
    var mt = {
        name: 'TableAndFilters',
        props: ['rows', 'columns'],
        mixins: [ot['a']],
        components: {
          editor: nt['a'],
          Loader: lt['a'],
          draggable: it.a,
          SnackBar: ft,
        },
        data: function () {
          return {
            startedSaving: !1,
            startedSavingFontColor: !1,
            showWarningDialog: !1,
            noDataToShow: !1,
            eraserSelected: !1,
            eraserSelectedThroughBtn: !1,
            eraserEnabled: !1,
            controlDeleting: !1,
            gameList: [],
            gameSelected: '',
            showGames: !1,
            casinoList: [],
            casinoSelected: '',
            currentCasinoDetail: '',
            casinoDetailList: {},
            commentsList: {},
            currentComment: '',
            commentChangedWarning: !1,
            casinoChangedWarning: !1,
            showCasinos: !1,
            stakeList: [],
            stakeSelected: '',
            showStakes: !1,
            playersList: [],
            playersSelected: '',
            showPlayers: !1,
            sequenceList: [],
            sequenceSelected: '',
            showSubSequence: !1,
            subSequenceList: [],
            selectedSubSequence: '',
            situations: [],
            positionList: [],
            selectedSituation: '',
            reactionList: [],
            selectedReaction: '',
            showReactions: !1,
            sub2FilterList: [],
            selectedSub2Filter: '',
            sub3FilterList: [],
            selectedSub3Filter: '',
            showSub3Filters: !1,
            stackList: [],
            selectedStack: '',
            stackChildList: [],
            selectedStackChild: '',
            gameId: '',
            casinoId: '',
            stakeId: '',
            playersId: '',
            sequenceId: '',
            subSequenceId: '',
            positionId: '',
            sub2FilterId: '',
            sub3FilterId: '',
            reactionId: '',
            stackId: '',
            stackChildId: '',
            showStacks: !1,
            showStackChilds: !1,
            lastUsedStack: '',
            filters: {},
            colorNameToHex: {
              green: '#008000',
              yellow: '#ffff00',
              red: '#ff0000',
              blue: '#0000ff',
              orange: '#ffa500',
              cyan: '#00ffff',
              indigo: '#4b0082',
              deeppink: '#ff1493',
              mediumpurple: '#9370db',
            },
            swatches: [],
            coloring: 1,
            colors: [],
            colorEditingOptions: [
              {
                text: 'Update font color',
                value: 'editfontcolor',
              },
            ],
            openFontEditingDialog: !1,
            editingColor: '',
            newFontColor: '',
            labelUpdated: 0,
            colorName: {},
            colorOnlyData: {},
            partitioningCriteria: [
              {
                text: '0/0',
                value: '0',
              },
              {
                text: '33/66',
                value: '33',
              },
              {
                text: '50/50',
                value: '50',
              },
              {
                text: '66/33',
                value: '66',
              },
              {
                text: '100/0',
                value: '100',
              },
            ],
            selectedColor: '',
            previousSelectedColor: '',
            mode: 'hexa',
            hideModeSwitch: !0,
            mouseDown: !1,
            colouredTableData: {},
            justEditedBox: {},
            phaseColoring: {},
            lastErased: {},
            phaseDeleting: {},
            totalBoxesColored: {},
            undoAction: !1,
            listOfActions: {},
            preFilling: !1,
            boxLabels: at,
            allCellDataFromServer: {},
            onlyFilteredCell: {},
            topViewRelation: {
              game: 'casino',
              casino: 'stake',
              stake: 'players',
              players: 'sequence',
              sequence: 'subSequence',
              subSequence: 'position',
              position: 'sub2Filter',
              sub2Filter: 'sub3Filter',
              sub3Filter: 'reaction',
              reaction: 'stack',
              stack: 'stackChild',
            },
            colorInSequence: [],
            fontColorInSequence: [],
            removedColorFromSequence: {},
            allColorCombos: {},
            colorOnlyDataString: '',
            currentSelectedFiltersId: '',
            colorLabelChanged: !1,
            colorChangingIndex: '',
            dragOptions: {
              dropzoneSelector: 'div#labelContainer',
              draggableSelector: 'div.label',
              showDropzoneAreas: !0,
            },
            copiedFilteredCell: {},
            tableCopied: !1,
            pastingTable: !1,
            copiedColorLabel: {},
            rerenderEditor: 0,
            fetchRequestFlag: {
              filter: !1,
              table: !1,
              comment: !1,
              casino: !1,
            },
            localStorageKey: 'adminFilter',
            checkingLocalStorage: !0,
            showLoader: !0,
            defaultStackValueMap: {},
            stackChildName: '',
            sub3FilterName: '',
            reactionName: '',
            stackIdUpadteString: '',
            isPasted: !1,
            showSnackbar: !1,
            snackBarMessage: '',
            snackBarType: null,
            filterTitles: {
              subSequence: {},
              action: {},
              sub2Filter: {},
              sub3Filter: {},
              reaction: {},
              stack: {},
              stackChild: {},
            },
          }
        },
        created: function () {
          this.getFilters(),
            this.getTable(),
            this.getCasinos(),
            this.getComments(),
            this.getStarColor(),
            this.addLocalStorageChangeEventListener()
        },
        watch: {
          colorOnlyDataString: function (t, e) {
            if (t !== e)
              for (var i in this.colorOnlyData) this.calculateCombos = i
          },
          stackId: function (t, e) {
            t !== e &&
              (this.stackIdUpadteString = ''
                .concat(this.stackId, '-')
                .concat(new Date().getTime()))
          },
          stackIdUpadteString: function (t, e) {
            t !== e &&
              ((this.colors = []),
              (this.colorOnlyData = {}),
              (this.allColorCombos = {}),
              (this.removedColorFromSequence = {}),
              this.showFilteredData())
          },
          selectedColor: function (t, e) {
            t && t.toLowerCase(), e && e.toLowerCase()
          },
        },
        computed: {
          calculateCombos: {
            get: function () {
              return this.allColorCombos
            },
            set: function (t) {
              var e = 0
              if (
                this.colorOnlyData[t].hasOwnProperty('boxes') &&
                this.colorOnlyData[t]['boxes'].length
              ) {
                var i = !0,
                  s = !1,
                  a = void 0
                try {
                  for (
                    var o,
                      n = this.colorOnlyData[t]['boxes'][Symbol.iterator]();
                    !(i = (o = n.next()).done);
                    i = !0
                  ) {
                    var l = o.value
                    100 === l.width
                      ? (e += this.boxLabels[l.boxId].value)
                      : 50 === l.width
                      ? (e += this.boxLabels[l.boxId].value / 2)
                      : 33 === l.width
                      ? (e += this.boxLabels[l.boxId].value / 3)
                      : 66 === l.width &&
                        (e += this.boxLabels[l.boxId].value / 1.5)
                  }
                } catch (r) {
                  ;(s = !0), (a = r)
                } finally {
                  try {
                    i || null == n.return || n.return()
                  } finally {
                    if (s) throw a
                  }
                }
                e.toString().split('.')[1]
                  ? (this[t + 'Combos'] = e.toFixed(2))
                  : (this[t + 'Combos'] = e),
                  this[''.concat(t, 'Combos')] &&
                    (this.allColorCombos[t] = this[''.concat(t, 'Combos')])
              } else
                (this[''.concat(t, 'Combos')] = 0), (this.allColorCombos[t] = 0)
            },
          },
          totalCombos: function () {
            var t = 0
            for (var e in this.boxLabels) t += this.boxLabels[e].value
            return t
          },
          totalColorCombos: function () {
            var t = this,
              e = 0
            return (
              this.colorOnlyDataString &&
                (e = this.colors.reduce(function (e, i) {
                  return (e += Number(t.calculateCombos[i.name || i])), e
                }, 0)),
              e ? Number(e).toFixed(0) : 0
            )
          },
          totalColorPercentage: function () {
            var t = this,
              e = 0
            return (
              this.colorOnlyDataString &&
                (e = this.colors.reduce(function (e, i) {
                  return (
                    (e += Number(t.calculateColorPercentage(i.name || i))), e
                  )
                }, 0)),
              e ? Number(Number(e).toFixed(2)) : 0
            )
          },
        },
        methods: {
          copyColorLabel: function (t, e) {
            this.copiedColorLabel.hasOwnProperty(t) ||
              (this.copiedColorLabel[t] = {
                text: '',
                fromFilterId: '',
              }),
              (this.copiedColorLabel[t].text = e),
              (this.copiedColorLabel[
                t
              ].fromFilterId = this.currentSelectedFiltersId)
          },
          setFilterTitles: function (t) {
            for (var e in t)
              if (t[e])
                for (var i in t[e])
                  this.filterTitles[e][i] = t[e][i] && t[e][i].title
          },
          pasteColorLabel: function (t) {
            this.updateName(t, this.copiedColorLabel[t].text),
              this.labelUpdated++
          },
          copyTable: function () {
            for (var t in this.allCellDataFromServer)
              this.allCellDataFromServer[t][this.currentSelectedFiltersId] &&
                (this.onlyFilteredCell[t] = JSON.parse(
                  JSON.stringify(
                    this.allCellDataFromServer[t][this.currentSelectedFiltersId]
                  )
                ))
            ;(this.onlyFilteredCell['colorData']['sequenceOfColor'] = Object(
              tt['a']
            )(this.colorInSequence)),
              localStorage.setItem(
                'tableData',
                JSON.stringify(this.onlyFilteredCell)
              ),
              (this.tableCopied = !0)
          },
          pasteTable: function () {
            ;(this.eraserSelectedThroughBtn = !1), (this.pastingTable = !0)
            var t = !1
            for (var e in (this.clearFilledTable(),
            (this.copiedFilteredCell = JSON.parse(
              localStorage.getItem('tableData')
            )),
            this.copiedFilteredCell))
              if ('colorData' !== e) {
                var i =
                    this.copiedFilteredCell[e].colors[0] &&
                    this.copiedFilteredCell[e].colors[0].name
                      ? this.copiedFilteredCell[e].colors.sort(function (t, e) {
                          return t.place - e.place
                        })
                      : this.copiedFilteredCell[e].colors,
                  s = !0,
                  a = !1,
                  o = void 0
                try {
                  for (
                    var n, l = i[Symbol.iterator]();
                    !(s = (n = l.next()).done);
                    s = !0
                  ) {
                    var r = n.value
                    ;(this.selectedColor = r.name || r),
                      this.clickToFill({}, e),
                      (t =
                        100 !==
                        this.copiedFilteredCell[e].colorPercentage[
                          r.name || r
                        ]),
                      this.fillComplete(null, !0)
                  }
                } catch (v) {
                  ;(a = !0), (o = v)
                } finally {
                  try {
                    s || null == l.return || l.return()
                  } finally {
                    if (a) throw o
                  }
                }
                t &&
                  this.divideIt(
                    this.copiedFilteredCell[e].colorPercentage[
                      this.copiedFilteredCell[e].colors[0].name
                    ],
                    e
                  )
              } else {
                ;(this.colorInSequence = this.copiedFilteredCell.colorData.sequenceOfColor),
                  this.setFontColorInLabel(this.copiedFilteredCell.colorData)
                var c = !0,
                  d = !1,
                  u = void 0
                try {
                  for (
                    var h, p = this.colorInSequence[Symbol.iterator]();
                    !(c = (h = p.next()).done);
                    c = !0
                  ) {
                    var f = h.value
                    ;(this.colorName[f + '_name'] = this.copiedFilteredCell
                      .colorData[f]
                      ? this.copiedFilteredCell.colorData[f].name
                      : ''),
                      this.colorOnlyData.hasOwnProperty(f) ||
                        ((this.colorOnlyData[f] = {}),
                        (this.colorOnlyData[f]['boxes'] = [])),
                      this.colorOnlyData[f].hasOwnProperty('name') ||
                        (this.colorOnlyData[f]['name'] = ''),
                      this.colorOnlyData[f].hasOwnProperty('fontColor') ||
                        (this.colorOnlyData[f]['fontColor'] = ''),
                      (this.colorOnlyData[f]['name'] = this.copiedFilteredCell
                        .colorData[f]
                        ? this.copiedFilteredCell.colorData[f].name
                        : ''),
                      (this.colorOnlyData[f]['fontColor'] = this
                        .copiedFilteredCell.colorData[f]
                        ? this.copiedFilteredCell.colorData[f].fontColor
                        : '')
                  }
                } catch (v) {
                  ;(d = !0), (u = v)
                } finally {
                  try {
                    c || null == p.return || p.return()
                  } finally {
                    if (d) throw u
                  }
                }
              }
            ;(this.pastingTable = !1), (this.isPasted = !0)
          },
          clearCopiedTable: function () {
            ;(this.copiedFilteredCell = {}),
              (this.tableCopied = !1),
              localStorage.removeItem('tableData')
          },
          showChangeColor: function (t, e) {
            t.preventDefault(), (this.colorChangingIndex = e)
            var i = document.createElement('div')
            i.classList.add('colorChangeDivCont')
            var s = document.createElement('div')
            ;(e + 1) % 5 === 0
              ? (s.classList.add('colorChangeDivLast'),
                (i.style.left = '-40px'))
              : (s.classList.add('colorChangeDiv'), (i.style.left = '-7px')),
              (i.style.top = '-37px')
            var a = document.createElement('input')
            a.classList.add('changeColorField'),
              a.addEventListener('keydown', this.changeColorHex),
              s.appendChild(a),
              i.appendChild(s)
            var o = Object(tt['a'])(
                Array.from(t.target.children).map(function (t) {
                  return t.className
                })
              ),
              n = t.target.id.includes('color')
                ? t.target.id
                : t.target.parentElement.id,
              l = document.getElementById(n)
            o.includes('colorChangeDivCont') || (l.appendChild(i), a.focus())
          },
          removeChangeColor: function (t) {
            var e = t.target.id.includes('color')
                ? t.target.id
                : t.target.parentElement.id,
              i = document.getElementById(e),
              s = Object(tt['a'])(
                Array.from(i.children).map(function (t) {
                  return t.className
                })
              ),
              a = ''
            s.includes('colorChangeDivCont') &&
              ((a = document.querySelector(
                '#'.concat(e, '>.colorChangeDivCont')
              )),
              i.removeChild(a))
          },
          changeColorHex: function (t) {
            if (13 === t.keyCode || 'Enter' === t.key) {
              var e = t.target.value.toLowerCase(),
                i = this.colorChangingIndex,
                s = {
                  index: i,
                  value: e,
                }
              this.updateStarColor('add', s), (t.target.value = '')
              var a = document.getElementById(
                  'color-'.concat(this.colorChangingIndex)
                ),
                o = document.querySelector(
                  '#color-'.concat(
                    this.colorChangingIndex,
                    '>.colorChangeDivCont'
                  )
                )
              a.removeChild(o), (this.colorChangingIndex = '')
            }
          },
          colorReordered: function (t) {
            var e = this,
              i = Number(t.detail.ids[0]),
              s = t.detail.index,
              a = [this.colorInSequence[s]]
            if (i !== s) {
              if (
                (this.$set(this.colorInSequence, s, this.colorInSequence[i]),
                s < i)
              ) {
                for (var o = s + 1; o < this.colorInSequence.length; o++)
                  this.colorInSequence[o] !== this.colorInSequence[i] &&
                    a.push(this.colorInSequence[o])
                for (
                  var n = [].concat(
                      Object(tt['a'])(this.colorInSequence.slice(0, s + 1)),
                      a
                    ),
                    l = 0;
                  l < n.length;
                  l++
                )
                  this.$set(this.colorInSequence, l, n[l])
              }
              if (s > i)
                for (
                  var r = [].concat(
                      Object(tt['a'])(
                        this.colorInSequence.slice(0, s).filter(function (t) {
                          return t !== e.colorInSequence[i]
                        })
                      ),
                      a,
                      Object(tt['a'])(
                        this.colorInSequence.slice(
                          s,
                          this.colorInSequence.length
                        )
                      )
                    ),
                    c = 0;
                  c < r.length;
                  c++
                )
                  this.$set(this.colorInSequence, c, r[c])
              var d = this.fontColorInSequence[i],
                u = Object(tt['a'])(this.fontColorInSequence)
              if (i < s) {
                for (var h = i + 1; h <= s; h++) u[h - 1] = u[h]
                u[s] = d
              } else {
                for (var p = i - 1; p >= s; p--) u[p + 1] = u[p]
                u[s] = d
              }
              this.fontColorInSequence = u
            }
            this.save()
          },
          colorReordered1: function (t) {
            var e = Number(t.oldIndex),
              i = Number(t.newIndex)
            if (e !== i) {
              var s = this.fontColorInSequence[e],
                a = Object(tt['a'])(this.fontColorInSequence)
              if (e < i) {
                for (var o = e + 1; o <= i; o++) a[o - 1] = a[o]
                a[i] = s
              } else {
                for (var n = e - 1; n >= i; n--) a[n + 1] = a[n]
                a[i] = s
              }
              this.fontColorInSequence = a
            }
            this.save()
          },
          selectEraser: function () {
            ;(this.eraserSelected = !this.eraserSelected),
              (this.eraserSelectedThroughBtn = this.eraserSelected
                ? Boolean(!0)
                : Boolean(!1))
          },
          rgbToHex: function (t) {
            if (
              'r' == t.charAt(0) &&
              'g' == t.charAt(1) &&
              'b' == t.charAt(2)
            ) {
              t = t.replace('rgb(', '').replace(')', '').split(',')
              var e = parseInt(t[0], 10).toString(16),
                i = parseInt(t[1], 10).toString(16),
                s = parseInt(t[2], 10).toString(16)
              ;(e = 1 == e.length ? '0' + e : e),
                (i = 1 == i.length ? '0' + i : i),
                (s = 1 == s.length ? '0' + s : s)
              var a = '#' + e + i + s
              return a
            }
            return t
          },
          generateId: function (t, e) {
            var i = 'box' + t + '_' + e
            return (
              this.colouredTableData.hasOwnProperty(i) ||
                ((this.colouredTableData[i] = {}),
                (this.colouredTableData[i]['colors'] = []),
                (this.colouredTableData[i]['colorPercentage'] = {})),
              i
            )
          },
          calculateColorPercentage: function (t, e) {
            if (
              t &&
              this.calculateCombos[t] &&
              !this.colorInSequence.includes(t)
            )
              if (this.removedColorFromSequence.hasOwnProperty(t)) {
                var i = this.removedColorFromSequence[t].fromIndex
                0 === i
                  ? (this.colorInSequence.unshift(t),
                    this.fontColorInSequence.unshift(
                      this.removedColorFromSequence[t].fontColor
                    ))
                  : ((this.colorInSequence = [].concat(
                      Object(tt['a'])(
                        this.colorInSequence.slice(
                          0,
                          this.removedColorFromSequence[t].fromIndex
                        )
                      ),
                      [t],
                      Object(tt['a'])(
                        this.colorInSequence.slice(
                          this.removedColorFromSequence[t].fromIndex,
                          this.colorInSequence.length
                        )
                      )
                    )),
                    (this.fontColorInSequence = [].concat(
                      Object(tt['a'])(
                        this.fontColorInSequence.slice(
                          0,
                          this.removedColorFromSequence[t].fromIndex
                        )
                      ),
                      [this.removedColorFromSequence[t].fontColor],
                      Object(tt['a'])(
                        this.fontColorInSequence.slice(
                          this.removedColorFromSequence[t].fromIndex,
                          this.fontColorInSequence.length
                        )
                      )
                    )))
              } else this.colorInSequence.push(t)
            else if (0 == this.calculateCombos[t]) {
              var s = this.colorInSequence.findIndex(function (e) {
                return e === t
              })
              ;-1 !== s &&
                ((this.removedColorFromSequence[t] = {
                  fromIndex: s,
                  fontColor: this.fontColorInSequence[s],
                }),
                this.colorInSequence.splice(s, 1),
                this.fontColorInSequence.splice(s, 1)),
                this.colorOnlyData.hasOwnProperty(t) &&
                  delete this.colorOnlyData[t],
                this.colorName.hasOwnProperty(''.concat(t, '_name')) &&
                  delete this.colorName[''.concat(t, '_name')]
            }
            var a = (this.calculateCombos[t] / this.totalCombos) * 100
            return e ? Number(Number(a).toFixed(e)) : Number(a)
          },
          saveFontColor: function (t) {
            var e = this
            if (t.toLowerCase() !== this.selectedColor.toLowerCase()) {
              ;(this.openFontEditingDialog = !1),
                (this.showLoader = !0),
                (this.editingColor = t),
                (this.colorOnlyData[this.editingColor][
                  'fontColor'
                ] = this.selectedColor.toLowerCase()),
                (this.fontColorInSequence = this.colorInSequence.map(function (
                  t
                ) {
                  var i = e.colorOnlyData[t]
                  return i && i.fontColor ? i.fontColor : ''
                }))
              var i = Object.keys(this.filters).sort(),
                s = '',
                a = this.defaultStackChildSelectedHelper()
              i.forEach(function (t) {
                s += 'stackChild' === t && a ? '' : e.filters[t]
              })
              var o = {},
                n = Math.abs(this.hashCode(s))
              o['colorData'] = {}
              var l = {}
              for (var r in ((l[this.editingColor] = {}), this.colorOnlyData))
                l.hasOwnProperty(r) || (l[r] = {}),
                  (l[r]['name'] = this.colorOnlyData[r]['name']
                    ? this.colorOnlyData[r]['name']
                    : ''),
                  (l[r]['fontColor'] = this.colorOnlyData[r]['fontColor']
                    ? this.colorOnlyData[r]['fontColor']
                    : '')
              o['colorData'][n] = bt({}, l, {
                sequenceOfColor: this.colorInSequence,
              })
              var c = {
                data: o,
              }
              ;(this.startedSavingFontColor = !0),
                I['a']
                  .post('table', bt({}, c))
                  .then(function (i) {
                    ;(e.savingResult = i),
                      200 === i.status &&
                        i.data.success &&
                        ((e.openFontEditingDialog = !1),
                        (e.newFontColor = ''),
                        (e.showLoader = !1),
                        e.updateAllCellDataFromServer(o, n),
                        e.updateFontColorOtherFilters(t))
                  })
                  .catch(function () {
                    ;(e.openFontEditingDialog = !1),
                      (e.newFontColor = ''),
                      (e.showLoader = !1),
                      e.snackBarFunction('Error while saving font color')
                  })
            }
          },
          updateFontColorOtherFilters: function (t) {
            for (var e in this.allCellDataFromServer.colorData) {
              var i = this.allCellDataFromServer.colorData[e]
              for (var s in i) s === t && (i[s].fontColor = this.selectedColor)
            }
          },
          getFontColor: function (t) {
            var e = this.$refs[t] ? this.$refs[t][0] : ''
            if (e) {
              var i = e.children.namedItem('colorChild-0'),
                s = i
                  ? this.rgbToHex(i.style.backgroundColor)
                  : this.rgbToHex(e.style.backgroundColor)
              return s &&
                this.colorOnlyData[s] &&
                this.colorOnlyData[s].hasOwnProperty('fontColor')
                ? this.colorOnlyData[s].fontColor
                : '#000000'
            }
            return '#000000'
          },
          updateName: function (t, e) {
            var i = this
            e
              ? ((this.colorOnlyData[t]['name'] = e),
                (this.colorName[''.concat(t, '_name')] = e))
              : ((this.colorOnlyData[t]['name'] = ''),
                (this.colorName[''.concat(t, '_name')] = '')),
              this.$nextTick(function () {
                i.colorLabelChanged = !0
              })
          },
          textToHtml: function (t) {
            var e = new DOMParser().parseFromString(t, 'text/html')
            return e.body.firstChild
          },
          createButton: function (t, e, i) {
            var s = this,
              a = document.createElement('button'),
              o = document.createTextNode(e)
            return (
              a.appendChild(o),
              a.addEventListener('click', function (e) {
                s.divideIt(i, t, e)
              }),
              a
            )
          },
          divideIt: function (t, e) {
            var i = this,
              s =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : ''
            s && (s.stopPropagation(), this.removeBubble(e))
            var a = this.$refs[e][0]
            a.style.backgroundColor = ''
            var o = a.style.width.split(
                a.style.width.slice(a.style.width.length - 2)
              )[0],
              n = JSON.parse(JSON.stringify(this.listOfActions))
            n.length = Object.keys(n).length
            var l = Array.from(n),
              r = l.filter(function (t) {
                return t.from.hasOwnProperty(e)
              }),
              c =
                r.length && r[r.length - 1].from[e].hasOwnProperty('colors')
                  ? r[r.length - 1].from[e].colors
                  : ''
            if (
              ((c =
                c &&
                c.length &&
                r.length &&
                'dividing' === r[r.length - 1].action &&
                c.find(function (t) {
                  return (
                    r[r.length - 1].to[e].colorPercentage &&
                    100 === r[r.length - 1].to[e].colorPercentage[t.name]
                  )
                })
                  ? ''
                  : c),
              (c =
                c && c[0].name
                  ? c.sort(function (t, e) {
                      return t.place - e.place
                    })
                  : c),
              50 == t)
            ) {
              var d = (49 * o) / 100,
                u = (49 * o) / 100,
                h = !1,
                p = {
                  action: 'dividing',
                  from: {},
                  to: {},
                },
                f =
                  0 === Object.keys(this.listOfActions).length
                    ? 0
                    : Math.max.apply(
                        Math,
                        Object(tt['a'])(Object.keys(this.listOfActions))
                      ) + 1
              if (((p.from[e] = {}), this.justEditedBox.hasOwnProperty(e))) {
                var v = JSON.parse(JSON.stringify(this.justEditedBox[e]))
                v.colors.length ? (p.from[e] = v) : (p.from[e] = {})
              } else if (
                this.allCellDataFromServer.hasOwnProperty(e) &&
                this.allCellDataFromServer[e][this.currentSelectedFiltersId]
              ) {
                var b = JSON.parse(
                  JSON.stringify(
                    this.allCellDataFromServer[e][this.currentSelectedFiltersId]
                  )
                )
                b.colors.length ? (p.from[e] = b) : (p.from[e] = {})
              } else if (this.totalBoxesColored.hasOwnProperty(e)) {
                var m = JSON.parse(JSON.stringify(this.totalBoxesColored[e]))
                m.colors.length ? (p.from[e] = m) : (p.from[e] = {})
              }
              if (!a.children.namedItem('colorChild-1') && c) {
                var g = a.children.namedItem('colorChild-0'),
                  S = g ? this.rgbToHex(g.style.backgroundColor) : ''
                a.removeChild(g),
                  this.updateColorOnlyData(S, e, 0),
                  this.createChildElement(a, e, 50, 1, c[0].name || c[0]),
                  this.colorOnlyData.hasOwnProperty(c[0].name || c[0]) ||
                    ((this.colorOnlyData[c[0].name || c[0]] = {}),
                    (this.colorOnlyData[c[0].name || c[0]]['boxes'] = [])),
                  this.updateColorOnlyData(c[0].name || c[0], e, 50),
                  this.createChildElement(a, e, 50, 2, this.selectedColor),
                  this.colorOnlyData.hasOwnProperty(this.selectedColor) ||
                    ((this.colorOnlyData[this.selectedColor] = {}),
                    (this.colorOnlyData[this.selectedColor]['boxes'] = [])),
                  this.updateColorOnlyData(this.selectedColor, e, 50),
                  this.fillComplete('dividing')
              } else {
                var C = !0,
                  k = !1,
                  F = void 0
                try {
                  for (
                    var y, _ = a.children[Symbol.iterator]();
                    !(C = (y = _.next()).done);
                    C = !0
                  ) {
                    var w = y.value
                    if ('p' === w.tagName || 'P' === w.tagName)
                      if (h) {
                        var O = this.rgbToHex(w.style.backgroundColor)
                        ;(w.style.width = u + 'px'),
                          (this.colouredTableData[e].colorPercentage[O] = 50),
                          this.totalBoxesColored.hasOwnProperty(e)
                            ? (this.totalBoxesColored[e].colorPercentage[
                                O
                              ] = 50)
                            : this.justEditedBox.hasOwnProperty(e) &&
                              (this.justEditedBox[e].colorPercentage[O] = 50),
                          this.updateColorOnlyData(O, e, 50)
                      } else {
                        var I = this.rgbToHex(w.style.backgroundColor)
                        ;(w.style.width = d + 'px'),
                          (this.colouredTableData[e].colorPercentage[I] = 50),
                          this.totalBoxesColored.hasOwnProperty(e)
                            ? (this.totalBoxesColored[e].colorPercentage[
                                I
                              ] = 50)
                            : this.justEditedBox.hasOwnProperty(e) &&
                              (this.justEditedBox[e].colorPercentage[I] = 50),
                          this.updateColorOnlyData(I, e, 50),
                          (h = !0)
                      }
                  }
                } catch (Jt) {
                  ;(k = !0), (F = Jt)
                } finally {
                  try {
                    C || null == _.return || _.return()
                  } finally {
                    if (k) throw F
                  }
                }
                this.justEditedBox.hasOwnProperty(e)
                  ? (p.to[e] = JSON.parse(
                      JSON.stringify(this.justEditedBox[e])
                    ))
                  : this.totalBoxesColored.hasOwnProperty(e) &&
                    (p.to[e] = JSON.parse(
                      JSON.stringify(this.totalBoxesColored[e])
                    )),
                  this.undoAction || this.$set(this.listOfActions, f, p)
              }
            } else if (33 == t) {
              var x = (32 * o) / 100,
                D = (66 * o) / 100,
                L = !1,
                q = {
                  action: 'dividing',
                  from: {},
                  to: {},
                },
                P =
                  0 === Object.keys(this.listOfActions).length
                    ? 0
                    : Math.max.apply(
                        Math,
                        Object(tt['a'])(Object.keys(this.listOfActions))
                      ) + 1
              if (((q.from[e] = {}), this.justEditedBox.hasOwnProperty(e))) {
                var T = JSON.parse(JSON.stringify(this.justEditedBox[e]))
                T.colors.length ? (q.from[e] = T) : (q.from[e] = {})
              } else if (
                this.allCellDataFromServer.hasOwnProperty(e) &&
                this.allCellDataFromServer[e][this.currentSelectedFiltersId]
              ) {
                var B = JSON.parse(
                  JSON.stringify(
                    this.allCellDataFromServer[e][this.currentSelectedFiltersId]
                  )
                )
                B.colors.length ? (q.from[e] = B) : (q.from[e] = {})
              } else if (this.totalBoxesColored.hasOwnProperty(e)) {
                var N = JSON.parse(JSON.stringify(this.totalBoxesColored[e]))
                N.colors.length ? (q.from[e] = N) : (q.from[e] = {})
              }
              if (!a.children.namedItem('colorChild-1') && c) {
                var A = a.children.namedItem('colorChild-0'),
                  E = A ? this.rgbToHex(A.style.backgroundColor) : ''
                a.removeChild(A),
                  this.updateColorOnlyData(E, e, 0),
                  this.createChildElement(a, e, 33, 1, c[0].name || c[0]),
                  this.colorOnlyData.hasOwnProperty(c[0].name || c[0]) ||
                    ((this.colorOnlyData[c[0].name || c[0]] = {}),
                    (this.colorOnlyData[c[0].name || c[0]]['boxes'] = [])),
                  this.updateColorOnlyData(c[0].name || c[0], e, 33),
                  this.createChildElement(a, e, 66, 2, this.selectedColor),
                  this.colorOnlyData.hasOwnProperty(this.selectedColor) ||
                    ((this.colorOnlyData[this.selectedColor] = {}),
                    (this.colorOnlyData[this.selectedColor]['boxes'] = [])),
                  this.updateColorOnlyData(this.selectedColor, e, 66),
                  this.fillComplete('dividing')
              } else {
                var j = !0,
                  R = !1,
                  V = void 0
                try {
                  for (
                    var U, J = a.children[Symbol.iterator]();
                    !(j = (U = J.next()).done);
                    j = !0
                  ) {
                    var H = U.value
                    if ('p' === H.tagName || 'P' === H.tagName)
                      if (L) {
                        var $ = this.rgbToHex(H.style.backgroundColor)
                        ;(H.style.width = D + 'px'),
                          (this.colouredTableData[e].colorPercentage[$] = 66),
                          this.totalBoxesColored.hasOwnProperty(e)
                            ? (this.totalBoxesColored[e].colorPercentage[
                                $
                              ] = 66)
                            : this.justEditedBox.hasOwnProperty(e) &&
                              (this.justEditedBox[e].colorPercentage[$] = 66),
                          this.updateColorOnlyData($, e, 66)
                      } else {
                        var M = this.rgbToHex(H.style.backgroundColor)
                        ;(H.style.width = x + 'px'),
                          (this.colouredTableData[e].colorPercentage[M] = 33),
                          this.totalBoxesColored.hasOwnProperty(e)
                            ? (this.totalBoxesColored[e].colorPercentage[
                                M
                              ] = 33)
                            : this.justEditedBox.hasOwnProperty(e) &&
                              (this.justEditedBox[e].colorPercentage[M] = 33),
                          this.updateColorOnlyData(M, e, 33),
                          (L = !0)
                      }
                  }
                } catch (Jt) {
                  ;(R = !0), (V = Jt)
                } finally {
                  try {
                    j || null == J.return || J.return()
                  } finally {
                    if (R) throw V
                  }
                }
                this.justEditedBox.hasOwnProperty(e)
                  ? (q.to[e] = JSON.parse(
                      JSON.stringify(this.justEditedBox[e])
                    ))
                  : this.totalBoxesColored.hasOwnProperty(e) &&
                    (q.to[e] = JSON.parse(
                      JSON.stringify(this.totalBoxesColored[e])
                    )),
                  this.undoAction || this.$set(this.listOfActions, P, q)
              }
            } else if (66 == t) {
              var K = (66 * o) / 100,
                W = (32 * o) / 100,
                G = !1,
                Q = {
                  action: 'dividing',
                  from: {},
                  to: {},
                },
                z =
                  0 === Object.keys(this.listOfActions).length
                    ? 0
                    : Math.max.apply(
                        Math,
                        Object(tt['a'])(Object.keys(this.listOfActions))
                      ) + 1
              if (((Q.from[e] = {}), this.justEditedBox.hasOwnProperty(e))) {
                var Y = JSON.parse(JSON.stringify(this.justEditedBox[e]))
                Y.colors.length ? (Q.from[e] = Y) : (Q.from[e] = {})
              } else if (
                this.allCellDataFromServer.hasOwnProperty(e) &&
                this.allCellDataFromServer[e][this.currentSelectedFiltersId]
              ) {
                var X = JSON.parse(
                  JSON.stringify(
                    this.allCellDataFromServer[e][this.currentSelectedFiltersId]
                  )
                )
                X.colors.length ? (Q.from[e] = X) : (Q.from[e] = {})
              } else if (this.totalBoxesColored.hasOwnProperty(e)) {
                var Z = JSON.parse(JSON.stringify(this.totalBoxesColored[e]))
                Z.colors.length ? (Q.from[e] = Z) : (Q.from[e] = {})
              }
              if (!a.children.namedItem('colorChild-1') && c) {
                var et = a.children.namedItem('colorChild-0'),
                  it = et ? this.rgbToHex(et.style.backgroundColor) : ''
                a.removeChild(et),
                  this.updateColorOnlyData(it, e, 0),
                  this.createChildElement(a, e, 66, 1, c[0].name || c[0]),
                  this.colorOnlyData.hasOwnProperty(c[0].name || c[0]) ||
                    ((this.colorOnlyData[c[0].name || c[0]] = {}),
                    (this.colorOnlyData[c[0].name || c[0]]['boxes'] = [])),
                  this.updateColorOnlyData(c[0].name || c[0], e, 66),
                  this.createChildElement(a, e, 33, 2, this.selectedColor),
                  this.colorOnlyData.hasOwnProperty(this.selectedColor) ||
                    ((this.colorOnlyData[this.selectedColor] = {}),
                    (this.colorOnlyData[this.selectedColor]['boxes'] = [])),
                  this.updateColorOnlyData(this.selectedColor, e, 33),
                  this.fillComplete('dividing')
              } else {
                var st = !0,
                  at = !1,
                  ot = void 0
                try {
                  for (
                    var nt, lt = a.children[Symbol.iterator]();
                    !(st = (nt = lt.next()).done);
                    st = !0
                  ) {
                    var rt = nt.value
                    if ('p' === rt.tagName || 'P' === rt.tagName)
                      if (G) {
                        var ct = this.rgbToHex(rt.style.backgroundColor)
                        ;(rt.style.width = W + 'px'),
                          (this.colouredTableData[e].colorPercentage[ct] = 33),
                          this.totalBoxesColored.hasOwnProperty(e)
                            ? (this.totalBoxesColored[e].colorPercentage[
                                ct
                              ] = 33)
                            : this.justEditedBox.hasOwnProperty(e) &&
                              (this.justEditedBox[e].colorPercentage[ct] = 33),
                          this.updateColorOnlyData(ct, e, 33)
                      } else {
                        var dt = this.rgbToHex(rt.style.backgroundColor)
                        ;(rt.style.width = K + 'px'),
                          (this.colouredTableData[e].colorPercentage[dt] = 66),
                          this.totalBoxesColored.hasOwnProperty(e)
                            ? (this.totalBoxesColored[e].colorPercentage[
                                dt
                              ] = 66)
                            : this.justEditedBox.hasOwnProperty(e) &&
                              (this.justEditedBox[e].colorPercentage[dt] = 66),
                          this.updateColorOnlyData(dt, e, 66),
                          (G = !0)
                      }
                  }
                } catch (Jt) {
                  ;(at = !0), (ot = Jt)
                } finally {
                  try {
                    st || null == lt.return || lt.return()
                  } finally {
                    if (at) throw ot
                  }
                }
                this.justEditedBox.hasOwnProperty(e)
                  ? (Q.to[e] = JSON.parse(
                      JSON.stringify(this.justEditedBox[e])
                    ))
                  : this.totalBoxesColored.hasOwnProperty(e) &&
                    (Q.to[e] = JSON.parse(
                      JSON.stringify(this.totalBoxesColored[e])
                    )),
                  this.undoAction || this.$set(this.listOfActions, z, Q)
              }
            } else if (100 == t) {
              var ut = (49 * o) / 100,
                ht = '',
                pt = !1,
                ft = {
                  action: 'dividing',
                  from: {},
                  to: {},
                },
                vt =
                  0 === Object.keys(this.listOfActions).length
                    ? 0
                    : Math.max.apply(
                        Math,
                        Object(tt['a'])(Object.keys(this.listOfActions))
                      ) + 1
              if (((ft.from[e] = {}), this.justEditedBox.hasOwnProperty(e))) {
                var bt = JSON.parse(JSON.stringify(this.justEditedBox[e]))
                bt.colors.length ? (ft.from[e] = bt) : (ft.from[e] = {})
              } else if (
                this.allCellDataFromServer.hasOwnProperty(e) &&
                this.allCellDataFromServer[e][this.currentSelectedFiltersId]
              ) {
                var mt = JSON.parse(
                  JSON.stringify(
                    this.allCellDataFromServer[e][this.currentSelectedFiltersId]
                  )
                )
                mt.colors.length ? (ft.from[e] = mt) : (ft.from[e] = {})
              } else if (this.totalBoxesColored.hasOwnProperty(e)) {
                var gt = JSON.parse(JSON.stringify(this.totalBoxesColored[e]))
                gt.colors.length ? (ft.from[e] = gt) : (ft.from[e] = {})
              }
              var St = !0,
                Ct = !1,
                kt = void 0
              try {
                for (
                  var Ft, yt = a.children[Symbol.iterator]();
                  !(St = (Ft = yt.next()).done);
                  St = !0
                ) {
                  var _t = Ft.value
                  if ('p' === _t.tagName || 'P' === _t.tagName)
                    if (pt)
                      (function () {
                        ht = _t
                        var t = i.rgbToHex(_t.style.backgroundColor)
                        delete i.colouredTableData[e].colorPercentage[t],
                          (i.colouredTableData[e].colors = i.colouredTableData[
                            e
                          ].colors.filter(function (e) {
                            return (e.name || e) !== t
                          })),
                          i.updateColorOnlyData(t, e, 0),
                          i.totalBoxesColored.hasOwnProperty(e)
                            ? (delete i.totalBoxesColored[e].colorPercentage[t],
                              (i.totalBoxesColored[
                                e
                              ].colors = i.totalBoxesColored[e].colors.filter(
                                function (e) {
                                  return (e.name || e) !== t
                                }
                              )))
                            : i.justEditedBox.hasOwnProperty(e) &&
                              (delete i.justEditedBox[e].colorPercentage[t],
                              (i.justEditedBox[e].colors = i.justEditedBox[
                                e
                              ].colors.filter(function (e) {
                                return (e.name || e) !== t
                              })))
                      })()
                    else {
                      var wt = this.rgbToHex(_t.style.backgroundColor)
                      ;(_t.style.width = ut + 'px'),
                        (a.style.backgroundColor = wt),
                        (this.colouredTableData[e].colorPercentage[wt] = 100),
                        this.totalBoxesColored.hasOwnProperty(e)
                          ? (this.totalBoxesColored[e].colorPercentage[
                              wt
                            ] = 100)
                          : this.justEditedBox.hasOwnProperty(e) &&
                            (this.justEditedBox[e].colorPercentage[wt] = 100),
                        this.updateColorOnlyData(wt, e, 100),
                        (pt = !0)
                    }
                }
              } catch (Jt) {
                ;(Ct = !0), (kt = Jt)
              } finally {
                try {
                  St || null == yt.return || yt.return()
                } finally {
                  if (Ct) throw kt
                }
              }
              ht && a.removeChild(ht),
                this.justEditedBox.hasOwnProperty(e)
                  ? (ft.to[e] = JSON.parse(
                      JSON.stringify(this.justEditedBox[e])
                    ))
                  : this.totalBoxesColored.hasOwnProperty(e) &&
                    (ft.to[e] = JSON.parse(
                      JSON.stringify(this.totalBoxesColored[e])
                    )),
                this.undoAction || this.$set(this.listOfActions, vt, ft)
            } else if (0 == t) {
              var Ot = '',
                It = '',
                xt = !1,
                Dt = {
                  action: 'dividing',
                  from: {},
                  to: {},
                },
                Lt =
                  0 === Object.keys(this.listOfActions).length
                    ? 0
                    : Math.max.apply(
                        Math,
                        Object(tt['a'])(Object.keys(this.listOfActions))
                      ) + 1
              if (((Dt.from[e] = {}), this.justEditedBox.hasOwnProperty(e))) {
                var qt = JSON.parse(JSON.stringify(this.justEditedBox[e]))
                qt.colors.length ? (Dt.from[e] = qt) : (Dt.from[e] = {})
              } else if (
                this.allCellDataFromServer.hasOwnProperty(e) &&
                this.allCellDataFromServer[e][this.currentSelectedFiltersId]
              ) {
                var Pt = JSON.parse(
                  JSON.stringify(
                    this.allCellDataFromServer[e][this.currentSelectedFiltersId]
                  )
                )
                Pt.colors.length ? (Dt.from[e] = Pt) : (Dt.from[e] = {})
              } else if (this.totalBoxesColored.hasOwnProperty(e)) {
                var Tt = JSON.parse(JSON.stringify(this.totalBoxesColored[e]))
                Tt.colors.length ? (Dt.from[e] = Tt) : (Dt.from[e] = {})
              }
              var Bt = !0,
                Nt = !1,
                At = void 0
              try {
                for (
                  var Et, jt = a.children[Symbol.iterator]();
                  !(Bt = (Et = jt.next()).done);
                  Bt = !0
                ) {
                  var Rt = Et.value
                  if ('p' === Rt.tagName || 'P' === Rt.tagName)
                    if (xt) {
                      It = Rt
                      var Vt = this.rgbToHex(Rt.style.backgroundColor)
                      this.updateColorOnlyData(Vt, e, 0)
                    } else {
                      Ot = Rt
                      var Ut = this.rgbToHex(Rt.style.backgroundColor)
                      this.updateColorOnlyData(Ut, e, 0), (xt = !0)
                    }
                }
              } catch (Jt) {
                ;(Nt = !0), (At = Jt)
              } finally {
                try {
                  Bt || null == jt.return || jt.return()
                } finally {
                  if (Nt) throw At
                }
              }
              this.totalBoxesColored.hasOwnProperty(e)
                ? ((this.totalBoxesColored[e].colors = []),
                  (this.totalBoxesColored[e].colorPercentage = {}))
                : this.justEditedBox.hasOwnProperty(e) &&
                  ((this.justEditedBox[e].colors = []),
                  (this.justEditedBox[e].colorPercentage = {})),
                (Dt.to[e] = {}),
                this.mouseDown || this.controlDeleting
                  ? ((this.phaseDeleting['action'] = 'dividing'),
                    this.phaseDeleting.hasOwnProperty('from') ||
                      (this.phaseDeleting['from'] = {}),
                    this.phaseDeleting.hasOwnProperty('to') ||
                      (this.phaseDeleting['to'] = {}),
                    this.phaseDeleting['from'].hasOwnProperty(e) ||
                      (this.phaseDeleting['from'][e] = Dt.from[e]),
                    this.phaseDeleting['to'].hasOwnProperty(e) ||
                      (this.phaseDeleting['to'][e] = Dt.to[e]))
                  : (this.lastErased = Dt),
                this.mouseDown ||
                  this.controlDeleting ||
                  this.undoAction ||
                  this.$set(this.listOfActions, Lt, this.lastErased),
                (this.colouredTableData[e].colors = []),
                (this.colouredTableData[e].colorPercentage = {}),
                Ot && a.removeChild(Ot),
                It && a.removeChild(It)
            }
          },
          keepInFocus: function () {
            document.querySelector('#box0_0').focus()
          },
          controlEraser: function (t, e) {
            ;('e' !== t.key && 69 !== t.keyCode) ||
              ('enable' === e
                ? ((this.eraserSelected = !0), (this.eraserEnabled = !0))
                : 'disable' === e &&
                  ((this.eraserSelected = !1),
                  (this.eraserEnabled = !1),
                  this.fillComplete()))
          },
          mouseDownFn: function (t, e) {
            ;(this.selectedColor.length || this.eraserSelected) &&
              this.allFilterSelected() &&
              0 === t.button &&
              (this.clickToFill(t, e), (this.mouseDown = !0))
          },
          mouseDrag: function (t, e) {
            this.mouseDown && this.clickToFill(t, e)
          },
          showPartitioningDiv: function (t, e) {
            if (
              (t.stopPropagation(),
              t.preventDefault(),
              !this.eraserSelected &&
                (t.target.style.backgroundColor ||
                  this.$refs[e][0].children.namedItem('colorChild-0')))
            ) {
              var i = document.createElement('div'),
                s = 0,
                a = document.createElement('div')
              a.setAttribute('id', 'partitioningBlock'),
                (a.style.top = '-45px'),
                (a.style.zIndex = '10'),
                (a.style.left = '-63px'),
                (a.style.position = 'absolute')
              var o = this.rgbToHex(
                  this.$refs[e][0].children.namedItem('colorChild-0').style
                    .backgroundColor
                ),
                n = this.colouredTableData[e].colorPercentage[o],
                l = !0,
                r = !1,
                c = void 0
              try {
                for (
                  var d, u = this.partitioningCriteria[Symbol.iterator]();
                  !(l = (d = u.next()).done);
                  l = !0
                ) {
                  var h = d.value
                  if (h.value != n) {
                    var p = this.createButton(e, h.text, h.value)
                    i.appendChild(p), s++
                  }
                }
              } catch (v) {
                ;(r = !0), (c = v)
              } finally {
                try {
                  l || null == u.return || u.return()
                } finally {
                  if (r) throw c
                }
              }
              3 === s
                ? ((a.style.left = '-44px'), i.classList.add('partition-3'))
                : 4 === s && i.classList.add('partition-4'),
                a.appendChild(i)
              var f = document.querySelector('#partitioningBlock')
              this.$refs[e][0].contains(f) || this.$refs[e][0].appendChild(a)
            }
          },
          clickToFill: function (t, e) {
            var i = this.$refs[e][0]
            if (
              (t instanceof Event &&
                t.target.id === e &&
                this.allFilterSelected()) ||
              this.pastingTable
            )
              if (this.eraserSelected)
                this.colouredTableData[e].colors.length &&
                  (this.totalBoxesColored &&
                    (this.totalBoxesColored[e] = {
                      colors: [],
                      colorPercentage: {},
                    }),
                  this.divideIt(0, e))
              else {
                var s = i.children.namedItem('colorChild-0'),
                  a = s ? this.rgbToHex(s.style.backgroundColor) : ''
                if (
                  1 === this.colouredTableData[e].colors.length &&
                  this.selectedColor.length &&
                  this.selectedColor !==
                    this.rgbToHex(
                      i.children.namedItem('colorChild-0').style.backgroundColor
                    )
                )
                  (this.previousSelectedColor = a),
                    (i.style.backgroundColor = this.selectedColor),
                    i.removeChild(s),
                    this.updateColorOnlyData(this.previousSelectedColor, e, 0),
                    (this.colouredTableData[e].colors = []),
                    (this.colouredTableData[e].colorPercentage = {}),
                    this.createChildElement(i, e, 100, 2),
                    this.updateColorOnlyData(this.selectedColor, e, 100)
                else if (
                  this.selectedColor.length &&
                  this.selectedColor !== i.style.backgroundColor &&
                  1 === i.children.length
                ) {
                  ;(i.style.backgroundColor = this.selectedColor),
                    this.createChildElement(i, e, 100, 1)
                  var o =
                    this.selectedColor.length > 7
                      ? this.selectedColor.substring(0, 7).toLowerCase()
                      : this.selectedColor
                  this.colorOnlyData.hasOwnProperty(o) ||
                    ((this.colorOnlyData[o] = {}),
                    (this.colorOnlyData[o]['boxes'] = [])),
                    this.updateColorOnlyData(this.selectedColor, e, 100)
                } else
                  this.selectedColor.length &&
                    2 === this.colouredTableData[e].colors.length &&
                    !this.colouredTableData[e].colorPercentage[
                      this.selectedColor
                    ] &&
                    ((this.previousSelectedColor = this.selectedColor),
                    (i.style.backgroundColor = this.selectedColor),
                    i.removeChild(s),
                    i.removeChild(i.children.namedItem('colorChild-1')),
                    this.updateColorOnlyData(this.previousSelectedColor, e, 0),
                    (this.colouredTableData[e].colors = []),
                    (this.colouredTableData[e].colorPercentage = {}),
                    this.createChildElement(i, e, 100, 2),
                    this.updateColorOnlyData(this.selectedColor, e, 100))
              }
          },
          createChildElement: function (t, e, i, s) {
            var a =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : this.selectedColor
            a = a.length > 7 ? a.substring(0, 7).toLowerCase() : a
            var o = t.style.width.split(
                t.style.width.slice(t.style.width.length - 2)
              )[0],
              n = document.createElement('p')
            ;(n.id = 'colorChild-' + (t.children.length - 1)),
              50 === i || 100 === i
                ? (n.style.width = (49 * o) / 100 + 'px')
                : 33 === i
                ? (n.style.width = (32 * o) / 100 + 'px')
                : 66 === i && (n.style.width = (66 * o) / 100 + 'px'),
              (n.style.height = t.style.height),
              (n.style.margin = '0px'),
              (n.style.display = 'inline-block'),
              (n.style.backgroundColor = a),
              (n.style.pointerEvents = 'none'),
              t.children.length - 1 == 1 && (n.style.position = 'absolute'),
              t.appendChild(n),
              -1 ===
                this.colouredTableData[e]['colors'].findIndex(function (t) {
                  return t.name === a
                }) &&
                this.colouredTableData[e]['colors'].push({
                  name: a,
                  place: s,
                }),
              (this.colouredTableData[e]['colorPercentage'][a] = i),
              this.preFilling || this.undoAction
                ? (this.justEditedBox[e] = JSON.parse(
                    JSON.stringify(this.colouredTableData[e])
                  ))
                : (this.phaseColoring[e] = JSON.parse(
                    JSON.stringify(this.colouredTableData[e])
                  ))
          },
          updateColorOnlyData: function (t, e, i) {
            ;(t = t.length > 7 ? t.substring(0, 7).toLowerCase() : t),
              this.colorOnlyData.hasOwnProperty(t) ||
                (this.colorOnlyData[t] = {}),
              this.colorOnlyData[t].hasOwnProperty('boxes') ||
                (this.colorOnlyData[t]['boxes'] = [])
            var s = this.colorOnlyData[t]['boxes'].findIndex(function (t) {
              return t.boxId === e
            })
            ;-1 !== s && 0 != i
              ? (this.colorOnlyData[t]['boxes'][s].width = i)
              : 0 == i
              ? this.colorOnlyData[t]['boxes'].splice(s, 1)
              : (this.colorOnlyData[t]['boxes'].push({
                  boxId: e,
                  width: i,
                }),
                (this[''.concat(t, 'Combos')] = 0),
                this.colorName.hasOwnProperty(''.concat(t, '_name')) ||
                  (this.colorName[''.concat(t, '_name')] = ''),
                this.allColorCombos.hasOwnProperty(t) ||
                  (this.allColorCombos[t] = this[''.concat(t, 'Combos')]),
                -1 === this.colors.indexOf(t) && this.colors.push(t)),
              (this.colorOnlyDataString =
                JSON.stringify(this.colorOnlyData) + new Date().getTime())
          },
          getFilters: function () {
            var t = this
            I['a']
              .get('filter')
              .then(function (e) {
                if (200 === e.status && e.data.success) {
                  var i = e.data.result.data
                  for (var s in (t.setFilterTitles(
                    e.data.result.titlesAndHelperTexts
                  ),
                  (t.defaultStackValueMap =
                    e.data.result.defaultStackValues || {}),
                  i)) {
                    if ('game' === s) {
                      var a = i[s].filter(function (t) {
                        return t.hasOwnProperty('position')
                      })
                      t[s + 'List'] = a.sort(function (t, e) {
                        return t.position - e.position
                      })
                    } else t[s + 'List'] = i[s]
                    ;(t.fetchRequestFlag.filter = !0), t.checkLocalStorage()
                  }
                }
              })
              .catch(function () {
                t.snackBarFunction('Error while fetching filters')
              })
          },
          getComments: function (t) {
            var e = this
            I['a']
              .get('comment')
              .then(function (i) {
                if (200 === i.status && i.data.success) {
                  var s = i.data.result.data
                  ;(e.commentsList = s),
                    t ||
                      ((e.fetchRequestFlag.comment = !0), e.checkLocalStorage())
                }
              })
              .catch(function () {
                e.snackBarFunction('Error while fetching comments')
              })
          },
          getCasinos: function (t) {
            var e = this
            I['a']
              .get('casino')
              .then(function (i) {
                if (200 === i.status && i.data.success) {
                  var s = i.data.result.data
                  ;(e.casinoDetailList = s),
                    t ||
                      ((e.fetchRequestFlag.casino = !0), e.checkLocalStorage())
                }
              })
              .catch(function () {
                e.snackBarFunction('Error while fetching casino data')
              })
          },
          getTable: function () {
            var t = this
            I['a']
              .get('table')
              .then(function (e) {
                200 === e.status &&
                  e.data.success &&
                  ((t.allCellDataFromServer = e.data.result.data),
                  t.startedSaving ||
                    t.startedSavingFontColor ||
                    ((t.fetchRequestFlag.table = !0), t.checkLocalStorage()),
                  (t.startedSaving = !1),
                  (t.startedSavingFontColor = !1))
              })
              .catch(function () {
                t.snackBarFunction('Error while fetching table data')
              })
          },
          getStarColor: function () {
            var t = this
            I['a']
              .get('starredColor')
              .then(function (e) {
                if (200 === e.status && e.data.success) {
                  var i = e.data.result.data
                  if (i && i.colors) {
                    var s = i.colors
                    s['length'] = Object.keys(i.colors).length
                    var a = Array.from(s)
                    t.$set(t.swatches, 0, a)
                  } else t.$set(t.swatches, 0, [])
                }
              })
              .catch(function () {
                t.snackBarFunction('Error while starred color')
              })
          },
          checkLocalStorage: function () {
            var t = this,
              e = this.fetchRequestFlag,
              i = e.filter,
              s = e.table,
              a = e.comment,
              o = e.casino
            if (i && s && a && o) {
              var n = localStorage.getItem(this.localStorageKey)
              try {
                if (((n = JSON.parse(n)), n)) {
                  var l = F(this.gameList, n.game)
                  if (!l || !l.id) throw 'e'
                  this.selectGame(l)
                  var r = F(this.casinoList[l.id], n.casino)
                  if (!r || !r.id) throw 'e'
                  this.selectCasino(r)
                  var c = F(this.stakeList[r.id], n.stake)
                  if (!c || !c.id) throw 'e'
                  this.selectStake(c)
                  var d = F(this.playersList[c.id], n.player)
                  if (!d || !d.id) throw 'e'
                  var u = F(this.sequenceList[d.id], n.sequence)
                  if (!u || !u.id) throw 'e'
                  var h,
                    p,
                    f,
                    v,
                    b,
                    m = {
                      sequence: u,
                    }
                  if (
                    (n.subSequence &&
                      ((h = F(this.subSequenceList[u.id], n.subSequence)),
                      h && h.id && (m.subSequence = h)),
                    n.position)
                  ) {
                    var g = h ? h.id : u.id
                    ;(p = F(this.positionList[g], n.position)),
                      p && p.id && (m.position = p)
                  }
                  if (n.sub2Filter) {
                    var S = p.id
                    ;(f = F(this.sub2FilterList[S], n.sub2Filter)),
                      f && f.id && (m.sub2Filter = f)
                  }
                  if (n.reaction) {
                    var C = f ? f.id : p.id
                    ;(v = F(this.reactionList[C], n.reaction)),
                      v && v.id && (m.reaction = v)
                  }
                  if (n.stack) {
                    var k = v ? v.id : p.id
                    ;(b = F(this.stackList[k], n.stack)),
                      b && b.id && (m.stack = b)
                  }
                  this.selectPlayers(d, m, n)
                }
                this.checkingLocalStorage = !1
              } catch (y) {
                this.checkingLocalStorage = !1
              }
              setTimeout(function () {
                t.showLoader = !1
              }, 0)
            }
            function F(t, e) {
              return t
                ? t.find(function (t) {
                    return t.value == e
                  })
                : null
            }
          },
          addLocalStorageChangeEventListener: function () {
            var t = this
            window.onstorage = function () {
              t.tableCopied = !1
              var e = JSON.parse(localStorage.getItem('tableData'))
              e && (t.tableCopied = !0)
            }
          },
          updateLocalStorage: function () {
            this.checkingLocalStorage ||
              localStorage.setItem(
                this.localStorageKey,
                JSON.stringify(this.filters)
              )
          },
          clearLocalStorage: function () {
            localStorage.removeItem(this.localStorageKey)
          },
          updateStarColor: function (t, e) {
            var i = this
            I['a']
              .post('starredColor', {
                data: {
                  action: t,
                  color: e,
                },
              })
              .then(function (t) {
                200 === t.status && t.data.success && i.getStarColor()
              })
              .catch(function () {
                i.snackBarFunction('Error while updating starred color')
              })
          },
          save: function () {
            var t = this
            this.startedSaving = !0
            var e = Object.keys(this.filters).sort(),
              i = '',
              s = this.defaultStackChildSelectedHelper()
            e.forEach(function (e) {
              i += 'stackChild' === e && s ? '' : t.filters[e]
            })
            var a = {}
            for (var o in this.totalBoxesColored)
              this.totalBoxesColored[o].hasOwnProperty('colorPercentage') &&
              Object.keys(this.totalBoxesColored[o].colorPercentage).length &&
              this.totalBoxesColored[o].hasOwnProperty('colors') &&
              this.totalBoxesColored[o].colors.length &&
              !a.hasOwnProperty(o)
                ? ((a[o] = {}), (a[o] = this.totalBoxesColored[o]))
                : (a[o] = this.totalBoxesColored[o])
            var n = bt(
                {},
                JSON.parse(JSON.stringify(this.justEditedBox)),
                {},
                JSON.parse(JSON.stringify(a))
              ),
              l = Math.abs(this.hashCode(i))
            for (var r in n)
              (n[r] = Object(L['a'])({}, l, n[r])),
                n[r].hasOwnProperty('filters') || (n[r]['filters'] = []),
                n[r].hasOwnProperty('filters') &&
                  !n[r].filters.includes(l) &&
                  n[r].filters.push(l)
            for (var c in ((n = a), n)) {
              var d
              n[c] =
                ((d = {}),
                Object(L['a'])(d, l, n[c]),
                Object(L['a'])(d, 'filters', [l]),
                d)
            }
            if (((n['colorData'] = {}), this.isPasted)) {
              for (var u = [], h = 0; h < this.rows; h++)
                for (var p = 0; p < this.columns; p++)
                  u.push('box'.concat(h, '_').concat(p))
              for (var f = 0; f < u.length; f++) {
                var v
                if (!n[u[f]])
                  n[u[f]] =
                    ((v = {}),
                    Object(L['a'])(v, l, {
                      colors: [],
                      colorPercentage: {},
                    }),
                    Object(L['a'])(v, 'filters', [l]),
                    v)
              }
              this.isPasted = !1
            }
            var b = {}
            for (var m in this.colorOnlyData)
              b.hasOwnProperty(m) || (b[m] = {}),
                (b[m]['name'] = this.colorOnlyData[m]['name']
                  ? this.colorOnlyData[m]['name']
                  : ''),
                this.colorOnlyData[m] &&
                  this.colorOnlyData[m]['fontColor'] &&
                  (b[m]['fontColor'] = this.colorOnlyData[m]['fontColor'])
            n['colorData'][l] = bt({}, b, {
              sequenceOfColor: this.colorInSequence,
            })
            var g = {
              data: n,
            }
            I['a']
              .post('table', bt({}, g))
              .then(function (e) {
                ;(t.savingResult = e),
                  200 === e.status &&
                    e.data.success &&
                    ((t.colorLabelChanged = !1),
                    (t.listOfActions = {}),
                    (t.tableCopied = !1),
                    localStorage.removeItem('tableData'),
                    (t.startedSaving = !1),
                    (t.startedSavingFontColor = !1),
                    (t.isPasted = !1),
                    t.updateAllCellDataFromServer(n, l))
              })
              .catch(function () {
                ;(t.startedSaving = !1),
                  (t.startedSavingFontColor = !1),
                  t.snackBarFunction('Error while saving table data')
              })
          },
          updateAllCellDataFromServer: function (t, e) {
            if (t)
              for (var i in t)
                (t[i][e] && t[i][e].colors && t[i][e].colors.length) ||
                'colorData' === i
                  ? this.$set(
                      this.allCellDataFromServer[i],
                      e,
                      JSON.parse(JSON.stringify(t[i][e]))
                    )
                  : delete this.allCellDataFromServer[i][e]
          },
          saveComment: function () {
            var t = this,
              e = {}
            ;(e[this.currentSelectedFiltersId] = {}),
              (e[this.currentSelectedFiltersId]['detail'] = this.currentComment)
            var i = {
              data: e,
            }
            I['a']
              .post('comment', bt({}, i))
              .then(function (e) {
                ;(t.savingResult = e),
                  200 === e.status && e.data.success && t.getComments(!0)
              })
              .catch(function () {
                t.snackBarFunction('Error while saving comment')
              })
          },
          saveCasino: function () {
            var t = this,
              e = {}
            ;(e[this.casinoId] = {}),
              (e[this.casinoId]['name'] = this.casinoSelected),
              (e[this.casinoId]['detail'] = this.currentCasinoDetail)
            var i = {
              data: e,
            }
            I['a']
              .post('casino', bt({}, i))
              .then(function (e) {
                ;(t.savingResult = e),
                  200 === e.status && e.data.success && t.getCasinos(!0)
              })
              .catch(function () {
                t.snackBarFunction("Error while saving casino's data")
              })
          },
          defaultStackChildSelectedHelper: function () {
            var t,
              e = this
            if (
              this.stackId &&
              this.stackChildId &&
              this.stackChildList[this.stackId]
            ) {
              var i = this.stackChildList[this.stackId]
              ;(t = i.find(function (t) {
                return t.id === e.stackChildId
              })),
                t && (t = t.isDefault)
            }
            return t
          },
          showFilteredData: function () {
            var t = this
            ;(this.preFilling = !0),
              (this.onlyFilteredCell = {}),
              this.clearFilledTable()
            var e = Object.keys(this.filters).sort(),
              i = '',
              s = this.defaultStackChildSelectedHelper()
            e.forEach(function (e) {
              i += 'stackChild' === e && s ? '' : t.filters[e]
            })
            var a = Math.abs(this.hashCode(i))
            for (var o in ((this.currentSelectedFiltersId = a),
            this.allCellDataFromServer))
              this.allCellDataFromServer[o][a] &&
                ((this.onlyFilteredCell[o] = JSON.parse(
                  JSON.stringify(this.allCellDataFromServer[o][a])
                )),
                (this.colouredTableData[o] = {}),
                (this.colouredTableData[o]['colors'] = []),
                (this.colouredTableData[o]['colorPercentage'] = {}))
            if (
              (this.showExistingComment(),
              this.resetEditorUndo(),
              Object.keys(this.onlyFilteredCell).length)
            )
              for (var n in this.onlyFilteredCell)
                if ('colorData' != n) {
                  var l = this.$refs[n][0]
                  if (
                    this.onlyFilteredCell[n] &&
                    this.onlyFilteredCell[n]['colors'].length
                  ) {
                    var r = this.onlyFilteredCell[n]['colors'][0].name
                        ? this.onlyFilteredCell[n]['colors'].sort(function (
                            t,
                            e
                          ) {
                            return t.place - e.place
                          })
                        : this.onlyFilteredCell[n]['colors'],
                      c = 1,
                      d = !0,
                      u = !1,
                      h = void 0
                    try {
                      for (
                        var p, f = r[Symbol.iterator]();
                        !(d = (p = f.next()).done);
                        d = !0
                      ) {
                        var v = p.value
                        ;(this.selectedColor = v.name || v),
                          100 ==
                            this.onlyFilteredCell[n]['colorPercentage'][
                              this.selectedColor
                            ] && (l.style.backgroundColor = this.selectedColor),
                          this.createChildElement(
                            l,
                            n,
                            this.onlyFilteredCell[n]['colorPercentage'][
                              this.selectedColor
                            ],
                            c
                          ),
                          this.updateColorOnlyData(
                            this.selectedColor,
                            n,
                            this.onlyFilteredCell[n]['colorPercentage'][
                              this.selectedColor
                            ]
                          ),
                          c++
                      }
                    } catch (m) {
                      ;(u = !0), (h = m)
                    } finally {
                      try {
                        d || null == f.return || f.return()
                      } finally {
                        if (u) throw h
                      }
                    }
                    this.phaseColoring = {}
                  }
                } else if ('colorData' == n)
                  for (var b in this.onlyFilteredCell[n])
                    'sequenceOfColor' !== b
                      ? ((b =
                          b.length > 7 ? b.substring(0, 7).toLowerCase() : b),
                        this.colorName.hasOwnProperty(''.concat(b, '_name')) ||
                          (this.colorName[''.concat(b, '_name')] = ''),
                        (this.colorName[b + '_name'] = this.onlyFilteredCell[n][
                          b
                        ].name),
                        this.colorOnlyData.hasOwnProperty(b) ||
                          (this.colorOnlyData[b] = {}),
                        this.colorOnlyData[b].hasOwnProperty('name') ||
                          (this.colorOnlyData[b]['name'] = ''),
                        this.colorOnlyData[b].hasOwnProperty('fontColor') ||
                          (this.colorOnlyData[b]['fontColor'] = ''),
                        (this.colorOnlyData[b]['name'] = this.onlyFilteredCell[
                          n
                        ][b].name),
                        (this.colorOnlyData[b]['fontColor'] =
                          this.onlyFilteredCell[n][b].fontColor || ''))
                      : ((this.colorInSequence =
                          this.onlyFilteredCell[n]['sequenceOfColor'] || []),
                        this.setFontColorInLabel(this.onlyFilteredCell[n]))
            ;(this.preFilling = !1), (this.previousSelectedColor = '')
          },
          setFontColorInLabel: function (t) {
            this.fontColorInSequence = this.colorInSequence.map(function (e) {
              var i = t[e]
              return i && i.fontColor ? i.fontColor : ''
            })
          },
          fillComplete: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 'coloring',
              e = arguments.length > 1 ? arguments[1] : void 0
            if (
              ((this.mouseDown = !1),
              (this.eraserSelected = this.eraserSelectedThroughBtn
                ? Boolean(!0)
                : Boolean(!1)),
              Object.keys(this.phaseColoring).length)
            ) {
              var i = {
                  action: t,
                  from: {},
                  to: {},
                },
                s =
                  0 === Object.keys(this.listOfActions).length
                    ? 0
                    : Math.max.apply(
                        Math,
                        Object(tt['a'])(Object.keys(this.listOfActions))
                      ) + 1
              for (var a in this.phaseColoring) {
                if (
                  ((i.from[a] = {}), this.totalBoxesColored.hasOwnProperty(a))
                ) {
                  var o = JSON.parse(JSON.stringify(this.totalBoxesColored[a]))
                  o.colors.length ? (i.from[a] = o) : (i.from[a] = {})
                } else if (this.justEditedBox.hasOwnProperty(a)) {
                  var n = JSON.parse(JSON.stringify(this.justEditedBox[a]))
                  n.colors.length ? (i.from[a] = n) : (i.from[a] = {})
                } else if (
                  this.allCellDataFromServer.hasOwnProperty(a) &&
                  this.allCellDataFromServer[a][this.currentSelectedFiltersId]
                ) {
                  var l = JSON.parse(
                    JSON.stringify(
                      this.allCellDataFromServer[a][
                        this.currentSelectedFiltersId
                      ]
                    )
                  )
                  l.colors.length ? (i.from[a] = l) : (i.from[a] = {})
                }
                this.totalBoxesColored.hasOwnProperty(a) ||
                  (this.totalBoxesColored[a] = {}),
                  (this.totalBoxesColored[a] = JSON.parse(
                    JSON.stringify(this.phaseColoring[a])
                  ))
              }
              ;(i.to = this.phaseColoring),
                this.undoAction ||
                  (e && (i.isPasted = !0), this.$set(this.listOfActions, s, i)),
                this.coloring++,
                (this.phaseColoring = {})
            }
            if (Object.keys(this.phaseDeleting).length) {
              var r = ''
              for (var c in this.lastErased.from)
                (r = c),
                  this.phaseDeleting.from.hasOwnProperty(c) ||
                    ((this.phaseDeleting.from[c] = JSON.parse(
                      JSON.stringify(this.lastErased.from[c])
                    )),
                    (this.phaseDeleting.to[c] = JSON.parse(
                      JSON.stringify(this.lastErased.to[c])
                    )))
              var d = Object.keys(this.listOfActions).length
              d > 0 &&
                1 === Object.keys(this.listOfActions[d - 1].from).length &&
                this.listOfActions[d - 1].from.hasOwnProperty(r) &&
                (this.$delete(this.listOfActions, d - 1),
                (this.lastErased = {}),
                (r = ''))
              var u =
                0 === Object.keys(this.listOfActions).length
                  ? 0
                  : Math.max.apply(
                      Math,
                      Object(tt['a'])(Object.keys(this.listOfActions))
                    ) + 1
              this.$set(this.listOfActions, u, this.phaseDeleting),
                (this.phaseDeleting = {})
            }
          },
          removeBubble: function (t) {
            var e = document.querySelector('#partitioningBlock')
            this.$refs[t][0].contains(e) && this.$refs[t][0].removeChild(e)
          },
          selectColor: function (t) {
            this.allFilterSelected() &&
              ((this.selectedColor = t.hex.toLowerCase()),
              this.eraserSelected &&
                (this.eraserSelected = !this.eraserSelected),
              this.eraserSelectedThroughBtn &&
                (this.eraserSelectedThroughBtn = !this
                  .eraserSelectedThroughBtn))
          },
          clearFilledTable: function () {
            for (var t in this.justEditedBox) this.divideIt(0, t)
            for (var e in this.totalBoxesColored) this.divideIt(0, e)
            for (var i in this.colorName) this.colorName[i] = ''
            ;(this.colorLabelChanged = !1),
              (this.colorOnlyDataString = ''),
              (this.totalBoxesColored = {}),
              (this.listOfActions = {})
          },
          clearTableChanges: function () {
            var t
            if (0 === Object.keys(this.listOfActions).length)
              this.showFilteredData()
            else {
              this.undoAction = !0
              var e = Math.max.apply(
                Math,
                Object(tt['a'])(Object.keys(this.listOfActions))
              )
              for (var i in ((t = this.listOfActions[e]),
              this.listOfActions[e].from))
                if (Object.keys(this.listOfActions[e].from[i]).length) {
                  this.divideIt(0, i)
                  var s = this.listOfActions[e].from[i].colors[0].name
                      ? this.listOfActions[e].from[i].colors.sort(function (
                          t,
                          e
                        ) {
                          return t.place - e.place
                        })
                      : this.listOfActions[e].from[i].colors,
                    a = 1,
                    o = !0,
                    n = !1,
                    l = void 0
                  try {
                    for (
                      var r, c = s[Symbol.iterator]();
                      !(o = (r = c.next()).done);
                      o = !0
                    ) {
                      var d = r.value
                      this.selectedColor = d.name || d
                      var u = this.$refs[i][0],
                        h = this.listOfActions[e].from[i].colorPercentage[
                          d.name || d
                        ]
                      100 === h &&
                        (u.style.backgroundColor = this.selectedColor),
                        this.createChildElement(u, i, h, a),
                        this.colorOnlyData.hasOwnProperty(this.selectedColor) ||
                          ((this.colorOnlyData[this.selectedColor] = {}),
                          (this.colorOnlyData[this.selectedColor][
                            'boxes'
                          ] = [])),
                        this.updateColorOnlyData(this.selectedColor, i, h),
                        a++,
                        (this.phaseColoring = {})
                    }
                  } catch (p) {
                    ;(n = !0), (l = p)
                  } finally {
                    try {
                      o || null == c.return || c.return()
                    } finally {
                      if (n) throw l
                    }
                  }
                } else this.divideIt(0, i)
              ;(this.undoAction = !1),
                this.$delete(this.listOfActions, e),
                0 === Object.keys(this.listOfActions).length &&
                  (this.totalBoxesColored = {}),
                t && t.isPasted && this.clearTableChanges()
            }
          },
          undoAllChanges: function () {
            this.clearFilledTable(),
              (this.showWarningDialog = !1),
              this.showFilteredData()
          },
          clearColor: function () {
            ;(this.selectedColor = ''),
              (this.eraserSelected = !1),
              (this.eraserSelectedThroughBtn = !1)
          },
          clearFilter: function () {
            ;(this.gameId = ''),
              (this.gameSelected = ''),
              (this.casinoId = ''),
              (this.casinoSelected = ''),
              (this.stakeId = ''),
              (this.stakeSelected = ''),
              (this.playersId = ''),
              (this.playersSelected = ''),
              (this.sequenceId = ''),
              (this.sequenceSelected = ''),
              (this.subSequenceId = ''),
              (this.selectedSubSequence = ''),
              (this.positionId = ''),
              (this.selectedSituation = ''),
              (this.sub2FilterId = ''),
              (this.selectedSub2Filter = ''),
              (this.reactionId = ''),
              (this.selectedReaction = ''),
              (this.stackId = ''),
              (this.selectedStack = ''),
              (this.selectedStackChild = ''),
              (this.stackChildId = ''),
              (this.stackChildName = ''),
              (this.filters = {}),
              this.clearLocalStorage()
          },
          allFilterSelected: function () {
            for (
              var t = [
                  'game',
                  'casino',
                  'stake',
                  'player',
                  'sequence',
                  'position',
                  'stack',
                ],
                e = !0,
                i = 0,
                s = t;
              i < s.length;
              i++
            ) {
              var a = s[i]
              e = e && this.filters.hasOwnProperty(a) && this.filters[a]
            }
            return (
              e ||
                ((this.currentSelectedFiltersId = ''),
                this.showExistingComment()),
              e
            )
          },
          colorFilter: function (t, e) {
            var i = ''
            for (var s in this.colouredTableData)
              if (
                this.colouredTableData[s].colors.length &&
                this.colouredTableData[s].colors[0].name
                  ? this.colouredTableData[s].colors.find(function (t) {
                      return t.name === e
                    })
                  : this.colouredTableData[s].colors.includes(e)
              ) {
                i = s
                break
              }
            if (i.length)
              for (var a in this.colouredTableData)
                if ('colorData' != a)
                  if (
                    this.colouredTableData[a].colors[0] &&
                    this.colouredTableData[a].colors[0].name
                      ? this.colouredTableData[a].colors.find(function (t) {
                          return t.name === e
                        })
                      : this.colouredTableData[a].colors.includes(e)
                  ) {
                    var o = this.$refs[a][0].classList.contains('shadows')
                    'apply' !== t || o
                      ? 'remove' === t &&
                        this.$refs[a][0].classList.remove('shadows')
                      : this.$refs[a][0].classList.add('shadows')
                  } else {
                    var n = this.$refs[a][0].querySelector('#trans')
                    if ('apply' !== t || n)
                      'remove' === t && this.$refs[a][0].removeChild(n)
                    else {
                      var l = document.createElement('p')
                      l.setAttribute('id', 'trans'),
                        l.classList.add('transparentBlock'),
                        this.$refs[a][0].appendChild(l)
                    }
                  }
          },
          resetFilter: function (t) {
            this.clearFilledTable(),
              (this.selectedColor = ''),
              (this.currentSelectedFiltersId = '')
            var e = ''
            for (var i in this.topViewRelation)
              if (e) {
                if (
                  ((this[this.topViewRelation[i] + 'Selected'] = ''),
                  (this[
                    'selected' +
                      this.topViewRelation[i][0].toUpperCase() +
                      this.topViewRelation[i].substring(1)
                  ] = ''),
                  (this[this.topViewRelation[i] + 'Id'] = ''),
                  delete this.filters[this.topViewRelation[i]],
                  !this.topViewRelation[i])
                )
                  break
                e = this.topViewRelation[i]
              } else
                i == t &&
                  ((this[this.topViewRelation[i] + 'Selected'] = ''),
                  (this[
                    'selected' +
                      this.topViewRelation[i][0].toUpperCase() +
                      this.topViewRelation[i].substring(1)
                  ] = ''),
                  (this[this.topViewRelation[i] + 'Id'] = ''),
                  delete this.filters[this.topViewRelation[i]],
                  (e = this.topViewRelation[i]))
          },
          selectGame: function (t) {
            ;(this.gameId = t.id),
              (this.gameSelected = t.value),
              (this.showGames = !1),
              (this.filters['game'] = t.value),
              this.casinoSelected && this.resetFilter('game')
          },
          selectCasino: function (t) {
            ;(this.casinoId = t.id),
              (this.casinoSelected = t.value),
              (this.showCasinos = !1),
              this.casinoDetailList.hasOwnProperty(this.casinoId)
                ? (this.currentCasinoDetail = this.casinoDetailList[
                    this.casinoId
                  ]['detail'])
                : (this.currentCasinoDetail = ''),
              (this.filters['casino'] = t.value),
              this.stakeSelected && this.resetFilter('casino')
          },
          selectStake: function (t) {
            ;(this.stakeId = t.id),
              (this.stakeSelected = t.value),
              (this.showStakes = !1),
              (this.filters['stake'] = t.value),
              this.playersSelected && this.resetFilter('stake')
          },
          selectPlayers: function (t, e, i) {
            var s = this
            if (
              ((this.playersId = t.id),
              (this.playersSelected = t.value),
              (this.showPlayers = !1),
              (this.filters['player'] = t.value),
              this.sequenceSelected && this.resetFilter('players'),
              this.playersId &&
                this.sequenceList[this.playersId] &&
                this.sequenceList[this.playersId].length)
            ) {
              var a = this.getDataIndexKey(
                this.sequenceList,
                this.playersId,
                e,
                'sequence'
              )
              if (
                ((this.sequenceSelected = this.sequenceList[this.playersId][
                  a
                ].value),
                (this.sequenceId = this.sequenceList[this.playersId][a].id),
                (this.filters['sequence'] = this.sequenceSelected),
                (this.filters['sequence'] = this.sequenceSelected),
                this.sequenceId &&
                  this.sequenceSelected &&
                  this.subSequenceList[this.sequenceId] &&
                  this.subSequenceList[this.sequenceId].length)
              ) {
                var o = this.getDataIndexKey(
                  this.subSequenceList,
                  this.sequenceId,
                  e,
                  'subSequence'
                )
                if (
                  ((this.selectedSubSequence = this.subSequenceList[
                    this.sequenceId
                  ][o].value),
                  (this.subSequenceId = this.subSequenceList[this.sequenceId][
                    o
                  ].id),
                  (this.showSubSequence = !0),
                  (this.filters['subSequence'] = this.selectedSubSequence),
                  this.subSequenceId &&
                    this.selectedSubSequence &&
                    this.positionList[this.subSequenceId] &&
                    this.positionList[this.subSequenceId].length)
                ) {
                  var n = this.getDataIndexKey(
                    this.positionList,
                    this.subSequenceId,
                    e,
                    'position'
                  )
                  ;(this.selectedSituation = this.positionList[
                    this.subSequenceId
                  ][n].value),
                    (this.positionId = this.positionList[this.subSequenceId][
                      n
                    ].id),
                    (this.filters['position'] = this.selectedSituation)
                }
              } else if (
                this.sequenceId &&
                this.sequenceSelected &&
                this.positionList[this.sequenceId] &&
                this.positionList[this.sequenceId].length
              ) {
                var l = this.getDataIndexKey(
                  this.positionList,
                  this.sequenceId,
                  e,
                  'position'
                )
                ;(this.selectedSituation = this.positionList[this.sequenceId][
                  l
                ].value),
                  (this.positionId = this.positionList[this.sequenceId][l].id),
                  (this.filters['position'] = this.selectedSituation),
                  (this.subSequenceId = ''),
                  (this.selectedSubSequence = ''),
                  (this.filters['subSequence'] = '')
              }
            }
            var r = function () {
              ;(s.reactionId = ''),
                (s.selectedReaction = ''),
                (s.filters['reaction'] = '')
              var t = null
              ;(t = s.lastUsedStack
                ? s.getDataIndexKey(
                    s.stackList,
                    s.positionId,
                    null,
                    'stack',
                    s.lastUsedStack
                  )
                : s.getDataIndexKey(s.stackList, s.positionId, e, 'stack')),
                (-1 !== t && null != t) ||
                  (t = s.getDataIndexKey(
                    s.stackList,
                    s.positionId,
                    e,
                    'stack',
                    s.defaultStackValueMap[s.playersId]
                  )),
                (-1 !== t && t) || (t = 0),
                (s.selectedStack = s.stackList[s.positionId][t].value),
                (s.stackId = s.stackList[s.positionId][t].id),
                s.checkForStackChild()
            }
            if (i && !i.reaction) r()
            else if (
              i &&
              i.sub2Filter &&
              this.positionId &&
              this.sub2FilterList &&
              this.sub2FilterList[this.positionId]
            ) {
              var c = this.getDataIndexKey(
                this.sub2FilterList,
                this.positionId,
                e,
                'sub2Filter'
              )
              ;(this.selectedSub2Filter = this.sub2FilterList[this.positionId][
                c
              ].value),
                (this.sub2FilterId = this.sub2FilterList[this.positionId][
                  c
                ].id),
                (this.filters['sub2Filter'] = this.selectedSub2Filter)
              var d = this.sub2FilterId
              if (
                i &&
                i.sub3Filter &&
                this.sub2FilterId &&
                this.sub3FilterList &&
                this.sub3FilterList[this.sub2FilterId]
              ) {
                var u = this.getDataIndexKey(
                  this.sub3FilterList,
                  this.sub2FilterId,
                  e,
                  'sub3Filter'
                )
                ;(this.selectedSub3Filter = this.sub3FilterList[
                  this.sub2FilterId
                ][u].value),
                  (this.sub3FilterId = this.sub3FilterList[this.sub2FilterId][
                    u
                  ].id),
                  (this.filters['sub3Filter'] = this.selectedSub3Filter),
                  (this.sub3FilterName =
                    this.sub3FilterList[this.sub2FilterId][u].sub3FilterName ||
                    ''),
                  (this.filterTitles['sub3Filter'][this.sub2FilterId] =
                    this.filterTitles['sub3Filter'][this.sub2FilterId] ||
                    this.sub3FilterName),
                  (this.reactionName = ''),
                  (d = this.sub3FilterId)
              }
              var h = this.getDataIndexKey(this.reactionList, d, e, 'reaction')
              ;(this.selectedReaction = this.reactionList[d][h].value),
                (this.reactionId = this.reactionList[d][h].id),
                (this.filters['reaction'] = this.selectedReaction),
                this.setReactionName()
              try {
                var p = null
                ;(p = this.lastUsedStack
                  ? this.getDataIndexKey(
                      this.stackList,
                      this.reactionId,
                      null,
                      'stack',
                      this.lastUsedStack
                    )
                  : this.getDataIndexKey(
                      this.stackList,
                      this.reactionId,
                      e,
                      'stack'
                    )),
                  (-1 !== p && null != p) ||
                    (p = this.getDataIndexKey(
                      this.stackList,
                      this.reactionId,
                      e,
                      'stack',
                      this.defaultStackValueMap[this.playersId]
                    )),
                  (-1 !== p && p) || (p = 0),
                  (this.selectedStack = this.stackList[this.reactionId][
                    p
                  ].value),
                  (this.stackId = this.stackList[this.reactionId][p].id),
                  this.checkForStackChild()
              } catch (b) {}
            } else if (
              i &&
              i.reaction &&
              this.positionId &&
              this.reactionList &&
              this.reactionList[this.positionId]
            ) {
              var f = this.getDataIndexKey(
                this.reactionList,
                this.positionId,
                e,
                'reaction'
              )
              ;(this.selectedReaction = this.reactionList[this.positionId][
                f
              ].value),
                (this.reactionId = this.reactionList[this.positionId][f].id),
                (this.filters['reaction'] = this.selectedReaction)
              try {
                var v = null
                ;(v = this.lastUsedStack
                  ? this.getDataIndexKey(
                      this.stackList,
                      this.reactionId,
                      null,
                      'stack',
                      this.lastUsedStack
                    )
                  : this.getDataIndexKey(
                      this.stackList,
                      this.reactionId,
                      e,
                      'stack'
                    )),
                  (-1 !== v && null != v) ||
                    (v = this.getDataIndexKey(
                      this.stackList,
                      this.reactionId,
                      e,
                      'stack',
                      this.defaultStackValueMap[this.playersId]
                    )),
                  (-1 !== v && v) || (v = 0),
                  (this.selectedStack = this.stackList[this.reactionId][
                    v
                  ].value),
                  (this.stackId = this.stackList[this.reactionId][v].id),
                  this.checkForStackChild()
              } catch (b) {}
            } else
              this.positionId &&
                this.stackList &&
                this.stackList[this.positionId] &&
                r()
            ;(this.filters['stack'] = this.selectedStack),
              'GENERAL' !== this.selectedStack &&
                (this.lastUsedStack = this.selectedStack),
              e || this.updateLocalStorage()
          },
          getDataIndexKey: function (t, e, i, s) {
            var a =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : ''
            if (i && i[s] && t && t[e]) {
              var o = t[e].findIndex(function (t) {
                return t.id == i[s].id
              })
              return o < 0 && 'stack' === s ? -1 : -1 != o ? o : 0
            }
            if (a && t && t[e]) {
              var n = t[e].findIndex(function (t) {
                return t.value && t.value.trim() === a.trim()
              })
              return n < 0 && 'stack' === s ? -1 : -1 != n ? n : 0
            }
            return 0
          },
          selectSequence: function (t) {
            if (!t || !t.id || this.sequenceId != t.id)
              if (this.commentChanged()) this.commentChangedWarning = !0
              else {
                if (this.tableChanged()) this.showWarningDialog = !0
                else {
                  if (
                    (this.subSequenceList[t.id] &&
                    this.subSequenceList[t.id].length
                      ? ((this.showSubSequence = !this.showSubSequence),
                        this.sequenceSelected !== t.value &&
                          (this.showSubSequence = !0))
                      : ((this.sequenceId = ''),
                        (this.selectedSubSequence = ''),
                        (this.filters['subSequence'] = '')),
                    (this.sequenceId = t.id),
                    (this.sequenceSelected = t.value),
                    (this.filters['sequence'] = t.value),
                    this.subSequenceList[this.sequenceId] &&
                    this.subSequenceList[this.sequenceId].length
                      ? ((this.subSequenceId = this.subSequenceList[
                          this.sequenceId
                        ][0].id),
                        (this.selectedSubSequence = this.subSequenceList[
                          this.sequenceId
                        ][0].value),
                        (this.filters[
                          'subSequence'
                        ] = this.selectedSubSequence),
                        this.positionList[this.subSequenceId] &&
                        this.positionList[this.subSequenceId].length
                          ? ((this.selectedSituation = this.positionList[
                              this.subSequenceId
                            ][0].value),
                            (this.positionId = this.positionList[
                              this.subSequenceId
                            ][0].id),
                            (this.filters['position'] = this.selectedSituation))
                          : ((this.selectedSituation = ''),
                            (this.positionId = ''),
                            (this.filters['position'] = ''),
                            this.clearFilledTable(),
                            (this.currentSelectedFiltersId = '')))
                      : this.sequenceId &&
                        this.sequenceSelected &&
                        this.positionList[this.sequenceId] &&
                        this.positionList[this.sequenceId].length
                      ? ((this.selectedSituation = this.positionList[
                          this.sequenceId
                        ][0].value),
                        (this.positionId = this.positionList[
                          this.sequenceId
                        ][0].id),
                        (this.filters['position'] = this.selectedSituation),
                        (this.subSequenceId = ''),
                        (this.selectedSubSequence = ''),
                        (this.filters['subSequence'] = ''))
                      : ((this.subSequenceId = ''),
                        (this.selectedSubSequence = ''),
                        (this.filters['subSequence'] = ''),
                        (this.selectedSituation = ''),
                        (this.positionId = ''),
                        (this.filters['position'] = ''),
                        this.clearFilledTable(),
                        (this.currentSelectedFiltersId = '')),
                    (this.reactionId = ''),
                    (this.selectedReaction = ''),
                    (this.filters['reaction'] = ''),
                    (this.sub2FilterId = ''),
                    (this.selectedSub2Filter = ''),
                    (this.filters['sub2Filter'] = ''),
                    (this.sub3FilterId = ''),
                    (this.selectedSub3Filter = ''),
                    (this.filters['sub3Filter'] = ''),
                    (this.selectedStack = ''),
                    (this.stackId = ''),
                    (this.filters.stack = ''),
                    this.positionId &&
                      this.stackList &&
                      this.stackList[this.positionId])
                  ) {
                    var e = null
                    this.lastUsedStack &&
                      (e = this.getDataIndexKey(
                        this.stackList,
                        this.positionId,
                        null,
                        'stack',
                        this.lastUsedStack
                      )),
                      (-1 !== e && null != e) ||
                        (e = this.getDataIndexKey(
                          this.stackList,
                          this.positionId,
                          null,
                          'stack',
                          this.defaultStackValueMap[this.playersId]
                        )),
                      (-1 !== e && e) || (e = 0),
                      this.stackList[this.positionId][e] &&
                        ((this.selectedStack = this.stackList[this.positionId][
                          e
                        ].value),
                        (this.stackId = this.stackList[this.positionId][e].id),
                        (this.filters['stack'] = this.selectedStack),
                        'GENERAL' !== this.selectedStack &&
                          (this.lastUsedStack = this.selectedStack))
                  }
                  this.checkForStackChild()
                }
                this.resetEditorUndo(), this.updateLocalStorage()
              }
          },
          selectSubSequence: function (t, e) {
            if (
              (t.stopImmediatePropagation(),
              !e || !e.id || this.subSequenceId != e.id)
            )
              if (this.commentChanged()) this.commentChangedWarning = !0
              else {
                if (this.tableChanged()) this.showWarningDialog = !0
                else if (
                  ((this.subSequenceId = e.id),
                  (this.selectedSubSequence = e.value),
                  (this.filters['subSequence'] = e.value),
                  this.positionList[this.subSequenceId] &&
                  this.positionList[this.subSequenceId].length
                    ? ((this.selectedSituation = this.positionList[
                        this.subSequenceId
                      ][0].value),
                      (this.positionId = this.positionList[
                        this.subSequenceId
                      ][0].id),
                      (this.filters['position'] = this.selectedSituation))
                    : ((this.selectedSituation = ''),
                      (this.positionId = ''),
                      (this.filters['position'] = ''),
                      this.clearFilledTable(),
                      (this.currentSelectedFiltersId = '')),
                  (this.reactionId = ''),
                  (this.selectedReaction = ''),
                  (this.filters['reaction'] = ''),
                  (this.sub2FilterId = ''),
                  (this.selectedSub2Filter = ''),
                  (this.filters['sub2Filter'] = ''),
                  (this.sub3FilterId = ''),
                  (this.selectedSub3Filter = ''),
                  (this.filters['sub3Filter'] = ''),
                  (this.selectedStack = ''),
                  (this.stackId = ''),
                  (this.filters.stack = ''),
                  this.positionId &&
                    this.stackList &&
                    this.stackList[this.positionId])
                ) {
                  var i = null
                  this.lastUsedStack &&
                    (i = this.getDataIndexKey(
                      this.stackList,
                      this.positionId,
                      null,
                      'stack',
                      this.lastUsedStack
                    )),
                    (-1 !== i && null != i) ||
                      (i = this.getDataIndexKey(
                        this.stackList,
                        this.positionId,
                        null,
                        'stack',
                        this.defaultStackValueMap[this.playersId]
                      )),
                    (-1 !== i && i) || (i = 0),
                    this.stackList[this.positionId][i] &&
                      ((this.selectedStack = this.stackList[this.positionId][
                        i
                      ].value),
                      (this.stackId = this.stackList[this.positionId][i].id),
                      (this.filters['stack'] = this.selectedStack),
                      'GENERAL' !== this.selectedStack &&
                        (this.lastUsedStack = this.selectedStack),
                      this.checkForStackChild())
                }
                this.resetEditorUndo(), this.updateLocalStorage()
              }
          },
          selectSituation: function (t) {
            if (!t || !t.id || this.positionId != t.id || this.reactionId)
              if (this.commentChanged()) this.commentChangedWarning = !0
              else {
                if (this.tableChanged()) this.showWarningDialog = !0
                else {
                  if (
                    ((this.positionId = t.id),
                    (this.selectedSituation = t.value),
                    (this.filters['position'] = t.value),
                    (this.selectedStack || this.selectedReaction) &&
                      this.resetFilter('position'),
                    (this.reactionId = ''),
                    (this.selectedReaction = ''),
                    (this.filters['reaction'] = ''),
                    (this.sub2FilterId = ''),
                    (this.selectedSub2Filter = ''),
                    (this.filters['sub2Filter'] = ''),
                    (this.sub3FilterId = ''),
                    (this.selectedSub3Filter = ''),
                    (this.filters['sub3Filter'] = ''),
                    (this.selectedStack = ''),
                    (this.stackId = ''),
                    (this.filters.stack = ''),
                    this.positionId &&
                      this.stackList &&
                      this.stackList[this.positionId])
                  ) {
                    var e = null
                    this.lastUsedStack &&
                      (e = this.getDataIndexKey(
                        this.stackList,
                        this.positionId,
                        null,
                        'stack',
                        this.lastUsedStack
                      )),
                      (-1 !== e && null != e) ||
                        (e = this.getDataIndexKey(
                          this.stackList,
                          this.positionId,
                          null,
                          'stack',
                          this.defaultStackValueMap[this.playersId]
                        )),
                      (-1 !== e && e) || (e = 0),
                      this.stackList[this.positionId][e] &&
                        ((this.selectedStack = this.stackList[this.positionId][
                          e
                        ].value),
                        (this.stackId = this.stackList[this.positionId][e].id),
                        (this.filters['stack'] = this.selectedStack))
                  }
                  this.checkForStackChild(),
                    'GENERAL' !== this.selectedStack &&
                      (this.lastUsedStack = this.selectedStack)
                }
                this.updateLocalStorage()
              }
          },
          selectSub2Filter: function (t) {
            if (!t || !t.id || this.sub2FilterId != t.id)
              if (this.commentChanged()) this.commentChangedWarning = !0
              else {
                if (this.tableChanged()) this.showWarningDialog = !0
                else {
                  if (
                    ((this.sub2FilterId = t.id),
                    (this.selectedSub2Filter = t.value),
                    (this.filters['sub2Filter'] = t.value),
                    (this.sub3FilterId = ''),
                    (this.selectedSub3Filter = ''),
                    (this.filters['sub3Filter'] = ''),
                    (this.reactionId = ''),
                    (this.selectedReaction = ''),
                    (this.filters['reaction'] = ''),
                    (this.stackId = ''),
                    (this.selectedStack = ''),
                    (this.filters['stack'] = ''),
                    this.sub2FilterId &&
                      this.sub3FilterList &&
                      this.sub3FilterList[this.sub2FilterId] &&
                      this.sub3FilterList[this.sub2FilterId].length)
                  ) {
                    var e = this.sub3FilterList[this.sub2FilterId][0]
                    ;(this.sub3FilterId = e.id),
                      (this.selectedSub3Filter = e.value),
                      (this.filters.sub3Filter = this.selectedSub3Filter),
                      (this.sub3FilterName = e.sub3FilterName || ''),
                      (this.reactionName = '')
                    var i =
                      this.reactionList[this.sub3FilterId] &&
                      this.reactionList[this.sub3FilterId][0]
                    i && this.setReactionStackFunction(i)
                  } else if (
                    this.sub2FilterId &&
                    this.reactionList &&
                    this.reactionList[this.sub2FilterId]
                  ) {
                    var s = this.reactionList[this.sub2FilterId][0]
                    s && this.setReactionStackFunction(s)
                  }
                  this.checkForStackChild(),
                    'GENERAL' !== this.selectedStack &&
                      (this.lastUsedStack = this.selectedStack),
                    (this.filterTitles['sub3Filter'][this.sub2FilterId] =
                      this.filterTitles['sub3Filter'][this.sub2FilterId] ||
                      this.sub3FilterName),
                    (this.sub3FilterName = '')
                }
                this.updateLocalStorage()
              }
          },
          setReactionName: function () {
            var t = this
            if (
              this.selectedSub3Filter &&
              this.sub2FilterList &&
              this.sub2FilterList[this.positionId] &&
              this.sub2FilterList[this.positionId].length
            ) {
              var e = this.sub2FilterList[this.positionId].find(function (e) {
                return e.id === t.sub2FilterId
              })
              e && (this.reactionName = e.reactionName || '')
            }
            if (
              !this.reactionName &&
              this.selectedReaction &&
              this.reactionId
            ) {
              var i =
                this.reactionList[this.sub3FilterId] &&
                this.reactionList[this.sub3FilterId].find(function (e) {
                  return e.id === t.reactionId
                })
              this.reactionName = (i && i.reactionName) || ''
            }
            !this.reactionName &&
              this.sub3FilterList[this.sub2FilterId] &&
              this.sub3FilterList[this.sub2FilterId].length &&
              this.sub3FilterList[this.sub2FilterId].forEach(function (e) {
                if (t.reactionName || e.reactionName)
                  t.reactionName = t.reactionName || e.reactionName
                else {
                  var i = t.reactionList[e.id] || []
                  i.forEach(function (e) {
                    e.reactionName &&
                      (t.reactionName = t.reactionName || e.reactionName)
                  })
                }
              }),
              (this.filterTitles['reaction'][this.sub2FilterId] =
                this.filterTitles['reaction'][this.sub2FilterId] ||
                this.reactionName),
              (this.reactionName = '')
          },
          setReactionStackFunction: function (t) {
            ;(this.reactionId = t.id),
              (this.selectedReaction = t.value),
              (this.filters.reaction = this.selectedReaction),
              this.setReactionName()
            var e = null
            this.lastUsedStack &&
              (e = this.getDataIndexKey(
                this.stackList,
                this.reactionId,
                null,
                'stack',
                this.lastUsedStack
              )),
              (-1 !== e && null != e) ||
                (e = this.getDataIndexKey(
                  this.stackList,
                  this.reactionId,
                  null,
                  'stack',
                  this.defaultStackValueMap[this.playersId]
                )),
              (-1 !== e && e) || (e = 0),
              this.stackList[this.reactionId] &&
              this.stackList[this.reactionId][e]
                ? ((this.selectedStack = this.stackList[this.reactionId][
                    e
                  ].value),
                  (this.stackId = this.stackList[this.reactionId][e].id),
                  (this.filters['stack'] = this.selectedStack))
                : ((this.selectedStack = ''),
                  (this.stackId = ''),
                  (this.filters['stack'] = this.selectedStack))
          },
          selectSub3Filter: function (t) {
            if (!t || !t.id || this.sub3FilterId != t.id)
              if (this.commentChanged()) this.commentChangedWarning = !0
              else {
                if (this.tableChanged()) this.showWarningDialog = !0
                else {
                  if (
                    ((this.sub3FilterId = t.id),
                    (this.selectedSub3Filter = t.value),
                    (this.filters.sub3Filter = this.selectedSub3Filter),
                    (this.showSub3Filters = !1),
                    (this.reactionId = ''),
                    (this.selectedReaction = ''),
                    (this.filters['reaction'] = ''),
                    (this.stackId = ''),
                    (this.selectedStack = ''),
                    (this.filters['stack'] = ''),
                    this.sub3FilterId &&
                      this.reactionList &&
                      this.reactionList[this.sub3FilterId])
                  ) {
                    var e =
                      this.reactionList[this.sub3FilterId] &&
                      this.reactionList[this.sub3FilterId][0]
                    e && this.setReactionStackFunction(e)
                  }
                  this.checkForStackChild(),
                    'GENERAL' !== this.selectedStack &&
                      (this.lastUsedStack = this.selectedStack)
                }
                this.updateLocalStorage()
              }
          },
          selectReaction: function (t) {
            if (t.id !== this.reactionId)
              if (this.commentChanged()) this.commentChangedWarning = !0
              else {
                if (this.tableChanged()) this.showWarningDialog = !0
                else {
                  if (
                    ((this.reactionId = t.id),
                    (this.selectedReaction = t.value),
                    (this.filters['reaction'] = t.value),
                    (this.showReactions = !1),
                    (this.stackId = ''),
                    (this.selectedStack = ''),
                    (this.filters['stack'] = ''),
                    this.reactionId &&
                      this.stackList &&
                      this.stackList[this.reactionId])
                  ) {
                    var e = null
                    this.lastUsedStack &&
                      (e = this.getDataIndexKey(
                        this.stackList,
                        this.reactionId,
                        null,
                        'stack',
                        this.lastUsedStack
                      )),
                      (-1 !== e && null != e) ||
                        (e = this.getDataIndexKey(
                          this.stackList,
                          this.reactionId,
                          null,
                          'stack',
                          this.defaultStackValueMap[this.playersId]
                        )),
                      (-1 !== e && e) || (e = 0),
                      this.stackList[this.reactionId][e] &&
                        ((this.selectedStack = this.stackList[this.reactionId][
                          e
                        ].value),
                        (this.stackId = this.stackList[this.reactionId][e].id),
                        (this.filters['stack'] = this.selectedStack))
                  }
                  this.checkForStackChild(),
                    'GENERAL' !== this.selectedStack &&
                      (this.lastUsedStack = this.selectedStack)
                }
                this.updateLocalStorage()
              }
          },
          selectStack: function (t) {
            this.commentChanged()
              ? (this.commentChangedWarning = !0)
              : (this.tableChanged()
                  ? (this.showWarningDialog = !0)
                  : ((this.stackId = t.id),
                    (this.selectedStack = t.value),
                    (this.showStacks = !1),
                    (this.filters['stack'] = t.value),
                    'GENERAL' !== this.selectedStack &&
                      (this.lastUsedStack = this.selectedStack),
                    this.checkForStackChild()),
                this.updateLocalStorage(),
                this.resetEditorUndo())
          },
          selectStackChild: function (t) {
            this.commentChanged()
              ? (this.commentChangedWarning = !0)
              : (this.tableChanged() ||
                  ((this.selectedStackChild = t.value),
                  (this.stackChildId = t.id),
                  (this.filters.stackChild = t.value),
                  (this.showStackChilds = !1),
                  (this.stackIdUpadteString = ''
                    .concat(this.stackId, '-')
                    .concat(new Date().getTime()))),
                this.updateLocalStorage(),
                this.resetEditorUndo())
          },
          checkForStackChild: function () {
            if (
              ((this.stackChildId = ''),
              (this.selectedStackChild = ''),
              (this.filters['stackChild'] = ''),
              this.stackChildList &&
                this.stackChildList[this.stackId] &&
                this.stackChildList[this.stackId].length)
            ) {
              var t = this.stackChildList[this.stackId]
              this.stackChildName = t[0].stackChildName
              var e = t.find(function (t) {
                return t.isDefault
              })
              e &&
                ((this.selectedStackChild = e.value),
                (this.stackChildId = e.id),
                (this.filters.stackChild = e.value))
            } else
              (this.selectedStackChild = ''),
                (this.stackChildId = ''),
                (this.filters.stackChild = ''),
                (this.stackChildName = '')
            this.filterTitles['stackChild'][this.stackId] =
              this.filterTitles['stackChild'][this.stackId] ||
              this.stackChildName
          },
          resetEditorUndo: function () {
            this.rerenderEditor += 1
          },
          showExistingComment: function () {
            this.commentsList.hasOwnProperty(this.currentSelectedFiltersId)
              ? (this.currentComment = this.commentsList[
                  this.currentSelectedFiltersId
                ]['detail'])
              : (this.currentComment = '')
          },
          checkVisibility: function (t) {
            var e = !0
            for (var i in this.colouredTableData)
              if (
                ((e = this.colouredTableData[i].colors.find(function (e) {
                  return e.name === t
                })),
                e)
              )
                break
            return e
          },
          checkAnyColorInTable: function () {
            var t = !1
            for (var e in this.colouredTableData)
              if (this.colouredTableData[e].colors.length) {
                t = !0
                break
              }
            return t
          },
          commentChanged: function () {
            var t = !1
            return (
              this.currentSelectedFiltersId &&
              this.commentsList.hasOwnProperty(this.currentSelectedFiltersId) &&
              this.commentsList[this.currentSelectedFiltersId]['detail'] !==
                this.currentComment
                ? (t = !0)
                : this.currentSelectedFiltersId &&
                  !this.commentsList.hasOwnProperty(
                    this.currentSelectedFiltersId
                  ) &&
                  this.currentComment &&
                  (t = !0),
              t
            )
          },
          casinoChanged: function () {
            var t = !1
            return (
              this.casinoId &&
              this.casinoDetailList.hasOwnProperty(this.casinoId) &&
              this.casinoDetailList[this.casinoId]['detail'] !==
                this.currentCasinoDetail
                ? (t = !0)
                : this.casinoId &&
                  !this.casinoDetailList.hasOwnProperty(this.casinoId) &&
                  this.currentCasinoDetail &&
                  (t = !0),
              t
            )
          },
          tableChanged: function () {
            var t = !1
            for (var e in this.colouredTableData) {
              if (
                'colorData' !== e &&
                this.colouredTableData[e].hasOwnProperty('colors') &&
                this.allCellDataFromServer[e] &&
                this.allCellDataFromServer[e].hasOwnProperty(
                  this.currentSelectedFiltersId
                ) &&
                this.colouredTableData[e]['colors'].length !==
                  this.allCellDataFromServer[e][this.currentSelectedFiltersId][
                    'colors'
                  ].length
              ) {
                t = !0
                break
              }
              if (
                'colorData' !== e &&
                this.colouredTableData[e].hasOwnProperty('colors') &&
                this.allCellDataFromServer[e] &&
                this.allCellDataFromServer[e].hasOwnProperty(
                  this.currentSelectedFiltersId
                ) &&
                this.colouredTableData[e]['colors'].length ===
                  this.allCellDataFromServer[e][this.currentSelectedFiltersId][
                    'colors'
                  ].length
              ) {
                var i = this.allCellDataFromServer[e][
                    this.currentSelectedFiltersId
                  ]['colors'][0].name
                    ? this.allCellDataFromServer[e][
                        this.currentSelectedFiltersId
                      ]['colors'].map(function (t) {
                        return t.name
                      })
                    : this.allCellDataFromServer[e][
                        this.currentSelectedFiltersId
                      ]['colors'],
                  s = !0,
                  a = !1,
                  o = void 0
                try {
                  for (
                    var n, l = i[Symbol.iterator]();
                    !(s = (n = l.next()).done);
                    s = !0
                  ) {
                    var r = n.value
                    if (
                      this.colouredTableData[e]['colorPercentage'][r] !==
                      this.allCellDataFromServer[e][
                        this.currentSelectedFiltersId
                      ]['colorPercentage'][r]
                    ) {
                      t = !0
                      break
                    }
                  }
                } catch (c) {
                  ;(a = !0), (o = c)
                } finally {
                  try {
                    s || null == l.return || l.return()
                  } finally {
                    if (a) throw o
                  }
                }
                if (t) break
              } else if (
                this.colouredTableData[e]['colors'].length &&
                (!this.allCellDataFromServer[e] ||
                  !this.allCellDataFromServer[e].hasOwnProperty(
                    this.currentSelectedFiltersId
                  ))
              ) {
                t = !0
                break
              }
            }
            return t || this.colorLabelChanged
          },
          showDropOptions: function (t) {
            var e = this
            if (this.commentChanged()) this.commentChangedWarning = !0
            else if (
              -1 !== ['Games', 'Casinos'].indexOf(t) &&
              this.casinoChanged()
            )
              this.casinoChangedWarning = !0
            else {
              var i = [
                'Games',
                'Casinos',
                'Stakes',
                'Players',
                'Sub3Filters',
                'Reactions',
                'Stacks',
                'StackChilds',
              ]
              this.tableChanged()
                ? (this.showWarningDialog = !0)
                : i.map(function (i) {
                    i === t
                      ? (e['show' + t] = !e['show' + t])
                      : (e['show' + i] = !1)
                  })
            }
          },
          closeDrops: function (t) {
            if (document.querySelector('.optionsBlock')) {
              var e = document.querySelector('.optionsBlock').parentElement.id,
                i = e.split('Filter')[0]
              i = 'sub3FilterId' == e ? 'sub3Filter' : i
              var s = 'show' + i[0].toUpperCase() + i.substr(1) + 's'
              !s ||
                t.target.classList.contains('customDrop') ||
                t.target.classList.contains('dropIcon') ||
                (this[s] = !this[s])
            }
          },
          editorInit: function (t, e) {
            var i = this
            try {
              var s = localStorage.getItem(t),
                a = {
                  plugins: ['code link'],
                  setup: function (s) {
                    s.on('ResizeEditor', function () {
                      var s = i.$refs[e],
                        a = s.clientHeight
                      localStorage.setItem(t, a)
                    })
                  },
                  content_css: '/reckoner/css/tinymceCSS.css',
                }
              return s && (a.height = s), a
            } catch (o) {
              return {
                plugins: ['code link'],
                content_css: '/reckoner/css/tinymceCSS.css',
              }
            }
          },
          snackBarFunction: function (t) {
            var e = this,
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 4e3,
              s = arguments.length > 2 ? arguments[2] : void 0
            ;(this.showSnackbar = !0),
              (this.snackBarMessage = t),
              (this.snackBarType = s),
              setTimeout(function () {
                ;(e.snackBarMessage = ''),
                  (e.showSnackbar = !1),
                  (e.snackBarType = null)
              }, i)
          },
        },
      },
      gt = mt,
      St = (i('56ee'), i('99d9')),
      Ct = i('03a4'),
      kt = i('169a'),
      Ft = i('cd55'),
      yt = i('49e2'),
      _t = i('c865'),
      wt = i('0393'),
      Ot = i('8860'),
      It = i('da13'),
      xt = i('5d23'),
      Dt = i('e449'),
      Lt = Object(d['a'])(gt, X, Z, !1, null, null, null),
      qt = Lt.exports
    h()(Lt, {
      VBtn: f['a'],
      VCard: K['a'],
      VCardActions: St['a'],
      VColorPicker: Ct['a'],
      VDialog: kt['a'],
      VExpansionPanel: Ft['a'],
      VExpansionPanelContent: yt['a'],
      VExpansionPanelHeader: _t['a'],
      VExpansionPanels: wt['a'],
      VIcon: v['a'],
      VList: Ot['a'],
      VListItem: It['a'],
      VListItemTitle: xt['b'],
      VMenu: Dt['a'],
      VTextField: W['a'],
    })
    var Pt = {
        name: 'AdminDashboard',
        components: {
          TableAndFilters: qt,
        },
      },
      Tt = Pt,
      Bt = Object(d['a'])(Tt, z, Y, !1, null, null, null),
      Nt = Bt.exports,
      At = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e
        return i(
          'div',
          [
            i('Loader', {
              attrs: {
                overlay: t.showLoader,
              },
            }),
            i('SnackBar', {
              attrs: {
                showSnackbar: t.showSnackbar,
                message: t.snackBarMessage,
                color: t.snackBarType,
              },
            }),
            i(
              'v-dialog',
              {
                attrs: {
                  persistent: '',
                  'max-width': '500',
                },
                model: {
                  value: t.addOptionDialog,
                  callback: function (e) {
                    t.addOptionDialog = e
                  },
                  expression: 'addOptionDialog',
                },
              },
              [
                i(
                  'v-card',
                  [
                    i(
                      'div',
                      {
                        staticClass: 'headline p_10 bord_bot_lg',
                      },
                      [t._v('Add options')]
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'p_10 bord_bot_lg',
                      },
                      [
                        i('div', [
                          i('span', [t._v('Currently adding option to:')]),
                          i(
                            'p',
                            {
                              staticClass: 'mt-2 mb-2',
                            },
                            [
                              i('strong', [
                                t._v(
                                  '\n              ' +
                                    t._s(
                                      'SUBSEQUENCE' ==
                                        t.currentlyAddingOptionTo.toUpperCase() ||
                                        'SUB2FILTER' ==
                                          t.currentlyAddingOptionTo.toUpperCase() ||
                                        'POSITION' ==
                                          t.currentlyAddingOptionTo.toUpperCase()
                                        ? 'SUBSEQUENCE' ==
                                          t.currentlyAddingOptionTo.toUpperCase()
                                          ? 'SUB FILTER 1'
                                          : 'SUB2FILTER' ==
                                            t.currentlyAddingOptionTo.toUpperCase()
                                          ? 'SUB FILTER 2'
                                          : 'ACTION'
                                        : t.currentlyAddingOptionTo.toUpperCase()
                                    ) +
                                    '\n            '
                                ),
                              ]),
                            ]
                          ),
                        ]),
                        i(
                          'div',
                          [
                            i('v-combobox', {
                              attrs: {
                                id: 'optionInput',
                                chips: '',
                                'deletable-chips': '',
                                'item-value': '',
                                multiple: '',
                                autofocus: Boolean(1),
                                label: 'New options',
                              },
                              model: {
                                value: t.newOptions,
                                callback: function (e) {
                                  t.newOptions = e
                                },
                                expression: 'newOptions',
                              },
                            }),
                            i(
                              'span',
                              {
                                staticClass: 'caption',
                              },
                              [
                                t._v(
                                  '*Press tab or enter to create the options.'
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ]
                    ),
                    i(
                      'v-card-actions',
                      [
                        i('div', {
                          staticClass: 'flex-grow-1',
                        }),
                        i(
                          'v-btn',
                          {
                            attrs: {
                              color: 'black darken-1',
                              text: '',
                            },
                            on: {
                              click: function (e) {
                                t.addOptionDialog = !1
                              },
                            },
                          },
                          [t._v(' Close ')]
                        ),
                        i(
                          'v-btn',
                          {
                            attrs: {
                              color: 'green darken-1',
                            },
                            on: {
                              click: function (e) {
                                return t.addOptions(t.currentlyAddingOptionTo)
                              },
                            },
                          },
                          [t._v(' Add ')]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            i(
              'v-dialog',
              {
                attrs: {
                  'max-width': '500',
                },
                model: {
                  value: t.addSequenceWarningDialog,
                  callback: function (e) {
                    t.addSequenceWarningDialog = e
                  },
                  expression: 'addSequenceWarningDialog',
                },
              },
              [
                i(
                  'v-card',
                  [
                    i(
                      'div',
                      {
                        staticClass: 'headline p_10 bord_bot_lg',
                      },
                      [t._v('Warning !')]
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'p_10 bord_bot_lg',
                      },
                      [
                        i(
                          'p',
                          {
                            staticClass: 'mt-2 mb-2',
                          },
                          [
                            t._v('You have already added the '),
                            i('strong', [t._v('Action')]),
                            t._v(' under the '),
                            i(
                              'strong',
                              {
                                staticClass: 'text-upper',
                              },
                              [t._v('Sequence :')]
                            ),
                            t._v(' "'),
                            i('strong', [t._v(t._s(t.sequenceSelected))]),
                            t._v('" with the following options :'),
                          ]
                        ),
                        t._l(t.positionList, function (e, s) {
                          return i(
                            'p',
                            {
                              key: 'pos' + s,
                              staticClass: 'ml-3 mb-0',
                            },
                            [t._v('\n          ' + t._s(e) + '\n        ')]
                          )
                        }),
                        i(
                          'p',
                          {
                            staticClass: 'mb-2 mt-2',
                          },
                          [
                            t._v(
                              "Are you sure you want to add Sub Filter 1's option(s), if yes, then the above stated options will be deleted."
                            ),
                          ]
                        ),
                      ],
                      2
                    ),
                    i(
                      'v-card-actions',
                      [
                        i('div', {
                          staticClass: 'flex-grow-1',
                        }),
                        i(
                          'v-btn',
                          {
                            attrs: {
                              color: 'black darken-1',
                              text: '',
                            },
                            on: {
                              click: function (e) {
                                t.addSequenceWarningDialog = !1
                              },
                            },
                          },
                          [t._v(' Close ')]
                        ),
                        i(
                          'v-btn',
                          {
                            attrs: {
                              color: 'red darken-1',
                            },
                            on: {
                              click: function (e) {
                                return t.confirmDeletePositions()
                              },
                            },
                          },
                          [t._v(' Confirm ')]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            i(
              'v-dialog',
              {
                attrs: {
                  'max-width': '500',
                },
                model: {
                  value: t.addPositionWarningDialog,
                  callback: function (e) {
                    t.addPositionWarningDialog = e
                  },
                  expression: 'addPositionWarningDialog',
                },
              },
              [
                i(
                  'v-card',
                  [
                    i(
                      'div',
                      {
                        staticClass: 'headline p_10 bord_bot_lg',
                      },
                      [t._v('Warning !')]
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'p_10 bord_bot_lg',
                      },
                      [
                        i(
                          'p',
                          {
                            staticClass: 'mt-2 mb-2',
                          },
                          [
                            t._v('You have already added the '),
                            i('strong', [t._v('Sub Filter 1')]),
                            t._v(' under the '),
                            i(
                              'strong',
                              {
                                staticClass: 'text-upper',
                              },
                              [t._v('Sequence :')]
                            ),
                            t._v(' "'),
                            i('strong', [t._v(t._s(t.sequenceSelected))]),
                            t._v('" with the following options :'),
                          ]
                        ),
                        t._l(t.subSequenceList, function (e, s) {
                          return i(
                            'p',
                            {
                              key: 'subOpt' + s,
                              staticClass: 'ml-3 mb-0',
                            },
                            [t._v('\n          ' + t._s(e) + '\n        ')]
                          )
                        }),
                        i(
                          'p',
                          {
                            staticClass: 'mb-2 mt-2',
                          },
                          [
                            t._v(
                              "Please select any of the Sub Filter 1's option available to add the Position's option."
                            ),
                          ]
                        ),
                      ],
                      2
                    ),
                    i(
                      'v-card-actions',
                      [
                        i('div', {
                          staticClass: 'flex-grow-1',
                        }),
                        i(
                          'v-btn',
                          {
                            attrs: {
                              color: 'black darken-1',
                              text: '',
                            },
                            on: {
                              click: function (e) {
                                t.addPositionWarningDialog = !1
                              },
                            },
                          },
                          [t._v(' Close ')]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            i(
              'v-dialog',
              {
                attrs: {
                  'max-width': '500',
                },
                model: {
                  value: t.deleteOptionDialog,
                  callback: function (e) {
                    t.deleteOptionDialog = e
                  },
                  expression: 'deleteOptionDialog',
                },
              },
              [
                i(
                  'v-card',
                  [
                    i(
                      'div',
                      {
                        staticClass: 'headline p_10 bord_bot_lg',
                      },
                      [t._v('Delete options')]
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'p_10 bord_bot_lg',
                      },
                      [
                        i(
                          'p',
                          {
                            staticClass: 'mt-2 mb-2',
                          },
                          [
                            t._v('All the related combination below of '),
                            i(
                              'strong',
                              {
                                staticClass: 'text-upper',
                              },
                              [
                                t._v(
                                  '\n          ' +
                                    t._s(
                                      'subSequence' ==
                                        t.deletingOption['fromFilter'] ||
                                        'sub2Filter' ==
                                          t.deletingOption['fromFilter'] ||
                                        'position' ==
                                          t.deletingOption['fromFilter']
                                        ? 'subSequence' ==
                                          t.deletingOption['fromFilter']
                                          ? 'SUB FILTER 1'
                                          : 'sub2Filter' ==
                                            t.deletingOption['fromFilter']
                                          ? 'SUB FILTER 2'
                                          : 'ACTION'
                                        : t.deletingOption['fromFilter']
                                    ) +
                                    ' \n        :'
                                ),
                              ]
                            ),
                            t._v(
                              ' "' +
                                t._s(t.deletingOption.filterValue) +
                                '" will be deleted.'
                            ),
                          ]
                        ),
                        i(
                          'p',
                          {
                            staticClass: 'mb-2',
                          },
                          [t._v('Are you sure you want to delete it ?')]
                        ),
                      ]
                    ),
                    i(
                      'v-card-actions',
                      [
                        i('div', {
                          staticClass: 'flex-grow-1',
                        }),
                        i(
                          'v-btn',
                          {
                            attrs: {
                              color: 'black darken-1',
                              text: '',
                            },
                            on: {
                              click: function (e) {
                                return t.cancelDeleting()
                              },
                            },
                          },
                          [t._v(' Close ')]
                        ),
                        i(
                          'v-btn',
                          {
                            attrs: {
                              color: 'red darken-1',
                            },
                            on: {
                              click: function (e) {
                                return t.confirmDeleteOptions()
                              },
                            },
                          },
                          [t._v(' Delete ')]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            i(
              'v-dialog',
              {
                attrs: {
                  'max-width': '500',
                },
                model: {
                  value: t.deleteSingleOptionDialog,
                  callback: function (e) {
                    t.deleteSingleOptionDialog = e
                  },
                  expression: 'deleteSingleOptionDialog',
                },
              },
              [
                i(
                  'v-card',
                  [
                    i(
                      'div',
                      {
                        staticClass: 'headline p_10 bord_bot_lg',
                      },
                      [t._v('Delete options')]
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'p_10 bord_bot_lg',
                      },
                      [
                        i(
                          'p',
                          {
                            staticClass: 'mb-2',
                          },
                          [
                            t._v(
                              'Are you sure you want to delete currently added option '
                            ),
                            i('strong', [
                              t._v(t._s(t.deletingOption.filterValue)),
                            ]),
                            t._v(' from the '),
                            i('strong', [
                              t._v(
                                '\n          ' +
                                  t._s(
                                    'subSequence' ==
                                      t.deletingOption['fromFilter'] ||
                                      'sub2Filter' ==
                                        t.deletingOption['fromFilter'] ||
                                      'position' ==
                                        t.deletingOption['fromFilter']
                                      ? 'subSequence' ==
                                        t.deletingOption['fromFilter']
                                        ? 'SUB FILTER 1'
                                        : 'sub2Filter' ==
                                          t.deletingOption['fromFilter']
                                        ? 'SUB FILTER 2'
                                        : 'ACTION'
                                      : t.deletingOption['fromFilter']
                                  ) +
                                  ' \n          '
                              ),
                            ]),
                            t._v(
                              ' filter and the related combination below of it (if any) ?'
                            ),
                          ]
                        ),
                      ]
                    ),
                    i(
                      'v-card-actions',
                      [
                        i('div', {
                          staticClass: 'flex-grow-1',
                        }),
                        i(
                          'v-btn',
                          {
                            attrs: {
                              color: 'black darken-1',
                              text: '',
                            },
                            on: {
                              click: function (e) {
                                return t.cancelDeleting()
                              },
                            },
                          },
                          [t._v(' Close ')]
                        ),
                        i(
                          'v-btn',
                          {
                            attrs: {
                              color: 'red darken-1',
                            },
                            on: {
                              click: function (e) {
                                return t.startDeleteOption()
                              },
                            },
                          },
                          [t._v(' Delete ')]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            i(
              'v-dialog',
              {
                attrs: {
                  'max-width': '500',
                },
                model: {
                  value: t.showWarningDialog,
                  callback: function (e) {
                    t.showWarningDialog = e
                  },
                  expression: 'showWarningDialog',
                },
              },
              [
                i(
                  'v-card',
                  [
                    i(
                      'div',
                      {
                        staticClass: 'headline p_10 bord_bot_lg',
                      },
                      [t._v('Warning !')]
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'p_10 bord_bot_lg',
                      },
                      [
                        i(
                          'p',
                          {
                            staticClass: 'mt-2 mb-2',
                          },
                          [
                            t._v(
                              "You will loose all the currently selected combination of filter's option."
                            ),
                          ]
                        ),
                        i(
                          'p',
                          {
                            staticClass: 'mb-2',
                          },
                          [t._v('Please save it first or clear the selection.')]
                        ),
                      ]
                    ),
                    i(
                      'v-card-actions',
                      [
                        i('div', {
                          staticClass: 'flex-grow-1',
                        }),
                        i(
                          'v-btn',
                          {
                            attrs: {
                              color: 'black darken-1',
                              text: '',
                            },
                            on: {
                              click: function (e) {
                                t.showWarningDialog = !1
                              },
                            },
                          },
                          [t._v(' Close ')]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            i(
              'v-dialog',
              {
                attrs: {
                  'max-width': '500',
                },
                model: {
                  value: t.pasteDialog,
                  callback: function (e) {
                    t.pasteDialog = e
                  },
                  expression: 'pasteDialog',
                },
              },
              [
                i(
                  'v-card',
                  [
                    i(
                      'div',
                      {
                        staticClass: 'headline p_10 bord_bot_lg',
                      },
                      [t._v('Warning !')]
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'p_10 bord_bot_lg',
                      },
                      [
                        t.invalidPaste
                          ? i(
                              'p',
                              {
                                staticClass: 'mb-2 mt-2',
                              },
                              [
                                t._v(
                                  'You cannot paste same filter data in this filter.'
                                ),
                              ]
                            )
                          : i(
                              'p',
                              {
                                staticClass: 'mb-2 mt-2',
                              },
                              [
                                t._v(
                                  'Are you sure you want to copy data in current filter.'
                                ),
                              ]
                            ),
                      ]
                    ),
                    i(
                      'v-card-actions',
                      [
                        i('div', {
                          staticClass: 'flex-grow-1',
                        }),
                        i(
                          'v-btn',
                          {
                            attrs: {
                              color: 'black darken-1',
                              text: '',
                            },
                            on: {
                              click: function (e) {
                                ;(t.pasteDialog = !1), (t.invalidPaste = !1)
                              },
                            },
                          },
                          [t._v(' Close ')]
                        ),
                        t.invalidPaste
                          ? t._e()
                          : i(
                              'v-btn',
                              {
                                attrs: {
                                  color: 'red darken-1',
                                },
                                on: {
                                  click: function (e) {
                                    return t.confirmPasteFilter()
                                  },
                                },
                              },
                              [t._v(' Confirm ')]
                            ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            i(
              'div',
              {
                staticClass: 'mainContainer ht_100 ml-5 mt-60',
                on: {
                  '!click': function (e) {
                    return t.closeDrops(e)
                  },
                },
              },
              [
                i(
                  'p',
                  {
                    staticClass: 'fs25 mr-5',
                  },
                  [
                    i(
                      'v-btn',
                      {
                        attrs: {
                          icon: '',
                          text: '',
                          small: '',
                          to: '/asd4154er45ds',
                        },
                      },
                      [i('v-icon', [t._v('keyboard_backspace')])],
                      1
                    ),
                    t._v(' Add custom option(s) to filters : '),
                  ],
                  1
                ),
                i(
                  'div',
                  {
                    staticClass: 'd-flex align-center',
                  },
                  [
                    i('div', {
                      staticClass: 'flex-grow-1',
                    }),
                    i(
                      'v-btn',
                      {
                        staticClass: 'text-capitalize mr-10',
                        attrs: {
                          small: '',
                          depressed: '',
                          color: 'black darken-1',
                          text: '',
                        },
                        on: {
                          click: function (e) {
                            return t.clearAllFilters()
                          },
                        },
                      },
                      [t._v(' Clear Selection ')]
                    ),
                    i(
                      'v-btn',
                      {
                        staticClass: 'mr-10',
                        attrs: {
                          color: 'primary darken-1',
                          disabled: t.saveDisability(),
                          loading: t.startedSaving,
                        },
                        on: {
                          click: function (e) {
                            return t.saveData()
                          },
                        },
                      },
                      [t._v(' Save ')]
                    ),
                  ],
                  1
                ),
                i(
                  'div',
                  {
                    staticClass: ' mr-5',
                  },
                  [
                    i(
                      'div',
                      {
                        staticClass: 'flex-row-custom',
                      },
                      [
                        i(
                          'div',
                          {
                            staticClass: 'upperFilters flex-column-custom',
                            attrs: {
                              id: 'gameFilter',
                            },
                          },
                          [
                            t._m(0),
                            i(
                              'div',
                              {
                                staticClass:
                                  'customDrop bord_2 justifyBetween p_5_10',
                                class: {
                                  optionSelectedBackground: t.gameSelected,
                                },
                                on: {
                                  click: function (e) {
                                    return t.showDropOptions('Games')
                                  },
                                },
                              },
                              [
                                i(
                                  'span',
                                  {
                                    staticClass: 'text-upper',
                                  },
                                  [t._v(t._s(t.gameSelected))]
                                ),
                                t.showGames
                                  ? i(
                                      'v-icon',
                                      {
                                        staticClass: 'dropIcon',
                                      },
                                      [t._v('keyboard_arrow_up')]
                                    )
                                  : i(
                                      'v-icon',
                                      {
                                        staticClass: 'dropIcon',
                                      },
                                      [t._v('keyboard_arrow_down')]
                                    ),
                              ],
                              1
                            ),
                            t.showGames
                              ? i(
                                  'div',
                                  {
                                    staticClass: 'optionsBlock',
                                  },
                                  [
                                    t._l(t.gameList, function (e, s) {
                                      return i(
                                        'div',
                                        {
                                          key: 'game' + s,
                                          staticClass:
                                            'p_5_10 text-upper optionContainer',
                                        },
                                        [
                                          i(
                                            'span',
                                            {
                                              staticClass: 'optionName',
                                              on: {
                                                click: function (i) {
                                                  return t.selectGame(e)
                                                },
                                              },
                                            },
                                            [t._v(t._s(e))]
                                          ),
                                          i(
                                            'div',
                                            {
                                              staticClass:
                                                'd-flex flex-row-reverse',
                                            },
                                            [
                                              i(
                                                'v-icon',
                                                {
                                                  staticClass:
                                                    'deleteOption ms-1',
                                                  attrs: {
                                                    small: '',
                                                    color: 'grey darken-1',
                                                  },
                                                  on: {
                                                    click: function (i) {
                                                      t.deletePreparation(
                                                        'game',
                                                        e,
                                                        Math.abs(t.hashCode(e))
                                                      )
                                                    },
                                                  },
                                                },
                                                [t._v('delete')]
                                              ),
                                              0 !== s
                                                ? i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1',
                                                      attrs: {
                                                        id: 'moveUpOpt',
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.moveOption(
                                                            'up',
                                                            'game',
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('arrow_upward')]
                                                  )
                                                : t._e(),
                                              s !== t.gameList.length - 1
                                                ? i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1',
                                                      attrs: {
                                                        id: 'moveDownOpt',
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.moveOption(
                                                            'down',
                                                            'game',
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('arrow_downward')]
                                                  )
                                                : t._e(),
                                            ],
                                            1
                                          ),
                                        ]
                                      )
                                    }),
                                    i(
                                      'div',
                                      [
                                        i(
                                          'v-btn',
                                          {
                                            staticClass: 'bord_r_0',
                                            attrs: {
                                              id: 'addOptionBtn',
                                              block: '',
                                              depressed: '',
                                              color: 'grey lighten-1',
                                              elevation: '0',
                                            },
                                            nativeOn: {
                                              click: function (e) {
                                                return (
                                                  e.stopPropagation(),
                                                  t.addOptionsToFilter('game')
                                                )
                                              },
                                            },
                                          },
                                          [
                                            i(
                                              'v-icon',
                                              {
                                                staticClass: 'add-icon',
                                              },
                                              [t._v('add')]
                                            ),
                                            t._v('add option'),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  2
                                )
                              : t._e(),
                          ]
                        ),
                        i(
                          'div',
                          {
                            staticClass: 'upperFilters flex-column-custom',
                            attrs: {
                              id: 'casinoFilter',
                            },
                          },
                          [
                            t._m(1),
                            i(
                              'div',
                              {
                                staticClass:
                                  'customDrop bord_2 justifyBetween p_5_10',
                                class: {
                                  optionSelectedBackground: t.casinoSelected,
                                  disabledDropdown: !t.gameSelected,
                                },
                                on: {
                                  click: function (e) {
                                    t.gameSelected &&
                                      t.showDropOptions('Casinos')
                                  },
                                },
                              },
                              [
                                i(
                                  'span',
                                  {
                                    staticClass: 'text-upper',
                                  },
                                  [t._v(t._s(t.casinoSelected))]
                                ),
                                t.showCasinos
                                  ? i(
                                      'v-icon',
                                      {
                                        staticClass: 'dropIcon',
                                      },
                                      [t._v('keyboard_arrow_up')]
                                    )
                                  : i(
                                      'v-icon',
                                      {
                                        staticClass: 'dropIcon',
                                      },
                                      [t._v('keyboard_arrow_down')]
                                    ),
                              ],
                              1
                            ),
                            t.showCasinos
                              ? i(
                                  'div',
                                  {
                                    staticClass: 'optionsBlock',
                                  },
                                  [
                                    t._l(t.casinoList, function (e, s) {
                                      return i(
                                        'div',
                                        {
                                          key: 'casino' + s,
                                          staticClass:
                                            'p_5_10 text-upper optionContainer',
                                        },
                                        [
                                          i(
                                            'span',
                                            {
                                              staticClass: 'optionName',
                                              on: {
                                                click: function (i) {
                                                  return t.selectCasino(e)
                                                },
                                              },
                                            },
                                            [t._v(t._s(e))]
                                          ),
                                          i(
                                            'div',
                                            {
                                              staticClass:
                                                'd-flex flex-row-reverse',
                                            },
                                            [
                                              i(
                                                'v-icon',
                                                {
                                                  staticClass:
                                                    'deleteOption ms-1',
                                                  attrs: {
                                                    small: '',
                                                    color: 'grey darken-1',
                                                  },
                                                  on: {
                                                    click: function (i) {
                                                      return t.deletePreparation(
                                                        'casino',
                                                        e,
                                                        t.gameId
                                                      )
                                                    },
                                                  },
                                                },
                                                [t._v('delete')]
                                              ),
                                              0 !== s
                                                ? i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1',
                                                      attrs: {
                                                        id: 'moveUpOpt',
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.moveOption(
                                                            'up',
                                                            'casino',
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('arrow_upward')]
                                                  )
                                                : t._e(),
                                              s !== t.casinoList.length - 1
                                                ? i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1',
                                                      attrs: {
                                                        id: 'moveDownOpt',
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.moveOption(
                                                            'down',
                                                            'casino',
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('arrow_downward')]
                                                  )
                                                : t._e(),
                                            ],
                                            1
                                          ),
                                        ]
                                      )
                                    }),
                                    i(
                                      'div',
                                      [
                                        i(
                                          'v-btn',
                                          {
                                            staticClass: 'bord_r_0',
                                            attrs: {
                                              id: 'addOptionBtn',
                                              block: '',
                                              depressed: '',
                                              color: 'grey lighten-1',
                                              elevation: '0',
                                            },
                                            nativeOn: {
                                              click: function (e) {
                                                return t.addOptionsToFilter(
                                                  'casino'
                                                )
                                              },
                                            },
                                          },
                                          [
                                            i(
                                              'v-icon',
                                              {
                                                staticClass: 'add-icon',
                                              },
                                              [t._v('add')]
                                            ),
                                            t._v('add option'),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  2
                                )
                              : t._e(),
                          ]
                        ),
                        i(
                          'div',
                          {
                            staticClass: 'upperFilters flex-column-custom',
                            attrs: {
                              id: 'stakeFilter',
                            },
                          },
                          [
                            t._m(2),
                            i(
                              'div',
                              {
                                staticClass:
                                  'customDrop bord_2 justifyBetween p_5_10',
                                class: {
                                  optionSelectedBackground: t.stakeSelected,
                                  disabledDropdown: !t.casinoSelected,
                                },
                                on: {
                                  click: function (e) {
                                    t.casinoSelected &&
                                      t.showDropOptions('Stakes')
                                  },
                                },
                              },
                              [
                                i(
                                  'span',
                                  {
                                    staticClass: 'text-upper',
                                  },
                                  [t._v(t._s(t.stakeSelected))]
                                ),
                                t.showStakes
                                  ? i(
                                      'v-icon',
                                      {
                                        staticClass: 'dropIcon',
                                      },
                                      [t._v('keyboard_arrow_up')]
                                    )
                                  : i(
                                      'v-icon',
                                      {
                                        staticClass: 'dropIcon',
                                      },
                                      [t._v('keyboard_arrow_down')]
                                    ),
                              ],
                              1
                            ),
                            t.showStakes
                              ? i(
                                  'div',
                                  {
                                    staticClass: 'optionsBlock',
                                  },
                                  [
                                    t._l(t.stakeList, function (e, s) {
                                      return i(
                                        'div',
                                        {
                                          key: 'stake' + s,
                                          staticClass:
                                            'p_5_10 text-upper optionContainer',
                                        },
                                        [
                                          i(
                                            'span',
                                            {
                                              staticClass: 'optionName',
                                              on: {
                                                click: function (i) {
                                                  return t.selectStake(e)
                                                },
                                              },
                                            },
                                            [t._v(t._s(e))]
                                          ),
                                          i(
                                            'div',
                                            {
                                              staticClass:
                                                'd-flex flex-row-reverse',
                                            },
                                            [
                                              i(
                                                'v-icon',
                                                {
                                                  staticClass:
                                                    'deleteOption ms-1',
                                                  attrs: {
                                                    small: '',
                                                    color: 'grey darken-1',
                                                  },
                                                  on: {
                                                    click: function (i) {
                                                      return t.deletePreparation(
                                                        'stake',
                                                        e,
                                                        t.casinoId
                                                      )
                                                    },
                                                  },
                                                },
                                                [t._v('delete')]
                                              ),
                                              0 !== s
                                                ? i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1',
                                                      attrs: {
                                                        id: 'moveUpOpt',
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.moveOption(
                                                            'up',
                                                            'stake',
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('arrow_upward')]
                                                  )
                                                : t._e(),
                                              s !== t.stakeList.length - 1
                                                ? i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1',
                                                      attrs: {
                                                        id: 'moveDownOpt',
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.moveOption(
                                                            'down',
                                                            'stake',
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('arrow_downward')]
                                                  )
                                                : t._e(),
                                            ],
                                            1
                                          ),
                                        ]
                                      )
                                    }),
                                    i(
                                      'div',
                                      [
                                        i(
                                          'v-btn',
                                          {
                                            staticClass: 'bord_r_0',
                                            attrs: {
                                              id: 'addOptionBtn',
                                              block: '',
                                              depressed: '',
                                              color: 'grey lighten-1',
                                              elevation: '0',
                                            },
                                            nativeOn: {
                                              click: function (e) {
                                                return t.addOptionsToFilter(
                                                  'stake'
                                                )
                                              },
                                            },
                                          },
                                          [
                                            i(
                                              'v-icon',
                                              {
                                                staticClass: 'add-icon',
                                              },
                                              [t._v('add')]
                                            ),
                                            t._v('add option'),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  2
                                )
                              : t._e(),
                          ]
                        ),
                        i('div', {
                          staticClass: 'upperFilters flex-column-custom',
                          attrs: {
                            id: 'tempFilter',
                          },
                        }),
                      ]
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'flex-row-custom',
                      },
                      [
                        i(
                          'div',
                          {
                            staticClass: 'upperFilters flex-column-custom',
                            attrs: {
                              id: 'playerFilter',
                            },
                          },
                          [
                            t._m(3),
                            i(
                              'div',
                              {
                                staticClass:
                                  'customDrop bord_2 justifyBetween p_5_10',
                                class: {
                                  optionSelectedBackground: t.playersSelected,
                                  disabledDropdown: !t.stakeSelected,
                                },
                                on: {
                                  click: function (e) {
                                    t.stakeSelected &&
                                      t.showDropOptions('Players')
                                  },
                                },
                              },
                              [
                                i(
                                  'span',
                                  {
                                    staticClass: 'text-upper',
                                  },
                                  [t._v(t._s(t.playersSelected))]
                                ),
                                t.showPlayers
                                  ? i(
                                      'v-icon',
                                      {
                                        staticClass: 'dropIcon',
                                      },
                                      [t._v('keyboard_arrow_up')]
                                    )
                                  : i(
                                      'v-icon',
                                      {
                                        staticClass: 'dropIcon',
                                      },
                                      [t._v('keyboard_arrow_down')]
                                    ),
                              ],
                              1
                            ),
                            t.showPlayers
                              ? i(
                                  'div',
                                  {
                                    staticClass: 'optionsBlock',
                                  },
                                  [
                                    t._l(t.playersList, function (e, s) {
                                      return i(
                                        'div',
                                        {
                                          key: 'player' + s,
                                          staticClass:
                                            'p_5_10 text-upper optionContainer',
                                        },
                                        [
                                          i(
                                            'span',
                                            {
                                              staticClass: 'optionName',
                                              on: {
                                                click: function (i) {
                                                  return t.selectPlayers(e)
                                                },
                                              },
                                            },
                                            [t._v(t._s(e))]
                                          ),
                                          i(
                                            'div',
                                            {
                                              staticClass:
                                                'd-flex flex-row-reverse',
                                            },
                                            [
                                              i(
                                                'v-icon',
                                                {
                                                  staticClass:
                                                    'deleteOption ms-1',
                                                  attrs: {
                                                    small: '',
                                                    color: 'grey darken-1',
                                                  },
                                                  on: {
                                                    click: function (i) {
                                                      return t.copyFilterFunction(
                                                        'players',
                                                        e,
                                                        t.stakeId
                                                      )
                                                    },
                                                  },
                                                },
                                                [t._v('content_copy')]
                                              ),
                                              i(
                                                'v-icon',
                                                {
                                                  staticClass:
                                                    'deleteOption ms-1',
                                                  attrs: {
                                                    small: '',
                                                    color: 'grey darken-1',
                                                  },
                                                  on: {
                                                    click: function (i) {
                                                      return t.deletePreparation(
                                                        'players',
                                                        e,
                                                        t.stakeId
                                                      )
                                                    },
                                                  },
                                                },
                                                [t._v('delete')]
                                              ),
                                              0 !== s
                                                ? i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1',
                                                      attrs: {
                                                        id: 'moveUpOpt',
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.moveOption(
                                                            'up',
                                                            'players',
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('arrow_upward')]
                                                  )
                                                : t._e(),
                                              s !== t.playersList.length - 1
                                                ? i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1',
                                                      attrs: {
                                                        id: 'moveDownOpt',
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.moveOption(
                                                            'down',
                                                            'players',
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('arrow_downward')]
                                                  )
                                                : t._e(),
                                            ],
                                            1
                                          ),
                                        ]
                                      )
                                    }),
                                    i(
                                      'div',
                                      [
                                        i(
                                          'v-btn',
                                          {
                                            staticClass: 'bord_r_0',
                                            attrs: {
                                              id: 'addOptionBtn',
                                              block: '',
                                              depressed: '',
                                              color: 'grey lighten-1',
                                              elevation: '0',
                                            },
                                            nativeOn: {
                                              click: function (e) {
                                                return (
                                                  e.stopPropagation(),
                                                  t.addOptionsToFilter('player')
                                                )
                                              },
                                            },
                                          },
                                          [
                                            i(
                                              'v-icon',
                                              {
                                                staticClass: 'add-icon',
                                              },
                                              [t._v('add')]
                                            ),
                                            t._v('add option'),
                                          ],
                                          1
                                        ),
                                        t.copiedFilterData.players &&
                                        t.stakeId !=
                                          t.copiedFilterData.players.parentId
                                          ? i(
                                              'v-btn',
                                              {
                                                staticClass: 'bord_r_0',
                                                attrs: {
                                                  id: 'pasteOptionBtn',
                                                  block: '',
                                                  depressed: '',
                                                  color: 'grey lighten-1',
                                                  elevation: '0',
                                                },
                                                nativeOn: {
                                                  click: function (e) {
                                                    return (
                                                      e.stopPropagation(),
                                                      t.showPasteConfirmationDialog(
                                                        'players',
                                                        t.stakeId
                                                      )
                                                    )
                                                  },
                                                },
                                              },
                                              [
                                                i(
                                                  'v-icon',
                                                  {
                                                    staticClass: 'add-icon',
                                                  },
                                                  [t._v('content_paste')]
                                                ),
                                                t._v(
                                                  '\n                Paste Filter\n              '
                                                ),
                                              ],
                                              1
                                            )
                                          : t._e(),
                                      ],
                                      1
                                    ),
                                  ],
                                  2
                                )
                              : t._e(),
                          ]
                        ),
                        i(
                          'div',
                          {
                            staticClass: 'stackValue flex-column-custom',
                            attrs: {
                              id: 'defaultStackValue',
                            },
                          },
                          [
                            i('v-text-field', {
                              attrs: {
                                disabled: !t.playersSelected,
                                outlined: '',
                                height: '20',
                                label: 'Default Stack value',
                              },
                              on: {
                                input: function (e) {
                                  return t.defaultStackValueChange()
                                },
                              },
                              model: {
                                value: t.defaultStackValueMap[t.playersId],
                                callback: function (e) {
                                  t.$set(t.defaultStackValueMap, t.playersId, e)
                                },
                                expression: 'defaultStackValueMap[playersId]',
                              },
                            }),
                          ],
                          1
                        ),
                        i(
                          'div',
                          {
                            staticClass: 'upperFilters flex-column-custom',
                            attrs: {
                              id: 'sequenceFilter',
                            },
                          },
                          [
                            t._m(4),
                            i(
                              'div',
                              {
                                staticClass:
                                  'customDrop bord_2 justifyBetween p_5_10',
                                class: {
                                  optionSelectedBackground: t.sequenceSelected,
                                  disabledDropdown: !t.playersSelected,
                                },
                                on: {
                                  click: function (e) {
                                    t.playersSelected &&
                                      t.showDropOptions('Sequences')
                                  },
                                },
                              },
                              [
                                i(
                                  'span',
                                  {
                                    staticClass: 'text-upper',
                                  },
                                  [t._v(t._s(t.sequenceSelected))]
                                ),
                                t.showSequences
                                  ? i(
                                      'v-icon',
                                      {
                                        staticClass: 'dropIcon',
                                      },
                                      [t._v('keyboard_arrow_up')]
                                    )
                                  : i(
                                      'v-icon',
                                      {
                                        staticClass: 'dropIcon',
                                      },
                                      [t._v('keyboard_arrow_down')]
                                    ),
                              ],
                              1
                            ),
                            t.showSequences
                              ? i(
                                  'div',
                                  {
                                    staticClass: 'optionsBlock',
                                  },
                                  [
                                    t._l(t.sequenceList, function (e, s) {
                                      return i(
                                        'div',
                                        {
                                          key: 'sequence' + s,
                                          staticClass:
                                            'p_5_10 text-upper optionContainer',
                                        },
                                        [
                                          i(
                                            'span',
                                            {
                                              staticClass: 'optionName',
                                              on: {
                                                click: function (i) {
                                                  return t.selectSequence(e)
                                                },
                                              },
                                            },
                                            [t._v(t._s(e))]
                                          ),
                                          i(
                                            'div',
                                            {
                                              staticClass:
                                                'd-flex flex-row-reverse',
                                            },
                                            [
                                              i(
                                                'v-icon',
                                                {
                                                  staticClass:
                                                    'deleteOption ms-1',
                                                  attrs: {
                                                    small: '',
                                                    color: 'grey darken-1',
                                                  },
                                                  on: {
                                                    click: function (i) {
                                                      return t.copyFilterFunction(
                                                        'sequence',
                                                        e,
                                                        t.playersId
                                                      )
                                                    },
                                                  },
                                                },
                                                [t._v('content_copy')]
                                              ),
                                              i(
                                                'v-icon',
                                                {
                                                  staticClass:
                                                    'deleteOption ms-1',
                                                  attrs: {
                                                    small: '',
                                                    color: 'grey darken-1',
                                                  },
                                                  on: {
                                                    click: function (i) {
                                                      return t.deletePreparation(
                                                        'sequence',
                                                        e,
                                                        t.playersId
                                                      )
                                                    },
                                                  },
                                                },
                                                [t._v('delete')]
                                              ),
                                              0 !== s
                                                ? i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1',
                                                      attrs: {
                                                        id: 'moveUpOpt',
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.moveOption(
                                                            'up',
                                                            'sequence',
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('arrow_upward')]
                                                  )
                                                : t._e(),
                                              s !== t.sequenceList.length - 1
                                                ? i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1',
                                                      attrs: {
                                                        id: 'moveDownOpt',
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.moveOption(
                                                            'down',
                                                            'sequence',
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('arrow_downward')]
                                                  )
                                                : t._e(),
                                            ],
                                            1
                                          ),
                                        ]
                                      )
                                    }),
                                    i(
                                      'div',
                                      [
                                        i(
                                          'v-btn',
                                          {
                                            staticClass: 'bord_r_0',
                                            attrs: {
                                              id: 'addOptionBtn',
                                              block: '',
                                              depressed: '',
                                              color: 'grey lighten-1',
                                              elevation: '0',
                                            },
                                            nativeOn: {
                                              click: function (e) {
                                                return (
                                                  e.stopPropagation(),
                                                  t.addOptionsToFilter(
                                                    'sequence'
                                                  )
                                                )
                                              },
                                            },
                                          },
                                          [
                                            i(
                                              'v-icon',
                                              {
                                                staticClass: 'add-icon',
                                              },
                                              [t._v('add')]
                                            ),
                                            t._v('add option'),
                                          ],
                                          1
                                        ),
                                        t.copiedFilterData.sequence &&
                                        t.playersId !=
                                          t.copiedFilterData.sequence.parentId
                                          ? i(
                                              'v-btn',
                                              {
                                                staticClass: 'bord_r_0',
                                                attrs: {
                                                  id: 'pasteOptionBtn',
                                                  block: '',
                                                  depressed: '',
                                                  color: 'grey lighten-1',
                                                  elevation: '0',
                                                },
                                                nativeOn: {
                                                  click: function (e) {
                                                    return (
                                                      e.stopPropagation(),
                                                      t.showPasteConfirmationDialog(
                                                        'sequence',
                                                        t.playersId
                                                      )
                                                    )
                                                  },
                                                },
                                              },
                                              [
                                                i(
                                                  'v-icon',
                                                  {
                                                    staticClass: 'add-icon',
                                                  },
                                                  [t._v('content_paste')]
                                                ),
                                                t._v(
                                                  '\n                Paste Filter\n              '
                                                ),
                                              ],
                                              1
                                            )
                                          : t._e(),
                                      ],
                                      1
                                    ),
                                  ],
                                  2
                                )
                              : t._e(),
                          ]
                        ),
                        i('div', {
                          staticClass: 'upperFilters flex-column-custom',
                          attrs: {
                            id: 'tempFilter',
                          },
                        }),
                      ]
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'flex-row-custom',
                      },
                      [
                        i(
                          'div',
                          {
                            staticClass: 'upperFilters flex-column-custom',
                            attrs: {
                              id: 'subSequenceFilter',
                            },
                          },
                          [
                            t._m(5),
                            i(
                              'div',
                              {
                                staticClass:
                                  'customDrop bord_2 justifyBetween p_5_10',
                                class: {
                                  optionSelectedBackground:
                                    t.subSequenceSelected,
                                  disabledDropdown: !t.sequenceSelected,
                                },
                                on: {
                                  click: function (e) {
                                    t.sequenceSelected &&
                                      t.showDropOptions('SubSequences')
                                  },
                                },
                              },
                              [
                                i(
                                  'span',
                                  {
                                    staticClass: 'text-upper',
                                  },
                                  [t._v(t._s(t.subSequenceSelected))]
                                ),
                                t.showSubSequences
                                  ? i(
                                      'v-icon',
                                      {
                                        staticClass: 'dropIcon',
                                      },
                                      [t._v('keyboard_arrow_up')]
                                    )
                                  : i(
                                      'v-icon',
                                      {
                                        staticClass: 'dropIcon',
                                      },
                                      [t._v('keyboard_arrow_down')]
                                    ),
                              ],
                              1
                            ),
                            t.showSubSequences
                              ? i(
                                  'div',
                                  {
                                    staticClass: 'optionsBlock',
                                  },
                                  [
                                    t._l(t.subSequenceList, function (e, s) {
                                      return i(
                                        'div',
                                        {
                                          key: 'subSequence' + s,
                                          staticClass:
                                            'p_5_10 text-upper optionContainer',
                                        },
                                        [
                                          i(
                                            'span',
                                            {
                                              staticClass: 'optionName',
                                              on: {
                                                click: function (i) {
                                                  return t.selectSubSequence(e)
                                                },
                                              },
                                            },
                                            [t._v(t._s(e))]
                                          ),
                                          i(
                                            'div',
                                            {
                                              staticClass:
                                                'd-flex flex-row-reverse',
                                            },
                                            [
                                              i(
                                                'v-icon',
                                                {
                                                  staticClass:
                                                    'deleteOption ms-1',
                                                  attrs: {
                                                    small: '',
                                                    color: 'grey darken-1',
                                                  },
                                                  on: {
                                                    click: function (i) {
                                                      return t.deletePreparation(
                                                        'subSequence',
                                                        e,
                                                        t.sequenceId
                                                      )
                                                    },
                                                  },
                                                },
                                                [t._v('delete')]
                                              ),
                                              0 !== s
                                                ? i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1',
                                                      attrs: {
                                                        id: 'moveUpOpt',
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.moveOption(
                                                            'up',
                                                            'subSequence',
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('arrow_upward')]
                                                  )
                                                : t._e(),
                                              s !== t.subSequenceList.length - 1
                                                ? i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1',
                                                      attrs: {
                                                        id: 'moveDownOpt',
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.moveOption(
                                                            'down',
                                                            'subSequence',
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('arrow_downward')]
                                                  )
                                                : t._e(),
                                            ],
                                            1
                                          ),
                                        ]
                                      )
                                    }),
                                    i(
                                      'div',
                                      [
                                        i(
                                          'v-btn',
                                          {
                                            staticClass: 'bord_r_0',
                                            attrs: {
                                              id: 'addOptionBtn',
                                              block: '',
                                              depressed: '',
                                              color: 'grey lighten-1',
                                              elevation: '0',
                                            },
                                            nativeOn: {
                                              click: function (e) {
                                                return (
                                                  e.stopPropagation(),
                                                  t.addOptionsToFilter(
                                                    'subSequence'
                                                  )
                                                )
                                              },
                                            },
                                          },
                                          [
                                            i(
                                              'v-icon',
                                              {
                                                staticClass: 'add-icon',
                                              },
                                              [t._v('add')]
                                            ),
                                            t._v('add option'),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  2
                                )
                              : t._e(),
                          ]
                        ),
                        i(
                          'div',
                          {
                            staticClass: 'upperFilters flex-column-custom mt',
                            attrs: {
                              id: 'subSequenceTextField',
                            },
                          },
                          [
                            i('v-text-field', {
                              attrs: {
                                outlined: '',
                                disabled: !t.subSequenceSelected,
                                height: '27',
                                label: "Sub Filter 1's Name",
                              },
                              on: {
                                input: function (e) {
                                  return t.updateFilterTitlesAndHelperTextDebounced(
                                    {
                                      filterType: 'subSequence',
                                      dataType: 'title',
                                      value:
                                        t.filterTitles['subSequence'][
                                          t.sequenceId
                                        ],
                                      parentId: t.sequenceId,
                                      parentType: 'sequence',
                                    }
                                  )
                                },
                              },
                              model: {
                                value:
                                  t.filterTitles['subSequence'][t.sequenceId],
                                callback: function (e) {
                                  t.$set(
                                    t.filterTitles['subSequence'],
                                    t.sequenceId,
                                    e
                                  )
                                },
                                expression:
                                  "filterTitles['subSequence'][sequenceId]",
                              },
                            }),
                          ],
                          1
                        ),
                        i(
                          'div',
                          {
                            staticClass: 'upperFilters flex-column-custom',
                            attrs: {
                              id: 'positionFilter',
                            },
                          },
                          [
                            t._m(6),
                            i(
                              'div',
                              {
                                staticClass:
                                  'customDrop bord_2 justifyBetween p_5_10',
                                class: {
                                  optionSelectedBackground: t.positionSelected,
                                  disabledDropdown: !t.sequenceSelected,
                                },
                                on: {
                                  click: function (e) {
                                    ;(t.subSequenceSelected ||
                                      t.sequenceSelected) &&
                                      t.showDropOptions('Positions')
                                  },
                                },
                              },
                              [
                                i(
                                  'span',
                                  {
                                    staticClass: 'text-upper',
                                  },
                                  [t._v(t._s(t.positionSelected))]
                                ),
                                t.showPositions
                                  ? i(
                                      'v-icon',
                                      {
                                        staticClass: 'dropIcon',
                                      },
                                      [t._v('keyboard_arrow_up')]
                                    )
                                  : i(
                                      'v-icon',
                                      {
                                        staticClass: 'dropIcon',
                                      },
                                      [t._v('keyboard_arrow_down')]
                                    ),
                              ],
                              1
                            ),
                            t.showPositions
                              ? i(
                                  'div',
                                  {
                                    staticClass: 'optionsBlock',
                                  },
                                  [
                                    t._l(t.positionList, function (e, s) {
                                      return i(
                                        'div',
                                        {
                                          key: 'position' + s,
                                          staticClass:
                                            'p_5_10 text-upper optionContainer',
                                        },
                                        [
                                          i(
                                            'span',
                                            {
                                              staticClass: 'optionName',
                                              on: {
                                                click: function (i) {
                                                  return t.selectPosition(e)
                                                },
                                              },
                                            },
                                            [t._v(t._s(e))]
                                          ),
                                          i(
                                            'div',
                                            {
                                              staticClass:
                                                'd-flex flex-row-reverse',
                                            },
                                            [
                                              i(
                                                'v-icon',
                                                {
                                                  staticClass:
                                                    'deleteOption ms-1',
                                                  attrs: {
                                                    small: '',
                                                    color: 'grey darken-1',
                                                  },
                                                  on: {
                                                    click: function (i) {
                                                      t.subSequenceId &&
                                                      t.subSequenceList.length
                                                        ? t.deletePreparation(
                                                            'position',
                                                            e,
                                                            t.subSequenceId
                                                          )
                                                        : t.sequenceId &&
                                                          t.sequenceList
                                                            .length &&
                                                          t.deletePreparation(
                                                            'position',
                                                            e,
                                                            t.sequenceId
                                                          )
                                                    },
                                                  },
                                                },
                                                [t._v('delete')]
                                              ),
                                              0 !== s
                                                ? i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1',
                                                      attrs: {
                                                        id: 'moveUpOpt',
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.moveOption(
                                                            'up',
                                                            'position',
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('arrow_upward')]
                                                  )
                                                : t._e(),
                                              s !== t.positionList.length - 1
                                                ? i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1',
                                                      attrs: {
                                                        id: 'moveDownOpt',
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.moveOption(
                                                            'down',
                                                            'position',
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('arrow_downward')]
                                                  )
                                                : t._e(),
                                            ],
                                            1
                                          ),
                                        ]
                                      )
                                    }),
                                    i(
                                      'div',
                                      [
                                        i(
                                          'v-btn',
                                          {
                                            staticClass: 'bord_r_0',
                                            attrs: {
                                              id: 'addOptionBtn',
                                              block: '',
                                              depressed: '',
                                              color: 'grey lighten-1',
                                              elevation: '0',
                                            },
                                            nativeOn: {
                                              click: function (e) {
                                                return (
                                                  e.stopPropagation(),
                                                  t.addOptionsToFilter(
                                                    'position'
                                                  )
                                                )
                                              },
                                            },
                                          },
                                          [
                                            i(
                                              'v-icon',
                                              {
                                                staticClass: 'add-icon',
                                              },
                                              [t._v('add')]
                                            ),
                                            t._v('add option'),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  2
                                )
                              : t._e(),
                          ]
                        ),
                        i(
                          'div',
                          {
                            staticClass: 'upperFilters flex-column-custom mt',
                            attrs: {
                              id: 'positionTextField',
                            },
                          },
                          [
                            t.subSequenceSelected
                              ? i('v-text-field', {
                                  attrs: {
                                    outlined: '',
                                    disabled: !t.positionSelected,
                                    height: '27',
                                    label: "Actions's Name",
                                  },
                                  on: {
                                    input: function (e) {
                                      return t.updateFilterTitlesAndHelperTextDebounced(
                                        {
                                          filterType: 'action',
                                          dataType: 'title',
                                          value:
                                            t.filterTitles['action'][
                                              t.subSequenceId
                                            ],
                                          parentId: t.subSequenceId,
                                          parentType: 'subSequence',
                                        }
                                      )
                                    },
                                  },
                                  model: {
                                    value:
                                      t.filterTitles['action'][t.subSequenceId],
                                    callback: function (e) {
                                      t.$set(
                                        t.filterTitles['action'],
                                        t.subSequenceId,
                                        e
                                      )
                                    },
                                    expression:
                                      "filterTitles['action'][subSequenceId]",
                                  },
                                })
                              : t.sequenceSelected
                              ? i('v-text-field', {
                                  attrs: {
                                    outlined: '',
                                    disabled: !t.positionSelected,
                                    height: '27',
                                    label: "Actions's Name",
                                  },
                                  on: {
                                    input: function (e) {
                                      return t.updateFilterTitlesAndHelperTextDebounced(
                                        {
                                          filterType: 'action',
                                          dataType: 'title',
                                          value:
                                            t.filterTitles['action'][
                                              t.sequenceId
                                            ],
                                          parentId: t.sequenceId,
                                          parentType: 'sequence',
                                        }
                                      )
                                    },
                                  },
                                  model: {
                                    value:
                                      t.filterTitles['action'][t.sequenceId],
                                    callback: function (e) {
                                      t.$set(
                                        t.filterTitles['action'],
                                        t.sequenceId,
                                        e
                                      )
                                    },
                                    expression:
                                      "filterTitles['action'][sequenceId]",
                                  },
                                })
                              : t._e(),
                          ],
                          1
                        ),
                      ]
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'flex-row-custom',
                      },
                      [
                        i(
                          'div',
                          {
                            staticClass: 'upperFilters flex-column-custom',
                            attrs: {
                              id: 'sub2Filter',
                            },
                          },
                          [
                            t._m(7),
                            i(
                              'div',
                              {
                                staticClass:
                                  'customDrop bord_2 justifyBetween p_5_10',
                                class: {
                                  optionSelectedBackground:
                                    t.sub2FilterSelected,
                                  disabledDropdown: !t.positionSelected,
                                },
                                on: {
                                  click: function (e) {
                                    t.positionSelected &&
                                      t.showDropOptions('Sub2Filters')
                                  },
                                },
                              },
                              [
                                i(
                                  'span',
                                  {
                                    staticClass: 'text-upper',
                                  },
                                  [t._v(t._s(t.sub2FilterSelected))]
                                ),
                                t.showSub2Filters
                                  ? i(
                                      'v-icon',
                                      {
                                        staticClass: 'dropIcon',
                                      },
                                      [t._v('keyboard_arrow_up')]
                                    )
                                  : i(
                                      'v-icon',
                                      {
                                        staticClass: 'dropIcon',
                                      },
                                      [t._v('keyboard_arrow_down')]
                                    ),
                              ],
                              1
                            ),
                            t.showSub2Filters
                              ? i(
                                  'div',
                                  {
                                    staticClass: 'optionsBlock',
                                  },
                                  [
                                    t._l(t.sub2FilterList, function (e, s) {
                                      return i(
                                        'div',
                                        {
                                          key: 'sub2Filter' + s,
                                          staticClass:
                                            'p_5_10 text-upper optionContainer',
                                        },
                                        [
                                          i(
                                            'span',
                                            {
                                              staticClass: 'optionName',
                                              on: {
                                                click: function (i) {
                                                  return t.selectSub2Filter(e)
                                                },
                                              },
                                            },
                                            [t._v(t._s(e))]
                                          ),
                                          i(
                                            'div',
                                            {
                                              staticClass:
                                                'd-flex flex-row-reverse',
                                            },
                                            [
                                              i(
                                                'v-icon',
                                                {
                                                  staticClass:
                                                    'deleteOption ms-1',
                                                  attrs: {
                                                    small: '',
                                                    color: 'grey darken-1',
                                                  },
                                                  on: {
                                                    click: function (i) {
                                                      return t.deletePreparation(
                                                        'sub2Filter',
                                                        e,
                                                        t.positionId
                                                      )
                                                    },
                                                  },
                                                },
                                                [t._v('delete')]
                                              ),
                                              0 !== s
                                                ? i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1',
                                                      attrs: {
                                                        id: 'moveUpOpt',
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.moveOption(
                                                            'up',
                                                            'sub2Filter',
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('arrow_upward')]
                                                  )
                                                : t._e(),
                                              s !== t.sub2FilterList.length - 1
                                                ? i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1',
                                                      attrs: {
                                                        id: 'moveDownOpt',
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.moveOption(
                                                            'down',
                                                            'sub2Filter',
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('arrow_downward')]
                                                  )
                                                : t._e(),
                                            ],
                                            1
                                          ),
                                        ]
                                      )
                                    }),
                                    i(
                                      'div',
                                      [
                                        i(
                                          'v-btn',
                                          {
                                            staticClass: 'bord_r_0',
                                            attrs: {
                                              id: 'addOptionBtn',
                                              block: '',
                                              depressed: '',
                                              color: 'grey lighten-1',
                                              elevation: '0',
                                            },
                                            nativeOn: {
                                              click: function (e) {
                                                return (
                                                  e.stopPropagation(),
                                                  t.addOptionsToFilter(
                                                    'sub2Filter'
                                                  )
                                                )
                                              },
                                            },
                                          },
                                          [
                                            i(
                                              'v-icon',
                                              {
                                                staticClass: 'add-icon',
                                              },
                                              [t._v('add')]
                                            ),
                                            t._v('add option'),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  2
                                )
                              : t._e(),
                          ]
                        ),
                        i(
                          'div',
                          {
                            staticClass: 'upperFilters flex-column-custom mt',
                            attrs: {
                              id: 'sub2FilterTextField',
                            },
                          },
                          [
                            i('v-text-field', {
                              attrs: {
                                outlined: '',
                                disabled: !t.sub2FilterSelected,
                                height: '27',
                                label: "Sub Filter 2's Name",
                              },
                              on: {
                                input: function (e) {
                                  return t.updateFilterTitlesAndHelperTextDebounced(
                                    {
                                      filterType: 'sub2Filter',
                                      dataType: 'title',
                                      value:
                                        t.filterTitles['sub2Filter'][
                                          t.positionId
                                        ],
                                      parentId: t.positionId,
                                      parentType: 'action',
                                    }
                                  )
                                },
                              },
                              model: {
                                value:
                                  t.filterTitles['sub2Filter'][t.positionId],
                                callback: function (e) {
                                  t.$set(
                                    t.filterTitles['sub2Filter'],
                                    t.positionId,
                                    e
                                  )
                                },
                                expression:
                                  "filterTitles['sub2Filter'][positionId]",
                              },
                            }),
                          ],
                          1
                        ),
                        i('div', {
                          staticClass: 'upperFilters flex-column-custom',
                          attrs: {
                            id: 'tempFilter',
                          },
                        }),
                        i('div', {
                          staticClass: 'upperFilters flex-column-custom',
                          attrs: {
                            id: 'tempFilter',
                          },
                        }),
                      ]
                    ),
                    i('div', {
                      staticClass: 'upperFilters',
                      attrs: {
                        id: 'tempFilter',
                      },
                    }),
                  ]
                ),
                i('div', {
                  staticClass: 'flex-row-custom',
                }),
                i('div', {
                  staticClass: 'flex-row-custom',
                }),
                i('div', {
                  staticClass: 'flex-row-custom',
                }),
                i(
                  'div',
                  {
                    staticClass: ' mt-10 nameContainer',
                  },
                  [
                    i(
                      'div',
                      {
                        staticClass: 'flex-row-custom',
                      },
                      [
                        i(
                          'div',
                          {
                            staticClass: 'upperFilters flex-column-custom  ',
                            attrs: {
                              id: 'sub3Filter',
                            },
                          },
                          [
                            t._m(8),
                            i(
                              'div',
                              {
                                staticClass:
                                  'customDrop bord_2 justifyBetween p_5_10',
                                class: {
                                  optionSelectedBackground:
                                    t.sub3FilterSelected,
                                  disabledDropdown: !t.sub2FilterSelected,
                                },
                                on: {
                                  click: function (e) {
                                    t.sub2FilterSelected &&
                                      t.showDropOptions('Sub3Filters')
                                  },
                                },
                              },
                              [
                                i(
                                  'span',
                                  {
                                    staticClass: 'text-upper',
                                  },
                                  [t._v(t._s(t.sub3FilterSelected))]
                                ),
                                t.showSub3Filters
                                  ? i(
                                      'v-icon',
                                      {
                                        staticClass: 'dropIcon',
                                      },
                                      [t._v('keyboard_arrow_up')]
                                    )
                                  : i(
                                      'v-icon',
                                      {
                                        staticClass: 'dropIcon',
                                      },
                                      [t._v('keyboard_arrow_down')]
                                    ),
                              ],
                              1
                            ),
                            t.showSub3Filters
                              ? i(
                                  'div',
                                  {
                                    staticClass: 'optionsBlock',
                                  },
                                  [
                                    t._l(t.sub3FilterList, function (e, s) {
                                      return i(
                                        'div',
                                        {
                                          key: 'sub3Filter' + s,
                                          staticClass:
                                            'p_5_10 text-upper optionContainer',
                                        },
                                        [
                                          i(
                                            'span',
                                            {
                                              staticClass: 'optionName',
                                              on: {
                                                click: function (i) {
                                                  return t.selectSub3Filter(e)
                                                },
                                              },
                                            },
                                            [t._v(t._s(e))]
                                          ),
                                          i(
                                            'div',
                                            {
                                              staticClass:
                                                'd-flex flex-row-reverse',
                                            },
                                            [
                                              i(
                                                'v-icon',
                                                {
                                                  staticClass:
                                                    'deleteOption ms-1',
                                                  attrs: {
                                                    small: '',
                                                    color: 'grey darken-1',
                                                  },
                                                  on: {
                                                    click: function (i) {
                                                      return t.deletePreparation(
                                                        'sub3Filter',
                                                        e,
                                                        t.sub2FilterId
                                                      )
                                                    },
                                                  },
                                                },
                                                [t._v('delete')]
                                              ),
                                              0 !== s
                                                ? i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1',
                                                      attrs: {
                                                        id: 'moveUpOpt',
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.moveOption(
                                                            'up',
                                                            'sub3Filter',
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('arrow_upward')]
                                                  )
                                                : t._e(),
                                              s !== t.sub3FilterList.length - 1
                                                ? i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1',
                                                      attrs: {
                                                        id: 'moveDownOpt',
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.moveOption(
                                                            'down',
                                                            'sub3Filter',
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('arrow_downward')]
                                                  )
                                                : t._e(),
                                            ],
                                            1
                                          ),
                                        ]
                                      )
                                    }),
                                    i(
                                      'div',
                                      [
                                        i(
                                          'v-btn',
                                          {
                                            staticClass: 'bord_r_0',
                                            attrs: {
                                              id: 'addOptionBtn',
                                              block: '',
                                              depressed: '',
                                              color: 'grey lighten-1',
                                              elevation: '0',
                                            },
                                            nativeOn: {
                                              click: function (e) {
                                                return (
                                                  e.stopPropagation(),
                                                  t.addOptionsToFilter(
                                                    'sub3Filter'
                                                  )
                                                )
                                              },
                                            },
                                          },
                                          [
                                            i(
                                              'v-icon',
                                              {
                                                staticClass: 'add-icon',
                                              },
                                              [t._v('add')]
                                            ),
                                            t._v('add option'),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  2
                                )
                              : t._e(),
                          ]
                        ),
                        t.sub3FilterSelected
                          ? i(
                              'div',
                              {
                                staticClass:
                                  'upperFilters flex-column-custom  mt',
                                attrs: {
                                  id: 'sub3FilterTextField',
                                },
                              },
                              [
                                i('v-text-field', {
                                  attrs: {
                                    outlined: '',
                                    disabled: !t.sub3FilterSelected,
                                    height: '27',
                                    label: "Sub Filter 3's Name",
                                  },
                                  on: {
                                    input: function (e) {
                                      return t.updateFilterTitlesAndHelperTextDebounced(
                                        {
                                          filterType: 'sub3Filter',
                                          dataType: 'title',
                                          value:
                                            t.filterTitles['sub3Filter'][
                                              t.sub2FilterId
                                            ],
                                          parentId: t.sub2FilterId,
                                          parentType: 'sub2Filter',
                                        }
                                      )
                                    },
                                  },
                                  model: {
                                    value:
                                      t.filterTitles['sub3Filter'][
                                        t.sub2FilterId
                                      ],
                                    callback: function (e) {
                                      t.$set(
                                        t.filterTitles['sub3Filter'],
                                        t.sub2FilterId,
                                        e
                                      )
                                    },
                                    expression:
                                      "filterTitles['sub3Filter'][sub2FilterId]",
                                  },
                                }),
                              ],
                              1
                            )
                          : i('div', {
                              staticClass: 'upperFilters flex-column-custom',
                              attrs: {
                                id: 'tempFilter',
                              },
                            }),
                        i('div', {
                          staticClass: 'upperFilters flex-column-custom',
                          attrs: {
                            id: 'tempFilter',
                          },
                        }),
                        i('div', {
                          staticClass: 'upperFilters flex-column-custom',
                          attrs: {
                            id: 'tempFilter',
                          },
                        }),
                      ]
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'flex-row-custom',
                      },
                      [
                        i(
                          'div',
                          {
                            staticClass: 'upperFilters flex-column-custom',
                            attrs: {
                              id: 'reactionFilter',
                            },
                          },
                          [
                            t._m(9),
                            i(
                              'div',
                              {
                                staticClass:
                                  'customDrop bord_2 justifyBetween p_5_10',
                                class: {
                                  optionSelectedBackground: t.reactionSelected,
                                  disabledDropdown: !t.positionSelected,
                                },
                                on: {
                                  click: function (e) {
                                    t.positionSelected &&
                                      t.showDropOptions('Reactions')
                                  },
                                },
                              },
                              [
                                i(
                                  'span',
                                  {
                                    staticClass: 'text-upper',
                                  },
                                  [t._v(t._s(t.reactionSelected))]
                                ),
                                t.showReactions
                                  ? i(
                                      'v-icon',
                                      {
                                        staticClass: 'dropIcon',
                                      },
                                      [t._v('keyboard_arrow_up')]
                                    )
                                  : i(
                                      'v-icon',
                                      {
                                        staticClass: 'dropIcon',
                                      },
                                      [t._v('keyboard_arrow_down')]
                                    ),
                              ],
                              1
                            ),
                            t.showReactions
                              ? i(
                                  'div',
                                  {
                                    staticClass: 'optionsBlock',
                                  },
                                  [
                                    t._l(t.reactionList, function (e, s) {
                                      return i(
                                        'div',
                                        {
                                          key: 'reaction' + s,
                                          staticClass:
                                            'p_5_10 text-upper optionContainer',
                                        },
                                        [
                                          i(
                                            'span',
                                            {
                                              staticClass: 'optionName',
                                              on: {
                                                click: function (i) {
                                                  return t.selectReaction(e)
                                                },
                                              },
                                            },
                                            [t._v(t._s(e))]
                                          ),
                                          i(
                                            'div',
                                            {
                                              staticClass:
                                                'd-flex flex-row-reverse',
                                            },
                                            [
                                              i(
                                                'v-icon',
                                                {
                                                  staticClass:
                                                    'deleteOption ms-1',
                                                  attrs: {
                                                    small: '',
                                                    color: 'grey darken-1',
                                                  },
                                                  on: {
                                                    click: function (i) {
                                                      return t.deletePreparation(
                                                        'reaction',
                                                        e,
                                                        t.sub3FilterId ||
                                                          t.sub2FilterId ||
                                                          t.positionId
                                                      )
                                                    },
                                                  },
                                                },
                                                [t._v('delete')]
                                              ),
                                              0 !== s
                                                ? i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1',
                                                      attrs: {
                                                        id: 'moveUpOpt',
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.moveOption(
                                                            'up',
                                                            'reaction',
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('arrow_upward')]
                                                  )
                                                : t._e(),
                                              s !== t.reactionList.length - 1
                                                ? i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1',
                                                      attrs: {
                                                        id: 'moveDownOpt',
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.moveOption(
                                                            'down',
                                                            'reaction',
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('arrow_downward')]
                                                  )
                                                : t._e(),
                                            ],
                                            1
                                          ),
                                        ]
                                      )
                                    }),
                                    i(
                                      'div',
                                      [
                                        i(
                                          'v-btn',
                                          {
                                            staticClass: 'bord_r_0',
                                            attrs: {
                                              id: 'addOptionBtn',
                                              block: '',
                                              depressed: '',
                                              color: 'grey lighten-1',
                                              elevation: '0',
                                            },
                                            nativeOn: {
                                              click: function (e) {
                                                return (
                                                  e.stopPropagation(),
                                                  t.addOptionsToFilter(
                                                    'reaction'
                                                  )
                                                )
                                              },
                                            },
                                          },
                                          [
                                            i(
                                              'v-icon',
                                              {
                                                staticClass: 'add-icon',
                                              },
                                              [t._v('add')]
                                            ),
                                            t._v('add option'),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  2
                                )
                              : t._e(),
                          ]
                        ),
                        t.reactionSelected
                          ? i(
                              'div',
                              {
                                staticClass: 'upperFilters flex-column-custom',
                                attrs: {
                                  id: 'reactionTextField',
                                },
                              },
                              [
                                t.sub3FilterSelected
                                  ? i('v-text-field', {
                                      attrs: {
                                        outlined: '',
                                        disabled: !t.reactionSelected,
                                        height: '27',
                                        label: "Reaction's Name",
                                      },
                                      on: {
                                        input: function (e) {
                                          return t.updateFilterTitlesAndHelperTextDebounced(
                                            {
                                              filterType: 'reaction',
                                              dataType: 'title',
                                              value:
                                                t.filterTitles['reaction'][
                                                  t.sub2FilterId
                                                ],
                                              parentId: t.sub2FilterId,
                                              parentType: 'sub2Filter',
                                              parentInfo: {
                                                currentParent: 'subfilter3',
                                                parentId: t.sub3FilterId,
                                              },
                                            }
                                          )
                                        },
                                      },
                                      model: {
                                        value:
                                          t.filterTitles['reaction'][
                                            t.sub2FilterId
                                          ],
                                        callback: function (e) {
                                          t.$set(
                                            t.filterTitles['reaction'],
                                            t.sub2FilterId,
                                            e
                                          )
                                        },
                                        expression:
                                          "filterTitles['reaction'][sub2FilterId]",
                                      },
                                    })
                                  : i('v-text-field', {
                                      attrs: {
                                        outlined: '',
                                        disabled: !t.reactionSelected,
                                        height: '27',
                                        label: "Reaction's Name",
                                      },
                                      on: {
                                        input: function (e) {
                                          return t.updateFilterTitlesAndHelperTextDebounced(
                                            {
                                              filterType: 'reaction',
                                              dataType: 'title',
                                              value:
                                                t.filterTitles['reaction'][
                                                  t.sub2FilterId
                                                ],
                                              parentId: t.sub2FilterId,
                                              parentType: 'sub2Filter',
                                            }
                                          )
                                        },
                                      },
                                      model: {
                                        value:
                                          t.filterTitles['reaction'][
                                            t.sub2FilterId
                                          ],
                                        callback: function (e) {
                                          t.$set(
                                            t.filterTitles['reaction'],
                                            t.sub2FilterId,
                                            e
                                          )
                                        },
                                        expression:
                                          "filterTitles['reaction'][sub2FilterId]",
                                      },
                                    }),
                              ],
                              1
                            )
                          : i('div', {
                              staticClass: 'flex-column-custom',
                            }),
                        i('div', {
                          staticClass: 'upperFilters flex-column-custom',
                          attrs: {
                            id: 'tempFilter',
                          },
                        }),
                        i('div', {
                          staticClass: 'upperFilters flex-column-custom',
                          attrs: {
                            id: 'tempFilter',
                          },
                        }),
                      ]
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'flex-row-custom',
                      },
                      [
                        i(
                          'div',
                          {
                            staticClass: 'upperFilters flex-column-custom',
                            attrs: {
                              id: 'stackFilter',
                            },
                          },
                          [
                            t._m(10),
                            i(
                              'div',
                              {
                                staticClass:
                                  'customDrop bord_2 justifyBetween p_5_10',
                                class: {
                                  optionSelectedBackground: t.stackSelected,
                                  disabledDropdown:
                                    !t.positionSelected ||
                                    (t.sub2FilterSelected &&
                                      !t.reactionSelected),
                                },
                                on: {
                                  click: function (e) {
                                    ;(t.positionSelected ||
                                      t.reactionSelected) &&
                                      t.showDropOptions('Stacks')
                                  },
                                },
                              },
                              [
                                i(
                                  'span',
                                  {
                                    staticClass: 'text-upper',
                                  },
                                  [t._v(t._s(t.stackSelected))]
                                ),
                                t.showPositions
                                  ? i(
                                      'v-icon',
                                      {
                                        staticClass: 'dropIcon',
                                      },
                                      [t._v('keyboard_arrow_up')]
                                    )
                                  : i(
                                      'v-icon',
                                      {
                                        staticClass: 'dropIcon',
                                      },
                                      [t._v('keyboard_arrow_down')]
                                    ),
                              ],
                              1
                            ),
                            t.showStacks
                              ? i(
                                  'div',
                                  {
                                    staticClass: 'optionsBlock',
                                  },
                                  [
                                    t._l(t.stackList, function (e, s) {
                                      return i(
                                        'div',
                                        {
                                          key: 'stack' + s,
                                          staticClass:
                                            'p_5_10 text-upper optionContainer',
                                        },
                                        [
                                          i(
                                            'span',
                                            {
                                              staticClass: 'optionName',
                                              on: {
                                                click: function (i) {
                                                  return t.selectStack(e)
                                                },
                                              },
                                            },
                                            [t._v(t._s(e))]
                                          ),
                                          i(
                                            'div',
                                            {
                                              staticClass:
                                                'd-flex flex-row-reverse',
                                            },
                                            [
                                              i(
                                                'v-icon',
                                                {
                                                  staticClass:
                                                    'deleteOption ms-1',
                                                  attrs: {
                                                    small: '',
                                                    color: 'grey darken-1',
                                                  },
                                                  on: {
                                                    click: function (i) {
                                                      t.reactionId &&
                                                      t.reactionList.length
                                                        ? t.deletePreparation(
                                                            'stack',
                                                            e,
                                                            t.reactionId
                                                          )
                                                        : t.positionId &&
                                                          t.positionList
                                                            .length &&
                                                          t.deletePreparation(
                                                            'stack',
                                                            e,
                                                            t.positionId
                                                          )
                                                    },
                                                  },
                                                },
                                                [t._v('delete')]
                                              ),
                                              0 !== s
                                                ? i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1',
                                                      attrs: {
                                                        id: 'moveUpOpt',
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.moveOption(
                                                            'up',
                                                            'stack',
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('arrow_upward')]
                                                  )
                                                : t._e(),
                                              s !== t.stackList.length - 1
                                                ? i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1',
                                                      attrs: {
                                                        id: 'moveDownOpt',
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.moveOption(
                                                            'down',
                                                            'stack',
                                                            e
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('arrow_downward')]
                                                  )
                                                : t._e(),
                                            ],
                                            1
                                          ),
                                        ]
                                      )
                                    }),
                                    i(
                                      'div',
                                      [
                                        i(
                                          'v-btn',
                                          {
                                            staticClass: 'bord_r_0',
                                            attrs: {
                                              id: 'addOptionBtn',
                                              block: '',
                                              depressed: '',
                                              color: 'grey lighten-1',
                                              elevation: '0',
                                            },
                                            nativeOn: {
                                              click: function (e) {
                                                return (
                                                  e.stopPropagation(),
                                                  t.addOptionsToFilter('stack')
                                                )
                                              },
                                            },
                                          },
                                          [
                                            i(
                                              'v-icon',
                                              {
                                                staticClass: 'add-icon',
                                              },
                                              [t._v('add')]
                                            ),
                                            t._v('add option'),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  2
                                )
                              : t._e(),
                          ]
                        ),
                        t.stackSelected
                          ? i(
                              'div',
                              {
                                staticClass: 'flex-column-custom',
                                attrs: {
                                  id: 'stackChildTextField',
                                },
                              },
                              [
                                i('v-text-field', {
                                  attrs: {
                                    outlined: '',
                                    height: '27',
                                    label: "Stack Child's Name",
                                  },
                                  on: {
                                    input: function (e) {
                                      return t.updateFilterTitlesAndHelperTextDebounced(
                                        {
                                          filterType: 'stackChild',
                                          dataType: 'title',
                                          value:
                                            t.filterTitles['stackChild'][
                                              t.stackId
                                            ],
                                          parentId: t.stackId,
                                          parentType: 'stack',
                                        }
                                      )
                                    },
                                  },
                                  model: {
                                    value:
                                      t.filterTitles['stackChild'][t.stackId],
                                    callback: function (e) {
                                      t.$set(
                                        t.filterTitles['stackChild'],
                                        t.stackId,
                                        e
                                      )
                                    },
                                    expression:
                                      "filterTitles['stackChild'][stackId]",
                                  },
                                }),
                              ],
                              1
                            )
                          : i('div', {
                              staticClass: 'flex-column-custom',
                            }),
                        t.stackSelected
                          ? i(
                              'div',
                              {
                                staticClass: 'upperFilters flex-column-custom',
                                attrs: {
                                  id: 'stackChildFilter',
                                },
                              },
                              [
                                i(
                                  'p',
                                  {
                                    staticClass: 'text-upper mb5',
                                  },
                                  [
                                    i('strong', [
                                      t._v(
                                        t._s(
                                          t.filterTitles['stackChild'][
                                            t.stackId
                                          ] || t.stackChildName[t.stackId]
                                        ) + '  '
                                      ),
                                    ]),
                                  ]
                                ),
                                i(
                                  'div',
                                  {
                                    staticClass:
                                      'customDrop bord_2 justifyBetween p_5_10',
                                    class: {
                                      optionSelectedBackground:
                                        t.stackChildSelected,
                                      disabledDropdown:
                                        !t.stackSelected ||
                                        (!t.filterTitles['stackChild'][
                                          t.stackId
                                        ] &&
                                          !t.stackChildName[t.stackId]),
                                    },
                                    on: {
                                      click: function (e) {
                                        t.stackSelected &&
                                          t.showDropOptions('StackChilds')
                                      },
                                    },
                                  },
                                  [
                                    i(
                                      'span',
                                      {
                                        staticClass: 'text-upper',
                                      },
                                      [t._v(t._s(t.stackChildSelected))]
                                    ),
                                    t.showPositions
                                      ? i(
                                          'v-icon',
                                          {
                                            staticClass: 'dropIcon',
                                          },
                                          [t._v('keyboard_arrow_up')]
                                        )
                                      : i(
                                          'v-icon',
                                          {
                                            staticClass: 'dropIcon',
                                          },
                                          [t._v('keyboard_arrow_down')]
                                        ),
                                  ],
                                  1
                                ),
                                t.showStackChilds
                                  ? i(
                                      'div',
                                      {
                                        staticClass: 'optionsBlock',
                                      },
                                      [
                                        t._l(t.stackChildList, function (e, s) {
                                          return i(
                                            'div',
                                            {
                                              key: 'stackChild' + s,
                                              staticClass:
                                                'p_5_10 text-upper optionContainer',
                                            },
                                            [
                                              i(
                                                'span',
                                                {
                                                  staticClass: 'optionName',
                                                  on: {
                                                    click: function (i) {
                                                      return t.selectStackChild(
                                                        e
                                                      )
                                                    },
                                                  },
                                                },
                                                [t._v(t._s(e))]
                                              ),
                                              i(
                                                'div',
                                                {
                                                  staticClass:
                                                    'd-flex flex-row-reverse',
                                                },
                                                [
                                                  i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1',
                                                      attrs: {
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return t.deletePreparation(
                                                            'stackChild',
                                                            e,
                                                            t.stackId
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('delete')]
                                                  ),
                                                  0 !== s
                                                    ? i(
                                                        'v-icon',
                                                        {
                                                          staticClass:
                                                            'deleteOption ms-1',
                                                          attrs: {
                                                            id: 'moveUpOpt',
                                                            small: '',
                                                            color:
                                                              'grey darken-1',
                                                          },
                                                          on: {
                                                            click: function (
                                                              i
                                                            ) {
                                                              return t.moveOption(
                                                                'up',
                                                                'stackChild',
                                                                e
                                                              )
                                                            },
                                                          },
                                                        },
                                                        [t._v('arrow_upward')]
                                                      )
                                                    : t._e(),
                                                  s !==
                                                  t.stackChildList.length - 1
                                                    ? i(
                                                        'v-icon',
                                                        {
                                                          staticClass:
                                                            'deleteOption ms-1',
                                                          attrs: {
                                                            id: 'moveDownOpt',
                                                            small: '',
                                                            color:
                                                              'grey darken-1',
                                                          },
                                                          on: {
                                                            click: function (
                                                              i
                                                            ) {
                                                              return t.moveOption(
                                                                'down',
                                                                'stackChild',
                                                                e
                                                              )
                                                            },
                                                          },
                                                        },
                                                        [t._v('arrow_downward')]
                                                      )
                                                    : t._e(),
                                                  i(
                                                    'v-icon',
                                                    {
                                                      staticClass:
                                                        'deleteOption ms-1 defaultStarClass',
                                                      class: {
                                                        selectedStackChild:
                                                          t.stackChildDefault ===
                                                          e,
                                                      },
                                                      attrs: {
                                                        small: '',
                                                        color: 'grey darken-1',
                                                      },
                                                      on: {
                                                        click: function (i) {
                                                          return (
                                                            i.stopPropagation(),
                                                            i.preventDefault(),
                                                            t.selectDefaultStackChild(
                                                              e
                                                            )
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [t._v('star_rate')]
                                                  ),
                                                ],
                                                1
                                              ),
                                            ]
                                          )
                                        }),
                                        i(
                                          'div',
                                          [
                                            i(
                                              'v-btn',
                                              {
                                                staticClass: 'bord_r_0',
                                                attrs: {
                                                  id: 'addOptionBtn',
                                                  block: '',
                                                  depressed: '',
                                                  color: 'grey lighten-1',
                                                  elevation: '0',
                                                },
                                                nativeOn: {
                                                  click: function (e) {
                                                    return (
                                                      e.stopPropagation(),
                                                      t.addOptionsToFilter(
                                                        'stackChild'
                                                      )
                                                    )
                                                  },
                                                },
                                              },
                                              [
                                                i(
                                                  'v-icon',
                                                  {
                                                    staticClass: 'add-icon',
                                                  },
                                                  [t._v('add')]
                                                ),
                                                t._v('add option'),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      2
                                    )
                                  : t._e(),
                              ]
                            )
                          : i('div', {
                              staticClass: 'flex-column-custom',
                            }),
                        i('div', {
                          staticClass: 'upperFilters flex-column-custom',
                          attrs: {
                            id: 'tempFilter',
                          },
                        }),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ],
          1
        )
      },
      Et = [
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i(
            'p',
            {
              staticClass: 'text-upper mb5',
            },
            [i('strong', [t._v('game')])]
          )
        },
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i(
            'p',
            {
              staticClass: 'text-upper mb5',
            },
            [i('strong', [t._v('casino')])]
          )
        },
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i(
            'p',
            {
              staticClass: 'text-upper mb5',
            },
            [i('strong', [t._v('stake')])]
          )
        },
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i(
            'p',
            {
              staticClass: 'text-upper mb5',
            },
            [i('strong', [t._v('players')])]
          )
        },
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i(
            'p',
            {
              staticClass: 'text-upper mb5',
            },
            [i('strong', [t._v('sequence')])]
          )
        },
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i(
            'p',
            {
              staticClass: 'text-upper mb5',
            },
            [i('strong', [t._v('sub filter 1')])]
          )
        },
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i(
            'p',
            {
              staticClass: 'text-upper mb5',
            },
            [i('strong', [t._v('action')])]
          )
        },
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i(
            'p',
            {
              staticClass: 'text-upper mb5',
            },
            [i('strong', [t._v('sub filter 2')])]
          )
        },
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i(
            'p',
            {
              staticClass: 'text-upper mb5',
            },
            [i('strong', [t._v('sub filter 3')])]
          )
        },
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i(
            'p',
            {
              staticClass: 'text-upper mb5',
            },
            [i('strong', [t._v('Reactions')])]
          )
        },
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i(
            'p',
            {
              staticClass: 'text-upper mb5',
            },
            [i('strong', [t._v('Stacks')])]
          )
        },
      ],
      jt = i('7618'),
      Rt = (i('96cf'), i('3b8d'))
    function Vt(t, e) {
      var i = Object.keys(t)
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t)
        e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          })),
          i.push.apply(i, s)
      }
      return i
    }
    function Ut(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {}
        e % 2
          ? Vt(i, !0).forEach(function (e) {
              Object(L['a'])(t, e, i[e])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
          : Vt(i).forEach(function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            })
      }
      return t
    }
    var Jt = {
        name: 'FilterAddition',
        mixins: [ot['a']],
        components: {
          Loader: lt['a'],
          SnackBar: ft,
        },
        data: function () {
          return {
            startedSaving: !1,
            addOptionDialog: !1,
            deleteOperationPerformed: !1,
            deleteOption: {},
            deleteOptionDialog: !1,
            deleteSingleOptionDialog: !1,
            showWarningDialog: !1,
            addSequenceWarningDialog: !1,
            addPositionWarningDialog: !1,
            deletingOption: {},
            allToDelete: {},
            currentlyAddingOptionTo: '',
            newOptions: [],
            gameList: [],
            gameSelected: '',
            gameId: '',
            showGames: !1,
            casinoList: [],
            casinoSelected: '',
            casinoId: '',
            showCasinos: !1,
            stakeList: [],
            stakeSelected: '',
            stakeId: '',
            showStakes: !1,
            playersList: [],
            playersSelected: '',
            playersId: '',
            showPlayers: !1,
            sequenceList: [],
            sequenceSelected: '',
            sequenceId: '',
            showSequences: !1,
            subSequenceList: [],
            subSequenceSelected: '',
            subSequenceId: '',
            showSubSequences: !1,
            positionList: [],
            positionSelected: '',
            positionId: '',
            showPositions: !1,
            sub2FilterList: [],
            sub2FilterSelected: '',
            sub2FilterId: '',
            showSub2Filters: !1,
            sub3FilterList: [],
            sub3FilterSelected: '',
            sub3FilterId: '',
            showSub3Filters: !1,
            reactionList: [],
            reactionSelected: '',
            reactionId: '',
            showReactions: !1,
            stackList: [],
            stackSelected: '',
            stackId: '',
            showStacks: !1,
            stackChildList: [],
            stackChildSelected: '',
            stackChildId: '',
            showStackChilds: !1,
            stackChildDefault: '',
            allFiltersOptions: {},
            finalFilters: {
              game: [],
              casino: {},
              stake: {},
              players: {},
              sequence: {},
              subSequence: {},
              position: {},
              sub2Filter: {},
              sub3Filter: {},
              reaction: {},
              stack: {},
              stackChild: {},
            },
            relation: {
              casino: 'game',
              stake: 'casino',
              players: 'stake',
              sequence: 'players',
              subSequence: 'sequence',
              position: 'subSequence',
              sub2Filter: 'position',
              sub3Filter: 'sub2Filter',
              reaction: 'sub3Filter',
              stack: 'reaction',
              stackChild: 'stack',
            },
            topViewRelation: {
              game: 'casino',
              casino: 'stake',
              stake: 'players',
              players: 'sequence',
              sequence: 'subSequence',
              subSequence: 'position',
              position: 'sub2Filter',
              sub2Filter: 'sub3Filter',
              sub3Filter: 'reaction',
              reaction: 'stack',
              stack: 'stackChild',
            },
            defaultStackValueMap: {},
            parentFilters: {
              game: [],
              casino: ['game'],
              stake: ['casino'],
              players: ['stake'],
              sequence: ['players'],
              subSequence: ['sequence'],
              position: ['subSequence', 'sequence'],
              sub2Filter: ['position'],
              sub3Filter: ['sub2Filter'],
              reaction: ['sub3Filter', 'sub2Filter', 'position'],
              stack: ['reaction', 'position'],
              stackChild: ['stack'],
            },
            showLoader: !1,
            showSnackbar: !1,
            snackBarMessage: '',
            snackBarType: null,
            stackChildName: {},
            copiedFilterData: {},
            copiedFilterParentData: {},
            pasteFilterData: {},
            pasteFilterParentData: {},
            pasteDialog: !1,
            invalidPaste: !1,
            sub3FilterName: {},
            reactionName: {},
            filterArray: [
              'game',
              'casino',
              'stake',
              'players',
              'sequence',
              'subSequence',
              'position',
              'sub2Filter',
              'sub3Filter',
              'reaction',
              'stack',
              'stackChild',
            ],
            filterTitles: {
              subSequence: {},
              action: {},
              sub2Filter: {},
              sub3Filter: {},
              reaction: {},
              stack: {},
              stackChild: {},
            },
            filterHelperTexts: {},
            filterTitlesAndHelperTextsFromServer: null,
          }
        },
        created: function () {
          this.getFilters()
        },
        methods: {
          randomString: function () {
            return parseInt(1e5 * Math.random()).toString(16)
          },
          findDependentId: function (t, e) {
            return e && this[t + 'Selected']
              ? e
              : ((e = this[this.relation[t] + 'Id']),
                this.findDependentId(this.relation[t], e))
          },
          moveOption: function (t, e, i) {
            if ('up' === t) {
              if ('game' === e) {
                var s = this.finalFilters[e].filter(function (t) {
                    return t.value === i
                  })[0],
                  a = this.finalFilters[e].findIndex(function (t) {
                    return t.value === i
                  }),
                  o = this.finalFilters[e][a - 1]
                s.position--,
                  (this.finalFilters[e][a - 1] = s),
                  o.position++,
                  (this.finalFilters[e][a] = o),
                  (this[e + 'List'] = this.finalFilters[e]
                    .sort(function (t, e) {
                      return t.position - e.position
                    })
                    .map(function (t) {
                      return t.value
                    }))
              } else {
                var n = this.findDependentId(
                    this.relation[e],
                    this[this.relation[e] + 'Id']
                  ),
                  l = this.finalFilters[e][n].filter(function (t) {
                    return t.value === i
                  })[0],
                  r = this.finalFilters[e][n].findIndex(function (t) {
                    return t.value === i
                  }),
                  c = this.finalFilters[e][n][r - 1]
                l.position--,
                  (this.finalFilters[e][n][r - 1] = l),
                  c.position++,
                  (this.finalFilters[e][n][r] = c),
                  (this[e + 'List'] = this.finalFilters[e][n]
                    .sort(function (t, e) {
                      return t.position - e.position
                    })
                    .map(function (t) {
                      return t.value
                    }))
              }
              this.debounceFunc()
            } else if ('down' === t) {
              if ('game' === e) {
                var d = this.finalFilters[e].filter(function (t) {
                    return t.value === i
                  })[0],
                  u = this.finalFilters[e].findIndex(function (t) {
                    return t.value === i
                  }),
                  h = this.finalFilters[e][u + 1]
                d.position++,
                  (this.finalFilters[e][u + 1] = d),
                  h.position--,
                  (this.finalFilters[e][u] = h),
                  (this[e + 'List'] = this.finalFilters[e]
                    .sort(function (t, e) {
                      return t.position - e.position
                    })
                    .map(function (t) {
                      return t.value
                    }))
              } else {
                var p = this.findDependentId(
                    this.relation[e],
                    this[this.relation[e] + 'Id']
                  ),
                  f = this.finalFilters[e][p].filter(function (t) {
                    return t.value === i
                  })[0],
                  v = this.finalFilters[e][p].findIndex(function (t) {
                    return t.value === i
                  }),
                  b = this.finalFilters[e][p][v + 1]
                f.position++,
                  (this.finalFilters[e][p][v + 1] = f),
                  b.position--,
                  (this.finalFilters[e][p][v] = b),
                  (this[e + 'List'] = this.finalFilters[e][p]
                    .sort(function (t, e) {
                      return t.position - e.position
                    })
                    .map(function (t) {
                      return t.value
                    }))
              }
              this.debounceFunc()
            }
          },
          previousFilterName: function (t) {
            for (var e = '', i = '', s = 0; s < this.filterArray.length; s++)
              if (e) {
                if (
                  ((i += this[this.relation[e] + 'Selected']),
                  'game' === this.relation[e])
                )
                  break
                e = this.relation[e]
              } else {
                if (!this.relation[t]) break
                if (
                  ((i += this[this.relation[t] + 'Selected']),
                  'game' === this.relation[t])
                )
                  break
                e = this.relation[t]
              }
            return i
          },
          addOptionsToFilter: function (t) {
            ;(this.currentlyAddingOptionTo = 'player' === t ? t + 's' : t),
              'subSequence' === this.currentlyAddingOptionTo &&
              this.sequenceId &&
              ((this.finalFilters.position &&
                this.finalFilters.position.hasOwnProperty(this.sequenceId) &&
                this.finalFilters.position[this.sequenceId].length) ||
                (this.allFiltersOptions.position &&
                  this.allFiltersOptions.position.hasOwnProperty(
                    this.sequenceId
                  ) &&
                  this.allFiltersOptions.position[this.sequenceId].length))
                ? (this.addSequenceWarningDialog = !0)
                : 'position' === this.currentlyAddingOptionTo &&
                  this.sequenceId &&
                  ((this.finalFilters.subSequence &&
                    this.finalFilters.subSequence.hasOwnProperty(
                      this.sequenceId
                    ) &&
                    this.finalFilters.subSequence[this.sequenceId].length) ||
                    (this.allFiltersOptions.subSequence &&
                      this.allFiltersOptions.subSequence.hasOwnProperty(
                        this.sequenceId
                      ) &&
                      this.allFiltersOptions.subSequence[this.sequenceId]
                        .length)) &&
                  !this.subSequenceId &&
                  !this.subSequenceSelected
                ? (this.addPositionWarningDialog = !0)
                : (this.addOptionDialog = !0),
              (this.newOptions = [])
          },
          addOptions: function (t) {
            var e = this
            if (
              (this.newOptions.map(function (i) {
                return -1 === e[t + 'List'].indexOf(i)
                  ? e[t + 'List'].push(i)
                  : ''
              }),
              (this.addOptionDialog = !1),
              'game' === t)
            ) {
              var i = this.finalFilters.game.length
                  ? this.finalFilters.game.sort(function (t, e) {
                      return t.position - e.position
                    })
                  : '',
                s = i ? i[i.length - 1].position + 1 : 0,
                a = this[t + 'List'].map(function (t) {
                  var i = {}
                  return (
                    (i['id'] = Math.abs(e.hashCode(t))),
                    (i['value'] = t),
                    (i['position'] = e.finalFilters.game.filter(function (t) {
                      return t.id === i.id
                    }).length
                      ? e.finalFilters.game.filter(function (t) {
                          return t.id === i.id
                        })[0].position
                      : s++),
                    i
                  )
                })
              this.finalFilters[t] = Object(tt['a'])(a)
            } else this.addOptionsToFinalFilter(t)
            this.saveData()
          },
          addOptionsToFinalFilter: function (t) {
            var e = this,
              i = ''
            if (
              ('position' === t
                ? this.subSequenceSelected && this.subSequenceId
                  ? (i = 'subSequence')
                  : this.sequenceSelected && this.sequenceId && (i = 'sequence')
                : 'stack' === t
                ? this.reactionSelected && this.reactionId
                  ? (i = 'reaction')
                  : this.positionSelected && this.positionId && (i = 'position')
                : 'reaction' === t
                ? this.sub3FilterSelected && this.sub3FilterId
                  ? (i = 'sub3Filter')
                  : this.sub2FilterSelected && this.sub2FilterId
                  ? (i = 'sub2Filter')
                  : this.positionSelected && this.positionId && (i = 'position')
                : (i = this.relation[t]),
              this[i + 'Selected'] && this[i + 'Id'])
            ) {
              var s = this.finalFilters[t][this[i + 'Id']]
                  ? this.finalFilters[t][this[i + 'Id']].sort(function (t, e) {
                      return t.position - e.position
                    })
                  : '',
                a = s.length ? s[s.length - 1].position + 1 : 0,
                o = this[t + 'List'].map(function (s) {
                  var o = {}
                  return (
                    (o['id'] = Math.abs(
                      e.hashCode(s + e.previousFilterName(t))
                    )),
                    (o['value'] = s),
                    (o['position'] =
                      e.finalFilters[t].hasOwnProperty(e[i + 'Id']) &&
                      e.finalFilters[t][e[i + 'Id']].filter(function (t) {
                        return t.id === o.id
                      }).length
                        ? e.finalFilters[t][e[i + 'Id']].filter(function (t) {
                            return t.id === o.id
                          })[0].position
                        : a++),
                    o
                  )
                })
              this.finalFilters[t].hasOwnProperty(this[i + 'Id']) ||
                (this.finalFilters[t][this[i + 'Id']] = 'game' == t ? [] : {}),
                (this.finalFilters[t][this[i + 'Id']] = o)
            }
          },
          confirmDeletePositions: (function () {
            var t = Object(Rt['a'])(
              regeneratorRuntime.mark(function t() {
                var e, i, s, a, o, n
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          ;(e = !0),
                            (i = !1),
                            (s = void 0),
                            (t.prev = 3),
                            (a = this.positionList[Symbol.iterator]())
                        case 5:
                          if ((e = (o = a.next()).done)) {
                            t.next = 12
                            break
                          }
                          return (
                            (n = o.value),
                            (t.next = 9),
                            this.deleteFilter({
                              fromFilter: 'position',
                              filterValue: n,
                              parentId: this.sequenceId,
                            })
                          )
                        case 9:
                          ;(e = !0), (t.next = 5)
                          break
                        case 12:
                          t.next = 18
                          break
                        case 14:
                          ;(t.prev = 14),
                            (t.t0 = t['catch'](3)),
                            (i = !0),
                            (s = t.t0)
                        case 18:
                          ;(t.prev = 18),
                            (t.prev = 19),
                            e || null == a.return || a.return()
                        case 21:
                          if (((t.prev = 21), !i)) {
                            t.next = 24
                            break
                          }
                          throw s
                        case 24:
                          return t.finish(21)
                        case 25:
                          return t.finish(18)
                        case 26:
                          this.addSequenceWarningDialog = !1
                        case 27:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  this,
                  [
                    [3, 14, 18, 26],
                    [19, , 21, 25],
                  ]
                )
              })
            )
            function e() {
              return t.apply(this, arguments)
            }
            return e
          })(),
          deletePreparation: function (t, e, i) {
            ;(this.deletingOption = {
              fromFilter: t,
              filterValue: e,
              parentId: i,
            }),
              (this.deleteOptionDialog = !0)
          },
          addDeepDeleteOptions: function (t, e) {
            var i = this
            if (this.topViewRelation[t]) {
              if ('object' === Object(jt['a'])(e))
                (function () {
                  for (
                    var s = [],
                      a = function (a) {
                        i.allFiltersOptions[t][e[a]] &&
                          i.allFiltersOptions[t][e[a]].length &&
                          (i.deleteOption.hasOwnProperty(t) ||
                            (i.deleteOption[t] = {}),
                          (i.deleteOption[t][e[a]] = []),
                          i.allFiltersOptions[t][e[a]].forEach(function (o) {
                            i.deleteOption[t][e[a]].push(o.id), s.push(o.id)
                          }))
                      },
                      o = 0;
                    o < e.length;
                    o++
                  )
                    a(o)
                  i.addDeepDeleteOptions(i.topViewRelation[t], s)
                })()
              else if ('string' === typeof e || 'number' === typeof e) {
                var s
                if (
                  this.allFiltersOptions[t][e] &&
                  this.allFiltersOptions[t][e].length > 1
                )
                  (this.deleteOption[t] = {}),
                    (this.deleteOption[t][e] = []),
                    t === this.deletingOption.fromFilter
                      ? (this.deleteOption[t][e].push(this.deletingOption.id),
                        (s = this.deletingOption.id))
                      : (s = this.allFiltersOptions[t][e].map(function (s) {
                          return i.deleteOption[t][e].push(s.id), s.id
                        })),
                    this.addDeepDeleteOptions(this.topViewRelation[t], s)
                else if (
                  this.allFiltersOptions[t][e] &&
                  1 === this.allFiltersOptions[t][e].length
                )
                  (this.deleteOption[t] = {}),
                    (this.deleteOption[t][e] = []),
                    this.addDeepDeleteOptions(
                      this.topViewRelation[t],
                      this.allFiltersOptions[t][e][0].id
                    )
                else {
                  var a = this.topViewRelation[t]
                  this.allFiltersOptions[a][e]
                    ? this.addDeepDeleteOptions(
                        a,
                        this.allFiltersOptions[a][e][0].id
                      )
                    : (this.deleteOptionDialog = !0)
                }
              }
            } else
              (function () {
                var s = [],
                  a = []
                for (var o in i.deleteOption.sequence)
                  s = [].concat(
                    Object(tt['a'])(s),
                    Object(tt['a'])(i.deleteOption.sequence[o])
                  )
                for (var n in i.deleteOption.subSequence)
                  a = [].concat(
                    Object(tt['a'])(a),
                    Object(tt['a'])(i.deleteOption.subSequence[n])
                  )
                var l = [].concat(Object(tt['a'])(s), Object(tt['a'])(a))
                l.length || l.push(e)
                for (
                  var r = function (e) {
                      i.allFiltersOptions[t][l[e]] &&
                      i.allFiltersOptions[t][l[e]].length > 1
                        ? (i.deleteOption.hasOwnProperty(t) ||
                            (i.deleteOption[t] = {}),
                          (i.deleteOption[t][l[e]] = []),
                          t === i.deletingOption.fromFilter
                            ? i.deleteOption[t][l[e]].push(i.deletingOption.id)
                            : i.allFiltersOptions[t][l[e]].forEach(function (
                                s
                              ) {
                                i.deleteOption[t][l[e]].push(s.id)
                              }))
                        : i.allFiltersOptions[t][l[e]] &&
                          1 === i.allFiltersOptions[t][l[e]].length &&
                          (i.deleteOption.hasOwnProperty(t) ||
                            (i.deleteOption[t] = {}),
                          (i.deleteOption[t][l[e]] = []))
                    },
                    c = 0;
                  c < l.length;
                  c++
                )
                  r(c)
                i.deleteOptionDialog = !0
              })()
          },
          confirmDeleteOptions: function () {
            var t = this.deletingOption,
              e = t.fromFilter,
              i = t.filterValue,
              s = t.parentId
            this.deleteFilter({
              fromFilter: e,
              filterValue: i,
              parentId: s,
            })
          },
          confirmDeleteSingleOption: function () {
            var t = this
            if (
              (this[''.concat(this.deletingOption.fromFilter, 'Id')],
              this.deletingOption.id,
              this[''.concat(this.deletingOption.fromFilter, 'Selected')] ===
                this.deletingOption.filterValue &&
                (this[''.concat(this.deletingOption.fromFilter, 'Selected')] =
                  ''),
              (this[''.concat(this.deletingOption.fromFilter, 'List')] = this[
                ''.concat(this.deletingOption.fromFilter, 'List')
              ].filter(function (e) {
                return e !== t.deletingOption.filterValue
              })),
              'game' === this.deletingOption.fromFilter)
            ) {
              var e = this.finalFilters[
                this.deletingOption.fromFilter
              ].findIndex(function (e) {
                return e.id === t.deletingOption.id
              })
              ;(this.finalFilters[
                this.deletingOption.fromFilter
              ] = this.finalFilters[this.deletingOption.fromFilter].map(
                function (t, i) {
                  return i > e && t.position--, t
                }
              )),
                (this.finalFilters[
                  this.deletingOption.fromFilter
                ] = this.finalFilters[this.deletingOption.fromFilter].filter(
                  function (e) {
                    return e.id !== t.deletingOption.id
                  }
                ))
            } else if (
              this.finalFilters[this.deletingOption.fromFilter][
                this.deletingOption.parentId
              ] &&
              this.finalFilters[this.deletingOption.fromFilter][
                this.deletingOption.parentId
              ].length > 1
            ) {
              var i = this.finalFilters[this.deletingOption.fromFilter][
                this.deletingOption.parentId
              ].findIndex(function (e) {
                return e.value === t.deletingOption.filterValue
              })
              ;(this.finalFilters[this.deletingOption.fromFilter][
                this.deletingOption.parentId
              ] = this.finalFilters[this.deletingOption.fromFilter][
                this.deletingOption.parentId
              ].map(function (t, e) {
                return e > i && t.position--, t
              })),
                (this.finalFilters[this.deletingOption.fromFilter][
                  this.deletingOption.parentId
                ] = this.finalFilters[this.deletingOption.fromFilter][
                  this.deletingOption.parentId
                ].filter(function (e) {
                  return e.value !== t.deletingOption.filterValue
                }))
            } else
              this.finalFilters[this.deletingOption.fromFilter][
                this.deletingOption.parentId
              ] &&
                1 ===
                  this.finalFilters[this.deletingOption.fromFilter][
                    this.deletingOption.parentId
                  ].length &&
                this.finalFilters[this.deletingOption.fromFilter][
                  this.deletingOption.parentId
                ][0].value === this.deletingOption.filterValue &&
                delete this.finalFilters[this.deletingOption.fromFilter][
                  this.deletingOption.parentId
                ]
            ;(this.deletingOption = {}), (this.deleteSingleOptionDialog = !1)
          },
          startDeleteOption: function () {
            var t = {
              id: [],
              filterValue: {},
              fromFilter: this.deletingOption.fromFilter,
              parentId: this.deletingOption.parentId
                ? this.deletingOption.parentId
                : '',
            }
            t.id.push(this.deletingOption.id),
              (t.filterValue[
                this.deletingOption.id
              ] = this.deletingOption.filterValue),
              this.deleteNotSavedChildOptions(t)
          },
          deleteNotSavedChildOptions: function (t) {
            var e = !0,
              i = !1,
              s = void 0
            try {
              for (
                var a, o = t.id[Symbol.iterator]();
                !(e = (a = o.next()).done);
                e = !0
              ) {
                var n = a.value,
                  l = Ut({}, t)
                ;(l.id = n),
                  (l.filterValue = t.filterValue[n]),
                  (this.deletingOption = l),
                  this.confirmDeleteSingleOption()
              }
            } catch (g) {
              ;(i = !0), (s = g)
            } finally {
              try {
                e || null == o.return || o.return()
              } finally {
                if (i) throw s
              }
            }
            var r = this.topViewRelation[t.fromFilter]
                ? this.topViewRelation[t.fromFilter]
                : 'position',
              c =
                'game' !== t.fromFilter
                  ? this[''.concat(t.fromFilter, 'Id')]
                  : this.gameId
            if (
              ('sequence' !== t.fromFilter ||
                (this.finalFilters[r].hasOwnProperty(c) &&
                  0 !== this.finalFilters[r][c].length) ||
                (r = this.topViewRelation[r]),
              r &&
                this.finalFilters[r].hasOwnProperty(c) &&
                this.finalFilters[r][c].length)
            ) {
              var d = this.finalFilters[r][c],
                u = {
                  id: [],
                  filterValue: {},
                  fromFilter: r,
                  parentId: c,
                },
                h = !0,
                p = !1,
                f = void 0
              try {
                for (
                  var v, b = d[Symbol.iterator]();
                  !(h = (v = b.next()).done);
                  h = !0
                ) {
                  var m = v.value
                  ;-1 === u.id.indexOf(m.id) && u.id.push(m.id),
                    u.filterValue.hasOwnProperty(m.value) ||
                      (u.filterValue[m.id] = m.value)
                }
              } catch (g) {
                ;(p = !0), (f = g)
              } finally {
                try {
                  h || null == b.return || b.return()
                } finally {
                  if (p) throw f
                }
              }
              this.deleteNotSavedChildOptions(u)
            }
          },
          cancelDeleting: function () {
            ;(this.deleteOption = {}),
              (this.deletingOption = {}),
              (this.deleteOptionDialog = !1),
              (this.deleteSingleOptionDialog = !1)
          },
          deleteFilter: (function () {
            var t = Object(Rt['a'])(
              regeneratorRuntime.mark(function t(e) {
                var i,
                  s,
                  a,
                  o,
                  n = this
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (i = e.fromFilter),
                            (s = e.filterValue),
                            (a = e.parentId),
                            (this.deleteOptionDialog = !1),
                            (this.showLoader = !0),
                            (t.prev = 3),
                            (t.next = 6),
                            I['a'].put('filter', {
                              fromFilter: i,
                              filterValue: s,
                              parentId: a,
                            })
                          )
                        case 6:
                          ;(o = t.sent),
                            200 === o.status &&
                              o.data.success &&
                              ((this.allFiltersOptions = o.data.result.data),
                              (this.defaultStackValueMap =
                                o.data.result.defaultStackValues || {}),
                              this.allFiltersOptions.hasOwnProperty('game') &&
                                ((this.finalFilters.game = this.allFiltersOptions.game.sort(
                                  function (t, e) {
                                    return t.position - e.position
                                  }
                                )),
                                (this.gameList = this.finalFilters.game.map(
                                  function (t) {
                                    return t.value
                                  }
                                ))),
                              this.resetFiltersFrom(i, s)),
                            (this.showLoader = !1),
                            (t.next = 17)
                          break
                        case 11:
                          ;(t.prev = 11),
                            (t.t0 = t['catch'](3)),
                            (this.showSnackbar = !0),
                            (this.snackBarMessage =
                              t.t0.message || 'Error while deleting filter'),
                            (this.showLoader = !1),
                            setTimeout(function () {
                              ;(n.snackBarMessage = ''), (n.showSnackbar = !1)
                            }, 4e3)
                        case 17:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  this,
                  [[3, 11]]
                )
              })
            )
            function e(e) {
              return t.apply(this, arguments)
            }
            return e
          })(),
          getFilters: function () {
            var t = this
            I['a'].get('filter').then(function (e) {
              if (200 === e.status && e.data.success) {
                if (
                  ((t.allFiltersOptions = e.data.result.data),
                  (t.defaultStackValueMap =
                    e.data.result.defaultStackValues || {}),
                  t.allFiltersOptions.hasOwnProperty('game'))
                ) {
                  var i = !0,
                    s = !1,
                    a = void 0
                  try {
                    for (
                      var o,
                        n = function () {
                          var e = o.value
                          ;-1 ===
                            t.finalFilters.game.findIndex(function (t) {
                              return t.id === e.id
                            }) &&
                            ((e['position'] = e.hasOwnProperty('position')
                              ? e.position
                              : t.allFiltersOptions.game.findIndex(function (
                                  t
                                ) {
                                  return t.id === e.id
                                })),
                            t.finalFilters.game.push(e))
                        },
                        l = t.allFiltersOptions.game[Symbol.iterator]();
                      !(i = (o = l.next()).done);
                      i = !0
                    )
                      n()
                  } catch (r) {
                    ;(s = !0), (a = r)
                  } finally {
                    try {
                      i || null == l.return || l.return()
                    } finally {
                      if (s) throw a
                    }
                  }
                  t.gameList = t.finalFilters.game
                    .sort(function (t, e) {
                      return t.position - e.position
                    })
                    .map(function (t) {
                      return t.value
                    })
                }
                t.setFilterTitles(e.data.result.titlesAndHelperTexts)
              }
            })
          },
          setFilterTitles: function (t) {
            for (var e in t)
              if (t[e])
                for (var i in t[e])
                  this.filterTitles[e][i] = t[e][i] && t[e][i].title
          },
          resetFilters: function () {
            var t = '',
              e = this.deleteOption.startingFrom,
              i = this.relation[e] ? this.relation[e] : ''
            'game' === e
              ? this.clearAllFilters()
              : 'position' === e
              ? this.sequenceSelected
                ? this.selectSequence(this.sequenceSelected)
                : this.subSequenceSelected &&
                  this.selectSubSequence(this.subSequenceSelected)
              : ((t = i ? 'select' + i[0].toUpperCase() + i.substr(1) : ''),
                this[t](this[i + 'Selected'])),
              (this.deleteOption = {}),
              (this.deletingOption = {}),
              (this.deleteOptionDialog = !1)
          },
          resetFiltersFrom: function (t, e) {
            var i = this
            if ('game' !== t) {
              if (
                (this[t + 'Selected'] === e &&
                  ((this[t + 'Id'] = ''), (this[t + 'Selected'] = '')),
                (this[t + 'List'] = this[t + 'List'].filter(function (t) {
                  return t != e
                })),
                this.finalFilters[t] &&
                  this.finalFilters[t][this.deletingOption.parentId])
              ) {
                var s = this.finalFilters[t][this.deletingOption.parentId]
                this.finalFilters[t][this.deletingOption.parentId] = s.filter(
                  function (t) {
                    return t && t.value != e
                  }
                )
              }
              var a = this.topViewRelation[t]
              while (a)
                (this[a + 'Id'] = ''),
                  (this[a + 'Selected'] = ''),
                  (this[a + 'List'] = ''),
                  (this.finalFilters[a] = {}),
                  (a = this.topViewRelation[a])
              this.deletingOption = {}
              var o = this.parentFilters[t],
                n = !1
              o.forEach(function (t) {
                if (!n) {
                  var e = t && t.charAt(0).toUpperCase() + t.substr(1)
                  i[t + 'Id'] &&
                    i['select' + e] &&
                    (i['select' + e](i[t + 'Selected']), (n = !0))
                }
              })
            } else this.clearAllFilters()
          },
          saveData: function () {
            var t = this
            this.startedSaving = !0
            var e = {
              options: {},
            }
            for (var i in this.finalFilters)
              e['options'][i + 'Options'] = this[i + 'List']
            this.finalFilters = Object.assign(this.finalFilters, e)
            var s = this.finalFilters.stackChild
            if (s && s[this.stackId]) {
              var a = this.stackChildName[this.stackId]
              1 === s[this.stackId].length &&
                (this.stackChildDefault = s[this.stackId][0].value),
                s[this.stackId].forEach(function (e) {
                  ;(e.stackChildName = a),
                    (e.isDefault = t.stackChildDefault === e.value)
                })
            }
            var o = this.finalFilters.sub3Filter
            if (o && o[this.sub2FilterId]) {
              var n = this.sub3FilterName[this.sub2FilterId] || ''
              o[this.sub2FilterId].forEach(function (t) {
                t.sub3FilterName = n
              })
              var l = this.finalFilters.reaction
              if (l && l[this.sub3FilterId]) {
                n = this.reactionName[this.sub2FilterId] || ''
                var r = this.finalFilters.sub2Filter[this.positionId]
                if (r && r.length) {
                  var c = r.find(function (e) {
                    return e.id === t.sub2FilterId
                  })
                  c && (c.reactionName = n)
                }
              }
            }
            var d = {
              data: Ut({}, this.finalFilters),
              defaultStackValues: this.defaultStackValueMap,
            }
            I['a']
              .post('filter', Ut({}, d))
              .then(function (e) {
                for (var i in ((t.savingResult = e), t.finalFilters))
                  'options' != i && (t.allFiltersOptions[i] = t.finalFilters[i])
                ;(t.gameList = []), t.getFilters(), (t.startedSaving = !1)
              })
              .catch(function (e) {
                ;(t.startedSaving = !1),
                  (t.snackBarMessage = e.message || 'Error!'),
                  (t.showSnackbar = !0),
                  setTimeout(function () {
                    ;(t.snackBarMessage = ''), (t.showSnackbar = !1)
                  }, 4e3)
              })
          },
          emptyFinalFilters: function (t) {
            if (this.finalFilters.hasOwnProperty(t))
              return (
                (this.finalFilters[t] = {}),
                (this[t + 'Selected'] = ''),
                (this[t + 'Id'] = ''),
                this.emptyFinalFilters(this.topViewRelation[t])
              )
          },
          clearAllFilters: function () {
            ;(this.gameSelected = ''),
              (this.gameId = ''),
              (this.casinoSelected = ''),
              (this.casinoId = ''),
              (this.stakeSelected = ''),
              (this.stakeId = ''),
              (this.playersSelected = ''),
              (this.playersId = ''),
              (this.sequenceSelected = ''),
              (this.sequenceId = ''),
              (this.subSequenceSelected = ''),
              (this.subSequenceId = ''),
              (this.positionSelected = ''),
              (this.positionId = ''),
              (this.sub2FilterSelected = ''),
              (this.sub2FilterId = ''),
              (this.sub3FilterSelected = ''),
              (this.sub3FilterId = ''),
              (this.reactionSelected = ''),
              (this.reactionId = ''),
              (this.stackSelected = ''),
              (this.stackId = ''),
              (this.stackChildSelected = ''),
              (this.stackChildId = ''),
              (this.finalFilters = {
                game: this.finalFilters.game,
                casino: {},
                stake: {},
                players: {},
                sequence: {},
                subSequence: {},
                position: {},
                reaction: {},
                stack: {},
                sub2Filter: {},
                sub3Filter: {},
                stackChild: {},
              }),
              (this.copiedFilterData = {}),
              (this.copiedFilterParentData = {}),
              (this.pasteFilterData = {}),
              (this.pasteFilterParentData = {})
          },
          saveDisability: function () {
            var t = !0
            return (t = t && this.gameSelected), !t
          },
          showDropOptions: function (t) {
            var e = this,
              i = [
                'Games',
                'Casinos',
                'Stakes',
                'Players',
                'Sequences',
                'SubSequences',
                'Positions',
                'Sub2Filters',
                'Sub3Filters',
                'Reactions',
                'Stacks',
                'StackChilds',
              ]
            i.map(function (i) {
              i === t ? (e['show' + t] = !e['show' + t]) : (e['show' + i] = !1)
            })
          },
          closeDrops: function (t) {
            if (
              'moveUpOpt' !== t.target.id &&
              'moveDownOpt' !== t.target.id &&
              !t.target.className.includes('defaultStarClass') &&
              document.querySelector('.optionsBlock')
            ) {
              var e = document.querySelector('.optionsBlock').parentElement.id,
                i = e.split('Filter')[0],
                s = 'show' + i[0].toUpperCase() + i.substr(1) + 's'
              s &&
                'addOptionBtn' !== (t.target.id || t.target.parentElement.id) &&
                !(
                  t.target.classList.contains('customDrop') ||
                  t.target.classList.contains('dropIcon') ||
                  t.target.classList.contains('add-icon')
                ) &&
                (this[s] = !this[s])
            }
          },
          selectGame: function (t) {
            var e = this
            ;(this.gameSelected = t),
              (this.showGames = !1),
              (this.gameId = Math.abs(this.hashCode(this.gameSelected)))
            var i = this.topViewRelation['game']
            if (
              ((this[i + 'List'] = []),
              this[i + 'Selected'] && this.emptyFinalFilters(i),
              this.allFiltersOptions[i] &&
                this.allFiltersOptions[i].hasOwnProperty(this.gameId))
            ) {
              var s = !0,
                a = !1,
                o = void 0
              try {
                for (
                  var n,
                    l = function () {
                      var t = n.value
                      t['position'] = t.hasOwnProperty('position')
                        ? t.position
                        : e.allFiltersOptions[i][e.gameId].findIndex(function (
                            e
                          ) {
                            return e.id === t.id
                          })
                    },
                    r = this.allFiltersOptions[i][this.gameId][
                      Symbol.iterator
                    ]();
                  !(s = (n = r.next()).done);
                  s = !0
                )
                  l()
              } catch (c) {
                ;(a = !0), (o = c)
              } finally {
                try {
                  s || null == r.return || r.return()
                } finally {
                  if (a) throw o
                }
              }
              ;(this[i + 'List'] = this.allFiltersOptions[i][this.gameId]
                .sort(function (t, e) {
                  return t.position - e.position
                })
                .map(function (t) {
                  return t.value
                })),
                this.addOptionsToFinalFilter('casino')
            } else this[i + 'List'] = []
          },
          selectCasino: function (t) {
            var e = this
            ;(this.casinoSelected = t),
              (this.showCasinos = !1),
              (this.casinoId = Math.abs(
                this.hashCode(
                  this.casinoSelected + this.previousFilterName('casino')
                )
              ))
            var i = this.topViewRelation['casino']
            if (
              ((this[i + 'List'] = []),
              this.allFiltersOptions[i] &&
                this.allFiltersOptions[i].hasOwnProperty(this.casinoId))
            ) {
              var s = !0,
                a = !1,
                o = void 0
              try {
                for (
                  var n,
                    l = function () {
                      var t = n.value
                      t['position'] = t.hasOwnProperty('position')
                        ? t.position
                        : e.allFiltersOptions[i][e.casinoId].findIndex(
                            function (e) {
                              return e.id === t.id
                            }
                          )
                    },
                    r = this.allFiltersOptions[i][this.casinoId][
                      Symbol.iterator
                    ]();
                  !(s = (n = r.next()).done);
                  s = !0
                )
                  l()
              } catch (c) {
                ;(a = !0), (o = c)
              } finally {
                try {
                  s || null == r.return || r.return()
                } finally {
                  if (a) throw o
                }
              }
              this[i + 'List'] = this.allFiltersOptions[i][this.casinoId]
                .sort(function (t, e) {
                  return t.position - e.position
                })
                .map(function (t) {
                  return t.value
                })
            } else this[i + 'List'] = []
            this[i + 'Selected'] && this.emptyFinalFilters(i),
              this.casinoList.length &&
                this.finalFilters.casino[this.gameId] &&
                this.addOptionsToFinalFilter('stake')
          },
          selectStake: function (t) {
            var e = this
            ;(this.stakeSelected = t),
              (this.showStakes = !1),
              (this.stakeId = Math.abs(
                this.hashCode(
                  this.stakeSelected + this.previousFilterName('stake')
                )
              ))
            var i = this.topViewRelation['stake']
            if (
              ((this[i + 'List'] = []),
              this.allFiltersOptions[i] &&
                this.allFiltersOptions[i].hasOwnProperty(this.stakeId))
            ) {
              var s = !0,
                a = !1,
                o = void 0
              try {
                for (
                  var n,
                    l = function () {
                      var t = n.value
                      t['position'] = t.hasOwnProperty('position')
                        ? t.position
                        : e.allFiltersOptions[i][e.stakeId].findIndex(function (
                            e
                          ) {
                            return e.id === t.id
                          })
                    },
                    r = this.allFiltersOptions[i][this.stakeId][
                      Symbol.iterator
                    ]();
                  !(s = (n = r.next()).done);
                  s = !0
                )
                  l()
              } catch (c) {
                ;(a = !0), (o = c)
              } finally {
                try {
                  s || null == r.return || r.return()
                } finally {
                  if (a) throw o
                }
              }
              this[i + 'List'] = this.allFiltersOptions[i][this.stakeId]
                .sort(function (t, e) {
                  return t.position - e.position
                })
                .map(function (t) {
                  return t.value
                })
            } else this[i + 'List'] = []
            this[i + 'Selected'] && this.emptyFinalFilters(i),
              this.stakeList.length &&
                this.finalFilters.stake[this.casinoId] &&
                this.addOptionsToFinalFilter('players')
          },
          selectPlayers: function (t) {
            var e = this
            ;(this.playersSelected = t),
              (this.showPlayers = !1),
              (this.playersId = Math.abs(
                this.hashCode(
                  this.playersSelected + this.previousFilterName('players')
                )
              ))
            var i = this.topViewRelation['players']
            if (
              ((this[i + 'List'] = []),
              this.allFiltersOptions[i] &&
                this.allFiltersOptions[i].hasOwnProperty(this.playersId))
            ) {
              var s = !0,
                a = !1,
                o = void 0
              try {
                for (
                  var n,
                    l = function () {
                      var t = n.value
                      t['position'] = t.hasOwnProperty('position')
                        ? t.position
                        : e.allFiltersOptions[i][e.playersId].findIndex(
                            function (e) {
                              return e.id === t.id
                            }
                          )
                    },
                    r = this.allFiltersOptions[i][this.playersId][
                      Symbol.iterator
                    ]();
                  !(s = (n = r.next()).done);
                  s = !0
                )
                  l()
              } catch (c) {
                ;(a = !0), (o = c)
              } finally {
                try {
                  s || null == r.return || r.return()
                } finally {
                  if (a) throw o
                }
              }
              this[i + 'List'] = this.allFiltersOptions[i][this.playersId]
                .sort(function (t, e) {
                  return t.position - e.position
                })
                .map(function (t) {
                  return t.value
                })
            } else this[i + 'List'] = []
            this[i + 'Selected'] && this.emptyFinalFilters(i),
              this.playersList.length &&
                this.finalFilters.players[this.stakeId] &&
                this.addOptionsToFinalFilter('sequence')
          },
          selectSequence: function (t) {
            var e = this
            ;(this.sequenceSelected = t),
              (this.showSequences = !1),
              (this.sequenceId = Math.abs(
                this.hashCode(
                  this.sequenceSelected + this.previousFilterName('sequence')
                )
              ))
            var i = [this.topViewRelation['sequence'], 'position']
            ;(this[i[0] + 'List'] = []), (this[i[1] + 'List'] = [])
            for (var s = 0, a = i; s < a.length; s++) {
              var o = a[s]
              if (
                this.allFiltersOptions[o] &&
                this.allFiltersOptions[o].hasOwnProperty(this.sequenceId)
              ) {
                var n = !0,
                  l = !1,
                  r = void 0
                try {
                  for (
                    var c,
                      d = function () {
                        var t = c.value
                        t['position'] = t.hasOwnProperty('position')
                          ? t.position
                          : e.allFiltersOptions[o][e.sequenceId].findIndex(
                              function (e) {
                                return e.id === t.id
                              }
                            )
                      },
                      u = this.allFiltersOptions[o][this.sequenceId][
                        Symbol.iterator
                      ]();
                    !(n = (c = u.next()).done);
                    n = !0
                  )
                    d()
                } catch (v) {
                  ;(l = !0), (r = v)
                } finally {
                  try {
                    n || null == u.return || u.return()
                  } finally {
                    if (l) throw r
                  }
                }
                this[o + 'List'] = this.allFiltersOptions[o][this.sequenceId]
                  .sort(function (t, e) {
                    return t.position - e.position
                  })
                  .map(function (t) {
                    return t.value
                  })
              } else this[o + 'List'] = []
            }
            for (var h = 0, p = i; h < p.length; h++) {
              var f = p[h]
              this[f + 'Selected'] && this.emptyFinalFilters(f)
            }
            this.sequenceList.length &&
              this.finalFilters.sequence[this.playersId] &&
              this.addOptionsToFinalFilter('subSequence'),
              this.positionList.length &&
                this.finalFilters.sequence[this.playersId] &&
                this.addOptionsToFinalFilter('position')
          },
          selectSubSequence: function (t) {
            var e = this
            ;(this.subSequenceSelected = t),
              (this.showSubSequences = !1),
              (this.subSequenceId = Math.abs(
                this.hashCode(
                  this.subSequenceSelected +
                    this.previousFilterName('subSequence')
                )
              ))
            var i = this.topViewRelation['subSequence']
            if (
              ((this[i + 'List'] = []),
              this.allFiltersOptions[i] &&
                this.allFiltersOptions[i].hasOwnProperty(this.subSequenceId))
            ) {
              var s = !0,
                a = !1,
                o = void 0
              try {
                for (
                  var n,
                    l = function () {
                      var t = n.value
                      t['position'] = t.hasOwnProperty('position')
                        ? t.position
                        : e.allFiltersOptions[i][e.subSequenceId].findIndex(
                            function (e) {
                              return e.id === t.id
                            }
                          )
                    },
                    r = this.allFiltersOptions[i][this.subSequenceId][
                      Symbol.iterator
                    ]();
                  !(s = (n = r.next()).done);
                  s = !0
                )
                  l()
              } catch (c) {
                ;(a = !0), (o = c)
              } finally {
                try {
                  s || null == r.return || r.return()
                } finally {
                  if (a) throw o
                }
              }
              this[i + 'List'] = this.allFiltersOptions[i][this.subSequenceId]
                .sort(function (t, e) {
                  return t.position - e.position
                })
                .map(function (t) {
                  return t.value
                })
            } else this[i + 'List'] = []
            this[i + 'Selected'] && this.emptyFinalFilters(i),
              this.subSequenceList.length &&
                this.finalFilters.subSequence[this.sequenceId] &&
                this.addOptionsToFinalFilter('position')
          },
          selectPosition: function (t) {
            var e = this
            ;(this.positionSelected = t),
              (this.showPositions = !1),
              (this.positionId = Math.abs(
                this.hashCode(
                  this.positionSelected + this.previousFilterName('position')
                )
              )),
              (this.positionList = [])
            var i = [this.topViewRelation['position'], 'reaction', 'stack']
            ;(this[i[0] + 'List'] = []),
              (this[i[1] + 'List'] = []),
              (this[i[2] + 'List'] = [])
            for (var s = 0, a = i; s < a.length; s++) {
              var o = a[s]
              if (
                this.allFiltersOptions[o] &&
                this.allFiltersOptions[o].hasOwnProperty(this.positionId)
              ) {
                var n = !0,
                  l = !1,
                  r = void 0
                try {
                  for (
                    var c,
                      d = function () {
                        var t = c.value
                        t['position'] = t.hasOwnProperty('position')
                          ? t.position
                          : e.allFiltersOptions[o][e.positionId].findIndex(
                              function (e) {
                                return e.id === t.id
                              }
                            )
                      },
                      u = this.allFiltersOptions[o][this.positionId][
                        Symbol.iterator
                      ]();
                    !(n = (c = u.next()).done);
                    n = !0
                  )
                    d()
                } catch (R) {
                  ;(l = !0), (r = R)
                } finally {
                  try {
                    n || null == u.return || u.return()
                  } finally {
                    if (l) throw r
                  }
                }
                this[o + 'List'] = this.allFiltersOptions[o][this.positionId]
                  .sort(function (t, e) {
                    return t.position - e.position
                  })
                  .map(function (t) {
                    return t.value
                  })
              } else this[o + 'List'] = []
            }
            for (var h = 0, p = i; h < p.length; h++) {
              var f = p[h]
              this[f + 'Selected'] && this.emptyFinalFilters(f)
            }
            if (
              this.allFiltersOptions['position'] &&
              this.allFiltersOptions['position'].hasOwnProperty(
                this.subSequenceId
              )
            ) {
              var v = !0,
                b = !1,
                m = void 0
              try {
                for (
                  var g,
                    S = function () {
                      var t = g.value
                      t['position'] = t.hasOwnProperty('position')
                        ? t.position
                        : e.allFiltersOptions['position'][
                            e.subSequenceId
                          ].findIndex(function (e) {
                            return e.id === t.id
                          })
                    },
                    C = this.allFiltersOptions['position'][this.subSequenceId][
                      Symbol.iterator
                    ]();
                  !(v = (g = C.next()).done);
                  v = !0
                )
                  S()
              } catch (R) {
                ;(b = !0), (m = R)
              } finally {
                try {
                  v || null == C.return || C.return()
                } finally {
                  if (b) throw m
                }
              }
              this['positionList'] = this.allFiltersOptions['position'][
                this.subSequenceId
              ]
                .sort(function (t, e) {
                  return t.position - e.position
                })
                .map(function (t) {
                  return t.value
                })
            } else if (
              this.allFiltersOptions['position'] &&
              this.allFiltersOptions['position'].hasOwnProperty(this.sequenceId)
            ) {
              var k = !0,
                F = !1,
                y = void 0
              try {
                for (
                  var _,
                    w = function () {
                      var t = _.value
                      t['position'] = t.hasOwnProperty('position')
                        ? t.position
                        : e.allFiltersOptions['position'][
                            e.sequenceId
                          ].findIndex(function (e) {
                            return e.id === t.id
                          })
                    },
                    O = this.allFiltersOptions['position'][this.sequenceId][
                      Symbol.iterator
                    ]();
                  !(k = (_ = O.next()).done);
                  k = !0
                )
                  w()
              } catch (R) {
                ;(F = !0), (y = R)
              } finally {
                try {
                  k || null == O.return || O.return()
                } finally {
                  if (F) throw y
                }
              }
              this['positionList'] = this.allFiltersOptions['position'][
                this.sequenceId
              ]
                .sort(function (t, e) {
                  return t.position - e.position
                })
                .map(function (t) {
                  return t.value
                })
            } else if (
              this.finalFilters['position'] &&
              this.finalFilters['position'].hasOwnProperty(this.subSequenceId)
            ) {
              var I = !0,
                x = !1,
                D = void 0
              try {
                for (
                  var L,
                    q = function () {
                      var t = L.value
                      t['position'] = t.hasOwnProperty('position')
                        ? t.position
                        : e.allFiltersOptions['position'][
                            e.subSequenceId
                          ].findIndex(function (e) {
                            return e.id === t.id
                          })
                    },
                    P = this.finalFilters['position'][this.subSequenceId][
                      Symbol.iterator
                    ]();
                  !(I = (L = P.next()).done);
                  I = !0
                )
                  q()
              } catch (R) {
                ;(x = !0), (D = R)
              } finally {
                try {
                  I || null == P.return || P.return()
                } finally {
                  if (x) throw D
                }
              }
              this['positionList'] = this.allFiltersOptions['position'][
                this.subSequenceId
              ]
                .sort(function (t, e) {
                  return t.position - e.position
                })
                .map(function (t) {
                  return t.value
                })
            } else if (
              this.finalFilters['position'] &&
              this.finalFilters['position'].hasOwnProperty(this.sequenceId)
            ) {
              var T = !0,
                B = !1,
                N = void 0
              try {
                for (
                  var A,
                    E = function () {
                      var t = A.value
                      t['position'] = t.hasOwnProperty('position')
                        ? t.position
                        : e.allFiltersOptions['position'][
                            e.sequenceId
                          ].findIndex(function (e) {
                            return e.id === t.id
                          })
                    },
                    j = this.finalFilters['position'][this.sequenceId][
                      Symbol.iterator
                    ]();
                  !(T = (A = j.next()).done);
                  T = !0
                )
                  E()
              } catch (R) {
                ;(B = !0), (N = R)
              } finally {
                try {
                  T || null == j.return || j.return()
                } finally {
                  if (B) throw N
                }
              }
              this['positionList'] = this.allFiltersOptions['position'][
                this.sequenceId
              ]
                .sort(function (t, e) {
                  return t.position - e.position
                })
                .map(function (t) {
                  return t.value
                })
            } else this['positionList'] = []
            this.sub2FilterList.length &&
              (this.finalFilters.position[this.subSequenceId] ||
                this.finalFilters.position[this.sequenceId]) &&
              this.addOptionsToFinalFilter('sub2Filter'),
              this.reactionList.length &&
                (this.finalFilters.position[this.subSequenceId] ||
                  this.finalFilters.position[this.sequenceId]) &&
                this.addOptionsToFinalFilter('reaction'),
              this.stackList.length &&
                (this.finalFilters.position[this.subSequenceId] ||
                  this.finalFilters.position[this.sequenceId]) &&
                this.addOptionsToFinalFilter('stack')
          },
          selectSub2Filter: function (t) {
            var e = this
            ;(this.sub2FilterSelected = t),
              (this.showSub2Filters = !1),
              (this.sub2FilterId = Math.abs(
                this.hashCode(
                  this.sub2FilterSelected +
                    this.previousFilterName('sub2Filter')
                )
              ))
            var i = [
              this.topViewRelation['sub2Filter'],
              this.topViewRelation[this.topViewRelation['sub2Filter']],
            ]
            ;(this[i[0] + 'List'] = []), (this[i[1] + 'List'] = [])
            for (var s = 0, a = i; s < a.length; s++) {
              var o = a[s]
              if (
                this.allFiltersOptions[o] &&
                this.allFiltersOptions[o].hasOwnProperty(this.sub2FilterId)
              ) {
                var n = !0,
                  l = !1,
                  r = void 0
                try {
                  for (
                    var c,
                      d = function () {
                        var t = c.value
                        t['position'] = t.hasOwnProperty('position')
                          ? t.position
                          : e.allFiltersOptions[o][e.sub2FilterId].findIndex(
                              function (e) {
                                return e.id === t.id
                              }
                            )
                      },
                      u = this.allFiltersOptions[o][this.sub2FilterId][
                        Symbol.iterator
                      ]();
                    !(n = (c = u.next()).done);
                    n = !0
                  )
                    d()
                } catch (v) {
                  ;(l = !0), (r = v)
                } finally {
                  try {
                    n || null == u.return || u.return()
                  } finally {
                    if (l) throw r
                  }
                }
                this[o + 'List'] = this.allFiltersOptions[o][this.sub2FilterId]
                  .sort(function (t, e) {
                    return t.position - e.position
                  })
                  .map(function (t) {
                    return t.value
                  })
              } else this[o + 'List'] = []
            }
            for (var h = 0, p = i; h < p.length; h++) {
              var f = p[h]
              this[f + 'Selected'] && this.emptyFinalFilters(f)
            }
            this.sub3FilterList.length &&
              this.finalFilters.sub2Filter[this.positionId] &&
              this.addOptionsToFinalFilter('sub3Filter'),
              this.reactionList.length &&
                this.finalFilters.sub2Filter[this.positionId] &&
                this.addOptionsToFinalFilter('reaction')
          },
          selectSub3Filter: function (t) {
            var e = this
            ;(this.sub3FilterSelected = t),
              (this.showSub3Filters = !1),
              (this.sub3FilterId = Math.abs(
                this.hashCode(
                  this.sub3FilterSelected +
                    this.previousFilterName('sub3Filter')
                )
              ))
            var i = this.topViewRelation['sub3Filter']
            if (
              ((this[i + 'List'] = []),
              (this[this.topViewRelation[i] + 'List'] = []),
              this.allFiltersOptions[i] &&
                this.allFiltersOptions[i].hasOwnProperty(this.sub3FilterId))
            ) {
              var s = !0,
                a = !1,
                o = void 0
              try {
                for (
                  var n,
                    l = function () {
                      var t = n.value
                      t['position'] = t.hasOwnProperty('position')
                        ? t.position
                        : e.allFiltersOptions[i][e.sub3FilterId].findIndex(
                            function (e) {
                              return e.id === t.id
                            }
                          )
                    },
                    r = this.allFiltersOptions[i][this.sub3FilterId][
                      Symbol.iterator
                    ]();
                  !(s = (n = r.next()).done);
                  s = !0
                )
                  l()
              } catch (d) {
                ;(a = !0), (o = d)
              } finally {
                try {
                  s || null == r.return || r.return()
                } finally {
                  if (a) throw o
                }
              }
              this[i + 'List'] = this.allFiltersOptions[i][this.sub3FilterId]
                .sort(function (t, e) {
                  return t.position - e.position
                })
                .map(function (t) {
                  return t.value
                })
            } else this[i + 'List'] = []
            this[i + 'Selected'] && this.emptyFinalFilters(i),
              this.sub3FilterList.length &&
                this.finalFilters.sub3Filter[this.sub2FilterId] &&
                this.addOptionsToFinalFilter('reaction')
            var c = this.allFiltersOptions.sub3Filter[this.sub2FilterId]
            c &&
              c.length &&
              c[0].sub3FilterName &&
              (this.sub3FilterName[this.sub2FilterId] = c[0].sub3FilterName),
              (this.filterTitles['sub3Filter'][this.sub2FilterId] =
                this.filterTitles['sub3Filter'][this.sub2FilterId] ||
                this.sub3FilterName[this.sub2FilterId])
          },
          selectReaction: function (t) {
            var e = this
            ;(this.reactionSelected = t),
              (this.showReactions = !1),
              (this.reactionId = Math.abs(
                this.hashCode(
                  this.reactionSelected + this.previousFilterName('reaction')
                )
              ))
            var i = this.topViewRelation['reaction']
            if (
              ((this[i + 'List'] = []),
              this.allFiltersOptions[i] &&
                this.allFiltersOptions[i].hasOwnProperty(this.reactionId))
            ) {
              var s = !0,
                a = !1,
                o = void 0
              try {
                for (
                  var n,
                    l = function () {
                      var t = n.value
                      t['position'] = t.hasOwnProperty('position')
                        ? t.position
                        : e.allFiltersOptions[i][e.reactionId].findIndex(
                            function (e) {
                              return e.id === t.id
                            }
                          )
                    },
                    r = this.allFiltersOptions[i][this.reactionId][
                      Symbol.iterator
                    ]();
                  !(s = (n = r.next()).done);
                  s = !0
                )
                  l()
              } catch (h) {
                ;(a = !0), (o = h)
              } finally {
                try {
                  s || null == r.return || r.return()
                } finally {
                  if (a) throw o
                }
              }
              this[i + 'List'] = this.allFiltersOptions[i][this.reactionId]
                .sort(function (t, e) {
                  return t.position - e.position
                })
                .map(function (t) {
                  return t.value
                })
            } else this[i + 'List'] = []
            if (
              (this[i + 'Selected'] && this.emptyFinalFilters(i),
              this.reactionList.length &&
                (this.finalFilters.reaction[this.positionId] ||
                  this.finalFilters.reaction[this.sub2FilterId]) &&
                this.addOptionsToFinalFilter('stack'),
              this.sub3FilterId)
            ) {
              var c = this.allFiltersOptions.sub2Filter[this.positionId]
              if (c && c.length) {
                var d = c.find(function (t) {
                  return t.id === e.sub2FilterId
                })
                this.reactionName[this.sub2FilterId] = d.reactionName || ''
              }
              if (!this.reactionName[this.sub2FilterId]) {
                var u =
                  this.allFiltersOptions['reaction'] &&
                  this.allFiltersOptions['reaction'][this.sub3FilterId] &&
                  this.allFiltersOptions['reaction'][this.sub3FilterId].find(
                    function (t) {
                      return t.id === e.reactionId
                    }
                  )
                this.reactionName[this.sub2FilterId] =
                  (u && u.reactionName) || ''
              }
              !this.reactionName[this.sub2FilterId] &&
                this.allFiltersOptions['sub3Filter'][this.sub2FilterId] &&
                this.allFiltersOptions['sub3Filter'][this.sub2FilterId]
                  .length &&
                this.allFiltersOptions['sub3Filter'][this.sub2FilterId].forEach(
                  function (t) {
                    if (e.reactionName[e.sub2FilterId] || t.reactionName)
                      e.reactionName[e.sub2FilterId] =
                        e.reactionName[e.sub2FilterId] || t.reactionName
                    else {
                      var i = e.allFiltersOptions['reaction'][t.id] || []
                      i.forEach(function (t) {
                        t.reactionName &&
                          (e.reactionName[e.sub2FilterId] =
                            e.reactionName[e.sub2FilterId] || t.reactionName)
                      })
                    }
                  }
                ),
                (this.filterTitles['reaction'][this.sub2FilterId] =
                  this.filterTitles['reaction'][this.sub2FilterId] ||
                  this.reactionName[this.sub2FilterId])
            }
          },
          selectStack: function (t) {
            if (
              ((this.stackSelected = t),
              (this.showStacks = !1),
              (this.stackId = Math.abs(
                this.hashCode(
                  this.stackSelected + this.previousFilterName('stack')
                )
              )),
              this.allFiltersOptions &&
                this.allFiltersOptions.stackChild &&
                this.allFiltersOptions.stackChild[this.stackId] &&
                this.allFiltersOptions.stackChild[this.stackId].length)
            ) {
              var e = this.allFiltersOptions.stackChild[this.stackId]
              this.stackChildList = e.map(function (t) {
                return t.value
              })
              var i = e.find(function (t) {
                return t.isDefault
              })
              i && (this.stackChildDefault = i.value),
                (this.stackChildName[this.stackId] = e[0].stackChildName),
                (this.filterTitles['stackChild'][this.stackId] =
                  this.filterTitles['stackChild'][this.stackId] ||
                  this.stackChildName[this.stackId])
            } else
              (this.stackChildId = ''),
                (this.stackChildSelected = ''),
                (this.stackChildList = []),
                (this.stackChildDefault = '')
            this.addOptionsToFinalFilter('stackChild')
          },
          selectStackChild: function (t) {
            ;(this.stackChildSelected = t),
              (this.showStackChilds = !1),
              (this.stackChildId = Math.abs(
                this.hashCode(
                  this.stackChildSelected +
                    this.previousFilterName('stackChild')
                )
              ))
          },
          checkOptionsValidity: function (t) {
            var e = t.reduce(function (t, e) {
              return t && /^[a-zA-Z0-9-_ &.@//]+$/.test(e)
            }, !0)
            return (
              !!e ||
              'The option(s) are not valid. Option can contain alphabets, numbers, spaces and (-&_) only'
            )
          },
          stackChildNameChange: function () {
            this.stackChildList.length && this.debounceFunc1()
          },
          sub3FilterNameChange: function () {
            this.sub3FilterList.length && this.debounceFunc1()
          },
          reactionNameChange: function () {
            this.sub3FilterList.length &&
              this.reactionList.length &&
              this.debounceFunc1()
          },
          selectDefaultStackChild: function (t) {
            ;(this.stackChildDefault = t), this.debounceFunc1()
          },
          copyPasteFilterFunctionHelper: function (t, e) {
            for (var i = 0; i < this.parentFilters[t].length; i++) {
              var s = this.parentFilters[t][i]
              if (this[s + 'Id']) {
                ;(this[
                  'copy' == e
                    ? 'copiedFilterParentData'
                    : 'pasteFilterParentData'
                ][s] = {
                  id: this[s + 'Id'],
                  value: this[s + 'Selected'],
                }),
                  this.copyPasteFilterFunctionHelper(s, e)
                break
              }
            }
          },
          copyFilterFunction: function (t, e, i) {
            ;(this.copiedFilterData = Object(L['a'])({}, t, {
              id: Math.abs(this.hashCode(e + this.previousFilterName(t))),
              value: e,
              parentId: i,
              filterName: t,
            })),
              (this.copiedFilterParentData = {}),
              this.copyPasteFilterFunctionHelper(t, 'copy'),
              this.snackBarFunction('Data copied', 4e3, 'success')
          },
          showPasteConfirmationDialog: function (t, e) {
            var i = this.copiedFilterData[t].value
            if (
              this[t + 'List'] &&
              this[t + 'List'].find(function (t) {
                return t == i
              })
            )
              return (this.invalidPaste = !0), void (this.pasteDialog = !0)
            ;(this.pasteFilterData = Object(L['a'])({}, t, {
              id: Math.abs(this.hashCode(i + this.previousFilterName(t))),
              value: i,
              parentId: e,
              filterName: t,
            })),
              (this.pasteDialog = !0)
          },
          confirmPasteFilter: function () {
            var t = this,
              e = Object.keys(this.pasteFilterData)[0]
            this.copyPasteFilterFunctionHelper(e, 'paste')
            var i = {
              filterName: e,
              copyData: Ut(
                {},
                this.copiedFilterData,
                {},
                this.copiedFilterParentData
              ),
              pasteData: Ut(
                {},
                this.pasteFilterData,
                {},
                this.pasteFilterParentData
              ),
            }
            I['a'].put('filter/copyFilter', i).then(function (e) {
              e &&
                e.data &&
                e.data.status &&
                (t.snackBarFunction(e.data.message, 4e3, 'success'),
                (t.pasteDialog = !1),
                t.getFilters(),
                t.clearAllFilters())
            })
          },
          snackBarFunction: function (t) {
            var e = this,
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 4e3,
              s = arguments.length > 2 ? arguments[2] : void 0
            ;(this.showSnackbar = !0),
              (this.snackBarMessage = t),
              (this.snackBarType = s),
              setTimeout(function () {
                ;(e.snackBarMessage = ''),
                  (e.showSnackbar = !1),
                  (e.snackBarType = null)
              }, i)
          },
          defaultStackValueChange: function () {
            this.debounceFunc1()
          },
          debounceHelper: function () {
            this.saveData()
          },
          updateFilterTitlesAndHelperText: function (t) {
            var e = t.filterType,
              i = t.dataType,
              s = t.value,
              a = t.parentId,
              o = t.parentType,
              n = t.parentInfo
            'title' === i &&
              'stackChild' === e &&
              (this.$set(this.filterTitles[e], a, s), this.$forceUpdate()),
              I['a']
                .put('filter/titles', {
                  filterType: e,
                  dataType: i,
                  value: s,
                  parentId: a,
                  parentType: o,
                  parentInfo: n,
                })
                .then(function (t) {})
                .catch(function (t) {})
          },
          debounce: function (t, e) {
            var i = null
            return function () {
              clearTimeout(i)
              var s = arguments,
                a = this
              i = setTimeout(function () {
                t.apply(a, s)
              }, e)
            }
          },
        },
        mounted: function () {
          ;(this.debounceFunc = this.debounce(this.debounceHelper, 400)),
            (this.debounceFunc1 = this.debounce(this.debounceHelper, 800)),
            (this.updateFilterTitlesAndHelperTextDebounced = this.debounce(
              this.updateFilterTitlesAndHelperText,
              800
            ))
        },
      },
      Ht = Jt,
      $t = (i('b810'), i('2b5d')),
      Mt = Object(d['a'])(Ht, At, Et, !1, null, null, null),
      Kt = Mt.exports
    h()(Mt, {
      VBtn: f['a'],
      VCard: K['a'],
      VCardActions: St['a'],
      VCombobox: $t['a'],
      VDialog: kt['a'],
      VIcon: v['a'],
      VTextField: W['a'],
    })
    var Wt = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e
        return i(
          'div',
          {
            on: {
              click: function (e) {
                return t.closeDrops(e)
              },
            },
          },
          [
            i('SnackBar', {
              attrs: {
                showSnackbar: t.showSnackbar,
                message: t.snackBarMessage,
                color: t.snackBarType,
              },
            }),
            i(
              'v-dialog',
              {
                attrs: {
                  'max-width': '500',
                },
                model: {
                  value: t.addSubscriptionDialog,
                  callback: function (e) {
                    t.addSubscriptionDialog = e
                  },
                  expression: 'addSubscriptionDialog',
                },
              },
              [
                i(
                  'v-card',
                  [
                    i(
                      'div',
                      {
                        staticClass: 'headline p_10 bord_bot_lg',
                      },
                      [t._v('Add Subscription')]
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'p_10 bord_bot_lg',
                      },
                      [
                        i(
                          'div',
                          [
                            i('v-text-field', {
                              attrs: {
                                label: 'New Subscription',
                                clearable: '',
                                rules: [
                                  function () {
                                    return (
                                      !!t.newSubscription ||
                                      'This field is required'
                                    )
                                  },
                                ],
                                required: '',
                              },
                              model: {
                                value: t.newSubscription,
                                callback: function (e) {
                                  t.newSubscription = e
                                },
                                expression: 'newSubscription',
                              },
                            }),
                          ],
                          1
                        ),
                      ]
                    ),
                    i(
                      'v-card-actions',
                      [
                        i('div', {
                          staticClass: 'flex-grow-1',
                        }),
                        i(
                          'v-btn',
                          {
                            attrs: {
                              color: 'black darken-1',
                              text: '',
                            },
                            on: {
                              click: function (e) {
                                t.addSubscriptionDialog = !1
                              },
                            },
                          },
                          [t._v(' Close ')]
                        ),
                        i(
                          'v-btn',
                          {
                            attrs: {
                              color: 'green darken-1',
                            },
                            on: {
                              click: function (e) {
                                return t.addSubscription()
                              },
                            },
                          },
                          [t._v(' Add ')]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            i(
              'v-dialog',
              {
                attrs: {
                  'max-width': '500',
                },
                model: {
                  value: t.saveSubscriptionDialog,
                  callback: function (e) {
                    t.saveSubscriptionDialog = e
                  },
                  expression: 'saveSubscriptionDialog',
                },
              },
              [
                i(
                  'v-card',
                  [
                    i(
                      'div',
                      {
                        staticClass: 'headline p_10 bord_bot_lg',
                      },
                      [
                        t._v(
                          'Are you sure you want to set subscription to current filters'
                        ),
                      ]
                    ),
                    i(
                      'v-card-actions',
                      [
                        i('div', {
                          staticClass: 'flex-grow-1',
                        }),
                        i(
                          'v-btn',
                          {
                            attrs: {
                              color: 'black darken-1',
                              text: '',
                            },
                            on: {
                              click: function (e) {
                                t.saveSubscriptionDialog = !1
                              },
                            },
                          },
                          [t._v(' Close ')]
                        ),
                        i(
                          'v-btn',
                          {
                            attrs: {
                              color: 'green darken-1',
                              loading: t.setSubcriptionLoading,
                            },
                            on: {
                              click: function (e) {
                                return t.clickSetSubscription()
                              },
                            },
                          },
                          [t._v(' Save ')]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            i(
              'div',
              {
                staticClass: 'mainContainer ht_100 ml-5 mt-60',
              },
              [
                i(
                  'p',
                  {
                    staticClass: 'fs25 mr-5',
                  },
                  [
                    i(
                      'v-btn',
                      {
                        attrs: {
                          icon: '',
                          text: '',
                          small: '',
                          to: '/asd4154er45ds',
                        },
                      },
                      [i('v-icon', [t._v('keyboard_backspace')])],
                      1
                    ),
                    i('span', [
                      t._v('Add custom option(s) to Subscriptions :'),
                    ]),
                    i(
                      'v-btn',
                      {
                        staticClass: 'mr-10',
                        staticStyle: {
                          float: 'right',
                        },
                        attrs: {
                          color: 'primary darken-1',
                        },
                        on: {
                          click: function (e) {
                            e.stopPropagation(),
                              (t.addSubscriptionDialog = !0),
                              (t.newSubscription = null)
                          },
                        },
                      },
                      [t._v('Add Subscription')]
                    ),
                  ],
                  1
                ),
                i(
                  'div',
                  {
                    staticClass: 'd-flex align-center mr-5',
                  },
                  [
                    i(
                      'div',
                      {
                        staticStyle: {
                          flex: '0 1 25%',
                          margin: '20px',
                        },
                      },
                      [
                        i('v-select', {
                          attrs: {
                            items: t.subscriptionList,
                            'item-text': 'value',
                            label: 'Subscription',
                          },
                          on: {
                            change: t.setSubscriptionData,
                          },
                          model: {
                            value: t.selectedSubscription,
                            callback: function (e) {
                              t.selectedSubscription = e
                            },
                            expression: 'selectedSubscription',
                          },
                        }),
                      ],
                      1
                    ),
                    i(
                      'div',
                      {
                        staticStyle: {
                          flex: '0 1 75%',
                          display: 'flex',
                          'flex-direction': 'row-reverse',
                        },
                      },
                      [
                        i(
                          'v-btn',
                          {
                            staticClass: 'mr-10',
                            attrs: {
                              color: 'primary darken-1',
                              disabled:
                                t.saveClearButtonDisable ||
                                !this.selectedSubscription,
                              loading: t.startedSaving,
                            },
                            on: {
                              click: function (e) {
                                return t.saveData()
                              },
                            },
                          },
                          [t._v(' Save ')]
                        ),
                        i(
                          'v-btn',
                          {
                            staticClass: 'text-capitalize mr-10',
                            staticStyle: {
                              height: '36px',
                            },
                            attrs: {
                              small: '',
                              depressed: '',
                              color: 'black darken-1',
                              disabled: t.saveClearButtonDisable,
                              text: '',
                            },
                            on: {
                              click: function (e) {
                                return t.clearAllFilters()
                              },
                            },
                          },
                          [t._v(' Clear Selection ')]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
                i(
                  'div',
                  {
                    staticClass: 'allFilters mr-5',
                  },
                  [
                    i(
                      'div',
                      {
                        staticClass: 'upperFilters',
                        attrs: {
                          id: 'gameFilter',
                        },
                      },
                      [
                        i('DropDownSubscription', {
                          attrs: {
                            type: 'game',
                            dataList: t.gameList,
                            selectedData: t.selectedGame,
                            currentData: t.currentGame,
                            showDropdown: t.showDropdown.game,
                          },
                          on: {
                            setnextdata: t.setNextFilterFunc,
                            dropdownchange: t.changeDropdownState,
                            changeselectedstate: t.changeSelectedData,
                          },
                        }),
                      ],
                      1
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'upperFilters',
                        attrs: {
                          id: 'casinoFilter',
                        },
                      },
                      [
                        i('DropDownSubscription', {
                          attrs: {
                            type: 'casino',
                            dataList: t.casinoList,
                            selectedData: t.selectedCasino,
                            currentData: t.currentCasino,
                            showDropdown: t.showDropdown.casino,
                          },
                          on: {
                            setnextdata: t.setNextFilterFunc,
                            dropdownchange: t.changeDropdownState,
                            changeselectedstate: t.changeSelectedData,
                          },
                        }),
                      ],
                      1
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'upperFilters',
                        attrs: {
                          id: 'stakeFilter',
                        },
                      },
                      [
                        i('DropDownSubscription', {
                          attrs: {
                            type: 'stake',
                            dataList: t.stakeList,
                            selectedData: t.selectedStake,
                            currentData: t.currentStake,
                            showDropdown: t.showDropdown.stake,
                          },
                          on: {
                            setnextdata: t.setNextFilterFunc,
                            dropdownchange: t.changeDropdownState,
                            changeselectedstate: t.changeSelectedData,
                          },
                        }),
                      ],
                      1
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'upperFilters',
                        attrs: {
                          id: 'playerFilter',
                        },
                      },
                      [
                        i('DropDownSubscription', {
                          attrs: {
                            type: 'players',
                            dataList: t.playerList,
                            selectedData: t.selectedPlayer,
                            currentData: t.currentPlayer,
                            showDropdown: t.showDropdown.players,
                          },
                          on: {
                            setnextdata: t.setNextFilterFunc,
                            dropdownchange: t.changeDropdownState,
                            changeselectedstate: t.changeSelectedData,
                          },
                        }),
                      ],
                      1
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'upperFilters',
                        attrs: {
                          id: 'sequenceFilter',
                        },
                      },
                      [
                        i('DropDownSubscription', {
                          attrs: {
                            type: 'sequence',
                            dataList: t.sequenceList,
                            selectedData: t.selectedSequence,
                            currentData: t.currentSequence,
                            showDropdown: t.showDropdown.sequence,
                          },
                          on: {
                            setnextdata: t.setNextFilterFunc,
                            dropdownchange: t.changeDropdownState,
                            changeselectedstate: t.changeSelectedData,
                          },
                        }),
                      ],
                      1
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'upperFilters',
                        attrs: {
                          id: 'subSequenceFilter',
                        },
                      },
                      [
                        i('DropDownSubscription', {
                          attrs: {
                            type: 'subSequence',
                            name: 'sub filter 1',
                            dataList: t.subsequenceList,
                            selectedData: t.selectedSubsequence,
                            currentData: t.currentSubsequence,
                            showDropdown: t.showDropdown.subSequence,
                          },
                          on: {
                            setnextdata: t.setNextFilterFunc,
                            dropdownchange: t.changeDropdownState,
                            changeselectedstate: t.changeSelectedData,
                          },
                        }),
                      ],
                      1
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'upperFilters',
                        attrs: {
                          id: 'positionFilter',
                        },
                      },
                      [
                        i('DropDownSubscription', {
                          attrs: {
                            type: 'position',
                            name: 'action',
                            dataList: t.positionList,
                            selectedData: t.selectedPosition,
                            currentData: t.currentPosition,
                            showDropdown: t.showDropdown.position,
                          },
                          on: {
                            setnextdata: t.setNextFilterFunc,
                            dropdownchange: t.changeDropdownState,
                            changeselectedstate: t.changeSelectedData,
                          },
                        }),
                      ],
                      1
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'upperFilters',
                        attrs: {
                          id: 'sub2Filter',
                        },
                      },
                      [
                        i('DropDownSubscription', {
                          attrs: {
                            type: 'sub2Filter',
                            name: 'sub 2 filter',
                            dataList: t.sub2FilterList,
                            selectedData: t.selectedSub2Filter,
                            currentData: t.currentSub2Filter,
                            showDropdown: t.showDropdown.sub2Filter,
                          },
                          on: {
                            setnextdata: t.setNextFilterFunc,
                            dropdownchange: t.changeDropdownState,
                            changeselectedstate: t.changeSelectedData,
                          },
                        }),
                      ],
                      1
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'upperFilters',
                        attrs: {
                          id: 'sub3Filter',
                        },
                      },
                      [
                        i('DropDownSubscription', {
                          attrs: {
                            type: 'sub3Filter',
                            name: 'sub 3 filter',
                            dataList: t.sub3FilterList,
                            selectedData: t.selectedSub3Filter,
                            currentData: t.currentSub3Filter,
                            showDropdown: t.showDropdown.sub3Filter,
                          },
                          on: {
                            setnextdata: t.setNextFilterFunc,
                            dropdownchange: t.changeDropdownState,
                            changeselectedstate: t.changeSelectedData,
                          },
                        }),
                      ],
                      1
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'upperFilters',
                        attrs: {
                          id: 'reactionFilter',
                        },
                      },
                      [
                        i('DropDownSubscription', {
                          attrs: {
                            type: 'reaction',
                            dataList: t.reactionList,
                            selectedData: t.selectedReaction,
                            currentData: t.currentReaction,
                            showDropdown: t.showDropdown.reaction,
                          },
                          on: {
                            setnextdata: t.setNextFilterFunc,
                            dropdownchange: t.changeDropdownState,
                            changeselectedstate: t.changeSelectedData,
                          },
                        }),
                      ],
                      1
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'upperFilters',
                        attrs: {
                          id: 'stackFilter',
                        },
                      },
                      [
                        i('DropDownSubscription', {
                          attrs: {
                            type: 'stack',
                            dataList: t.stackList,
                            selectedData: t.selectedStack,
                            currentData: t.currentStack,
                            showDropdown: t.showDropdown.stack,
                          },
                          on: {
                            setnextdata: t.setNextFilterFunc,
                            dropdownchange: t.changeDropdownState,
                            changeselectedstate: t.changeSelectedData,
                          },
                        }),
                      ],
                      1
                    ),
                    i(
                      'div',
                      {
                        staticClass: 'upperFilters',
                        attrs: {
                          id: 'stackChildFilter',
                        },
                      },
                      [
                        i('DropDownSubscription', {
                          attrs: {
                            type: 'stackChild',
                            name: 'stack child',
                            dataList: t.stackChildList,
                            selectedData: t.selectedStackChild,
                            currentData: t.currentStackChild,
                            showDropdown: t.showDropdown.stackChild,
                          },
                          on: {
                            setnextdata: t.setNextFilterFunc,
                            dropdownchange: t.changeDropdownState,
                            changeselectedstate: t.changeSelectedData,
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            ),
          ],
          1
        )
      },
      Gt = [],
      Qt = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e
        return i(
          'div',
          {
            staticClass: 'subscriptionDropdown',
          },
          [
            i(
              'p',
              {
                staticClass: 'text-upper mb5',
              },
              [i('strong', [t._v(t._s(t.name || t.type))])]
            ),
            i(
              'div',
              {
                staticClass: 'customDrop bord_2 justifyBetween p_5_10',
                class: {
                  optionSelectedBackground: t.currentData && t.currentData.id,
                },
                on: {
                  click: function (e) {
                    return e.stopPropagation(), t.clickDropDown(e)
                  },
                },
              },
              [
                i(
                  'span',
                  {
                    staticClass: 'text-upper',
                  },
                  [
                    t._v(
                      t._s(
                        t.currentData && t.currentData.value
                          ? t.currentData.value
                          : ''
                      )
                    ),
                  ]
                ),
                t.showDropdown
                  ? i(
                      'v-icon',
                      {
                        staticClass: 'dropIcon',
                      },
                      [t._v('keyboard_arrow_up')]
                    )
                  : i(
                      'v-icon',
                      {
                        staticClass: 'dropIcon',
                      },
                      [t._v('keyboard_arrow_down')]
                    ),
              ],
              1
            ),
            t.showDropdown && t.dataList.length
              ? i(
                  'div',
                  {
                    staticClass: 'optionsBlock',
                  },
                  t._l(t.dataList, function (e, s) {
                    return i(
                      'div',
                      {
                        key: t.type + s,
                      },
                      [
                        i(
                          'div',
                          {
                            staticClass: 'p_5_10 text-upper optionContainer',
                            on: {
                              click: function (i) {
                                return i.stopPropagation(), t.setNextData(e)
                              },
                            },
                          },
                          [
                            i(
                              'span',
                              {
                                staticClass: 'optionName',
                              },
                              [t._v(t._s(e.value))]
                            ),
                            i(
                              'div',
                              {
                                staticClass: 'd-flex flex-row-reverse',
                              },
                              [
                                t.selectedData.find(function (t) {
                                  return t && t.id == e.id
                                })
                                  ? i(
                                      'v-icon',
                                      {
                                        staticClass: 'ms-1',
                                        attrs: {
                                          color: 'grey darken-1',
                                        },
                                        on: {
                                          click: function (i) {
                                            return (
                                              i.stopPropagation(),
                                              t.selectItem(e, 'uncheck')
                                            )
                                          },
                                        },
                                      },
                                      [t._v('check_box')]
                                    )
                                  : i(
                                      'v-icon',
                                      {
                                        staticClass: 'ms-1',
                                        attrs: {
                                          color: 'grey darken-1',
                                        },
                                        on: {
                                          click: function (i) {
                                            return (
                                              i.stopPropagation(),
                                              t.selectItem(e, 'check')
                                            )
                                          },
                                        },
                                      },
                                      [t._v('check_box_outline_blank')]
                                    ),
                              ],
                              1
                            ),
                          ]
                        ),
                      ]
                    )
                  }),
                  0
                )
              : t._e(),
          ]
        )
      },
      zt = [],
      Yt = {
        name: 'dropDownSubscription',
        data: function () {
          return {}
        },
        props: [
          'type',
          'name',
          'dataList',
          'showDropdown',
          'selectedData',
          'currentData',
        ],
        watch: {
          dataList: function (t, e) {
            if (t && t.length) {
              if (t && e && t.length && e.length)
                if (t.length != e.length)
                  this.$emit('changeselectedstate', this.type, 'reset', null),
                    this.$emit('dropdownchange', this.type, !1)
                else
                  for (var i = 0; i < t.length; i++)
                    if (t[i] && e[i] && t[i].id != e[i].id) {
                      this.$emit(
                        'changeselectedstate',
                        this.type,
                        'reset',
                        null
                      ),
                        this.$emit('dropdownchange', this.type, !1)
                      break
                    }
            } else
              this.$emit('changeselectedstate', this.type, 'reset', null),
                this.$emit('dropdownchange', this.type, !1)
          },
        },
        methods: {
          setNextData: function (t) {
            ;(this.currentData && t && t.id == this.currentData.id) ||
              (this.$emit('dropdownchange', this.type, !1),
              this.$emit('setnextdata', this.type, t))
          },
          selectItem: function (t, e) {
            'check' == e
              ? this.$emit('changeselectedstate', this.type, 'check', t)
              : 'uncheck' == e &&
                this.$emit('changeselectedstate', this.type, 'uncheck', t)
          },
          clickDropDown: function () {
            if (this.dataList && this.dataList.length) {
              var t = !this.showDropdown
              this.$emit('dropdownchange', this.type, t)
            }
          },
        },
      },
      Xt = Yt,
      Zt = Object(d['a'])(Xt, Qt, zt, !1, null, '33c8791a', null),
      te = Zt.exports
    function ee(t, e) {
      var i = Object.keys(t)
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t)
        e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          })),
          i.push.apply(i, s)
      }
      return i
    }
    function ie(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {}
        e % 2
          ? ee(i, !0).forEach(function (e) {
              Object(L['a'])(t, e, i[e])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
          : ee(i).forEach(function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            })
      }
      return t
    }
    h()(Zt, {
      VIcon: v['a'],
    })
    var se = {
        name: 'AddSubscription',
        mixins: [ot['a']],
        components: {
          DropDownSubscription: te,
          SnackBar: ft,
        },
        data: function () {
          return {
            finalFilters: {
              game: [],
              casino: {},
              stake: {},
              players: {},
              sequence: {},
              subSequence: {},
              position: {},
              sub2Filter: {},
              sub3Filter: {},
              reaction: {},
              stack: {},
              stackChild: {},
            },
            startedSaving: !1,
            saveClearButtonDisable: !0,
            showDropdown: {
              game: !1,
              casino: !1,
              stake: !1,
              players: !1,
              sequence: !1,
              subSequence: !1,
              position: !1,
              sub2Filter: !1,
              sub3Filter: !1,
              reaction: !1,
              stack: !1,
              stackChild: !1,
            },
            addSubscriptionDialog: !1,
            newSubscription: null,
            selectedArr: [
              'selectedGame',
              'selectedCasino',
              'selectedStake',
              'selectedPlayer',
              'selectedSequence',
              'selectedSubsequence',
              'selectedPosition',
              'selectedSub2Filter',
              'selectedSub3Filter',
              'selectedReaction',
              'selectedStack',
              'selectedStackChild',
            ],
            dataKey: [
              'game',
              'casino',
              'stake',
              'players',
              'sequence',
              'subSequence',
              'position',
              'sub2Filter',
              'sub3Filter',
              'reaction',
              'stack',
              'stackChild',
            ],
            currentArr: [
              'currentGame',
              'currentCasino',
              'currentStake',
              'currentPlayer',
              'currentSequence',
              'currentSubsequence',
              'currentPosition',
              'currentSub2Filter',
              'currentSub3Filter',
              'currentReaction',
              'currentStack',
              'currentStackChild',
            ],
            listArr: [
              'gameList',
              'casinoList',
              'stakeList',
              'playerList',
              'sequenceList',
              'subsequenceList',
              'positionList',
              'sub2FilterList',
              'sub3FilterList',
              'reactionList',
              'stackList',
              'stackChildList',
            ],
            subscriptionList: [],
            selectedSubscription: null,
            currentSubscriptionData: null,
            gameList: [],
            selectedGame: [],
            currentGame: null,
            casinoList: [],
            selectedCasino: [],
            currentCasino: null,
            stakeList: [],
            selectedStake: [],
            currentStake: null,
            playerList: [],
            selectedPlayer: [],
            currentPlayer: null,
            sequenceList: [],
            selectedSequence: [],
            currentSequence: null,
            subsequenceList: [],
            selectedSubsequence: [],
            currentSubsequence: null,
            positionList: [],
            selectedPosition: [],
            currentPosition: null,
            sub2FilterList: [],
            selectedSub2Filter: [],
            currentSub2Filter: null,
            sub3FilterList: [],
            selectedSub3Filter: [],
            currentSub3Filter: null,
            reactionList: [],
            selectedReaction: [],
            currentReaction: null,
            stackList: [],
            selectedStack: [],
            currentStack: null,
            stackChildList: [],
            selectedStackChild: [],
            currentStackChild: null,
            saveSubscriptionResponse: null,
            setSubcriptionLoading: !1,
            saveSubscriptionDialog: !1,
            currentSelectedHash: [],
            changedData: {
              currentFilter: null,
              changedArray: [],
            },
            filtersTopDownRelation: {
              game: ['casino'],
              casino: ['stake'],
              stake: ['players'],
              players: ['sequence'],
              sequence: ['subSequence', 'position'],
              subSequence: ['position'],
              position: ['sub2Filter', 'reaction', 'stack'],
              sub2Filter: ['sub3Filter', 'reaction'],
              sub3Filter: ['reaction'],
              reaction: ['stack'],
              stack: ['stackChild'],
            },
            currentSelectedFilter: null,
            showSnackbar: !1,
            snackBarMessage: '',
            snackBarType: null,
          }
        },
        created: function () {
          this.getFilters()
        },
        methods: {
          getFilters: function () {
            var t = this
            I['a'].get('filter').then(function (e) {
              if (200 === e.status && e.data.success) {
                if (
                  ((t.allFiltersOptions = e.data.result.data),
                  t.allFiltersOptions.hasOwnProperty('game'))
                ) {
                  var i = !0,
                    s = !1,
                    a = void 0
                  try {
                    for (
                      var o,
                        n = function () {
                          var e = o.value
                          ;-1 ===
                            t.finalFilters.game.findIndex(function (t) {
                              return t.id === e.id
                            }) &&
                            ((e['position'] = e.hasOwnProperty('position')
                              ? e.position
                              : t.allFiltersOptions.game.findIndex(function (
                                  t
                                ) {
                                  return t.id === e.id
                                })),
                            t.finalFilters.game.push(e))
                        },
                        l = t.allFiltersOptions.game[Symbol.iterator]();
                      !(i = (o = l.next()).done);
                      i = !0
                    )
                      n()
                  } catch (r) {
                    ;(s = !0), (a = r)
                  } finally {
                    try {
                      i || null == l.return || l.return()
                    } finally {
                      if (s) throw a
                    }
                  }
                }
                t.subscriptionList = e.data.result.subscription || []
              }
            })
          },
          updateSelected: function (t, e) {
            for (
              var i = this,
                s = this[e].filter(function (t) {
                  return i.currentSubscriptionData.hashArray.find(function (e) {
                    return e == t.id
                  })
                }),
                a = 0;
              a < s.length;
              a++
            )
              this[t].push(s[a])
          },
          setSubscriptionData: function () {
            var t = this
            this.clearAllFilters(!0),
              (this.currentSubscriptionData = this.subscriptionList.find(
                function (e) {
                  return e.value == t.selectedSubscription
                }
              )),
              (this.gameList = this.finalFilters.game.sort(function (t, e) {
                return t.position - e.position
              })),
              this.updateSelected('selectedGame', 'gameList')
          },
          updateChangedData: function (t, e, i) {
            if (i && i.id) {
              'reset' == e &&
                ((this.changedData.currentFilter = null),
                (this.changedData.changedArray = [])),
                this.changedData.currentFilter != t &&
                  (this.changedData.changedArray = []),
                (this.changedData.currentFilter = t)
              var s = ie({}, i)
              'check' == e
                ? (s.action = 'check')
                : 'uncheck' == e
                ? (s.action = 'uncheck')
                : 'selected' == e && (s.action = 'selected')
              var a = this.changedData.changedArray.find(function (t) {
                return t && t.id == i.id
              })
              a &&
              (('check' == a.action && 'uncheck' == e) ||
                ('uncheck' == a.action && 'check' == e))
                ? (this.changedData.changedArray = this.changedData.changedArray.filter(
                    function (t) {
                      return t && t.id != i.id
                    }
                  ))
                : 'selected' == s.action
                ? (this.changedData.changedArray = [s])
                : this.changedData.changedArray.push(s)
            }
          },
          resetSelectedDataHelper: function (t, e, i) {
            var s = this[e],
              a = this.dataKey.findIndex(function (e) {
                return e == t
              })
            if (((a += 1), a != this.dataKey.length))
              for (var o = a; o < s.length; o++)
                this[s[o]] = 'null' === i ? null : []
          },
          resetHelper: function (t) {
            this.resetSelectedDataHelper(t, 'listArr'),
              this.resetSelectedDataHelper(t, 'selectedArr'),
              this.resetSelectedDataHelper(t, 'currentArr', 'null')
          },
          changeSelectedData: function (t, e, i) {
            var s
            if ('game' == t) s = 'selectedGame'
            else if ('casino' == t) s = 'selectedCasino'
            else if ('stake' == t) s = 'selectedStake'
            else if ('players' == t) s = 'selectedPlayer'
            else if ('sequence' == t) s = 'selectedSequence'
            else if ('subSequence' == t) s = 'selectedSubsequence'
            else if ('sub2Filter' == t) s = 'selectedSub2Filter'
            else if ('sub3Filter' == t) s = 'selectedSub2Filter'
            else if ('position' == t) s = 'selectedPosition'
            else if ('reaction' == t) s = 'selectedReaction'
            else if ('stack' == t) s = 'selectedStack'
            else {
              if ('stackChild' != t) return
              s = 'selectedStackChild'
            }
            'check' == e
              ? this[s].push(i)
              : 'uncheck' == e &&
                this[s].splice(
                  this[s].findIndex(function (t) {
                    return t && t.id == i.id
                  }),
                  1
                ),
              this.updateChangedData(t, e, i),
              this.filterSelectFunc(t, this[s])
          },
          setDropDownData: function (t) {
            for (var e in this.showDropdown) this.showDropdown[e] = !1
            t && (this.showDropdown[t] = !0)
          },
          setNextFilterFunc: function (t, e) {
            ;(this.currentSelectedFilter = t),
              (this.saveClearButtonDisable = !1),
              this.setDropDownData(),
              'game' == t
                ? ((this.currentGame = e),
                  this.resetHelper(t),
                  this.setCasino())
                : 'casino' == t
                ? ((this.currentCasino = e),
                  this.resetHelper(t),
                  this.setStake())
                : 'stake' == t
                ? ((this.currentStake = e),
                  this.resetHelper(t),
                  this.setPlayer())
                : 'players' == t
                ? ((this.currentPlayer = e),
                  this.resetHelper(t),
                  this.setSequence())
                : 'sequence' == t
                ? ((this.currentSequence = e),
                  this.resetHelper(t),
                  this.setSubsequence(),
                  this.setPosition())
                : 'subSequence' == t
                ? ((this.currentSubsequence = e),
                  this.resetHelper(t),
                  this.setPosition())
                : 'position' == t
                ? ((this.currentPosition = e),
                  this.resetHelper(t),
                  this.setSub2Filter(),
                  this.setReaction(),
                  this.setStack())
                : 'sub2Filter' == t
                ? ((this.currentSub2Filter = e),
                  this.resetHelper(t),
                  this.setSub3Filter(),
                  this.setReaction())
                : 'sub3Filter' == t
                ? ((this.currentSub3Filter = e),
                  this.resetHelper(t),
                  this.setReaction())
                : 'reaction' == t
                ? ((this.currentReaction = e),
                  this.resetHelper(t),
                  this.setStack())
                : 'stack' == t
                ? ((this.currentStack = e),
                  this.resetHelper(t),
                  this.setStackChild())
                : 'stackChild' == t && (this.currentStackChild = e),
              this.updateChangedData(t, 'selected', e)
          },
          filterSelectFunc: function (t, e) {
            ;(this.saveClearButtonDisable = !1),
              e && e.length && this.setDropDownData(t),
              'game' == t
                ? (this.selectedGame = e)
                : 'casino' == t
                ? (this.selectedCasino = e)
                : 'stake' == t
                ? (this.selectedStake = e)
                : 'players' == t
                ? (this.selectedPlayer = e)
                : 'sequence' == t
                ? (this.selectedSequence = e)
                : 'subSequence' == t
                ? (this.selectedSubsequence = e)
                : 'position' == t
                ? (this.selectedPosition = e)
                : 'sub2Filter' == t
                ? (this.selectedSub2Filter = e)
                : 'sub3Filter' == t
                ? (this.selectedSub3Filter = e)
                : 'reaction' == t
                ? (this.selectedReaction = e)
                : 'stack' == t
                ? (this.selectedStack = e)
                : 'stackChild' == t && (this.selectedStackChild = e)
          },
          helperFunc: function (t, e, i) {
            var s = []
            return t && (s = this.allFiltersOptions[i][t.id] || []), s
          },
          setCasino: function () {
            ;(this.casinoList = this.helperFunc(
              this.currentGame,
              this.gameList,
              'casino'
            )),
              this.updateSelected('selectedCasino', 'casinoList')
          },
          setStake: function () {
            ;(this.stakeList = this.helperFunc(
              this.currentCasino,
              this.casinoList,
              'stake'
            )),
              this.updateSelected('selectedStake', 'stakeList'),
              (this.currentPlayer = null)
          },
          setPlayer: function () {
            ;(this.playerList = this.helperFunc(
              this.currentStake,
              this.stakeList,
              'players'
            )),
              this.updateSelected('selectedPlayer', 'playerList')
          },
          setSequence: function () {
            ;(this.sequenceList = this.helperFunc(
              this.currentPlayer,
              this.playerList,
              'sequence'
            )),
              this.updateSelected('selectedSequence', 'sequenceList')
          },
          setSubsequence: function () {
            ;(this.subsequenceList = this.helperFunc(
              this.currentSequence,
              this.sequenceList,
              'subSequence'
            )),
              this.updateSelected('selectedSubsequence', 'subsequenceList')
          },
          setPosition: function () {
            ;(this.positionList = this.helperFunc(
              this.currentSubsequence,
              this.subsequenceList,
              'position'
            )),
              (this.positionList && this.positionList.length) ||
                (this.positionList = this.helperFunc(
                  this.currentSequence,
                  this.sequenceList,
                  'position'
                )),
              this.updateSelected('selectedPosition', 'positionList')
          },
          setSub2Filter: function () {
            ;(this.sub2FilterList = this.helperFunc(
              this.currentPosition,
              this.positionList,
              'sub2Filter'
            )),
              this.updateSelected('selectedSub2Filter', 'sub2FilterList')
          },
          setSub3Filter: function () {
            ;(this.sub3FilterList = this.helperFunc(
              this.currentSub2Filter,
              this.sub2FilterList,
              'sub3Filter'
            )),
              this.updateSelected('selectedSub3Filter', 'sub3FilterList')
          },
          setReaction: function () {
            ;(this.reactionList = this.helperFunc(
              this.currentSub3Filter,
              this.sub3FilterList,
              'reaction'
            )),
              (this.reactionList && this.reactionList.length) ||
                (this.reactionList = this.helperFunc(
                  this.currentSub2Filter,
                  this.sub2FilterList,
                  'reaction'
                )),
              (this.reactionList && this.reactionList.length) ||
                (this.reactionList = this.helperFunc(
                  this.currentPosition,
                  this.positionList,
                  'reaction'
                )),
              this.updateSelected('selectedReaction', 'reactionList')
          },
          setStack: function () {
            ;(this.stackList = this.helperFunc(
              this.currentReaction,
              this.reactionList,
              'stack'
            )),
              (this.stackList && this.stackList.length) ||
                (this.stackList = this.helperFunc(
                  this.currentPosition,
                  this.positionList,
                  'stack'
                )),
              this.updateSelected('selectedStack', 'stackList')
          },
          setStackChild: function () {
            ;(this.stackChildList = this.helperFunc(
              this.currentStack,
              this.stackList,
              'stackChild'
            )),
              this.updateSelected('selectedStackChild', 'stackChildList')
          },
          addSubscription: function () {
            var t = this
            this.newSubscription &&
              I['a']
                .post('/addSubscription', {
                  subscription: String(this.newSubscription).toUpperCase(),
                })
                .then(function (e) {
                  200 === e.status && e.data.success
                    ? (t.getFilters(), (t.addSubscriptionDialog = !1))
                    : ((t.addSubscriptionDialog = !1),
                      t.snackBarFunction('Error while saving data'))
                })
                .catch(function () {
                  ;(t.addSubscriptionDialog = !1),
                    t.snackBarFunction('Error while saving data')
                })
          },
          clearAllFilters: function (t) {
            this.resetHelper(),
              t ||
                ((this.saveClearButtonDisable = !0),
                (this.selectedSubscription = null),
                (this.currentSubscriptionData = null))
          },
          changeDropdownState: function (t, e) {
            !0 === e
              ? (this.closeDrops(), (this.showDropdown[t] = !0))
              : (this.showDropdown[t] = !1)
          },
          closeDrops: function () {
            for (var t in this.showDropdown) this.showDropdown[t] = !1
          },
          saveData: function () {
            var t = this
            if (this.selectedSubscription) {
              var e = this,
                i = [],
                s = this.selectedArr,
                a = this.dataKey,
                o = [],
                n = []
              if (
                ((i = Object(tt['a'])(this.currentSubscriptionData.hashArray)),
                this.changedData &&
                  this.changedData.changedArray &&
                  this.changedData.changedArray.length)
              ) {
                for (
                  var l,
                    r = function (e) {
                      var i = t.changedData.changedArray[e],
                        s = t.currentSubscriptionData.hashArray.find(function (
                          t
                        ) {
                          return t == i.id
                        })
                      'check' == i.action
                        ? s || d(t.changedData.currentFilter, i)
                        : 'uncheck' == i.action &&
                          s &&
                          d(t.changedData.currentFilter, i)
                    },
                    c = 0;
                  c < this.changedData.changedArray.length;
                  c++
                )
                  r(c)
                ;(o = o.map(function (t) {
                  return t && t.id
                })),
                  (n = n.map(function (t) {
                    return t && t.id
                  })),
                  (l = i).push.apply(l, Object(tt['a'])(o)),
                  (i = i.filter(function (t) {
                    return !n.find(function (e) {
                      return e == t
                    })
                  })),
                  (i = i.filter(function (t, e, i) {
                    return i.indexOf(t) === e
                  })),
                  (this.currentSelectedHash = i),
                  (this.saveSubscriptionDialog = !0)
              }
            }
            function d(t, i) {
              var s = e.dataKey.findIndex(function (e) {
                return String(e).toLowerCase() == String(t).toLowerCase()
              })
              if (-1 != s) {
                var a = ie({}, i)
                delete a.action
                var l = [a]
                if (
                  (e.selectedArr[s] &&
                    'selectedStackChild' != e.selectedArr[s] &&
                    l.push.apply(l, Object(tt['a'])(u(a, e.selectedArr[s]))),
                  'check' == i.action)
                ) {
                  var r,
                    c = []
                  ;(c = c.filter(function (t) {
                    return (
                      t &&
                      !e.currentSubscriptionData.hashArray.find(function (e) {
                        return e == t.id
                      })
                    )
                  })),
                    (r = o).push.apply(r, Object(tt['a'])(c).concat(l))
                } else if ('uncheck' == i.action) {
                  var d
                  ;(d = n).push.apply(d, l)
                }
              }
            }
            function u(t, i) {
              var o = []
              if ('selectedStackChild' == i) return o
              if (t && t.id) {
                var n = s.indexOf(i) + 1,
                  l = e.allFiltersOptions[a[n]][t.id],
                  r = s[n]
                h(l, o, r),
                  'selectedSequence' == i || 'selectedSub2Filter' == i
                    ? ((n = s.indexOf(i) + 2),
                      (l = e.allFiltersOptions[a[n]][t.id] || []),
                      (r = s[n]),
                      h(l, o, r))
                    : 'selectedPosition' == i &&
                      ((n = s.indexOf(i) + 3),
                      (l = e.allFiltersOptions[a[n]][t.id]),
                      (r = s[n]),
                      h(l, o, r),
                      (n = s.indexOf(i) + 4),
                      (l = e.allFiltersOptions[a[n]][t.id] || []),
                      (r = s[n]),
                      h(l, o, r))
              }
              return o
            }
            function h(t, e, i) {
              if (t) {
                e.push.apply(e, Object(tt['a'])(t))
                for (var s = 0; s < t.length; s++) {
                  var a = []
                  i && (a = u(t[s], i)), e.push.apply(e, Object(tt['a'])(a))
                }
              }
            }
          },
          clickSetSubscription: function () {
            if (this.selectedSubscription) {
              var t = ie({}, this.currentSubscriptionData)
              ;(t.hashArray = this.currentSelectedHash),
                (this.setSubcriptionLoading = !0),
                this.saveSubscription(t)
            }
          },
          saveSubscription: function (t) {
            var e = this,
              i = function () {
                e.clearAllFilters(),
                  e.closeDrops(),
                  (e.saveSubscriptionDialog = !1),
                  (e.setSubcriptionLoading = !1),
                  (e.changedData.currentFilter = null),
                  (e.changedData.changedArray = [])
              }
            I['a']
              .post('setSubscription', t)
              .then(function (s) {
                if (200 === s.status && s.data.success) {
                  e.saveSubscriptionResponse = s.data
                  var a = e.subscriptionList.find(function (e) {
                    return e.value == t.value
                  })
                  a.hashArray = t.hashArray
                }
                i()
              })
              .catch(function (t) {
                i(t), e.snackBarFunction('Error while saving data')
              })
          },
          snackBarFunction: function (t) {
            var e = this,
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 4e3,
              s =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 'error'
            ;(this.showSnackbar = !0),
              (this.snackBarMessage = t),
              (this.snackBarType = s),
              setTimeout(function () {
                ;(e.snackBarMessage = ''),
                  (e.showSnackbar = !1),
                  (e.snackBarType = null)
              }, i)
          },
        },
      },
      ae = se,
      oe = (i('c635'), i('b974')),
      ne = Object(d['a'])(ae, Wt, Gt, !1, null, null, null),
      le = ne.exports
    h()(ne, {
      VBtn: f['a'],
      VCard: K['a'],
      VCardActions: St['a'],
      VDialog: kt['a'],
      VIcon: v['a'],
      VSelect: oe['a'],
      VTextField: W['a'],
    }),
      s['a'].use(U['a'])
    var re = new U['a']({
      routes: [
        {
          path: '/',
          name: 'home',
          component: Q,
        },
        {
          path: '/user',
          name: 'user',
          component: function () {
            return i.e('user').then(i.bind(null, 'a281'))
          },
        },
        {
          path: '/asd4154er45ds',
          name: 'admin',
          component: Nt,
        },
        {
          path: '/asd4154er45ds/addfilter',
          name: 'addFilter',
          component: Kt,
        },
        {
          path: '/asd4154er45ds/addSubscription',
          name: 'addSubscription',
          component: le,
        },
      ],
    })
    re.beforeEach(function (t, e, i) {
      window.$isAuthenticated &&
        (('admin' !== t.name &&
          'addFilter' !== t.name &&
          'addSubscription' !== t.name) ||
        !s['a'].prototype.$userType.administrator
          ? 'user' === t.name &&
            (s['a'].prototype.$userType.subscriber ||
              s['a'].prototype.$userType.administrator) &&
            i()
          : i())
    })
    var ce = re,
      de = i('f309'),
      ue = i('5607')
    s['a'].use(de['a'], {
      components: {
        VBtn: f['a'],
        VAppBar: p['a'],
        VToolbarTitle: m['a'],
        VSpacer: b['a'],
        VCard: K['a'],
        VCardActions: St['a'],
        VDialog: kt['a'],
        VColorPicker: Ct['a'],
      },
      directives: {
        Ripple: ue['a'],
      },
    })
    var he = new de['a']({
      icons: {
        iconfont: 'md',
      },
    })
    i.d(e, 'EventBus', function () {
      return pe
    }),
      (s['a'].config.productionTip = !1)
    var pe = new s['a']()
    new s['a']({
      router: ce,
      vuetify: he,
      render: function (t) {
        return t(V)
      },
    }).$mount('#app')
  },
  '56ee': function (t, e, i) {
    'use strict'
    var s = i('161d'),
      a = i.n(s)
    a.a
  },
  '5c0b': function (t, e, i) {
    'use strict'
    var s = i('6879'),
      a = i.n(s)
    a.a
  },
  6879: function (t, e, i) {},
  8229: function (t, e, i) {
    'use strict'
    var s = {
      methods: {
        hashCode: function (t) {
          var e,
            i,
            s = 0
          if (0 === t.length) return s
          for (e = 0; e < t.length; e++)
            (i = t.charCodeAt(e)), (s = (s << 5) - s + i), (s |= 0)
          return s
        },
      },
    }
    e['a'] = s
  },
  8686: function (t, e, i) {},
  a5ae: function (t, e, i) {},
  b810: function (t, e, i) {
    'use strict'
    var s = i('2a66'),
      a = i.n(s)
    a.a
  },
  c635: function (t, e, i) {
    'use strict'
    var s = i('8686'),
      a = i.n(s)
    a.a
  },
})
