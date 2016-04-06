/*
 * Welcome to the new js2coffee 2.0, now
 * rewritten to use the esprima parser.
 * try it out!
 */
var Range, Scope, Syntax, Tree, Variable, deselect, display, editor, parse, select, showChain, treeify,
  bind = function(fn, me){ 
    return function(){ 
      return fn.apply(me, arguments); 
    }; 
  };

Tree = (function() {
  function Tree(_parent, _root, children) {
    var child, j, len;
    this._parent = _parent;
    this._root = _root;
    this.root = bind(this.root, this);
    this.parent = bind(this.parent, this);
    this._children = [];
    if (children instanceof Array) {
      for (j = 0, len = children.length; j < len; j++) {
        child = children[j];
        this.add(child);
      }
    }
  }

  Tree.prototype.parent = function(parent) {
    if (parent === void 0) {
      return this._parent;
    } else {
      this._parent = parent;
      return this;
    }
  };

  Tree.prototype.root = function(root) {
    if (root === void 0) {
      return this._root;
    } else {
      this._root = root;
      return this;
    }
  };

  Tree.prototype.add = function(child) {
    this._children.push(child instanceof Tree ? child.parent(this) : new Tree(this, child));
    return this;
  };

  Tree.prototype.toString = function(ind) {
    var child, i, j, len, ref, str;
    if (ind == null) {
      ind = 0;
    }
    str = '';
    str += ((function() {
      var j, ref, results;
      results = [];
      for (i = j = 0, ref = 4 * ind; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        results.push(' ');
      }
      return results;
    })()).join('');
    str += '(';
    str += this._root;
    if (this._children.length) {
      str += ', [';
      str += '\n';
      ref = this._children;
      for (j = 0, len = ref.length; j < len; j++) {
        child = ref[j];
        str += child.toString(ind + 1) + ',\n';
      }
      str += ((function() {
        var k, ref1, results;
        results = [];
        for (i = k = 0, ref1 = 4 * ind; 0 <= ref1 ? k < ref1 : k > ref1; i = 0 <= ref1 ? ++k : --k) {
          results.push(' ');
        }
        return results;
      })()).join('');
      str += ']';
    }
    str += ')';
    return str;
  };

  Tree.prototype.toObject = function() {
    var child;
    return {
      root: this._root,
      children: (function() {
        var j, len, ref, results;
        ref = this._children;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          child = ref[j];
          results.push(child.toObject());
        }
        return results;
      }).call(this)
    };
  };

  Tree.prototype.toJSON = function() {
    return JSON.stringify(this.toObject(), null, 2);
  };

  return Tree;

})();

Range = ace.require('ace/range').Range;

editor = ace.edit('code');

editor.setTheme('ace/theme/monokai');

editor.getSession().setMode('ace/mode/javascript');

editor.setShowPrintMargin(false);

editor.getSession().on('change', function(event) {
  var err;
  try {
    return display(treeify(parse(editor.getValue())));
  } catch (_error) {
    err = _error;
    $('#chain').html();
    $('#tree').css('top', $('#chain').outerHeight());
    return $('#tree').html(err.toString());
  }
});

parse = function(code) {
  return esprima.parse(code, {
    range: true,
    loc: true
  });
};

showChain = function(tree) {
  var chain, cur, item, j, len, ref, variable, vars;
  vars = [];
  cur = tree;
  while (cur != null) {
    ref = cur.root().variables;
    for (j = 0, len = ref.length; j < len; j++) {
      variable = ref[j];
      if (!(((function() {
        var k, len1, results;
        results = [];
        for (k = 0, len1 = vars.length; k < len1; k++) {
          item = vars[k];
          if (item.name === variable.name) {
            results.push(item.name);
          }
        }
        return results;
      })()).length > 0)) {
        vars.push(variable);
      }
    }
    cur = cur.parent();
  }
  chain = $('#chain').html('');
  $.each(vars, function(index, variable) {
    return item = $('<li>').addClass('variable').text(variable.name).on('hover', function(event) {
      switch (event.type) {
        case 'mouseenter':
          return select(variable.loc);
        case 'mouseleave':
          return deselect();
      }
    }).appendTo(chain);
  });
  return $('#tree').css('top', chain.outerHeight());
};

select = function(loc) {
  var a, b, c, d, ref, ref1;
  (ref = loc.start, a = ref.line, b = ref.column), (ref1 = loc.end, c = ref1.line, d = ref1.column);
  return editor.getSelection().setSelectionRange(new Range(a - 1, b, c - 1, d));
};

deselect = function() {
  return editor.clearSelection();
};

display = function(data) {
  var render;
  render = function(tree, nesting) {
    var child, j, len, ref, scope, variables;
    if (nesting == null) {
      nesting = 0;
    }
    scope = $('<div>').addClass('scope').addClass("nested-" + nesting).on('click', function(event) {
      event.stopPropagation();
      return showChain(tree);
    });
    if (tree.root().variables.length) {
      variables = $('<ul>').addClass('variables').appendTo(scope);
      $.each(tree.root().variables, function(index, variable) {
        return $('<li>').addClass('variable').text(variable.name).on('hover', function(event) {
          switch (event.type) {
            case 'mouseenter':
              return select(variable.loc);
            case 'mouseleave':
              return deselect();
          }
        }).appendTo(variables);
      });
    }
    ref = tree._children;
    for (j = 0, len = ref.length; j < len; j++) {
      child = ref[j];
      scope.append(render(child, nesting + 1));
    }
    return scope;
  };
  $('#chain').html('');
  $('#tree').css('top', $('#chain').outerHeight());
  return $('#tree').html(render(data));
};

Syntax = {
  ArrayExpression: ["elements"],
  AssignmentExpression: ["left", "right"],
  BinaryExpression: ["left", "right"],
  BlockStatement: ["body"],
  BreakStatement: ["label"],
  CallExpression: ["callee", "arguments"],
  CatchClause: ["param", "guard", "body"],
  ConditionalExpression: ["test", "alternate", "consequent"],
  ContinueStatement: ["label"],
  DebuggerStatement: [],
  DoWhileStatement: ["init", "test", "update", "body"],
  EmptyStatement: [],
  ExpressionStatement: ["expression"],
  ForInStatement: ["left", "right", "body"],
  ForStatement: ['init', 'test', 'update', "body"],
  FunctionDeclaration: ["id", "params", "defaults", "rest", "body"],
  FunctionExpression: ["id", "params", "defaults", "rest", "body"],
  Identifier: [],
  IfStatement: ["test", "consequent", "alternate"],
  LabeledStatement: ["label", "body"],
  Literal: [],
  LogicalExpression: ["left", "right"],
  MemberExpression: ["object", "property"],
  NewExpression: ["callee", "arguments"],
  ObjectExpression: ["properties"],
  Pattern: [],
  Program: ["body"],
  ReturnStatement: ["argument"],
  SequenceExpression: ["expressions"],
  SwitchCase: ["test", "consequent"],
  SwitchStatement: ["discriminant", "cases"],
  ThisExpression: [],
  ThrowStatement: ["argument"],
  TryStatement: ["block", "handler", "guardedHandlers", "finalizer"],
  UnaryExpression: ["argument"],
  UpdateExpression: ["argument"],
  VariableDeclaration: ["declarations"],
  VariableDeclarator: ["init"],
  WhileStatement: ["test", "body"],
  WithStatement: ["object", "body"]
};

Scope = (function() {
  function Scope(loc1) {
    this.loc = loc1;
    if (this.loc == null) {
      this.loc = {
        start: {
          column: 0,
          line: 0
        },
        end: {
          column: 0,
          line: 0
        }
      };
    }
    this.range = [this.loc.start.line, this.loc.start.column, this.loc.end.line, this.loc.end.column];
    this.variables = [];
  }

  Scope.prototype.add = function(variable) {
    if (!(variable instanceof Variable)) {
      throw 'Variable must be an instance of Variable';
    }
    return this.variables.push(variable);
  };

  Scope.prototype.has = function(id) {
    var variable;
    return ((function() {
      var j, len, ref, results;
      ref = this.variables;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        variable = ref[j];
        if (variable.name === id) {
          results.push(variable.name);
        }
      }
      return results;
    }).call(this)).length > 0;
  };

  return Scope;

})();

Variable = (function() {
  function Variable(name, loc1) {
    this.name = name;
    this.loc = loc1;
    if (this.loc == null) {
      this.loc = {
        start: {
          column: 0,
          line: 0
        },
        end: {
          column: 0,
          line: 0
        }
      };
    }
    this.range = [this.loc.start.line, this.loc.start.column, this.loc.end.line, this.loc.end.column];
  }

  return Variable;

})();

treeify = function(block, scope, declaration) {
  var el, j, k, l, len, len1, len2, local, prop, ref, ref1;
  if (!block) {
    return scope;
  }
  if (block instanceof Array) {
    for (j = 0, len = block.length; j < len; j++) {
      el = block[j];
      treeify(el, scope, declaration);
    }
    return scope;
  }
  switch (block.type) {
    case 'Identifier':
      if (declaration) {
        if (!scope.root().has(block.name)) {
          scope.root().add(new Variable(block.name, block.loc));
        } else {
          console.log('Variable %s already defined', block.name);
        }
      }
      break;
    case 'FunctionDeclaration':
    case 'FunctionExpression':
      local = new Tree(scope, new Scope(block.loc));
      treeify(block.id, scope);
      treeify(block.params, local, true);
      treeify(block.defaults, local);
      treeify(block.rest, local, true);
      treeify(block.body, local);
      scope.add(local);
      break;
    case 'ObjectExpression':
      ref = block.properties;
      for (k = 0, len1 = ref.length; k < len1; k++) {
        prop = ref[k];
        treeify(prop.value, scope);
      }
      break;
    case 'Program':
      scope = new Tree(null, new Scope);
      treeify(block.body, scope);
      break;
    case 'VariableDeclarator':
      treeify(block.id, scope, true);
      treeify(block.init, scope);
      break;
    default:
      if (Syntax.hasOwnProperty(block.type)) {
        ref1 = Syntax[block.type];
        for (l = 0, len2 = ref1.length; l < len2; l++) {
          prop = ref1[l];
          treeify(block[prop], scope);
        }
      } else {

      }
  }
  return scope;
};

// ---
// generated by coffee-script 1.9.2